import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import path from 'path';
import { fileURLToPath } from 'url';

class RectBounds {
  constructor(x1, x2, y1, y2) {
    this.x1 = x1; this.x2 = x2;
    this.y1 = y1; this.y2 = y2;
  }
}

class QuadTree {
  constructor(bounds, level = 0, max = 10) {
    this.bounds = bounds;
    this.level = level;
    this.max = max;
    this.items = [];
  }
  insert(x, y, r, obj) { this.items.push(obj); }
  query(cx, cy, radius) {
    const r2 = radius * radius;
    return this.items.filter(it => {
      const dx = it.x - cx, dy = it.y - cy;
      return dx * dx + dy * dy <= r2;
    });
  }
  queryAll() { return this.items; }
  removeById(id) { this.items = this.items.filter(f => f.id !== id); }
}

QuadTree.RectBounds = RectBounds;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
// ========== START SERVER ==========
const PORT = process.env.PORT || 3001;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server ready on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, '..', 'public')));

// ============ CONFIG ============
const MAP_W = 1000;
const MAP_H = 1000;
const MAP_SIZE = 500;
const MAP_EF = MAP_SIZE * 1.02;
const AVAILABLE_SKINS = [32, 35, 33, 34, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 80, 81, 82, 83, 84, 85, 86, 87];

const PLAYER_SPEED = 7;
const HASTE_SPEED = 11;
const HASTE_SPEED_ABILITY = 13;
const TURN_RATE_BASE = 8;
const TURN_RATE_FLEX = 18;

const FOOD_TARGET = 9000;
const FOOD_SPAWN_INTERVAL_MS = 5;
const FOOD_SPAWN_BATCH = 5000;

const ABILITY_SKIN_BASE = 80;
const ABILITY_TYPE_COUNT = 6;
const ABILITY_SPAWN_CHANCE = 0.08;
const ABILITY_DURATION_MS = 40000;

const ABILITY_VELOCITY_TYPE = 0;
const ABILITY_FLEXIBLE_TYPE = 1;
const ABILITY_MAGNET_TYPE = 2;
const ABILITY_X2_TYPE = 3;
const ABILITY_X5_TYPE = 4;
const ABILITY_X10_TYPE = 5;

function abilityTypeFromSkin(skin) {
  const s = (skin | 0) - ABILITY_SKIN_BASE;
  // Ability food skin artwork order in this client build appears shifted.
  // Observed mismatches:
  // - Magnet shows as x2
  // - x5 shows as x10
  // - Zigzag shows as Magnet
  // - Speed shows as Zigzag
  // This means the ability-food skins map like:
  // 80 -> x10, 81 -> Speed, 82 -> Zigzag/Flex, 83 -> Magnet, 84 -> x2, 85 -> x5
  if (s < 0 || s >= ABILITY_TYPE_COUNT) return -1;
  const map = [
    ABILITY_X10_TYPE,
    ABILITY_VELOCITY_TYPE,
    ABILITY_FLEXIBLE_TYPE,
    ABILITY_MAGNET_TYPE,
    ABILITY_X2_TYPE,
    ABILITY_X5_TYPE,
  ];
  return map[s] ?? -1;
}

const SERVER_TICK_MS = 50;
const PROTO_AF = 0;

const NORMAL_FOOD_ZONE_MARGIN = 80;

const HUGE_HOLLOW_WEIGHT = 500000;
const HUGE_HOLLOW_FACTOR = 0.55;
const WHEEL_DOWN_MS = 1400;
const DEATH_DISCONNECT_MS = 4000;

function normalizeAngle(a) {
  const TAU = Math.PI * 2;
  let x = a;
  while (x <= -Math.PI) x += TAU;
  while (x > Math.PI) x -= TAU;
  return x;
}

function approachAngle(current, target, maxDelta) {
  const c = typeof current === 'number' ? current : 0;
  const t = typeof target === 'number' ? target : 0;
  const md = Math.max(0, maxDelta || 0);
  let d = normalizeAngle(t - c);
  if (d > md) d = md;
  if (d < -md) d = -md;
  return c + d;
}

function getRandomSpawnPoint() {
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * MAP_SIZE * 0.8;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  return { x, y };
}

function calcRadiusFromWeight(w) {
  const v180 = Math.sqrt(Math.pow(w * 5, 0.707106781186548) * 4 + 25);
  return (5 + v180 * 0.9) * 0.025;
}

function isHeadshot(attacker, victim, dist) {
  if (!attacker || !victim) return false;
  if (attacker.dead || victim.dead) return false;
  if (!attacker.haste) return false;

  const aR = Math.max(0.001, attacker.radius || 0);
  const bR = Math.max(0.001, victim.radius || 0);
  if (dist > aR + bR) return false;

  const dx = victim.x - attacker.x;
  const dy = victim.y - attacker.y;
  const inv = 1 / (Math.hypot(dx, dy) || 1);
  const tx = dx * inv;
  const ty = dy * inv;

  const a = typeof attacker.angle === 'number' ? attacker.angle : 0;
  const ax = Math.cos(a);
  const ay = Math.sin(a);
  const dot = ax * tx + ay * ty;
  return dot > 0.4;
}

function calcPointCountFromWeight(w) {
  const ww = Math.max(0, Number(w) || 0);
  const v = Math.sqrt(Math.pow(ww * 5, 0.707106781186548) * 4 + 25);
  const c = Math.min(200, Math.max(3, (v - 5) * 5 + 1));
  return Math.floor(c);
}

function clamp(n, lo, hi) {
  if (n < lo) return lo;
  if (n > hi) return hi;
  return n;
}

function clampInsideZone(x, y, margin) {
  const m = Math.max(0, margin || 0);
  const maxR = Math.max(1, MAP_SIZE - m);
  const d = Math.hypot(x, y);
  if (d <= maxR) return { x, y };
  const s = maxR / (d || 1);
  return { x: x * s, y: y * s };
}

function encodeCoord3(v) {
  const clamped = Math.max(-10000, Math.min(10000, v));
  let n = Math.round((clamped / 10000 + 1) * 8388608);
  n = Math.max(0, Math.min(0xffffff, n));
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function writeVarInt(dv, o, value) {
  let v = value >>> 0;
  if (v < 128) {
    dv.setUint8(o++, v);
    return o;
  }

  const groups = [];
  while (v > 0) {
    groups.push(v & 127);
    v >>>= 7;
  }

  for (let i = groups.length - 1; i >= 0; i--) {
    const isLast = i === 0;
    dv.setUint8(o++, groups[i] | (isLast ? 0 : 128));
  }
  return o;
}

function varIntLen(value) {
  let v = value >>> 0;
  let len = 1;
  while (v >= 128) {
    len++;
    v >>>= 7;
  }
  return len;
}

function packCoord16(v, range) {
  const r = Math.max(1, range || 1);
  const clamped = Math.max(-r, Math.min(r, v));
  const n = Math.round((clamped / r + 1) * 32768);
  return Math.max(0, Math.min(65535, n));
}

function makeFoodIdFromXY(x, y) {
  const hi = packCoord16(y, MAP_EF);
  const lo = packCoord16(x, MAP_EF);
  return (hi << 16) | lo;
}

const FOOD_VIS_RADIUS = 45;
const FOOD_HIDE_RADIUS = 60;
const PLAYER_VIS_RADIUS = 220;
const PLAYER_HIDE_RADIUS = 260;

const INIT_SG_LIMIT = FOOD_TARGET;
const MAX_SG_PER_TICK = 300;
const MAX_TG_PER_TICK = 600;
const MAX_EATEN_EVENTS = 6000;
let foodEatenSeq = 0;

const foodEatenEvents = [];

let deathSeq = 0;
const MAX_DEATH_EVENTS = 4000;
const deathEvents = [];

function dist2(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

// ============ GLOBAL STATE ============

const foods = new Map();
const foodQuad = new QuadTree(new QuadTree.RectBounds(-MAP_SIZE, MAP_SIZE, -MAP_SIZE, MAP_SIZE), 0, 10);
const players = new Map();

// ============ WEBSOCKET SERVER ============

const wss = new WebSocketServer({ server, path: '/wormy' });

// ============ FOOD CLASS ============

class Food {
  constructor(id, x, y, radius, skin, value) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = radius;
    this.skin = skin;
    this.value = typeof value === 'number' ? value : radius;
  }
}

function randFoodId() {
  return Date.now() + Math.floor(Math.random() * 1e6);
}

function spawnFood() {
  const a = Math.random() * Math.PI * 2;
  let d = Math.random() + Math.random();
  d = MAP_SIZE * (d > 1 ? 2 - d : d);
  const isAbility = Math.random() < ABILITY_SPAWN_CHANCE;
  const skin = isAbility
    ? ABILITY_SKIN_BASE + Math.floor(Math.random() * ABILITY_TYPE_COUNT)
    : Math.floor(Math.random() * 80);
  const fx = d * Math.cos(a);
  const fy = d * Math.sin(a);
  const radius = isAbility ? 1.9 + Math.random() * 0.9 : 0.8 + Math.random() * 1.1;
  const pos = isAbility ? { x: fx, y: fy } : clampInsideZone(fx, fy, NORMAL_FOOD_ZONE_MARGIN);
  return spawnFoodAt(pos.x, pos.y, radius, skin);
}

function spawnFoodAt(x, y, radius, skin, value) {
  let id = makeFoodIdFromXY(x, y);
  let tries = 0;
  while (foods.has(id) && tries++ < 120) {
    const step = 2 + tries * 0.35;
    x = x + (Math.random() - 0.5) * step;
    y = y + (Math.random() - 0.5) * step;
    const pos = clampInsideZone(x, y, 0);
    x = pos.x;
    y = pos.y;
    id = makeFoodIdFromXY(x, y);
  }
  if (foods.has(id)) {
    const a = Math.random() * Math.PI * 2;
    const d = 20 + Math.random() * 40;
    const pos = clampInsideZone(x + Math.cos(a) * d, y + Math.sin(a) * d, 0);
    x = pos.x;
    y = pos.y;
    id = makeFoodIdFromXY(x, y);
  }
  const f = new Food(id, x, y, radius, skin, value);
  foods.set(f.id, f);
  foodQuad.insert(f.x, f.y, f.r, f);
  return f;
}

function spawnDeathTrail(p, count) {
  const w = Math.max(0, Number(p.weight) || 0);
  if (!Number.isFinite(w) || w <= 0) return;

  const skin = typeof p.skin === 'number' ? p.skin : Math.floor(Math.random() * 80);
  const total = w;

  const eatenCount = Math.max(0, (p.eatenCount | 0) || 0);
  let pieces = eatenCount > 0 ? eatenCount : (count | 0) || 0;
  pieces = clamp(pieces, 1, 600);

  const spread = clamp(0.8 + Math.sqrt(total) / 5000, 0.8, 1.8);
  const baseLen = clamp(14 + Math.sqrt(total) * 0.05, 14, 40);

  const visualR = clamp(0.9 + Math.sqrt(total) / 180, 0.9, 10.0);

  const perValue = total / pieces;

  const angle = typeof p.angle === 'number' ? p.angle : 0;
  const cs = Math.cos(angle);
  const sn = Math.sin(angle);

  let remaining = total;
  for (let i = 0; i < pieces; i++) {
    const t = pieces <= 1 ? 0 : i / (pieces - 1);
    const along = t * baseLen;

    const side = (Math.random() - 0.5) * spread;
    const wx = p.x - cs * along + -sn * side;
    const wy = p.y - sn * along + cs * side;
    const pos = clampInsideZone(wx, wy, 0);
    const v = i === pieces - 1 ? remaining : perValue;
    remaining -= v;
    const vr = clamp(visualR * (0.85 + Math.random() * 0.3), 0.4, 9999);
    spawnFoodAt(pos.x, pos.y, vr, skin, v);
  }
}

function killPlayer(p, now, dropLoot, killerId, headshot) {
  if (!p || p.dead) return;
  const ts = typeof now === 'number' ? now : Date.now();

  deathSeq++;
  deathEvents.push({
    seq: deathSeq,
    victimId: p.id,
    killerId: (killerId | 0) || 0,
    headshot: !!headshot,
    x: p.x,
    y: p.y,
  });
  if (deathEvents.length > MAX_DEATH_EVENTS) {
    deathEvents.splice(0, deathEvents.length - MAX_DEATH_EVENTS);
  }

  p.deathX = p.x;
  p.deathY = p.y;
  p.spectateId = (killerId | 0) || 0;
  p.spectateSwitchAt = ts + 1200;
  p.dead = true;
  p.abilities = {};
  p._trail = [];
  p.deathDisconnectAt = ts + DEATH_DISCONNECT_MS;
  if (dropLoot) spawnDeathTrail(p, 220);
}

function updatePlayerTrail(p) {
  if (!p || p.dead) return;
  const step = 6;
  const maxPoints = clampInt(calcPointCountFromWeight(p.weight), 3, 200);
  p._trail ||= [];
  const tr = p._trail;

  if (tr.length === 0) {
    tr.push({ x: p.x, y: p.y });
    return;
  }

  const last = tr[tr.length - 1];
  const dx = p.x - last.x;
  const dy = p.y - last.y;
  if (dx * dx + dy * dy < step * step) return;

  tr.push({ x: p.x, y: p.y });
  if (tr.length > maxPoints) tr.splice(0, tr.length - maxPoints);
}

function headHitsBody(headP, bodyP) {
  if (!headP || !bodyP) return false;
  if (headP.dead || bodyP.dead) return false;
  if (headP.id === bodyP.id) return false;

  const tr = Array.isArray(bodyP._trail) ? bodyP._trail : null;
  if (!tr || tr.length < 6) return false;

  const hx = headP.x;
  const hy = headP.y;
  const hr = Math.max(0.001, headP.radius || 0);
  const br = Math.max(0.001, bodyP.radius || 0);
  const hitR = (hr + br * 0.5);
  const hitR2 = hitR * hitR;

  const distPointToSeg2 = (px, py, ax, ay, bx, by) => {
    const abx = bx - ax;
    const aby = by - ay;
    const apx = px - ax;
    const apy = py - ay;
    const ab2 = abx * abx + aby * aby;
    if (ab2 <= 1e-9) {
      const dx = px - ax;
      const dy = py - ay;
      return dx * dx + dy * dy;
    }
    let t = (apx * abx + apy * aby) / ab2;
    if (t < 0) t = 0;
    else if (t > 1) t = 1;
    const cx = ax + abx * t;
    const cy = ay + aby * t;
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy;
  };

  // Skip first few points near the other head to avoid interfering with head-to-head logic.
  for (let i = 6; i < tr.length; i++) {
    const a = tr[i - 1];
    const b = tr[i];
    if (!a || !b) continue;
    if (distPointToSeg2(hx, hy, a.x, a.y, b.x, b.y) <= hitR2) return true;
  }
  return false;
}
//this loot for ea
// Prefill the map with loot so players can eat immediately
while (foods.size < FOOD_TARGET) {
  spawnFood();
}

// ============ NETWORK FUNCTIONS ============

function sendAbilityPickup(ws, type, pct) {
  if (!ws || ws.readyState !== 1) return;
  const buf = new ArrayBuffer(1 + 1 + 1);
  const dv = new DataView(buf);
  dv.setUint8(0, 6);
  dv.setUint8(1, Math.max(0, Math.min(255, type | 0)));
  dv.setUint8(2, Math.max(0, Math.min(100, pct | 0)));
  ws.send(buf);
}

function sendHandshake0(ws, p) {
  if (!ws || ws.readyState !== 1) return;
  const buf = new ArrayBuffer(16);
  const dv = new DataView(buf);
  dv.setUint8(0, 0);
  dv.setInt8(1, PROTO_AF);
  dv.setInt16(2, p.id);
  dv.setFloat32(4, MAP_SIZE);
  dv.setFloat32(8, 4000);
  dv.setFloat32(12, 7000);
  ws.send(buf);
}

function sendMiniMapMask(ws) {
  const buf = new Uint8Array(1 + 628);
  buf[0] = 2;
  buf.fill(0x00, 1);
  ws.send(buf);
}

const MINIMAP_A9 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];

function clampInt(n, lo, hi) {
  return n < lo ? lo : n > hi ? hi : n;
}

function worldToMini(v) {
  const t = (v / MAP_SIZE + 1) * 0.5;
  return clampInt(Math.round(t * 79), 0, 79);
}

function markMiniThick(grid, mx, my) {
  for (let oy = -1; oy <= 1; oy++) {
    const yy = my + oy;
    if (yy < 0 || yy >= 80) continue;
    const row = grid[yy];
    for (let ox = -1; ox <= 1; ox++) {
      const xx = mx + ox;
      if (xx < 0 || xx >= 80) continue;
      row[xx] = 1;
    }
  }
}

function buildMiniMapMaskForAllPlayers() {
  const grid = Array.from({ length: 80 }, () => new Uint8Array(80));

  for (const p of players.values()) {
    if (!p || p.dead) continue;

    const pc = calcPointCountFromWeight(p.weight);
    if (pc < 30) {
      const mx = worldToMini(p.x);
      const my = worldToMini(p.y);
      markMiniThick(grid, mx, my);
      continue;
    }

    const tr = Array.isArray(p._trail) ? p._trail : null;
    if (tr && tr.length) {
      for (let i = 0; i < tr.length; i++) {
        const pt = tr[i];
        if (!pt) continue;
        const mx = worldToMini(pt.x);
        const my = worldToMini(pt.y);
        markMiniThick(grid, mx, my);
      }
    } else {
      const mx = worldToMini(p.x);
      const my = worldToMini(p.y);
      markMiniThick(grid, mx, my);
    }
  }

  const buf = new Uint8Array(1 + 628);
  buf[0] = 2;

  let x = MINIMAP_A9[0];
  let xEnd = 80 - x;
  let y = 0;
  let bit = 0;
  let byteIndex = 1;
  let cur = 0;

  while (byteIndex < buf.length && y < 80) {
    if (grid[y][x]) cur |= 1 << bit;
    bit++;

    if (bit === 8) {
      buf[byteIndex++] = cur;
      cur = 0;
      bit = 0;
      if (byteIndex >= buf.length) break;
    }

    x++;
    if (x >= xEnd) {
      y++;
      if (y >= 80) break;
      x = MINIMAP_A9[y];
      xEnd = 80 - x;
    }
  }

  if (byteIndex < buf.length) buf[byteIndex] = cur;
  return buf;
}

function broadcastMiniMap() {
  const buf = buildMiniMapMaskForAllPlayers();
  wss.clients.forEach(ws => {
    if (ws.readyState !== 1) return;
    if (!ws._joined) return;
    ws.send(buf);
  });
}

function writePlayerConfig(dv, o, p) {
  const name = (p.name || 'Player').slice(0, 32);
  const nameBytes = name.length;

  dv.setInt16(o, p.id);
  o += 2;
  dv.setInt16(o, p.skin);
  o += 2;
  dv.setInt16(o, 0);
  o += 2;
  dv.setInt16(o, 0);
  o += 2;
  dv.setInt16(o, 0);
  o += 2;
  dv.setInt16(o, 0);
  o += 2;
  dv.setUint8(o++, nameBytes);
  for (let i = 0; i < nameBytes; i++) {
    dv.setInt16(o, name.charCodeAt(i));
    o += 2;
  }
  return o;
}

function writeSg(dv, o, f) {
  dv.setInt32(o, f.id);
  o += 4;
  const ng = encodeCoord3(f.r);
  dv.setUint8(o++, ng[0]);
  dv.setUint8(o++, ng[1]);
  dv.setUint8(o++, ng[2]);
  dv.setUint8(o++, f.skin & 255);
  return o;
}

function writePlayerSegmentsSimple(dv, o, p, pointCount) {
  dv.setInt16(o, p.id);
  o += 2;
  dv.setFloat32(o, p.weight);
  o += 4;
  o = writeVarInt(dv, o, pointCount);

  const tr = Array.isArray(p._trail) ? p._trail : null;
  const step = 6;

  for (let i = 0; i < pointCount; i++) {
    let px, py;
    
    if (tr && tr.length > 0) {
      // Use actual trail points for realistic body movement
      // Map segment index to trail index (head is at end of trail)
      const trailIndex = Math.min(tr.length - 1, Math.floor(i / 2)); // Every 2 segments use one trail point
      const pt = tr[tr.length - 1 - trailIndex];
      if (pt) {
        px = pt.x;
        py = pt.y;
      } else {
        // Fallback to linear calculation if trail point missing
        const a = typeof p.angle === 'number' ? p.angle : 0;
        const cs = Math.cos(a);
        const sn = Math.sin(a);
        px = p.x - cs * (i * step);
        py = p.y - sn * (i * step);
      }
    } else {
      // Fallback to linear calculation if no trail
      const a = typeof p.angle === 'number' ? p.angle : 0;
      const cs = Math.cos(a);
      const sn = Math.sin(a);
      px = p.x - cs * (i * step);
      py = p.y - sn * (i * step);
    }

    const bx = encodeCoord3(px);
    const by = encodeCoord3(py);
    dv.setUint8(o++, bx[0]);
    dv.setUint8(o++, bx[1]);
    dv.setUint8(o++, bx[2]);
    dv.setUint8(o++, by[0]);
    dv.setUint8(o++, by[1]);
    dv.setUint8(o++, by[2]);
  }
  return o;
}

function isAbilityActive(p, type, now) {
  const ts = typeof now === 'number' ? now : Date.now();
  const a = p && p.abilities;
  if (!a) return false;
  const exp = Number(a[type]) || 0;
  if (!exp) return false;
  if (exp <= ts) {
    delete a[type];
    return false;
  }
  return true;
}

function pruneAbilities(p, now) {
  const ts = typeof now === 'number' ? now : Date.now();
  const a = p && p.abilities;
  if (!a) return;
  for (const k of Object.keys(a)) {
    const exp = Number(a[k]) || 0;
    if (!exp || exp <= ts) delete a[k];
  }
}

function getFoodMultiplier(p, now) {
  const ts = typeof now === 'number' ? now : Date.now();
  if (isAbilityActive(p, ABILITY_X10_TYPE, ts)) return 10;
  if (isAbilityActive(p, ABILITY_X5_TYPE, ts)) return 5;
  if (isAbilityActive(p, ABILITY_X2_TYPE, ts)) return 2;
  return 1;
}

function getAbilityList(p, now) {
  const ts = typeof now === 'number' ? now : Date.now();
  const a = p && p.abilities;
  if (!a) return [];
  const out = [];
  for (const k of Object.keys(a)) {
    const t = Number(k) | 0;
    const exp = Number(a[k]) || 0;
    if (!exp) continue;

    if (exp <= ts) {
      delete a[k];
      continue;
    }

    const rem = exp - ts;
    const pct = clampInt(Math.round((rem / ABILITY_DURATION_MS) * 100), 0, 100);
    if (pct > 0) out.push({ t, pct });
  }
  return out;
}

function abilitiesBytes(p, now) {
  const list = getAbilityList(p, now);
  return varIntLen(list.length) + list.length * 2;
}

function writeAbilities(dv, o, p, now) {
  const list = getAbilityList(p, now);
  o = writeVarInt(dv, o, list.length);
  for (const it of list) {
    dv.setUint8(o++, it.t & 255);
    dv.setUint8(o++, clampInt(Math.round(it.pct), 0, 100));
  }
  return o;
}

function writeZg(dv, o, p, now) {
  dv.setInt16(o, p.id);
  o += 2;
  let flags = 0;
  if (p.haste) flags |= 1;

  flags |= 2;
  dv.setUint8(o++, flags);
  dv.setFloat32(o, p.weight);
  o += 4;
  const bx = encodeCoord3(p.x);
  const by = encodeCoord3(p.y);
  dv.setUint8(o++, bx[0]);
  dv.setUint8(o++, bx[1]);
  dv.setUint8(o++, bx[2]);
  dv.setUint8(o++, by[0]);
  dv.setUint8(o++, by[1]);
  dv.setUint8(o++, by[2]);
  o = writeAbilities(dv, o, p, now);
  return o;
}

function writeWg(dv, o, ev) {
  dv.setInt16(o, ev.victimId | 0);
  o += 2;
  let flags = 0;
  if ((ev.killerId | 0) !== 0) flags |= 1;
  if (ev.headshot) flags |= 2;
  dv.setUint8(o++, flags);
  if (flags & 1) {
    dv.setInt16(o, ev.killerId | 0);
    o += 2;
  }
  return o;
}

function sendInitUpdate1(ws, p) {
  if (!ws || ws.readyState !== 1) return;

  const now = Date.now();

  ws._known ||= new Set([p.id]);
  ws._segPointCountSent ||= new Map();
  ws._foodKnown ||= new Set();
  ws._foodEatenSeqSent ||= 0;
  ws._deathSeqSent ||= deathSeq;

  const visibleFoodsAll = foodQuad.query(p.x, p.y, FOOD_VIS_RADIUS);
  const sgFoods = visibleFoodsAll.slice(0, INIT_SG_LIMIT);
  for (const f of sgFoods) ws._foodKnown.add(f.id);

  const sgCount = sgFoods.length;
  const sgBytes = sgCount * (4 + 3 + 1);
  const tgCount = 0;
  const tgBytes = 0;
  const ugCount = 0;
  const ugBytes = 0;

  const allEntities = Array.from(players.values()).filter(pp => pp && !pp.dead);
  const visR2 = PLAYER_VIS_RADIUS * PLAYER_VIS_RADIUS;
  const entities = allEntities.filter(e => dist2(e.x, e.y, p.x, p.y) <= visR2);
  const others = entities.filter(e => e.id !== p.id);

  let vgBytes = 0;
  for (const e of entities) {
    const nameBytes = (e.name || 'Player').slice(0, 32).length;
    vgBytes += 13 + nameBytes * 2;
  }

  const wgCount = 0;
  const wgBytes = 0;
  let xgBytes = 0;
  for (const e of entities) {
    const pc = calcPointCountFromWeight(e.weight);
    xgBytes += 2 + 4 + varIntLen(pc) + pc * 6;
    ws._segPointCountSent.set(e.id, pc);
  }
  const removedIds = [];
  const ygBytes = 0;
  const zgCount = others.length;
  let zgBytes = 0;
  for (const e of others) zgBytes += 2 + 1 + 4 + 6 + abilitiesBytes(e, now);

  const len =
    1 +
    2 +
    varIntLen(sgCount) +
    sgBytes +
    varIntLen(tgCount) +
    tgBytes +
    varIntLen(ugCount) +
    ugBytes +
    varIntLen(entities.length) +
    vgBytes +
    varIntLen(wgCount) +
    wgBytes +
    varIntLen(entities.length) +
    xgBytes +
    varIntLen(removedIds.length) +
    ygBytes +
    varIntLen(zgCount) +
    zgBytes;

  const buf = new ArrayBuffer(len);
  const dv = new DataView(buf);
  let o = 0;

  dv.setUint8(o++, 1);
  dv.setInt16(o, SERVER_TICK_MS);
  o += 2;

  o = writeVarInt(dv, o, sgCount);
  for (const f of sgFoods) o = writeSg(dv, o, f);
  o = writeVarInt(dv, o, tgCount);
  o = writeVarInt(dv, o, ugCount);

  o = writeVarInt(dv, o, entities.length);
  for (const e of entities) o = writePlayerConfig(dv, o, e);

  o = writeVarInt(dv, o, wgCount);

  o = writeVarInt(dv, o, entities.length);
  for (const e of entities) {
    const pc = calcPointCountFromWeight(e.weight);
    o = writePlayerSegmentsSimple(dv, o, e, pc);
  }

  o = writeVarInt(dv, o, removedIds.length);

  o = writeVarInt(dv, o, zgCount);
  for (const e of others) o = writeZg(dv, o, e, now);

  ws._known = new Set(entities.map(e => e.id));
  ws._foodEatenSeqSent = foodEatenSeq;
  ws._deathSeqSent = deathSeq;
  ws.send(buf);
}

function sendUpdate1(ws, p) {
  if (!ws || ws.readyState !== 1) return;
  if (!ws._joined) return;
  if (!p) return;

  const now = Date.now();

  pruneAbilities(p, now);

  if (p.dead) {
    if (!p.deathDisconnectAt || now >= p.deathDisconnectAt) return;
  }

  let camX = p.x;
  let camY = p.y;
  let selfWeight = p.weight;
  let selfHaste = !!p.haste;

  if (p.dead) {
    camX = typeof p.deathX === 'number' ? p.deathX : p.x;
    camY = typeof p.deathY === 'number' ? p.deathY : p.y;
    selfWeight = 0;
    selfHaste = false;
  }

  ws._known ||= new Set([p.id]);
  ws._segPointCountSent ||= new Map();
  ws._foodKnown ||= new Set();
  ws._foodEatenSeqSent ||= 0;
  ws._deathSeqSent ||= 0;

  if (foodEatenEvents.length > 0) {
    const oldest = foodEatenEvents[0].seq;
    if (ws._foodEatenSeqSent < oldest - 1) ws._foodEatenSeqSent = oldest - 1;
  }

  if (deathEvents.length > 0) {
    const oldestD = deathEvents[0].seq;
    if (ws._deathSeqSent < oldestD - 1) ws._deathSeqSent = oldestD - 1;
  }

  const spawnFoodsAll = foodQuad.query(camX, camY, FOOD_VIS_RADIUS);
  const keepFoodsAll = foodQuad.query(camX, camY, FOOD_HIDE_RADIUS);
  const keepFoodIds = new Set();
  for (const f of keepFoodsAll) keepFoodIds.add(f.id);

  const sgFoods = [];
  for (const f of spawnFoodsAll) {
    if (sgFoods.length >= MAX_SG_PER_TICK) break;
    if (!ws._foodKnown.has(f.id)) {
      ws._foodKnown.add(f.id);
      sgFoods.push(f);
    }
  }

  const tgIds = [];
  for (const ev of foodEatenEvents) {
    if (ev.seq <= ws._foodEatenSeqSent) continue;
    tgIds.push(ev.id);
    ws._foodEatenSeqSent = ev.seq;
    if (tgIds.length >= MAX_TG_PER_TICK) break;
  }

  let evictBudget = Math.min(200, MAX_TG_PER_TICK - tgIds.length);
  if (evictBudget > 0 && ws._foodKnown.size > 0) {
    ws._foodEvictSkip ||= 0;
    let skipped = 0;
    let scanned = 0;
    for (const id of ws._foodKnown) {
      if (skipped++ < ws._foodEvictSkip) continue;
      scanned++;
      if (scanned > 400) break;

      if (!foods.has(id)) {
        ws._foodKnown.delete(id);
        continue;
      }

      if (!keepFoodIds.has(id)) {
        tgIds.push(id);
        ws._foodKnown.delete(id);
        if (--evictBudget <= 0) break;
      }
    }
    ws._foodEvictSkip = (ws._foodEvictSkip + scanned) % Math.max(1, ws._foodKnown.size);
  }

  for (const id of tgIds) ws._foodKnown.delete(id);

  const sgCount = sgFoods.length;
  const sgBytes = sgCount * (4 + 3 + 1);
  const tgCount = tgIds.length;
  const tgBytes = tgCount * 4;
  const ugCount = 0;
  const ugBytes = 0;

  const allEntities = Array.from(players.values()).filter(pp => pp && !pp.dead);
  const visR2 = PLAYER_VIS_RADIUS * PLAYER_VIS_RADIUS;
  const hideR2 = PLAYER_HIDE_RADIUS * PLAYER_HIDE_RADIUS;
  const spawnEntities = allEntities.filter(e => dist2(e.x, e.y, camX, camY) <= visR2);
  const entities = allEntities.filter(e => dist2(e.x, e.y, camX, camY) <= hideR2 && e.id !== p.id);

  const newPlayers = [];
  for (const e of spawnEntities) {
    if (e.id !== p.id && !ws._known.has(e.id)) newPlayers.push(e);
  }

  const removedIds = [];
  for (const id of ws._known) {
    if (id === p.id) continue;
    const knownP = players.get(id);
    if (!knownP || knownP.dead) {
      removedIds.push(id);
      continue;
    }
    if (dist2(knownP.x, knownP.y, camX, camY) > hideR2) removedIds.push(id);
  }

  let vgBytes = 0;
  for (const e of newPlayers) {
    const nameBytes = (e.name || 'Player').slice(0, 32).length;
    vgBytes += 13 + nameBytes * 2;
  }

  const segPlayersById = new Map();

  for (const e of newPlayers) {
    if (!e || e.dead) continue;
    if (e.id === p.id) continue;
    if (!ws._known.has(e.id)) continue;
    segPlayersById.set(e.id, e);
    ws._segPointCountSent.set(e.id, calcPointCountFromWeight(e.weight));
  }

  for (const e of spawnEntities) {
    if (!e || e.dead) continue;
    if (e.id === p.id) continue;
    if (!ws._known.has(e.id)) continue;
    const pc = calcPointCountFromWeight(e.weight);
    const prevPc = ws._segPointCountSent.get(e.id);
    if (prevPc == null || pc !== prevPc) {
      segPlayersById.set(e.id, e);
      ws._segPointCountSent.set(e.id, pc);
    }
  }

  const segPlayers = Array.from(segPlayersById.values());

  let xgBytes = 0;
  for (const e of segPlayers) {
    const pc = calcPointCountFromWeight(e.weight);
    xgBytes += 2 + 4 + varIntLen(pc) + pc * 6;
  }
  const ygBytes = removedIds.length * 2;
  const zgCount = entities.length;
  let zgBytes = 0;
  for (const e of entities) zgBytes += 2 + 1 + 4 + 6 + abilitiesBytes(e, now);
  const agBytes = 1 + 4 + 6 + abilitiesBytes(p, now);

  const wgEvents = [];
  if (deathEvents.length > 0) {
    for (const ev of deathEvents) {
      if (ev.seq <= ws._deathSeqSent) continue;
      ws._deathSeqSent = ev.seq;

      const killerId = (ev.killerId | 0) || 0;
      const victimId = (ev.victimId | 0) || 0;
      const relevant =
        killerId === p.id ||
        victimId === p.id ||
        (killerId !== 0 && ws._known.has(killerId)) ||
        (victimId !== 0 && ws._known.has(victimId)) ||
        dist2(ev.x, ev.y, camX, camY) <= hideR2;

      if (!relevant) continue;
      wgEvents.push(ev);
      if (wgEvents.length >= 120) break;
    }
  }

  const wgCount = wgEvents.length;
  let wgBytes = 0;
  for (const ev of wgEvents) {
    wgBytes += 2 + 1 + (((ev.killerId | 0) !== 0) ? 2 : 0);
  }

  const len =
    1 +
    2 +
    varIntLen(sgCount) +
    sgBytes +
    varIntLen(tgCount) +
    tgBytes +
    varIntLen(ugCount) +
    ugBytes +
    varIntLen(newPlayers.length) +
    vgBytes +
    varIntLen(wgCount) +
    wgBytes +
    varIntLen(segPlayers.length) +
    xgBytes +
    varIntLen(removedIds.length) +
    ygBytes +
    varIntLen(zgCount) +
    zgBytes +
    agBytes;

  const buf = new ArrayBuffer(len);
  const dv = new DataView(buf);
  let o = 0;

  dv.setUint8(o++, 1);
  dv.setInt16(o, SERVER_TICK_MS);
  o += 2;

  o = writeVarInt(dv, o, sgCount);
  for (const f of sgFoods) o = writeSg(dv, o, f);
  o = writeVarInt(dv, o, tgCount);
  for (const id of tgIds) {
    dv.setInt32(o, id);
    o += 4;
  }
  o = writeVarInt(dv, o, ugCount);

  o = writeVarInt(dv, o, newPlayers.length);
  for (const e of newPlayers) {
    o = writePlayerConfig(dv, o, e);
    ws._known.add(e.id);
  }

  o = writeVarInt(dv, o, wgCount);

  for (const ev of wgEvents) {
    o = writeWg(dv, o, ev);
  }

  o = writeVarInt(dv, o, segPlayers.length);
  for (const e of segPlayers) {
    const pc = calcPointCountFromWeight(e.weight);
    o = writePlayerSegmentsSimple(dv, o, e, pc);
  }

  o = writeVarInt(dv, o, removedIds.length);
  for (const id of removedIds) {
    dv.setInt16(o, id);
    o += 2;
    ws._known.delete(id);
    ws._segPointCountSent.delete(id);
  }

  o = writeVarInt(dv, o, zgCount);
  for (const e of entities) {
    o = writeZg(dv, o, e, now);
  }

  let flags = 0;
  if (selfHaste) flags |= 1;
  flags |= 2;
  dv.setUint8(o++, flags);
  dv.setFloat32(o, selfWeight);
  o += 4;
  const bx = encodeCoord3(camX);
  const by = encodeCoord3(camY);
  dv.setUint8(o++, bx[0]);
  dv.setUint8(o++, bx[1]);
  dv.setUint8(o++, bx[2]);
  dv.setUint8(o++, by[0]);
  dv.setUint8(o++, by[1]);
  dv.setUint8(o++, by[2]);
  o = writeAbilities(dv, o, p, now);

  for (const id of removedIds) ws._known.delete(id);
  for (const e of newPlayers) ws._known.add(e.id);
  ws.send(buf);
}

function sendLeaderboard3(ws) {
  if (!ws || ws.readyState !== 1) return;
  if (!ws._joined) return;

  const entries = Array.from(players.values()).filter(pp => pp && !pp.dead);
  entries.sort((a, b) => (b.score || 0) - (a.score || 0));
  const list = entries.slice(0, 10);

  const buf = new ArrayBuffer(1 + 2 + 2 + 1 + list.length * (2 + 4));
  const dv = new DataView(buf);
  let o = 0;
  dv.setUint8(o++, 3);
  dv.setInt16(o, Math.min(0x7fff, entries.length));
  o += 2;
  dv.setInt16(o, 1);
  o += 2;
  dv.setUint8(o++, list.length);
  for (const e of list) {
    dv.setInt16(o, e.id);
    o += 2;
    dv.setFloat32(o, e.score || 0);
    o += 4;
  }
  ws.send(buf);
}

let lastSimTs = Date.now();
setInterval(() => {
  const now = Date.now();

  const dt = Math.min(0.05, Math.max(0.001, (now - lastSimTs) / 1000));
  lastSimTs = now;

  // Movement + food pickup
  players.forEach(p => {
    if (!p || p.dead) return;

    p.prevX = p.x;
    p.prevY = p.y;

    pruneAbilities(p, now);

    if (typeof p.targetAngle === 'number') {
      const flex = isAbilityActive(p, ABILITY_FLEXIBLE_TYPE, now);
      const turnRateBase = flex ? TURN_RATE_FLEX : TURN_RATE_BASE;
      const w = Math.max(0, Number(p.weight) || 0);
      const turnMul = clamp(1 / (1 + Math.sqrt(w) * 0.03), 0.35, 1);

      const prevTa = typeof p._prevTargetAngle === 'number' ? p._prevTargetAngle : p.targetAngle;
      p._prevTargetAngle = p.targetAngle;
      const dTa = Math.abs(normalizeAngle(p.targetAngle - prevTa));

      let wiggleMul = 1;
      if (flex) {
        const rate = dTa / Math.max(dt, 1e-3);
        const t = clamp((rate - 6) / 14, 0, 1);
        wiggleMul = 1 + t * 0.6;
      }

      p.angle = approachAngle(p.angle, p.targetAngle, turnRateBase * turnMul * wiggleMul * dt);
    }

    const wheelDownActive = typeof p.wheelDownUntil === 'number' && now < p.wheelDownUntil;
    const wheelMul = wheelDownActive ? 0.55 : 1;
    const velocity = isAbilityActive(p, ABILITY_VELOCITY_TYPE, now);
    const hasteSp = velocity ? HASTE_SPEED_ABILITY : HASTE_SPEED;
    const sp = (p.haste ? hasteSp : PLAYER_SPEED) * wheelMul * dt;
    p.x += Math.cos(p.angle) * sp;
    p.y += Math.sin(p.angle) * sp;

    if (Math.hypot(p.x, p.y) > MAP_SIZE) {
      killPlayer(p, now, false);
      return;
    }

    const magnet = isAbilityActive(p, ABILITY_MAGNET_TYPE, now);
    const MAGNET_RANGE = 55;
    const MAGNET_CONE_COS = 0.35;
    const magnetRange = magnet ? MAGNET_RANGE : 0;

    const maxPickupR = p.radius + (magnet ? magnetRange : 3);
    const near = foodQuad.query(p.x, p.y, maxPickupR);

    const fx = Math.cos(p.angle);
    const fy = Math.sin(p.angle);
    let magnetEaten = 0;
    const magnetCap = 10;

    for (const f of near) {
      const dx = f.x - p.x;
      const dy = f.y - p.y;
      const rr = p.radius + f.r;
      const d2 = dx * dx + dy * dy;

      let canEat = d2 <= rr * rr;

      if (!canEat && magnet && magnetEaten < magnetCap) {
        const d = Math.sqrt(d2);
        if (d > 1e-6 && d <= magnetRange) {
          const dot = (dx / d) * fx + (dy / d) * fy;
          if (dot >= MAGNET_CONE_COS) {
            canEat = true;
            magnetEaten++;
          }
        }
      }

      if (!canEat) continue;

      foods.delete(f.id);
      foodQuad.removeById(f.id);

      foodEatenSeq++;
      foodEatenEvents.push({ seq: foodEatenSeq, id: f.id });
      if (foodEatenEvents.length > MAX_EATEN_EVENTS) {
        foodEatenEvents.splice(0, foodEatenEvents.length - MAX_EATEN_EVENTS);
      }

      const isAbility = f.skin >= ABILITY_SKIN_BASE && f.skin < ABILITY_SKIN_BASE + ABILITY_TYPE_COUNT;
      if (isAbility) {
        const abType = abilityTypeFromSkin(f.skin);
        if (abType >= 0) {
          p.abilities ||= {};
          p.abilities[abType] = now + ABILITY_DURATION_MS;
          sendAbilityPickup(p.ws, abType, 100);
        }
        continue;
      }

      let gain = typeof f.value === 'number' ? f.value : f.r;
      gain *= getFoodMultiplier(p, now);
      p.score += gain;
      p.weight += gain;
      p.radius = calcRadiusFromWeight(p.weight);
      p.eatenCount = (p.eatenCount | 0) + 1;
    }
  });

  // Collisions
  const alivePlayers = Array.from(players.values()).filter(pp => pp && !pp.dead);
  for (let i = 0; i < alivePlayers.length; i++) {
    const a = alivePlayers[i];
    for (let j = i + 1; j < alivePlayers.length; j++) {
      const b = alivePlayers[j];
      if (!a || !b || a.dead || b.dead) continue;

      // Body-as-wall collisions: head touches any part of the other body => instant death
      if (headHitsBody(a, b)) {
        killPlayer(a, now, true, b.id, false);
        continue;
      }
      if (headHitsBody(b, a)) {
        killPlayer(b, now, true, a.id, false);
        continue;
      }

      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      const dist = Math.sqrt(d2);

      if (isHeadshot(a, b, dist)) {
        killPlayer(b, now, true, a.id, true);
        continue;
      }
      if (isHeadshot(b, a, dist)) {
        killPlayer(a, now, true, b.id, true);
        continue;
      }

      const aR = Math.max(0.001, a.radius || 0);
      const bR = Math.max(0.001, b.radius || 0);
      const sumR = aR + bR;

      const pad = clamp(0.03 + Math.sqrt(Math.max(aR, bR)) * 0.06, 0.03, 0.16);
      const barrierR = sumR + pad;
      if (dist >= barrierR) continue;

      if (dist < sumR) {
        let winner = a;
        let loser = b;
        if ((b.weight || 0) > (a.weight || 0)) {
          winner = b;
          loser = a;
        }
        killPlayer(loser, now, true, winner.id, false);
        winner.weight += Math.max(0.05, loser.weight || 0);
        winner.score += Math.max(0, loser.score || 0);
        winner.radius = calcRadiusFromWeight(winner.weight);
        winner.wheelDownUntil = now + WHEEL_DOWN_MS;
        continue;
      }

      const inv = 1 / (dist || 1);
      const nx = dx * inv;
      const ny = dy * inv;
      const push = (barrierR - dist) * 0.5;
      a.x += nx * push;
      a.y += ny * push;
      b.x -= nx * push;
      b.y -= ny * push;
    }
  }

  // Clamp inside zone
  for (const p of alivePlayers) {
    const pos = clampInsideZone(p.x, p.y, 0);
    p.x = pos.x;
    p.y = pos.y;
    updatePlayerTrail(p);
  }
}, SERVER_TICK_MS);

// Food spawn
setInterval(() => {
  let i = 0;
  while (i < FOOD_SPAWN_BATCH && foods.size < FOOD_TARGET) {
    spawnFood();
    i++;
  }
}, FOOD_SPAWN_INTERVAL_MS);

// ========== WEBSOCKET HANDLER ==========
wss.on('connection', ws => {
  const id = Math.floor(Math.random() * 0x7fff) + 1;
  const skin = AVAILABLE_SKINS[Math.floor(Math.random() * AVAILABLE_SKINS.length)];
  const weight = 0.25;
  const spawn = getRandomSpawnPoint();

  const p = {
    id,
    name: 'Player',
    x: spawn.x,
    y: spawn.y,
    prevX: spawn.x,
    prevY: spawn.y,
    weight,
    radius: calcRadiusFromWeight(weight),
    angle: 0,
    targetAngle: 0,
    speed: PLAYER_SPEED,
    skin,
    score: 0,
    haste: false,
    eaten: [],
    eatenCount: 0,
    wheelDownUntil: 0,
    deathDisconnectAt: 0,
    deathX: 0,
    deathY: 0,
    spectateId: 0,
    spectateSwitchAt: 0,
    ws,
    dead: false,
    _trail: [{ x: spawn.x, y: spawn.y }],
  };

  ws._playerId = id;
  ws._joined = false;
  ws._known = new Set([id]);
  players.set(id, p);

  ws.on('message', async buf => {
    let buffer = null;

    if (buf instanceof ArrayBuffer) {
      buffer = buf;
    } else if (typeof Blob !== 'undefined' && buf instanceof Blob) {
      buffer = await buf.arrayBuffer();
    } else if (Buffer.isBuffer(buf)) {
      buffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    } else if (buf && buf.buffer instanceof ArrayBuffer && typeof buf.byteOffset === 'number' && typeof buf.byteLength === 'number') {
      buffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }

    if (!buffer) return;

    const dv = new DataView(buffer);
    const op = dv.getUint8(0);

    // Angle update
    if (buffer.byteLength === 1) {
      p.haste = (op & 128) !== 0;
      const a = op & 127;
      p.targetAngle = (a / 128) * Math.PI * 2;
      return;
    }

    // Player info update
    if (op === 129 && buffer.byteLength >= 4 && dv.getInt16(1) === 2800) {
      const mode = dv.getUint8(3);

      if (mode === 0 && buffer.byteLength >= 7) {
        p.skin = dv.getInt16(4);
        const nameLen = dv.getUint8(6);
        let name = '';
        let o = 7;
        for (let i = 0; i < nameLen && o + 1 < buffer.byteLength; i++, o += 2) {
          name += String.fromCharCode(dv.getInt16(o));
        }
        p.name = (name || 'Player').slice(0, 32);
      } else if (mode === 1 && buffer.byteLength >= 6) {
        const nameLen = Math.max(0, Math.min(32767, dv.getInt16(4)));
        let name = '';
        let o = 6;
        for (let i = 0; i < nameLen && o + 1 < buffer.byteLength; i++, o += 2) {
          name += String.fromCharCode(dv.getInt16(o));
        }
        p.name = (name || p.name || 'Player').slice(0, 32);
      }

      if (!ws._joined) {
        ws._joined = true;
        sendHandshake0(ws, p);
        sendMiniMapMask(ws);
        sendInitUpdate1(ws, p);
      }
      return;
    }
  });

  ws.on('close', () => {
    const pp = players.get(id);
    if (!pp) return;
    if (!pp.dead) killPlayer(pp, Date.now(), true);
    players.delete(id);
  });

  ws.on('error', () => {});
});

// ========== SEND UPDATES ==========
setInterval(() => {
  wss.clients.forEach(ws => {
    if (ws.readyState !== 1) return;
    if (!ws._joined) return;
    const p = players.get(ws._playerId);
    if (!p) return;
    const now = Date.now();
    if (p.dead && p.deathDisconnectAt && now >= p.deathDisconnectAt) {
      try { ws.close(); } catch (e) { players.delete(ws._playerId); }
      return;
    }
    sendUpdate1(ws, p);
  });
}, SERVER_TICK_MS);

setInterval(() => {
  broadcastMiniMap();
}, 2000);

setInterval(() => {
  wss.clients.forEach(ws => {
    if (ws.readyState !== 1) return;
    if (!ws._joined) return;
    sendLeaderboard3(ws);
  });
}, 500);

// ========== START SERVER ==========
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server ready on port ${PORT}`);
});
