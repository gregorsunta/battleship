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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container > .ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container > .ships .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container > .ships .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container > .ships .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container > .ships .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container > .ships .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;AC3BA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AD4BF;;AC1BA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AD6BF;;AC3BA;EACE,cAAA;AD8BF;;AC5BA;;EAEE,gBAAA;AD+BF;;AC7BA;;EAEE,YAAA;ADgCF;;AC9BA;;;;EAIE,WAAA;EACA,aAAA;ADiCF;;AC/BA;EACE,yBAAA;EACA,iBAAA;ADkCF;;AC/BA,kBAAA;AD/HA;EACE,sBAAA;AAkKF;;AA/JA,WAAA;AAYA,UAAA;AAKA,WAAA;AAkBA;EACE,sBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,cArCW;AAsKb;;AA/HA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAkIF;;AAhIA,WAAA;AACA;EACE,8CAAA;EACA,mBAAA;EACA,aApBc;EAqBd,yBAhDgB;AAmLlB;AAlIE;EACE,qBAAA;EAEA,gBAAA;EACA,oBAAA;EACA,iBApDc;AAuLlB;;AA/HA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAkIF;;AAhIA;EACE,aAAA;EACA,sBAAA;EACA,SAzCc;EA0Cd,aA5Cc;EA6Cd,qBAhDoB;EAiDpB,gCAAA;AAmIF;AAjIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WA9De;AAiMnB;;AAhIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAlEY;AAqMd;AAlIE;EACE,aAAA;AAoIJ;AAlIE;EACE,WAAA;EACA,iBAAA;AAoIJ;AAnII;EACE,aAAA;AAqIN;AAnII;EACE,uCAAA;AAqIN;AAlIE;EAME,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,wBAAA;AA+HJ;AA9HI;EACE,yBAzGC;AAyOP;AA9HI;EACE,yBAjHY;EAkHZ,yBAAA;EACA,kBAbc;EAcd,iBAAA;AAgIN;AA9HI;EACE,yCApBU;EAqBV,8CAAA;AAgIN;AA9HI;EACE,yCAxBU;EAyBV,8CAAA;AAgIN;AA9HI;EACE,yCA5BU;EA6BV,8CAAA;AAgIN;AA9HI;EACE,yCAhCU;EAiCV,8CAAA;AAgIN;AA9HI;EACE,yCApCU;EAqCV,8CAAA;AAgIN;;AA5HA,WAAA;AACA;EACE,8CAAA;EACA,eApHgB;EAqHhB,aAAA;EACA,uBAAA;EACA,yBAnJgB;AAkRlB;;AA5HA,oBAAA;AAEA;EACE,qBAnIoB;EAoIpB,yBAAA;EACA,eA/HgB;AA6PlB;;AA5HA;EACE,YAAA;AA+HF;;AA7HA;EACE,wBAAA;AAgIF;;AA9HA;EACE,yBAAA;AAiIF;;AA/HA;EACE,yBAAA;AAkIF;;AAhIA;EACE,yBAAA;AAmIF;;AAjIA;EACE,YAAA;AAoIF;;AAlIA;EACE,yBAAA;AAqIF;;AAnIA;EACE,yBAAA;AAsIF","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  section {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $extra-small-size;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container > .ships {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
        var key = _Object$keys[_i2];
        if (!this.ships[key].isSunk()) {
          return false;
        }
        return true;
      }
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
        return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Computer', true, obj.gameboardSize);
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
  var hidePlacedShips = function hidePlacedShips() {};
  var showPlacedShips = function showPlacedShips() {};
  var changeTurn = function changeTurn(curActivePlayer, curInactivePlayer) {};
  var hideElement = function hideElement(container) {
    container.classList.add('hide');
  };
  var showElement = function showElement(container) {
    container.classList.remove('hide');
  };
  /* loop */
  processForm();
  var customLeftObj = {
    leftName: 'Gregor',
    computerOption: false,
    gameboardSize: '13'
  };
  var customRightObj = {
    rightName: '',
    computerOption: true,
    gameboardSize: '7'
  };
  var left = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.leftPlayer;
  var right = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.rightPlayer;
  var gameComponentsLeft = createGameComponents(customLeftObj);
  var gameComponentsRight = createGameComponents(customRightObj);
  left.gameboard.append(gameComponentsLeft.elements.gridContainer);
  left.ships.append(gameComponentsLeft.elements.shipContainer);
  right.gameboard.append(gameComponentsRight.elements.gridContainer);
  right.ships.append(gameComponentsRight.elements.shipContainer);
  var curActivePlayer = gameComponentsLeft;
  var curInactivePlayer = gameComponentsRight;
  _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.button.addEventListener('click', function (e) {
    console.log(curActivePlayer.data.gameboard.isOneShipPlaced());
    console.log(curInactivePlayer.data.gameboard.isOneShipPlaced());
    if (curActivePlayer.data.gameboard.isOneShipPlaced()) {
      console.log('here');
    }
  });
  hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
  enableShipPlacement(gameComponentsLeft);
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




var Player = function Player(name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0E7QUFDbEM7QUFDQSx1RCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9z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bEI7O0FBNUhBO0VBQ0UsWUFBQTtBQStIRjs7QUE3SEE7RUFDRSx3QkFBQTtBQWdJRjs7QUE5SEE7RUFDRSx5QkFBQTtBQWlJRjs7QUEvSEE7RUFDRSx5QkFBQTtBQWtJRjs7QUFoSUE7RUFDRSx5QkFBQTtBQW1JRjs7QUFqSUE7RUFDRSxZQUFBO0FBb0lGOztBQWxJQTtFQUNFLHlCQUFBO0FBcUlGOztBQW5JQTtFQUNFLHlCQUFBO0FBc0lGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG4kZ3JheTogIzRiNGI0YjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGV4dHJhLXNtYWxsLXNpemU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUgfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvcHRpb25Db21wdXRlcjoge1xuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24uY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIG9wdGlvblNpemU6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbGF5ZXJzOiB7XG4gICAgICBwbGF5ZXJPbmU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQub25lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIHBsYXllclR3bzoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC50d28nKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gLmVycm9yJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICAgIGJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb250aW51ZScpLFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICB9O1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNxdWFyZXMgPSB7fTtcbiAgY29uc3Qgc2hpcHMgPSBuZXcgU2hpcHMoKTtcbiAgbGV0IGlzT25lU2hpcFBsYWNlZCA9IGZhbHNlO1xuICBjb25zdCBjaGVja1BsYWNlbWVudCA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXBEYXRhLCBzaGlwT3JpZW50ID0gJ3YnKSB7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBpZiAoc2hpcERhdGEucGxhY2VkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogbnVsbCxcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gJ2JhbmFuYSc7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcFZlcnRpY2FsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaXNPbmVTaGlwUGxhY2VkOiAoKSA9PiB7XG4gICAgICByZXR1cm4gaXNPbmVTaGlwUGxhY2VkO1xuICAgIH0sXG4gICAgY2hlY2tQbGFjZW1lbnQsXG4gICAgc3F1YXJlcyxcbiAgICBzaGlwcyxcbiAgICBjcmVhdGVCb2FyZChzaXplID0gMTApIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgIHRoaXMuc3F1YXJlc1tgJHtbaiwgaV19YF0gPSB7XG4gICAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgICAgICBvY2N1cGllczogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zcXVhcmVzO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzcXVhcmVTdHIsIG5ld09yaWVudCA9ICd2Jykge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICAgIGNvbnN0IHNoaXBPcmllbnQgPSBuZXdPcmllbnQ7XG4gICAgICBpZiAoY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCBuZXdPcmllbnQpPy52YWxpZCkge1xuICAgICAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBhcmVTaGlwc1N1bmsoKSB7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW2tleV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZVN0cikge1xuICAgICAgY29uc3Qgc3F1YXJlSWRTdHIgPSBzcXVhcmVTdHI7XG4gICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLnNxdWFyZXNbc3F1YXJlSWRTdHJdO1xuXG4gICAgICBpZiAoIXNxdWFyZSkge1xuICAgICAgICByZXR1cm4gYE91dCBvZiBib3VuZHNgO1xuICAgICAgfSBlbHNlIGlmIChzcXVhcmUuaXNIaXQpIHtcbiAgICAgICAgcmV0dXJuIGBBbHJlYWR5IGhpdGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVhcmUuaXNIaXQgPSB0cnVlO1xuICAgICAgICBpZiAoc3F1YXJlLm9jY3VwaWVzKSB7XG4gICAgICAgICAgc3F1YXJlLm9jY3VwaWVzLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmUub2NjdXBpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZm9ybSwgZ2FtZSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcblxuY29uc3QgR2FtZWxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9jZXNzRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybS5vcHRpb25zO1xuICAgIGNvbnN0IHBsYXllcnMgPSBmb3JtLnBsYXllcnM7XG4gICAgY29uc3QgYWRkRm9ybUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUExheWVyVHdvKCk7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVNsaWRlclZhbHVlKG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dCwgb3B0aW9ucy5vcHRpb25TaXplLm91dHB1dCk7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgIGhpZGVFbGVtZW50KHBsYXllcnNbcGxheWVyXS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllcnMucGxheWVyT25lLmlucHV0LnZhbGlkaXR5LnZhbGlkICYmXG4gICAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsaWRpdHkudmFsaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3JlYXRlR2FtZUNvbXBvbmVudHMoZ2V0Rm9ybUlucHV0KHBsYXllcnMsIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3JtLmNvbnRhaW5lci5yZXNldCgpO1xuICAgICAgICAgIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKHBsYXllcnNbcGxheWVyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVBMYXllclR3byA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0KSB7XG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEZvcm1JbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXJzLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBmaXJzdE5hbWUgPSBwbGF5ZXJzLnBsYXllck9uZS5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHNlY29uZE5hbWUgPSBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbXB1dGVyT3B0aW9uID0gb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkO1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC52YWx1ZTtcblxuICAgICAgcmV0dXJuIHsgZmlyc3ROYW1lLCBzZWNvbmROYW1lLCBjb21wdXRlck9wdGlvbiwgZ2FtZWJvYXJkU2l6ZSB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9O1xuICBjb25zdCBjcmVhdGVHYW1lQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXI7XG4gICAgLy8gY29uc3QgcGxheWVyQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci5wbGF5ZXInKTtcbiAgICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5jb21wdXRlck9wdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllcignQ29tcHV0ZXInLCB0cnVlLCBvYmouZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgZmFsc2UsIG9iai5nYW1lYm9hcmRTaXplKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3BsYXllci5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7cGxheWVyLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXIuZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgICBzcXVhcmVFbC5kYXRhc2V0Lm93bmVyID0gW2Ake3BsYXllci5uYW1lfWBdO1xuICAgICAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZUVsKTtcbiAgICAgICAgICBncmlkLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgICBncmlkLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB9XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsICdjb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgICB9O1xuICAgICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzKSkge1xuICAgICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7a2V5fWApO1xuICAgICAgICAgIHNoaXBFbC5kYXRhc2V0LnR5cGUgPSBgJHtrZXl9YDtcbiAgICAgICAgICBzaGlwRWwuZGF0YXNldC5vd25lciA9IGAke3BsYXllci5uYW1lfWA7XG4gICAgICAgICAgc2hpcHMuYXBwZW5kKHNoaXBFbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnLCAnaGlkZScpO1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgZ3JpZENvbnRhaW5lcjogY3JlYXRlR3JpZCgpLCBzaGlwQ29udGFpbmVyOiBjcmVhdGVTaGlwcygpIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgICAvLyBtYWtlIHNoaXAgd2lkdGggdGhlIHNhbWUgYXMgc3F1YXJlIHdpZHRoXG4gICAgICBjb25zdCBzcXVhcmVIZWlnaHQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIjAsMFwiXWApLm9mZnNldEhlaWdodDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYmFzZS11bml0LXNpemUnLFxuICAgICAgICBgJHtzcXVhcmVIZWlnaHR9cHhgLFxuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVQbGF5ZXJEYXRhKG9iaik7XG4gICAgY29uc3QgZWxlbWVudHMgPSBjcmVhdGVHYW1lRWxlbWVudHMoZGF0YSk7XG5cbiAgICBzaG93RWxlbWVudChnYW1lQ29udGFpbmVyKTtcbiAgICAvLyBzZXRCYXNlVW5pdFNpemUoKTtcbiAgICByZXR1cm4geyBkYXRhLCBlbGVtZW50cyB9O1xuICB9O1xuICBjb25zdCBlbmFibGVTaGlwUGxhY2VtZW50ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIGNvbnN0IGRhdGEgPSBwbGF5ZXIuZGF0YTtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBsYXllci5lbGVtZW50cztcbiAgICBwbGF5ZXIuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgY29uc3QgZW5hYmxlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKHNoaXBMaXN0KSB7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcExpc3QpKSB7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZFNoaXBFdmVudExpc3RlbmVyID0gKHNoaXBMaXN0KSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IHNoaXBMaXN0O1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBzKSkge1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgYCR7ZS50YXJnZXR9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXIgPSAoc3F1YXJlTGlzdCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IHNxdWFyZUxpc3Q7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2YgT2JqZWN0LnZhbHVlcyhncmlkKSkge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KHNxdWFyZVN0ciwgc2hpcCwgJ3YnKTtcbiAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAndicsXG4gICAgICAgICAgKS5lbGVtZW50cztcbiAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsICd2Jyk7XG4gICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlLFxuICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBlbmFibGVEcmFnZ2FibGUoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICBhZGRTaGlwRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgIGFkZEdyaWRFdmVudExpc3RlbmVyKGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZVNoaXBQbGFjZW1lbnQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgcGxheWVyLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vIGhpZGUgc2hpcHNcbiAgICAvLyByZW1vdmVldmVudGxpc3RlbmVyIGZyb20gYWxsIHNxdWFyZXNcbiAgICBjb25zdCBzcXVhcmVzID0gcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlO1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoaWRlUGxhY2VkU2hpcHMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgY29uc3Qgc2hvd1BsYWNlZFNoaXBzID0gZnVuY3Rpb24gKCkge307XG4gIGNvbnN0IGNoYW5nZVR1cm4gPSBmdW5jdGlvbiAoY3VyQWN0aXZlUGxheWVyLCBjdXJJbmFjdGl2ZVBsYXllcikge307XG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG4gIC8qIGxvb3AgKi9cbiAgcHJvY2Vzc0Zvcm0oKTtcblxuICBjb25zdCBjdXN0b21MZWZ0T2JqID0ge1xuICAgIGxlZnROYW1lOiAnR3JlZ29yJyxcbiAgICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gICAgZ2FtZWJvYXJkU2l6ZTogJzEzJyxcbiAgfTtcbiAgY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gICAgcmlnaHROYW1lOiAnJyxcbiAgICBjb21wdXRlck9wdGlvbjogdHJ1ZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnNycsXG4gIH07XG4gIGNvbnN0IGxlZnQgPSBnYW1lLmxlZnRQbGF5ZXI7XG4gIGNvbnN0IHJpZ2h0ID0gZ2FtZS5yaWdodFBsYXllcjtcbiAgY29uc3QgZ2FtZUNvbXBvbmVudHNMZWZ0ID0gY3JlYXRlR2FtZUNvbXBvbmVudHMoY3VzdG9tTGVmdE9iaik7XG4gIGNvbnN0IGdhbWVDb21wb25lbnRzUmlnaHQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21SaWdodE9iaik7XG4gIGxlZnQuZ2FtZWJvYXJkLmFwcGVuZChnYW1lQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gIGxlZnQuc2hpcHMuYXBwZW5kKGdhbWVDb21wb25lbnRzTGVmdC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgcmlnaHQuZ2FtZWJvYXJkLmFwcGVuZChnYW1lQ29tcG9uZW50c1JpZ2h0LmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICByaWdodC5zaGlwcy5hcHBlbmQoZ2FtZUNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcblxuICBjb25zdCBjdXJBY3RpdmVQbGF5ZXIgPSBnYW1lQ29tcG9uZW50c0xlZnQ7XG4gIGNvbnN0IGN1ckluYWN0aXZlUGxheWVyID0gZ2FtZUNvbXBvbmVudHNSaWdodDtcbiAgZ2FtZS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1ckFjdGl2ZVBsYXllci5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKSk7XG4gICAgY29uc29sZS5sb2coY3VySW5hY3RpdmVQbGF5ZXIuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCkpO1xuICAgIGlmIChjdXJBY3RpdmVQbGF5ZXIuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgfVxuICB9KTtcbiAgaGlkZUVsZW1lbnQoZm9ybS5jb250YWluZXIpO1xuICBlbmFibGVTaGlwUGxhY2VtZW50KGdhbWVDb21wb25lbnRzTGVmdCk7XG4gIC8vIGVuYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZUNvbXBvbmVudHNSaWdodCk7XG4gIC8vIGRpc2FibGVTaGlwUGxhY2VtZW50KGdhbWVDb21wb25lbnRzTGVmdCk7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUNvbXBvbmVudHMsXG4gICAgcHJvY2Vzc0Zvcm0sXG4gICAgZW5hYmxlU2hpcFBsYWNlbWVudCxcbiAgICBoaWRlRWxlbWVudCxcbiAgICBzaG93RWxlbWVudCxcbiAgICAvLyBlbmFibGVBdHRhY2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lbG9vcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgLy8gc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvcmllbnQ6ICd2JyxcbiAgICBoaXRzOiAwLFxuICAgIHBsYWNlZDogZmFsc2UsXG4gICAgaGl0KCkge1xuICAgICAgcmV0dXJuICsrdGhpcy5oaXRzO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59O1xuY29uc3QgU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgZGVzdHJveWVyOiBuZXcgU2hpcCgyKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMpLFxuICAgIGNydWlzZXI6IG5ldyBTaGlwKDMpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIGNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXBzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBHYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuLy8gaW1wb3J0IHsgZ2FtZSwgZm9ybSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImZvcm0iLCJnYW1lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3B0aW9uQ29tcHV0ZXIiLCJpbnB1dCIsIm9wdGlvblNpemUiLCJvdXRwdXQiLCJwbGF5ZXJzIiwicGxheWVyT25lIiwiZXJyb3IiLCJwbGF5ZXJUd28iLCJsZWZ0UGxheWVyIiwiZ2FtZWJvYXJkIiwic2hpcHMiLCJyaWdodFBsYXllciIsIlNoaXBzIiwiR2FtZWJvYXJkIiwic3F1YXJlcyIsImlzT25lU2hpcFBsYWNlZCIsImNoZWNrUGxhY2VtZW50Iiwic3F1YXJlU3RyIiwic2hpcERhdGEiLCJzaGlwT3JpZW50Iiwic3F1YXJlSWQiLCJzcGxpdCIsImVsIiwiTnVtYmVyIiwicGxhY2VkIiwiZWxlbWVudHMiLCJ2YWxpZCIsInNpemUiLCJuZWlnaGJvdXJTdHIiLCJvY2N1cGllcyIsInBsYWNlU2hpcFZlcnRpY2FsbHkiLCJzaGlwIiwic2VsZWN0ZWRTcXVhcmVzIiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJwbGFjZVNoaXAiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImFyZVNoaXBzU3VuayIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwic3F1YXJlSWRTdHIiLCJzcXVhcmUiLCJoaXQiLCJQbGF5ZXIiLCJHYW1lbG9vcCIsInByb2Nlc3NGb3JtIiwiYWRkRm9ybUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVBMYXllclR3byIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXllciIsImhpZGVFbGVtZW50IiwidmFsaWRpdHkiLCJjcmVhdGVHYW1lQ29tcG9uZW50cyIsImdldEZvcm1JbnB1dCIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImNoZWNrZWQiLCJhZGQiLCJkaXNhYmxlZCIsInZhbHVlIiwiZmlyc3ROYW1lIiwic2Vjb25kTmFtZSIsImNvbXB1dGVyT3B0aW9uIiwiZ2FtZWJvYXJkU2l6ZSIsInZhbHVlTWlzc2luZyIsIm9iaiIsImdhbWVDb250YWluZXIiLCJjcmVhdGVQbGF5ZXJEYXRhIiwibmFtZSIsImNyZWF0ZUdhbWVFbGVtZW50cyIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzcXVhcmVFbCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiZ3JpZENvbnRhaW5lciIsInNoaXBDb250YWluZXIiLCJzZXRCYXNlVW5pdFNpemUiLCJzcXVhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInNob3dFbGVtZW50IiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0IiwibW96U291cmNlTm9kZSIsInN0YXR1cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiaGlkZVBsYWNlZFNoaXBzIiwic2hvd1BsYWNlZFNoaXBzIiwiY2hhbmdlVHVybiIsImN1ckFjdGl2ZVBsYXllciIsImN1ckluYWN0aXZlUGxheWVyIiwiY3VzdG9tTGVmdE9iaiIsImxlZnROYW1lIiwiY3VzdG9tUmlnaHRPYmoiLCJyaWdodE5hbWUiLCJsZWZ0IiwicmlnaHQiLCJnYW1lQ29tcG9uZW50c0xlZnQiLCJnYW1lQ29tcG9uZW50c1JpZ2h0IiwiY29uc29sZSIsImxvZyIsImlzQ29tcHV0ZXIiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tU3F1YXJlIiwiU2hpcCIsIm9yaWVudCIsImhpdHMiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9