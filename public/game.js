var vLSHttpssaifaldin1242we = "https://saifaldin12.42web.io/";
window.detectLog = null;
const BEAUTY_TEXTS = ["Good job!", "Well done!", "Amazing!", "Keep going!", "You're awesome!"];
const vO8 = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom: function (p2) {
    if (vO8.BETAisSkinCustom(p2)) {
      return 34 || 33;
    } else {
      return p2;
    }
  },
  testSkinMod: function (p3) {
    return p3 >= 1 && p3 <= 2000;
  },
  testWear: function (p4) {
    return p4 >= 399 && p4 < 999;
  },
  isNumberValid: function (p5) {
    return p5 !== "" && p5 !== null && p5 !== undefined && !isNaN(p5);
  },
  validInput: function (p6) {
    if (!vO8.testSkinMod(p6) && !vO8.BETAisSkinCustom(p6)) {
      return p6;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(vO8.isNumberValid(v2) ? v2 : 35);
    } catch (e) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v9 = localStorage.getItem("inputReplaceSkin");
var v10;
var v11 = null;
var v12 = false;
var vO9 = {};
window.keyMove = 81;
var vO10 = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var vO11 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/P6RvwPc.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: vO10.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let v13 = JSON.parse(saveGameLocal);
  for (let v15 in v13) {
    vO11[v15] = v13[v15];
  }
}
vO11.loading = true;
const vF4 = function () {
  let v16 = false;
  vO11.mobile = false;
  const v17 = navigator.userAgent || navigator.vendor || window.opera;
  const vA = ["android", "bb", "meego", "avantgo", "bada", "blackberry", "blazer", "compal", "elaine", "fennec", "hiptop", "iemobile", "iphone", "ipod", "iris", "kindle", "lge", "maemo", "midp", "mmp", "mobile", "firefox", "netfront", "opera", "palm", "phone", "plucker", "pocket", "psp", "symbian", "treo", "vodafone", "wap", "windows ce", "xda", "ipad", "playbook", "silk"];
  if (vA.some(p7 => v17.toLowerCase().includes(p7))) {
    vO11.mobile = true;
    v16 = true;
  }
  return v16;
};
const vF5 = function () {
  let v18 = false;
  var v19 = navigator.userAgent || navigator.vendor || window.opera;
  const vA2 = ["android", "bb", "meego", "avantgo", "bada", "blackberry", "blazer", "compal", "elaine", "fennec", "hiptop", "iemobile", "iphone", "ipod", "iris", "kindle", "lge", "maemo", "midp", "mmp", "mobile", "firefox", "netfront", "opera", "palm", "phone", "plucker", "pocket", "psp", "symbian", "treo", "vodafone", "wap", "windows ce", "xda", "ipad", "playbook", "silk"];
  v18 = vA2.some(p8 => v19.toLowerCase().includes(p8));
  return v18;
};
const vF6 = function (p9) {
  let v20;
  try {
    console.log(p9);
    if (!vO11.gamePad) {
      vO11.gamePad = vO10.joystick;
    }
    if (vF5() && (p9 || vO11.gamePad.checked)) {
      v20 = nipplejs.create(vO11.gamePad);
      v20.on("move", function (p10, p11) {
        vO10.eventoPrincipal.sk = p11.angle.radian <= Math.PI ? p11.angle.radian * -1 : Math.PI - (p11.angle.radian - Math.PI);
        console.log(p11);
      });
    }
    return v20;
  } catch (e2) {
    console.log(e2);
  }
};
if (typeof PIXI === "undefined") {
  var v21 = document.createElement("script");
  v21.src = "https://pixijs.download/release/pixi.js";
  v21.type = "text/javascript";
  v21.onload = function () {
    f6();
  };
  document.head.appendChild(v21);
} else {
  f6();
}
function f6() {
  let v22 = new PIXI.Application();
  document.body.appendChild(v22.view);
  let v23 = new PIXI.Graphics();
  v23.beginFill(16711680);
  v23.drawCircle(400, 300, 50);
  v23.endFill();
  v22.stage.addChild(v23);
}
let vO12 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO13 = {
  Api_listServer: []
};
async function f7() {
  await fetch("https://sdfioj0.github.io/saif0/api/users.php").then(p12 => p12.json()).then(p13 => {
    if (p13.success) {
      let v25 = p13.Users;
      const v28 = new Date();
      v28.setHours(0, 0, 0, 0);
      vO12.clientesActivos = v25.filter(p14 => {
        if (p14.cliente_DateExpired) {
          const v29 = new Date(p14.cliente_DateExpired);
          return v29 >= v28;
        }
        return true;
      });
    } else {
      vO12 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("حدث خطأ أثناء تحميل العملاء");
    }
  }).catch(p15 => {
    console.error("Error loading users:", p15);
    alert("حدث خطأ اثناء التحميل يرجي تحديث الصفحة F5.");
  });
}
async function f8(p16, p17 = 3, p18 = 2000) {
  for (let vLN1 = 1; vLN1 <= p17; vLN1++) {
    try {
      const v30 = await fetch(p16);
      if (!v30.ok) {
        throw new Error("HTTP error! status: " + v30.status);
      }
      const v31 = await v30.json();
      return v31;
    } catch (e3) {
      console.error("Attempt " + vLN1 + " failed: " + e3.message);
      if (vLN1 < p17) {
        await new Promise(p19 => setTimeout(p19, p18));
      } else {
        throw e3;
      }
    }
  }
}
async function f9() {
  try {
    const v32 = await f8("https://raw.githubusercontent.com/sdfioj0/saif0/refs/heads/main/auus.php");
    if (v32.success) {
      let v33 = v32.servers;
      vO13.Api_listServer = v33.filter(p20 => p20.serverUrl);
    } else {
      vO13 = {
        Api_listServer: []
      };
      alert("حدث خطأ أثناء تحميل السيرفرات");
    }
  } catch (e4) {
    console.error("Failed to load servers after multiple attempts:", e4);
    vO13 = {
      Api_listServer: []
    };
    alert("حدث خطأ أثناء تحميل السيرفرات. يرجى إعادة المحاولة لاحقًا.");
  }
}
f7();
f9();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var v$2 = $("#idReplaceSkin");
const vO14 = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#f79425",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "wormde",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFFFF",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#A9A9A9",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormde",
      fontWeight: "normal",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormde",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#ffcc00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#ff2222",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#ffcc00",
      fontSize: 11,
      lineJoin: "round",
      stroke: "#ff2222",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormde",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "wormde",
      wordWrap: true
    })
  }
};
vO14.clock = PIXI.Sprite.fromImage("https://timmapwormate.com/images/store/clock.png");
vO14.clock.width = 100;
vO14.clock.height = 100;
vO14.clock.x = -50;
vO14.clock.y = -50;
const v34 = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});
document.body.appendChild(v34.view);
vO14.hoisinhnhanh = PIXI.Sprite.from("https://i.imgur.com/QZfm7vv.png");
vO14.hoisinhnhanh.width = 23;
vO14.hoisinhnhanh.height = 23;
vO14.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
vO14.top10sv.height = 25;
vO14.top10sv.width = 100;
vO14.top10sv.x = 60;
vO14.top10sv.y = -50;
vO14.quaytron = PIXI.Sprite.from("https://i.imgur.com/a7lVOy5.png");
vO14.quaytron.width = -23;
vO14.quaytron.height = -23;
v34.stage.addChild(vO14.hoisinhnhanh);
v34.stage.addChild(vO14.quaytron);
function f10() {
  const vLN300 = 300;
  const v35 = -90;
  vO14.hoisinhnhanh.x = window.innerWidth - vO14.hoisinhnhanh.width - vLN300;
  vO14.hoisinhnhanh.y = v35;
  vO14.quaytron.x = vO14.hoisinhnhanh.x - vO14.quaytron.width - 10;
  vO14.quaytron.y = v35;
}
f10();
window.addEventListener("resize", () => {
  v34.renderer.resize(window.innerWidth, window.innerHeight);
  f10();
});
vO14.value_server = new PIXI.Text("?", vO14.fontStyle.name);
vO14.value_server.x = 17;
vO14.value_server.y = 3;
vO14.label_hs = new PIXI.Text("HS", vO14.fontStyle.amarillo);
vO14.value1_hs = new PIXI.Text("0", vO14.fontStyle.amarillo);
vO14.label_kill = new PIXI.Text("KL", vO14.fontStyle.morado);
vO14.value1_kill = new PIXI.Text("0", vO14.fontStyle.morado);
if (vO11.ModeStremersaveheadshot) {
  vO14.value2_hs = new PIXI.Text("", vO14.fontStyle.amarillo1);
  vO14.value2_kill = new PIXI.Text("", vO14.fontStyle.morado1);
} else {
  vO14.value2_hs = new PIXI.Text("", vO14.fontStyle.amarillo1);
  vO14.value2_kill = new PIXI.Text("", vO14.fontStyle.morado1);
}
vO14.label_kill.x = 66;
vO14.label_kill.y = 127;
vO14.label_hs.x = 11;
vO14.label_hs.y = 127;
vO14.value1_kill.x = 66;
vO14.value1_kill.y = 142;
vO14.value1_hs.x = 11;
vO14.value1_hs.y = 142;
vO14.value2_kill.x = 66;
vO14.value2_kill.y = 158;
vO14.value2_hs.x = 11;
vO14.value2_hs.y = 158;
vO14.containerCountInfo = new PIXI.Container();
vO14.containerCountInfo.x = -45;
vO14.containerCountInfo.y = -76;
vO14.containerCountInfo.addChild(vO14.value_server);
vO14.containerCountInfo.addChild(vO14.label_hs);
vO14.containerCountInfo.addChild(vO14.value1_hs);
vO14.containerCountInfo.addChild(vO14.value2_hs);
vO14.containerCountInfo.addChild(vO14.label_kill);
vO14.containerCountInfo.addChild(vO14.value1_kill);
vO14.containerCountInfo.addChild(vO14.value2_kill);
vO14.imgServerbase = PIXI.Texture.fromImage("anzar");
vO14.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
vO14.onclickServer = PIXI.Texture.fromImage(vO11.flag);
vO14.containerImgS = new PIXI.Sprite(vO14.imgServerbase);
vO14.containerImgS.anchor.set(0.5);
vO14.containerImgS.x = 0;
vO14.containerImgS.y = 18;
vO14.containerImgS.width = 25;
vO14.containerImgS.height = 20;
vO14.borderImg = new PIXI.Sprite(vO14.borderurl);
vO14.borderImg.anchor.set(0.5);
vO14.borderImg.x = -2;
vO14.borderImg.y = 78;
vO14.borderImg.width = 110;
vO14.borderImg.height = 60;
vO14.setServer = function (p21) {
  vO14.value_server.text = p21 || "?";
};
vO14.setCountGame = function (p22, p23, p24, p25) {
  vO14.value1_hs.text = p23;
  vO14.value1_kill.text = p22;
  if (vO11.ModeStremersaveheadshot) {
    vO14.value2_hs.text = p25;
    vO14.value2_kill.text = p24;
  }
};
"use strict";
var v36 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p26) {
  return typeof p26;
} : function (p27) {
  if (p27 && typeof Symbol == "function" && p27.constructor === Symbol && p27 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p27;
  }
};
var v37;
(function () {
  try {
    console.log(function (p28, p29) {
      for (var vLN0 = 0; vLN0 < p29.length; vLN0 += 2) {
        p28 = p28.replaceAll(p29[vLN0], p29[vLN0 + 1]);
      }
      return p28;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e5) {}
})();
window.addEventListener("load", function () {
  function f11() {
    (function (p30, p31, p32) {
      function f12(p33, p34) {
        return (p33 === p32 ? "undefined" : v36(p33)) === p34;
      }
      function f13() {
        if (typeof p31.createElement != "function") {
          return p31.createElement(arguments[0]);
        } else if (v40) {
          return p31.createElementNS.call(p31, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p31.createElement.apply(p31, arguments);
        }
      }
      var vA3 = [];
      var vA4 = [];
      var vO15 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p35, p36) {
          var vThis = this;
          setTimeout(function () {
            p36(vThis[p35]);
          }, 0);
        },
        addTest: function (p37, p38, p39) {
          vA4.push({
            name: p37,
            fn: p38,
            options: p39
          });
        },
        addAsyncTest: function (p40) {
          vA4.push({
            name: null,
            fn: p40
          });
        }
      };
      function f14() {}
      f14.prototype = vO15;
      f14 = new f14();
      var v38 = false;
      try {
        v38 = "WebSocket" in p30 && p30.WebSocket.CLOSING === 2;
      } catch (e6) {}
      f14.addTest("websockets", v38);
      var v39 = p31.documentElement;
      var v40 = v39.nodeName.toLowerCase() === "svg";
      f14.addTest("canvas", function () {
        var vF13 = f13("canvas");
        return !!vF13.getContext && !!vF13.getContext("2d");
      });
      f14.addTest("canvastext", function () {
        return f14.canvas !== false && typeof f13("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v41;
        var v42;
        var v43;
        var v44;
        var v45;
        var v46;
        var v47;
        for (var v48 in vA4) {
          if (vA4.hasOwnProperty(v48)) {
            v41 = [];
            v42 = vA4[v48];
            if (v42.name && (v41.push(v42.name.toLowerCase()), v42.options && v42.options.aliases && v42.options.aliases.length)) {
              for (v43 = 0; v43 < v42.options.aliases.length; v43++) {
                v41.push(v42.options.aliases[v43].toLowerCase());
              }
            }
            v44 = f12(v42.fn, "function") ? v42.fn() : v42.fn;
            v45 = 0;
            for (; v45 < v41.length; v45++) {
              v46 = v41[v45];
              v47 = v46.split(".");
              if (v47.length === 1) {
                f14[v47[0]] = v44;
              } else {
                if (!!f14[v47[0]] && !(f14[v47[0]] instanceof Boolean)) {
                  f14[v47[0]] = new Boolean(f14[v47[0]]);
                }
                f14[v47[0]][v47[1]] = v44;
              }
              vA3.push((v44 ? "" : "no-") + v47.join("-"));
            }
          }
        }
      })();
      (function (p41) {
        var v49 = v39.className;
        var v50 = f14._config.classPrefix || "";
        if (v40) {
          v49 = v49.baseVal;
        }
        if (f14._config.enableJSClass) {
          var v51 = new RegExp("(^|\\s)" + v50 + "no-js(\\s|$)");
          v49 = v49.replace(v51, "$1" + v50 + "js$2");
        }
        if (f14._config.enableClasses) {
          v49 += " " + v50 + p41.join(" " + v50);
          if (v40) {
            v39.className.baseVal = v49;
          } else {
            v39.className = v49;
          }
        }
      })(vA3);
      delete vO15.addTest;
      delete vO15.addAsyncTest;
      for (var vLN02 = 0; vLN02 < f14._q.length; vLN02++) {
        f14._q[vLN02]();
      }
      p30.Modernizr = f14;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f15(p42, p43, p44) {
    const vA5 = [30, 30, 30, 80, 30, 20, 30];
    const vA6 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v52 = vA5[p43] - parseInt((p44 == 0.99 ? 1 : p44) * vA5[p43] / 1);
    const v53 = new PIXI.TextStyle({
      align: "center",
      fill: vA6[p43],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "wormde",
      fontWeight: "bold"
    });
    let v54 = "pwr_clock" + p43;
    if (!vO9[v54] && vA5[p43] === v52) {
      vO9[v54] = new PIXI.Text(v52, v53);
      vO9[v54].y = 61;
      p42.Tf[p43].addChild(vO9[v54]);
    }
    if (vO9[v54]) {
      vO9[v54].x = v52 >= 100 ? 11 : v52 >= 10 ? 18 : 26;
      vO9[v54].text = v52;
      if (v52 === 0) {
        delete vO9[v54];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f11()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f16() {
      return window.anApp = vUndefined2;
    }
    function f17(p45) {
      const v55 = p45 + "=";
      const v56 = document.cookie.split(";");
      for (let vLN03 = 0; vLN03 < v56.length; vLN03++) {
        let v57 = v56[vLN03];
        while (v57.charAt(0) === " ") {
          v57 = v57.substring(1);
        }
        if (v57.indexOf(v55) === 0) {
          return v57.substring(v55.length, v57.length);
        }
      }
      return "";
    }
    function f18(p46, p47, p48) {
      var v58 = new Date();
      v58.setTime(v58.getTime() + p48 * 86400000);
      var v59 = "expires=" + v58.toUTCString();
      document.cookie = p46 + "=" + p47 + "; " + v59 + "; path=/";
    }
    function f19(p49) {
      return window.I18N_MESSAGES[p49];
    }
    function f20(p50) {
      if (p50[v129]) {
        return p50[v129];
      } else if (p50.en) {
        return p50.en;
      } else {
        return p50.x;
      }
    }
    function f21(p51) {
      var v60 = (Math.floor(p51) % 60).toString();
      var v61 = (Math.floor(p51 / 60) % 60).toString();
      var v62 = (Math.floor(p51 / 3600) % 24).toString();
      var v63 = Math.floor(p51 / 86400).toString();
      var vF19 = f19("util.time.days");
      var vF192 = f19("util.time.hours");
      var vF193 = f19("util.time.min");
      var vF194 = f19("util.time.sec");
      if (v63 > 0) {
        return v63 + " " + vF19 + " " + v62 + " " + vF192 + " " + v61 + " " + vF193 + " " + v60 + " " + vF194;
      } else if (v62 > 0) {
        return v62 + " " + vF192 + " " + v61 + " " + vF193 + " " + v60 + " " + vF194;
      } else if (v61 > 0) {
        return v61 + " " + vF193 + " " + v60 + " " + vF194;
      } else {
        return v60 + " " + vF194;
      }
    }
    function f22(p52) {
      if (p52.includes("href")) {
        return p52.replaceAll("href", "target=\"_black\" href");
      } else {
        return p52;
      }
    }
    function f23(p53, p54, p55) {
      var v64 = document.createElement("script");
      var v65 = true;
      if (p54) {
        v64.id = p54;
      }
      v64.async = "async";
      v64.type = "text/javascript";
      v64.src = p53;
      if (p55) {
        v64.onload = v64.onreadystatechange = function () {
          v65 = false;
          try {
            p55();
          } catch (e7) {
            console.log(e7);
          }
          v64.onload = v64.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v64);
    }
    function f24(p56, p57) {
      var vP57 = p57;
      vP57.prototype = Object.create(p56.prototype);
      vP57.prototype.constructor = vP57;
      vP57.parent = p56;
      return vP57;
    }
    function f25(p58) {
      p58 %= v133;
      if (p58 < 0) {
        return p58 + v133;
      } else {
        return p58;
      }
    }
    function f26(p59, p60, p61) {
      return f27(p61, p59, p60);
    }
    function f27(p62, p63, p64) {
      if (p62 > p64) {
        return p64;
      } else if (p62 < p63) {
        return p63;
      } else if (Number.isFinite(p62)) {
        return p62;
      } else {
        return (p63 + p64) * 0.5;
      }
    }
    function f28(p65, p66, p67, p68) {
      if (p66 > p65) {
        return Math.min(p66, p65 + p67 * p68);
      } else {
        return Math.max(p66, p65 - p67 * p68);
      }
    }
    function f29(p69, p70, p71, p72, p73) {
      return p70 + (p69 - p70) * Math.pow(1 - p72, p71 / p73);
    }
    function f30(p74, p75, p76) {
      return p74 * (1 - p76) + p75 * p76;
    }
    function f31(p77, p78, p79, p80) {
      var vP79 = p79;
      var vP78 = p78;
      var v66 = p78 + p80;
      if (p77 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v67 = p77.length >>> 0;
      var v68 = vP79 >> 0;
      var v69 = v68 < 0 ? Math.max(v67 + v68, 0) : Math.min(v68, v67);
      var v70 = vP78 >> 0;
      var v71 = v70 < 0 ? Math.max(v67 + v70, 0) : Math.min(v70, v67);
      var v72 = v66 === undefined ? v67 : v66 >> 0;
      var v73 = v72 < 0 ? Math.max(v67 + v72, 0) : Math.min(v72, v67);
      var v74 = Math.min(v73 - v71, v67 - v69);
      var vLN12 = 1;
      for (v71 < v69 && v69 < v71 + v74 && (vLN12 = -1, v71 += v74 - 1, v69 += v74 - 1); v74 > 0;) {
        if (v71 in p77) {
          p77[v69] = p77[v71];
        } else {
          delete p77[v69];
        }
        v71 += vLN12;
        v69 += vLN12;
        v74--;
      }
      return p77;
    }
    function f32(p81) {
      return p81.getContext("2d");
    }
    function f33(p82) {
      if (p82.parent != null) {
        p82.parent.removeChild(p82);
      }
    }
    function f34(p83) {
      return p83[parseInt(Math.random() * p83.length)];
    }
    function f35() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f36(p84, p85, p86) {
      var v75 = (1 - Math.abs(p86 * 2 - 1)) * p85;
      var v76 = v75 * (1 - Math.abs(p84 / 60 % 2 - 1));
      var v77 = p86 - v75 / 2;
      if (p84 >= 0 && p84 < 60) {
        return [v77 + v75, v77 + v76, v77 + 0];
      } else if (p84 >= 60 && p84 < 120) {
        return [v77 + v76, v77 + v75, v77 + 0];
      } else if (p84 >= 120 && p84 < 180) {
        return [v77 + 0, v77 + v75, v77 + v76];
      } else if (p84 >= 180 && p84 < 240) {
        return [v77 + 0, v77 + v76, v77 + v75];
      } else if (p84 >= 240 && p84 < 300) {
        return [v77 + v76, v77 + 0, v77 + v75];
      } else {
        return [v77 + v75, v77 + 0, v77 + v76];
      }
    }
    function f37() {
      function f38() {
        let v78 = vO11.adblock ? 1 : 5;
        $("#adbl-1").text(f19("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f19("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f19("index.game.antiadblocker.msg3"));
        $("#adbl-4").text((f19("index.game.antiadblocker.msg4") || "").replace("{0}", 10));
        $("#adbl-continue span").text(f19("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vV78 = v78;
        for (var vLN04 = 0; vLN04 < v78; vLN04++) {
          setTimeout(function () {
            vV78--;
            $("#adbl-4").text((f19("index.game.antiadblocker.msg4") || "").replace("{0}", vV78));
            if (vV78 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e8) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN04 + 1) * 1000);
        }
      }
      var v79 = false;
      function f39() {}
      var vO16 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f39(false);
      });
      vO16.a = function (p87) {
        f39 = p87;
        if (!v79) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p88) {
                  console.log("aipC");
                  f39(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e9) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v79 = true;
          } catch (e10) {}
        }
      };
      vO16.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e11) {}
          f38();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e12) {}
          f38();
        }
      };
      return vO16;
    }
    function f40(p89, p90) {
      var v$3 = $("#" + p89);
      var vP90 = p90;
      var vO17 = {};
      var v80 = false;
      vO17.a = function () {
        if (!v80) {
          v$3.empty();
          v$3.append("<div id='" + vP90 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e13) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP90);
            });
            v80 = true;
          } catch (e14) {}
        }
      };
      vO17.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e15) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP90);
          });
        } catch (e16) {}
      };
      return vO17;
    }
    function f41() {
      function f42(p91) {
        var v81 = p91 + Math.floor(Math.random() * 65535) * 37;
        f18(vF15.d, v81, 30);
      }
      function f43() {
        return parseInt(f17(vF15.d)) % 37;
      }
      return function () {
        var vF43 = f43();
        console.log("init1 pSC: " + vF43);
        if (!(vF43 >= 0) || !(vF43 < v553.e)) {
          vF43 = Math.max(0, v553.e - 2);
          console.log("init2 pSC: " + vF43);
        }
        var vO18 = {};
        vUndefined2 = vO18;
        vO18.f = v553;
        vO18.g = false;
        vO18.i = Date.now();
        vO18.j = 0;
        vO18.k = 0;
        vO18.l = null;
        vO18.m = vUndefined;
        vO18.n = v129;
        vO18.o = null;
        vO18.p = null;
        vO18.q = null;
        vO18.r = null;
        vO18.s = null;
        vO18.t = null;
        vO18.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p92) {
              if (p92.coords !== undefined) {
                var v82 = p92.coords;
                if (v82.latitude !== undefined && v82.longitude !== undefined) {
                  vO18.l = p92;
                }
              }
            }, function (p93) {});
          }
        } catch (e17) {}
        vO18.v = function () {
          vO18.p = new vF9();
          vO18.q = new vF40();
          vO18.r = new vF11();
          vO18.s = new vF41();
          vO18.t = new vF37();
          vO18.u = new vF44();
          vO18.o = new f44();
          vO18.o.z = new vF31(vO18.o);
          vO18.a();
        };
        vO18.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e18) {}
          vO18.o.A = function () {
            vO18.o.B();
          };
          vO18.o.C = function () {
            var v83 = vO18.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v83);
            } catch (e19) {}
            vO18.r.G(vF11.AudioState.H);
            vO18.s.I(vO18.s.H.J());
          };
          vO18.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e20) {}
            if ($("body").height() >= 430) {
              vO18.f.K.c();
            }
            vO18.p.L();
            (function () {
              var v84 = Math.floor(vO18.o.N.M);
              var v85 = vO18.o.O;
              if (vO18.u.P()) {
                vO18.u.Q(function () {
                  vO18.R(v84, v85);
                });
              } else {
                vO18.R(v84, v85);
              }
            })();
          };
          vO18.o.S = function (p94) {
            p94(vO18.s.H.T(), vO18.s.H.U());
          };
          vO18.u.V(function () {
            if (vO18.p.W) {
              vO18.r.G(vF11.AudioState.F);
              vO18.s.I(vO18.s.F);
            }
            if (vO18.u.P()) {
              try {
                var v86 = vO18.u.X();
                ga("set", "userId", v86);
              } catch (e21) {}
            }
            if (vO18.Y() && vO18.u.P() && !vO18.u.Z()) {
              vO18.$(false, false);
              vO18.s.aa._(new vF79());
            } else {
              vO18.ba(true);
            }
          });
          vO18.p.ca(function () {
            vO18.r.G(vF11.AudioState.F);
            vO18.s.I(vO18.s.F);
          });
          vO18.q.a(function () {
            vO18.o.a();
            vO18.r.a();
            vO18.s.a();
            vO18.t.a();
            vO18.p.a();
            vO18.u.a();
            if (vO18.Y() && !vO18.Z()) {
              vO18.s.aa._(new vF79());
            } else {
              vO18.ba(true);
            }
          });
        };
        vO18.da = function (p95) {
          if (vO18.u.P()) {
            var v87 = vO18.u.ea();
            $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v87 + "/consent/change?value=" + encodeURI(p95), function (p96) {});
          }
        };
        vO18.fa = function (p97) {
          var v88 = vO18.u.ea();
          var v89 = vO18.s.F.D();
          var v90 = vO18.s.F.ga();
          var v91 = vO18.t.ha(vF38.ia);
          var v92 = vO18.t.ha(vF38.ja);
          var v93 = vO18.t.ha(vF38.ka);
          var v94 = vO18.t.ha(vF38.la);
          var v95 = vO18.t.ha(vF38.ma);
          var vLN05 = 0;
          if (vO18.l != null) {
            var v96 = vO18.l.coords.latitude;
            var v97 = vO18.l.coords.longitude;
            vLN05 = Math.max(0, Math.min(32767, (v96 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v97 + 180) / 360 * 65536)) << 16;
          }
          vO8.testSkinCustom(v91);
          let vLS = "";
          v90 = (v90.length >= 32 ? v90.substr(0, 16) : v90.substr(0, 16).padEnd(16, " ")) + vLS;
          v90 = v90.trim();
          console.log(v90);
          p97("ws://localhost:3001/wormy");
        };
        vO18.na = function () {
          vF43++;
          console.log("start pSC: " + vF43);
          if (!vO18.f.oa && vF43 >= vO18.f.e) {
            vO18.s.I(vO18.s.pa);
            vO18.r.G(vF11.AudioState.qa);
            vO18.f.ra.b();
          } else {
            f42(vF43);
            vO18.sa();
          }
        };
        vO18.sa = function (p99) {
          if (vO18.o.ta()) {
            vO18.s.I(vO18.s.ua);
            vO18.r.G(vF11.AudioState.ua);
            var v100 = vO18.s.F.D();
            f18(vF15.va, v100, 30);
            console.log("save gm: " + v100);
            var v101 = vO18.s.xa.wa();
            f18(vF15.ya, v101, 30);
            console.log("save sPN: " + v101);
            if (vO18.u.P()) {
              window.server_url = "ws://localhost:3001/wormy";
              vO18.fa(function (p100) {
                v10 = p99 ? p99 : p100;
                vO18.o.za(window.server_url || p100, vO18.u.ea());
              });
            } else {
              var v102 = vO18.s.F.ga();
              f18(vF15.Aa, v102, 30);
              var v103 = vO18.t.ha(vF38.ia);
              f18(vF15.Ba, v103, 30);
              vO18.fa(function (p101) {
                v10 = p99 ? p99 : p101;
                vO18.o.Ca(p101, v102, v103);
              });
            }
          }
        };
        vO18.R = function (p102, p103) {
          var v104 = vO18.s.F.ga();
          vO18.s.H.Da(p102, p103, v104);
          vO18.r.G(vF11.AudioState.Ea);
          vO18.s.I(vO18.s.H.Fa());
        };
        vO18.Ga = function () {
          if (!vO18.Ha()) {
            return vO18.t.Ia();
          }
          var vParseInt = parseInt(f17(vF15.Ba));
          if (vParseInt != null && vO18.t.Ja(vParseInt, vF38.ia)) {
            return vParseInt;
          } else {
            return vO18.t.Ia();
          }
        };
        vO18.Ka = function (p104) {
          f18(vF15.La, !!p104, 1800);
        };
        vO18.Ha = function () {
          return f17(vF15.La) === "true";
        };
        vO18.ba = function (p105) {
          if (p105 != vO18.g) {
            vO18.g = p105;
            var v105 = v105 || {};
            v105.consented = p105;
            v105.gdprConsent = p105;
            vO18.f.Ma.a();
            vO18.f.K.a();
            vO18.f.ra.a(function (p106) {
              if (p106) {
                f42(vF43 = 0);
              }
              vO18.sa();
            });
          }
        };
        vO18.$ = function (p107, p108) {
          f18(vF15.Na, p107 ? "true" : "false");
          if (p108) {
            vO18.da(p107);
          }
          vO18.ba(p107);
        };
        vO18.Z = function () {
          switch (f17(vF15.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO18.Y = function () {
          try {
            return !!window.isIPInEEA || vO18.l != null && !!vF17.Oa(vO18.l.coords.latitude, vO18.l.coords.longitude);
          } catch (e22) {
            return true;
          }
        };
        vO18.Pa = function () {
          vO18.j = Date.now();
          vO18.k = vO18.j - vO18.i;
          vO18.o.Qa(vO18.j, vO18.k);
          vO18.s.Qa(vO18.j, vO18.k);
          vO18.i = vO18.j;
        };
        vO18.Ra = function () {
          vO18.s.Ra();
        };
        return vO18;
      }();
    }
    function f44() {
      var vO19 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 30,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF22(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO19.fb.ub = 500;
      vO19.N = new vF47(vO19.fb);
      vO19.resendLastByte = function () {
        if (vO19.eb <= 255) {
          var v106 = new ArrayBuffer(1);
          new DataView(v106).setInt8(0, vO19.eb);
          vO19.Wb(v106, true);
        }
      };
      vO19.a = function () {
        vO19.N.vb(f16().s.H.wb);
        setInterval(function () {
          vO19.S(function (p109, p110) {
            vO19.xb(p109, p110);
          });
        }, 10);
        setInterval(function () {
          vO19.resendLastByte();
        }, 100);
      };
      vO19.yb = function (p111, p112, p113, p114) {
        vO19.lb = p111;
        vO19.mb = p112;
        vO19.nb = p113;
        vO19.ob = p114;
        vO19.zb();
      };
      vO19.Ab = function (p115) {
        vO19.kb = p115;
        vO19.zb();
      };
      vO19.zb = function () {
        vO19.pb = vO19.lb - vO19.kb;
        vO19.qb = vO19.mb + vO19.kb;
        vO19.rb = vO19.nb - vO19.kb;
        vO19.sb = vO19.ob + vO19.kb;
      };
      vO19.Qa = function (p116, p117) {
        vO19.$a += p117;
        vO19.Za -= vO19.Ya * 0.2 * p117;
        vO19.z.Bb();
        if (vO19.db != null && (vO19.cb === 2 || vO19.cb === 3)) {
          vO19.Cb(p116, p117);
          vO19.jb = 4 + vO19.ib * vO19.N.Db;
        }
        var v107 = 1000 / Math.max(1, p117);
        var vLN06 = 0;
        var vLN07 = 0;
        for (; vLN07 < vO19.Xa.length - 1; vLN07++) {
          vLN06 = vLN06 + vO19.Xa[vLN07];
          vO19.Xa[vLN07] = vO19.Xa[vLN07 + 1];
        }
        vO19.Xa[vO19.Xa.length - 1] = v107;
        vO19.Wa = (vLN06 + v107) / vO19.Xa.length;
      };
      vO19.Eb = function (p118, p119) {
        return p118 > vO19.pb && p118 < vO19.qb && p119 > vO19.rb && p119 < vO19.sb;
      };
      vO19.Cb = function (p120, p121) {
        var v108 = vO19.$a + vO19.Za;
        var v109 = (v108 - vO19._a) / (vO19.ab - vO19._a);
        vO19.N.Fb(p120, p121);
        vO19.N.Gb(p120, p121, v109, vO19.Eb);
        var vLN08 = 0;
        var v110;
        for (v110 in vO19.hb) {
          var v111 = vO19.hb[v110];
          v111.Fb(p120, p121);
          v111.Gb(p120, p121, v109, vO19.Eb);
          if (v111.Hb && v111.Db > vLN08) {
            vLN08 = v111.Db;
          }
          if (!v111.Ib && (!!(v111.Jb < 0.005) || !v111.Hb)) {
            v111.Kb();
            delete vO19.hb[v111.Mb.Lb];
          }
        }
        vO19.Ab(vLN08 * 3);
        var v112;
        for (v112 in vO19.gb) {
          var v113 = vO19.gb[v112];
          v113.Fb(p120, p121);
          v113.Gb(p120, p121, vO19.Eb);
          if (v113.Nb && (v113.Jb < 0.005 || !vO19.Eb(v113.Ob, v113.Pb))) {
            v113.Kb();
            delete vO19.gb[v113.Mb.Lb];
          }
        }
      };
      vO19.Qb = function (p122, p123) {
        if (vO19.cb === 1) {
          vO19.cb = 2;
          vO19.C();
        }
        var v114 = f16().j;
        vO19.bb = p122;
        if (p122 === 0) {
          vO19._a = v114 - 95;
          vO19.ab = v114;
          vO19.$a = vO19._a;
          vO19.Za = 0;
        } else {
          vO19._a = vO19.ab;
          vO19.ab = vO19.ab + p123;
        }
        var v115 = vO19.$a + vO19.Za;
        vO19.Ya = (v115 - vO19._a) / (vO19.ab - vO19._a);
      };
      vO19.Rb = function () {
        if (vO19.cb === 1 || vO19.cb === 2) {
          vO19.cb = 3;
          var v116 = vO19.db;
          setTimeout(function () {
            if (vO19.cb === 3) {
              vO19.cb = 0;
            }
            if (v116 != null && v116 === vO19.db) {
              vO19.db.close();
              vO19.db = null;
            }
          }, 5000);
          vO19.B();
        }
      };
      vO19.ta = function () {
        return vO19.cb !== 2 && (vO19.cb = 1, vO19.z.Sb(), vO19.gb = {}, vO19.hb = {}, vO19.N.Tb(), vO19.db != null && (vO19.db.close(), vO19.db = null), true);
      };
      vO19.Ub = function () {
        vO19.db = null;
        vO19.z.Sb();
        if (vO19.cb !== 3) {
          vO19.A();
        }
        vO19.cb = 0;
      };
      vO19.za = function (p124, p125) {
        vO19.Vb(p124, function () {
          var v117 = Math.min(2048, p125.length);
          var v118 = new ArrayBuffer(6 + v117 * 2);
          var v119 = new DataView(v118);
          var vLN09 = 0;
          v119.setInt8(vLN09, 129);
          vLN09 = vLN09 + 1;
          v119.setInt16(vLN09, 2800);
          vLN09 = vLN09 + 2;
          v119.setInt8(vLN09, 1);
          vLN09 = vLN09 + 1;
          v119.setInt16(vLN09, v117);
          vLN09 = vLN09 + 2;
          var vLN010 = 0;
          for (; vLN010 < v117; vLN010++) {
            v119.setInt16(vLN09, p125.charCodeAt(vLN010));
            vLN09 = vLN09 + 2;
          }
          vO19.Wb(v118);
        });
      };
      vO19.Ca = function (p126, p127, p128) {
        vO19.Vb(p126, function () {
          var v120 = Math.min(32, p127.length);
          var v121 = new ArrayBuffer(7 + v120 * 2);
          var v122 = new DataView(v121);
          var vLN011 = 0;
          v122.setInt8(vLN011, 129);
          vLN011 = vLN011 + 1;
          v122.setInt16(vLN011, 2800);
          vLN011 = vLN011 + 2;
          v122.setInt8(vLN011, 0);
          vLN011 = vLN011 + 1;
          v122.setInt16(vLN011, p128);
          vLN011 = vLN011 + 2;
          v122.setInt8(vLN011, v120);
          vLN011++;
          var vLN012 = 0;
          for (; vLN012 < v120; vLN012++) {
            v122.setInt16(vLN011, p127.charCodeAt(vLN012));
            vLN011 = vLN011 + 2;
          }
          vO19.Wb(v121);
        });
      };
      vO19.Wb = function (p129, p130 = false) {
        try {
          if (vO19.db != null && vO19.db.readyState === WebSocket.OPEN) {
            if (p129.byteLength === 1 && p130 === false) {
              vO19.eb = new DataView(p129).getUint8(0);
            }
            vO19.db.send(p129);
          }
        } catch (e23) {
          console.log("Socket send error: " + e23);
          vO19.Ub();
        }
      };
      vO19.xb = function (p131, p132) {
        var v123 = p132 ? 128 : 0;
        var v124 = f25(p131) / v133 * 128 & 127;
        var v125 = (v123 | v124) & 255;
        if (vO19.eb !== v125) {
          var v126 = new ArrayBuffer(1);
          new DataView(v126).setInt8(0, v125);
          vO19.Wb(v126);
        }
      };
      vO19.Vb = function (p133, p134) {
        let vVF6 = vF6(!vO11.mobile);
        var v127 = vO19.db = new WebSocket(p133);
        v127.binaryType = "arraybuffer";
        window.onOpen = v127.onopen = function () {
          f151("open");
          if (vO19.db === v127) {
            console.log("Socket opened");
            p134();
          }
          v12 = true;
        };
        window.onclose = v127.onclose = function () {
          f151("closed");
          vO8.aload = false;
          if (vO19.db === v127) {
            console.log("Socket closed");
            vO19.Ub();
          }
          v12 = false;
          if (vVF6) {
            vVF6.destroy();
          }
        };
        v127.onerror = function (p135) {
          if (vO19.db === v127) {
            console.log("Socket error");
            vO19.Ub();
          }
          v12 = false;
          if (vVF6) {
            vVF6.destroy();
          }
        };
        v127.onmessage = function (p136) {
          if (vO19.db === v127) {
            vO19.z.Xb(p136.data);
          }
        };
      };
      return vO19;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v128 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vLSHttpsgatewaywormatei = "https://gateway.wormate.io";
    var vLSHttpsresourceswormat = "https://resources.wormate.io";
    var v129 = window.I18N_LANG;
    v129 ||= "en";
    var vUndefined = undefined;
    switch (v129) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v130 = false;
    var vUndefined2 = undefined;
    var vF7 = function () {
      var vO20 = {
        Yb: eval("PIXI;")
      };
      var v131 = vO20.Yb.BLEND_MODES;
      var v132 = vO20.Yb.WRAP_MODES;
      return {
        Zb: vO20.Yb.Container,
        $b: vO20.Yb.BaseTexture,
        _b: vO20.Yb.Texture,
        ac: vO20.Yb.Renderer,
        bc: vO20.Yb.Graphics,
        cc: vO20.Yb.Shader,
        dc: vO20.Yb.Rectangle,
        ec: vO20.Yb.Sprite,
        fc: vO20.Yb.Text,
        gc: vO20.Yb.Geometry,
        hc: vO20.Yb.Mesh,
        ic: {
          jc: v131.ADD
        },
        kc: {
          lc: v132.REPEAT
        }
      };
    }();
    var v133 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS2 = "=";
      var v134 = vLSZ2V0 + "SW50";
      var v135 = vLSZ2V0 + "RmxvYXQ";
      var vA7 = [atob(v134 + "OA=="), atob(v134 + "MTY" + vLS2), atob(v134 + "MzI" + vLS2), atob(v135 + "zMg=="), atob(v135 + "2NA==")];
      DataView.prototype.mc = function (p137) {
        return this[vA7[0]](p137);
      };
      DataView.prototype.nc = function (p138) {
        return this[vA7[1]](p138);
      };
      DataView.prototype.oc = function (p139) {
        return this[vA7[2]](p139);
      };
      DataView.prototype.pc = function (p140) {
        return this[vA7[3]](p140);
      };
      DataView.prototype.qc = function (p141) {
        return this[vA7[4]](p141);
      };
    })();
    var vF8 = function () {
      function f45(p142) {
        this.rc = p142;
        this.sc = false;
        this.tc = 1;
      }
      f45.VELOCITY_TYPE = 0;
      f45.FLEXIBLE_TYPE = 1;
      f45.MAGNETIC_TYPE = 2;
      f45.ZOOM_TYPE = 6;
      f45.X2_TYPE = 3;
      f45.X5_TYPE = 4;
      f45.X10_TYPE = 5;
      return f45;
    }();
    var vF9 = function () {
      function f46() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF10.yc();
      }
      function f47(p143, p144) {
        for (var v136 in p143) {
          if (p143.hasOwnProperty(v136)) {
            p144(v136, p143[v136]);
          }
        }
      }
      f46.prototype.a = function () {
        this.L();
      };
      f46.prototype.W = function () {
        return this.wc != null;
      };
      f46.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f46.prototype.Ac = function () {
        return this.wc;
      };
      f46.prototype.L = function () {
        var vThis2 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/revision.json", function (p145) {
          if (p145 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f46.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/registry.json", function (p146) {
          if (p146.revision > vThis3.zc()) {
            vThis3.Cc(p146);
          }
        });
      };
      f46.prototype.ca = function (p147) {
        this.uc.push(p147);
      };
      f46.prototype.Dc = function () {
        return this.xc;
      };
      f46.prototype.Ec = function () {
        for (var vLN013 = 0; vLN013 < this.uc.length; vLN013++) {
          this.uc[vLN013]();
        }
      };
      f46.prototype.Fc = function (p148, p149) {
        if (!(p148.revision <= this.zc())) {
          var vP149 = p149;
          f47(this.vc, function (p150, p151) {
            var v137 = vP149[p150];
            if (v137 == null || p151.Gc !== v137.Gc) {
              print("disposing prev texture: " + p150 + " at " + p151.Gc);
              p151.Hc.destroy();
            }
          });
          this.vc = vP149;
          this.wc = p148;
          this.xc = vF10.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f46.prototype.Cc = function (p152) {
        var vO21 = {};
        var vA8 = [];
        var vA9 = [];
        var vLN014 = 0;
        (function (p153, p154) {
          for (var v138 in p153) {
            if (p153.hasOwnProperty(v138)) {
              var v139 = p153[v138];
              var v140 = v139.custom ? v139.relativePath : vLSHttpsresourceswormat + v139.relativePath;
              var v141 = v139.fileSize;
              var v142 = v139.sha256;
              var vO22 = {
                id: v138,
                path: v140,
                fileSize: v141,
                sha256: v142
              };
              vA8.push(vO22);
              vA9.push(vO22);
              vLN014 += v141;
              try {
                vO21[v138] = new vF21(v140, vF7.$b.from(v139.file || v140));
              } catch (e24) {
                console.log("Error loading file: " + v140);
              }
            }
          }
        })(p152.textureDict, function (p155, p156) {});
        this.Fc(p152, vO21);
      };
      return f46;
    }();
    var vF10 = function () {
      function f48() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f49(p157, p158) {
        for (var v143 in p157) {
          if (p157.hasOwnProperty(v143)) {
            p158(v143, p157[v143]);
          }
        }
      }
      f48.yc = function () {
        var v144 = new vF10();
        v144.Jc = {};
        v144.Kc = {
          Zc: null,
          $c: null
        };
        v144.Lc = {};
        v144.Mc = {
          Zc: null
        };
        v144.Nc = {};
        v144.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v144.Pc = {};
        v144.Qc = {
          ad: {},
          bd: v144.Oc,
          cd: v144.Kc
        };
        v144.Rc = {};
        v144.Sc = {
          Zc: []
        };
        v144.Tc = {};
        v144.Uc = {
          Zc: []
        };
        v144.Vc = {};
        v144.Wc = {
          Zc: []
        };
        v144.Xc = {};
        v144.Yc = {
          Zc: []
        };
        return v144;
      };
      f48.Ic = function (p159, p160) {
        var v145 = new vF10();
        var vO23 = {};
        f49(p159.colorDict, function (p161, p162) {
          vO23[p161] = p162;
        });
        var vO24 = {};
        f49(p159.regionDict, function (p163, p164) {
          vO24[p163] = new vF39(p160[p164.texture].Hc, p164.x, p164.y, p164.w, p164.h, p164.px, p164.py, p164.pw, p164.ph);
        });
        v145.Nc = {};
        for (var vLN015 = 0; vLN015 < p159.skinArrayDict.length; vLN015++) {
          var v146 = p159.skinArrayDict[vLN015];
          v145.Nc[v146.id] = new vF10.WormSkinData("#" + vO23[v146.prime], v146.base.map(function (p165) {
            return vO24[p165];
          }), v146.glow.map(function (p166) {
            return vO24[p166];
          }));
        }
        var v147 = p159.skinUnknown;
        v145.Oc = new vF10.WormSkinData("#" + vO23[v147.prime], v147.base.map(function (p167) {
          return vO24[p167];
        }), v147.glow.map(function (p168) {
          return vO24[p168];
        }));
        v145.Rc = {};
        f49(p159.eyesDict, function (p169, p170) {
          p169 = parseInt(p169);
          v145.Rc[p169] = new vF10.WearSkinData(p170.base.map(function (p171) {
            return vO24[p171.region];
          }));
        });
        v145.Sc = new vF10.WearSkinData(p159.eyesUnknown.base.map(function (p172) {
          return vO24[p172.region];
        }));
        v145.Tc = {};
        f49(p159.mouthDict, function (p173, p174) {
          p173 = parseInt(p173);
          v145.Tc[p173] = new vF10.WearSkinData(p174.base.map(function (p175) {
            return vO24[p175.region];
          }));
        });
        v145.Uc = new vF10.WearSkinData(p159.mouthUnknown.base.map(function (p176) {
          return vO24[p176.region];
        }));
        v145.Vc = {};
        f49(p159.glassesDict, function (p177, p178) {
          p177 = parseInt(p177);
          v145.Vc[p177] = new vF10.WearSkinData(p178.base.map(function (p179) {
            return vO24[p179.region];
          }));
        });
        v145.Wc = new vF10.WearSkinData(p159.glassesUnknown.base.map(function (p180) {
          return vO24[p180.region];
        }));
        v145.Xc = {};
        f49(p159.hatDict, function (p181, p182) {
          p181 = parseInt(p181);
          v145.Xc[p181] = new vF10.WearSkinData(p182.base.map(function (p183) {
            return vO24[p183.region];
          }));
        });
        v145.Yc = new vF10.WearSkinData(p159.hatUnknown.base.map(function (p184) {
          return vO24[p184.region];
        }));
        v145.Jc = {};
        f49(p159.portionDict, function (p185, p186) {
          p185 = parseInt(p185);
          v145.Jc[p185] = new vF10.PortionSkinData(vO24[p186.base], vO24[p186.glow]);
        });
        var v148 = p159.portionUnknown;
        v145.Kc = new vF10.PortionSkinData(vO24[v148.base], vO24[v148.glow]);
        v145.Lc = {};
        f49(p159.abilityDict, function (p187, p188) {
          p187 = parseInt(p187);
          v145.Lc[p187] = new vF10.AbilitySkinData(vO24[p188.base]);
        });
        var v149 = p159.abilityUnknown;
        v145.Mc = new vF10.AbilitySkinData(vO24[v149.base]);
        v145.Pc = {};
        f49(p159.teamDict, function (p189, p190) {
          p189 = parseInt(p189);
          v145.Pc[p189] = new vF10.TeamSkinData(p190.name, new vF10.WormSkinData("#" + vO23[p190.skin.prime], [], p190.skin.glow.map(function (p191) {
            return vO24[p191];
          })), new vF10.PortionSkinData([], vO24[p190.portion.glow]));
        });
        v145.Qc = new vF10.TeamSkinData({}, v145.Oc, v145.Kc);
        return v145;
      };
      f48.prototype.dd = function (p192) {
        var v150 = this.Nc[p192];
        return v150 || this.Oc;
      };
      f48.prototype.ed = function (p193) {
        var v151 = this.Pc[p193];
        return v151 || this.Qc;
      };
      f48.prototype.fd = function (p194) {
        var v152 = this.Rc[p194];
        return v152 || this.Sc;
      };
      f48.prototype.gd = function (p195) {
        if (!this) return { Zc: [] };
        var v153 = this.Tc[p195];
        return v153 || this.Uc || { Zc: [] };
      };
      f48.prototype.hd = function (p196) {
        var v154 = this.Vc[p196];
        return v154 || this.Wc;
      };
      f48.prototype.jd = function (p197) {
        var v155 = this.Xc[p197];
        return v155 || this.Yc;
      };
      f48.prototype.kd = function (p198) {
        var v156 = this.Jc[p198];
        return v156 || this.Kc;
      };
      f48.prototype.ld = function (p199) {
        var v157 = this.Lc[p199];
        return v157 || this.Mc;
      };
      f48.TeamSkinData = function () {
        function f50(p200, p201, p202) {
          this.ad = p200;
          this.bd = p201;
          this.cd = p202;
        }
        return f50;
      }();
      f48.WormSkinData = function () {
        function f51(p203, p204, p205) {
          this._c = p203;
          this.Zc = p204;
          this.$c = p205;
        }
        return f51;
      }();
      f48.WearSkinData = function () {
        function f52(p206) {
          this.Zc = p206;
        }
        return f52;
      }();
      f48.PortionSkinData = function () {
        function f53(p207, p208) {
          this.Zc = p207;
          this.$c = p208;
        }
        return f53;
      }();
      f48.AbilitySkinData = function () {
        function f54(p209) {
          this.Zc = p209;
        }
        return f54;
      }();
      return f48;
    }();
    var vF11 = function () {
      function f55() {
        this.md = vF11.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f55.prototype.a = function () {};
      f55.prototype.rd = function (p210) {
        this.od = p210;
      };
      f55.prototype.G = function (p211) {
        this.md = p211;
        this.sd();
      };
      f55.prototype.td = function (p212) {
        this.nd = p212;
        this.sd();
      };
      f55.prototype.sd = function () {};
      f55.prototype.ud = function (p213, p214) {
        if (!f16().p.W) {
          return null;
        }
        var v158 = p213[p214];
        if (v158 == null || v158.length == 0) {
          return null;
        } else {
          return v158[Math.floor(Math.random() * v158.length)].cloneNode();
        }
      };
      f55.prototype.vd = function (p215, p216, p217) {
        if (this.od && !(p217 <= 0)) {
          var v159 = this.ud(p215, p216);
          if (v159 != null) {
            v159.volume = Math.min(1, p217);
            v159.play();
          }
        }
      };
      f55.prototype.wd = function (p218, p219) {
        if (this.md.xd) {
          this.vd(v34.q.yd, p218, p219);
        }
      };
      f55.prototype.zd = function (p220, p221) {
        if (this.md.Ad) {
          this.vd(v34.q.Bd, p220, p221);
        }
      };
      f55.prototype.Cd = function () {};
      f55.prototype.Dd = function () {};
      f55.prototype.Ed = function () {};
      f55.prototype.Fd = function () {};
      f55.prototype.Gd = function () {};
      f55.prototype.Hd = function () {};
      f55.prototype.Id = function (p222, p223, p224) {};
      f55.prototype.Jd = function (p225) {};
      f55.prototype.Kd = function (p226) {};
      f55.prototype.Ld = function (p227) {};
      f55.prototype.Md = function (p228) {};
      f55.prototype.Nd = function (p229) {};
      f55.prototype.Od = function (p230) {};
      f55.prototype.Pd = function (p231) {};
      f55.prototype.Qd = function (p232) {};
      f55.prototype.Rd = function (p233) {};
      f55.prototype.Sd = function (p234) {};
      f55.prototype.Td = function (p235) {};
      f55.prototype.Ud = function (p236) {};
      f55.prototype.Vd = function (p237) {};
      f55.prototype.Wd = function (p238) {};
      f55.prototype.Xd = function (p239, p240) {};
      f55.prototype.Yd = function (p241) {};
      f55.prototype.Zd = function (p242, p243, p244) {};
      (function () {
        function f56(p245) {
          this.$d = new vF12(p245, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f56.prototype.be = function (p246) {
          if (p246) {
            this.b();
          } else {
            this.ce();
          }
        };
        f56.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f56.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f57(p247) {
          this.ge = p247.map(function (p248) {
            return new vF12(p248, 0.4);
          });
          f58(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f58(p249, p250, p251) {
          for (var v160 = p251 - 1; v160 > p250; v160--) {
            var v161 = p250 + Math.floor(Math.random() * (v160 - p250 + 1));
            var v162 = p249[v160];
            p249[v160] = p249[v161];
            p249[v161] = v162;
          }
        }
        f57.prototype.be = function (p252) {
          if (p252) {
            this.b();
          } else {
            this.ce();
          }
        };
        f57.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f57.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f57.prototype.ke = function (p253) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p253, 100);
            var v163 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v163);
            this.ie = vSetTimeout;
          }
        };
        f57.prototype.le = function () {
          var v164 = this.ge[0];
          var v165 = Math.max(1, this.ge.length / 2);
          f58(this.ge, v165, this.ge.length);
          this.ge.push(this.ge.shift());
          return v164;
        };
      })();
      var vF12 = function () {
        function f59(p254, p255) {
          this._d = p254;
          this.me = p255;
          this.de = 0;
          p254.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f59.prototype.ee = function (p256, p257) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p256, p257);
        };
        f59.prototype.fe = function (p258, p259) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p258, p259);
        };
        f59.prototype.pe = function (p260, p261, p262) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v166 = 1 / (p261 / p262);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p260) {
              vThis5.de = Math.min(1, vThis5.de + v166);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v166);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p262);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f59;
      }();
      f55.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f55;
    }();
    var vF14 = function () {
      function f60(p263) {
        this.se = p263;
        this.te = p263.get()[0];
        this.ue = new vF7.ac({
          view: this.te,
          backgroundColor: vLN016,
          antialias: true
        });
        this.ve = new vF7.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN016 = 0;
      function f61(p264, p265) {
        return p264 + Math.random(p265 - p264);
      }
      function f62(p266) {
        if (p266 >= 0) {
          return Math.cos(p266 % v133);
        } else {
          return Math.cos(p266 % v133 + v133);
        }
      }
      function f63(p267) {
        if (p267 >= 0) {
          return Math.sin(p267 % v133);
        } else {
          return Math.sin(p267 % v133 + v133);
        }
      }
      var vA10 = [{
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f61(0, v133),
        Ae: f61(0, v133),
        Be: f61(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f60.prototype.a = function () {
        var vF16 = f16();
        this.ue.backgroundColor = vLN016;
        this.we = new Array(vA10.length);
        for (var vLN017 = 0; vLN017 < this.we.length; vLN017++) {
          this.we[vLN017] = new vF7.ec();
          this.we[vLN017].texture = vF16.q.Fe;
          this.we[vLN017].anchor.set(0.5);
          this.we[vLN017].zIndex = 1;
          this.ve.addChild(this.we[vLN017]);
        }
        this.xe = new Array(vF16.q.Ge.length);
        for (var vLN018 = 0; vLN018 < this.xe.length; vLN018++) {
          this.xe[vLN018] = new vF7.ec();
          this.xe[vLN018].texture = vF16.q.Ge[vLN018];
          this.xe[vLN018].anchor.set(0.5);
          this.xe[vLN018].zIndex = 2;
          this.ve.addChild(this.xe[vLN018]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN019 = 0; vLN019 < this.ye.length; vLN019++) {
          this.ye[vLN019] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f60.sc = false;
      f60.Le = function (p268) {
        f60.sc = p268;
      };
      f60.prototype.Ra = function () {
        var v167 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v168 = this.se.width();
        var v169 = this.se.height();
        this.ue.resize(v168, v169);
        this.ue.resolution = v167;
        this.te.width = v167 * v168;
        this.te.height = v167 * v169;
        var v170 = Math.max(v168, v169) * 0.8;
        for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
          this.we[vLN020].width = v170;
          this.we[vLN020].height = v170;
        }
      };
      f60.prototype.Pa = function (p269, p270) {
        if (f60.sc) {
          var v171 = p269 / 1000;
          var v172 = p270 / 1000;
          var v173 = this.se.width();
          var v174 = this.se.height();
          for (var vLN021 = 0; vLN021 < this.we.length; vLN021++) {
            var v175 = vA10[vLN021 % vA10.length];
            var v176 = this.we[vLN021];
            var vF62 = f62(v175.Ce * (v171 * 0.08) + v175.Ae);
            var vF63 = f63(v175.De * (v171 * 0.08));
            var v177 = 0.2 + f62(v175.Ae + v175.Be * v171) * 0.2;
            v176.tint = v175.Ee;
            v176.alpha = v177;
            v176.position.set(v173 * (0.2 + (vF62 + 1) * 0.5 * 0.6), v174 * (0.1 + (vF63 + 1) * 0.5 * 0.8));
          }
          var v178 = Math.max(v173, v174) * 0.05;
          for (var vLN022 = 0; vLN022 < this.xe.length; vLN022++) {
            var v179 = this.ye[vLN022];
            var v180 = this.xe[vLN022];
            var v181 = v133 * vLN022 / this.xe.length + v179.He;
            v179.Ke += v179.Ie * v172;
            if (v179.Ke > 1.3) {
              v179.He = Math.random() * v133;
              v179.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v179.Je = 0.15 + Math.random() * 0.7;
              v179.Ke = -0.3;
            }
            var v182 = v179.Je + Math.sin(Math.sin(v181 + v171 * 0.48) * 6) * 0.03;
            var v183 = v179.Ke;
            var vF27 = f27(Math.sin(Math.PI * v183), 0.1, 1);
            var v184 = (0.4 + (1 + Math.sin(v181 + v171 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v185 = v181 + v179.Ie * 2 * v171;
            v180.alpha = vF27;
            v180.position.set(v173 * v182, v174 * v183);
            v180.rotation = v185;
            var v186 = v180.texture.width / v180.texture.height;
            v180.width = v184 * v178;
            v180.height = v184 * v178 * v186;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f60;
    }();
    var vF15 = function () {
      function f64() {}
      f64.Na = "consent_state_2";
      f64.ya = "showPlayerNames";
      f64.Me = "musicEnabled";
      f64.Ne = "sfxEnabled";
      f64.Oe = "account_type";
      f64.va = "gameMode";
      f64.Aa = "nickname";
      f64.Ba = "skin";
      f64.d = "prerollCount";
      f64.La = "shared";
      return f64;
    }();
    var vF17 = function () {
      function f65(p271, p272, p273) {
        var v187 = false;
        for (var v188 = p273.length, vLN023 = 0, v189 = v188 - 1; vLN023 < v188; v189 = vLN023++) {
          if (p273[vLN023][1] > p272 != p273[v189][1] > p272 && p271 < (p273[v189][0] - p273[vLN023][0]) * (p272 - p273[vLN023][1]) / (p273[v189][1] - p273[vLN023][1]) + p273[vLN023][0]) {
            v187 = !v187;
          }
        }
        return v187;
      }
      var vA11 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p274, p275) {
          return f65(p275, p274, vA11);
        }
      };
    }();
    var vF18 = function () {
      function f66(p276) {
        var vUndefined3 = undefined;
        vUndefined3 = p276 > 0 ? "+" + Math.floor(p276) : p276 < 0 ? "-" + Math.floor(p276) : "0";
        var v190 = Math.min(1.5, 0.5 + p276 / 600);
        var vUndefined4 = undefined;
        if (p276 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p276 < 30) {
          var v191 = (p276 - 1) / 29;
          vUndefined4 = f68((1 - v191) * 1 + v191 * 0.96, (1 - v191) * 1 + v191 * 0.82, (1 - v191) * 1 + v191 * 0);
        } else if (p276 < 300) {
          var v192 = (p276 - 30) / 270;
          vUndefined4 = f68((1 - v192) * 0.96 + v192 * 0.93, (1 - v192) * 0.82 + v192 * 0.34, (1 - v192) * 0 + v192 * 0.25);
        } else if (p276 < 700) {
          var v193 = (p276 - 300) / 400;
          vUndefined4 = f68((1 - v193) * 0.93 + v193 * 0.98, (1 - v193) * 0.34 + v193 * 0, (1 - v193) * 0.25 + v193 * 0.98);
        } else {
          vUndefined4 = f68(0.98, 0, 0.98);
        }
        var v194 = Math.random();
        var v195 = 1 + Math.random() * 0.5;
        return new vF20(vUndefined3, vUndefined4, true, 0.5, v190, v194, v195);
      }
      function f67(p277, p278) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p278) {
          vUndefined5 = 1.3;
          vUndefined6 = f68(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f68(0.96, 0.82, 0);
        }
        return new vF20(p277, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f68(p279, p280, p281) {
        return ((p279 * 255 & 255) << 16) + ((p280 * 255 & 255) << 8) + (p281 * 255 & 255);
      }
      var vF24 = f24(vF7.Zb, function () {
        vF7.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF24.prototype.Re = function (p282) {
        this.Qe += p282;
        if (this.Qe >= 1) {
          var v196 = Math.floor(this.Qe);
          this.Qe -= v196;
          var vF66 = f66(v196);
          this.addChild(vF66);
          this.Pe.push(vF66);
        }
      };
      let vLN024 = 0;
      function f69() {
        vLN024 = 0;
        console.log("تم تصفير عداد الصوت.");
      }
      vF24.prototype.Se = function (p283) {
        f151("count", p283);
        if (p283) {
          if (!vO11.ModeStremerheadshot) {
            const v197 = new Audio();
            if (vLN024 % 10 === 9) {
              v197.src = "https://sdfioj0.github.io/saif0/m.mp3";
            } else {
              v197.src = localStorage.getItem("selectedSound") || "https://sdfioj0.github.io/saif0/effect.mp3";
            }
            if (localStorage.getItem("isMuted") !== "true") {
              v197.play().catch(function (p284) {
                console.error("Error playing sound: ", p284);
              });
            }
            vLN024++;
            if (vLN024 % 10 === 0) {
              vLN024 = 0;
            }
          }
          var v198 = localStorage.getItem("headshotMessage") || "ضربة قوية";
          var vF672 = f67(v198, true);
          this.addChild(vF672);
          this.Pe.push(vF672);
          if (vF672) {
            vO11.emoji_headshot = true;
            setTimeout(() => vO11.emoji_headshot = false, 3000);
          }
        } else {
          var v199 = localStorage.getItem("killMessage") || "حاول مجددًا";
          var vF672 = f67(v199, false);
          this.addChild(vF672);
          this.Pe.push(vF672);
          if (vF672) {
            vO11.emoji_kill = true;
            setTimeout(() => vO11.emoji_kill = false, 3000);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          f69();
          console.log("Home تم تصفير عداد الصوت عند الضغط على زر .");
        });
        $(document).on("click", "#final-replay", function () {
          f69();
          console.log("Replay تم تصفير عداد الصوت عند الضغط على زر .");
        });
        $(document).on("keydown", function (p285) {
          if (p285.key === "r" || p285.key === "R") {
            f69();
            console.log("تم تصفير عداد الصوت عند الضغط على الحرف R.");
          }
        });
      });
      vF24.prototype.Te = function (p286, p287) {
        var v200 = f16().s.H.wb;
        var v201 = v200.ue.width / v200.ue.resolution;
        var v202 = v200.ue.height / v200.ue.resolution;
        var vLN025 = 0;
        while (vLN025 < this.Pe.length) {
          var v203 = this.Pe[vLN025];
          v203.Ue = v203.Ue + p287 / 2000 * v203.Ve;
          v203.We = v203.We + p287 / 2000 * v203.Xe;
          v203.alpha = Math.sin(Math.PI * v203.We) * 0.5;
          v203.scale.set(v203.Ue);
          v203.position.x = v201 * (0.25 + v203.Ye * 0.5);
          v203.position.y = v203.Ze ? v202 * (1 - (1 + v203.We) * 0.5) : v202 * (1 - (0 + v203.We) * 0.5);
          if (v203.We > 1) {
            f33(v203);
            this.Pe.splice(vLN025, 1);
            vLN025--;
          }
          vLN025++;
        }
      };
      var vF20 = function () {
        return f24(vF7.fc, function (p288, p289, p290, p291, p292, p293, p294) {
          vF7.fc.call(this, p288, {
            fill: p289,
            fontFamily: "wormde",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p290;
          this.Ue = p291;
          this.Ve = p292;
          this.Ye = p293;
          this.We = 0;
          this.Xe = p294;
        });
      }();
      return vF24;
    }();
    var vF21 = function () {
      function f70(p295, p296) {
        this.Gc = p295;
        this.Hc = p296;
      }
      return f70;
    }();
    var vO25 = {
      $e: 0,
      _e: 16
    };
    var vF22 = function () {
      function f71() {
        this.af = vO25.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f71.TEAM_DEFAULT = 0;
      f71.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f71;
    }();
    var vF23 = function () {
      function f72(p297) {
        this.se = p297;
        this.te = p297.get()[0];
        this.ue = new vF7.ac({
          view: this.te,
          backgroundColor: vLN026,
          antialias: true
        });
        this.ve = new vF7.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF45();
        this.mf = new vF7.bc();
        this.nf = new vF7.Zb();
        this.pf = new vF7.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF7.Zb();
        this.rf = new vF7.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF7.Zb();
        this.tf = new vF25();
        this.uf = new vF26();
        this.vf = new vF29();
        this.wf = new vF18();
        this.xf = new vF7.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN026 = 0;
      f72.prototype.a = function () {
        this.ue.backgroundColor = vLN026;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f16().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f72.prototype.Ra = function () {
        var v204 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v205 = this.se.width();
        var v206 = this.se.height();
        this.ue.resize(v205, v206);
        this.ue.resolution = v204;
        this.te.width = v204 * v205;
        this.te.height = v204 * v206;
        this.jf = Math.min(Math.min(v205, v206), Math.max(v205, v206) * 0.625);
        this.xf.position.x = v205 / 2;
        this.xf.position.y = v206 / 2;
        this.xf.width = v205;
        this.xf.height = v206;
        this.vf.position.x = v205 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v205, v206), window.multiplier * Math.min(v205, v206));
        if (vO11.ModeStremer) {
          this.tf.position.x = v205 / 2 + 150;
          this.uf.position.x = v205 / 2 + 10;
          this.vf.position.x = v205 / 2 - 130;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v205 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 3;
        this.tf.addChild(vO14.hoisinhnhanh);
        this.tf.addChild(vO14.clock);
        this.tf.addChild(vO14.quaytron);
        this.vf.addChild(vO14.value_server);
        this.vf.addChild(vO14.containerImgS);
        this.tf.addChild(vO14.borderImg);
        window.retundFlagError = () => {
          return vO14.containerImgS.texture = PIXI.Texture.fromImage(vO11.flag);
        };
        this.tf.addChild(vO14.containerCountInfo);
      };
      f72.prototype.Te = function (p298, p299) {
        var vF162 = f16();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p298.af == vO25.$e ? vF162.q.Cf : vF162.q.Df);
        var v207 = this.mf;
        v207.clear();
        v207.lineStyle(0.8, 16711680);
        v207.drawCircle(0, 0, p298.ub);
        v207.endFill();
        this.vf.Ef = p299;
        this.sf.visible = p299;
      };
      f72.prototype.Pa = function (p300, p301) {
        if (!(this.ue.width <= 5)) {
          var vF163 = f16();
          var v208 = vF163.o.N;
          var v209 = this.ue.width / this.ue.resolution;
          var v210 = this.ue.height / this.ue.resolution;
          this.if = f28(this.if, vF163.o.jb, p301, 0.002);
          var v211 = this.jf / this.if;
          var v212 = vF163.o.N.Ff[vF8.ZOOM_TYPE];
          var v213 = v212 != null && v212.sc;
          this.kf = f26(0, 1, this.kf + p301 / 1000 * ((v213 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p301 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p300 / 1200 * 2 * Math.PI);
          var v214 = v208.Gf();
          this.yf.x = f29(this.yf.x, v214.x, p301, vO11.smoothCamera, 33.333);
          this.yf.y = f29(this.yf.y, v214.y, p301, 0.5, 33.333);
          var v215 = v209 / v211 / 2;
          var v216 = v210 / v211 / 2;
          vF163.o.yb(this.yf.x - v215 * 1.3, this.yf.x + v215 * 1.3, this.yf.y - v216 * 1.3, this.yf.y + v216 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v215 * 2, v216 * 2);
          var v217 = vF163.o.fb.ub;
          this.ve.scale.x = v211;
          this.ve.scale.y = v211;
          this.ve.position.x = v209 / 2 - this.yf.x * v211;
          this.ve.position.y = v210 / 2 - this.yf.y * v211;
          var v218 = Math.hypot(v214.x, v214.y);
          if (v218 > v217 - 10) {
            this.hf = f26(0, 1, 1 + (v218 - v217) / 10);
            var v219 = Math.cos(this.ff * v133 / 360) * (1 - this.hf) + this.hf * 1;
            var v220 = Math.sin(this.ff * v133 / 360) * (1 - this.hf);
            var v221 = (Math.atan2(v220, v219) + v133) % v133 * 360 / v133;
            var v222 = this.hf * (0.5 + this.gf * 0.5);
            var vF36 = f36(Math.floor(v221), 1, 0.85 - this.hf * 0.25);
            this.lf.Hf(vF36[0], vF36[1], vF36[2], 0.1 + v222 * 0.2);
          } else {
            this.hf = 0;
            var vF362 = f36(Math.floor(this.ff), 1, 0.85);
            this.lf.Hf(vF362[0], vF362[1], vF362[2], 0.1);
          }
          var vLN027 = 0;
          for (; vLN027 < this.sf.children.length; vLN027++) {
            var v223 = this.sf.children[vLN027];
            v223.position.x = v209 / 2 - (this.yf.x - v223.If.x) * v211;
            v223.position.y = v210 / 2 - (this.yf.y - v223.If.y) * v211;
          }
          this.tf.Jf.position.x = v214.x / v217 * this.tf.Kf;
          this.tf.Jf.position.y = v214.y / v217 * this.tf.Kf;
          this.uf.Qa(p300);
          this.wf.Te(p300, p301);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f72.prototype.Lf = function (p302, p303) {
        p303.Of.Nf.Mf().zIndex = (p302 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p303.Of.Pf.Mf());
        this.pf.addChild(p303.Of.Nf.Mf());
      };
      f72.prototype.Qf = function (p304, p305, p306) {
        p305.Rf.zIndex = f16().o.fb.bf ? 0 : 10 + (p304 + 32768) / 65536 * 5000;
        this.qf.addChild(p305.Rf);
        if (p304 != f16().o.fb.bf) {
          this.sf.addChild(p306);
        }
      };
      var vF25 = function () {
        return f24(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF7.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF7.bc();
          var v224 = new vF7.bc();
          v224.beginFill("black", 0.4);
          v224.drawCircle(0, 0, this.Kf);
          v224.endFill();
          v224.lineStyle(1.4, 16225317);
          v224.drawCircle(0, 0, this.Kf);
          v224.moveTo(0, -this.Kf);
          v224.lineTo(0, +this.Kf);
          v224.moveTo(-this.Kf, 0);
          v224.lineTo(+this.Kf, 0);
          v224.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16225317);
          this.Jf.drawCircle(0, 0, this.Kf * 0.08);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.09);
          this.Jf.endFill();
          this.addChild(v224);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF26 = function () {
        var vF242 = f24(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Tf = {};
        });
        vF242.prototype.Qa = function (p307) {
          var v225 = 0.5 + Math.cos(v133 * (p307 / 1000 / 1.6)) * 0.5;
          var v226;
          for (v226 in this.Tf) {
            var v227 = this.Tf[v226];
            var v228 = v227.Uf;
            v227.alpha = 1 - v228 + v228 * v225;
          }
        };
        vF242.prototype.Te = function (p308) {
          var v229;
          for (v229 in this.Tf) {
            if (p308[v229] == null || !p308[v229].sc) {
              f33(this.Tf[v229]);
              delete this.Tf[v229];
            }
          }
          var vLN028 = 0;
          var v230;
          for (v230 in p308) {
            var v231 = p308[v230];
            if (v231.sc) {
              var v232 = this.Tf[v230];
              if (!v232) {
                var v233 = f16().p.Dc().ld(v231.rc).Zc;
                v232 = new vF28();
                v232.texture = v233.Hc;
                v232.width = 40;
                v232.height = 40;
                this.Tf[v230] = v232;
                this.addChild(v232);
              }
              f15(this, v230, v231.tc);
              v232.Uf = v231.tc;
              if (vO11.ModeStremer) {
                v232.position.x = vLN028 + 225;
              } else {
                v232.position.x = vLN028;
              }
              vLN028 = vLN028 + 40;
            }
          }
        };
        var vF28 = function () {
          return f24(vF7.ec, function () {
            vF7.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF242;
      }();
      var vF29 = function () {
        var vF243 = f24(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.Ef = true;
          this.Vf = 16;
          this.Wf = 17;
          this.Pe = [];
          var vLN029 = 0;
          for (; vLN029 < 4; vLN029++) {
            this.Xf();
          }
        });
        vF243.prototype.Te = function (p309) {
          var vF164 = f16();
          var v234 = vF164.o.fb.af == vO25._e;
          var vLN7 = 7;
          var vLN030 = 0;
          if (vLN030 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN030].Yf(1, "white");
          this.Pe[vLN030].Zf("", f19(""), "(" + vF164.o.tb + " online)");
          this.Pe[vLN030].position.y = vLN7;
          vLN7 = vLN7 + this.Vf;
          vLN030 = vLN030 + 1;
          if (p309.$f.length > 0) {
            vLN7 = vLN7 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p309.$f.length; vLN031++) {
            var v235 = p309.$f[vLN031];
            var v236 = vF164.p.Dc().ed(v235._f);
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            var v237 = Math.floor(v235.M).toString();
            this.Pe[vLN030].Yf(0.8, v236.bd._c);
            this.Pe[vLN030].Zf("" + (vLN031 + 1), f20(v236.ad), "" + v237);
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
          }
          if (p309.ag.length > 0) {
            vLN7 = vLN7 + this.Wf;
          }
          var vLN032 = 0;
          for (; vLN032 < p309.ag.length; vLN032++) {
            var v238 = p309.ag[vLN032];
            var v239 = vF164.o.fb.bf == v238.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v239) {
              vUndefined7 = "yellow";
              vUndefined8 = vF164.o.N.Mb.ad;
            } else {
              var v240 = vF164.o.hb[v238.bg];
              if (v240 != null) {
                vUndefined7 = v234 ? vF164.p.Dc().ed(v240.Mb.cg).bd._c : vF164.p.Dc().dd(v240.Mb.dg)._c;
                vUndefined8 = this.Ef ? v240.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v239) {
              vLN7 = vLN7 + this.Wf;
            }
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(v239 ? 1 : 0.8, vUndefined7);
            var v241 = Math.floor(v238.M).toString();
            this.Pe[vLN030].Zf("" + (vLN032 + 1), vUndefined8, "" + v241);
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
            if (v239) {
              vLN7 = vLN7 + this.Wf;
            }
          }
          if (vF164.o.O > p309.ag.length) {
            vLN7 = vLN7 + this.Wf;
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(2, "white");
            window.tuNewScore = Math.floor(vF164.o.N.M).toString();
            this.Pe[vLN030].Zf("" + vF164.o.O, vF164.o.N.Mb.ad, "" + window.tuNewScore);
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
            vLN7 = vLN7 + this.Wf;
          }
          while (this.Pe.length > vLN030) {
            f33(this.Pe.pop());
          }
        };
        vF243.prototype.Xf = function () {
          var v242 = new vF30();
          v242.position.y = 0;
          if (this.Pe.length > 0) {
            v242.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v242);
          this.addChild(v242);
        };
        var vF30 = function () {
          var vF244 = f24(vF7.Zb, function () {
            vF7.Zb.call(this);
            this.eg = new vF7.fc("", {
              fontFamily: "wormde",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.eg.anchor.x = 2;
            this.eg.position.x = 4;
            this.addChild(this.eg);
            this.fg = new vF7.fc("", {
              fontFamily: "wormde",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF7.fc("", {
              fontFamily: "wormde",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 190;
            this.addChild(this.gg);
          });
          vF244.prototype.Zf = function (p310, p311, p312) {
            this.eg.text = p310;
            this.gg.text = p312;
            var vP311 = p311;
            this.fg.text = vP311;
            while (this.fg.width > 120) {
              vP311 = vP311.substring(0, vP311.length - 1);
              this.fg.text = vP311 + "..";
            }
          };
          vF244.prototype.Yf = function (p313, p314) {
            this.eg.alpha = p313;
            this.eg.style.fill = p314;
            this.fg.alpha = p313;
            this.fg.style.fill = p314;
            this.gg.alpha = p313;
            this.gg.style.fill = p314;
          };
          return vF244;
        }();
        return vF243;
      }();
      return f72;
    }();
    var vF31 = function () {
      function f73(p315) {
        this.o = p315;
        this.hg = [];
        this.ig = 0;
      }
      f73.prototype.Xb = function (p316) {
        this.hg.push(new DataView(p316));
      };
      f73.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f73.prototype.Bb = function () {
        for (var vLN033 = 0; vLN033 < 10; vLN033++) {
          if (this.hg.length === 0) {
            return;
          }
          var v243 = this.hg.shift();
          try {
            this.jg(v243);
          } catch (e25) {
            console.log("DataReader error: " + e25);
            throw e25;
          }
        }
      };
      f73.prototype.jg = function (p317) {
        switch (p317.mc(0) & 255) {
          case 0:
            this.kg(p317, 1);
            return;
          case 1:
            this.lg(p317, 1);
            return;
          case 2:
            this.mg(p317, 1);
            return;
          case 3:
            this.ng(p317, 1);
            return;
          case 4:
            this.og(p317, 1);
            return;
          case 5:
            this.pg(p317, 1);
            return;
        }
      };
      f73.prototype.kg = function (p318, p319) {
        console.log("sgp1");
        this.o.fb.af = p318.mc(p319);
        p319 = p319 + 1;
        var v244 = p318.nc(p319);
        p319 = p319 + 2;
        this.o.fb.bf = v244;
        this.o.N.Mb.Lb = v244;
        this.o.fb.ub = p318.pc(p319);
        p319 = p319 + 4;
        this.o.fb.cf = p318.pc(p319);
        p319 = p319 + 4;
        this.o.fb.df = p318.pc(p319);
        p319 = p319 + 4;
        f16().s.H.wb.Te(this.o.fb, f16().s.xa.wa());
        console.log("sgp2");
        return p319;
      };
      f73.prototype.lg = function (p320, p321) {
        var v245 = this.ig++;
        var v246 = p320.nc(p321);
        p321 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p321 = this.sg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p321 = this.tg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p321 = this.ug(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p321 = this.vg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p321 = this.wg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p321 = this.xg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p321 = this.yg(p320, p321);
        }
        vUndefined9 = this.qg(p320, p321);
        p321 += this.rg(vUndefined9);
        for (var vLN041 = 0; vLN041 < vUndefined9; vLN041++) {
          p321 = this.zg(p320, p321);
        }
        if (v245 > 0) {
          p321 = this.Ag(p320, p321);
        }
        this.o.Qb(v245, v246);
        return p321;
      };
      f73.prototype.vg = function (p322, p323) {
        var v247 = new vF47.Config();
        v247.Lb = p322.nc(p323);
        p323 = p323 + 2;
        v247.cg = this.o.fb.af == vO25._e ? p322.mc(p323++) : vF22.TEAM_DEFAULT;
        v247.dg = p322.nc(p323);
        let vP323 = p323;
        p323 = p323 + 2;
        v247.Bg = p322.nc(p323);
        let vP3232 = p323;
        p323 = p323 + 2;
        v247.Cg = p322.nc(p323);
        let vP3233 = p323;
        p323 = p323 + 2;
        v247.Dg = p322.nc(p323);
        let vP3234 = p323;
        p323 = p323 + 2;
        v247.Eg = p322.nc(p323);
        let vP3235 = p323;
        p323 = p323 + 2;
        var v248 = p322.mc(p323);
        p323 = p323 + 1;
        var vLS3 = "";
        var vLN042 = 0;
        for (; vLN042 < v248; vLN042++) {
          vLS3 = vLS3 + String.fromCharCode(p322.nc(p323));
          p323 = p323 + 2;
        }
        if (p323 > 210) {
          for (let v249 in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[v249].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v249].Mb.ad);
              var v250 = this.o.hb[v249].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v250);
              f73 = v250.substr(0, 4);
              console.log("primeros digitos: " + f73);
              let v251 = v250.substr(4, 3);
              console.log("segundos digitos: " + v251);
              let v252 = v250.substr(7, 3);
              console.log("tercer digitos: " + v252);
              let v253 = v250.substr(10, 3);
              console.log("mouthId_A: " + v253);
              if (f73 !== "0000" && vO11.visibleSkin.indexOf(parseInt(f73)) !== -1) {
                this.o.hb[v249].Mb.dg = parseInt(f73);
              }
              if (v251 !== "000") {
                this.o.hb[v249].Mb.Eg = parseInt(v251);
              }
              if (v252 !== "000") {
                this.o.hb[v249].Mb.Bg = parseInt(v252);
              }
              if (v253 !== "000") {
                this.o.hb[v249].Mb.Cg = parseInt(v253);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v247.Lb) {
          v247.dg = vO11.PropertyManager.rh;
          v247.Bg = vO11.PropertyManager.sh;
          v247.Cg = vO11.PropertyManager.th;
          v247.Dg = vO11.PropertyManager.uh;
          v247.Eg = vO11.PropertyManager.vh;
          p322.setInt16(vP323, v247.dg);
          p322.setInt16(vP3232, v247.Bg);
          p322.setInt16(vP3233, v247.Cg);
          p322.setInt16(vP3234, v247.Dg);
          p322.setInt16(vP3235, v247.Eg);
          vO8.aload = true;
          vO8.aId = vP323;
        }
        v247.ad = vLS3;
        if (this.o.fb.bf === v247.Lb) {
          this.o.N.Fg(v247);
          v247.Mb = v247.Lb;
          v247.bd = v247.ad;
        } else {
          var v254 = this.o.hb[v247.Lb];
          if (v254 != null) {
            v254.Kb();
          }
          var v255 = new vF47(this.o.fb);
          v255.vb(f16().s.H.wb);
          this.o.hb[v247.Lb] = v255;
          v255.Fg(v247);
        }
        return p323;
      };
      f73.prototype.wg = function (p324, p325) {
        var v256 = p324.nc(p325);
        p325 += 2;
        var v257 = p324.mc(p325);
        p325++;
        var v258 = !!(v257 & 1);
        var v259 = !!(v257 & 2);
        var vLN043 = 0;
        if (v258) {
          vLN043 = p324.nc(p325);
          p325 += 2;
        }
        var v260 = this.Gg(v256);
        if (v260 === undefined) {
          return p325;
        }
        v260.Ib = false;
        if (!v260.Hb) {
          return p325;
        }
        var v261 = this.Gg(v256);
        if (v258 && v261 !== undefined && v261.Hb) {
          if (vLN043 === this.o.fb.bf) {
            var v262 = this.o.N.Gf();
            var v263 = v260.Hg(v262.x, v262.y);
            Math.max(0, 1 - v263.distance / (this.o.jb * 0.5));
            if (v263.distance < this.o.jb * 0.5) {
              f16().s.H.wb.wf.Se(v259);
            }
          } else if (v256 === this.o.fb.bf) ;else {
            var v264 = this.o.N.Gf();
            var v265 = v260.Hg(v264.x, v264.y);
            Math.max(0, 1 - v265.distance / (this.o.jb * 0.5));
          }
        } else if (v256 === this.o.fb.bf) ;else {
          var v266 = this.o.N.Gf();
          var v267 = v260.Hg(v266.x, v266.y);
          Math.max(0, 1 - v267.distance / (this.o.jb * 0.5));
        }
        return p325;
      };
      f73.prototype.zg = function (p326, p327) {
        var v268 = p326.nc(p327);
        p327 += 2;
        var v269 = v268 === this.o.fb.bf ? null : this.o.hb[v268];
        var v270 = p326.mc(p327);
        p327 += 1;
        var v271 = !!(v270 & 1);
        if (v270 & 2) {
          var v272 = p326.pc(p327);
          p327 += 4;
          if (v269) {
            v269.Ig(v272);
          }
        }
        var v273 = this.Jg(p326.mc(p327++), p326.mc(p327++), p326.mc(p327++));
        var v274 = this.Jg(p326.mc(p327++), p326.mc(p327++), p326.mc(p327++));
        if (v269) {
          v269.Kg(v273, v274, v271);
          var v275 = this.o.N.Gf();
          var v276 = v269.Gf();
          var v277 = Math.max(0, 1 - Math.hypot(v275.x - v276.x, v275.y - v276.y) / (this.o.jb * 0.5));
          f16().r.Zd(v277, v268, v271);
        }
        var v278 = this.qg(p326, p327);
        p327 += this.rg(v278);
        if (v269) {
          for (var v279 in v269.Ff) {
            var v280 = v269.Ff[v279];
            if (v280) {
              v280.sc = false;
            }
          }
        }
        for (var vLN044 = 0; vLN044 < v278; vLN044++) {
          var v281 = p326.mc(p327);
          p327++;
          var v282 = p326.mc(p327);
          p327++;
          if (v269) {
            var v283 = v269.Ff[v281];
            v283 ||= v269.Ff[v281] = new vF8(v281);
            v283.sc = true;
            v283.tc = Math.min(1, Math.max(0, v282 / 100));
          }
        }
        return p327;
      };
      f73.prototype.Ag = function (p328, p329) {
        var v284 = this.o.N;
        var v285 = p328.mc(p329);
        p329 += 1;
        var v286 = !!(v285 & 1);
        var v287 = !!(v285 & 2);
        var v288 = !!(v285 & 4);
        if (v287) {
          var v289 = v284.M;
          v284.Ig(p328.pc(p329));
          p329 += 4;
          v289 = v284.M - v289;
          if (v289 > 0) {
            f16().s.H.wb.wf.Re(v289);
          }
        }
        if (v288) {
          this.o.ib = p328.pc(p329);
          p329 += 4;
        }
        var v290 = this.Jg(p328.mc(p329++), p328.mc(p329++), p328.mc(p329++));
        var v291 = this.Jg(p328.mc(p329++), p328.mc(p329++), p328.mc(p329++));
        v284.Kg(v290, v291, v286);
        f16().r.Zd(0.5, this.o.fb.bf, v286);
        var v292 = this.qg(p328, p329);
        p329 += this.rg(v292);
        for (var v293 in v284.Ff) {
          var v294 = v284.Ff[v293];
          if (v294) {
            v294.sc = false;
          }
        }
        for (var vLN045 = 0; vLN045 < v292; vLN045++) {
          var v295 = p328.mc(p329);
          p329++;
          var v296 = p328.mc(p329);
          p329++;
          var v297 = v284.Ff[v295];
          if (!v297) {
            v297 = new vF8(v295);
            v284.Ff[v295] = v297;
          }
          v297.sc = true;
          v297.tc = Math.min(1, Math.max(0, v296 / 100));
        }
        f16().s.H.wb.uf.Te(v284.Ff);
      };
      f73.prototype.xg = function (p330, p331) {
        var vThis6 = this;
        var v298 = p330.nc(p331);
        p331 += 2;
        var v299 = this.Gg(v298);
        var v300 = p330.pc(p331);
        p331 += 4;
        var vA12 = [];
        for (var v301 in v299.Ff) {
          if (v301 == 0) {
            vA12.push("velocidad");
            $(".v0").fadeIn();
          } else if (v301 == 1) {
            vA12.push("movimiento");
            $(".v1").fadeIn();
          } else if (v301 == 2) {
            vA12.push("iman");
            $(".v2").fadeIn();
          } else if (v301 == 3) {
            vA12.push("comidax2");
            $(".v3").fadeIn();
          } else if (v301 == 4) {
            vA12.push("comidax5");
            $(".v4").fadeIn();
          } else if (v301 == 5) {
            vA12.push("comidax10");
            $(".v5").fadeIn();
          } else if (v301 == 6) {
            vA12.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA12;
        $(".Worm_cerca").text(" : " + v299.Mb.ad);
        if (v299.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v302 = this.qg(p330, p331);
        p331 += this.rg(v302);
        if (v299) {
          v299.Ig(v300);
          v299.Lg(function () {
            return vThis6.Jg(p330.mc(p331++), p330.mc(p331++), p330.mc(p331++));
          }, v302);
          v299.Mg(true);
          var v303 = this.o.N.Gf();
          var v304 = v299.Gf();
          var v305 = Math.max(0, 1 - Math.hypot(v303.x - v304.x, v303.y - v304.y) / (this.o.jb * 0.5));
          f16().r.Xd(v305, v298);
        } else {
          p331 += v302 * 6;
        }
        return p331;
      };
      f73.prototype.yg = function (p332, p333) {
        var v306 = p332.nc(p333);
        p333 += 2;
        var v307 = this.o.hb[v306];
        var vA13 = [];
        if (v307 && v307.Ib) {
          v307.Mg(false);
        }
        f16().r.Yd(v306);
        return p333;
      };
      f73.prototype.sg = function (p334, p335) {
        var v308 = new vF33.Config();
        v308.Lb = p334.oc(p335);
        p335 += 4;
        v308.cg = this.o.fb.af === vO25._e ? p334.mc(p335++) : vF22.TEAM_DEFAULT;
        v308.Ng = this.Jg(p334.mc(p335++), p334.mc(p335++), p334.mc(p335++));
        v308.dg = p334.mc(p335++);
        var v309 = this.o.gb[v308.Lb];
        if (v309 != null) {
          v309.Kb();
        }
        var v310 = new vF33(v308, f16().s.H.wb);
        v310.Og(this.Pg(v308.Lb), this.Qg(v308.Lb), true);
        this.o.gb[v308.Lb] = v310;
        return p335;
      };
      f73.prototype.tg = function (p336, p337) {
        var v311 = p336.oc(p337);
        p337 += 4;
        var v312 = this.o.gb[v311];
        if (v312) {
          v312.Rg = 0;
          v312.Sg = v312.Sg * 1.5;
          v312.Nb = true;
        }
        return p337;
      };
      f73.prototype.ug = function (p338, p339) {
        var v313 = p338.oc(p339);
        p339 += 4;
        var v314 = p338.nc(p339);
        p339 += 2;
        var v315 = this.o.gb[v313];
        if (v315) {
          v315.Rg = 0;
          v315.Sg = v315.Sg * 0.1;
          v315.Nb = true;
          var v316 = this.Gg(v314);
          if (v316 && v316.Hb) {
            this.o.fb.bf;
            var v317 = v316.Gf();
            v315.Og(v317.x, v317.y, false);
          }
        }
        return p339;
      };
      var vA14 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f73.prototype.mg = function (p340) {
        var v318 = f16().q.Ug.Tg;
        var v319 = v318.getImageData(0, 0, 80, 80);
        var v320 = vA14[0];
        var v321 = 80 - v320;
        var vLN046 = 0;
        for (var vLN047 = 0; vLN047 < 628; vLN047++) {
          var v322 = p340.mc(1 + vLN047);
          for (var vLN048 = 0; vLN048 < 8; vLN048++) {
            var v323 = (v322 >> vLN048 & 1) != 0;
            var v324 = (v320 + vLN046 * 80) * 4;
            if (v323) {
              v319.data[v324] = 255;
              v319.data[v324 + 1] = 255;
              v319.data[v324 + 2] = 255;
              v319.data[v324 + 3] = 255;
            } else {
              v319.data[v324 + 3] = 0;
            }
            if (++v320 >= v321 && ++vLN046 < 80) {
              v320 = vA14[vLN046];
              v321 = 80 - v320;
            }
          }
        }
        v318.putImageData(v319, 0, 0);
        var v325 = f16().s.H.wb.tf.Sf;
        v325.texture = f16().q.Ug.Hc;
        v325.texture.update();
      };
      f73.prototype.og = function (p341, p342) {
        var v326 = p341.oc(p342);
        p342 += 4;
        console.log("Wormy Error: " + v326);
      };
      f73.prototype.pg = function (p343, p344) {
        console.log("g.o");
        this.o.Rb();
      };
      var vLN9 = 9;
      f73.prototype.ng = function (p345, p346) {
        this.o.tb = p345.nc(p346);
        p346 += 2;
        this.o.O = p345.nc(p346);
        p346 += 2;
        var v327 = new vF42();
        v327.ag = [];
        if (vO11.ModeStremerbatop) {
          var v331 = p345.mc(p346++);
          for (var vLN049 = vLN9; vLN049 < v331; vLN049++) {
            var v332 = p345.nc(p346);
            p346 += 2;
            var v333 = p345.pc(p346);
            p346 += 4;
            v327.ag.push(vF42.Vg(v332, v333));
          }
        } else {
          var v331 = p345.mc(p346++);
          for (var vLN049 = 0; vLN049 < v331; vLN049++) {
            var v332 = p345.nc(p346);
            p346 += 2;
            var v333 = p345.pc(p346);
            p346 += 4;
            v327.ag.push(vF42.Vg(v332, v333));
          }
        }
        v327.$f = [];
        if (this.o.fb.af === vO25._e) {
          var v334 = p345.mc(p346++);
          for (var vLN050 = 0; vLN050 < v334; vLN050++) {
            var v335 = p345.mc(p346);
            p346 += 1;
            var v336 = p345.pc(p346);
            p346 += 4;
            v327.$f.push(vF42.Wg(v335, v336));
          }
        }
        f16().s.H.wb.vf.Te(v327);
      };
      f73.prototype.Gg = function (p347) {
        if (p347 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p347];
        }
      };
      f73.prototype.Jg = function (p348, p349, p350) {
        return (((p350 & 255 | p349 << 8 & 65280 | p348 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f73.prototype.Pg = function (p351) {
        return ((p351 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f73.prototype.Qg = function (p352) {
        return ((p352 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f73.prototype.qg = function (p353, p354) {
        var v337 = p353.mc(p354);
        if ((v337 & 128) == 0) {
          return v337;
        }
        var v338 = p353.mc(p354 + 1);
        if ((v338 & 128) == 0) {
          return v338 | v337 << 7 & 16256;
        }
        var v339 = p353.mc(p354 + 2);
        if ((v339 & 128) == 0) {
          return v339 | v338 << 7 & 16256 | v337 << 14 & 2080768;
        }
        var v340 = p353.mc(p354 + 3);
        if ((v340 & 128) == 0) {
          return v340 | v339 << 7 & 16256 | v338 << 14 & 2080768 | v337 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f73.prototype.rg = function (p355) {
        if (p355 < 128) {
          return 1;
        } else if (p355 < 16384) {
          return 2;
        } else if (p355 < 2097152) {
          return 3;
        } else if (p355 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f73;
    }();
    var vF32 = function () {
      function f74(p356) {
        this.Xg = p356;
      }
      f74.Yg = function () {
        return new vF32(null);
      };
      f74.Zg = function (p357) {
        return new vF32(p357);
      };
      f74.prototype.$g = function () {
        return this.Xg;
      };
      f74.prototype._g = function () {
        return this.Xg != null;
      };
      f74.prototype.ah = function (p358) {
        if (this.Xg != null) {
          p358(this.Xg);
        }
      };
      return f74;
    }();
    var vF33 = function () {
      function f75(p359, p360) {
        this.Mb = p359;
        this.bh = p359.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p359.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF34();
        this.gh.hh(f16().o.fb.af, this.Mb.cg === vF22.TEAM_DEFAULT ? null : f16().p.Dc().ed(this.Mb.cg), f16().p.Dc().kd(this.Mb.dg));
        p360.Lf(p359.Lb, this.gh);
      }
      f75.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f75.prototype.Og = function (p361, p362, p363) {
        this.Ob = p361;
        this.Pb = p362;
        if (p363) {
          this.ch = p361;
          this.dh = p362;
        }
      };
      f75.prototype.Fb = function (p364, p365) {
        var v341 = Math.min(0.5, this.Sg * 1);
        var v342 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f28(this.eh, v341, p365, 0.0025);
        this.fh = f28(this.fh, v342, p365, 0.0025);
        this.Jb = f28(this.Jb, this.Rg, p365, 0.0025);
      };
      f75.prototype.Gb = function (p366, p367, p368) {
        this.ch = f28(this.ch, this.Ob, p367, vO11.eat_animation);
        this.dh = f28(this.dh, this.Pb, p367, 0.0025);
        this.gh.Te(this, p366, p367, p368);
      };
      f75.Config = function () {
        function f76() {
          this.Lb = 0;
          this.cg = vF22.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f76;
      }();
      return f75;
    }();
    var vF34 = function () {
      function f77() {
        this.Of = new vF35(new vF46(), new vF46());
        this.Of.Pf.jh.blendMode = vF7.ic.jc;
        this.Of.Pf.jh.zIndex = vLN100;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f77.prototype.hh = function (p369, p370, p371) {
        var v343 = p371.Zc;
        if (v343 != null) {
          this.Of.Nf.kh(v343);
        }
        var v344 = p369 == vO25._e && p370 != null ? p370.cd.$c : p371.$c;
        if (v344 != null) {
          this.Of.Pf.kh(v344);
        }
      };
      f77.prototype.Te = function (p372, p373, p374, p375) {
        if (!p375(p372.ch, p372.dh)) {
          this.Of.lh();
          return;
        }
        var v345 = p372.fh * (1 + Math.cos(p372.Ae + p373 / 200) * 0.3);
        if (p372.bh) {
          this.Of.mh(p372.ch, p372.dh, vO11.PortionSize * p372.eh, p372.Jb * 1, vO11.PortionAura * v345, vO11.PortionTransparent * p372.Jb);
        } else {
          this.Of.mh(p372.ch, p372.dh, vO11.FoodSize * p372.eh, p372.Jb * 1, vO11.FoodShadow * v345, vO11.FoodTransparent * p372.Jb);
        }
      };
      var vF35 = function () {
        function f78(p376, p377) {
          this.Nf = p376;
          this.Pf = p377;
        }
        f78.prototype.mh = function (p378, p379, p380, p381, p382, p383) {
          this.Nf.Mg(true);
          this.Nf.nh(p378, p379);
          this.Nf.oh(p380);
          this.Nf.qh(p381);
          this.Pf.Mg(true);
          this.Pf.nh(p378, p379);
          this.Pf.oh(p382);
          this.Pf.qh(p383);
        };
        f78.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f78;
      }();
      return f77;
    }();
    var vF37 = function () {
      function f79() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f80(p384, p385) {
        if (!f16().p.W()) {
          return null;
        }
        var v346 = f16().p.Ac();
        if (p385 === vF38.ia) {
          var v_0x5379d0 = f81(v346.skinArrayDict, p384);
          if (v_0x5379d0 < 0) {
            return null;
          } else {
            return v346.skinArrayDict[v_0x5379d0];
          }
        }
        switch (p385) {
          case vF38.ja:
            return v346.eyesDict[p384];
          case vF38.ka:
            return v346.mouthDict[p384];
          case vF38.la:
            return v346.glassesDict[p384];
          case vF38.ma:
            return v346.hatDict[p384];
        }
        return null;
      }
      function f81(p386, p387) {
        for (var vLN051 = 0; vLN051 < p386.length; vLN051++) {
          if (p386[vLN051].id == p387) {
            return vLN051;
          }
        }
        return -1;
      }
      f79.prototype.a = function () {};
      f79.prototype.ha = function (p388) {
        if (!vO11.loading) {
          vO11.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(vO11));
        }
        switch (p388) {
          case vF38.ia:
            return this.rh;
          case vF38.ja:
            return this.sh;
          case vF38.ka:
            return this.th;
          case vF38.la:
            return this.uh;
          case vF38.ma:
            return this.vh;
        }
        return 0;
      };
      f79.prototype.xh = function (p389) {
        this.wh.push(p389);
        this.yh();
      };
      f79.prototype.Ia = function () {
        if (!f16().p.W()) {
          return f34([32, 33, 34, 35]);
        }
        for (var v347 = f16().p.Ac(), vA15 = [], vLN052 = 0; vLN052 < v347.skinArrayDict.length; vLN052++) {
          var v348 = v347.skinArrayDict[vLN052];
          if (this.Ja(v348.id, vF38.ia)) {
            vA15.push(v348);
          }
        }
        if (vA15.length === 0) {
          return 0;
        } else {
          return vA15[parseInt(vA15.length * Math.random())].id;
        }
      };
      f79.prototype.zh = function () {
        if (f16().p.W) {
          var v349 = f16().p.Ac().skinArrayDict;
          var vF81 = f81(v349, this.rh);
          if (!(vF81 < 0)) {
            for (var v350 = vF81 + 1; v350 < v349.length; v350++) {
              if (this.Ja(v349[v350].id, vF38.ia)) {
                this.rh = v349[v350].id;
                this.yh();
                return;
              }
            }
            for (var vLN053 = 0; vLN053 < vF81; vLN053++) {
              if (this.Ja(v349[vLN053].id, vF38.ia)) {
                this.rh = v349[vLN053].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f79.prototype.Ah = function () {
        if (f16().p.W) {
          var v351 = f16().p.Ac().skinArrayDict;
          var vF812 = f81(v351, this.rh);
          if (!(vF812 < 0)) {
            for (var v352 = vF812 - 1; v352 >= 0; v352--) {
              if (this.Ja(v351[v352].id, vF38.ia)) {
                this.rh = v351[v352].id;
                this.yh();
                return;
              }
            }
            for (var v353 = v351.length - 1; v353 > vF812; v353--) {
              if (this.Ja(v351[v353].id, vF38.ia)) {
                this.rh = v351[v353].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f79.prototype.Bh = function (p390, p391) {
        if (!f16().p.W() || this.Ja(p390, p391)) {
          switch (p391) {
            case vF38.ia:
              if (this.rh != p390) {
                this.rh = p390;
                this.yh();
              }
              return;
            case vF38.ja:
              if (this.sh != p390) {
                this.sh = p390;
                this.yh();
              }
              return;
            case vF38.ka:
              if (this.th != p390) {
                this.th = p390;
                this.yh();
              }
              return;
            case vF38.la:
              if (this.uh != p390) {
                this.uh = p390;
                this.yh();
              }
              return;
            case vF38.ma:
              if (this.vh != p390) {
                this.vh = p390;
                this.yh();
              }
              return;
          }
        }
      };
    f79.prototype.Ja = function () {
    return true;
};
      f79.prototype.yh = function () {
        for (var vLN054 = 0; vLN054 < this.wh.length; vLN054++) {
          this.wh[vLN054]();
        }
      };
      return f79;
    }();
    var vF38 = function () {
      function f82() {}
      f82.ia = "SKIN";
      f82.ja = "EYES";
      f82.ka = "MOUTH";
      f82.la = "GLASSES";
      f82.ma = "HAT";
      return f82;
    }();
    var vF39 = function () {
      function f83(p394, p395, p396, p397, p398, p399, p400, p401, p402) {
        this.Hc = new vF7._b(p394, new vF7.dc(p395, p396, p397, p398));
        this.Dh = p395;
        this.Eh = p396;
        this.Fh = p397;
        this.Gh = p398;
        this.Hh = p399 || (p401 || p397) / 2;
        this.Ih = p400 || (p402 || p398) / 2;
        this.Jh = p401 || p397;
        this.Kh = p402 || p398;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f83;
    }();
    var vF40 = function () {
      function f84() {
        this.fn_o = f85;
        this.Fe = new vF7._b(vF7.$b.from("/images/bg-obstacle.png"));
        var v354 = vF7.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128)), new vF7._b(v354, new vF7.dc(0, 0, 128, 128))];
        this.Cf = new vF7._b(f85());
        this.Df = new vF7._b(function () {
          var v355 = vF7.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v355.wrapMode = vF7.kc.lc;
          return v355;
        }());
        this.Af = new vF7._b(vF7.$b.from("/images/lens.png"));
        var v356 = vF7.$b.from("/images/wear-ability.png");
        var v357 = vF7.$b.from("https://i.imgur.com/EDt862t.png");
        var v358 = vF7.$b.from("https://i.imgur.com/U5sTlhC.png");
        var v359 = vF7.$b.from("https://i.imgur.com/ub4ed3R.png");
        var v360 = vF7.$b.from("https://i.imgur.com/hk8xI4i.png");
        this.X_x5 = new vF39(v360, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x2 = new vF39(v360, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.X_x10 = new vF39(v360, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF39(v360, 79, 8, 75, 77, 265, 1.5, 128, 128);
        this.Id_mobileguia = new vF39(v359, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF39(v357, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF39(v358, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF39(v356, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF39(v356, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new vF39(v360, 156, 4, 87, 74, 285, 63.5, 128, 128);
        this.Ug = function () {
          var v361 = window.document.createElement("canvas");
          v361.width = 80;
          v361.height = 80;
          return {
            te: v361,
            Tg: v361.getContext("2d"),
            Hc: new vF7._b(vF7.$b.from(v361))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f85(p403) {
        var v362 = vF7.$b.from(p403 || "https://i.imgur.com/8ubx4RA.png");
        v362.wrapMode = vF7.kc.lc;
        return v362;
      }
      f84.prototype.a = function (p404) {
        function f86() {
          if (--vLN4 == 0) {
            p404();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f86();
        this.yd = {};
        f86();
        this.Sh = [];
        f86();
        this.Th = null;
        f86();
      };
      return f84;
    }();
    var vF41 = function () {
      function f87() {
        this.H = new vF54();
        this.F = new vF56();
        this.Uh = new vF74();
        this.Vh = new vF75();
        this.Wh = new vF60();
        this.Xh = new vF61();
        this.Yh = new vF65();
        this.Zh = new vF64();
        this.xa = new vF68();
        this.$h = new vF69();
        this._h = new vF71();
        this.ai = new vF72();
        this.aa = new vF58();
        this.ua = new vF55();
        this.pa = new vF57();
        this.bi = [];
        this.ci = null;
      }
      function f88(p405, p406) {
        if (p406 != 0) {
          var v363 = p405[p406];
          f31(p405, 0, 1, p406);
          p405[0] = v363;
        }
      }
      function f89(p407, p408) {
        if (p408 != p407.length + 1) {
          var v364 = p407[p408];
          f31(p407, p408 + 1, p408, p407.length - p408 - 1);
          p407[p407.length - 1] = v364;
        }
      }
      function f90(p409, p410) {
        for (var vLN055 = 0; vLN055 < p409.length; vLN055++) {
          if (p409[vLN055] == p410) {
            return vLN055;
          }
        }
        return -1;
      }
      f87.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN056 = 0; vLN056 < this.bi.length; vLN056++) {
          this.bi[vLN056].a();
        }
        this.ci = new vF14(vF53.di);
      };
      f87.prototype.Qa = function (p411, p412) {
        for (var v365 = this.bi.length - 1; v365 >= 0; v365--) {
          this.bi[v365].Pa(p411, p412);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p411, p412);
        }
      };
      f87.prototype.Ra = function () {
        for (var v366 = this.bi.length - 1; v366 >= 0; v366--) {
          this.bi[v366].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f87.prototype.I = function (p413) {
        var vF90 = f90(this.bi, p413);
        if (!(vF90 < 0)) {
          this.bi[0].ei();
          f88(this.bi, vF90);
          this.fi();
        }
      };
      f87.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f89(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f87.prototype.fi = function () {
        var v367 = this.bi[0];
        v367.ii();
        v367.ji();
        this.ki();
      };
      f87.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f87.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f87;
    }();
var vF42 = function () {
      function f91() {
        this.ag = [];
        this.$f = [];
      }
      f91.Vg = function (p414, p415) {
        return {
          bg: p414,
          M: p415
        };
      };
      f91.Wg = function (p416, p417) {
        return {
          _f: p416,
          M: p417
        };
      };
      return f91;
    }();
    var vF44 = function () {
      function f92() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        
        // --- تفعيل وضع الحساب المخصص وتخطي تسجيل الدخول ---
        this.qi = true; 
        this.ri = "user_mod_active"; 
        
        // ملف البيانات المخصص: ليفل 100 والكوينز كاملة
        this.si = {
          userId: "888888888",
          username: "Wormate_Pro",
          nickname: "Worm_King 👑",
          avatarUrl: "",
          isBuyer: true,
          isConsentGiven: true,
          coins: 999999,          // الكوينز
          level: 100,             // الليفل
          expOnLevel: 0,
          expToNext: 100,
          skinId: 1,              
          eyesId: 1,
          mouthId: 1,
          glassesId: 1,
          hatId: 1,
          highScore: 9999999,     
          bestSurvivalTimeSec: 7200,
          kills: 8888,            
          headShots: 999,
          sessionsPlayed: 5000,
          totalPlayTimeSec: 99999,
          regDate: {},
          propertyList: []        // مصفوفة فارغة لتفادي كراش الدمج
        };
        this.ti = "custom";
      }
      var vLSGuest = "guest";
      f92.prototype.a = function () {
        if (typeof this.vi === "function") {
          this.vi();
        }
      };
      f92.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f92.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f92.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f92.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return typeof vLSimagesguestavatarxma !== "undefined" ? vLSimagesguestavatarxma : "";
        }
      };
      f92.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f92.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f92.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f92.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f92.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f92.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f92.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f92.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f92.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f92.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f92.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f92.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f92.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f92.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f92.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f92.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f92.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f92.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f92.prototype.V = function (p418) {
        this.ni.push(p418);
        p418();
      };
      f92.prototype.Pi = function (p419) {
        this.oi.push(p419);
        p419();
      };
      f92.prototype.Qi = function (p420) {
        this.pi.push(p420);
      };
      f92.prototype.Ch = function (p421, p422) {
        var vO11_pL = (typeof vO11 !== "undefined" && vO11.pL) ? vO11.pL : [];
        var v368 = (this.si.propertyList || []).concat(vO11_pL);
        if (!v368) {
          return false;
        }
        for (var vLN057 = 0; vLN057 < v368.length; vLN057++) {
          var v369 = v368[vLN057];
          if (v369.id == p421 && v369.type === p422) {
            return true;
          }
        }
        return false;
      };
      f92.prototype.P = function () {
        return this.qi;
      };
      f92.prototype.ea = function () {
        return this.ri;
      };
      
      // تعطيل جلب البيانات من الخادم لمنع الكتابة فوق الليفل والكوينز المخصصة
      f92.prototype.Q = function (p423) {
        if (p423) {
          p423();
        }
      };
      f92.prototype.Ri = function (p425) {
        if (p425) {
          p425(this.si);
        }
      };
      f92.prototype.Ui = function (p427, p428, p429) {
        if (p429) {
          p429();
        }
      };
      f92.prototype.Vi = function () {
        this.aj();
      };
      f92.prototype.Zi = function () {
        this.aj();
      };
      f92.prototype.Wi = function () {
        console.log("Custom auth lock: persistent profile active.");
        this.Si();
      };
      f92.prototype.bj = function () {
        console.log("dA block");
      };
      f92.prototype.vi = function () {
        console.log("rs: Custom Session");
        this.aj();
      };
      f92.prototype.aj = function () {
        var vLN058 = 0;
        for (; vLN058 < this.ni.length; vLN058++) {
          this.ni[vLN058]();
        }
        this.Si();
      };
      f92.prototype.Si = function () {
        var vLN059 = 0;
        for (; vLN059 < this.oi.length; vLN059++) {
          this.oi[vLN059]();
        }
        var v378 = this.pi;
        this.pi = [];
        var vLN060 = 0;
        for (; vLN060 < v378.length; vLN060++) {
          v378[vLN060]();
        }
      };
      f92.prototype.Yi = function (p435, p436) {
        this.aj();
      };
      f92.prototype.Xi = function () {
        this.aj();
      };
      f92.prototype.$i = function () {
        console.log("lo:fb");
      };
      f92.prototype._i = function () {
        console.log("lo:gg");
      };
      
      // تصدير f92 كمتغير عالمي لضمان عمل بقية ملفات اللعبة بشكل طبيعي
      if (typeof window !== "undefined") {
        window.f92 = f92;
      }
      return f92;
    }();
    var vF45 = function () {
      function f97() {
        this.cj = {};
        this.cj[v409] = [1, 0.5, 0.25, 0.5];
        this.cj[v410] = vF7._b.WHITE;
        this.cj[v411] = [0, 0];
        this.cj[v412] = [0, 0];
        var v406 = vF7.cc.from(v415, v416, this.cj);
        this.zf = new vF7.hc(v414, v406);
      }
      var v407 = "a1_" + f35();
      var v408 = "a2_" + f35();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v409 = "u3_" + f35();
      var v410 = "u4_" + f35();
      var v411 = "u5_" + f35();
      var v412 = "u6_" + f35();
      var v413 = "v1_" + f35();
      var v414 = new vF7.gc().addAttribute(v407, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v408, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v415 = "precision mediump float;attribute vec2 " + v407 + ";attribute vec2 " + v408 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v413 + ";void main(){" + v413 + "=" + v408 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v407 + ",1.0)).xy,0.0,1.0);}";
      var v416 = "precision highp float;varying vec2 " + v413 + ";uniform vec4 " + v409 + ";uniform sampler2D " + v410 + ";uniform vec2 " + v411 + ";uniform vec2 " + v412 + ";void main(){vec2 coord=" + v413 + "*" + v411 + "+" + v412 + ";vec4 v_color_mix=" + v409 + ";gl_FragColor=texture2D(" + v410 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f97.prototype.Hf = function (p440, p441, p442, p443) {
        var v417 = this.cj[v409];
        v417[0] = p440;
        v417[1] = p441;
        v417[2] = p442;
        v417[3] = p443;
      };
      f97.prototype.Bf = function (p444) {
        this.cj[v410] = p444;
      };
      f97.prototype.Te = function (p445, p446, p447, p448) {
        this.zf.position.x = p445;
        this.zf.position.y = p446;
        this.zf.scale.x = p447;
        this.zf.scale.y = p448;
        var v418 = this.cj[v411];
        v418[0] = p447 * 0.2520615384615385;
        v418[1] = p448 * 0.4357063736263738;
        var v419 = this.cj[v412];
        v419[0] = p445 * 0.2520615384615385;
        v419[1] = p446 * 0.4357063736263738;
      };
      return f97;
    }();
    var vF46 = function () {
      function f98() {
        this.jh = new vF7.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f98.prototype.kh = function (p449) {
        if (p449 && p449.Hc) {
          this.jh.texture = p449.Hc;
          this.jh.anchor.set(p449.Lh, p449.Mh);
          this.dj = p449.Nh;
          this.ej = p449.Oh;
        }
      };
      f98.prototype.oh = function (p450) {
        this.jh.width = p450 * this.dj;
        this.jh.height = p450 * this.ej;
      };
      f98.prototype.fj = function (p451) {
        this.jh.rotation = p451;
      };
      f98.prototype.nh = function (p452, p453) {
        this.jh.position.set(p452, p453);
      };
      f98.prototype.Mg = function (p454) {
        this.jh.visible = p454;
      };
      f98.prototype.gj = function () {
        return this.jh.visible;
      };
      f98.prototype.qh = function (p455) {
        this.jh.alpha = p455;
      };
      f98.prototype.Mf = function () {
        return this.jh;
      };
      f98.prototype.ih = function () {
        f33(this.jh);
      };
      return f98;
    }();
    var vF47 = function () {
      function f99(p456) {
        this.fb = p456;
        this.Mb = new vF47.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(vLN200 * 2);
        this.mj = new Float32Array(vLN200 * 2);
        this.nj = new Float32Array(vLN200 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN200 = 200;
      f99.prototype.Kb = function () {
        if (this.pj != null) {
          f33(this.pj.Rf);
        }
        if (this.qj != null) {
          f33(this.qj);
        }
      };
      f99.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f99.prototype.Fg = function (p457) {
        this.Mb = p457;
        this.rj(this.Hb);
      };
      f99.prototype.Mg = function (p458) {
        var v420 = this.Hb;
        this.Hb = p458;
        this.rj(v420);
      };
      f99.prototype.Ig = function (p459) {
        this.M = p459 * 50;
        var vP459 = p459;
        if (p459 > this.fb.cf) {
          vP459 = Math.atan((p459 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v421 = Math.sqrt(Math.pow(vP459 * 5, 0.707106781186548) * 4 + 25);
        var v422 = Math.min(vLN200, Math.max(3, (v421 - 5) * 5 + 1));
        var v423 = this.kj;
        this.Db = (5 + v421 * 0.9) * 0.025;
        this.kj = Math.floor(v422);
        this.ij = v422 - this.kj;
        if (v423 > 0 && v423 < this.kj) {
          var v424 = this.lj[v423 * 2 - 2];
          var v425 = this.lj[v423 * 2 - 1];
          var v426 = this.mj[v423 * 2 - 2];
          var v427 = this.mj[v423 * 2 - 1];
          var v428 = this.nj[v423 * 2 - 2];
          var v429 = this.nj[v423 * 2 - 1];
          for (var vV423 = v423; vV423 < this.kj; vV423++) {
            this.lj[vV423 * 2] = v424;
            this.lj[vV423 * 2 + 1] = v425;
            this.mj[vV423 * 2] = v426;
            this.mj[vV423 * 2 + 1] = v427;
            this.nj[vV423 * 2] = v428;
            this.nj[vV423 * 2 + 1] = v429;
          }
        }
      };
      f99.prototype.Lg = function (p460, p461) {
        this.kj = p461;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          this.lj[vLN063 * 2] = this.mj[vLN063 * 2] = this.nj[vLN063 * 2] = p460();
          this.lj[vLN063 * 2 + 1] = this.mj[vLN063 * 2 + 1] = this.nj[vLN063 * 2 + 1] = p460();
        }
      };
      f99.prototype.Kg = function (p462, p463, p464) {
        this.hj = p464;
        for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
          this.lj[vLN064 * 2] = this.mj[vLN064 * 2];
          this.lj[vLN064 * 2 + 1] = this.mj[vLN064 * 2 + 1];
        }
        var v430 = p462 - this.mj[0];
        var v431 = p463 - this.mj[1];
        this.sj(v430, v431, this.kj, this.mj);
      };
      f99.prototype.sj = function (p465, p466, p467, p468) {
        var v432 = Math.hypot(p465, p466);
        if (!(v432 <= 0)) {
          var v433 = p468[0];
          var vUndefined10 = undefined;
          p468[0] += p465;
          var v434 = p468[1];
          var vUndefined11 = undefined;
          p468[1] += p466;
          var v435 = this.Db / (this.Db + v432);
          var v436 = 1 - v435 * 2;
          for (var vLN13 = 1, v437 = p467 - 1; vLN13 < v437; vLN13++) {
            vUndefined10 = p468[vLN13 * 2];
            p468[vLN13 * 2] = p468[vLN13 * 2 - 2] * v436 + (vUndefined10 + v433) * v435;
            v433 = vUndefined10;
            vUndefined11 = p468[vLN13 * 2 + 1];
            p468[vLN13 * 2 + 1] = p468[vLN13 * 2 - 1] * v436 + (vUndefined11 + v434) * v435;
            v434 = vUndefined11;
          }
          v435 = this.ij * this.Db / (this.ij * this.Db + v432);
          v436 = 1 - v435 * 2;
          p468[p467 * 2 - 2] = p468[p467 * 2 - 4] * v436 + (p468[p467 * 2 - 2] + v433) * v435;
          p468[p467 * 2 - 1] = p468[p467 * 2 - 3] * v436 + (p468[p467 * 2 - 1] + v434) * v435;
        }
      };
      f99.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f99.prototype.Hg = function (p469, p470) {
        var vLN1000000 = 1000000;
        var vP469 = p469;
        var vP470 = p470;
        for (var vLN065 = 0; vLN065 < this.kj; vLN065++) {
          var v438 = this.nj[vLN065 * 2];
          var v439 = this.nj[vLN065 * 2 + 1];
          var v440 = Math.hypot(p469 - v438, p470 - v439);
          if (v440 < vLN1000000) {
            vLN1000000 = v440;
            vP469 = v438;
            vP470 = v439;
          }
        }
        return {
          x: vP469,
          y: vP470,
          distance: vLN1000000
        };
      };
      f99.prototype.vb = function (p471) {
        this.oj = p471;
      };
      f99.prototype.Fb = function (p472, p473) {
        this.Jb = f28(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p472 / 400 * Math.PI) * 0.1 : 1 : 0, p473, 1 / 800);
        this.jj = f28(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p473, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f99.prototype.Gb = function (p474, p475, p476, p477) {
        if (this.Hb && this.Ib) {
          var v441 = Math.pow(0.11112, p475 / 95);
          for (var vLN066 = 0; vLN066 < this.kj; vLN066++) {
            var vF302 = f30(this.lj[vLN066 * 2], this.mj[vLN066 * 2], p476);
            var vF303 = f30(this.lj[vLN066 * 2 + 1], this.mj[vLN066 * 2 + 1], p476);
            this.nj[vLN066 * 2] = f30(vF302, this.nj[vLN066 * 2], v441);
            this.nj[vLN066 * 2 + 1] = f30(vF303, this.nj[vLN066 * 2 + 1], v441);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p474, p475, p477);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f99.prototype.rj = function (p478) {
        if (this.Hb) {
          if (!p478) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f33(this.pj.Rf);
          }
          if (this.qj != null) {
            f33(this.qj);
          }
        }
      };
      f99.prototype.uj = function () {
        var vF165 = f16();
        if (this.pj == null) {
          this.pj = new vF49();
        } else {
          f33(this.pj.Rf);
        }
        this.pj.hh(vF165.o.fb.af, vF165.p.Dc().ed(this.Mb.cg), vF165.p.Dc().dd(this.Mb.dg), vF165.p.Dc().fd(this.Mb.Bg), vF165.p.Dc().gd(this.Mb.Cg), vF165.p.Dc().hd(this.Mb.Dg), vF165.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF48("");
          this.qj.style.fontFamily = "wormde";
          this.qj.anchor.set(0.5);
        } else {
          f33(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF165.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f99.Config = function () {
        function f100() {
          this.Lb = 0;
          this.cg = vF22.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f100;
      }();
      return f99;
    }();
    var vF48 = function () {
      return f24(vF7.fc, function (p479, p480, p481) {
        vF7.fc.call(this, p479, p480, p481);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF49 = function () {
      function f101() {
        this.Rf = new vF7.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF50();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF46(), new vF46());
        for (var vLN14 = 1; vLN14 < vLN797; vLN14++) {
          this.xj[vLN14] = this.yj(vLN14, new vF46(), new vF46());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v442 = Math.PI * 0.1;
      var v443 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v444 = -0.03515625;
      var v445 = -0.0625;
      var vLN05625 = 0.5625;
      var v446 = v443 * 3 + vLN084375;
      var v447 = vLN02578125 - v443 * 3;
      var v448 = v443 + v444;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v449 = v445 + v445;
      var v450 = v444 * 3 + vLN02578125;
      var v451 = vLN084375 - v444 * 3;
      var v452 = v444 + v443;
      f101.prototype.yj = function (p482, p483, p484) {
        var v453 = new vF51(p483, p484);
        p483.jh.zIndex = vLN0001 * ((vLN797 - p482) * 2 + 1 + 3);
        p484.jh.zIndex = vLN0001 * ((vLN797 - p482) * 2 - 2 + 3);
        return v453;
      };
      f101.prototype.hh = function (p485, p486, p487, p488, p489, p490, p491) {
        var v454 = p487.Zc;
        var v455 = p485 == vO25._e ? p486.bd.$c : p487.$c;
        if (v454.length > 0 && v455.length > 0) {
          for (var vLN067 = 0; vLN067 < this.xj.length; vLN067++) {
            this.xj[vLN067].Nf.kh(v454[vLN067 % v454.length]);
            this.xj[vLN067].Pf.kh(v455[vLN067 % v455.length]);
          }
        }
        this.vj.hh(p488, p489, p490, p491);
      };
      var vF50 = function () {
        var vF245 = f24(vF7.Zb, function () {
          vF7.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF7.Zb();
          this.Hj = [];
          for (var vLN068 = 0; vLN068 < 4; vLN068++) {
            var v456 = new vF46();
            v456.kh(f16().q.Ph);
            this.Gj.addChild(v456.jh);
            this.Hj.push(v456);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF46();
          this.Jj.kh(f16().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF46();
          this.xEmojiType_headshot.kh(f16().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF46();
          this.xEmojiType_kill.kh(f16().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF46();
          this.guia_mobile.kh(f16().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new vF46();
          this.flx.kh(f16().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF46();
          this.xxx5.kh(f16().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF46();
          this.xxx2.kh(f16().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF46();
          this.xxx10.kh(f16().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF46();
          this.xxxLupatype.kh(f16().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        vF245.prototype.hh = function (p492, p493, p494, p495) {
          this.Lj(0.002, this.Cj, p492.Zc);
          this.Lj(0.003, this.Dj, p493.Zc);
          this.Lj(0.004, this.Fj, p495.Zc);
          this.Lj(0.005, this.Ej, p494.Zc);
        };
        vF245.prototype.Lj = function (p496, p497, p498) {
          while (p498.length > p497.length) {
            var v457 = new vF46();
            p497.push(v457);
            this.addChild(v457.Mf());
          }
          while (p498.length < p497.length) {
            p497.pop().ih();
          }
          var vP496 = p496;
          for (var vLN069 = 0; vLN069 < p498.length; vLN069++) {
            vP496 += 0.0001;
            var v458 = p497[vLN069];
            v458.kh(p498[vLN069]);
            v458.jh.zIndex = vP496;
          }
        };
        vF245.prototype.mh = function (p499, p500, p501, p502) {
          this.visible = true;
          this.position.set(p499, p500);
          this.rotation = p502;
          for (var vLN070 = 0; vLN070 < this.Cj.length; vLN070++) {
            this.Cj[vLN070].oh(p501);
          }
          for (var vLN071 = 0; vLN071 < this.Dj.length; vLN071++) {
            this.Dj[vLN071].oh(p501);
          }
          for (var vLN072 = 0; vLN072 < this.Ej.length; vLN072++) {
            this.Ej[vLN072].oh(p501);
          }
          for (var vLN073 = 0; vLN073 < this.Fj.length; vLN073++) {
            this.Fj[vLN073].oh(p501);
          }
        };
        vF245.prototype.lh = function () {
          this.visible = false;
        };
        vF245.prototype.Mj = function (p503, p504, p505, p506) {
          this.Gj.visible = true;
          var v459 = p505 / 1000;
          var v460 = 1 / this.Hj.length;
          for (var vLN074 = 0; vLN074 < this.Hj.length; vLN074++) {
            var v461 = 1 - (v459 + v460 * vLN074) % 1;
            this.Hj[vLN074].jh.alpha = 1 - v461;
            this.Hj[vLN074].oh(p504 * (0.5 + v461 * 4.5));
          }
        };
        vF245.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF245.prototype.Nj = function (p507, p508, p509, p510) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f28(this.Jj.jh.alpha, p507.hj ? 0.9 : 0.2, p510, 0.0025);
          this.Jj.oh(p508);
        };
        vF245.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF245.prototype.Nflex = function (p511, p512, p513, p514) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = f28(this.Jj.jh.alpha, p511.hj ? 0.9 : 0.2, p514, 0.0025);
          this.flx.oh(p512);
        };
        vF245.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF245.prototype.ActiveX5 = function (p515, p516, p517, p518) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f28(this.Jj.jh.alpha, p515.hj ? 0.9 : 0.2, p518, 0.0025);
          this.xxx5.oh(p516);
        };
        vF245.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF245.prototype.ActiveX2 = function (p519, p520, p521, p522) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f28(this.Jj.jh.alpha, p519.hj ? 0.9 : 0.2, p522, 0.0025);
          this.xxx2.oh(p520);
        };
        vF245.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF245.prototype.ActiveX10 = function (p523, p524, p525, p526) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f28(this.Jj.jh.alpha, p523.hj ? 0.9 : 0.2, p526, 0.0025);
          this.xxx10.oh(p524);
        };
        vF245.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF245.prototype.ActiveZlupa = function (p527, p528, p529, p530) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f28(this.Jj.jh.alpha, p527.hj ? 0.9 : 0.2, p530, 0.0025);
          this.xxxLupatype.oh(p528);
        };
        vF245.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        vF245.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF245.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF245.prototype.Rx = function (p531, p532, p533, p534) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p532);
        };
        vF245.prototype.Njh = function (p535, p536, p537, p538) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p536);
        };
        vF245.prototype.Njk = function (p539, p540, p541, p542) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p540);
        };
        return vF245;
      }();
      f101.prototype.Oj = function (p543) {
        return this.Aj + this.Bj * Math.sin(p543 * v442 - this.zj);
      };
      f101.prototype.tj = function (p544, p545, p546, p547) {
        var v462 = p544.Db * 2;
        var v463 = p544.nj;
        var v464 = p544.kj;
        var v465 = v464 * 4 - 3;
        var vV465 = v465;
        this.zj = p545 / 400 * Math.PI;
        this.Aj = v462 * 1.5;
        this.Bj = v462 * 0.15 * p544.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v463[0];
        vUndefined17 = v463[1];
        if (p547(vUndefined13, vUndefined17)) {
          vUndefined14 = v463[2];
          vUndefined18 = v463[3];
          vUndefined15 = v463[4];
          vUndefined19 = v463[5];
          var v466 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v462, v466);
          this.xj[0].mh(vUndefined13, vUndefined17, v462, this.Oj(0), v466);
          this.xj[1].mh(v446 * vUndefined13 + v447 * vUndefined14 + v448 * vUndefined15, v446 * vUndefined17 + v447 * vUndefined18 + v448 * vUndefined19, v462, this.Oj(1), vF51.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v449 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v449 * vUndefined19, v462, this.Oj(2), vF51.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v450 * vUndefined13 + v451 * vUndefined14 + v452 * vUndefined15, v450 * vUndefined17 + v451 * vUndefined18 + v452 * vUndefined19, v462, this.Oj(3), vF51.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v467 = v464 * 2 - 4; vLN2 < v467; vLN2 += 2) {
          vUndefined13 = v463[vLN2];
          vUndefined17 = v463[vLN2 + 1];
          if (p547(vUndefined13, vUndefined17)) {
            vUndefined12 = v463[vLN2 - 2];
            vUndefined16 = v463[vLN2 - 1];
            vUndefined14 = v463[vLN2 + 2];
            vUndefined18 = v463[vLN2 + 3];
            vUndefined15 = v463[vLN2 + 4];
            vUndefined19 = v463[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v462, this.Oj(vLN42), vF51.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v443 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v444 * vUndefined15, v443 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v444 * vUndefined19, v462, this.Oj(vLN42), vF51.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v445 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v445 * vUndefined15, v445 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v445 * vUndefined19, v462, this.Oj(vLN42), vF51.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v444 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v443 * vUndefined15, v444 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v443 * vUndefined19, v462, this.Oj(vLN42), vF51.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        vUndefined13 = v463[v464 * 2 - 4];
        vUndefined17 = v463[v464 * 2 - 3];
        if (p547(vUndefined13, vUndefined17)) {
          vUndefined12 = v463[v464 * 2 - 6];
          vUndefined16 = v463[v464 * 2 - 5];
          vUndefined14 = v463[v464 * 2 - 2];
          vUndefined18 = v463[v464 * 2 - 1];
          this.xj[v465 - 5].mh(vUndefined13, vUndefined17, v462, this.Oj(v465 - 5), vF51.angleBetween(this.xj[v465 - 6], this.xj[v465 - 4]));
          this.xj[v465 - 4].mh(v452 * vUndefined12 + v451 * vUndefined13 + v450 * vUndefined14, v452 * vUndefined16 + v451 * vUndefined17 + v450 * vUndefined18, v462, this.Oj(v465 - 4), vF51.angleBetween(this.xj[v465 - 5], this.xj[v465 - 3]));
          this.xj[v465 - 3].mh(v449 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v449 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v462, this.Oj(v465 - 3), vF51.angleBetween(this.xj[v465 - 4], this.xj[v465 - 2]));
          this.xj[v465 - 2].mh(v448 * vUndefined12 + v447 * vUndefined13 + v446 * vUndefined14, v448 * vUndefined16 + v447 * vUndefined17 + v446 * vUndefined18, v462, this.Oj(v465 - 2), vF51.angleBetween(this.xj[v465 - 3], this.xj[v465 - 1]));
          this.xj[v465 - 1].mh(vUndefined14, vUndefined18, v462, this.Oj(v465 - 1), vF51.angleBetween(this.xj[v465 - 2], this.xj[v465 - 1]));
        } else {
          this.xj[v465 - 5].lh();
          this.xj[v465 - 4].lh();
          this.xj[v465 - 3].lh();
          this.xj[v465 - 2].lh();
          this.xj[v465 - 1].lh();
        }
        if (this.wj == 0 && vV465 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV465 == 0) {
          f33(this.vj);
        }
        while (this.wj < vV465) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV465) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v468 = p544.Ff[vF8.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v468 != null && v468.sc) {
          this.vj.Mj(p544, v462, p545, p546);
        } else {
          this.vj.Ij();
        }
        var v469 = p544.Ff[vF8.VELOCITY_TYPE];
        if (this.xj[0].gj() && v469 != null && v469.sc) {
          this.vj.Nj(p544, v462, p545, p546);
        } else {
          this.vj.Kj();
        }
        if (vO11.ModeStremeremoj) {} else {
          if (vO11.emoji_headshot && p544 && p544.Mb && p544.Mb.Mb) {
            this.vj.Njh(p544, v462, p545, p546);
          } else {
            this.vj.xzs();
          }
          if (vO11.emoji_kill && p544 && p544.Mb && p544.Mb.Mb) {
            this.vj.Njk(p544, v462, p545, p546);
          } else {
            this.vj.zas();
          }
        }
        if (vO11.mobile && vO11.arrow && p544 && p544.Mb && p544.Mb.Mb) {
          this.vj.Rx(p544, v462, p545, p546);
        }
        var v470 = p544.Ff[vF8.FLEXIBLE_TYPE];
        if (this.xj[0].gj() && v470 != null && v470.sc) {
          this.vj.Nflex(p544, v462, p545, p546);
        } else {
          this.vj.flexx();
        }
        var v471 = p544.Ff[vF8.X5_TYPE];
        if (this.xj[0].gj() && v471 != null && v471.sc) {
          this.vj.ActiveX5(p544, v462, p545, p546);
        } else {
          this.vj.xXx5();
        }
        var v472 = p544.Ff[vF8.X2_TYPE];
        if (this.xj[0].gj() && v472 != null && v472.sc) {
          this.vj.ActiveX2(p544, v462, p545, p546);
        } else {
          this.vj.xXx2();
        }
        var v473 = p544.Ff[vF8.X10_TYPE];
        if (this.xj[0].gj() && v473 != null && v473.sc) {
          this.vj.ActiveX10(p544, v462, p545, p546);
        } else {
          this.vj.xXx10();
        }
        var v474 = p544.Ff[vF8.ZOOM_TYPE];
        if (this.xj[0].gj() && v474 != null && v474.sc) {
          this.vj.ActiveZlupa(p544, v462, p545, p546);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var vF51 = function () {
        function f102(p548, p549) {
          this.Nf = p548;
          this.Nf.Mg(false);
          this.Pf = p549;
          this.Pf.Mg(false);
        }
        f102.prototype.mh = function (p550, p551, p552, p553, p554) {
          this.Nf.Mg(true);
          this.Nf.nh(p550, p551);
          this.Nf.oh(p552);
          this.Nf.fj(p554);
          this.Pf.Mg(true);
          this.Pf.nh(p550, p551);
          this.Pf.oh(p553);
          this.Pf.fj(p554);
        };
        f102.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f102.prototype.gj = function () {
          return this.Nf.gj();
        };
        f102.angleBetween = function (p555, p556) {
          return Math.atan2(p555.Nf.jh.position.y - p556.Nf.jh.position.y, p555.Nf.jh.position.x - p556.Nf.jh.position.x);
        };
        return f102;
      }();
      return f101;
    }();
    var vF52 = function () {
      function f103(p557) {
        this.se = p557;
        this.te = p557.get()[0];
        this.ue = new vF7.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF49();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis13 = this;
        f16().p.ca(function () {
          if (f16().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f103.prototype.Fb = function () {
        var vF166 = f16();
        this.Pj.hh(vO25.$e, null, vF166.p.Dc().dd(this.rh), vF166.p.Dc().fd(this.sh), vF166.p.Dc().gd(this.th), vF166.p.Dc().hd(this.uh), vF166.p.Dc().jd(this.vh));
      };
      f103.prototype.Le = function (p558) {
        this.sc = p558;
      };
      f103.prototype.ak = function (p559, p560, p561) {
        this.rh = p559;
        this.Sj = p560;
        this.Xj = p561;
        this.Fb();
      };
      f103.prototype.bk = function (p562, p563, p564) {
        this.sh = p562;
        this.Tj = p563;
        this.Yj = p564;
        this.Fb();
      };
      f103.prototype.ck = function (p565, p566, p567) {
        this.th = p565;
        this.Uj = p566;
        this.Zj = p567;
        this.Fb();
      };
      f103.prototype.dk = function (p568, p569, p570) {
        this.uh = p568;
        this.Vj = p569;
        this.$j = p570;
        this.Fb();
      };
      f103.prototype.ek = function (p571, p572, p573) {
        this.vh = p571;
        this.Wj = p572;
        this._j = p573;
        this.Fb();
      };
      f103.prototype.Ra = function () {
        var v475 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v475;
        this.te.width = v475 * this.Qj;
        this.te.height = v475 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF262 = f26(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF262) {
          for (var vVF262 = vF262; vVF262 < this.Pj.xj.length; vVF262++) {
            this.Pj.xj[vVF262].lh();
          }
          while (this.Pj.wj < vF262) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF262) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f103.prototype.Pa = function () {
        if (this.sc) {
          if (f16().p.W) {
            var v476 = Date.now();
            var v477 = v476 / 200;
            var v478 = Math.sin(v477);
            var v479 = this.Ng;
            var v480 = this.Ng * 1.5;
            var v481 = this.Qj - (this.Qj - v479 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v482 = this.Rj * 0.5;
            var vLN076 = 0;
            var vLN077 = 0;
            for (var v483 = -1; v483 < this.Pj.wj; v483++) {
              var vV483 = v483;
              var v484 = Math.cos(vV483 * 1 / 12 * Math.PI - v477) * (1 - Math.pow(16, vV483 * -1 / 12));
              if (v483 >= 0) {
                var v485 = v481 + v479 * -0.5 * vV483;
                var v486 = v482 + v479 * 0.5 * v484;
                var v487 = v479 * 2;
                var v488 = v480 * 2;
                var v489 = Math.atan2(vLN077 - v484, vV483 - vLN076);
                if (v483 == 0) {
                  this.Pj.vj.mh(v485, v486, v487, v489);
                }
                this.Pj.xj[v483].mh(v485, v486, v487, v488, v489);
                var v490 = this.Sj ? this.Xj ? 0.4 + v478 * 0.2 : 0.9 + v478 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v483].Nf.qh(v490);
                this.Pj.xj[v483].Pf.qh(v490);
              }
              vLN076 = vV483;
              vLN077 = v484;
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Cj.length; vLN078++) {
              var v491 = this.Tj ? this.Yj ? 0.4 + v478 * 0.2 : 0.9 + v478 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN078].qh(v491);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Dj.length; vLN079++) {
              var v492 = this.Uj ? this.Zj ? 0.4 + v478 * 0.2 : 0.9 + v478 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN079].qh(v492);
            }
            for (var vLN080 = 0; vLN080 < this.Pj.vj.Ej.length; vLN080++) {
              var v493 = this.Vj ? this.$j ? 0.4 + v478 * 0.2 : 0.9 + v478 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN080].qh(v493);
            }
            for (var vLN081 = 0; vLN081 < this.Pj.vj.Fj.length; vLN081++) {
              var v494 = this.Wj ? this._j ? 0.4 + v478 * 0.2 : 0.9 + v478 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN081].qh(v494);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f103;
    }();
    var vF53 = function () {
      function f104(p574) {
        this.rc = p574;
      }
      f104.fk = $("#game-view");
      f104.gk = $("#results-view");
      f104.hk = $("#main-menu-view");
      f104.ik = $("#popup-view");
      f104.jk = $("#toaster-view");
      f104.kk = $("#loading-view");
      f104.lk = $("#stretch-box");
      f104.mk = $("#game-canvas");
      f104.di = $("#background-canvas");
      f104.nk = $("#social-buttons");
      f104.ok = $("#markup-wrap");
      f104.prototype.a = function () {};
      f104.prototype.ii = function () {};
      f104.prototype.ji = function () {};
      f104.prototype.ei = function () {};
      f104.prototype.Ra = function () {};
      f104.prototype.Pa = function (p575, p576) {};
      return f104;
    }();
    var vF54 = function () {
      function f105(p577, p578, p579, p580, p581, p582) {
        var v495 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p577 + "</span></div>";
        var v$4 = $(v495);
        v$4.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p578,
              name: p579,
              caption: p580,
              description: p581,
              picture: p582
            }, function () {});
          }
        });
        return v$4;
      }
      var v$5 = $("#final-caption");
      var v$6 = $("#final-continue");
      var v$7 = $("#congrats-bg");
      var v$8 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$9 = $("#final-share-fb");
      var v$10 = $("#final-message");
      var v$11 = $("#final-score");
      var v$12 = $("#final-place");
      var v$13 = $("#final-board");
      var vF246 = f24(vF53, function () {
        vF53.call(this, 0);
        var vThis14 = this;
        var vF167 = f16();
        var v496 = vF53.mk.get()[0];
        console.log("sSE=" + v553.qk);
        v$9.toggle(v553.qk);
        v$5.text(f19("index.game.result.title"));
        v$6.text(f19("index.game.result.continue"));
        v$6.click(function () {
          vF167.r.Cd();
          vF167.f.Ma.c();
          vF167.r.G(vF11.AudioState.F);
          vF167.s.I(vF167.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (p583) {
          if (p583.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p583.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p583.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (vO11.KeyCodeRespawn == p583.keyCode) {
            vThis14.rk = true;
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 1000);
          }
        }).keyup(function (p584) {
          if (p584.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v496.addEventListener("touchmove", function (p585) {
          if (!vF5() || !vO11.gamePad.checked) {
            if (p585 === p585 || window.event) {
              p585 = p585.touches[0];
              if (p585.clientX !== undefined) {
                vThis14.sk = Math.atan2(p585.clientY - v496.offsetHeight * 0.5, p585.clientX - v496.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p585.pageY - v496.offsetHeight * 0.5, p585.pageX - v496.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v496.addEventListener("touchstart", function (p586) {
          if (p586 === p586 || window.event) {
            vThis14.rk = p586.touches.length >= 2;
          }
          p586.preventDefault();
        }, true);
        v496.addEventListener("touchend", function (p587) {
          if (p587 === p587 || window.event) {
            vThis14.rk = p587.touches.length >= 2;
          }
        }, true);
        v496.addEventListener("mousemove", function (p588) {
          if (!v11 && p588.clientX !== undefined) {
            vThis14.sk = Math.atan2(p588.clientY - v496.offsetHeight * 0.5, p588.clientX - v496.offsetWidth * 0.5);
          }
        }, true);
        v496.addEventListener("mousedown", function (p589) {
          console.log(p589);
          vThis14.rk = true;
        }, true);
        v496.addEventListener("mouseup", function (p590) {
          console.log(p590);
          vThis14.rk = false;
        }, true);
        this.wb = new vF23(vF53.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO10.eventoPrincipal = vThis14;
      });
      vF246.prototype.a = function () {};
      vF246.prototype.ii = function () {
        if (this.cb == 0) {
          vF53.fk.stop();
          vF53.fk.fadeIn(500);
          vF53.gk.stop();
          vF53.gk.fadeOut(1);
          vF53.hk.stop();
          vF53.hk.fadeOut(50);
          vF53.ik.stop();
          vF53.ik.fadeOut(50);
          vF53.jk.stop();
          vF53.jk.fadeOut(50);
          vF53.kk.stop();
          vF53.kk.fadeOut(50);
          vF53.lk.stop();
          vF53.lk.fadeOut(1);
          vF53.di.stop();
          vF53.di.fadeOut(50);
          vF14.Le(false);
          vF53.nk.stop();
          vF53.nk.fadeOut(50);
          vF53.ok.stop();
          vF53.ok.fadeOut(50);
        } else {
          vF53.fk.stop();
          vF53.fk.fadeIn(500);
          vF53.gk.stop();
          vF53.gk.fadeIn(500);
          vF53.hk.stop();
          vF53.hk.fadeOut(50);
          vF53.ik.stop();
          vF53.ik.fadeOut(50);
          vF53.jk.stop();
          vF53.jk.fadeOut(50);
          vF53.kk.stop();
          vF53.kk.fadeOut(50);
          vF53.lk.stop();
          vF53.lk.fadeOut(1);
          vF53.di.stop();
          vF53.di.fadeOut(50);
          vF14.Le(false);
          vF53.nk.stop();
          vF53.nk.fadeOut(50);
          vF53.ok.stop();
          vF53.ok.fadeOut(50);
        }
      };
      vF246.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF246.prototype.Fa = function () {
        console.log("re");
        v$7.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$7.fadeIn(500);
        }, 3000);
        v$8.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$8.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF246.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f16().r.Gd();
        }
      };
      vF246.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF246.prototype.Pa = function (p591, p592) {
        this.wb.Pa(p591, p592);
      };
      vF246.prototype.Da = function (p593, p594, p595) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p594 >= 1 && p594 <= 10) {
          vUndefined20 = f19("index.game.result.place.i" + p594);
          vUndefined21 = f19("index.game.result.placeInBoard");
          vUndefined22 = f19("index.game.social.shareResult.messGood").replace("{0}", p595).replace("{1}", p593).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f19("index.game.result.tryHit");
          vUndefined22 = f19("index.game.social.shareResult.messNorm").replace("{0}", p595).replace("{1}", p593);
        }
        v$10.html(f19("index.game.result.your"));
        v$11.html(p593);
        v$12.html(vUndefined20);
        v$13.html(vUndefined21);
        if (v553.qk) {
          var vF195 = f19("index.game.result.share");
          f19("index.game.social.shareResult.caption");
          v$9.empty().append(f105(vF195, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF246.prototype.T = function () {
        return this.sk;
      };
      vF246.prototype.U = function () {
        return this.rk;
      };
      return vF246;
    }();
    var vF55 = function () {
      var v$14 = $("#loading-worm-a");
      var v$15 = $("#loading-worm-b");
      var v$16 = $("#loading-worm-c");
      var vA16 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF247 = f24(vF53, function () {
        vF53.call(this, 0);
      });
      vF247.prototype.a = function () {};
      vF247.prototype.ii = function () {
        vF53.fk.stop();
        vF53.fk.fadeOut(50);
        vF53.gk.stop();
        vF53.gk.fadeOut(50);
        vF53.hk.stop();
        vF53.hk.fadeOut(50);
        vF53.ik.stop();
        vF53.ik.fadeOut(50);
        vF53.jk.stop();
        vF53.jk.fadeOut(50);
        vF53.kk.stop();
        vF53.kk.fadeIn(500);
        vF53.lk.stop();
        vF53.lk.fadeIn(1);
        vF53.di.stop();
        vF53.di.fadeIn(500);
        vF14.Le(true);
        vF53.nk.stop();
        vF53.nk.fadeOut(50);
        vF53.ok.stop();
        vF53.ok.fadeOut(50);
      };
      vF247.prototype.ji = function () {
        this.tk();
      };
      vF247.prototype.tk = function () {
        v$14.css("background-position", "100% 200%");
        for (var vLN082 = 0; vLN082 < vA16.length; vLN082++) {
          var v497 = Math.floor(Math.random() * vA16.length);
          var v498 = vA16[vLN082];
          vA16[vLN082] = vA16[v497];
          vA16[v497] = v498;
        }
        v$14.css("background-position", vA16[0]);
        v$15.css("background-position", vA16[1]);
        v$16.css("background-position", vA16[2]);
      };
      return vF247;
    }();
    var vF56 = function () {
      $("#mm-event-text");
      var v$17 = $("#mm-skin-canv");
      var v$18 = $("#mm-skin-prev");
      var v$19 = $("#mm-skin-next");
      var v$20 = $("#mm-skin-over");
      var v$21 = $("#mm-skin-over-button-list");
      var v$22 = $("#mm-params-nickname");
      var v$23 = $("#mm-params-game-mode");
      var v$24 = $("#mm-action-buttons");
      var v$25 = $("#mm-action-play");
      var v$26 = $("#mm-action-guest");
      var v$27 = $("#mm-action-login");
      var v$28 = $("#mm-player-info");
      var v$29 = $("#mm-store");
      var v$30 = $("#mm-leaders");
      var v$31 = $("#mm-settings");
      var v$32 = $("#mm-coins-box");
      var v$33 = $("#mm-player-avatar");
      var v$34 = $("#mm-player-username");
      var v$35 = $("#mm-coins-val");
      var v$36 = $("#mm-player-exp-bar");
      var v$37 = $("#mm-player-exp-val");
      var v$38 = $("#mm-player-level");
      var vF248 = f24(vF53, function () {
        vF53.call(this, 1);
        var vF168 = f16();
        this.uk = new vF52(v$17);
        v$23.click(function () {
          vF168.r.Cd();
        });
        v$17.click(function () {
          if (vF168.u.P()) {
            vF168.r.Cd();
            vF168.s.I(vF168.s.$h);
          }
        });
        v$18.click(function () {
          vF168.r.Cd();
          vF168.t.Ah();
        });
        v$19.click(function () {
          vF168.r.Cd();
          vF168.t.zh();
        });
        v$22.keypress(function (p596) {
          if (p596.keyCode == 13) {
            vF168.na();
          }
        });
        v$25.click(function () {
          vF168.r.Cd();
          vF168.na();
        });
        v$26.click(function () {
          vF168.r.Cd();
          vF168.na();
        });
        v$27.click(function () {
          vF168.r.Cd();
          vF168.s.I(vF168.s.Zh);
        });
        v$31.click(function () {
          vF168.r.Cd();
          vF168.s.I(vF168.s.xa);
        });
        v$28.click(function () {
          if (vF168.u.P()) {
            vF168.r.Cd();
            vF168.s.I(vF168.s.Yh);
          }
        });
        v$30.click(function () {
          if (vF168.u.P()) {
            vF168.r.Cd();
            vF168.s.I(vF168.s.Xh);
          }
        });
        v$29.click(function () {
          if (vF168.u.P()) {
            vF168.r.Cd();
            vF168.s.I(vF168.s._h);
          }
        });
        v$32.click(function () {
          if (vF168.u.P()) {
            vF168.r.Cd();
            vF168.s.I(vF168.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("<div id=\"final-continue1\">الصفحة الرئيسيه</div>");
        $("#final-continue").after("<div id=\"final-replay\">RESPAWN</div>");
        $("#final-replay").click(function () {
          let vV10 = v10;
          if (vV10) {
            anApp.r.Hd();
            anApp.sa(vV10);
          }
        });
        var vF173 = f17(vF15.va);
        if (vF173 != "ARENA" && vF173 != "TEAM2") {
          vF173 = "ARENA";
        }
        v$23.val(vF173);
        console.log("Load GM: " + vF173);
      });
      vF248.prototype.a = function () {
        var vF169 = f16();
        var vThis15 = this;
        vF169.u.V(function () {
          vF169.s.F.xk();
        });
        vF169.u.Pi(function () {
          if (vF169.u.P()) {
            vF169.t.Bh(vF169.u.Di(), vF38.ia);
            vF169.t.Bh(vF169.u.Ei(), vF38.ja);
            vF169.t.Bh(vF169.u.Fi(), vF38.ka);
            vF169.t.Bh(vF169.u.Gi(), vF38.la);
            vF169.t.Bh(vF169.u.Hi(), vF38.ma);
          } else {
            vF169.t.Bh(vF169.Ga(), vF38.ia);
            vF169.t.Bh(0, vF38.ja);
            vF169.t.Bh(0, vF38.ka);
            vF169.t.Bh(0, vF38.la);
            vF169.t.Bh(0, vF38.ma);
          }
        });
        vF169.u.Pi(function () {
          v$25.toggle(vF169.u.P());
          v$27.toggle(!vF169.u.P());
          v$26.toggle(!vF169.u.P());
          v$30.toggle(vF169.u.P());
          v$29.toggle(vF169.u.P());
          v$32.toggle(vF169.u.P());
          if (vF169.u.P()) {
            v$20.hide();
            v$34.html(vF169.u.wi());
            v$33.attr("src", vF169.u.xi());
            v$35.html(vF169.u.zi());
            v$36.width(vF169.u.Bi() * 100 / vF169.u.Ci() + "%");
            v$37.html(vF169.u.Bi() + " / " + vF169.u.Ci());
            v$38.html(vF169.u.Ai());
            v$22.val(vF169.u.ga());
          } else {
            v$20.toggle(v553.qk && !vF169.Ha());
            v$34.html(v$34.data("guest"));
            v$33.attr("src", vLSimagesguestavatarxma);
            v$35.html("10");
            v$36.width("0");
            v$37.html("");
            v$38.html(1);
            v$22.val(f17(vF15.Aa));
          }
        });
        vF169.t.xh(function () {
          vThis15.uk.ak(vF169.t.ha(vF38.ia), false, false);
          vThis15.uk.bk(vF169.t.ha(vF38.ja), false, false);
          vThis15.uk.ck(vF169.t.ha(vF38.ka), false, false);
          vThis15.uk.dk(vF169.t.ha(vF38.la), false, false);
          vThis15.uk.ek(vF169.t.ha(vF38.ma), false, false);
        });
      };
      vF248.prototype.ii = function () {
        vF53.fk.stop();
        vF53.fk.fadeOut(50);
        vF53.gk.stop();
        vF53.gk.fadeOut(50);
        vF53.hk.stop();
        vF53.hk.fadeIn(500);
        vF53.ik.stop();
        vF53.ik.fadeOut(50);
        vF53.jk.stop();
        vF53.jk.fadeOut(50);
        vF53.kk.stop();
        vF53.kk.fadeOut(50);
        vF53.lk.stop();
        vF53.lk.fadeIn(1);
        vF53.di.stop();
        vF53.di.fadeIn(500);
        vF14.Le(true);
        vF53.nk.stop();
        vF53.nk.fadeIn(500);
        vF53.ok.stop();
        vF53.ok.fadeIn(500);
      };
      vF248.prototype.ji = function () {
        f16().r.Dd();
        this.uk.Le(true);
      };
      vF248.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF248.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF248.prototype.Pa = function (p597, p598) {
        this.uk.Pa();
      };
      vF248.prototype.ga = function () {
        return v$22.val();
      };
      vF248.prototype.D = function () {
        return v$23.val();
      };
      vF248.prototype.xk = function () {
        v$24.show();
      };
      vF248.prototype.vk = function () {
        var v499 = $("#mm-advice-cont").children();
        var vLN083 = 0;
        setInterval(function () {
          v499.eq(vLN083).fadeOut(500, function () {
            if (++vLN083 >= v499.length) {
              vLN083 = 0;
            }
            v499.eq(vLN083).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF248.prototype.wk = function () {
        function f106() {
          vF1610.Ka(true);
          setTimeout(function () {
            v$20.hide();
          }, 3000);
        }
        var vF1610 = f16();
        if (v553.qk && !vF1610.Ha()) {
          v$20.show();
          var vF196 = f19("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f19("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f19("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$21.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF196 + "</span></a>").click(f106));
          v$21.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF196 + "</span></a>").click(f106));
        }
      };
      return vF248;
    }();
    var vF57 = function () {
      var vF249 = f24(vF53, function () {
        vF53.call(this, 0);
      });
      vF249.prototype.a = function () {};
      vF249.prototype.ii = function () {
        vF53.fk.stop();
        vF53.fk.fadeOut(50);
        vF53.gk.stop();
        vF53.gk.fadeOut(50);
        vF53.hk.stop();
        vF53.hk.fadeOut(50);
        vF53.ik.stop();
        vF53.ik.fadeOut(50);
        vF53.jk.stop();
        vF53.jk.fadeOut(50);
        vF53.kk.stop();
        vF53.kk.fadeOut(50);
        vF53.lk.stop();
        vF53.lk.fadeOut(1);
        vF53.di.stop();
        vF53.di.fadeOut(50);
        vF14.Le(false);
        vF53.nk.stop();
        vF53.nk.fadeOut(50);
        vF53.ok.stop();
        vF53.ok.fadeOut(50);
      };
      return vF249;
    }();
    var vF58 = function () {
      var v$39 = $("#toaster-stack");
      var vF2410 = f24(vF53, function () {
        vF53.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF2410.prototype.a = function () {};
      vF2410.prototype.ii = function () {
        vF53.fk.stop();
        vF53.fk.fadeOut(50);
        vF53.gk.stop();
        vF53.gk.fadeOut(50);
        vF53.hk.stop();
        vF53.hk.fadeOut(50);
        vF53.ik.stop();
        vF53.ik.fadeOut(50);
        vF53.jk.stop();
        vF53.jk.fadeIn(500);
        vF53.kk.stop();
        vF53.kk.fadeOut(50);
        vF53.lk.stop();
        vF53.lk.fadeIn(1);
        vF53.di.stop();
        vF53.di.fadeIn(500);
        vF14.Le(true);
        vF53.nk.stop();
        vF53.nk.fadeOut(50);
        vF53.ok.stop();
        vF53.ok.fadeIn(500);
      };
      vF2410.prototype.ji = function () {
        this.Ak();
      };
      vF2410.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF2410.prototype._ = function (p599) {
        this.yk.unshift(p599);
        setTimeout(function () {
          f16().s.ki();
        }, 0);
      };
      vF2410.prototype.Ti = function (p600) {
        this.yk.push(p600);
        setTimeout(function () {
          f16().s.ki();
        }, 0);
      };
      vF2410.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f16().s.gi();
            return;
          }
          var v500 = this.yk.shift();
          this.zk = v500;
          var v501 = v500.Bk();
          v501.hide();
          v501.fadeIn(300);
          v$39.append(v501);
          v500.Ck = function () {
            v501.fadeOut(300);
            setTimeout(function () {
              v501.remove();
            }, 300);
            if (vThis16.zk == v500) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v500.ji();
        }
      };
      return vF2410;
    }();
    var vF59 = function () {
      var v$40 = $("#popup-menu-label");
      var v$41 = $("#popup-menu-coins-box");
      var v$42 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF1611 = f16();
        vF1611.r.Cd();
        vF1611.s.gi();
      });
      v$41.click(function () {
        var vF1612 = f16();
        if (vF1612.u.P()) {
          vF1612.r.Cd();
          vF1612.s.I(vF1612.s.Wh);
        }
      });
      var vF2411 = f24(vF53, function (p601, p602) {
        vF53.call(this, 1);
        this.ad = p601;
        this.Dk = p602;
      });
      vF2411.prototype.a = function () {
        vF2411.parent.prototype.a.call(this);
        if (!vF2411.Ek) {
          vF2411.Ek = true;
          var vF1613 = f16();
          vF1613.u.Pi(function () {
            if (vF1613.u.P()) {
              v$42.html(vF1613.u.zi());
            } else {
              v$42.html("0");
            }
          });
        }
      };
      vF2411.Fk = $("#coins-view");
      vF2411.Gk = $("#leaders-view");
      vF2411.Hk = $("#profile-view");
      vF2411.Ik = $("#settings-view");
      vF2411.Jk = $("#login-view");
      vF2411.Kk = $("#skins-view");
      vF2411.Lk = $("#store-view");
      vF2411.Mk = $("#wear-view");
      vF2411.Nk = $("#withdraw-consent-view");
      vF2411.Ok = $("#delete-account-view");
      vF2411.Pk = $("#please-wait-view");
      vF2411.prototype.ii = function () {
        vF53.fk.stop();
        vF53.fk.fadeOut(200);
        vF53.gk.stop();
        vF53.gk.fadeOut(200);
        vF53.hk.stop();
        vF53.hk.fadeOut(200);
        vF53.ik.stop();
        vF53.ik.fadeIn(200);
        vF53.jk.stop();
        vF53.jk.fadeOut(200);
        vF53.kk.stop();
        vF53.kk.fadeOut(200);
        vF53.nk.stop();
        vF53.nk.fadeIn(200);
        vF53.ok.stop();
        vF53.ok.fadeIn(200);
        v$40.html(this.ad);
        v$41.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF2411.prototype.Rk = function () {};
      vF2411.prototype.Sk = function () {
        vF59.Pk.stop();
        vF59.Pk.fadeIn(300);
      };
      vF2411.prototype.Qk = function () {
        vF59.Pk.stop();
        vF59.Pk.fadeOut(300);
      };
      return vF2411;
    }();
    var vF60 = function () {
      var v$43 = $("#store-buy-coins_125000");
      var v$44 = $("#store-buy-coins_50000");
      var v$45 = $("#store-buy-coins_16000");
      var v$46 = $("#store-buy-coins_7000");
      var v$47 = $("#store-buy-coins_3250");
      var v$48 = $("#store-buy-coins_1250");
      var vF2412 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.coins.tab"), false);
        var vF1614 = f16();
        var vThis17 = this;
        v$43.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$44.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$45.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$46.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$47.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$48.click(function () {
          vF1614.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF2412.prototype.a = function () {
        vF2412.parent.prototype.a.call(this);
      };
      vF2412.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeIn(200);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2412.prototype.ji = function () {
        f16().r.Dd();
      };
      vF2412.prototype.Tk = function (p603) {};
      return vF2412;
    }();
    var vF61 = function () {
      var v$49 = $("#highscore-table");
      var v$50 = $("#leaders-button-level");
      var v$51 = $("#leaders-button-highscore");
      var v$52 = $("#leaders-button-kills");
      var vF2413 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.leaders.tab"), true);
        var vF1615 = f16();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$50,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$51,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$52,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$50.click(function () {
          vF1615.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$51.click(function () {
          vF1615.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$52.click(function () {
          vF1615.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF2413.prototype.a = function () {
        vF2413.parent.prototype.a.call(this);
      };
      vF2413.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeIn(200);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2413.prototype.ji = function () {
        f16().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(vLSHttpsgatewaywormatei + "/pub/leaders", function (p604) {
          vThis19.Uk = p604;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF2413.prototype._k = function (p605) {
        this.al = p605;
        for (var v502 in this.Vk) {
          if (this.Vk.hasOwnProperty(v502)) {
            var v503 = this.Vk[v502];
            v503.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v504 = this.Uk[this.al.Yk], vLS4 = "", vLN084 = 0; vLN084 < v504.length; vLN084++) {
          var v505 = v504[vLN084];
          vLS4 += "<div class=\"table-row\"><span>" + (vLN084 + 1) + "</span><span><img src=\"" + v505.avatarUrl + "\"/></span><span>" + v505.username + "</span><span>" + v505.level + "</span><span>" + v505.highScore + "</span><span>" + v505.headShots + " / " + v505.kills + "</span></div>";
        }
        v$49.empty();
        v$49.append(vLS4);
      };
      return vF2413;
    }();
    var vF64 = function () {
      var v$53 = $("#popup-login-gg");
      var v$54 = $("#popup-login-fb");
      var vF2414 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.login.tab"), false);
        var vF1616 = f16();
        var vThis20 = this;
        v$53.click(function () {
          vF1616.r.Cd();
          vThis20.Sk();
          vF1616.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF1616.u.Zi();
        });
        v$54.click(function () {
          vF1616.r.Cd();
          vThis20.Sk();
          vF1616.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF1616.u.Vi();
        });
      });
      vF2414.prototype.a = function () {
        vF2414.parent.prototype.a.call(this);
      };
      vF2414.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeIn(200);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2414.prototype.ji = function () {
        f16().r.Dd();
      };
      return vF2414;
    }();
    var vF65 = function () {
      var v$55 = $("#profile-avatar");
      var v$56 = $("#profile-username");
      var v$57 = $("#profile-experience-bar");
      var v$58 = $("#profile-experience-val");
      var v$59 = $("#profile-level");
      var v$60 = $("#profile-stat-highScore");
      var v$61 = $("#profile-stat-bestSurvivalTime");
      var v$62 = $("#profile-stat-kills");
      var v$63 = $("#profile-stat-headshots");
      var v$64 = $("#profile-stat-gamesPlayed");
      var v$65 = $("#profile-stat-totalTimeSpent");
      var v$66 = $("#profile-stat-registrationDate");
      var vF2415 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.profile.tab"), true);
      });
      vF2415.prototype.a = function () {
        vF2415.parent.prototype.a.call(this);
      };
      vF2415.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeIn(200);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2415.prototype.ji = function () {
        var vF1617 = f16();
        vF1617.r.Dd();
        var v506 = vF1617.u.Oi();
        var v507 = moment([v506.year, v506.month - 1, v506.day]).format("LL");
        v$56.html(vF1617.u.wi());
        v$55.attr("src", vF1617.u.xi());
        v$57.width(vF1617.u.Bi() * 100 / vF1617.u.Ci() + "%");
        v$58.html(vF1617.u.Bi() + " / " + vF1617.u.Ci());
        v$59.html(vF1617.u.Ai());
        v$60.html(vF1617.u.Ii());
        v$61.html(f21(vF1617.u.Ji()));
        v$62.html(vF1617.u.Ki());
        v$63.html(vF1617.u.Li());
        v$64.html(vF1617.u.Mi());
        v$65.html(f21(vF1617.u.Ni()));
        v$66.html(v507);
      };
      return vF2415;
    }();
    var vF68 = function () {
      var v$67 = $("#settings-music-enabled-switch");
      var v$68 = $("#settings-sfx-enabled-switch");
      var v$69 = $("#settings-show-names-switch");
      var v$70 = $("#popup-logout");
      var v$71 = $("#popup-logout-container");
      var v$72 = $("#popup-delete-account");
      var v$73 = $("#popup-delete-account-container");
      var v$74 = $("#popup-withdraw-consent");
      var vF2416 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF1618 = f16();
        v$67.click(function () {
          var v508 = !!v$67.prop("checked");
          f18(vF15.Me, v508, 30);
          vF1618.r.td(v508);
          vF1618.r.Cd();
        });
        v$68.click(function () {
          var v509 = !!v$68.prop("checked");
          f18(vF15.Ne, v509, 30);
          vF1618.r.rd(v509);
          vF1618.r.Cd();
        });
        v$69.click(function () {
          vF1618.r.Cd();
        });
        v$70.click(function () {
          vF1618.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF1618.u.Wi();
        });
        v$72.click(function () {
          if (vF1618.u.P()) {
            vF1618.r.Cd();
            vF1618.s.I(vF1618.s.Vh);
          } else {
            vF1618.r.Hd();
          }
        });
        v$74.click(function () {
          if (vF1618.Y()) {
            vF1618.r.Cd();
            vF1618.s.I(vF1618.s.Uh);
          } else {
            vF1618.r.Hd();
          }
        });
      });
      vF2416.prototype.a = function () {
        vF2416.parent.prototype.a.call(this);
        var vF1619 = f16();
        var vUndefined23 = undefined;
        switch (f17(vF15.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$67.prop("checked", vUndefined23);
        vF1619.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f17(vF15.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$68.prop("checked", vUndefined24);
        vF1619.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f17(vF15.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        console.log("Load sPN: " + vUndefined25);
        v$69.prop("checked", vUndefined25);
        vF1619.u.V(function () {
          v$71.toggle(vF1619.u.P());
          v$73.toggle(vF1619.u.P());
        });
      };
      vF2416.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeIn(200);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2416.prototype.ji = function () {
        var vF1620 = f16();
        vF1620.r.Dd();
        if (vF1620.Y()) {
          v$74.show();
        } else {
          v$74.hide();
        }
      };
      vF2416.prototype.wa = function () {
        return v$69.prop("checked");
      };
      return vF2416;
    }();
    var vF69 = function () {
      var v$75 = $("#store-view-canv");
      var v$76 = $("#skin-description-text");
      var v$77 = $("#skin-group-description-text");
      var v$78 = $("#store-locked-bar");
      var v$79 = $("#store-locked-bar-text");
      var v$80 = $("#store-buy-button");
      var v$81 = $("#store-item-price");
      var v$82 = $("#store-groups");
      var v$83 = $("#store-view-prev");
      var v$84 = $("#store-view-next");
      var vF2417 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF1621 = f16();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF52(v$75);
        v$80.click(function () {
          vF1621.r.Cd();
          vThis22.fl();
        });
        v$83.click(function () {
          vF1621.r.Cd();
          vThis22.bl.gl();
        });
        v$84.click(function () {
          vF1621.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF2417.prototype.a = function () {
        vF2417.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF1622 = f16();
        vF1622.p.ca(function () {
          var v510 = vF1622.p.Ac();
          if (v510 != null) {
            vThis23.cl = [];
            for (var vLN085 = 0; vLN085 < v510.skinGroupArrayDict.length; vLN085++) {
              vThis23.cl.push(new vF70(vThis23, v510.skinGroupArrayDict[vLN085]));
            }
            vThis23.dl = {};
            for (var vLN086 = 0; vLN086 < v510.skinArrayDict.length; vLN086++) {
              var v511 = v510.skinArrayDict[vLN086];
              vThis23.dl[v511.id] = v511;
            }
          }
        });
        this.il(false);
        vF1622.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF2417.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeIn(200);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2417.prototype.ji = function () {
        f16().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF2417.prototype.ei = function () {
        this.el.Le(false);
      };
      vF2417.prototype.Ra = function () {
        this.el.Ra();
      };
      vF2417.prototype.Pa = function (p606, p607) {
        this.el.Pa();
      };
      vF2417.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF1623 = f16();
        v$82.empty();
        for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
          (function (p608) {
            var v512 = vThis24.cl[p608];
            var v513 = document.createElement("li");
            v$82.append(v513);
            var v$85 = $(v513);
            v$85.html(v512.kl());
            v$85.click(function () {
              vF1623.r.Cd();
              vThis25.ll(v512);
            });
            v512.ml = v$85;
          })(vLN088);
        }
        if (this.cl.length > 0) {
          var v514 = vF1623.t.ha(vF38.ia);
          for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
            var v515 = this.cl[vLN088];
            for (var v516 = v515.nl.list, vLN089 = 0; vLN089 < v516.length; vLN089++) {
              if (v516[vLN089] == v514) {
                v515.ol = vLN089;
                this.ll(v515);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF2417.prototype.ll = function (p609) {
        if (this.bl != p609) {
          var vF1624 = f16();
          this.bl = p609;
          v$82.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$77.html("");
          if (p609.nl != null) {
            var v517 = vF1624.p.Ac().textDict[p609.nl.description];
            if (v517 != null) {
              v$77.html(f22(f20(v517)));
            }
          }
          this.il(true);
        }
      };
      vF2417.prototype.pl = function () {
        if (this.bl == null) {
          return vF32.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF2417.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p610) {
          vThis26.rl(p610);
        });
      };
      vF2417.prototype.rl = function (p611) {
        var vThis27 = this;
        var vF1625 = f16();
        var v518 = this.dl[p611].price;
        if (!(vF1625.u.zi() < v518)) {
          this.Sk();
          var v519 = vF1625.t.ha(vF38.ia);
          var v520 = vF1625.t.ha(vF38.ja);
          var v521 = vF1625.t.ha(vF38.ka);
          var v522 = vF1625.t.ha(vF38.la);
          var v523 = vF1625.t.ha(vF38.ma);
          vF1625.u.Ui(p611, vF38.ia, function () {
            vF1625.t.Bh(v519, vF38.ia);
            vF1625.t.Bh(v520, vF38.ja);
            vF1625.t.Bh(v521, vF38.ka);
            vF1625.t.Bh(v522, vF38.la);
            vF1625.t.Bh(v523, vF38.ma);
            if (vF1625.u.Ch(p611, vF38.ia)) {
              vF1625.t.Bh(p611, vF38.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF2417.prototype.il = function (p612) {
        var vF1626 = f16();
        this.el.bk(vF1626.t.ha(vF38.ja), false, false);
        this.el.ck(vF1626.t.ha(vF38.ka), false, false);
        this.el.dk(vF1626.t.ha(vF38.la), false, false);
        this.el.ek(vF1626.t.ha(vF38.ma), false, false);
        var v524 = this.pl();
        if (v524._g()) {
          var v525 = v524.$g();
          var v526 = this.dl[v525];
          var v527 = false;
          if (vF1626.t.Ja(v525, vF38.ia)) {
            v$78.hide();
            v$80.hide();
          } else if (v526 == null || v526.nonbuyable == 1) {
            v527 = true;
            v$78.show();
            v$80.hide();
            v$79.text(f19("index.game.popup.menu.store.locked"));
            if (v526 != null && v526.nonbuyable && v526.nonbuyableCause != null) {
              var v528 = vF1626.p.Ac().textDict[v526.nonbuyableCause];
              if (v528 != null) {
                v$79.text(f20(v528));
              }
            }
          } else {
            v$78.hide();
            v$80.show();
            v$81.html(v526.price);
          }
          v$76.html("");
          if (v526 != null && v526.description != null) {
            var v529 = vF1626.p.Ac().textDict[v526.description];
            if (v529 != null) {
              v$76.html(f22(f20(v529)));
            }
          }
          v$2.html(v526.id);
          this.el.ak(v525, true, v527);
          if (p612) {
            vF1626.t.Bh(v525, vF38.ia);
          }
        }
      };
      var vF70 = function () {
        function f107(p613, p614) {
          this.sl = p613;
          this.ol = 0;
          this.nl = p614;
        }
        f107.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f107.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f107.prototype.kl = function () {
          let vF202 = f20(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + vLSHttpssaifaldin1242we + "/images/paths/" + this.nl.img;
            vF202 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF202;
        };
        f107.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF32.Yg();
          } else {
            return vF32.Zg(this.nl.list[this.ol]);
          }
        };
        return f107;
      }();
      return vF2417;
    }();
    var vF71 = function () {
      var v$86 = $("#store-go-coins-button");
      var v$87 = $("#store-go-skins-button");
      var v$88 = $("#store-go-wear-button");
      var vF2418 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.store.tab"), true);
        var vF1627 = f16();
        v$86.click(function () {
          vF1627.r.Cd();
          vF1627.s.I(vF1627.s.Wh);
        });
        v$87.click(function () {
          vF1627.r.Cd();
          vF1627.s.I(vF1627.s.$h);
        });
        v$88.click(function () {
          vF1627.r.Cd();
          vF1627.s.I(vF1627.s.ai);
        });
      });
      vF2418.prototype.a = function () {
        vF2418.parent.prototype.a.call(this);
      };
      vF2418.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeIn(200);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2418.prototype.ji = function () {
        f16().r.Dd();
      };
      return vF2418;
    }();
    var vF72 = function () {
      var v$89 = $("#wear-view-canv");
      var v$90 = $("#wear-description-text");
      var v$91 = $("#wear-locked-bar");
      var v$92 = $("#wear-locked-bar-text");
      var v$93 = $("#wear-buy-button");
      var v$94 = $("#wear-item-price");
      var v$95 = $("#wear-eyes-button");
      var v$96 = $("#wear-mouths-button");
      var v$97 = $("#wear-glasses-button");
      var v$98 = $("#wear-hats-button");
      var v$99 = $("#wear-tint-chooser");
      var v$100 = $("#wear-view-prev");
      var v$101 = $("#wear-view-next");
      var vF2419 = f24(vF59, function () {
        var vThis28 = this;
        vF59.call(this, f19("index.game.popup.menu.wear.tab"), true);
        var vF1628 = f16();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF73(this, vF38.ja, v$95);
        this.ka = new vF73(this, vF38.ka, v$96);
        this.la = new vF73(this, vF38.la, v$97);
        this.ma = new vF73(this, vF38.ma, v$98);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF52(v$89);
        v$93.click(function () {
          vF1628.r.Cd();
          vThis29.Bl();
        });
        v$100.click(function () {
          vF1628.r.Cd();
          vThis29.ul.Cl();
        });
        v$101.click(function () {
          vF1628.r.Cd();
          vThis29.ul.Dl();
        });
        v$95.click(function () {
          vF1628.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$96.click(function () {
          vF1628.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$97.click(function () {
          vF1628.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$98.click(function () {
          vF1628.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF2419.prototype.a = function () {
        vF2419.parent.prototype.a.call(this);
        var vF1629 = f16();
        var vThis30 = this;
        vF1629.p.ca(function () {
          var v530 = vF1629.p.Ac();
          if (v530 != null) {
            vThis30.vl = v530.eyesDict;
            vThis30.wl = v530.mouthDict;
            vThis30.xl = v530.glassesDict;
            vThis30.yl = v530.hatDict;
            vThis30.zl = v530.colorDict;
            vThis30.ja.Fl(v530.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v530.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v530.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v530.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF1629.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF2419.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeIn(200);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2419.prototype.ji = function () {
        f16().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF2419.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF2419.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF2419.prototype.Pa = function (p615, p616) {
        this.Al.Pa();
      };
      vF2419.prototype.El = function (p617) {
        this.ul = p617;
        for (var vLN090 = 0; vLN090 < this.tl.length; vLN090++) {
          this.tl[vLN090].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF2419.prototype.Hl = function () {
        if (this.ul == null) {
          return vF32.Yg();
        } else {
          return vF32.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF2419.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p618) {
          vThis31.Ui(p618.Lb, p618.rc);
        });
      };
      vF2419.prototype.Ui = function (p619, p620) {
        var vThis32 = this;
        var vF1630 = f16();
        var vUndefined26 = undefined;
        switch (p620) {
          case vF38.ja:
            vUndefined26 = this.vl[p619].price;
            break;
          case vF38.ka:
            vUndefined26 = this.wl[p619].price;
            break;
          case vF38.la:
            vUndefined26 = this.xl[p619].price;
            break;
          case vF38.ma:
            vUndefined26 = this.yl[p619].price;
            break;
          default:
            return;
        }
        if (!(vF1630.u.zi() < vUndefined26)) {
          this.Sk();
          var v531 = vF1630.t.ha(vF38.ia);
          var v532 = vF1630.t.ha(vF38.ja);
          var v533 = vF1630.t.ha(vF38.ka);
          var v534 = vF1630.t.ha(vF38.la);
          var v535 = vF1630.t.ha(vF38.ma);
          vF1630.u.Ui(p619, p620, function () {
            vF1630.t.Bh(v531, vF38.ia);
            vF1630.t.Bh(v532, vF38.ja);
            vF1630.t.Bh(v533, vF38.ka);
            vF1630.t.Bh(v534, vF38.la);
            vF1630.t.Bh(v535, vF38.ma);
            if (vF1630.u.Ch(p619, p620)) {
              vF1630.t.Bh(p619, p620);
            }
            vThis32.Qk();
          });
        }
      };
      vF2419.prototype.Il = function (p621, p622) {
        switch (p622) {
          case vF38.ja:
            return this.vl[p621];
          case vF38.ka:
            return this.wl[p621];
          case vF38.la:
            return this.xl[p621];
          case vF38.ma:
            return this.yl[p621];
        }
        return null;
      };
      vF2419.prototype.il = function (p623) {
        var vF1631 = f16();
        this.Al.ak(vF1631.t.ha(vF38.ia), false, false);
        this.Al.bk(vF1631.t.ha(vF38.ja), false, false);
        this.Al.ck(vF1631.t.ha(vF38.ka), false, false);
        this.Al.dk(vF1631.t.ha(vF38.la), false, false);
        this.Al.ek(vF1631.t.ha(vF38.ma), false, false);
        var v536 = this.Hl();
        if (v536._g()) {
          var v537 = v536.$g();
          var v538 = this.Il(v537.Lb, v537.rc);
          var v539 = false;
          if (vF1631.t.Ja(v537.Lb, v537.rc)) {
            v$91.hide();
            v$93.hide();
          } else if (v538 == null || v538.nonbuyable == 1) {
            v539 = true;
            v$91.show();
            v$93.hide();
            v$92.text(f19("index.game.popup.menu.store.locked"));
            if (v538 != null && v538.nonbuyable && v538.nonbuyableCause != null) {
              var v540 = vF1631.p.Ac().textDict[v538.nonbuyableCause];
              if (v540 != null) {
                v$92.text(f20(v540));
              }
            }
          } else {
            v$91.hide();
            v$93.show();
            v$94.html(v538.price);
          }
          v$90.html("");
          if (v538 != null && v538.description != null) {
            var v541 = vF1631.p.Ac().textDict[v538.description];
            if (v541 != null) {
              v$90.html(f22(f20(v541)));
            }
          }
          switch (v537.rc) {
            case vF38.ja:
              this.Al.bk(v537.Lb, true, v539);
              break;
            case vF38.ka:
              this.Al.ck(v537.Lb, true, v539);
              break;
            case vF38.la:
              this.Al.dk(v537.Lb, true, v539);
              break;
            case vF38.ma:
              this.Al.ek(v537.Lb, true, v539);
          }
          if (p623) {
            vF1631.t.Bh(v537.Lb, v537.rc);
          }
        }
      };
      var vF73 = function () {
        function f108(p624, p625, p626) {
          this.sl = p624;
          this.rc = p625;
          this.Xk = p626;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f108.prototype.Fl = function (p627) {
          this.Kl = p627;
        };
        f108.prototype.Gl = function (p628) {
          this.Jl = p628;
        };
        f108.prototype.ii = function () {
          var vF1632 = f16();
          var v542 = vF1632.t.ha(this.rc);
          for (var vLN091 = 0; vLN091 < this.Kl.length; vLN091++) {
            for (var vLN092 = 0; vLN092 < this.Kl[vLN091].length; vLN092++) {
              if (this.Kl[vLN091][vLN092] == v542) {
                this.Nl(vLN091);
                this.Ol(vLN092);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f108.prototype.Cl = function () {
          var v543 = this.Ll - 1;
          if (v543 < 0) {
            v543 = this.Kl.length - 1;
          }
          this.Nl(v543);
          this.Ol(this.Ml % this.Kl[v543].length);
        };
        f108.prototype.Dl = function () {
          var v544 = this.Ll + 1;
          if (v544 >= this.Kl.length) {
            v544 = 0;
          }
          this.Nl(v544);
          this.Ol(this.Ml % this.Kl[v544].length);
        };
        f108.prototype.Nl = function (p629) {
          var vThis33 = this;
          if (!(p629 < 0) && !(p629 >= this.Kl.length)) {
            this.Ll = p629;
            v$99.empty();
            var v545 = this.Kl[this.Ll];
            if (v545.length > 1) {
              for (var vLN093 = 0; vLN093 < v545.length; vLN093++) {
                (function (p630) {
                  var v546 = v545[p630];
                  var v547 = vThis33.Jl[v546];
                  var v548 = "#" + vThis33.sl.zl[v547.prime];
                  var v$102 = $("<div style=\"border-color:" + v548 + "\"></div>");
                  v$102.click(function () {
                    f16().r.Cd();
                    vThis33.Ol(p630);
                  });
                  v$99.append(v$102);
                })(vLN093);
              }
            }
          }
        };
        f108.prototype.Ol = function (p631) {
          if (!(p631 < 0) && !(p631 >= this.Kl[this.Ll].length)) {
            this.Ml = p631;
            v$99.children().css("background-color", "transparent");
            var v549 = v$99.children(":nth-child(" + (1 + p631) + ")");
            v549.css("background-color", v549.css("border-color"));
            this.sl.il(true);
          }
        };
        f108.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f108;
      }();
      return vF2419;
    }();
    var vF74 = function () {
      var v$103 = $("#withdraw-consent-yes");
      var v$104 = $("#withdraw-consent-no");
      var vF2420 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.consent.tab"), false);
        var vF1633 = f16();
        v$103.click(function () {
          vF1633.r.Cd();
          if (vF1633.Y()) {
            vF1633.s.I(vF1633.s.F);
            vF1633.$(false, true);
            vF1633.s.aa._(new vF79());
          } else {
            vF1633.s.gi();
          }
        });
        v$104.click(function () {
          vF1633.r.Cd();
          vF1633.s.gi();
        });
      });
      vF2420.prototype.a = function () {
        vF2420.parent.prototype.a.call(this);
      };
      vF2420.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeIn(200);
        vF59.Ok.stop();
        vF59.Ok.fadeOut(50);
      };
      vF2420.prototype.ji = function () {
        f16().r.Dd();
      };
      return vF2420;
    }();
    var vF75 = function () {
      var v$105 = $("#delete-account-timer");
      var v$106 = $("#delete-account-yes");
      var v$107 = $("#delete-account-no");
      var vF2421 = f24(vF59, function () {
        vF59.call(this, f19("index.game.popup.menu.delete.tab"), false);
        var vF1634 = f16();
        v$106.click(function () {
          vF1634.r.Cd();
          if (vF1634.u.P()) {
            vF1634.u.bj();
            vF1634.u.Wi();
          } else {
            vF1634.s.gi();
          }
        });
        v$107.click(function () {
          vF1634.r.Cd();
          vF1634.s.gi();
        });
        this.Pl = [];
      });
      vF2421.prototype.a = function () {
        vF2421.parent.prototype.a.call(this);
      };
      vF2421.prototype.Rk = function () {
        vF59.Fk.stop();
        vF59.Fk.fadeOut(50);
        vF59.Gk.stop();
        vF59.Gk.fadeOut(50);
        vF59.Hk.stop();
        vF59.Hk.fadeOut(50);
        vF59.Jk.stop();
        vF59.Jk.fadeOut(50);
        vF59.Ik.stop();
        vF59.Ik.fadeOut(50);
        vF59.Kk.stop();
        vF59.Kk.fadeOut(50);
        vF59.Lk.stop();
        vF59.Lk.fadeOut(50);
        vF59.Mk.stop();
        vF59.Mk.fadeOut(50);
        vF59.Nk.stop();
        vF59.Nk.fadeOut(50);
        vF59.Ok.stop();
        vF59.Ok.fadeIn(200);
      };
      vF2421.prototype.ji = function () {
        f16().r.Hd();
        v$106.stop();
        v$106.hide();
        v$105.stop();
        v$105.show();
        v$105.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$105.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$105.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$105.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$105.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$105.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$105.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$105.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$105.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$105.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$105.hide();
          v$106.fadeIn(300);
        }, 10000);
      };
      vF2421.prototype.Rl = function (p632, p633) {
        var vSetTimeout2 = setTimeout(p632, p633);
        this.Pl.push(vSetTimeout2);
      };
      vF2421.prototype.Ql = function () {
        for (var vLN094 = 0; vLN094 < this.Pl.length; vLN094++) {
          clearTimeout(this.Pl[vLN094]);
        }
        this.Pl = [];
      };
      return vF2421;
    }();
    var vF76 = function () {
      function f109() {
        this.Ck = function () {};
      }
      f109.prototype.Bk = function () {};
      f109.prototype.ji = function () {};
      return f109;
    }();
    var vF77 = function () {
      var vF2422 = f24(vF76, function (p634) {
        vF76.call(this);
        var v550 = Date.now() + "          " + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v550 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p634 + "</div>    <div class=\"toaster-coins-close\">" + f19("index.game.toaster.continue") + "</div></div>");
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f16().r.Cd();
          vThis34.Ck();
        });
      });
      vF2422.prototype.Bk = function () {
        return this.Sl;
      };
      vF2422.prototype.ji = function () {
        f16().r.Fd();
      };
      return vF2422;
    }();
    var vF78 = function () {
      var vF2423 = f24(vF76, function (p635) {
        vF76.call(this);
        var v551 = Date.now() + "          " + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v551 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p635 + "</div>    <div class=\"toaster-levelup-text\">" + f19("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f19("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f16().r.Cd();
          vThis35.Ck();
        });
      });
      vF2423.prototype.Bk = function () {
        return this.Sl;
      };
      vF2423.prototype.ji = function () {
        f16().r.Ed();
      };
      return vF2423;
    }();
    var vF79 = function () {
      var vF2424 = f24(vF76, function () {
        vF76.call(this);
        var vThis36 = this;
        var vF1635 = f16();
        var v552 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v552 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f19("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f19("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f19("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF1635.r.Cd();
          if (vF1635.Y()) {
            vF1635.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF2424.prototype.Bk = function () {
        return this.Sl;
      };
      vF2424.prototype.ji = function () {
        var vThis37 = this;
        var vF1636 = f16();
        if (vF1636.Y() && !vF1636.Z()) {
          vF1636.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF2424;
    }();
    var vO26 = {};
    vO26.main = {
      Ma: f40("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f40("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f37(),
      e: 4,
      oa: false,
      qk: true
    };
    vO26.miniclip = {
      Ma: f40("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f40("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f37(),
      e: 4,
      oa: false,
      qk: false
    };
    var v553 = vO26[window.ENV];
    v553 ||= vO26.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p636) {
      p636.preventDefault();
      p636.stopPropagation();
      return false;
    });
    f23("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f23("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v37 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f41();
    vUndefined2.v();
    if (vF4()) {
      f23("https://sdfioj0.github.io/saif0/joy.min.js", "mobileconfig", function () {
        vF82();
      });
    }
    let vF82 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = "q";
    window.addEventListener("keydown", function (p637) {
      console.log("event.key: " + p637.key);
      if (p637.key.toLowerCase() !== "q" || !v12 || v11 !== null) {
        if (v11 !== null) {
          clearInterval(v11);
          v11 = null;
        }
      } else {
        let vLN095 = 0;
        const v554 = window.tuNewScore;
        if (v11 !== null) {
          clearInterval(v11);
        }
        v11 = setInterval(function () {
          let v555 = Math.PI / 4;
          let v556 = 165 + (v554 >= 100000 ? 5 : v554 >= 10000 ? 10 : 0);
          vO10.eventoPrincipal.sk += v555;
          if (vO10.eventoPrincipal.sk >= Math.PI * 2) {
            vO10.eventoPrincipal.sk -= Math.PI * 2;
          } else if (vO10.eventoPrincipal.sk <= Math.PI * -2) {
            vO10.eventoPrincipal.sk += Math.PI * 2;
          }
          let v557 = document.getElementById("elementId");
          if (v557) {
            v557.style.transform = "rotate(" + vO10.eventoPrincipal.sk + "rad)";
          }
        }, 165 + (v554 >= 100000 ? 5 : v554 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(vO11));
    }, false);
    let vA17 = [{
      nombre: "chuot 1",
      url: "https://i.imgur.com/SjFtyqp.png"
    }, {
      nombre: "chuot 2",
      url: "https://i.imgur.com/4QC2Exd.png"
    }, {
      nombre: "chuot 3",
      url: "https://i.imgur.com/PfdBkc2.png"
    }, {
      nombre: "chuot 4",
      url: "https://i.imgur.com/vD4zoMk.png"
    }, {
      nombre: "chuot 5",
      url: "https://i.imgur.com/n4N79UI.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://i.imgur.com/zNlNdlx.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let vA18 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/PSRIvVM.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    vO11.loading = true;
    var vLS5 = "";
    vLS5 += "</div>";
    vLS5 += "</div>";
    vLS5 += "</div>";
    vLS5 += "<div id=\"wormcerca\">";
    vLS5 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS5 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS5 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS5 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS5 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS5 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS5 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS5 += "</div>";
    vLS5 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS5 += "</div><div class=\"worm_4\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
    $("#game-view").append(vLS5);
    function f110(p638) {
      if (vO11.PropertyManager) {
        p638.skinId = vO11.PropertyManager.rh;
        p638.eyesId = vO11.PropertyManager.sh;
        p638.mouthId = vO11.PropertyManager.th;
        p638.glassesId = vO11.PropertyManager.uh;
        p638.hatId = vO11.PropertyManager.vh;
      }
    }
    function f111() {
      (function () {
        $("#mm-store").after("\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\" integrity=\"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v+r1p/C/D3zF0lG/f0p4Lw6oB2i+Pj0/6j5W4w+tVvB3nQpQ\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n    \n    <div id=\"saif0-settings-wrapper\">\n        \n        <div onclick=\"Saif0Settings.openPopup()\" style=\"cursor: pointer; padding: 9px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: -71px; margin: 3px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s ease; position: relative; overflow: hidden;\">\n            <div style=\"position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%); animation: pulse 2s ease-in-out infinite;\"></div>\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 12px; position: relative; z-index: 1;\">\n                <i class=\"fas fa-cog fa-spin\" style=\"color: #FFD700; font-size: 26px; filter: drop-shadow(0 0 8px rgba(255,215,0,0.6));\"></i>\n                <span style=\"color: #FFF; font-weight: 800; font-size: 18px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);\">لوحة التحكم</span>\n            </div>\n        </div>\n        \n        <div id=\"saif0-popup\" class=\"saif0-popup\">\n            \n            <div id=\"saif0-popup-header\">\n                <div class=\"header-glow\"></div>\n                <i class=\"fas fa-gamepad\" style=\"color: #FFD700; font-size: 32px; margin-right: 15px; filter: drop-shadow(0 0 10px rgba(255,215,0,0.8));\"></i>\n                <span style=\"font-size: 1.5em; font-weight: 900; background: linear-gradient(135deg, #FFD700, #FFA500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 2px 10px rgba(255,215,0,0.3);\">لوحة تحكم اللعب</span>\n            </div>\n            \n            <button class=\"saif0-close-button\" onclick=\"Saif0Settings.closePopup()\">\n                <i class=\"fas fa-times\"></i> إغلاق\n            </button>\n\n            <div class=\"saif0-tab-buttons\">\n                <button class=\"saif0-tab-button active\" onclick=\"Saif0Settings.openTab('gameSettings', this)\">\n                    <i class=\"fas fa-gamepad\"></i>\n                    <span>إعدادات اللعب</span>\n                </button>\n                <button class=\"saif0-tab-button\" onclick=\"Saif0Settings.openTab('messageSettings', this)\">\n                    <i class=\"fas fa-comment-dots\"></i>\n                    <span>رسائل الهدات</span>\n                </button>\n                <button class=\"saif0-tab-button\" onclick=\"Saif0Settings.openTab('backgroundSettings', this)\">\n                    <i class=\"fas fa-image\"></i>\n                    <span>الخلفيات</span>\n                </button>\n                <button class=\"saif0-tab-button\" onclick=\"Saif0Settings.openTab('keybindSettings', this)\">\n                    <i class=\"fas fa-keyboard\"></i>\n                    <span>الاختصارات</span>\n                </button>\n                <button class=\"saif0-tab-button\" onclick=\"Saif0Settings.openTab('aboutSettings', this)\">\n                    <i class=\"fas fa-info-circle\"></i>\n                    <span>حول</span>\n                </button>\n            </div>\n\n            <div id=\"gameSettings\" class=\"saif0-tab-content active\">\n                <div id=\"saif0-user-info\">\n                    <span style=\"font-weight: bold; margin-right: 10px; color: #FFD700;\">\n                        <i class=\"fas fa-id-card\"></i> معرف اللاعب:\n                    </span> \n                    <input type=\"text\" value=\"" + (typeof vO11 !== "undefined" && vO11.FB_UserID ? vO11.FB_UserID : "N/A") + "\" class=\"saif0-input\" id=\"saif0-user-id\" readonly/>\n                    <button class=\"saif0-button saif0-button-primary\" onclick=\"Saif0Settings.copyUserId()\">\n                        <i class=\"fas fa-copy\"></i> نسخ\n                    </button>\n                </div>\n                \n                <div class=\"settings-grid\">\n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-fire\" style=\"color: #ff4757;\"></i> أكل سريع\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-Abilityzoom-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-video\" style=\"color: #e83e8c;\"></i> وضع الستريمر\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-stremingmode-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-crosshairs\" style=\"color: #2ecc71;\"></i> حفظ الهيدات\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-stremingmodesaveheadshot-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-trophy\" style=\"color: #f39c12;\"></i> إخفاء التوب\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-stremingmodebatop-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-smile-beam\" style=\"color: #f1c40f;\"></i> إيقاف الإيموجي\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-stremingmodeemoj-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-volume-up\" style=\"color: #3498db;\"></i> صوت الهيدشوت\n                        </span>\n                        <label class=\"saif0-switch\">\n                            <input type=\"checkbox\" id=\"settings-stremingmodeheadshot-switch\">\n                            <span class=\"saif0-slider\"></span>\n                        </label>\n                    </div>\n                </div>\n                \n                <div class=\"sound-settings-section\">\n                    <div class=\"saif0-setting-item\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-music\" style=\"color: #9b59b6;\"></i> اختيار الصوت\n                        </span>\n                        <select id=\"sound-selector\" class=\"saif0-select\">\n                            <option value=\"https://sdfioj0.github.io/saif0/sound_effect.mp3\">Head Shot</option>\n                            <option value=\"https://sdfioj0.github.io/saif0/sniper-shot.mp3\">Sniper</option>\n                            <option value=\"https://sdfioj0.github.io/saif0/headshot_6.mp3\">Head Shot 2</option>\n                            <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">القم</option>\n                            <option value=\"https://sdfioj0.github.io/saif0/video/alalobee.mp3\">ع لووبي</option>\n                            <option value=\"https://sdfioj0.github.io/saif0/effect.mp3\">Pew</option>\n                            <option value=\"custom\">مخصص (رابط)</option>\n                        </select>\n                    </div>\n                    <div id=\"custom-sound-url-wrapper\" style=\"display: none;\">\n                        <input type=\"text\" id=\"custom-sound-url\" class=\"saif0-input\" placeholder=\"أدخل رابط الصوت المخصص هنا...\"/>\n                    </div>\n                    \n                    <div class=\"saif0-setting-item volume-control\">\n                        <span class=\"saif0-setting-label\">\n                            <i class=\"fas fa-volume-down\" style=\"color: #1abc9c;\"></i> مستوى الصوت\n                        </span>\n                        <div class=\"volume-slider-wrapper\">\n                            <input type=\"range\" id=\"sound-volume-slider\" min=\"0\" max=\"1\" step=\"0.05\" value=\"1\">\n                            <span id=\"sound-volume-display\">100%</span>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"info-cards\">\n                    <div class=\"info-card\">\n                        <i class=\"fas fa-sync-alt\"></i>\n                        <div>\n                            <strong>دوران الدودة</strong>\n                            <p>اضغط <kbd>Q</kbd> للدوران حول الدودة</p>\n                        </div>\n                    </div>\n                    <div class=\"info-cards\">\n                    <div class=\"info-card\">\n                        <i class=\"fas fa-sync-alt\"></i>\n                        <div>\n                            <strong>الموسيقى</strong>\n                            <p>اضغط <kbd>M</kbd> لتشفيل الموسيقى </p>\n                        </div>\n                    </div>\n                    <div class=\"info-card\">\n                        <i class=\"fas fa-redo-alt\"></i>\n                        <div>\n                            <strong>RESPAWN</strong>\n                            <p>اضغط <kbd>R</kbd> للإعادة (3 مرات)</p>\n                        </div>\n                    </div>\n                    <div class=\"info-card\">\n                        <i class=\"fas fa-search-plus\"></i>\n                        <div>\n                            <strong>زوم سريع</strong>\n                            <p>اضغط <kbd>Z</kbd> للتقريب السريع</p>\n                        </div>\n                    </div>\n                </div>\n                \n                <button class=\"saif0-button saif0-button-danger full-width\" onclick=\"Saif0Settings.resetAllSettings()\">\n                    <i class=\"fas fa-eraser\"></i> إعادة ضبط جميع الإعدادات\n                </button>\n            </div>\n\n            <div id=\"messageSettings\" class=\"saif0-tab-content\">\n                <h3><i class=\"fas fa-edit\"></i> تعديل رسائل الهيدشوت والويلدن</h3>\n                <div class=\"message-editors\">\n                    <div class=\"saif0-message-editor\">\n                        <label for=\"killMessageInput\" class=\"saif0-label\">\n                            <i class=\"fas fa-trophy\"></i> عبارة الولدن\n                        </label>\n                        <input type=\"text\" id=\"killMessageInput\" class=\"saif0-input\" placeholder=\"اكتب عبارة Well Done! هنا...\"/>\n                        <div class=\"saif0-message-presets\">\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'Well Done!')\">Well Done!</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'بلعة بوتات')\">بلعة بوتات</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'هاي شنو')\">هاي شنو</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'خواااصر عيني')\">خواااصر عيني</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'ماتقدر لي')\">ماتقدر لي</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('killMessageInput', 'تتعوض 🤣 تتعوض')\">تتعوض 🤣</span>\n                        </div>\n                    </div>\n                    \n                    <div class=\"saif0-message-editor\">\n                        <label for=\"headshotMessageInput\" class=\"saif0-label\">\n                            <i class=\"fas fa-crosshairs\"></i> عبارة الهيد شوت\n                        </label>\n                        <input type=\"text\" id=\"headshotMessageInput\" class=\"saif0-input\" placeholder=\"اكتب عبارة HEADSHOT هنا...\"/>\n                        <div class=\"saif0-message-presets\">\n                            <span onclick=\"Saif0Settings.applyMessagePreset('headshotMessageInput', 'HEADSHOT')\">HEADSHOT</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('headshotMessageInput', 'إبلع ليك')\">إبلع ليك</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('headshotMessageInput', 'اديلووو ادي 🔪')\">اديلووو ادي 🔪</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('headshotMessageInput', 'HEADSHOT ☠️')\">HEADSHOT ☠️</span>\n                            <span onclick=\"Saif0Settings.applyMessagePreset('headshotMessageInput', 'اديلو يا وديع😋')\">اديلو يا وديع😋</span>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"saif0-button saif0-button-success full-width\" onclick=\"Saif0Settings.saveMessages()\">\n                    <i class=\"fas fa-save\"></i> حفظ العبارات\n                </button>\n            </div>\n\n            <div id=\"backgroundSettings\" class=\"saif0-tab-content\">\n                <h3><i class=\"fas fa-brush\"></i> إعدادات الخلفيات والمؤشر</h3>\n                <div class=\"background-cursor-grid\">\n                    <div class=\"saif0-setting-card\">\n                        <div class=\"card-header\">\n                            <i class=\"fas fa-mouse-pointer\"></i>\n                            <span>اختيار المؤشر</span>\n                        </div>\n                        <div class=\"saif0-cursor-container saif0-gallery\" id=\"saif0-cursor-gallery\">\n                            <div class=\"saif0-gallery-item active\" data-cursor-url=\"https://i.imgur.com/rI522o3.png\">\n                                <img src=\"https://i.imgur.com/rI522o3.png\" alt=\"Default Cursor\">\n                                <span>افتراضي</span>\n                            </div>\n                            <div class=\"saif0-gallery-item\" data-cursor-url=\"https://i.imgur.com/X9Y2Z0u.png\">\n                                <img src=\"https://i.imgur.com/X9Y2Z0u.png\" alt=\"Red Arrow\">\n                                <span>أحمر</span>\n                            </div>\n                            <div class=\"saif0-gallery-item\" data-cursor-url=\"https://i.imgur.com/3cT10qV.png\">\n                                <img src=\"https://i.imgur.com/3cT10qV.png\" alt=\"Gaming Cursor\">\n                                <span>ألعاب</span>\n                            </div>\n                        </div>\n                        <div class=\"upload-section\">\n                            <label for=\"custom-cursor-upload\" class=\"saif0-button saif0-button-secondary\">\n                                <i class=\"fas fa-upload\"></i> رفع مؤشر مخصص\n                            </label>\n                            <input type=\"file\" id=\"custom-cursor-upload\" accept=\"image/*\" style=\"display: none;\" onchange=\"Saif0Settings.uploadCustomCursor(event)\"/>\n                            <div id=\"custom-cursor-preview\" class=\"custom-preview\">\n                                <img id=\"custom-cursor-img-preview\" src=\"\" alt=\"Custom Cursor Preview\">\n                                <span>مؤشرك المخصص</span>\n                            </div>\n                            <button class=\"saif0-button saif0-button-danger saif0-button-sm\" onclick=\"Saif0Settings.removeCustomCursor()\" id=\"remove-custom-cursor-btn\">\n                                <i class=\"fas fa-trash\"></i> إزالة\n                            </button>\n                        </div>\n                    </div>\n                    \n                    <div class=\"saif0-setting-card\">\n                        <div class=\"card-header\">\n                            <i class=\"fas fa-mountain\"></i>\n                            <span>اختيار الخلفية</span>\n                        </div>\n                        <div class=\"saif0-background-container saif0-gallery\" id=\"saif0-background-gallery\">\n                            <div class=\"saif0-gallery-item active\" data-background-url=\"\">\n                                <div class=\"saif0-bg-placeholder\">لا خلفية</div>\n                                <span>افتراضي</span>\n                            </div>\n                            <div class=\"saif0-gallery-item\" data-background-url=\"https://i.imgur.com/QhW1S6x.jpg\">\n                                <img src=\"https://i.imgur.com/QhW1S6x.jpg\" alt=\"Space Background\">\n                                <span>الفضاء</span>\n                            </div>\n                            <div class=\"saif0-gallery-item\" data-background-url=\"https://sdfioj0.github.io/saif0/video/BG.mp4\" data-type=\"video\">\n                                <video src=\"https://sdfioj0.github.io/saif0/video/BG.mp4\" muted loop autoplay></video>\n                                <span>فيديو مجرة</span>\n                            </div>\n                            <div class=\"saif0-gallery-item\" data-background-url=\"https://i.imgur.com/uR1Zf8W.jpg\">\n                                <img src=\"https://i.imgur.com/uR1Zf8W.jpg\" alt=\"Abstract Lines\">\n                                <span>خطوط مجردة</span>\n                            </div>\n                        </div>\n                        <div class=\"upload-section\">\n                            <label for=\"custom-background-upload\" class=\"saif0-button saif0-button-secondary\">\n                                <i class=\"fas fa-upload\"></i> رفع خلفية مخصصة\n                            </label>\n                            <input type=\"file\" id=\"custom-background-upload\" accept=\"image/*,video/*\" style=\"display: none;\" onchange=\"Saif0Settings.uploadCustomBackground(event)\"/>\n                            <div id=\"custom-background-preview\" class=\"custom-preview\">\n                                <img id=\"custom-background-img-preview\" src=\"\" alt=\"Custom Background Preview\">\n                                <video id=\"custom-background-video-preview\" src=\"\" muted loop autoplay></video>\n                                <span>خلفيتك المخصصة</span>\n                            </div>\n                            <button class=\"saif0-button saif0-button-danger saif0-button-sm\" onclick=\"Saif0Settings.removeCustomBackground()\" id=\"remove-custom-background-btn\">\n                                <i class=\"fas fa-trash\"></i> إزالة\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div id=\"keybindSettings\" class=\"saif0-tab-content\">\n                <h3><i class=\"fas fa-keyboard\"></i> مفاتيح الاختصار</h3>\n                <p class=\"saif0-info-text\">\n                    <i class=\"fas fa-info-circle\"></i>\n                    هنا يمكنك عرض مفاتيح الاختصار للوظائف المختلفة في اللعبة\n                </p>\n                <table class=\"saif0-keybind-table\">\n                    <thead>\n                        <tr>\n                            <th>الوظيفة</th>\n                            <th>المفتاح الحالي</th>\n                            <th>الحالة</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><i class=\"fas fa-sync-alt\"></i> دوران الدودة</td>\n                            <td><kbd>Q</kbd></td>\n                            <td><span class=\"status-badge active\">فعّال</span></td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fas fa-redo-alt\"></i> RESPAWN</td>\n                            <td><kbd>R</kbd></td>\n                            <td><span class=\"status-badge active\">فعّال</span></td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fas fa-search-plus\"></i> زوم سريع</td>\n                            <td><kbd>Z</kbd></td>\n                            <td><span class=\"status-badge active\">فعّال</span></td>\n                        </tr>\n                        <tr>\n                            <td><i class=\"fas fa-compress-alt\"></i> تقريب / إبعاد</td>\n                            <td><kbd>Mouse Scroll</kbd></td>\n                            <td><span class=\"status-badge active\">فعّال</span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div id=\"aboutSettings\" class=\"saif0-tab-content about-section\">\n                <div class=\"about-header\">\n                    <i class=\"fas fa-shield-alt\"></i>\n                    <h3>لوحة تحكم Saif0</h3>\n                </div>\n                <p class=\"about-description\">\n                    لوحة تحكم احترافية مصممة خصيصاً لتحسين تجربة اللعب وتوفير أدوات متقدمة للتخصيص الكامل\n                </p>\n                <div class=\"features-grid\">\n                    <div class=\"feature-item\">\n                        <i class=\"fas fa-check-circle\"></i>\n                        <span>تخصيص كامل للواجهة</span>\n                    </div>\n                    <div class=\"feature-item\">\n                        <i class=\"fas fa-check-circle\"></i>\n                        <span>رسائل مخصصة للهيدشوت</span>\n                    </div>\n                    <div class=\"feature-item\">\n                        <i class=\"fas fa-check-circle\"></i>\n                        <span>خلفيات ومؤشرات متنوعة</span>\n                    </div>\n                    <div class=\"feature-item\">\n                        <i class=\"fas fa-check-circle\"></i>\n                        <span>أصوات قابلة للتخصيص</span>\n                    </div>\n                </div>\n                <div class=\"version-info\">\n                    <p><i class=\"fas fa-code\"></i> الإصدار: <strong>3.0.0 Premium</strong></p>\n                    <p><i class=\"fas fa-copyright\"></i> حقوق النشر &copy; 2024 Saif0</p>\n                </div>\n                <div class=\"social-links\">\n                    <a href=\"#\" class=\"social-link\">\n                        <i class=\"fas fa-envelope\"></i> البريد الإلكتروني\n                    </a>\n                    <a href=\"#\" class=\"social-link\">\n                        <i class=\"fab fa-facebook\"></i> فيسبوك\n                    </a>\n                    <a href=\"#\" class=\"social-link\">\n                        <i class=\"fab fa-discord\"></i> ديسكورد\n                    </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <style>\n        :root {\n            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n            --success-gradient: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);\n            --danger-gradient: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);\n            --dark-bg: #1a1a2e;\n            --dark-bg-alt: #16213e;\n            --card-bg: rgba(255, 255, 255, 0.05);\n            --text-light: #ffffff;\n            --text-muted: #b0b0b0;\n            --border-color: rgba(255, 255, 255, 0.1);\n            --shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n            --glow: 0 0 20px rgba(102, 126, 234, 0.5);\n        }\n\n        @keyframes pulse {\n            0%, 100% { opacity: 0.6; }\n            50% { opacity: 0.3; }\n        }\n\n        @keyframes slideIn {\n            from {\n                opacity: 0;\n                transform: translate(-50%, -45%);\n            }\n            to {\n                opacity: 1;\n                transform: translate(-50%, -50%);\n            }\n        }\n\n        @keyframes glow {\n            0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }\n            50% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.8); }\n        }\n\n        #saif0-settings-wrapper {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        }\n\n        .saif0-popup {\n            display: none;\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: var(--dark-bg);\n            border: 2px solid var(--border-color);\n            padding: 0;\n            z-index: 10000;\n            color: var(--text-light);\n            min-width: 700px;\n            max-width: 90vw;\n            max-height: 85vh;\n            border-radius: 20px;\n            box-shadow: var(--shadow);\n            overflow: hidden;\n            animation: slideIn 0.4s ease-out;\n            backdrop-filter: blur(20px);\n        }\n\n        #saif0-popup-header {\n            background: var(--primary-gradient);\n            padding: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: grab;\n            position: relative;\n            overflow: hidden;\n        }\n\n        #saif0-popup-header:active {\n            cursor: grabbing;\n        }\n\n        .header-glow {\n            position: absolute;\n            inset: 0;\n            background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%);\n            animation: pulse 3s ease-in-out infinite;\n        }\n\n        .saif0-close-button {\n            position: absolute;\n            top: 15px;\n            left: 15px;\n            cursor: pointer;\n            background: var(--danger-gradient);\n            color: white;\n            border: none;\n            padding: 8px 16px;\n            border-radius: 10px;\n            font-size: 0.9em;\n            font-weight: 600;\n            transition: all 0.3s ease;\n            z-index: 10;\n            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);\n        }\n\n        .saif0-close-button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px rgba(231, 76, 60, 0.6);\n        }\n\n        .saif0-tab-buttons {\n            display: flex;\n            background: var(--dark-bg-alt);\n            border-bottom: 2px solid var(--border-color);\n            overflow-x: auto;\n        }\n\n        .saif0-tab-button {\n            flex: 1;\n            padding: 15px 10px;\n            background: transparent;\n            color: var(--text-muted);\n            border: none;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            font-weight: 600;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 5px;\n            position: relative;\n            min-width: 100px;\n        }\n\n        .saif0-tab-button::after {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%) scaleX(0);\n            width: 80%;\n            height: 3px;\n            background: var(--primary-gradient);\n            transition: transform 0.3s ease;\n            border-radius: 3px 3px 0 0;\n        }\n\n        .saif0-tab-button:hover {\n            color: var(--text-light);\n            background: rgba(102, 126, 234, 0.1);\n        }\n\n        .saif0-tab-button.active {\n            color: #FFD700;\n            background: rgba(102, 126, 234, 0.2);\n        }\n\n        .saif0-tab-button.active::after {\n            transform: translateX(-50%) scaleX(1);\n        }\n\n        .saif0-tab-button i {\n            font-size: 1.4em;\n        }\n\n        .saif0-tab-content {\n            padding: 25px;\n            display: none;\n            max-height: 60vh;\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        .saif0-tab-content.active {\n            display: block;\n        }\n\n        .saif0-tab-content::-webkit-scrollbar {\n            width: 8px;\n        }\n\n        .saif0-tab-content::-webkit-scrollbar-track {\n            background: var(--dark-bg-alt);\n            border-radius: 10px;\n        }\n\n        .saif0-tab-content::-webkit-scrollbar-thumb {\n            background: var(--primary-gradient);\n            border-radius: 10px;\n        }\n\n        .saif0-tab-content h3 {\n            color: #FFD700;\n            margin-bottom: 25px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 10px;\n            font-size: 1.4em;\n            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);\n        }\n\n        #saif0-user-info {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            padding: 15px;\n            border-radius: 12px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            margin-bottom: 25px;\n            backdrop-filter: blur(10px);\n        }\n\n        .saif0-input, .saif0-select {\n            background: rgba(255, 255, 255, 0.05);\n            border: 2px solid var(--border-color);\n            color: var(--text-light);\n            padding: 10px 15px;\n            border-radius: 10px;\n            font-size: 0.95em;\n            transition: all 0.3s ease;\n            flex: 1;\n        }\n\n        .saif0-input:focus, .saif0-select:focus {\n            border-color: #667eea;\n            outline: none;\n            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);\n        }\n\n        .saif0-button {\n            background: var(--primary-gradient);\n            color: white;\n            border: none;\n            padding: 12px 24px;\n            cursor: pointer;\n            border-radius: 10px;\n            font-size: 1em;\n            font-weight: 700;\n            transition: all 0.3s ease;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            gap: 8px;\n            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .saif0-button::before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 0;\n            height: 0;\n            border-radius: 50%;\n            background: rgba(255, 255, 255, 0.3);\n            transform: translate(-50%, -50%);\n            transition: width 0.6s, height 0.6s;\n        }\n\n        .saif0-button:hover::before {\n            width: 300px;\n            height: 300px;\n        }\n\n        .saif0-button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n        }\n\n        .saif0-button:active {\n            transform: translateY(0);\n        }\n\n        .saif0-button-primary { background: var(--primary-gradient); }\n        .saif0-button-success { \n            background: var(--success-gradient);\n            box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);\n        }\n        .saif0-button-danger { \n            background: var(--danger-gradient);\n            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);\n        }\n        .saif0-button-secondary { \n            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);\n            box-shadow: 0 4px 15px rgba(108, 117, 125, 0.4);\n        }\n        .saif0-button-sm { \n            padding: 8px 16px; \n            font-size: 0.85em; \n        }\n        .full-width { \n            width: 100%; \n            margin-top: 20px;\n        }\n\n        .settings-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n            gap: 15px;\n            margin-bottom: 25px;\n        }\n\n        .saif0-setting-item {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            padding: 15px;\n            border-radius: 12px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            transition: all 0.3s ease;\n        }\n\n        .saif0-setting-item:hover {\n            border-color: rgba(102, 126, 234, 0.5);\n            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);\n            transform: translateY(-2px);\n        }\n\n        .saif0-setting-label {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            font-weight: 600;\n            color: var(--text-light);\n        }\n\n        .saif0-setting-label i {\n            font-size: 1.2em;\n            filter: drop-shadow(0 0 5px currentColor);\n        }\n\n        .saif0-switch {\n            position: relative;\n            display: inline-block;\n            width: 50px;\n            height: 26px;\n        }\n\n        .saif0-switch input {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n\n        .saif0-slider {\n            position: absolute;\n            cursor: pointer;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(255, 255, 255, 0.1);\n            transition: .4s;\n            border-radius: 26px;\n            border: 2px solid var(--border-color);\n        }\n\n        .saif0-slider:before {\n            position: absolute;\n            content: \"\";\n            height: 18px;\n            width: 18px;\n            left: 3px;\n            bottom: 2px;\n            background: white;\n            transition: .4s;\n            border-radius: 50%;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n\n        input:checked + .saif0-slider {\n            background: var(--primary-gradient);\n            border-color: #667eea;\n            box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);\n        }\n\n        input:checked + .saif0-slider:before {\n            transform: translateX(24px);\n        }\n\n        .sound-settings-section {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            padding: 20px;\n            border-radius: 12px;\n            margin-bottom: 25px;\n        }\n\n        .sound-settings-section .saif0-setting-item {\n            background: transparent;\n            border: none;\n            padding: 10px 0;\n        }\n\n        .volume-control {\n            flex-direction: column;\n            align-items: stretch !important;\n        }\n\n        .volume-slider-wrapper {\n            display: flex;\n            align-items: center;\n            gap: 15px;\n            width: 100%;\n            margin-top: 10px;\n        }\n\n        #sound-volume-slider {\n            flex: 1;\n            height: 6px;\n            border-radius: 10px;\n            background: rgba(255, 255, 255, 0.1);\n            outline: none;\n            -webkit-appearance: none;\n        }\n\n        #sound-volume-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 18px;\n            height: 18px;\n            border-radius: 50%;\n            background: var(--primary-gradient);\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(102, 126, 234, 0.6);\n            transition: all 0.3s ease;\n        }\n\n        #sound-volume-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n            box-shadow: 0 0 15px rgba(102, 126, 234, 0.8);\n        }\n\n        #sound-volume-display {\n            min-width: 50px;\n            text-align: center;\n            font-weight: 700;\n            color: #FFD700;\n            font-size: 1.1em;\n        }\n\n        .info-cards {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n            gap: 15px;\n            margin: 25px 0;\n        }\n\n        .info-card {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            border-left: 4px solid #667eea;\n            padding: 15px;\n            border-radius: 10px;\n            display: flex;\n            gap: 15px;\n            align-items: flex-start;\n            transition: all 0.3s ease;\n        }\n\n        .info-card:hover {\n            border-left-color: #FFD700;\n            transform: translateX(-5px);\n            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n        }\n\n        .info-card i {\n            font-size: 2em;\n            color: #667eea;\n            min-width: 40px;\n        }\n\n        .info-card strong {\n            display: block;\n            color: #FFD700;\n            margin-bottom: 5px;\n            font-size: 1.05em;\n        }\n\n        .info-card p {\n            margin: 0;\n            color: var(--text-muted);\n            font-size: 0.9em;\n        }\n\n        .info-card kbd {\n            background: var(--dark-bg-alt);\n            padding: 3px 8px;\n            border-radius: 5px;\n            border: 1px solid var(--border-color);\n            font-family: 'Courier New', monospace;\n            color: #FFD700;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n        }\n\n        .message-editors {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            gap: 20px;\n            margin-bottom: 25px;\n        }\n\n        .saif0-message-editor {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            border-radius: 12px;\n            padding: 20px;\n            backdrop-filter: blur(10px);\n        }\n\n        .saif0-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            margin-bottom: 12px;\n            font-weight: 700;\n            color: #FFD700;\n            font-size: 1.1em;\n        }\n\n        .saif0-label i {\n            font-size: 1.3em;\n        }\n\n        .saif0-message-presets {\n            margin-top: 15px;\n            display: flex;\n            flex-wrap: wrap;\n            gap: 8px;\n        }\n\n        .saif0-message-presets span {\n            background: rgba(102, 126, 234, 0.2);\n            color: var(--text-light);\n            padding: 8px 15px;\n            border-radius: 20px;\n            cursor: pointer;\n            font-size: 0.9em;\n            transition: all 0.3s ease;\n            border: 1px solid var(--border-color);\n        }\n\n        .saif0-message-presets span:hover {\n            background: var(--primary-gradient);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 10px rgba(102, 126, 234, 0.4);\n        }\n\n        .background-cursor-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n            gap: 25px;\n        }\n\n        .saif0-setting-card {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            border-radius: 12px;\n            padding: 20px;\n            backdrop-filter: blur(10px);\n        }\n\n        .card-header {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            margin-bottom: 20px;\n            padding-bottom: 15px;\n            border-bottom: 2px solid var(--border-color);\n            font-weight: 700;\n            font-size: 1.1em;\n            color: #FFD700;\n        }\n\n        .card-header i {\n            font-size: 1.4em;\n            filter: drop-shadow(0 0 8px currentColor);\n        }\n\n        .saif0-gallery {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n            gap: 12px;\n            margin-bottom: 20px;\n        }\n\n        .saif0-gallery-item {\n            background: var(--dark-bg-alt);\n            border: 2px solid var(--border-color);\n            border-radius: 10px;\n            height: 100px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            overflow: hidden;\n            position: relative;\n            transition: all 0.3s ease;\n            padding: 8px;\n        }\n\n        .saif0-gallery-item::before {\n            content: '';\n            position: absolute;\n            inset: 0;\n            background: var(--primary-gradient);\n            opacity: 0;\n            transition: opacity 0.3s ease;\n        }\n\n        .saif0-gallery-item:hover {\n            transform: translateY(-5px) scale(1.05);\n            border-color: #667eea;\n            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n        }\n\n        .saif0-gallery-item:hover::before {\n            opacity: 0.1;\n        }\n\n        .saif0-gallery-item.active {\n            border-color: #FFD700;\n            box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);\n            animation: glow 2s ease-in-out infinite;\n        }\n\n        .saif0-gallery-item.active::after {\n            content: '✓';\n            position: absolute;\n            top: 5px;\n            right: 5px;\n            background: #FFD700;\n            color: var(--dark-bg);\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: 900;\n            font-size: 14px;\n            z-index: 10;\n        }\n\n        .saif0-gallery-item img, .saif0-gallery-item video {\n            max-width: 100%;\n            max-height: 70px;\n            object-fit: cover;\n            border-radius: 6px;\n            position: relative;\n            z-index: 1;\n        }\n\n        .saif0-gallery-item span {\n            font-size: 0.75em;\n            color: var(--text-light);\n            margin-top: 5px;\n            text-align: center;\n            position: relative;\n            z-index: 1;\n            font-weight: 600;\n        }\n\n        .saif0-bg-placeholder {\n            background: repeating-linear-gradient(\n                45deg,\n                rgba(255, 255, 255, 0.05),\n                rgba(255, 255, 255, 0.05) 10px,\n                rgba(255, 255, 255, 0.02) 10px,\n                rgba(255, 255, 255, 0.02) 20px\n            );\n            width: 100%;\n            height: 70px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 0.85em;\n            color: var(--text-muted);\n            border-radius: 6px;\n            border: 1px dashed var(--border-color);\n        }\n\n        .upload-section {\n            border-top: 1px solid var(--border-color);\n            padding-top: 15px;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n            align-items: center;\n        }\n\n        .custom-preview {\n            display: none;\n            flex-direction: column;\n            align-items: center;\n            gap: 8px;\n            padding: 10px;\n            background: var(--dark-bg-alt);\n            border-radius: 8px;\n            border: 1px dashed #FFD700;\n            width: 100%;\n        }\n\n        .custom-preview img, .custom-preview video {\n            max-width: 100px;\n            max-height: 100px;\n            border-radius: 8px;\n            display: none;\n        }\n\n        .custom-preview span {\n            font-size: 0.85em;\n            color: var(--text-muted);\n        }\n\n        #remove-custom-cursor-btn, #remove-custom-background-btn {\n            display: none;\n        }\n\n        .saif0-keybind-table {\n            width: 100%;\n            border-collapse: separate;\n            border-spacing: 0;\n            border-radius: 10px;\n            overflow: hidden;\n            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n        }\n\n        .saif0-keybind-table th, .saif0-keybind-table td {\n            padding: 15px;\n            text-align: center;\n            border-bottom: 1px solid var(--border-color);\n        }\n\n        .saif0-keybind-table th {\n            background: var(--primary-gradient);\n            color: white;\n            font-weight: 700;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }\n\n        .saif0-keybind-table td {\n            background: var(--card-bg);\n            color: var(--text-light);\n        }\n\n        .saif0-keybind-table tr:hover td {\n            background: rgba(102, 126, 234, 0.1);\n        }\n\n        .saif0-keybind-table td i {\n            margin-right: 8px;\n            color: #667eea;\n        }\n\n        .saif0-keybind-table kbd {\n            background: var(--dark-bg);\n            padding: 5px 12px;\n            border-radius: 6px;\n            border: 2px solid var(--border-color);\n            font-family: 'Courier New', monospace;\n            color: #FFD700;\n            font-weight: 700;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n            display: inline-block;\n            min-width: 40px;\n        }\n\n        .status-badge {\n            padding: 5px 12px;\n            border-radius: 20px;\n            font-size: 0.85em;\n            font-weight: 700;\n        }\n\n        .status-badge.active {\n            background: var(--success-gradient);\n            color: white;\n            box-shadow: 0 2px 10px rgba(46, 204, 113, 0.4);\n        }\n\n        .saif0-info-text {\n            background: rgba(102, 126, 234, 0.1);\n            border-left: 4px solid #667eea;\n            padding: 15px;\n            border-radius: 8px;\n            color: var(--text-muted);\n            margin-bottom: 20px;\n            line-height: 1.6;\n        }\n\n        .saif0-info-text i {\n            color: #667eea;\n            margin-left: 8px;\n        }\n\n        .about-section {\n            text-align: center;\n        }\n\n        .about-header {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 15px;\n            margin-bottom: 20px;\n        }\n\n        .about-header i {\n            font-size: 4em;\n            background: var(--primary-gradient);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.6));\n        }\n\n        .about-description {\n            color: var(--text-muted);\n            line-height: 1.8;\n            margin-bottom: 30px;\n            font-size: 1.05em;\n        }\n\n        .features-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n            gap: 15px;\n            margin: 30px 0;\n        }\n\n        .feature-item {\n            background: var(--card-bg);\n            border: 1px solid var(--border-color);\n            padding: 15px;\n            border-radius: 10px;\n            display: flex;\n            align-items: center;\n            gap: 12px;\n            transition: all 0.3s ease;\n        }\n\n        .feature-item:hover {\n            border-color: #2ecc71;\n            transform: translateY(-3px);\n            box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);\n        }\n\n        .feature-item i {\n            color: #2ecc71;\n            font-size: 1.5em;\n        }\n\n        .feature-item span {\n            color: var(--text-light);\n            font-weight: 600;\n        }\n\n        .version-info {\n            margin: 30px 0;\n            padding: 20px;\n            background: var(--card-bg);\n            border-radius: 10px;\n            border: 1px solid var(--border-color);\n        }\n\n        .version-info p {\n            margin: 10px 0;\n            color: var(--text-muted);\n        }\n\n        .version-info strong {\n            color: #FFD700;\n            font-weight: 700;\n        }\n\n        .social-links {\n            display: flex;\n            justify-content: center;\n            gap: 15px;\n            flex-wrap: wrap;\n        }\n\n        .social-link {\n            background: var(--card-bg);\n            color: var(--text-light);\n            padding: 12px 20px;\n            border-radius: 10px;\n            text-decoration: none;\n            border: 1px solid var(--border-color);\n            transition: all 0.3s ease;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-weight: 600;\n        }\n\n        .social-link:hover {\n            background: var(--primary-gradient);\n            transform: translateY(-3px);\n            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n        }\n\n        .social-link i {\n            font-size: 1.2em;\n        }\n\n        @media (max-width: 768px) {\n            .saif0-popup {\n                min-width: 95vw;\n                max-height: 95vh;\n            }\n\n            .settings-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .message-editors {\n                grid-template-columns: 1fr;\n            }\n\n            .background-cursor-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .saif0-tab-button span {\n                display: none;\n            }\n\n            .info-cards {\n                grid-template-columns: 1fr;\n            }\n        }\n    </style>\n\n    <script>\n        const Saif0Settings = {\n            openPopup: function() {\n                const popup = document.getElementById('saif0-popup');\n                if (popup) {\n                    popup.style.display = 'block';\n                }\n            },\n\n            closePopup: function() {\n                document.getElementById('saif0-popup').style.display = 'none';\n            },\n\n            openTab: function(tabId, element) {\n                document.querySelectorAll('.saif0-tab-content').forEach(content => content.style.display = 'none');\n                document.querySelectorAll('.saif0-tab-button').forEach(button => button.classList.remove('active'));\n                document.getElementById(tabId).style.display = 'block';\n                element.classList.add('active');\n            },\n\n            copyUserId: function() {\n                const userIdInput = document.getElementById('saif0-user-id');\n                if (userIdInput) {\n                    navigator.clipboard.writeText(userIdInput.value)\n                        .then(() => alert(`تم نسخ معرفك: ${userIdInput.value}`))\n                        .catch(err => console.error('Failed to copy ID:', err));\n                }\n            },\n\n            saveMessages: function() {\n                const headshotMessage = document.getElementById(\"headshotMessageInput\").value;\n                const killMessage = document.getElementById(\"killMessageInput\").value;\n                localStorage.setItem(\"saif0_headshotMessage\", headshotMessage);\n                localStorage.setItem(\"saif0_killMessage\", killMessage);\n                alert(\"تم حفظ الرسائل بنجاح!\");\n            },\n\n            loadMessages: function() {\n                const savedHeadshot = localStorage.getItem(\"saif0_headshotMessage\") || \"HEADSHOT\";\n                const savedKill = localStorage.getItem(\"saif0_killMessage\") || \"Well Done!\";\n                const headshotInput = document.getElementById(\"headshotMessageInput\");\n                const killInput = document.getElementById(\"killMessageInput\");\n                if (headshotInput) headshotInput.value = savedHeadshot;\n                if (killInput) killInput.value = savedKill;\n            },\n\n            applyMessagePreset: function(inputId, presetText) {\n                const inputElement = document.getElementById(inputId);\n                if (inputElement) inputElement.value = presetText;\n            },\n\n            saveToggleSetting: function(id, value) {\n                localStorage.setItem(`saif0_${id}`, value);\n            },\n\n            loadToggleSettings: function() {\n                const toggles = [\n                    'settings-Abilityzoom-switch',\n                    'settings-stremingmode-switch',\n                    'settings-stremingmodesaveheadshot-switch',\n                    'settings-stremingmodebatop-switch',\n                    'settings-stremingmodeemoj-switch',\n                    'settings-stremingmodeheadshot-switch'\n                ];\n                toggles.forEach(id => {\n                    const element = document.getElementById(id);\n                    if (element) {\n                        const savedValue = localStorage.getItem(`saif0_${id}`);\n                        element.checked = savedValue === 'true';\n                        element.addEventListener('change', () => this.saveToggleSetting(id, element.checked));\n                    }\n                });\n            },\n\n            audio: null,\n            isMuted: false,\n            currentAudioSrc: '',\n            soundVolume: 1,\n\n            initSoundSettings: function() {\n                const soundSelector = document.getElementById('sound-selector');\n                const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n                const customSoundUrlInput = document.getElementById('custom-sound-url');\n                const customSoundUrlWrapper = document.getElementById('custom-sound-url-wrapper');\n                const volumeSlider = document.getElementById('sound-volume-slider');\n                const volumeDisplay = document.getElementById('sound-volume-display');\n\n                this.currentAudioSrc = localStorage.getItem('saif0_selectedSound') || 'https://sdfioj0.github.io/saif0/sound_effect.mp3';\n                this.isMuted = localStorage.getItem('saif0_isMuted') === 'true';\n                this.soundVolume = parseFloat(localStorage.getItem('saif0_soundVolume')) || 1;\n\n                if (soundSelector) {\n                    soundSelector.value = this.currentAudioSrc;\n                    if (this.currentAudioSrc === 'custom') {\n                        customSoundUrlWrapper.style.display = 'block';\n                        customSoundUrlInput.value = localStorage.getItem('saif0_customSoundUrl') || '';\n                    }\n                }\n                if (muteSwitch) muteSwitch.checked = this.isMuted;\n                if (volumeSlider) {\n                    volumeSlider.value = this.soundVolume;\n                    volumeDisplay.textContent = `${Math.round(this.soundVolume * 100)}%`;\n                }\n\n                this.audio = new Audio(this.currentAudioSrc);\n                this.audio.volume = this.isMuted ? 0 : this.soundVolume;\n\n                if (soundSelector) {\n                    soundSelector.addEventListener('change', (e) => {\n                        this.currentAudioSrc = e.target.value;\n                        if (this.currentAudioSrc === 'custom') {\n                            customSoundUrlWrapper.style.display = 'block';\n                            this.currentAudioSrc = customSoundUrlInput.value || '';\n                        } else {\n                            customSoundUrlWrapper.style.display = 'none';\n                        }\n                        localStorage.setItem('saif0_selectedSound', e.target.value);\n                        localStorage.setItem('saif0_customSoundUrl', customSoundUrlInput.value);\n                        this.updateAudioSource(this.currentAudioSrc);\n                    });\n                }\n                \n                if (customSoundUrlInput) {\n                    customSoundUrlInput.addEventListener('input', (e) => {\n                        this.currentAudioSrc = e.target.value;\n                        localStorage.setItem('saif0_customSoundUrl', this.currentAudioSrc);\n                        this.updateAudioSource(this.currentAudioSrc);\n                    });\n                }\n\n                if (muteSwitch) {\n                    muteSwitch.addEventListener('change', () => {\n                        this.isMuted = muteSwitch.checked;\n                        localStorage.setItem('saif0_isMuted', this.isMuted);\n                        if (this.audio) {\n                            this.audio.volume = this.isMuted ? 0 : this.soundVolume;\n                            if (this.isMuted) this.audio.pause();\n                        }\n                    });\n                }\n\n                if (volumeSlider) {\n                    volumeSlider.addEventListener('input', () => {\n                        this.soundVolume = parseFloat(volumeSlider.value);\n                        volumeDisplay.textContent = `${Math.round(this.soundVolume * 100)}%`;\n                        localStorage.setItem('saif0_soundVolume', this.soundVolume);\n                        if (this.audio && !this.isMuted) {\n                            this.audio.volume = this.soundVolume;\n                        }\n                    });\n                }\n            },\n\n            updateAudioSource: function(src) {\n                if (this.audio) {\n                    this.audio.pause();\n                    this.audio.src = src;\n                    this.audio.load();\n                    if (!this.isMuted) {\n                        this.audio.play().catch(e => console.warn('Autoplay prevented:', e));\n                    }\n                } else {\n                    this.audio = new Audio(src);\n                    this.audio.volume = this.isMuted ? 0 : this.soundVolume;\n                    if (!this.isMuted) {\n                        this.audio.play().catch(e => console.warn('Autoplay prevented:', e));\n                    }\n                }\n            },\n            \n            playSound: function() {\n                if (this.audio && !this.isMuted) {\n                    this.audio.currentTime = 0;\n                    this.audio.play().catch(e => console.warn('Sound play prevented:', e));\n                }\n            },\n\n            initBackgroundCursorSettings: function() {\n                const savedCursorUrl = localStorage.getItem('saif0_selectedCursor');\n                const customCursorData = localStorage.getItem('saif0_customCursorData');\n                \n                if (customCursorData) {\n                    this.applyCursor(customCursorData);\n                    const preview = document.getElementById('custom-cursor-img-preview');\n                    const wrapper = document.getElementById('custom-cursor-preview');\n                    if (preview && wrapper) {\n                        preview.src = customCursorData;\n                        preview.style.display = 'block';\n                        wrapper.style.display = 'flex';\n                        document.getElementById('remove-custom-cursor-btn').style.display = 'block';\n                    }\n                } else if (savedCursorUrl) {\n                    this.applyCursor(savedCursorUrl);\n                } else {\n                    this.applyCursor('https://i.imgur.com/rI522o3.png');\n                }\n                this.highlightGalleryItem('saif0-cursor-gallery', savedCursorUrl || 'https://i.imgur.com/rI522o3.png', 'data-cursor-url');\n            \n                const savedBackgroundUrl = localStorage.getItem('saif0_selectedBackground');\n                const customBackgroundData = localStorage.getItem('saif0_customBackgroundData');\n                const customBackgroundType = localStorage.getItem('saif0_customBackgroundType');\n\n                if (customBackgroundData) {\n                    this.applyBackground(customBackgroundData, customBackgroundType);\n                    const imgPreview = document.getElementById('custom-background-img-preview');\n                    const videoPreview = document.getElementById('custom-background-video-preview');\n                    const wrapper = document.getElementById('custom-background-preview');\n                    if (wrapper) {\n                        wrapper.style.display = 'flex';\n                        if (customBackgroundType === 'video' && videoPreview) {\n                            videoPreview.src = customBackgroundData;\n                            videoPreview.style.display = 'block';\n                            imgPreview.style.display = 'none';\n                        } else if (imgPreview) {\n                            imgPreview.src = customBackgroundData;\n                            imgPreview.style.display = 'block';\n                            videoPreview.style.display = 'none';\n                        }\n                        document.getElementById('remove-custom-background-btn').style.display = 'block';\n                    }\n                } else if (savedBackgroundUrl) {\n                    const savedBackgroundType = localStorage.getItem('saif0_selectedBackgroundType') || 'image';\n                    this.applyBackground(savedBackgroundUrl, savedBackgroundType);\n                } else {\n                    this.applyBackground('', 'image');\n                }\n                this.highlightGalleryItem('saif0-background-gallery', savedBackgroundUrl || '', 'data-background-url');\n            \n                document.getElementById('saif0-cursor-gallery').addEventListener('click', (e) => {\n                    const item = e.target.closest('.saif0-gallery-item');\n                    if (item && item.dataset.cursorUrl) {\n                        const url = item.dataset.cursorUrl;\n                        this.applyCursor(url);\n                        localStorage.setItem('saif0_selectedCursor', url);\n                        localStorage.removeItem('saif0_customCursorData');\n                        this.highlightGalleryItem('saif0-cursor-gallery', url, 'data-cursor-url');\n                        document.getElementById('custom-cursor-preview').style.display = 'none';\n                        document.getElementById('remove-custom-cursor-btn').style.display = 'none';\n                    }\n                });\n            \n                document.getElementById('saif0-background-gallery').addEventListener('click', (e) => {\n                    const item = e.target.closest('.saif0-gallery-item');\n                    if (item && item.dataset.backgroundUrl !== undefined) {\n                        const url = item.dataset.backgroundUrl;\n                        const type = item.dataset.type || 'image';\n                        this.applyBackground(url, type);\n                        localStorage.setItem('saif0_selectedBackground', url);\n                        localStorage.setItem('saif0_selectedBackgroundType', type);\n                        localStorage.removeItem('saif0_customBackgroundData');\n                        localStorage.removeItem('saif0_customBackgroundType');\n                        this.highlightGalleryItem('saif0-background-gallery', url, 'data-background-url');\n                        document.getElementById('custom-background-preview').style.display = 'none';\n                        document.getElementById('remove-custom-background-btn').style.display = 'none';\n                    }\n                });\n            },\n            \n            applyCursor: function(url) {\n                if (url) {\n                    document.body.style.cursor = `url(${url}), auto`;\n                } else {\n                    document.body.style.cursor = 'auto';\n                }\n            },\n            \n            uploadCustomCursor: function(event) {\n                const file = event.target.files[0];\n                if (file && file.type.startsWith('image/')) {\n                    const reader = new FileReader();\n                    reader.onload = (e) => {\n                        const base64Image = e.target.result;\n                        localStorage.setItem('saif0_customCursorData', base64Image);\n                        localStorage.removeItem('saif0_selectedCursor');\n                        this.applyCursor(base64Image);\n            \n                        const preview = document.getElementById('custom-cursor-img-preview');\n                        const wrapper = document.getElementById('custom-cursor-preview');\n                        if (preview && wrapper) {\n                            preview.src = base64Image;\n                            preview.style.display = 'block';\n                            wrapper.style.display = 'flex';\n                            document.getElementById('remove-custom-cursor-btn').style.display = 'block';\n                        }\n                        this.highlightGalleryItem('saif0-cursor-gallery', 'custom', 'data-cursor-url');\n                        alert('تم رفع المؤشر المخصص بنجاح!');\n                    };\n                    reader.readAsDataURL(file);\n                } else {\n                    alert('الرجاء اختيار ملف صورة صالح للمؤشر.');\n                }\n            },\n\n            removeCustomCursor: function() {\n                localStorage.removeItem('saif0_customCursorData');\n                const defaultCursor = 'https://i.imgur.com/rI522o3.png';\n                localStorage.setItem('saif0_selectedCursor', defaultCursor);\n                this.applyCursor(defaultCursor);\n                \n                const preview = document.getElementById('custom-cursor-img-preview');\n                const wrapper = document.getElementById('custom-cursor-preview');\n                if (preview && wrapper) {\n                    preview.src = '';\n                    preview.style.display = 'none';\n                    wrapper.style.display = 'none';\n                    document.getElementById('remove-custom-cursor-btn').style.display = 'none';\n                }\n                this.highlightGalleryItem('saif0-cursor-gallery', defaultCursor, 'data-cursor-url');\n                alert('تمت إزالة المؤشر المخصص.');\n            },\n            \n            applyBackground: function(url, type) {\n                const gameContainer = document.querySelector('#game-container') || document.body;\n                gameContainer.style.background = 'none';\n                gameContainer.style.backgroundColor = 'black';\n                gameContainer.style.backgroundSize = 'cover';\n                gameContainer.style.backgroundPosition = 'center';\n                gameContainer.style.backgroundRepeat = 'no-repeat';\n            \n                let oldVideoBg = document.getElementById('saif0-video-background');\n                if (oldVideoBg) oldVideoBg.remove();\n            \n                if (url) {\n                    if (type === 'video') {\n                        const videoBg = document.createElement('video');\n                        videoBg.id = 'saif0-video-background';\n                        videoBg.src = url;\n                        videoBg.autoplay = true;\n                        videoBg.loop = true;\n                        videoBg.muted = true;\n                        videoBg.style.position = 'fixed';\n                        videoBg.style.top = '0';\n                        videoBg.style.left = '0';\n                        videoBg.style.width = '100vw';\n                        videoBg.style.height = '100vh';\n                        videoBg.style.objectFit = 'cover';\n                        videoBg.style.zIndex = '-1';\n                        document.body.appendChild(videoBg);\n                        gameContainer.style.background = 'none';\n                    } else {\n                        gameContainer.style.backgroundImage = `url(${url})`;\n                    }\n                }\n            },\n            \n            uploadCustomBackground: function(event) {\n                const file = event.target.files[0];\n                if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {\n                    const reader = new FileReader();\n                    reader.onload = (e) => {\n                        const base64Data = e.target.result;\n                        const fileType = file.type.startsWith('video/') ? 'video' : 'image';\n            \n                        localStorage.setItem('saif0_customBackgroundData', base64Data);\n                        localStorage.setItem('saif0_customBackgroundType', fileType);\n                        localStorage.removeItem('saif0_selectedBackground');\n                        localStorage.removeItem('saif0_selectedBackgroundType');\n                        \n                        this.applyBackground(base64Data, fileType);\n            \n                        const imgPreview = document.getElementById('custom-background-img-preview');\n                        const videoPreview = document.getElementById('custom-background-video-preview');\n                        const wrapper = document.getElementById('custom-background-preview');\n                        if (wrapper) {\n                            wrapper.style.display = 'flex';\n                            document.getElementById('remove-custom-background-btn').style.display = 'block';\n                            if (fileType === 'video') {\n                                videoPreview.src = base64Data;\n                                videoPreview.style.display = 'block';\n                                imgPreview.style.display = 'none';\n                            } else {\n                                imgPreview.src = base64Data;\n                                imgPreview.style.display = 'block';\n                                videoPreview.style.display = 'none';\n                            }\n                        }\n                        this.highlightGalleryItem('saif0-background-gallery', 'custom', 'data-background-url');\n                        alert('تم رفع الخلفية المخصصة بنجاح!');\n                    };\n                    reader.readAsDataURL(file);\n                } else {\n                    alert('الرجاء اختيار ملف صورة أو فيديو صالح للخلفية.');\n                }\n            },\n\n            removeCustomBackground: function() {\n                localStorage.removeItem('saif0_customBackgroundData');\n                localStorage.removeItem('saif0_customBackgroundType');\n                this.applyBackground('', 'image');\n                \n                const imgPreview = document.getElementById('custom-background-img-preview');\n                const videoPreview = document.getElementById('custom-background-video-preview');\n                const wrapper = document.getElementById('custom-background-preview');\n                if (imgPreview) {\n                    imgPreview.src = '';\n                    imgPreview.style.display = 'none';\n                }\n                if (videoPreview) {\n                    videoPreview.src = '';\n                    videoPreview.style.display = 'none';\n                }\n                if (wrapper) wrapper.style.display = 'none';\n                document.getElementById('remove-custom-background-btn').style.display = 'none';\n\n                localStorage.setItem('saif0_selectedBackground', '');\n                localStorage.setItem('saif0_selectedBackgroundType', 'image');\n                this.highlightGalleryItem('saif0-background-gallery', '', 'data-background-url');\n                alert('تمت إزالة الخلفية المخصصة.');\n            },\n\n            highlightGalleryItem: function(galleryId, activeValue, attribute) {\n                const gallery = document.getElementById(galleryId);\n                if (!gallery) return;\n                const items = gallery.querySelectorAll('.saif0-gallery-item');\n                items.forEach(item => {\n                    item.classList.remove('active');\n                    if (item.getAttribute(attribute) === activeValue) {\n                        item.classList.add('active');\n                    }\n                });\n            },\n\n            resetAllSettings: function() {\n                if (confirm(\"هل أنت متأكد أنك تريد إعادة ضبط جميع الإعدادات؟ سيتم حذف جميع إعداداتك المحفوظة.\")) {\n                    localStorage.clear();\n                    alert(\"تم إعادة ضبط جميع الإعدادات بنجاح. سيتم تحديث الصفحة...\");\n                    location.reload();\n                }\n            },\n\n            dragElement: function(elmnt) {\n                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n                const header = document.getElementById(\"saif0-popup-header\");\n\n                if (header) {\n                    header.onmousedown = dragMouseDown;\n                } else {\n                    elmnt.onmousedown = dragMouseDown;\n                }\n\n                function dragMouseDown(e) {\n                    e = e || window.event;\n                    e.preventDefault();\n                    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || \n                        e.target.tagName === 'BUTTON' || e.target.tagName === 'LABEL') {\n                        return;\n                    }\n                    pos3 = e.clientX;\n                    pos4 = e.clientY;\n                    document.onmouseup = closeDragElement;\n                    document.onmousemove = elementDrag;\n                    header.style.cursor = 'grabbing';\n                }\n\n                function elementDrag(e) {\n                    e = e || window.event;\n                    e.preventDefault();\n                    pos1 = pos3 - e.clientX;\n                    pos2 = pos4 - e.clientY;\n                    pos3 = e.clientX;\n                    pos4 = e.clientY;\n                    \n                    elmnt.style.removeProperty('transform');\n                    elmnt.style.top = (elmnt.offsetTop - pos2) + \"px\";\n                    elmnt.style.left = (elmnt.offsetLeft - pos1) + \"px\";\n                }\n\n                function closeDragElement() {\n                    document.onmouseup = null;\n                    document.onmousemove = null;\n                    header.style.cursor = 'grab';\n                }\n            },\n\n            initialize: function() {\n                setTimeout(() => {\n                    const popup = document.getElementById(\"saif0-popup\");\n                    if (popup) this.dragElement(popup);\n                }, 100);\n\n                this.loadMessages();\n                this.loadToggleSettings();\n                this.initSoundSettings();\n                this.initBackgroundCursorSettings();\n                this.openTab('gameSettings', document.querySelector('.saif0-tab-button.active'));\n            }\n        };\n\n        $(document).ready(function() {\n            Saif0Settings.initialize();\n        });\n    </script>\n  ");
        (function f112() {
          if (window.__Saif0MPInitialized) {
            return;
          }
          window.__Saif0MPInitialized = true;
          const vLSSaif0_music_db_v1 = "saif0_music_db_v1";
          const vLSFiles = "files";
          function f113() {
            return new Promise((p639, p640) => {
              const v558 = indexedDB.open(vLSSaif0_music_db_v1, 1);
              v558.onupgradeneeded = () => {
                const v559 = v558.result;
                if (!v559.objectStoreNames.contains(vLSFiles)) {
                  v559.createObjectStore(vLSFiles, {
                    keyPath: "id"
                  });
                }
              };
              v558.onsuccess = () => p639(v558.result);
              v558.onerror = () => p640(v558.error);
            });
          }
          function f114(p641) {
            return f113().then(p642 => new Promise((p643, p644) => {
              const v560 = p642.transaction(vLSFiles, "readwrite");
              const v561 = v560.objectStore(vLSFiles);
              const v562 = v561.put(p641);
              v562.onsuccess = () => p643(v562.result);
              v562.onerror = () => p644(v562.error);
            }));
          }
          function f115(p645) {
            return f113().then(p646 => new Promise((p647, p648) => {
              const v563 = p646.transaction(vLSFiles, "readonly");
              const v564 = v563.objectStore(vLSFiles);
              const v565 = v564.get(p645);
              v565.onsuccess = () => p647(v565.result);
              v565.onerror = () => p648(v565.error);
            }));
          }
          function f121(p649) {
            return f113().then(p650 => new Promise((p651, p652) => {
              const v566 = p650.transaction(vLSFiles, "readwrite");
              const v567 = v566.objectStore(vLSFiles);
              const v568 = v567.delete(p649);
              v568.onsuccess = () => p651();
              v568.onerror = () => p652(v568.error);
            }));
          }
          function f122() {
            return f113().then(p653 => new Promise((p654, p655) => {
              const v569 = p653.transaction(vLSFiles, "readonly");
              const v570 = v569.objectStore(vLSFiles);
              const v571 = v570.getAll();
              v571.onsuccess = () => p654(v571.result);
              v571.onerror = () => p655(v571.error);
            }));
          }
          const vLSSaif0_playlist_v2 = "saif0_playlist_v2";
          const vLSSaif0_settings_v2 = "saif0_settings_v2";
          const vO27 = {
            volume: 0.8,
            theme: "dark",
            autoplay: true,
            shuffle: false,
            loopMode: "off",
            visualizer: true,
            miniMode: false
          };
          function f124(p656) {
            localStorage.setItem(vLSSaif0_settings_v2, JSON.stringify(p656));
          }
          function f125() {
            return Object.assign({}, vO27, JSON.parse(localStorage.getItem(vLSSaif0_settings_v2) || "{}"));
          }
          const vLSBasicUIThemedarkByDe = "\n  /* Basic UI + theme (dark by default) */\n  #saif0-player {\n    position: fixed;\n    bottom: 22px;\n    right: 22px;\n    width: 420px;\n    max-width: calc(100vw - 44px);\n    background: linear-gradient(180deg, rgba(22,28,36,0.98), rgba(16,20,28,0.98));\n    color: #e6f7fb;\n    border-radius: 14px;\n    box-shadow: 0 12px 40px rgba(0,0,0,0.6);\n    z-index: 2147483000;\n    font-family: \"Palanquin Dark\", Arial, Helvetica, sans-serif;\n    display: none; /* hidden by default — shows on M */\n    overflow: hidden;\n    border: 1px solid rgba(0,188,212,0.14);\n  }\n  #saif0-player.light {\n    background: linear-gradient(180deg, #ffffff, #f6f8fa);\n    color: #1b2330;\n    border: 1px solid rgba(93,66,251,0.08);\n  }\n  #saif0-player header {\n    display:flex; align-items:center; justify-content:space-between; padding:12px 14px; gap:8px;\n  }\n  #saif0-player header h3 { margin:0; font-size:16px; color: #00bcd4; display:flex; align-items:center; gap:8px;}\n  #saif0-player .close-btn {\n    background: transparent; border: none; color:inherit; cursor:pointer; font-size:18px;\n  }\n  #saif0-player .body { padding: 10px 14px 14px 14px; }\n  #saif0-player .track-info { text-align:center; margin-bottom:8px;}\n  #saif0-player .track-info .title { font-weight:700; color:#ffb74d; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\n  #saif0-player .track-info .meta { font-size:12px; color:rgba(230,247,251,0.7); margin-top:4px; }\n\n  .controls { display:flex; gap:8px; align-items:center; justify-content:center; margin:10px 0; }\n  .controls button { background:#00bcd4; border:none; color:#042329; padding:8px 10px; border-radius:10px; cursor:pointer; font-weight:700; }\n  .controls button.alt { background:rgba(255,255,255,0.06); color:inherit; border:1px solid rgba(255,255,255,0.04); }\n  .controls .big { padding:10px 12px; font-size:16px; border-radius:12px; }\n\n  .progress-row { display:flex; align-items:center; gap:8px; margin-top:6px; }\n  .progress-row input[type=\"range\"]{ width:100%; appearance:none; height:8px; background: rgba(255,255,255,0.06); border-radius:6px; }\n  .progress-row input[type=\"range\"]::-webkit-slider-thumb{ width:14px; height:14px; background:#00bcd4; border-radius:50%; box-shadow:0 2px 6px rgba(0,0,0,0.5); -webkit-appearance:none; }\n\n  .volume-row{ display:flex; align-items:center; gap:8px; margin-top:8px; }\n  .volume-row input[type=\"range\"]{ width:100%; }\n\n  .file-controls { display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; justify-content:center; }\n  .file-controls input[type=\"text\"] { flex:1; padding:8px 10px; border-radius:8px; border: none; background:#24303a; color:inherit; }\n  .file-controls label.upload-btn { background:#455a64; color:white; padding:8px 12px; border-radius:8px; cursor:pointer; border:1px solid rgba(255,255,255,0.03); }\n  .file-controls button.small { padding:6px 8px; border-radius:8px; background:#ef5350; color:white; border:none; cursor:pointer; }\n\n  #song-list-container{ margin-top:12px; max-height:220px; overflow:auto; border-radius:10px; padding:8px; border:1px dashed rgba(255,255,255,0.03); background: rgba(255,255,255,0.01); }\n  .song-row { display:flex; gap:8px; align-items:center; justify-content:space-between; padding:8px; border-radius:8px; background:rgba(255,255,255,0.02); margin-bottom:6px; cursor:grab; }\n  .song-row .left { display:flex; gap:10px; align-items:center; flex:1; overflow:hidden; }\n  .song-row .title { font-weight:600; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\n  .song-row .meta { font-size:12px; color:rgba(230,247,251,0.6); }\n  .song-row button { border:none; background:transparent; color:inherit; cursor:pointer; padding:6px; border-radius:8px; }\n  .song-row button.del { color:#ff8a80; }\n  .song-row button.star { color:#ffd54f; }\n\n  .mini-toggle { position:absolute; left:10px; top:10px; background:transparent; border:none; color:inherit; cursor:pointer; font-size:14px; }\n\n  .visualizer { width:100%; height:72px; margin-top:8px; border-radius:8px; background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); }\n\n  .bottom-row { display:flex; gap:8px; align-items:center; justify-content:space-between; margin-top:8px; font-size:12px; color:rgba(230,247,251,0.7); }\n  .toast { position:fixed; left:50%; transform:translateX(-50%); bottom:120px; background:rgba(0,0,0,0.7); color:white; padding:10px 14px; border-radius:8px; z-index:2147483050; display:none; }\n\n  .compact { width: 320px; }\n  ";
          const v572 = document.createElement("style");
          v572.textContent = vLSBasicUIThemedarkByDe;
          document.head.appendChild(v572);
          const v573 = document.createElement("div");
          v573.id = "saif0-player";
          v573.innerHTML = "\n    <header>\n      <h3>🎶 ميوزك Saif0</h3>\n      <div style=\"display:flex; gap:8px; align-items:center;\">\n        <button class=\"mini-toggle\" title=\"تصغير\">⬇️</button>\n        <button class=\"close-btn\" title=\"إغلاق\">✖</button>\n      </div>\n    </header>\n    <div class=\"body\">\n      <div class=\"track-info\">\n        <div class=\"title\" id=\"saif0-title\">---</div>\n        <div class=\"meta\" id=\"saif0-meta\">---</div>\n      </div>\n\n      <div class=\"visualizer\"><canvas id=\"saif0-vis\" width=\"400\" height=\"72\"></canvas></div>\n\n      <div class=\"controls\">\n        <button id=\"shuffle-btn\" title=\"تشغيل عشوائي\">🔀</button>\n        <button id=\"prev-btn\" class=\"alt\">⏮</button>\n        <button id=\"play-btn\" class=\"big\">▶️</button>\n        <button id=\"next-btn\" class=\"alt\">⏭</button>\n        <button id=\"loop-btn\" title=\"تكرار\">🔄</button>\n      </div>\n\n      <div class=\"progress-row\">\n        <div id=\"time-current\">0:00</div>\n        <input type=\"range\" id=\"progress\" min=\"0\" max=\"100\" value=\"0\">\n        <div id=\"time-duration\">0:00</div>\n      </div>\n\n      <div class=\"volume-row\">\n        <div>🔊</div>\n        <input type=\"range\" id=\"volume\" min=\"0\" max=\"1\" step=\"0.01\">\n      </div>\n\n      <div class=\"file-controls\">\n        <input type=\"text\" id=\"url-input\" placeholder=\"ضع رابط mp3 مباشر أو اسم الأغنية...\">\n        <label class=\"upload-btn\">رفع ملف<input type=\"file\" id=\"file-input\" accept=\".mp3\" style=\"display:none\"></label>\n        <button class=\"small\" id=\"save-local-btn\" title=\"حفظ محلي\">💾 حفظ</button>\n      </div>\n\n      <div style=\"display:flex; gap:8px; margin-top:8px;\">\n        <input type=\"text\" id=\"search\" placeholder=\"بحث...\" style=\"flex:1; padding:8px; border-radius:8px; border:none; background:#1f3038; color:inherit;\">\n        <button id=\"export\" class=\"small\" title=\"تصدير القائمة\">⬆️</button>\n        <button id=\"import\" class=\"small\" title=\"استيراد قائمة\">⬇️</button>\n      </div>\n\n      <div id=\"song-list-container\">\n        <div id=\"song-list\"></div>\n      </div>\n\n      <div class=\"bottom-row\">\n        <div id=\"status\">قائمة: 0</div>\n        <div>\n          <span id=\"sleep-indicator\" style=\"margin-left:8px;\"></span>\n          <button id=\"sleep-btn\" class=\"small\" title=\"مؤقت النوم\">🕑</button>\n          <button id=\"clear-btn\" class=\"small\">🗑 مسح</button>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"toast\" id=\"saif0-toast\"></div>\n  ";
          document.body.appendChild(v573);
          const v574 = new Audio();
          v574.crossOrigin = "anonymous";
          v574.preload = "auto";
          let vF125 = f125();
          let v575 = JSON.parse(localStorage.getItem(vLSSaif0_playlist_v2) || "[]");
          const vO28 = {
            root: v573,
            playBtn: v573.querySelector("#play-btn"),
            prevBtn: v573.querySelector("#prev-btn"),
            nextBtn: v573.querySelector("#next-btn"),
            shuffleBtn: v573.querySelector("#shuffle-btn"),
            loopBtn: v573.querySelector("#loop-btn"),
            progress: v573.querySelector("#progress"),
            timeCurrent: v573.querySelector("#time-current"),
            timeDuration: v573.querySelector("#time-duration"),
            volume: v573.querySelector("#volume"),
            title: v573.querySelector("#saif0-title"),
            meta: v573.querySelector("#saif0-meta"),
            fileInput: v573.querySelector("#file-input"),
            urlInput: v573.querySelector("#url-input"),
            addSaveBtn: v573.querySelector("#save-local-btn"),
            songList: v573.querySelector("#song-list"),
            search: v573.querySelector("#search"),
            toast: v573.querySelector("#saif0-toast"),
            closeBtn: v573.querySelector(".close-btn"),
            miniToggle: v573.querySelector(".mini-toggle"),
            exportBtn: v573.querySelector("#export"),
            importBtn: v573.querySelector("#import"),
            clearBtn: v573.querySelector("#clear-btn"),
            sleepBtn: v573.querySelector("#sleep-btn"),
            sleepIndicator: v573.querySelector("#sleep-indicator"),
            visualizerCanvas: v573.querySelector("#saif0-vis")
          };
          const v576 = window.AudioContext || window.webkitAudioContext;
          let v577;
          let v578;
          let v579;
          let v580;
          let v581;
          function f126() {
            try {
              if (!v576) {
                return;
              }
              v577 = new v576();
              v578 = v577.createAnalyser();
              v579 = v577.createMediaElementSource(v574);
              v579.connect(v578);
              v578.connect(v577.destination);
              v578.fftSize = 256;
              const v582 = v578.frequencyBinCount;
              v580 = new Uint8Array(v582);
              f127();
            } catch (e26) {
              console.warn("Visualizer unavailable", e26);
            }
          }
          function f127() {
            if (!v580) {
              return;
            }
            const v583 = vO28.visualizerCanvas;
            const v584 = v583.getContext("2d");
            const v585 = v583.width = v583.clientWidth;
            const v586 = v583.height = v583.clientHeight;
            v578.getByteFrequencyData(v580);
            v584.clearRect(0, 0, v585, v586);
            const v587 = v585 / v580.length * 1.5;
            let vLN096 = 0;
            for (let vLN097 = 0; vLN097 < v580.length; vLN097++) {
              const v588 = v580[vLN097] / 255;
              const v589 = v588 * v586;
              v584.fillStyle = "rgba(0,188,212," + (0.2 + v588 * 0.8) + ")";
              v584.fillRect(vLN096, v586 - v589, v587, v589);
              vLN096 += v587 + 1;
            }
            v581 = requestAnimationFrame(f127);
          }
          function f128() {
            if (v581) {
              cancelAnimationFrame(v581);
            }
            if (v577 && v577.state !== "closed") {
              try {
                v577.close();
              } catch (e27) {}
            }
            v577 = null;
            v578 = null;
            v579 = null;
            v580 = null;
            v581 = null;
          }
          function f129(p657, p658 = 2400) {
            const v590 = vO28.toast;
            v590.textContent = p657;
            v590.style.display = "block";
            v590.style.opacity = "1";
            clearTimeout(v590.__timeout);
            v590.__timeout = setTimeout(() => {
              v590.style.display = "none";
            }, p658);
          }
          function f130() {
            localStorage.setItem(vLSSaif0_playlist_v2, JSON.stringify(v575));
          }
          function f131(p659) {
            if (!p659 || isNaN(p659)) {
              return "0:00";
            }
            const v591 = Math.floor(p659 / 60);
            const v592 = Math.floor(p659 % 60);
            return v591 + ":" + (v592 < 10 ? "0" + v592 : v592);
          }
          function f132() {
            return "t_" + Math.random().toString(36).slice(2, 10);
          }
          async function f133(p660, p661 = null) {
            if (!p660) {
              return;
            }
            const vF132 = f132();
            const vO29 = {
              id: vF132,
              title: p661 || p660.split("/").pop().split("?")[0] || "Untitled",
              srcType: "url",
              src: p660,
              size: 0,
              uploaded: false,
              favorite: false,
              position: 0,
              savedAt: Date.now()
            };
            v575.push(vO29);
            f130();
            f141();
            f129("تم إضافة رابط للأغنية");
            return vO29;
          }
          async function f134(p662) {
            if (!p662) {
              return;
            }
            const vF1322 = f132();
            const v593 = new FileReader();
            const v594 = p662.slice(0, p662.size, p662.type);
            await f114({
              id: vF1322,
              file: v594,
              name: p662.name,
              size: p662.size,
              type: p662.type,
              createdAt: Date.now()
            });
            const vO30 = {
              id: vF1322,
              title: p662.name,
              srcType: "blob",
              src: vF1322,
              size: p662.size,
              uploaded: true,
              favorite: false,
              position: 0,
              savedAt: Date.now()
            };
            v575.push(vO30);
            f130();
            f141();
            f129("تم رفع وتخزين الملف محلياً");
            return vO30;
          }
          async function f135(p663) {
            const v595 = v575[p663];
            if (!v595) {
              return;
            }
            if (v595.srcType === "blob") {
              await f121(v595.src);
            }
            v575.splice(p663, 1);
            f130();
            f141();
            f129("تم حذف الأغنية");
          }
          async function f136(p664) {
            if (!p664) {
              return null;
            }
            if (p664.srcType === "url") {
              return p664.src;
            }
            if (p664.srcType === "blob") {
              const v596 = await f115(p664.src);
              if (!v596 || !v596.file) {
                throw new Error("Blob not found");
              }
              return URL.createObjectURL(v596.file);
            }
            return null;
          }
          let v597 = parseInt(localStorage.getItem("saif0_currentIndex") || "0", 10) || 0;
          let v598 = false;
          let v599 = null;
          async function f137(p665, p666 = {
            seek: 0
          }) {
            if (!v575.length) {
              return;
            }
            p665 = (p665 % v575.length + v575.length) % v575.length;
            v597 = p665;
            localStorage.setItem("saif0_currentIndex", v597);
            const v600 = v575[v597];
            if (!v600) {
              return;
            }
            try {
              const v601 = await f136(v600);
              v574.src = v601;
              v574.currentTime = p666.seek || v600.position || 0 || 0;
              await v574.play();
              v598 = true;
              vO28.playBtn.textContent = "⏸";
              vO28.title.textContent = v600.title || "---";
              vO28.meta.textContent = (v600.uploaded ? "ملف محلي" : "رابط") + " • " + (v600.size ? Math.round(v600.size / 1024) + "KB" : "");
              if (vF125.visualizer) {
                try {
                  if (!v577) {
                    f126();
                  }
                } catch (e28) {}
              }
              f141();
            } catch (e29) {
              console.error(e29);
              f129("☠️ خطأ في تشغيل المسار — يتم الانتقال للقادم");
              if (v600.srcType === "blob") {
                await f121(v600.src).catch(() => {});
                v575.splice(v597, 1);
                f130();
                f141();
              }
              if (v575.length > 0) {
                setTimeout(() => f140(), 400);
              }
            }
          }
          function f138() {
            if (!v574.src && v575.length) {
              f137(v597);
              return;
            }
            if (v574.paused) {
              v574.play().catch(p667 => {
                console.warn("play blocked", p667);
                f129("🔔 السماح بالتشغيل مطلوب (اضغط تشغيل مرة أخرى إذا لزم)");
              });
              vO28.playBtn.textContent = "⏸";
              v598 = true;
            } else {
              v574.pause();
              vO28.playBtn.textContent = "▶️";
              v598 = false;
            }
          }
          function f139() {
            if (!v575.length) {
              return;
            }
            const v602 = vF125.shuffle ? Math.floor(Math.random() * v575.length) : 1;
            f137(v597 - v602);
          }
          function f140() {
            if (!v575.length) {
              return;
            }
            if (vF125.loopMode === "one") {
              f137(v597);
              return;
            }
            const v603 = vF125.shuffle ? Math.floor(Math.random() * v575.length) : 1;
            const v604 = v597 + v603;
            if (v604 >= v575.length) {
              if (vF125.loopMode === "all") {
                f137(0);
              } else {
                v574.pause();
                vO28.playBtn.textContent = "▶️";
                v598 = false;
              }
            } else {
              f137(v604);
            }
          }
          function f141(p668 = "") {
            vO28.songList.innerHTML = "";
            const v605 = document.createDocumentFragment();
            v575.forEach((p669, p670) => {
              if (p668 && !p669.title.toLowerCase().includes(p668.toLowerCase())) {
                return;
              }
              const v606 = document.createElement("div");
              v606.className = "song-row";
              if (p670 === v597) {
                v606.style.outline = "2px solid rgba(255,152,0,0.15)";
              }
              const v607 = document.createElement("div");
              v607.className = "left";
              const v608 = document.createElement("div");
              v608.style.flex = "1";
              const v609 = document.createElement("div");
              v609.className = "title";
              v609.textContent = p669.title || "Untitled";
              const v610 = document.createElement("div");
              v610.className = "meta";
              v610.textContent = (p669.uploaded ? "محلي" : "رابط") + " • " + (p669.size ? Math.round(p669.size / 1024) + "KB" : "");
              v608.appendChild(v609);
              v608.appendChild(v610);
              v607.appendChild(v608);
              const v611 = document.createElement("div");
              v611.style.display = "flex";
              v611.style.gap = "6px";
              v611.style.alignItems = "center";
              const v612 = document.createElement("button");
              v612.innerHTML = p669.favorite ? "★" : "☆";
              v612.className = "star";
              v612.onclick = p671 => {
                p671.stopPropagation();
                p669.favorite = !p669.favorite;
                f130();
                f141(vO28.search.value.trim());
              };
              const v613 = document.createElement("button");
              v613.innerHTML = "▶";
              v613.onclick = p672 => {
                p672.stopPropagation();
                f137(p670);
              };
              const v614 = document.createElement("button");
              v614.innerHTML = "🗑";
              v614.className = "del";
              v614.onclick = async p673 => {
                p673.stopPropagation();
                await f135(p670);
              };
              v611.appendChild(v612);
              v611.appendChild(v613);
              v611.appendChild(v614);
              v606.appendChild(v607);
              v606.appendChild(v611);
              v606.draggable = true;
              v606.addEventListener("dragstart", p674 => {
                p674.dataTransfer.setData("text/plain", p670);
                v606.style.opacity = "0.5";
              });
              v606.addEventListener("dragend", () => {
                v606.style.opacity = "1";
              });
              v606.addEventListener("dragover", p675 => {
                p675.preventDefault();
                v606.style.background = "rgba(255,255,255,0.03)";
              });
              v606.addEventListener("dragleave", () => v606.style.background = "transparent");
              v606.addEventListener("drop", p676 => {
                p676.preventDefault();
                const vParseInt2 = parseInt(p676.dataTransfer.getData("text/plain"), 10);
                const vP670 = p670;
                if (!isNaN(vParseInt2)) {
                  const v615 = v575.splice(vParseInt2, 1)[0];
                  v575.splice(vP670, 0, v615);
                  f130();
                  f141(vO28.search.value.trim());
                }
                v606.style.background = "transparent";
              });
              v606.onclick = () => f137(p670);
              v605.appendChild(v606);
            });
            vO28.songList.appendChild(v605);
            if (vO28.status) {
              vO28.status.textContent = "قائمة: " + v575.length + " أغنية";
            }
            f130();
          }
          vO28.playBtn.onclick = f138;
          vO28.prevBtn.onclick = f139;
          vO28.nextBtn.onclick = f140;
          vO28.shuffleBtn.onclick = () => {
            vF125.shuffle = !vF125.shuffle;
            f124(vF125);
            vO28.shuffleBtn.style.background = vF125.shuffle ? "#ffb74d" : "#00bcd4";
            f129(vF125.shuffle ? "تم تشغيل العشوائي" : "تم إيقاف العشوائي");
          };
          vO28.loopBtn.onclick = () => {
            if (vF125.loopMode === "off") {
              vF125.loopMode = "one";
            } else if (vF125.loopMode === "one") {
              vF125.loopMode = "all";
            } else {
              vF125.loopMode = "off";
            }
            v574.loop = vF125.loopMode === "one";
            f124(vF125);
            vO28.loopBtn.textContent = vF125.loopMode === "one" ? "🔂" : vF125.loopMode === "all" ? "🔁" : "🔄";
            f129("وضع التكرار: " + vF125.loopMode);
          };
          vO28.progress.oninput = p677 => {
            if (!v574.duration) {
              return;
            }
            const vParseFloat = parseFloat(p677.target.value);
            v574.currentTime = vParseFloat / 100 * v574.duration;
          };
          v574.ontimeupdate = () => {
            if (!v574.duration || isNaN(v574.duration)) {
              return;
            }
            vO28.progress.value = v574.currentTime / v574.duration * 100;
            vO28.timeCurrent.textContent = f131(v574.currentTime);
            vO28.timeDuration.textContent = f131(v574.duration);
            const v616 = v575[v597];
            if (v616) {
              v616.position = v574.currentTime;
              if (++v574._posTick > 20) {
                f130();
                v574._posTick = 0;
              }
            }
          };
          v574.onended = () => {
            if (vF125.loopMode === "one") {
              v574.currentTime = 0;
              v574.play();
            } else {
              f140();
            }
          };
          vO28.volume.value = vF125.volume;
          v574.volume = vF125.volume;
          vO28.volume.oninput = () => {
            const vParseFloat2 = parseFloat(vO28.volume.value);
            v574.volume = vParseFloat2;
            vF125.volume = vParseFloat2;
            f124(vF125);
          };
          vO28.fileInput.onchange = async p678 => {
            const v617 = p678.target.files && p678.target.files[0];
            if (!v617) {
              return;
            }
            if (!v617.name.toLowerCase().endsWith(".mp3")) {
              f129("⚠️ اختر ملف MP3 فقط");
              return;
            }
            await f134(v617);
            vO28.fileInput.value = "";
          };
          vO28.addSaveBtn.onclick = async () => {
            const v618 = vO28.urlInput.value.trim();
            if (!v618) {
              f129("ضع رابط MP3 أو اختر ملف");
              return;
            }
            if (/^https?:\/\//i.test(v618) && v618.toLowerCase().includes(".mp3")) {
              await f133(v618);
              vO28.urlInput.value = "";
              return;
            }
            f129("ضع رابط mp3 مباشر أو اسحب ملف");
          };
          vO28.search.oninput = () => f141(vO28.search.value.trim());
          vO28.exportBtn.onclick = () => {
            const v619 = JSON.stringify(v575.map(p679 => Object.assign({}, p679, {
              blobIncluded: p679.srcType === "blob"
            })), null, 2);
            const v620 = new Blob([v619], {
              type: "application/json"
            });
            const v621 = URL.createObjectURL(v620);
            const v624 = document.createElement("a");
            v624.href = v621;
            v624.download = "saif0_playlist.json";
            v624.click();
            URL.revokeObjectURL(v621);
            f129("تم تصدير القائمة");
          };
          vO28.importBtn.onclick = async () => {
            const v625 = document.createElement("input");
            v625.type = "file";
            v625.accept = "application/json";
            v625.onchange = async p680 => {
              const v626 = p680.target.files[0];
              if (!v626) {
                return;
              }
              const v627 = await v626.text();
              try {
                const v628 = JSON.parse(v627);
                if (!Array.isArray(v628)) {
                  throw new Error("invalid");
                }
                v628.forEach(p681 => {
                  const vO31 = {
                    id: f132(),
                    title: p681.title || "Imported",
                    srcType: p681.srcType || "url",
                    src: p681.src || "",
                    size: p681.size || 0,
                    uploaded: p681.uploaded || false,
                    favorite: p681.favorite || false,
                    position: p681.position || 0,
                    savedAt: Date.now()
                  };
                  if (vO31.srcType === "blob") {
                    vO31.srcType = "url";
                    vO31.src = "";
                    vO31.title += " (needs local reupload)";
                    vO31.uploaded = false;
                  }
                  v575.push(vO31);
                });
                f130();
                f141();
                f129("تم استيراد القائمة");
              } catch (e30) {
                f129("ملف غير صالح");
              }
            };
            v625.click();
          };
          vO28.clearBtn.onclick = async () => {
            if (!confirm("مسح جميع الأغاني؟ هذا سيحذف المرفوع محلياً أيضًا.")) {
              return;
            }
            const v629 = await f122();
            for (const v630 of v629) {
              await f121(v630.id).catch(() => {});
            }
            v575 = [];
            f130();
            f141();
            v574.pause();
            v574.src = "";
            vO28.title.textContent = "---";
            f129("تم مسح القائمة بالكامل");
          };
          vO28.sleepBtn.onclick = () => {
            const vPrompt = prompt("ضبط مؤقت النوم بالدقائق (0 لإلغاء):", "0");
            if (vPrompt === null) {
              return;
            }
            const v631 = Math.max(0, parseInt(vPrompt || "0", 10));
            if (v599) {
              clearTimeout(v599);
              v599 = null;
              vO28.sleepIndicator.textContent = "";
            }
            if (v631 > 0) {
              v599 = setTimeout(() => {
                v574.pause();
                vO28.playBtn.textContent = "▶️";
                f129("⏰ مؤقت النوم انتهى — تم الإيقاف");
                vO28.sleepIndicator.textContent = "";
                v599 = null;
              }, v631 * 60 * 1000);
              vO28.sleepIndicator.textContent = "مؤقت: " + v631 + "د";
              f129("تم تفعيل مؤقت النوم " + v631 + " دقيقة");
            } else {
              f129("تم إلغاء مؤقت النوم");
            }
          };
          document.addEventListener("keydown", p682 => {
            if (p682.key.toLowerCase() === "m" && !p682.ctrlKey && !p682.altKey && !p682.metaKey) {
              const v632 = getComputedStyle(v573).display !== "none";
              v573.style.display = v632 ? "none" : "block";
              if (!v632) {
                try {
                  if (v577 && v577.state === "suspended") {
                    v577.resume();
                  }
                } catch (e31) {}
              } else {}
              return;
            }
            if (getComputedStyle(v573).display === "none") {
              return;
            }
            switch (p682.key.toLowerCase()) {
              case " ":
                p682.preventDefault();
                f138();
                break;
              case "arrowleft":
                f139();
                break;
              case "arrowright":
                f140();
                break;
              case "arrowup":
                v574.volume = Math.min(1, v574.volume + 0.05);
                vO28.volume.value = v574.volume;
                vF125.volume = v574.volume;
                f124(vF125);
                break;
              case "arrowdown":
                v574.volume = Math.max(0, v574.volume - 0.05);
                vO28.volume.value = v574.volume;
                vF125.volume = v574.volume;
                f124(vF125);
                break;
              case "f":
                if (v575[v597]) {
                  v575[v597].favorite = !v575[v597].favorite;
                  f130();
                  f141();
                }
                break;
              case "s":
                vF125.shuffle = !vF125.shuffle;
                f124(vF125);
                vO28.shuffleBtn.style.background = vF125.shuffle ? "#ffb74d" : "#00bcd4";
                f129("Shuffle " + (vF125.shuffle ? "On" : "Off"));
                break;
            }
          });
          vO28.closeBtn.onclick = () => {
            v573.style.display = "none";
          };
          vO28.miniToggle.onclick = () => {
            v573.classList.toggle("compact");
            f129(v573.classList.contains("compact") ? "تم التبديل للنمط المصغر" : "النمط الطبيعي");
          };
          const v633 = v573.querySelector("#song-list-container");
          ["dragenter", "dragover"].forEach(p683 => {
            v633.addEventListener(p683, p684 => {
              p684.preventDefault();
              v633.style.borderColor = "rgba(0,188,212,0.4)";
            });
          });
          ["dragleave", "drop"].forEach(p685 => {
            v633.addEventListener(p685, p686 => {
              p686.preventDefault();
              v633.style.borderColor = "";
            });
          });
          v633.addEventListener("drop", async p687 => {
            const v634 = p687.dataTransfer.files;
            if (!v634 || !v634.length) {
              return;
            }
            for (let v635 of v634) {
              if (v635.name.toLowerCase().endsWith(".mp3")) {
                await f134(v635);
              } else {
                f129("جاهز لرفع MP3 فقط");
              }
            }
            f141(vO28.search.value.trim());
          });
          vO28.urlInput.addEventListener("keydown", p688 => {
            if (p688.key === "Enter") {
              if (vO28.addSaveBtn) {
                vO28.addSaveBtn.click();
              }
            }
          });
          function f142() {
            if (!vF125.autoplay) {
              return;
            }
            if (!v575.length) {
              return;
            }
            f137(v597).catch(() => {});
          }
          let v636 = false;
          function f143() {
            if (v636) {
              return;
            }
            const vF83 = () => {
              f142();
              try {
                if (v577 && v577.state === "suspended") {
                  v577.resume();
                }
              } catch (e32) {}
              ["click", "keydown", "pointerdown"].forEach(p689 => document.removeEventListener(p689, vF83));
            };
            ["click", "keydown", "pointerdown"].forEach(p690 => document.addEventListener(p690, vF83));
            v636 = true;
          }
          f143();
          vO28.volume.value = vF125.volume || vO27.volume;
          vO28.shuffleBtn.style.background = vF125.shuffle ? "#ffb74d" : "#00bcd4";
          vO28.loopBtn.textContent = vF125.loopMode === "one" ? "🔂" : vF125.loopMode === "all" ? "🔁" : "🔄";
          (async function f144() {
            await f113().catch(() => {});
            v575 = v575 || [];
            f141();
            if (v575.length) {
              const v637 = v575[v597];
              if (v637) {
                vO28.title.textContent = v637.title || "---";
                vO28.meta.textContent = (v637.uploaded ? "ملف محلي" : "رابط") + " • " + (v637.size ? Math.round(v637.size / 1024) + "KB" : "");
              }
            }
            if (vF125.visualizer) {}
          })();
          window.Saif0AdvancedPlayer = {
            addUrl: (p691, p692) => f133(p691, p692),
            addFile: p693 => f134(p693),
            getPlaylist: () => v575,
            getSettings: () => vF125,
            open: () => {
              v573.style.display = "block";
            },
            close: () => {
              v573.style.display = "none";
            }
          };
          window.addEventListener("beforeunload", () => {
            try {
              f128();
            } catch (e33) {}
          });
          console.log("Saif0 Advanced MP3 Player loaded. اضغط M لفتح/إغلاق المشغل.");
          f129("اضغط M لفتح مشغل Saif0 (محمّي بصرياً)");
        })();
      })();
      $("#PortionSize").on("input", function () {
        vO11.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO11.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO11.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO11.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO11.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO11.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO11.FoodSize = $(this).val();
        localStorage.ComidaSize = vO11.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO11.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO11.FoodShadow;
      });
      $("#mm-advice-cont").html("\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n            <input type=\"button\" value=\"FullScreen\" class=\"fullscreen_button\">\n            <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n        </div>\n        ");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(function () {
        let v_0x1a24bd = v_0x1a24bd;
        if (v_0x1a24bd) {
          anApp.r.Hd();
          anApp.sa(v_0x1a24bd);
        }
      });
      $(".mm-merchant").replaceWith("");
      async function f145(p694) {
        return new Promise(p695 => {
          const vSetTimeout3 = setTimeout(() => {
            p695({
              id: p694.id,
              online: false,
              serverName: p694.serverName,
              isFull: false,
              trafficLevel: "unknown"
            });
          }, 5000);
          try {
            const v638 = new WebSocket(p694.serverUrl);
            v638.onopen = () => {
              clearTimeout(vSetTimeout3);
              let vLSLow = "low";
              if (p694.currentPlayers >= p694.maxPlayers * 0.7) {
                vLSLow = "high";
              } else if (p694.currentPlayers >= p694.maxPlayers * 0.4) {
                vLSLow = "medium";
              }
              const v639 = p694.currentPlayers >= p694.maxPlayers;
              p695({
                id: p694.id,
                online: true,
                serverName: p694.serverName,
                isFull: v639,
                trafficLevel: vLSLow,
                currentPlayers: p694.currentPlayers,
                maxPlayers: p694.maxPlayers
              });
              v638.close();
            };
            v638.onerror = () => {
              clearTimeout(vSetTimeout3);
              p695({
                id: p694.id,
                online: false,
                serverName: p694.serverName,
                isFull: false,
                trafficLevel: "offline"
              });
            };
            v638.onclose = () => {
              clearTimeout(vSetTimeout3);
            };
          } catch (e34) {
            clearTimeout(vSetTimeout3);
            p695({
              id: p694.id,
              online: false,
              serverName: p694.serverName,
              isFull: false,
              trafficLevel: "error"
            });
          }
        });
      }
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n            <div class=\"title-wormate-foghunter-flag\" style=\"position: absolute; top: 0; z-index: 1; width: 92%; margin-left: -2px;\"><img src=\"\" width=\"20\" align=\"center\" alt=\"\">WORM PRO</div>\n            <div class=\"description-text-test\">\n                <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n                    </li>\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n                    </li>\n                </ul>\n                <div class=\"bao-list2\">\n                    <div class=\"servers-container\">\n                        <div class=\"servers-peru\"></div>\n                        <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                        <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                        <div class=\"servers-canada\" style=\"display: none;\"></div>\n                        <div class=\"servers-germania\" style=\"display: none;\"></div>\n                        <div class=\"servers-francia\" style=\"display: none;\"></div>\n                        <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                        <div class=\"servers-japon\" style=\"display: none;\"></div>\n                        <div class=\"servers-australia\" style=\"display: none;\"></div>\n                        <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    </div>\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n                </div>\n            </div>\n        </div>\n        ");
      $(".ui-tab").on("click", f156);
      $(".flag").click(function () {
        let v640 = $(this).attr("value");
        vO11.flag = v640;
        vO14.containerImgS.texture = vO14.onclickServer;
        retundFlagError();
        console.log(v640);
      });
      for (a = 0; a < vO13.Api_listServer.length; a++) {
        var v641 = vO13.Api_listServer[a].serverUrl;
        var v642 = vO13.Api_listServer[a].name;
        var v643 = vO13.Api_listServer[a].region;
        let v644 = document.createElement("p");
        v644.value = v641;
        v644.innerHTML = v642;
        if (v643 == "peru") {
          $(".servers-peru").prepend(v644);
        } else if (v643 == "mexico") {
          $(".servers-mexico").prepend(v644);
        } else if (v643 == "eeuu") {
          $(".servers-eeuu").prepend(v644);
        } else if (v643 == "canada") {
          $(".servers-canada").prepend(v644);
        } else if (v643 == "germania") {
          $(".servers-germania").prepend(v644);
        } else if (v643 == "francia") {
          $(".servers-francia").prepend(v644);
        } else if (v643 == "singapur") {
          $(".servers-singapur").prepend(v644);
        } else if (v643 == "japon") {
          $(".servers-japon").prepend(v644);
        } else if (v643 == "australia") {
          $(".servers-australia").prepend(v644);
        } else if (v643 == "granbretana") {
          $(".servers-granbretana").prepend(v644);
        }
        $(v644).attr("id", v643);
        $(v644).attr("class", "selectSala");
        $(v644).attr("value", v642);
        $(v644).click(function () {
          vO14.setServer($(this).text());
          let v645 = $(this).val();
          vO14.containerImgS.texture = vO14.onclickServer;
          retundFlagError();
          window.server_url = v645;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function f146() {
      $("#getskin").on("click", function () {
        for (var vLN098 = 0; vLN098 < vO12.clientesActivos.length; vLN098++) {
          var v646 = vO12.clientesActivos[vLN098].cliente_NOMBRE;
          var v647 = vO12.clientesActivos[vLN098].cliente_ID;
          var v648 = vO12.clientesActivos[vLN098].Client_VisibleSkin;
          var v649 = vO12.clientesActivos[vLN098].Client_VisibleSkin1;
          var v650 = vO12.clientesActivos[vLN098].Client_VisibleSkin2;
          var v651 = vO12.clientesActivos[vLN098].Client_VisibleSkin3;
          var v652 = vO12.clientesActivos[vLN098].Client_VisibleSkin4;
          var v653 = vO12.clientesActivos[vLN098].Client_VisibleSkin5;
          var v654 = vO12.clientesActivos[vLN098].Client_VisibleSkin6;
          var v655 = vO12.clientesActivos[vLN098].Client_VisibleSkin7;
          var v656 = vO12.clientesActivos[vLN098].Client_VisibleSkin8;
          var v657 = vO12.clientesActivos[vLN098].Client_VisibleSkin9;
          var v658 = vO12.clientesActivos[vLN098].Client_VisibleSkin10;
          var v659 = vO12.clientesActivos[vLN098].Client_VisibleSkin11;
          var v660 = vO12.clientesActivos[vLN098].Client_VisibleSkin12;
          var v661 = vO12.clientesActivos[vLN098].Client_VisibleSkin13;
          var v662 = vO12.clientesActivos[vLN098].Client_VisibleSkin14;
          var v663 = vO12.clientesActivos[vLN098].Client_VisibleSkin15;
          var v664 = vO12.clientesActivos[vLN098].Client_VisibleSkin16;
          var v665 = vO12.clientesActivos[vLN098].Client_VisibleSkin17;
          var v666 = vO12.clientesActivos[vLN098].Client_VisibleSkin18;
          var v667 = vO12.clientesActivos[vLN098].Client_VisibleSkin19;
          var v668 = vO12.clientesActivos[vLN098].Client_VisibleSkin20;
          var v669 = vO12.clientesActivos[vLN098].Client_KeyAccecs;
          if (vO11.FB_UserID == 0) {} else if (vO11.FB_UserID == v647) {
            if (v669 == "XTPRIVATESKIN") {
              for (let vLN099 = 0; vLN099 < vO11.idSkin.length; vLN099++) {
                const v670 = vO11.idSkin[vLN099];
                if (v670.id == v648 || v670.id == v649 || v670.id == v650 || v670.id == v651 || v670.id == v652 || v670.id == v653 || v670.id == v654 || v670.id == v655 || v670.id == v656 || v670.id == v657 || v670.id == v658 || v670.id == v659 || v670.id == v660 || v670.id == v661 || v670.id == v662 || v670.id == v663 || v670.id == v664 || v670.id == v665 || v670.id == v666 || v670.id == v667 || v670.id == v668) {
                  v670.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f147() {
      vO11.adblock = true;
      $("#loa831pibur0w4gv").replaceWith(" <div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n ");
      $("#mm-coins-box").replaceWith();
      window.multiplier = 1;
      window.zoomLevel = 5;
      window.onwheel = p696 => {
        if (p696.deltaY > 0) {
          window.multiplier *= 0.8;
        } else {
          window.multiplier /= 0.8;
        }
        window.changedNf();
      };
      function f148() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f150();
      }
      function f149() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f150();
        }
      }
      function f150() {
        var v671 = Math.round(window.multiplier / 0.625 * 100);
        v671 = Math.min(100, v671);
        var v672 = document.getElementById("zoom-percentage");
        v672.textContent = v671 + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f148, {
        passive: false
      });
      document.getElementById("zoom-out").addEventListener("touchstart", f149, {
        passive: false
      });
      window.onwheel = function (p697) {
        p697.preventDefault();
        if (p697.deltaY < 0) {
          f148();
        } else {
          f149();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          vO11.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v673 = localStorage.getItem("mySwitch");
        if (v673 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          vO11.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          vO11.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v674 = localStorage.getItem("ModeStremer");
        if (v674 === "true") {
          vO11.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          vO11.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v675 = localStorage.getItem("ModeStremerbatop");
        if (v675 === "true") {
          vO11.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          vO11.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v676 = localStorage.getItem("ModeStremersaveheadshot");
        if (v676 === "true") {
          vO11.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          vO11.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v677 = localStorage.getItem("ModeStremerheadshot");
        if (v677 === "true") {
          vO11.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO11.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v678 = localStorage.getItem("ModeStremerheadshot");
        if (v678 === "true") {
          vO11.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO11.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          vO11.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v679 = localStorage.getItem("ModeStremeremoj");
        if (v679 === "true") {
          vO11.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          vO11.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO11.arrow = false;
        } else {
          console.log("I'm not checked");
          vO11.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        vO11.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO11.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO11.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO11.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO11.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO11.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO11.FoodSize = $(this).val();
        localStorage.ComidaSize = vO11.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO11.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO11.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p698) {
        if (vF85(p698)) {
          var v$108 = $(this);
          var vF119 = f157(p698);
          var v680 = p698.keyCode;
          v$108.val(vF119);
          v$108.blur();
          window.keyMove = v680;
          window.localStorage.setItem(v$108.attr("id"), v680);
        } else {
          p698.preventDefault();
        }
      });
      for (a = 0; a < vA17.length; a++) {
        var v681 = vA17[a].url;
        var v682 = vA17[a].nombre;
        let v683 = document.createElement("img");
        v683.src = v681;
        $(".cursor-container").prepend(v683);
        $(v683).attr("class", "cursor");
        $(v683).click(function () {
          let v684 = $(this).attr("src");
          localStorage.cursorSeleccionado = v684;
          $("#game-cont").css({
            cursor: "url(" + v684 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v684 + "), default"
          });
          $("body").css({
            cursor: "url(" + v684 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA18.length; a++) {}
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF7._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f151(p699, p700) {
      let vF84 = function (p701, p702, p703, p704) {
        vO14.setCountGame(p701, p702, p703, p704);
      };
      if (p699 === "count") {
        vO11.kill = (vO11.kill || 0) + (p700 ? 0 : 1);
        vO11.headshot = (vO11.headshot || 0) + (p700 ? 1 : 0);
        vO11.totalKills = vO11.totalKills + (p700 ? 0 : 1);
        vO11.totalHeadshots = vO11.totalHeadshots + (p700 ? 1 : 0);
        vF84(vO11.kill, vO11.headshot, vO11.totalKills, vO11.totalHeadshots);
      }
      if (p699 === "open") {
        vO11.kill = 0;
        vO11.headshot = 0;
        $("#contadorKill_12").show();
        vF84(vO11.kill, vO11.headshot, vO11.totalKills, vO11.totalHeadshots);
      }
      if (p699 === "closed") {
        vO9 = {};
      }
      if (p699 === "cerrar") {
        vO11.kill = 0;
        vO11.headshot = 0;
        vO11.totalKills = 0;
        vO11.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var vA19 = [];
      $("#mm-action-play").on("click", function () {
        var v685 = $("#mm-params-nickname").val();
        var v686 = vA19.some(function (p705) {
          return v685.toLowerCase().includes(p705.toLowerCase());
        });
        if (v686) {
          $("#mm-params-nickname").val("");
        }
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#mm-bottom-buttons").addClass("buttonNavidad");
      var v$109 = $("<img>", {
        id: "gold-crown",
        src: "https://i.imgur.com/z2o76Xe.png",
        alt: "gold-crown"
      });
      $("#mm-player-avatar").after(v$109);
      $("#gold-crown").css({
        position: "absolute",
        top: "-23px",
        transform: "translateX(-2%)",
        width: "50px",
        height: "auto"
      });
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0xc96b2a = function f152() {
      requestAnimationFrame(f152);
      f16().Pa();
    };
    v_0xc96b2a();
    function f153() {
      var v687 = v$110.width();
      var v688 = v$110.height();
      var v689 = v$111.outerWidth();
      var v690 = v$111.outerHeight();
      var v691 = v$112.outerHeight();
      var v692 = v$113.outerHeight();
      var v693 = Math.min(1, Math.min((v688 - v692 - v691) / v690, v687 / v689));
      var v694 = "translate(-50%, -50%) scale(" + v693 + ")";
      v$111.css({
        "-webkit-transform": v694,
        "-moz-transform": v694,
        "-ms-transform": v694,
        "-o-transform": v694,
        transform: v694
      });
      f16().Ra();
      window.scrollTo(0, 1);
    }
    var v$110 = $("body");
    var v$111 = $("#stretch-box");
    var v$112 = $("#markup-header");
    var v$113 = $("#markup-footer");
    f153();
    $(window).resize(f153);
  })();
  window.anApp.p.Bc = function () {
    var v695 = window.anApp.p;
    var vO32 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p706) {
      vO32 = p706;
      $.ajax({
        url: "https://raw.githubusercontent.com/skon/skon/refs/heads/main/si.php",
        method: "GET",
        dataType: "json",
        success: function (p707) {
          vO11.visibleSkin = p707.visibleSkin;
          delete p707.visibleSkin;
          for (let v696 in p707) {
            if (v696 !== "propertyList") {
              if (Array.isArray(p707[v696])) {
                p706[v696] = p706[v696].concat(p707[v696]);
              } else {
                p706[v696] = {
                  ...p706[v696],
                  ...p707[v696]
                };
              }
            }
          }
          vO11.pL = p707.propertyList;
          vO11.idSkin = p707.skinArrayDict;
          v695.Cc(p706);
        },
        error: function (p708, p709, p710) {
          console.error(p710);
          v695.Cc(vO32);
        }
      });
    });
  };
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer");
});
function f154() {
  var v697 = document.getElementById("popup");
  var v698 = document.getElementById("overlay");
  v697.style.display = "block";
  v698.style.display = "block";
}
function f155() {
  var v699 = document.getElementById("popup");
  var v700 = document.getElementById("overlay");
  v699.style.display = "none";
  v700.style.display = "none";
}
function f156() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
function f157(p711) {
  var vLS6 = "";
  if (p711.keyCode === 9) {
    vLS6 += "TAB";
  } else if (p711.keyCode === 13) {
    vLS6 += "ENTER";
  } else if (p711.keyCode === 16) {
    vLS6 += "SHIFT";
  } else {
    vLS6 += String.fromCharCode(p711.keyCode);
  }
  return vLS6;
}
getStringKey = function (p712) {
  var vLS7 = "";
  if (p712 == 9) {
    vLS7 += "TAB";
  } else if (p712 == 13) {
    vLS7 += "ENTER";
  } else if (p712 == 16) {
    vLS7 += "SHIFT";
  } else if (p712 == 32) {
    vLS7 += "SPACE";
  } else if (p712 == 27) {
    vLS7 += "ESC";
  } else {
    vLS7 += String.fromCharCode(p712);
  }
  return vLS7;
};
const vF85 = function (p713) {
  const v701 = p713.key;
  return v701 >= "0" && v701 <= "9" || v701 >= "A" && v701 <= "Z" || v701 === "Tab" || v701 === "Enter" || v701 === "Shift" || v701 === " " || v701 === "Escape";
};
eval(function (p714, p715, p716, p717, p718, p719) {
  p718 = function (p720) {
    return (p720 < p715 ? "" : p718(parseInt(p720 / p715))) + ((p720 = p720 % p715) > 35 ? String.fromCharCode(p720 + 29) : p720.toString(36));
  };
  if (!"".replace(/^/, String)) {
    while (p716--) {
      p719[p718(p716)] = p717[p716] || p718(p716);
    }
    p717 = [function (p721) {
      return p719[p721];
    }];
    p718 = function () {
      return "\\w+";
    };
    p716 = 1;
  }
  while (p716--) {
    if (p717[p716]) {
      p714 = p714.replace(new RegExp("\\b" + p718(p716) + "\\b", "g"), p717[p716]);
    }
  }
  return p714;
});
function f158(p722) {
  if (p722.key === "z") {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener("wheel", f158);
document.addEventListener("DOMContentLoaded", () => {
  let vO33 = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 7
  };
  let v702 = vO33.x;
  let v703 = vO33.y;
  let vLN0100 = 0;
  function f159() {
    let v704 = Date.now();
    fetch(window.location.href).then(() => {
      let v705 = Date.now();
      vLN0100 = v705 - v704;
      if (vLN0100 > 149) {
        v706.style.color = "red";
      } else if (vLN0100 > 99) {
        v706.style.color = "yellow";
      } else {
        v706.style.color = "green";
      }
    }).catch(() => {
      vLN0100 = "Error";
      v706.style.color = "red";
    });
  }
  let v706 = document.createElement("div");
  document.addEventListener("", p723 => {});
  function f160() {
    let v707 = v702 - vO33.x;
    let v708 = v703 - vO33.y;
    let v709 = Math.sqrt(v707 * v707 + v708 * v708);
    if (v709 > vO33.radius) {
      vO33.x += v707 / v709 * vO33.radius;
      vO33.y += v708 / v709 * vO33.radius;
    } else {
      vO33.x = v702;
      vO33.y = v703;
    }
    let v710 = document.getElementById("solucan");
    if (v710) {
      v710.style.left = vO33.x + "px";
      v710.style.top = vO33.y + "px";
    }
    v706.textContent = "Ping: " + vLN0100 + "ms";
    requestAnimationFrame(f160);
  }
  f160();
  setInterval(f159, 1000);
});
document.addEventListener("keydown", p724 => {
  if (p724.key === "F12") {
    p724.preventDefault();
  }
}, false);
document.addEventListener("contextmenu", p725 => {
  p725.preventDefault();
}, false);
window.addEventListener("keydown", p726 => {
  const v711 = p726.key.toLowerCase();
  if (v711 === "z" || v711 === "ئ") {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
var v712 = new Date().getTime();
8;
var v713 = "" + v712;
function f161() {
  var v714 = document.createElement("link");
  v714.rel = "stylesheet";
  v714.href = v713;
  document.head.appendChild(v714);
}
this.injectCSS = f161;
this.injectCSS();
