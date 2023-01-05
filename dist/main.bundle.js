/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Medium.ttf */ "./src/fonts/Ubuntu/Ubuntu-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Bold.ttf */ "./src/fonts/Ubuntu/Ubuntu-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-LightItalic.ttf */ "./src/fonts/Ubuntu/Ubuntu-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Ubuntu/Ubuntu-Italic.ttf */ "./src/fonts/Ubuntu/Ubuntu-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container > .ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container > .ships .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container > .ships .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container > .ships .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container > .ships .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container > .ships .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #ad5d57;\n}\n\n.miss {\n  background-color: #5795ad;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;AC3BA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AD4BF;;AC1BA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AD6BF;;AC3BA;EACE,cAAA;AD8BF;;AC5BA;;EAEE,gBAAA;AD+BF;;AC7BA;;EAEE,YAAA;ADgCF;;AC9BA;;;;EAIE,WAAA;EACA,aAAA;ADiCF;;AC/BA;EACE,yBAAA;EACA,iBAAA;ADkCF;;AC/BA,kBAAA;AD/HA;EACE,sBAAA;AAkKF;;AA/JA,WAAA;AAYA,UAAA;AAKA,WAAA;AAkBA;EACE,sBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,cArCW;AAsKb;;AA/HA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAkIF;;AAhIA,WAAA;AACA;EACE,8CAAA;EACA,mBAAA;EACA,aApBc;EAqBd,yBAhDgB;AAmLlB;AAlIE;EACE,qBAAA;EAEA,gBAAA;EACA,oBAAA;EACA,iBApDc;AAuLlB;;AA/HA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAkIF;;AAhIA;EACE,aAAA;EACA,sBAAA;EACA,SAzCc;EA0Cd,aA5Cc;EA6Cd,qBAhDoB;EAiDpB,gCAAA;AAmIF;AAjIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WA9De;AAiMnB;;AAhIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAlEY;AAqMd;AAlIE;EACE,aAAA;AAoIJ;AAlIE;EACE,WAAA;EACA,iBAAA;AAoIJ;AAnII;EACE,aAAA;AAqIN;AAnII;EACE,uCAAA;AAqIN;AAlIE;EAME,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,wBAAA;AA+HJ;AA9HI;EACE,yBAzGC;AAyOP;AA9HI;EACE,yBAjHY;EAkHZ,yBAAA;EACA,kBAbc;EAcd,iBAAA;AAgIN;AA9HI;EACE,yCApBU;EAqBV,8CAAA;AAgIN;AA9HI;EACE,yCAxBU;EAyBV,8CAAA;AAgIN;AA9HI;EACE,yCA5BU;EA6BV,8CAAA;AAgIN;AA9HI;EACE,yCAhCU;EAiCV,8CAAA;AAgIN;AA9HI;EACE,yCApCU;EAqCV,8CAAA;AAgIN;;AA5HA,WAAA;AACA;EACE,8CAAA;EACA,eApHgB;EAqHhB,aAAA;EACA,uBAAA;EACA,yBAnJgB;AAkRlB;;AA5HA,oBAAA;AAEA;EACE,qBAnIoB;EAoIpB,yBAAA;EACA,eA/HgB;AA6PlB;;AA5HA;EACE,YAAA;AA+HF;;AA7HA;EACE,wBAAA;AAgIF;;AA9HA;EACE,yBAAA;AAiIF;;AA/HA;EACE,yBAAA;AAkIF;;AAhIA;EACE,yBAAA;AAmIF;;AAjIA;EACE,YAAA;AAoIF;;AAlIA;EACE,yBAAA;AAqIF;;AAnIA;EACE,yBAAA;AAsIF;;AApIA;EACE,yBAAA;AAuIF;;AArIA;EACE,yBAAA;AAwIF","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  section {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $extra-small-size;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container > .ships {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #ad5d57;\n}\n.miss {\n  background-color: #5795ad;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/stylesheets/style.scss":
/*!************************************!*\
  !*** ./src/stylesheets/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/Ubuntu-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Italic.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Italic.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/Ubuntu-Italic.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-LightItalic.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-LightItalic.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/Ubuntu-LightItalic.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/Ubuntu-Medium.ttf";

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/Ubuntu-Regular.ttf";

/***/ }),

/***/ "./src/components/dom.js":
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });



var form = function () {
  var container = document.querySelector('.name.input.container');
  return {
    container: container,
    button: container.querySelector('button'),
    options: {
      optionComputer: {
        input: container.querySelector('.option.computer > input')
      },
      optionSize: {
        input: container.querySelector('.option.size > input'),
        output: container.querySelector('output')
      }
    },
    players: {
      playerOne: {
        container: container.querySelector('.name.input.one'),
        input: container.querySelector('.one > input'),
        error: container.querySelector('.one > .error')
      },
      playerTwo: {
        container: container.querySelector('.name.input.two'),
        input: container.querySelector('.two > input'),
        error: container.querySelector('.two > .error')
      }
    }
  };
}();
var game = function () {
  var container = document.querySelector('.game.container');
  return {
    container: container,
    leftPlayer: {
      container: container.querySelector('.left.player'),
      gameboard: container.querySelector('.left .gameboard.container'),
      ships: container.querySelector('.left .ships.container')
    },
    button: container.querySelector('button.continue'),
    rightPlayer: {
      container: container.querySelector('.right.player'),
      gameboard: container.querySelector('.right .gameboard.container'),
      ships: container.querySelector('.right .ships.container')
    }
  };
}();

/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/components/ship.js");



var Gameboard = function Gameboard() {
  var squares = {};
  var ships = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var _isOneShipPlaced = false;
  var checkPlacement = function checkPlacement(squareStr, shipData) {
    var shipOrient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'v';
    var squareId = squareStr.split(',').map(function (el) {
      return Number(el);
    });
    if (shipData.placed) {
      return {
        elements: null,
        valid: false
      };
    }
    if (shipOrient === 'v') {
      var elements = [];
      for (var i = 0; i < shipData.size; i++) {
        var _squares$neighbourStr;
        var neighbourStr = [squareId[0], squareId[1] + i].join();
        elements.push(neighbourStr);
        if (!squares[neighbourStr]) {
          return {
            elements: elements,
            valid: false
          };
        } else if ((_squares$neighbourStr = squares[neighbourStr]) !== null && _squares$neighbourStr !== void 0 && _squares$neighbourStr.occupies) {
          return {
            elements: elements,
            valid: false
          };
        }
      }
      return {
        elements: elements,
        valid: true
      };
    }
    if (shipOrient === 'h') {
      var _elements = [];
      for (var _i = 0; _i < shipData.size; _i++) {
        var _squares$_neighbourSt;
        var _neighbourStr = [squareId[0] + _i, squareId[1]].join();
        _elements.push(_neighbourStr);
        if (!squares[_neighbourStr]) {
          return {
            elements: _elements,
            valid: false
          };
        } else if ((_squares$_neighbourSt = squares[_neighbourStr]) !== null && _squares$_neighbourSt !== void 0 && _squares$_neighbourSt.occupies) {
          return {
            elements: _elements,
            valid: false
          };
        }
      }
      return {
        elements: _elements,
        valid: true
      };
    }
    return 'banana';
  };
  var placeShipVertically = function placeShipVertically(squareStr, ship) {
    _isOneShipPlaced = true;
    var squareId = squareStr.split(',').map(function (el) {
      return Number(el);
    });
    var selectedSquares = [];
    for (var i = 0; i < ship.size; i++) {
      var neighbour = [squareId[0], squareId[1] + i];
      var neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  var placeShipHorizontally = function placeShipHorizontally(squareStr, ship) {
    _isOneShipPlaced = true;
    var squareId = squareStr.split(',').map(function (el) {
      return Number(el);
    });
    var selectedSquares = [];
    for (var i = 0; i < ship.size; i++) {
      var neighbour = [squareId[0] + i, squareId[1]];
      var neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  return {
    isOneShipPlaced: function isOneShipPlaced() {
      return _isOneShipPlaced;
    },
    checkPlacement: checkPlacement,
    squares: squares,
    ships: ships,
    createBoard: function createBoard() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      this.size = size;
      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
          this.squares["".concat([j, i])] = {
            isHit: false,
            occupies: null
          };
        }
      }
      return this.squares;
    },
    placeShip: function placeShip(shipName, squareStr) {
      var _checkPlacement;
      var newOrient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'v';
      var ship = this.ships[shipName];
      var squareId = squareStr.split(',').map(function (el) {
        return Number(el);
      });
      var shipOrient = newOrient;
      if ((_checkPlacement = checkPlacement(squareStr, ship, newOrient)) !== null && _checkPlacement !== void 0 && _checkPlacement.valid) {
        if (shipOrient === 'v') {
          ship.placed = true;
          return placeShipVertically(squareStr, ship, shipOrient);
        } else if (shipOrient === 'h') {
          ship.placed = true;
          return placeShipHorizontally(squareStr, ship, shipOrient);
        }
      } else {
        return null;
      }
    },
    areShipsSunk: function areShipsSunk() {
      for (var _i2 = 0, _Object$keys = Object.keys(this.ships); _i2 < _Object$keys.length; _i2++) {
        var ship = _Object$keys[_i2];
        if (!this.ships[ship].isSunk() && this.ships[ship].placed) {
          return false;
        }
      }
      return true;
    },
    receiveAttack: function receiveAttack(squareStr) {
      var squareIdStr = squareStr;
      var square = this.squares[squareIdStr];
      if (!square) {
        return "Out of bounds";
      } else if (square.isHit) {
        return "Already hit";
      } else {
        square.isHit = true;
        if (square.occupies) {
          square.occupies.hit();
          console.log(square.occupies);
        }
        return square.occupies;
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/components/gameloop.js":
/*!************************************!*\
  !*** ./src/components/gameloop.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/dom.js */ "./src/components/dom.js");
/* harmony import */ var _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/player.js */ "./src/components/player.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var Gameloop = function () {
  var processForm = function processForm() {
    var options = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.options;
    var players = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.players;
    var addFormEventListeners = function addFormEventListeners() {
      options.optionComputer.input.addEventListener('input', function () {
        togglePLayerTwo();
      });
      options.optionSize.input.addEventListener('input', function () {
        displaySliderValue(options.optionSize.input, options.optionSize.output);
      });
      _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.button.addEventListener('click', function (e) {
        e.preventDefault();
        for (var player in players) {
          hideElement(players[player].error);
        }
        if (players.playerOne.input.validity.valid && players.playerTwo.input.validity.valid) {
          createGameComponents(getFormInput(players, options));
          _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container.reset();
          hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
        } else {
          for (var _player in players) {
            displayError(players[_player]);
          }
        }
      });
    };
    var showError = function showError(errorContainer, msg) {
      errorContainer.classList.remove('hide');
      errorContainer.textContent = msg;
    };
    var togglePLayerTwo = function togglePLayerTwo() {
      if (options.optionComputer.input.checked) {
        players.playerTwo.container.classList.add('fade');
        players.playerTwo.input.disabled = true;
        players.playerTwo.input.value = '';
      } else {
        players.playerTwo.container.classList.remove('fade');
        players.playerTwo.input.disabled = false;
      }
    };
    var displaySliderValue = function displaySliderValue(input, output) {
      output.textContent = input.value;
    };
    var getFormInput = function getFormInput(players, options) {
      var firstName = players.playerOne.input.value;
      var secondName = players.playerTwo.input.value;
      var computerOption = options.optionComputer.input.checked;
      var gameboardSize = options.optionSize.input.value;
      return {
        firstName: firstName,
        secondName: secondName,
        computerOption: computerOption,
        gameboardSize: gameboardSize
      };
    };
    var displayError = function displayError(player) {
      if (player.input.validity.valueMissing) {
        showError(player.error, 'A name is required.');
      }
    };
    addFormEventListeners();
  };
  var createGameComponents = function createGameComponents(obj) {
    var gameContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.container;
    // const playerContainer = game.container.querySelector('.container.player');
    var createPlayerData = function createPlayerData(obj) {
      if (obj.computerOption) {
        return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.name, true, obj.gameboardSize);
      } else {
        return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.name, false, obj.gameboardSize);
      }
    };
    var createGameElements = function createGameElements(player) {
      var createGrid = function createGrid() {
        var grid = document.createElement('div');
        grid.style.gridTemplateRows = "repeat(".concat(player.gameboard.size, ", 1fr)");
        grid.style.gridTemplateColumns = "repeat(".concat(player.gameboard.size, ", 1fr)");
        for (var _i = 0, _Object$keys = Object.keys(player.gameboard.squares); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var squareEl = document.createElement('div');
          squareEl.classList.add('square');
          squareEl.dataset.id = ["".concat(key)];
          squareEl.dataset.owner = ["".concat(player.name)];
          grid.append(squareEl);
          grid.style.height = "100%";
          grid.style.width = "100%";
        }
        grid.classList.add('grid', 'container');
        return grid;
      };
      var createShips = function createShips() {
        var ships = document.createElement('div');
        for (var _i2 = 0, _Object$keys2 = Object.keys(player.gameboard.ships); _i2 < _Object$keys2.length; _i2++) {
          var key = _Object$keys2[_i2];
          var shipEl = document.createElement('div');
          shipEl.classList.add('ship', "".concat(key));
          shipEl.dataset.type = "".concat(key);
          shipEl.dataset.owner = "".concat(player.name);
          ships.append(shipEl);
        }
        ships.classList.add('ships', 'hide');
        return ships;
      };
      return {
        gridContainer: createGrid(),
        shipContainer: createShips()
      };
    };
    var setBaseUnitSize = function setBaseUnitSize() {
      // make ship width the same as square width
      var squareHeight = document.querySelector("[data-id=\"0,0\"]").offsetHeight;
      document.documentElement.style.setProperty('--base-unit-size', "".concat(squareHeight, "px"));
    };
    var data = createPlayerData(obj);
    var elements = createGameElements(data);
    showElement(gameContainer);
    // setBaseUnitSize();
    return {
      data: data,
      elements: elements
    };
  };
  var enableShipPlacement = function enableShipPlacement(player) {
    var data = player.data;
    var elements = player.elements;
    player.elements.shipContainer.classList.remove('hide');
    var enableDraggable = function enableDraggable(shipList) {
      for (var _i3 = 0, _Object$values = Object.values(shipList); _i3 < _Object$values.length; _i3++) {
        var ship = _Object$values[_i3];
        ship.setAttribute('draggable', true);
      }
    };
    var addShipEventListener = function addShipEventListener(shipList) {
      var ships = shipList;
      for (var _i4 = 0, _Object$values2 = Object.values(ships); _i4 < _Object$values2.length; _i4++) {
        var ship = _Object$values2[_i4];
        ship.addEventListener('dragstart', function (e) {
          e.dataTransfer.setData('text/html', "".concat(e.target));
        });
      }
    };
    var addGridEventListener = function addGridEventListener(squareList) {
      var grid = squareList;
      for (var _i5 = 0, _Object$values3 = Object.values(grid); _i5 < _Object$values3.length; _i5++) {
        var square = _Object$values3[_i5];
        square.addEventListener('dragover', function (e) {
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var status = data.gameboard.checkPlacement(squareStr, ship, 'v');
          var _iterator = _createForOfIteratorHelper(status.elements),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _squareStr = _step.value;
              var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr, "\"]"));
              if (status.valid) {
                squareEl.classList.add('place');
              } else {
                squareEl.classList.add('invalid-place');
              }
              // square.classList.add('hover');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        square.addEventListener('dragleave', function (e) {
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var selectedSquares = data.gameboard.checkPlacement(squareStr, ship, 'v').elements;
          var _iterator2 = _createForOfIteratorHelper(selectedSquares),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _squareStr2 = _step2.value;
              var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr2, "\"]"));
              squareEl.classList.remove('place');
              squareEl.classList.remove('invalid-place');
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
        square.addEventListener('drop', function (e) {
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var status = data.gameboard.checkPlacement(squareStr, ship, 'v');
          if (status.valid) {
            var _iterator3 = _createForOfIteratorHelper(status.elements),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _squareStr3 = _step3.value;
                var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr3, "\"]"));
                squareEl.classList.remove('place');
                squareEl.classList.add('placed');
                data.gameboard.placeShip(e.dataTransfer.mozSourceNode.dataset.type, _squareStr3);
                e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
                e.dataTransfer.mozSourceNode.classList.add('used');
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            var _iterator4 = _createForOfIteratorHelper(status.elements),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _squareStr4 = _step4.value;
                var _squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr4, "\"]"));
                _squareEl.classList.remove('invalid-place');
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        });
      }
    };
    enableDraggable(elements.shipContainer.querySelectorAll('.ship'));
    addShipEventListener(elements.shipContainer.querySelectorAll('.ship'));
    addGridEventListener(elements.gridContainer.querySelectorAll('.square'));
  };
  var disableShipPlacement = function disableShipPlacement(player) {
    player.elements.shipContainer.classList.add('hide');
    // hide ships
    // removeeventlistener from all squares
    var squares = player.elements.gridContainer.childNodes;
    var _iterator5 = _createForOfIteratorHelper(squares),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var square = _step5.value;
        var oldSquare = square;
        var newSquare = oldSquare.cloneNode(true);
        oldSquare.parentNode.replaceChild(newSquare, oldSquare);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  };
  var enableAttack = function enableAttack(player, enemy) {
    var enemySquareNodes = enemy.elements.gridContainer.childNodes;
    var _iterator6 = _createForOfIteratorHelper(enemySquareNodes),
      _step6;
    try {
      var _loop = function _loop() {
        var squareNode = _step6.value;
        squareNode.addEventListener('click', function () {
          var attackResult = player.data.attack(enemy.data, squareNode.dataset.id);
          if (attackResult === null) {
            squareNode.classList.add('miss');
          } else if (attackResult) {
            squareNode.classList.add('hit');
            if (enemy.data.checkForLoss()) {
              console.log("".concat(player.data.name, " won the game"));
            }
          }
          disableReceivingAttack(enemy);
        });
      };
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  };
  var disableReceivingAttack = function disableReceivingAttack(player) {
    var squareNodes = player.elements.gridContainer.childNodes;
    var _iterator7 = _createForOfIteratorHelper(squareNodes),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var squareNode = _step7.value;
        var oldSquare = squareNode;
        var newSquare = oldSquare.cloneNode(true);
        oldSquare.parentNode.replaceChild(newSquare, oldSquare);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  };
  var hidePlacedShips = function hidePlacedShips(playerComponents) {
    var shipSquares = playerComponents.elements.gridContainer.querySelectorAll('.placed');
    for (var square in shipSquares) {
      square.classList.remove('placed');
    }
  };
  var showPlacedShips = function showPlacedShips(playerComponents) {
    var squaresData = playerComponents.data.gameboard.squares;
    var squaresElements = playerComponents.elements.gridContainers.childNodes;
    var _iterator8 = _createForOfIteratorHelper(squaresData),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var square = _step8.value;
        if (square.occupies) {
          squaresElements.querySelector("[data-id=\"".concat(square, "\"]"));
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  };
  // const changeTurn = function (curActivePlayer, curInactivePlayer) {};
  var hideElement = function hideElement(container) {
    container.classList.add('hide');
  };
  var showElement = function showElement(container) {
    container.classList.remove('hide');
  };
  /* loop */
  processForm();
  hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
  var customLeftObj = {
    name: 'Gregor',
    computerOption: false,
    gameboardSize: '13'
  };
  var customRightObj = {
    name: 'Computer',
    computerOption: true,
    gameboardSize: '7'
  };
  var left = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.leftPlayer;
  var right = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.rightPlayer;
  var playerComponentsLeft = createGameComponents(customLeftObj);
  var playerComponentsRight = createGameComponents(customRightObj);
  left.gameboard.append(playerComponentsLeft.elements.gridContainer);
  left.ships.append(playerComponentsLeft.elements.shipContainer);
  right.gameboard.append(playerComponentsRight.elements.gridContainer);
  right.ships.append(playerComponentsRight.elements.shipContainer);
  var curActivePlayer = playerComponentsLeft;
  var curInactivePlayer = playerComponentsRight;
  var phases = {
    formProcessing: 1,
    shipPlacement: 2,
    playing: 3,
    win: 4
  };
  var phase = phases.shipPlacement;
  enableShipPlacement(playerComponentsLeft);
  _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.button.addEventListener('click', function (e) {
    if (phase === 2) {
      var shipReqOne = curActivePlayer.data.gameboard.isOneShipPlaced();
      var shipReqTwo = curInactivePlayer.data.gameboard.isOneShipPlaced();
      if (shipReqOne && shipReqTwo) {
        disableShipPlacement(curActivePlayer);
        phase = phases.playing;
      } else if (shipReqOne || shipReqTwo) {
        var temp = curActivePlayer;
        curActivePlayer = curInactivePlayer;
        curInactivePlayer = temp;
        disableShipPlacement(curInactivePlayer);
        enableShipPlacement(curActivePlayer);
      }
    } else if (phase === 3) {
      var _temp = curActivePlayer;
      curActivePlayer = curInactivePlayer;
      curInactivePlayer = _temp;
      enableAttack(curActivePlayer, curInactivePlayer);
    }
  });
  var b = 0;

  // enableShipPlacement(gameComponentsRight);
  // disableShipPlacement(gameComponentsLeft);
  return {
    createGameComponents: createGameComponents,
    processForm: processForm,
    enableShipPlacement: enableShipPlacement,
    hideElement: hideElement,
    showElement: showElement
    // enableAttack,
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameloop);

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/components/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/components/ship.js");




var Player = function Player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Computer';
  var isComputer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var size = arguments.length > 2 ? arguments[2] : undefined;
  var attachGameboard = function attachGameboard(size) {
    var gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    gameboard.createBoard(size);
    return gameboard;
  };
  return {
    name: name,
    isComputer: isComputer,
    previousHit: false,
    gameboard: attachGameboard(size),
    attack: function attack(enemy, move) {
      return enemy.gameboard.receiveAttack(move);
    },
    computerAttack: function computerAttack(enemy) {
      var _this = this;
      var gameboardSize = this.gameboard.size;
      var randomNumber = function randomNumber(gameboardSize) {
        return Math.floor(Math.random() * gameboardSize);
      };
      var randomSquare = function randomSquare() {
        var _this$gameboard$squar;
        var square = "".concat(randomNumber(gameboardSize), ",").concat(randomNumber(gameboardSize));
        _this.gameboard.squares[square];
        if (((_this$gameboard$squar = _this.gameboard.squares[square]) === null || _this$gameboard$squar === void 0 ? void 0 : _this$gameboard$squar.isHit) === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      return enemy.gameboard.receiveAttack(randomSquare());
    },
    checkForLoss: function checkForLoss() {
      return this.gameboard.areShipsSunk();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var Ship = function Ship(size) {
  return {
    size: size,
    // start: undefined,
    orient: 'v',
    hits: 0,
    placed: false,
    hit: function hit() {
      return ++this.hits;
    },
    isSunk: function isSunk() {
      if (this.size === this.hits) return true;else return false;
    }
  };
};
var Ships = function Ships() {
  return {
    destroyer: new Ship(2),
    submarine: new Ship(3),
    cruiser: new Ship(3),
    battleship: new Ship(4),
    carrier: new Ship(5)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ships);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_gameloop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gameloop.js */ "./src/components/gameloop.js");
/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/style.scss */ "./src/stylesheets/style.scss");


// import Gameloop from './components/gameloop.js';
// import { game, form } from '/src/components/dom.js';
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ1ZDU3O1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5NWFkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvZm9udHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7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SUY7O0FBcklBO0VBQ0UseUJBQUE7QUF3SUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVUJVTlRVICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLFwiQHVzZSAnLi9mb250cy5jc3MnO1xcbkB1c2UgJy4vcmVzZXQtc3R5bGVzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJGhpZ2hsaWdodDogI2ZmY2NjYztcXG5cXG4kbWFpbi1jb2xvcjogIzJjM2E0NztcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTFmOWY0O1xcbiRoaWdobGlnaHQtY29sb3I6ICNmZmNjY2M7XFxuJGxhcmdlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiRmb250LXNpemU6IDFyZW07XFxuJHNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcbiRmYWRlLWNvbG9yOiAjZTZlNmU2O1xcbiRncmF5OiAjNGI0YjRiO1xcblxcbi8qIGljb25zICovXFxuJGljb24tc2l6ZTogMS4ycmVtO1xcbiRzbWFsbC1pY29uLXNpemU6IDFyZW07XFxuJHNtYWxsZXItaWNvbi1zaXplOiAwLjhyZW07XFxuXFxuLyogbGF5b3V0ICovXFxuLy8gc2l6ZVxcbiRleHRyYS1zbWFsbC1zaXplOiAwLjhyZW07XFxuJHNtYWxsZXItc2l6ZTogMXJlbTtcXG4kc21hbGwtc2l6ZTogMnJlbTtcXG4kY29tbW9uLXNpemU6IDNyZW07XFxuJGxhcmdlLXNpemU6IDRyZW07XFxuLy8gcmFkaXVzXFxuJGNvbW1vbi1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiRzbWFsbC1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuJHNtYWxsZXItYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4vLyBwYWRkaW5nXFxuJGxhcmdlLXBhZGRpbmc6IDRyZW07XFxuJGNvbW1vbi1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbC1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbGVyLXBhZGRpbmc6IDAuNXJlbTtcXG4kZXh0cmEtc21hbGwtcGFkZGluZzogMC4yNXJlbTtcXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAkc21hbGwtcGFkZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBsb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udC1zaXplO1xcbiAgfVxcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAkc21hbGwtcGFkZGluZztcXG4gIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGZhZGUtY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAkZXh0cmEtc21hbGwtc2l6ZTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gID4gLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbiAgICB9XFxuICB9XFxuICAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIHtcXG4gICAgJGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAkYmFzZS1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtICRib3JkZXItd2lkdGgpO1xcbiAgICAkc2hpcC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXG4gICAgJGJvcmRlci1jb2xvcjogJGdyYXk7XFxuICAgICRib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XFxuICAgIH1cXG4gICAgLnNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRmYWRlLWNvbG9yO1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG59XFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkNWQ1NztcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OTVhZDtcXG59XFxuXCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgb3B0aW9uczoge1xuICAgICAgb3B0aW9uQ29tcHV0ZXI6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25TaXplOiB7XG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9wdGlvbi5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3Rvcignb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGxheWVyczoge1xuICAgICAgcGxheWVyT25lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0Lm9uZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJUd286IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQudHdvJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGxldCBpc09uZVNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwRGF0YSwgc2hpcE9yaWVudCA9ICd2Jykge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgaWYgKHNoaXBEYXRhLnBsYWNlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHM6IG51bGwsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICdiYW5hbmEnO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBWZXJ0aWNhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcEhvcml6b250YWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGlzT25lU2hpcFBsYWNlZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzT25lU2hpcFBsYWNlZDtcbiAgICB9LFxuICAgIGNoZWNrUGxhY2VtZW50LFxuICAgIHNxdWFyZXMsXG4gICAgc2hpcHMsXG4gICAgY3JlYXRlQm9hcmQoc2l6ZSA9IDEwKSB7XG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICB0aGlzLnNxdWFyZXNbYCR7W2osIGldfWBdID0ge1xuICAgICAgICAgICAgaXNIaXQ6IGZhbHNlLFxuICAgICAgICAgICAgb2NjdXBpZXM6IG51bGwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlcztcbiAgICB9LFxuICAgIHBsYWNlU2hpcChzaGlwTmFtZSwgc3F1YXJlU3RyLCBuZXdPcmllbnQgPSAndicpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXTtcbiAgICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgICBjb25zdCBzaGlwT3JpZW50ID0gbmV3T3JpZW50O1xuICAgICAgaWYgKGNoZWNrUGxhY2VtZW50KHNxdWFyZVN0ciwgc2hpcCwgbmV3T3JpZW50KT8udmFsaWQpIHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwVmVydGljYWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0uaXNTdW5rKCkgJiYgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmVTdHIpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUlkU3RyID0gc3F1YXJlU3RyO1xuICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5zcXVhcmVzW3NxdWFyZUlkU3RyXTtcblxuICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIGBPdXQgb2YgYm91bmRzYDtcbiAgICAgIH0gZWxzZSBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgIHJldHVybiBgQWxyZWFkeSBoaXRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZS5vY2N1cGllcy5oaXQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzcXVhcmUub2NjdXBpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmUub2NjdXBpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZm9ybSwgZ2FtZSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcblxuY29uc3QgR2FtZWxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9jZXNzRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybS5vcHRpb25zO1xuICAgIGNvbnN0IHBsYXllcnMgPSBmb3JtLnBsYXllcnM7XG4gICAgY29uc3QgYWRkRm9ybUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUExheWVyVHdvKCk7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVNsaWRlclZhbHVlKG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dCwgb3B0aW9ucy5vcHRpb25TaXplLm91dHB1dCk7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgIGhpZGVFbGVtZW50KHBsYXllcnNbcGxheWVyXS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllcnMucGxheWVyT25lLmlucHV0LnZhbGlkaXR5LnZhbGlkICYmXG4gICAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsaWRpdHkudmFsaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3JlYXRlR2FtZUNvbXBvbmVudHMoZ2V0Rm9ybUlucHV0KHBsYXllcnMsIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3JtLmNvbnRhaW5lci5yZXNldCgpO1xuICAgICAgICAgIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKHBsYXllcnNbcGxheWVyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVBMYXllclR3byA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0KSB7XG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEZvcm1JbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXJzLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBmaXJzdE5hbWUgPSBwbGF5ZXJzLnBsYXllck9uZS5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHNlY29uZE5hbWUgPSBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbXB1dGVyT3B0aW9uID0gb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkO1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC52YWx1ZTtcblxuICAgICAgcmV0dXJuIHsgZmlyc3ROYW1lLCBzZWNvbmROYW1lLCBjb21wdXRlck9wdGlvbiwgZ2FtZWJvYXJkU2l6ZSB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9O1xuICBjb25zdCBjcmVhdGVHYW1lQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXI7XG4gICAgLy8gY29uc3QgcGxheWVyQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci5wbGF5ZXInKTtcbiAgICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5jb21wdXRlck9wdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgdHJ1ZSwgb2JqLmdhbWVib2FyZFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIGZhbHNlLCBvYmouZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXIuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllci5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXIubmFtZX1gXTtcbiAgICAgICAgICBncmlkLmFwcGVuZChzcXVhcmVFbCk7XG4gICAgICAgICAgZ3JpZC5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgICAgZ3JpZC5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnY29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2tleX1gKTtcbiAgICAgICAgICBzaGlwRWwuZGF0YXNldC50eXBlID0gYCR7a2V5fWA7XG4gICAgICAgICAgc2hpcEVsLmRhdGFzZXQub3duZXIgPSBgJHtwbGF5ZXIubmFtZX1gO1xuICAgICAgICAgIHNoaXBzLmFwcGVuZChzaGlwRWwpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJywgJ2hpZGUnKTtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7IGdyaWRDb250YWluZXI6IGNyZWF0ZUdyaWQoKSwgc2hpcENvbnRhaW5lcjogY3JlYXRlU2hpcHMoKSB9O1xuICAgIH07XG4gICAgY29uc3Qgc2V0QmFzZVVuaXRTaXplID0gKCkgPT4ge1xuICAgICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgICAgY29uc3Qgc3F1YXJlSGVpZ2h0ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIwLDBcIl1gKS5vZmZzZXRIZWlnaHQ7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgICAgYCR7c3F1YXJlSGVpZ2h0fXB4YCxcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCBkYXRhID0gY3JlYXRlUGxheWVyRGF0YShvYmopO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gY3JlYXRlR2FtZUVsZW1lbnRzKGRhdGEpO1xuXG4gICAgc2hvd0VsZW1lbnQoZ2FtZUNvbnRhaW5lcik7XG4gICAgLy8gc2V0QmFzZVVuaXRTaXplKCk7XG4gICAgcmV0dXJuIHsgZGF0YSwgZWxlbWVudHMgfTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlU2hpcFBsYWNlbWVudCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBjb25zdCBkYXRhID0gcGxheWVyLmRhdGE7XG4gICAgY29uc3QgZWxlbWVudHMgPSBwbGF5ZXIuZWxlbWVudHM7XG4gICAgcGxheWVyLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBMaXN0KSkge1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwcykpIHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZEdyaWRFdmVudExpc3RlbmVyID0gKHNxdWFyZUxpc3QpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsICd2Jyk7XG4gICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgJ3YnLFxuICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHNlbGVjdGVkU3F1YXJlcykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCAndicpO1xuICAgICAgICAgIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICBhZGRHcmlkRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH07XG4gIGNvbnN0IGRpc2FibGVTaGlwUGxhY2VtZW50ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyBoaWRlIHNoaXBzXG4gICAgLy8gcmVtb3ZlZXZlbnRsaXN0ZW5lciBmcm9tIGFsbCBzcXVhcmVzXG4gICAgY29uc3Qgc3F1YXJlcyA9IHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZW5hYmxlQXR0YWNrID0gZnVuY3Rpb24gKHBsYXllciwgZW5lbXkpIHtcbiAgICBjb25zdCBlbmVteVNxdWFyZU5vZGVzID0gZW5lbXkuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2YgZW5lbXlTcXVhcmVOb2Rlcykge1xuICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyLmRhdGEuYXR0YWNrKFxuICAgICAgICAgIGVuZW15LmRhdGEsXG4gICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0KSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICBpZiAoZW5lbXkuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLmRhdGEubmFtZX0gd29uIHRoZSBnYW1lYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpc2FibGVSZWNlaXZpbmdBdHRhY2soZW5lbXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkaXNhYmxlUmVjZWl2aW5nQXR0YWNrID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmVOb2RlO1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoaWRlUGxhY2VkU2hpcHMgPSBmdW5jdGlvbiAocGxheWVyQ29tcG9uZW50cykge1xuICAgIGNvbnN0IHNoaXBTcXVhcmVzID1cbiAgICAgIHBsYXllckNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VkJyk7XG4gICAgZm9yIChsZXQgc3F1YXJlIGluIHNoaXBTcXVhcmVzKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzaG93UGxhY2VkU2hpcHMgPSBmdW5jdGlvbiAocGxheWVyQ29tcG9uZW50cykge1xuICAgIGNvbnN0IHNxdWFyZXNEYXRhID0gcGxheWVyQ29tcG9uZW50cy5kYXRhLmdhbWVib2FyZC5zcXVhcmVzO1xuICAgIGNvbnN0IHNxdWFyZXNFbGVtZW50cyA9IHBsYXllckNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcnMuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlc0RhdGEpIHtcbiAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgc3F1YXJlc0VsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtzcXVhcmV9XCJdYCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvLyBjb25zdCBjaGFuZ2VUdXJuID0gZnVuY3Rpb24gKGN1ckFjdGl2ZVBsYXllciwgY3VySW5hY3RpdmVQbGF5ZXIpIHt9O1xuICBjb25zdCBoaWRlRWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9O1xuICBjb25zdCBzaG93RWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9O1xuICAvKiBsb29wICovXG4gIHByb2Nlc3NGb3JtKCk7XG4gIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgY29uc3QgY3VzdG9tTGVmdE9iaiA9IHtcbiAgICBuYW1lOiAnR3JlZ29yJyxcbiAgICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gICAgZ2FtZWJvYXJkU2l6ZTogJzEzJyxcbiAgfTtcbiAgY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gICAgbmFtZTogJ0NvbXB1dGVyJyxcbiAgICBjb21wdXRlck9wdGlvbjogdHJ1ZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnNycsXG4gIH07XG4gIGNvbnN0IGxlZnQgPSBnYW1lLmxlZnRQbGF5ZXI7XG4gIGNvbnN0IHJpZ2h0ID0gZ2FtZS5yaWdodFBsYXllcjtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c0xlZnQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21MZWZ0T2JqKTtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c1JpZ2h0ID0gY3JlYXRlR2FtZUNvbXBvbmVudHMoY3VzdG9tUmlnaHRPYmopO1xuICBsZWZ0LmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gIGxlZnQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNMZWZ0LmVsZW1lbnRzLnNoaXBDb250YWluZXIpO1xuICByaWdodC5nYW1lYm9hcmQuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgcmlnaHQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcblxuICBsZXQgY3VyQWN0aXZlUGxheWVyID0gcGxheWVyQ29tcG9uZW50c0xlZnQ7XG4gIGxldCBjdXJJbmFjdGl2ZVBsYXllciA9IHBsYXllckNvbXBvbmVudHNSaWdodDtcbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAxLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDIsXG4gICAgcGxheWluZzogMyxcbiAgICB3aW46IDQsXG4gIH07XG4gIGxldCBwaGFzZSA9IHBoYXNlcy5zaGlwUGxhY2VtZW50O1xuICBlbmFibGVTaGlwUGxhY2VtZW50KHBsYXllckNvbXBvbmVudHNMZWZ0KTtcbiAgZ2FtZS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChwaGFzZSA9PT0gMikge1xuICAgICAgY29uc3Qgc2hpcFJlcU9uZSA9IGN1ckFjdGl2ZVBsYXllci5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICAgIGNvbnN0IHNoaXBSZXFUd28gPSBjdXJJbmFjdGl2ZVBsYXllci5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICAgIGlmIChzaGlwUmVxT25lICYmIHNoaXBSZXFUd28pIHtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoY3VyQWN0aXZlUGxheWVyKTtcbiAgICAgICAgcGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgIH0gZWxzZSBpZiAoc2hpcFJlcU9uZSB8fCBzaGlwUmVxVHdvKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBjdXJBY3RpdmVQbGF5ZXI7XG4gICAgICAgIGN1ckFjdGl2ZVBsYXllciA9IGN1ckluYWN0aXZlUGxheWVyO1xuICAgICAgICBjdXJJbmFjdGl2ZVBsYXllciA9IHRlbXA7XG4gICAgICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KGN1ckluYWN0aXZlUGxheWVyKTtcbiAgICAgICAgZW5hYmxlU2hpcFBsYWNlbWVudChjdXJBY3RpdmVQbGF5ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGhhc2UgPT09IDMpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBjdXJBY3RpdmVQbGF5ZXI7XG4gICAgICBjdXJBY3RpdmVQbGF5ZXIgPSBjdXJJbmFjdGl2ZVBsYXllcjtcbiAgICAgIGN1ckluYWN0aXZlUGxheWVyID0gdGVtcDtcbiAgICAgIGVuYWJsZUF0dGFjayhjdXJBY3RpdmVQbGF5ZXIsIGN1ckluYWN0aXZlUGxheWVyKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgYiA9IDA7XG5cbiAgLy8gZW5hYmxlU2hpcFBsYWNlbWVudChnYW1lQ29tcG9uZW50c1JpZ2h0KTtcbiAgLy8gZGlzYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZUNvbXBvbmVudHNMZWZ0KTtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVHYW1lQ29tcG9uZW50cyxcbiAgICBwcm9jZXNzRm9ybSxcbiAgICBlbmFibGVTaGlwUGxhY2VtZW50LFxuICAgIGhpZGVFbGVtZW50LFxuICAgIHNob3dFbGVtZW50LFxuICAgIC8vIGVuYWJsZUF0dGFjayxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVsb29wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSA9ICdDb21wdXRlcicsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gICAgY2hlY2tGb3JMb3NzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgLy8gc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvcmllbnQ6ICd2JyxcbiAgICBoaXRzOiAwLFxuICAgIHBsYWNlZDogZmFsc2UsXG4gICAgaGl0KCkge1xuICAgICAgcmV0dXJuICsrdGhpcy5oaXRzO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59O1xuY29uc3QgU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgZGVzdHJveWVyOiBuZXcgU2hpcCgyKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMpLFxuICAgIGNydWlzZXI6IG5ldyBTaGlwKDMpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIGNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXBzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBHYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuLy8gaW1wb3J0IHsgZ2FtZSwgZm9ybSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImZvcm0iLCJnYW1lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3B0aW9uQ29tcHV0ZXIiLCJpbnB1dCIsIm9wdGlvblNpemUiLCJvdXRwdXQiLCJwbGF5ZXJzIiwicGxheWVyT25lIiwiZXJyb3IiLCJwbGF5ZXJUd28iLCJsZWZ0UGxheWVyIiwiZ2FtZWJvYXJkIiwic2hpcHMiLCJyaWdodFBsYXllciIsIlNoaXBzIiwiR2FtZWJvYXJkIiwic3F1YXJlcyIsImlzT25lU2hpcFBsYWNlZCIsImNoZWNrUGxhY2VtZW50Iiwic3F1YXJlU3RyIiwic2hpcERhdGEiLCJzaGlwT3JpZW50Iiwic3F1YXJlSWQiLCJzcGxpdCIsImVsIiwiTnVtYmVyIiwicGxhY2VkIiwiZWxlbWVudHMiLCJ2YWxpZCIsInNpemUiLCJuZWlnaGJvdXJTdHIiLCJvY2N1cGllcyIsInBsYWNlU2hpcFZlcnRpY2FsbHkiLCJzaGlwIiwic2VsZWN0ZWRTcXVhcmVzIiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJwbGFjZVNoaXAiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImFyZVNoaXBzU3VuayIsIk9iamVjdCIsImtleXMiLCJpc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwic3F1YXJlSWRTdHIiLCJzcXVhcmUiLCJoaXQiLCJjb25zb2xlIiwibG9nIiwiUGxheWVyIiwiR2FtZWxvb3AiLCJwcm9jZXNzRm9ybSIsImFkZEZvcm1FdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVQTGF5ZXJUd28iLCJkaXNwbGF5U2xpZGVyVmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwbGF5ZXIiLCJoaWRlRWxlbWVudCIsInZhbGlkaXR5IiwiY3JlYXRlR2FtZUNvbXBvbmVudHMiLCJnZXRGb3JtSW5wdXQiLCJyZXNldCIsImRpc3BsYXlFcnJvciIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJjaGVja2VkIiwiYWRkIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJjb21wdXRlck9wdGlvbiIsImdhbWVib2FyZFNpemUiLCJ2YWx1ZU1pc3NpbmciLCJvYmoiLCJnYW1lQ29udGFpbmVyIiwiY3JlYXRlUGxheWVyRGF0YSIsIm5hbWUiLCJjcmVhdGVHYW1lRWxlbWVudHMiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwia2V5Iiwic3F1YXJlRWwiLCJkYXRhc2V0Iiwib3duZXIiLCJhcHBlbmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZVNoaXBzIiwic2hpcEVsIiwidHlwZSIsImdyaWRDb250YWluZXIiLCJzaGlwQ29udGFpbmVyIiwic2V0QmFzZVVuaXRTaXplIiwic3F1YXJlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJzaG93RWxlbWVudCIsImVuYWJsZVNoaXBQbGFjZW1lbnQiLCJlbmFibGVEcmFnZ2FibGUiLCJzaGlwTGlzdCIsInZhbHVlcyIsInNldEF0dHJpYnV0ZSIsImFkZFNoaXBFdmVudExpc3RlbmVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsImFkZEdyaWRFdmVudExpc3RlbmVyIiwic3F1YXJlTGlzdCIsIm1velNvdXJjZU5vZGUiLCJzdGF0dXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZVNoaXBQbGFjZW1lbnQiLCJjaGlsZE5vZGVzIiwib2xkU3F1YXJlIiwibmV3U3F1YXJlIiwiY2xvbmVOb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImVuYWJsZUF0dGFjayIsImVuZW15IiwiZW5lbXlTcXVhcmVOb2RlcyIsInNxdWFyZU5vZGUiLCJhdHRhY2tSZXN1bHQiLCJhdHRhY2siLCJjaGVja0Zvckxvc3MiLCJkaXNhYmxlUmVjZWl2aW5nQXR0YWNrIiwic3F1YXJlTm9kZXMiLCJoaWRlUGxhY2VkU2hpcHMiLCJwbGF5ZXJDb21wb25lbnRzIiwic2hpcFNxdWFyZXMiLCJzaG93UGxhY2VkU2hpcHMiLCJzcXVhcmVzRGF0YSIsInNxdWFyZXNFbGVtZW50cyIsImdyaWRDb250YWluZXJzIiwiY3VzdG9tTGVmdE9iaiIsImN1c3RvbVJpZ2h0T2JqIiwibGVmdCIsInJpZ2h0IiwicGxheWVyQ29tcG9uZW50c0xlZnQiLCJwbGF5ZXJDb21wb25lbnRzUmlnaHQiLCJjdXJBY3RpdmVQbGF5ZXIiLCJjdXJJbmFjdGl2ZVBsYXllciIsInBoYXNlcyIsImZvcm1Qcm9jZXNzaW5nIiwic2hpcFBsYWNlbWVudCIsInBsYXlpbmciLCJ3aW4iLCJwaGFzZSIsInNoaXBSZXFPbmUiLCJzaGlwUmVxVHdvIiwidGVtcCIsImIiLCJpc0NvbXB1dGVyIiwiYXR0YWNoR2FtZWJvYXJkIiwicHJldmlvdXNIaXQiLCJtb3ZlIiwiY29tcHV0ZXJBdHRhY2siLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TcXVhcmUiLCJTaGlwIiwib3JpZW50IiwiaGl0cyIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciJdLCJzb3VyY2VSb290IjoiIn0=