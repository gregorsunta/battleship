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
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "message": () => (/* binding */ message)
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
var message = function () {
  var container = document.querySelector('.message.container');
  return {
    container: container
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
              if (squareEl === null) {} else if (status.valid) {
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
              if (squareEl === null) {} else {
                squareEl.classList.remove('place');
                squareEl.classList.remove('invalid-place');
              }
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
                if (_squareEl === null) {} else {
                  _squareEl.classList.remove('invalid-place');
                }
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
  var enableAttackOn = function enableAttackOn(playerArg) {
    var phaseArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gameProperties;
    var squareNodes = playerArg.elements.gridContainer.childNodes;
    var processAttack = function processAttack(attackResultArg, squareNode) {
      if (attackResultArg === null) {
        squareNode.classList.add('miss');
      } else if (attackResultArg) {
        squareNode.classList.add('hit');
        if (playerArg.data.checkForLoss()) {
          showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.message.container);
          disableAttackOn(playerArg);
          gameProperties.phase = phases.win;
        }
      }
    };
    var _iterator6 = _createForOfIteratorHelper(squareNodes),
      _step6;
    try {
      var _loop = function _loop() {
        var squareNode = _step6.value;
        squareNode.addEventListener('click', function () {
          var attackContent = playerArg.data.gameboard.receiveAttack(squareNode.dataset.id);
          processAttack(attackContent, squareNode);
          disableAttackOn(playerArg);
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
  var changeOrientation = function changeOrientation() {};
  var disableAttackOn = function disableAttackOn(player) {
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
  var processPhase = function processPhase(gamePropertiesArg) {
    if (gamePropertiesArg.phase === 2) {
      var shipReqOne = curActivePlayer.data.gameboard.isOneShipPlaced();
      var shipReqTwo = curInactivePlayer.data.gameboard.isOneShipPlaced();
      if (shipReqOne && shipReqTwo) {
        disableShipPlacement(curActivePlayer);
        gamePropertiesArg.phase = phases.playing;
        processPhase(gamePropertiesArg);
      } else if (shipReqOne || shipReqTwo) {
        var temp = curActivePlayer;
        curActivePlayer = curInactivePlayer;
        curInactivePlayer = temp;
        disableShipPlacement(curInactivePlayer);
        enableShipPlacement(curActivePlayer);
      }
    } else if (gamePropertiesArg.phase === 3) {
      var _temp = curActivePlayer;
      curActivePlayer = curInactivePlayer;
      curInactivePlayer = _temp;
      enableAttackOn(curActivePlayer, curInactivePlayer);
      if (enableAttackOn.status) {}
    } else if (gamePropertiesArg.phase === 4) {
      changeMessage().win(curActivePlayer);
      gamePropertiesArg.phase = 1;
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
  var changeMessage = function changeMessage() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.message.container;
    var messageContainer = container;
    return {
      win: function win(player) {
        messageContainer.textContent = "The winner is ".concat(player.data.name);
      },
      turn: function turn(player) {
        messageContainer.textContent = "It is ".concat(player.data.name, "'s turn");
      }
    };
  };
  var hideElement = function hideElement(container) {
    container.classList.add('hide');
  };
  var showElement = function showElement(container) {
    container.classList.remove('hide');
  };
  /* loop */
  var phases = {
    formProcessing: 1,
    shipPlacement: 2,
    playing: 3,
    win: 4
  };
  var gameProperties = {
    phase: phases.shipPlacement
  };
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
  enableShipPlacement(playerComponentsLeft);
  _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.button.addEventListener('click', function (e) {
    processPhase(gameProperties);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUNsQztBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzPzA5MjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVsb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVUJVTlRVICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4vKiBpY29ucyAqL1xcbi8qIGxheW91dCAqL1xcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcbmhlYWRlciBsb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZTZlNmU2O1xcbn1cXG5mb3JtIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgPiAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLnNoaXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NjYztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YjRiNGI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuY3J1aXNlciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA0KTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDUpO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcblxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcblxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDVkNTc7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzk1YWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9mb250cy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQtc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBRUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FDM0JBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRDRCRjs7QUMxQkEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FENkJGOztBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7O0FDNUJBOztFQUVFLGdCQUFBO0FEK0JGOztBQzdCQTs7RUFFRSxZQUFBO0FEZ0NGOztBQzlCQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FEaUNGOztBQy9CQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7O0FDL0JBLGtCQUFBO0FEL0hBO0VBQ0Usc0JBQUE7QUFrS0Y7O0FBL0pBLFdBQUE7QUFZQSxVQUFBO0FBS0EsV0FBQTtBQWtCQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBckNXO0FBc0tiOztBQS9IQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBa0lGOztBQWhJQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFwQmM7RUFxQmQseUJBaERnQjtBQW1MbEI7QUFsSUU7RUFDRSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFwRGM7QUF1TGxCOztBQS9IQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBa0lGOztBQWhJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBekNjO0VBMENkLGFBNUNjO0VBNkNkLHFCQWhEb0I7RUFpRHBCLGdDQUFBO0FBbUlGO0FBaklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQTlEZTtBQWlNbkI7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQWxFWTtBQXFNZDtBQWxJRTtFQUNFLGFBQUE7QUFvSUo7QUFsSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFvSUo7QUFuSUk7RUFDRSxhQUFBO0FBcUlOO0FBbklJO0VBQ0UsdUNBQUE7QUFxSU47QUFsSUU7RUFNRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBK0hKO0FBOUhJO0VBQ0UseUJBekdDO0FBeU9QO0FBOUhJO0VBQ0UseUJBakhZO0VBa0haLHlCQUFBO0VBQ0Esa0JBYmM7RUFjZCxpQkFBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBCVTtFQXFCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXhCVTtFQXlCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQTVCVTtFQTZCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQWhDVTtFQWlDViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBDVTtFQXFDViw4Q0FBQTtBQWdJTjs7QUE1SEEsV0FBQTtBQUNBO0VBQ0UsOENBQUE7RUFDQSxlQXBIZ0I7RUFxSGhCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQW5KZ0I7QUFrUmxCOztBQTVIQSxvQkFBQTtBQUVBO0VBQ0UscUJBbklvQjtFQW9JcEIseUJBQUE7RUFDQSxlQS9IZ0I7QUE2UGxCOztBQTVIQTtFQUNFLFlBQUE7QUErSEY7O0FBN0hBO0VBQ0Usd0JBQUE7QUFnSUY7O0FBOUhBO0VBQ0UseUJBQUE7QUFpSUY7O0FBL0hBO0VBQ0UseUJBQUE7QUFrSUY7O0FBaElBO0VBQ0UseUJBQUE7QUFtSUY7O0FBaklBO0VBQ0UsWUFBQTtBQW9JRjs7QUFsSUE7RUFDRSx5QkFBQTtBQXFJRjs7QUFuSUE7RUFDRSx5QkFBQTtBQXNJRjs7QUFwSUE7RUFDRSx5QkFBQTtBQXVJRjs7QUFySUE7RUFDRSx5QkFBQTtBQXdJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQlVOVFUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsXCJAdXNlICcuL2ZvbnRzLmNzcyc7XFxuQHVzZSAnLi9yZXNldC1zdHlsZXMuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4kaGlnaGxpZ2h0OiAjZmZjY2NjO1xcblxcbiRtYWluLWNvbG9yOiAjMmMzYTQ3O1xcbiRzZWNvbmRhcnktY29sb3I6ICNlMWY5ZjQ7XFxuJGhpZ2hsaWdodC1jb2xvcjogI2ZmY2NjYztcXG4kbGFyZ2UtZm9udC1zaXplOiAxLjRyZW07XFxuJGZvbnQtc2l6ZTogMXJlbTtcXG4kc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxuJGZhZGUtY29sb3I6ICNlNmU2ZTY7XFxuJGdyYXk6ICM0YjRiNGI7XFxuXFxuLyogaWNvbnMgKi9cXG4kaWNvbi1zaXplOiAxLjJyZW07XFxuJHNtYWxsLWljb24tc2l6ZTogMXJlbTtcXG4kc21hbGxlci1pY29uLXNpemU6IDAuOHJlbTtcXG5cXG4vKiBsYXlvdXQgKi9cXG4vLyBzaXplXFxuJGV4dHJhLXNtYWxsLXNpemU6IDAuOHJlbTtcXG4kc21hbGxlci1zaXplOiAxcmVtO1xcbiRzbWFsbC1zaXplOiAycmVtO1xcbiRjb21tb24tc2l6ZTogM3JlbTtcXG4kbGFyZ2Utc2l6ZTogNHJlbTtcXG4vLyByYWRpdXNcXG4kY29tbW9uLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuJHNtYWxsLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4kc21hbGxlci1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbi8vIHBhZGRpbmdcXG4kbGFyZ2UtcGFkZGluZzogNHJlbTtcXG4kY29tbW9uLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsZXItcGFkZGluZzogMC41cmVtO1xcbiRleHRyYS1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6ICRzbWFsbC1wYWRkaW5nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICBmb250LXNpemU6ICRsYXJnZS1mb250LXNpemU7XFxuICB9XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6ICRzbWFsbC1wYWRkaW5nO1xcbiAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkZmFkZS1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gIHNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6ICRleHRyYS1zbWFsbC1zaXplO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgPiAucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxuICAgIH1cXG4gIH1cXG4gIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMge1xcbiAgICAkYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICRiYXNlLXNpemU6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gJGJvcmRlci13aWR0aCk7XFxuICAgICRzaGlwLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xcbiAgICAkYm9yZGVyLWNvbG9yOiAkZ3JheTtcXG4gICAgJGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1jb2xvcjtcXG4gICAgfVxcbiAgICAuc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXAtY29sb3I7XFxuICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG4gICAgLmRlc3Ryb3llciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAyKTtcXG4gICAgfVxcbiAgICAuc3VibWFyaW5lIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5jcnVpc2VyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5iYXR0bGVzaGlwIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDQpO1xcbiAgICB9XFxuICAgIC5jYXJyaWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDUpO1xcbiAgICB9XFxuICB9XFxufVxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGZhZGUtY29sb3I7XFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbn1cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ1ZDU3O1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5NWFkO1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UgfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvcHRpb25Db21wdXRlcjoge1xuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24uY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIG9wdGlvblNpemU6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbGF5ZXJzOiB7XG4gICAgICBwbGF5ZXJPbmU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQub25lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIHBsYXllclR3bzoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC50d28nKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gLmVycm9yJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICAgIGJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb250aW51ZScpLFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IG1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gIH07XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3F1YXJlLm9jY3VwaWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UgfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5cbmNvbnN0IEdhbWVsb29wID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvY2Vzc0Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZvcm0ub3B0aW9ucztcbiAgICBjb25zdCBwbGF5ZXJzID0gZm9ybS5wbGF5ZXJzO1xuICAgIGNvbnN0IGFkZEZvcm1FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVBMYXllclR3bygpO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLm9wdGlvblNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlTbGlkZXJWYWx1ZShvcHRpb25zLm9wdGlvblNpemUuaW5wdXQsIG9wdGlvbnMub3B0aW9uU2l6ZS5vdXRwdXQpO1xuICAgICAgfSk7XG4gICAgICBmb3JtLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudChwbGF5ZXJzW3BsYXllcl0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJzLnBsYXllck9uZS5pbnB1dC52YWxpZGl0eS52YWxpZCAmJlxuICAgICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LnZhbGlkaXR5LnZhbGlkXG4gICAgICAgICkge1xuICAgICAgICAgIGNyZWF0ZUdhbWVDb21wb25lbnRzKGdldEZvcm1JbnB1dChwbGF5ZXJzLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm9ybS5jb250YWluZXIucmVzZXQoKTtcbiAgICAgICAgICBoaWRlRWxlbWVudChmb3JtLmNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihwbGF5ZXJzW3BsYXllcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb250YWluZXIsIG1zZykge1xuICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVQTGF5ZXJUd28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5U2xpZGVyVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRGb3JtSW5wdXQgPSBmdW5jdGlvbiAocGxheWVycywgb3B0aW9ucykge1xuICAgICAgY29uc3QgZmlyc3ROYW1lID0gcGxheWVycy5wbGF5ZXJPbmUuaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBzZWNvbmROYW1lID0gcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBjb21wdXRlck9wdGlvbiA9IG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuY2hlY2tlZDtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSBvcHRpb25zLm9wdGlvblNpemUuaW5wdXQudmFsdWU7XG5cbiAgICAgIHJldHVybiB7IGZpcnN0TmFtZSwgc2Vjb25kTmFtZSwgY29tcHV0ZXJPcHRpb24sIGdhbWVib2FyZFNpemUgfTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlFcnJvciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIHNob3dFcnJvcihwbGF5ZXIuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBhZGRGb3JtRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlR2FtZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGdhbWUuY29udGFpbmVyO1xuICAgIC8vIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGdhbWUuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIucGxheWVyJyk7XG4gICAgY29uc3QgY3JlYXRlUGxheWVyRGF0YSA9IChvYmopID0+IHtcbiAgICAgIGlmIChvYmouY29tcHV0ZXJPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIHRydWUsIG9iai5nYW1lYm9hcmRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCBmYWxzZSwgb2JqLmdhbWVib2FyZFNpemUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cGxheWVyLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtwbGF5ZXIuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllci5nYW1lYm9hcmQuc3F1YXJlcykpIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICAgIHNxdWFyZUVsLmRhdGFzZXQuaWQgPSBbYCR7a2V5fWBdO1xuICAgICAgICAgIHNxdWFyZUVsLmRhdGFzZXQub3duZXIgPSBbYCR7cGxheWVyLm5hbWV9YF07XG4gICAgICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICAgIH07XG4gICAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllci5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCBgJHtrZXl9YCk7XG4gICAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyLm5hbWV9YDtcbiAgICAgICAgICBzaGlwcy5hcHBlbmQoc2hpcEVsKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdzaGlwcycsICdoaWRlJyk7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgIH07XG4gICAgICByZXR1cm4geyBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCkgfTtcbiAgICB9O1xuICAgIGNvbnN0IHNldEJhc2VVbml0U2l6ZSA9ICgpID0+IHtcbiAgICAgIC8vIG1ha2Ugc2hpcCB3aWR0aCB0aGUgc2FtZSBhcyBzcXVhcmUgd2lkdGhcbiAgICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1iYXNlLXVuaXQtc2l6ZScsXG4gICAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgICApO1xuICAgIH07XG4gICAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IGNyZWF0ZUdhbWVFbGVtZW50cyhkYXRhKTtcblxuICAgIHNob3dFbGVtZW50KGdhbWVDb250YWluZXIpO1xuICAgIC8vIHNldEJhc2VVbml0U2l6ZSgpO1xuICAgIHJldHVybiB7IGRhdGEsIGVsZW1lbnRzIH07XG4gIH07XG4gIGNvbnN0IGVuYWJsZVNoaXBQbGFjZW1lbnQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgY29uc3QgZGF0YSA9IHBsYXllci5kYXRhO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGxheWVyLmVsZW1lbnRzO1xuICAgIHBsYXllci5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBjb25zdCBlbmFibGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAoc2hpcExpc3QpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwTGlzdCkpIHtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkU2hpcEV2ZW50TGlzdGVuZXIgPSAoc2hpcExpc3QpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBzID0gc2hpcExpc3Q7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcHMpKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCBgJHtlLnRhcmdldH1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRHcmlkRXZlbnRMaXN0ZW5lciA9IChzcXVhcmVMaXN0KSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gc3F1YXJlTGlzdDtcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBPYmplY3QudmFsdWVzKGdyaWQpKSB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCAndicpO1xuICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICd2JyxcbiAgICAgICAgICApLmVsZW1lbnRzO1xuICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsICd2Jyk7XG4gICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlLFxuICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGVuYWJsZURyYWdnYWJsZShlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgIGFkZFNoaXBFdmVudExpc3RlbmVyKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgYWRkR3JpZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlU2hpcFBsYWNlbWVudCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBwbGF5ZXIuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gaGlkZSBzaGlwc1xuICAgIC8vIHJlbW92ZWV2ZW50bGlzdGVuZXIgZnJvbSBhbGwgc3F1YXJlc1xuICAgIGNvbnN0IHNxdWFyZXMgPSBwbGF5ZXIuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGVuYWJsZUF0dGFja09uID0gZnVuY3Rpb24gKHBsYXllckFyZywgcGhhc2VBcmcgPSBnYW1lUHJvcGVydGllcykge1xuICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gcGxheWVyQXJnLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkge1xuICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJBcmcuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICAgIHNob3dFbGVtZW50KG1lc3NhZ2UuY29udGFpbmVyKTtcbiAgICAgICAgICBkaXNhYmxlQXR0YWNrT24ocGxheWVyQXJnKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgIHNxdWFyZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGFja0NvbnRlbnQgPSBwbGF5ZXJBcmcuZGF0YS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICBzcXVhcmVOb2RlLmRhdGFzZXQuaWQsXG4gICAgICAgICk7XG4gICAgICAgIHByb2Nlc3NBdHRhY2soYXR0YWNrQ29udGVudCwgc3F1YXJlTm9kZSk7XG4gICAgICAgIGRpc2FibGVBdHRhY2tPbihwbGF5ZXJBcmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xuICBjb25zdCBkaXNhYmxlQXR0YWNrT24gPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgY29uc3Qgc3F1YXJlTm9kZXMgPSBwbGF5ZXIuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZU5vZGU7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NQaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGlmIChnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9PT0gMikge1xuICAgICAgY29uc3Qgc2hpcFJlcU9uZSA9IGN1ckFjdGl2ZVBsYXllci5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICAgIGNvbnN0IHNoaXBSZXFUd28gPSBjdXJJbmFjdGl2ZVBsYXllci5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICAgIGlmIChzaGlwUmVxT25lICYmIHNoaXBSZXFUd28pIHtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoY3VyQWN0aXZlUGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXNBcmcucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzQXJnKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcFJlcU9uZSB8fCBzaGlwUmVxVHdvKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBjdXJBY3RpdmVQbGF5ZXI7XG4gICAgICAgIGN1ckFjdGl2ZVBsYXllciA9IGN1ckluYWN0aXZlUGxheWVyO1xuICAgICAgICBjdXJJbmFjdGl2ZVBsYXllciA9IHRlbXA7XG4gICAgICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KGN1ckluYWN0aXZlUGxheWVyKTtcbiAgICAgICAgZW5hYmxlU2hpcFBsYWNlbWVudChjdXJBY3RpdmVQbGF5ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXNBcmcucGhhc2UgPT09IDMpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBjdXJBY3RpdmVQbGF5ZXI7XG4gICAgICBjdXJBY3RpdmVQbGF5ZXIgPSBjdXJJbmFjdGl2ZVBsYXllcjtcbiAgICAgIGN1ckluYWN0aXZlUGxheWVyID0gdGVtcDtcbiAgICAgIGVuYWJsZUF0dGFja09uKGN1ckFjdGl2ZVBsYXllciwgY3VySW5hY3RpdmVQbGF5ZXIpO1xuICAgICAgaWYgKGVuYWJsZUF0dGFja09uLnN0YXR1cykge1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXNBcmcucGhhc2UgPT09IDQpIHtcbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS53aW4oY3VyQWN0aXZlUGxheWVyKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gMTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhpZGVQbGFjZWRTaGlwcyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgcGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWQnKTtcbiAgICBmb3IgKGxldCBzcXVhcmUgaW4gc2hpcFNxdWFyZXMpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNob3dQbGFjZWRTaGlwcyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgY29uc3Qgc3F1YXJlc0RhdGEgPSBwbGF5ZXJDb21wb25lbnRzLmRhdGEuZ2FtZWJvYXJkLnNxdWFyZXM7XG4gICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gcGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVycy5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzRGF0YSkge1xuICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICBzcXVhcmVzRWxlbWVudHMucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3NxdWFyZX1cIl1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGNoYW5nZU1lc3NhZ2UgPSBmdW5jdGlvbiAoY29udGFpbmVyID0gbWVzc2FnZS5jb250YWluZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHJldHVybiB7XG4gICAgICB3aW46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUaGUgd2lubmVyIGlzICR7cGxheWVyLmRhdGEubmFtZX1gO1xuICAgICAgfSxcbiAgICAgIHR1cm46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBJdCBpcyAke3BsYXllci5kYXRhLm5hbWV9J3MgdHVybmA7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG4gIC8qIGxvb3AgKi9cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAxLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDIsXG4gICAgcGxheWluZzogMyxcbiAgICB3aW46IDQsXG4gIH07XG4gIGxldCBnYW1lUHJvcGVydGllcyA9IHtcbiAgICBwaGFzZTogcGhhc2VzLnNoaXBQbGFjZW1lbnQsXG4gIH07XG5cbiAgcHJvY2Vzc0Zvcm0oKTtcbiAgaGlkZUVsZW1lbnQoZm9ybS5jb250YWluZXIpO1xuICBjb25zdCBjdXN0b21MZWZ0T2JqID0ge1xuICAgIG5hbWU6ICdHcmVnb3InLFxuICAgIGNvbXB1dGVyT3B0aW9uOiBmYWxzZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnMTMnLFxuICB9O1xuICBjb25zdCBjdXN0b21SaWdodE9iaiA9IHtcbiAgICBuYW1lOiAnQ29tcHV0ZXInLFxuICAgIGNvbXB1dGVyT3B0aW9uOiB0cnVlLFxuICAgIGdhbWVib2FyZFNpemU6ICc3JyxcbiAgfTtcbiAgY29uc3QgbGVmdCA9IGdhbWUubGVmdFBsYXllcjtcbiAgY29uc3QgcmlnaHQgPSBnYW1lLnJpZ2h0UGxheWVyO1xuICBjb25zdCBwbGF5ZXJDb21wb25lbnRzTGVmdCA9IGNyZWF0ZUdhbWVDb21wb25lbnRzKGN1c3RvbUxlZnRPYmopO1xuICBjb25zdCBwbGF5ZXJDb21wb25lbnRzUmlnaHQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21SaWdodE9iaik7XG4gIGxlZnQuZ2FtZWJvYXJkLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzTGVmdC5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgbGVmdC5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuc2hpcENvbnRhaW5lcik7XG4gIHJpZ2h0LmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50c1JpZ2h0LmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICByaWdodC5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50c1JpZ2h0LmVsZW1lbnRzLnNoaXBDb250YWluZXIpO1xuXG4gIGxldCBjdXJBY3RpdmVQbGF5ZXIgPSBwbGF5ZXJDb21wb25lbnRzTGVmdDtcbiAgbGV0IGN1ckluYWN0aXZlUGxheWVyID0gcGxheWVyQ29tcG9uZW50c1JpZ2h0O1xuXG4gIGVuYWJsZVNoaXBQbGFjZW1lbnQocGxheWVyQ29tcG9uZW50c0xlZnQpO1xuICBnYW1lLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUNvbXBvbmVudHMsXG4gICAgcHJvY2Vzc0Zvcm0sXG4gICAgZW5hYmxlU2hpcFBsYWNlbWVudCxcbiAgICBoaWRlRWxlbWVudCxcbiAgICBzaG93RWxlbWVudCxcbiAgICAvLyBlbmFibGVBdHRhY2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lbG9vcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUgPSAnQ29tcHV0ZXInLCBpc0NvbXB1dGVyID0gZmFsc2UsIHNpemUpIHtcbiAgY29uc3QgYXR0YWNoR2FtZWJvYXJkID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkLmNyZWF0ZUJvYXJkKHNpemUpO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpc0NvbXB1dGVyOiBpc0NvbXB1dGVyLFxuICAgIHByZXZpb3VzSGl0OiBmYWxzZSxcbiAgICBnYW1lYm9hcmQ6IGF0dGFjaEdhbWVib2FyZChzaXplKSxcbiAgICBhdHRhY2soZW5lbXksIG1vdmUpIHtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5nYW1lYm9hcmQuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV0/LmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbVNxdWFyZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNxdWFyZSgpKTtcbiAgICB9LFxuICAgIGNoZWNrRm9yTG9zcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5hcmVTaGlwc1N1bmsoKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiksXG4gICAgc3VibWFyaW5lOiBuZXcgU2hpcCgzKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzKSxcbiAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbi8vIGltcG9ydCB7IGdhbWUsIGZvcm0gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJmb3JtIiwiZ2FtZSIsIm1lc3NhZ2UiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJvcHRpb25Db21wdXRlciIsImlucHV0Iiwib3B0aW9uU2l6ZSIsIm91dHB1dCIsInBsYXllcnMiLCJwbGF5ZXJPbmUiLCJlcnJvciIsInBsYXllclR3byIsImxlZnRQbGF5ZXIiLCJnYW1lYm9hcmQiLCJzaGlwcyIsInJpZ2h0UGxheWVyIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzcXVhcmVzIiwiaXNPbmVTaGlwUGxhY2VkIiwiY2hlY2tQbGFjZW1lbnQiLCJzcXVhcmVTdHIiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJlbGVtZW50cyIsInZhbGlkIiwic2l6ZSIsIm5laWdoYm91clN0ciIsIm9jY3VwaWVzIiwicGxhY2VTaGlwVmVydGljYWxseSIsInNoaXAiLCJzZWxlY3RlZFNxdWFyZXMiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInBsYWNlU2hpcCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiT2JqZWN0Iiwia2V5cyIsImlzU3VuayIsInJlY2VpdmVBdHRhY2siLCJzcXVhcmVJZFN0ciIsInNxdWFyZSIsImhpdCIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIiLCJHYW1lbG9vcCIsInByb2Nlc3NGb3JtIiwiYWRkRm9ybUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVBMYXllclR3byIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXllciIsImhpZGVFbGVtZW50IiwidmFsaWRpdHkiLCJjcmVhdGVHYW1lQ29tcG9uZW50cyIsImdldEZvcm1JbnB1dCIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImNoZWNrZWQiLCJhZGQiLCJkaXNhYmxlZCIsInZhbHVlIiwiZmlyc3ROYW1lIiwic2Vjb25kTmFtZSIsImNvbXB1dGVyT3B0aW9uIiwiZ2FtZWJvYXJkU2l6ZSIsInZhbHVlTWlzc2luZyIsIm9iaiIsImdhbWVDb250YWluZXIiLCJjcmVhdGVQbGF5ZXJEYXRhIiwibmFtZSIsImNyZWF0ZUdhbWVFbGVtZW50cyIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJrZXkiLCJzcXVhcmVFbCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiZ3JpZENvbnRhaW5lciIsInNoaXBDb250YWluZXIiLCJzZXRCYXNlVW5pdFNpemUiLCJzcXVhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInNob3dFbGVtZW50IiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0IiwibW96U291cmNlTm9kZSIsInN0YXR1cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZW5hYmxlQXR0YWNrT24iLCJwbGF5ZXJBcmciLCJwaGFzZUFyZyIsImdhbWVQcm9wZXJ0aWVzIiwic3F1YXJlTm9kZXMiLCJwcm9jZXNzQXR0YWNrIiwiYXR0YWNrUmVzdWx0QXJnIiwic3F1YXJlTm9kZSIsImNoZWNrRm9yTG9zcyIsImRpc2FibGVBdHRhY2tPbiIsInBoYXNlIiwicGhhc2VzIiwid2luIiwiYXR0YWNrQ29udGVudCIsImNoYW5nZU9yaWVudGF0aW9uIiwicHJvY2Vzc1BoYXNlIiwiZ2FtZVByb3BlcnRpZXNBcmciLCJzaGlwUmVxT25lIiwiY3VyQWN0aXZlUGxheWVyIiwic2hpcFJlcVR3byIsImN1ckluYWN0aXZlUGxheWVyIiwicGxheWluZyIsInRlbXAiLCJjaGFuZ2VNZXNzYWdlIiwiaGlkZVBsYWNlZFNoaXBzIiwicGxheWVyQ29tcG9uZW50cyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJncmlkQ29udGFpbmVycyIsIm1lc3NhZ2VDb250YWluZXIiLCJ0dXJuIiwiZm9ybVByb2Nlc3NpbmciLCJzaGlwUGxhY2VtZW50IiwiY3VzdG9tTGVmdE9iaiIsImN1c3RvbVJpZ2h0T2JqIiwibGVmdCIsInJpZ2h0IiwicGxheWVyQ29tcG9uZW50c0xlZnQiLCJwbGF5ZXJDb21wb25lbnRzUmlnaHQiLCJpc0NvbXB1dGVyIiwiYXR0YWNoR2FtZWJvYXJkIiwicHJldmlvdXNIaXQiLCJhdHRhY2siLCJlbmVteSIsIm1vdmUiLCJjb21wdXRlckF0dGFjayIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==