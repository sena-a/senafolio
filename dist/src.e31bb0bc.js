// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"index.js":[function(require,module,exports) {
// 변수 선언
var body = document.body; // header__arrow 클릭시 스크롤 이동

var arrow = document.querySelector(".header__arrow");
arrow.addEventListener("click", function () {
  window.scroll(0, window.innerHeight);
}); // 메뉴 클릭 시 책갈피
// skills

var skill = document.querySelector(".menu__skills");
skill.addEventListener("click", function () {
  document.getElementById("skills").scrollIntoView(true);
}); // project

var project = document.querySelector(".menu__project");
project.addEventListener("click", function () {
  document.getElementById("project").scrollIntoView(true);
}); // about

var about = document.querySelector(".menu__about");
about.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView(true);
}); // 프로젝트 템플릿

var templates = {
  cgv: document.getElementById("project-cgv").content,
  brickid: document.getElementById("project-brickid").content,
  omok: document.getElementById("project-omok").content,
  modalCgv: document.getElementById("modal-cgv").content,
  modalBrickid: document.getElementById("modal-brickid").content,
  modalOmok: document.getElementById("modal-omok").content
};
var projectEl = document.querySelector(".project-item");
var modalEl = document.querySelector(".modal-content"); // projectEl에 프로젝트 아이템 삽입 함수

function drawProject(frag, project) {
  projectEl.textContent = "";
  projectEl.appendChild(frag);
} // modalEl에 프로젝트 모달 템플릿 삽입 함수


function drawModal(frag) {
  modalEl.textContent = "";
  modalEl.appendChild(frag);
} // movie-site 클릭


var cgvButton = document.querySelector(".list-cgv");
cgvButton.addEventListener("click", function () {
  var cl = document.querySelector(".main__project--container").classList;
  var now = cl[1];

  if (now !== "cgv") {
    document.querySelector(".main__project--container").classList.remove("".concat(now));
    document.querySelector(".main__project--container").classList.add("cgv");
    var frag = document.importNode(templates.cgv, true);
    var modalFrag = document.importNode(templates.modalCgv, true);
    drawProject(frag, "cgv");
    drawModal(modalFrag);
  }
}); // brickid 클릭

var brickidButton = document.querySelector(".list-brickid");
brickidButton.addEventListener("click", function () {
  var cl = document.querySelector(".main__project--container").classList;
  var now = cl[1];

  if (now !== "brickid") {
    document.querySelector(".main__project--container").classList.remove("".concat(now));
    document.querySelector(".main__project--container").classList.add("brickid");
    var frag = document.importNode(templates.brickid, true);
    var modalFrag = document.importNode(templates.modalBrickid, true);
    drawProject(frag);
    drawModal(modalFrag);
  }
}); // omok 클릭

var omokButton = document.querySelector(".list-omok");
omokButton.addEventListener("click", function () {
  var cl = document.querySelector(".main__project--container").classList;
  var now = cl[1];

  if (now !== "omok") {
    document.querySelector(".main__project--container").classList.remove("".concat(now));
    document.querySelector(".main__project--container").classList.add("omok");
    var frag = document.importNode(templates.omok, true);
    var modalFrag = document.importNode(templates.modalOmok, true);
    drawProject(frag);
    drawModal(modalFrag);
  }
}); // 모달 열기 버튼

var open = document.querySelector(".modal-open");
open.addEventListener("click", function () {
  document.querySelector(".item-modal").classList.add("item-modal-active");
}); // 모달 닫기 버튼

var close = document.querySelector(".item-modal-close");
close.addEventListener("click", function () {
  document.querySelector(".item-modal").classList.remove("item-modal-active");
}); // 기본 project로 move-site 넣어주기

(function () {
  document.querySelector(".main__project--container").classList.add("cgv");
  var frag = document.importNode(templates.cgv, true);
  var modalFrag = document.importNode(templates.modalCgv, true);
  drawProject(frag);
  drawModal(modalFrag);
})(); // about 그래프
// 출처: https://codepen.io/ames/pen/xZzREM?editors=0010


var w = 1000,
    h = 800,
    circleWidth = 5;
var palette = {
  lightgray: "#E5E8E8",
  gray: "#708284",
  mediumgray: "#536870",
  blue: "#3B757F"
};
var colors = d3.scale.category20();
var nodes = [{
  name: "SENA"
}, {
  name: "고양이",
  target: [0],
  value: 73
}, {
  name: "세렌디피티",
  target: [0, 1],
  value: 69
}, {
  name: "보라색",
  target: [0, 1, 2],
  value: 33
}, {
  name: "초코",
  target: [0, 1, 2, 8],
  value: 42
}, {
  name: "밀크티",
  target: [0, 3, 4],
  value: 42
}, {
  name: "책",
  target: [0, 1, 2],
  value: 38
}, {
  name: "웃음",
  target: [0, 3],
  value: 54
}, {
  name: "영화",
  target: [0, 3, 4, 5],
  value: 47
}];
var links = [];

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].target !== undefined) {
    for (var x = 0; x < nodes[i].target.length; x++) {
      links.push({
        source: nodes[i],
        target: nodes[nodes[i].target[x]]
      });
    }
  }
}

var myChart = d3.select("#about").append("div").classed("svg-container", true).append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 1000 800").classed("svg-content-responsive", true);
var force = d3.layout.force().nodes(nodes).links([]).gravity(0.1).charge(-1000).size([w, h]);
var link = myChart.selectAll("line").data(links).enter().append("line").attr("stroke", palette.lightgray).attr("strokewidth", "1");
var node = myChart.selectAll("circle").data(nodes).enter().append("g").call(force.drag);
node.append("circle").attr("cx", function (d) {
  return d.x;
}).attr("cy", function (d) {
  return d.y;
}).attr("r", function (d, i) {
  console.log(d.value);

  if (i > 0) {
    return circleWidth + d.value;
  } else {
    return circleWidth + 20;
  }
}).attr("fill", function (d, i) {
  // if (i > 5) {
  //   return "#9a9fd9";
  // } else if (i > 3) {
  //   return "#7972a0";
  // } else if (i > 0) {
  //   return "#d5d7fc";
  // } else {
  //   return "#fff";
  // }
  if (i > 5) {
    return "#7875b6";
  } else if (i > 3) {
    return "#9198dd";
  } else if (i > 0) {
    return "#d5d7fc";
  } else {
    return "#fff";
  }
}); // .attr("strokewidth", function(d, i) {
//   if (i > 0) {
//     return "0";
//   } else {
//     return "1";
//   }
// })
// .attr("stroke", function(d, i) {
//   if (i > 0) {
//     return "";
//   } else {
//     return "#7972a0";
//   }
// });

force.on("tick", function (e) {
  node.attr("transform", function (d, i) {
    return "translate(" + d.x + "," + d.y + ")";
  });
  link.attr("x1", function (d) {
    return d.source.x;
  }).attr("y1", function (d) {
    return d.source.y;
  }).attr("x2", function (d) {
    return d.target.x;
  }).attr("y2", function (d) {
    return d.target.y;
  });
});
node.append("text").text(function (d) {
  return d.name;
}).attr("font-family", function (d, i) {
  if (i > 0) {
    return "Nanum Gothic", "sans-serif";
  } else {
    return "Playfair Display", "serif";
  }
}).attr("fill", function (d, i) {
  console.log(d.value);

  if (i > 0 && d.value < 10) {
    return "#fff";
  } else if (i > 0 && d.value > 10) {
    return "#fff";
  } else {
    return "#7972a0";
  }
}).attr("text-anchor", function (d, i) {
  return "middle";
}).attr("font-size", function (d, i) {
  if (i > 0) {
    return "1.3rem";
  } else {
    return "1.3rem";
  }
});
force.start(); // top 버튼

var top = document.querySelector(".top");
top.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57281" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map