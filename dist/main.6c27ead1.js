// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "body{\n    background: red;\n    color: white;\n}\n.onePiece{\n    position: relative;\n    height: 100vh;\n}\n.bone{\n    position: absolute;\n    width: 40px;\n    height: 500px;\n    left: 50%;\n    margin-left: -20px;\n}\n.bone .rectangle{\n    width: 40px;\n    height: 500px;\n    background: white;\n}\n.bone .circle{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background: white;\n}\n.bone .circle.one{\n    left: -25px;\n    top: -25px;\n}\n.bone .circle.two{\n    left: 15px;\n    top: -25px;\n}\n.bone .circle.three{\n    left: -25px;\n    bottom: -25px;\n}\n.bone .circle.four{\n    left: 15px;\n    bottom: -25px;\n}\n.bone.left{\n    transform: rotate(45deg);\n}\n.bone.right{\n    transform: rotate(-45deg);\n}\n.headUp{\n    position: absolute;\n    width: 250px;\n    height: 250px;\n    border: 5px solid black;\n    left: 50%;\n    top: 80px;\n    margin-left: -125px;\n    border-radius: 50%;\n    background: white;\n    overflow: hidden;\n    z-index: 5;\n}\n.orangeRectangle{\n    position: absolute;\n    width: 350px;\n    height: 30px;\n    background: #FFD020;\n    left: 50%;\n    top: 190px;\n    margin-left: -175px;\n    border: 5px solid black;\n    border-radius: 30px;\n    z-index: 10;\n}\n.headUp .littleCircle{\n    position: absolute;\n    width: 240px;\n    height: 110px;\n    border-radius:150px 150px 0 0;\n    overflow: hidden;\n    background: #FFD020;\n}\n.headUp .redRectangle{\n    position: absolute;\n    width: 250px;\n    height: 40px;\n    background: red;\n    top: 70px;\n    left: 50%;\n    margin-left: -125px;\n    border: 5px solid black;\n}\n.headUp .eye{\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    left: 50%;\n    top: 140px;\n    margin-left: -30px;\n    background: black;\n    border-radius: 50%;\n}\n.headUp .eye.left{\n    transform: translateX(-60px);\n}\n.headUp .eye.right{\n    transform: translateX(60px);\n}\n.headUp .nose{\n    position: absolute;\n    width: 40px;\n    height: 25px;\n    left: 50%;\n    top: 200px;\n    margin-left: -20px;\n    background: black;\n    border-radius: 50% / 50%;\n}\n.headDown{\n    position: absolute;\n    width: 180px;\n    height: 200px;\n    left: 50%;\n    top: 250px;\n    margin-left: -90px;\n    border: 5px solid black;\n    background: white;\n    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;\n    overflow: hidden;\n}\n.headDown .border{\n    width: 200px;\n    height: 200px;\n    border: 5px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    \n}\n.headDown .border.x1{\n    border-radius: 100px / 50px;\n    top: -90px;\n}\n.headDown .border.x2{\n    border-radius: 100px / 50px;\n    top: -60px;\n    overflow: hidden;\n}\n.headDown .border.y{\n    width: 100px;\n    height: 100px;\n    border: 5px solid black;\n}\n.headDown .border.y.one{\n    bottom: 0;\n    transform: rotate(10deg) translateX(-40px);\n}\n.headDown .border.y.two{\n    bottom: -10px;\n}\n.headDown .border.y.three{\n    bottom: -30px;\n    transform: rotate(-10deg) translateX(140px);\n}";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  hasID: false,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.hasID = true;
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    if (!player.hasID) {
      player.id = setInterval(player.run, player.time);
      player.hasID = true;
    }
  },
  pause: function pause() {
    if (player.hasID) {
      window.clearInterval(player.id);
      player.hasID = false;
    }
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.6c27ead1.js.map