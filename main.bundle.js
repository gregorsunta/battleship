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
/* harmony export */   "message": () => (/* binding */ message),
/* harmony export */   "orientationButton": () => (/* binding */ orientationButton)
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
var orientationButton = function () {
  var button = document.querySelector('button.orientation');
  return button;
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
  var changeOrientation = function changeOrientation(button, gamePropertiesArg) {
    button.addEventListener('click', function () {
      if (gamePropertiesArg.placementOrientation === 'v') {
        button.textContent = 'h';
        gamePropertiesArg.placementOrientation = 'h';
      } else {
        button.textContent = 'v';
        gamePropertiesArg.placementOrientation = 'v';
      }
    });
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
          var orientation = gameProperties.placementOrientation;
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var status = data.gameboard.checkPlacement(squareStr, ship, orientation);
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
          var orientation = gameProperties.placementOrientation;
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var selectedSquares = data.gameboard.checkPlacement(squareStr, ship, orientation).elements;
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
          var orientation = gameProperties.placementOrientation;
          e.preventDefault();
          var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
          var squareStr = e.target.dataset.id;
          var status = data.gameboard.checkPlacement(squareStr, ship, orientation);
          if (status.valid) {
            var _iterator3 = _createForOfIteratorHelper(status.elements),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _squareStr3 = _step3.value;
                var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr3, "\"]"));
                squareEl.classList.remove('place');
                squareEl.classList.add('placed');
                data.gameboard.placeShip(e.dataTransfer.mozSourceNode.dataset.type, _squareStr3, orientation);
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
          processPhase(gameProperties);
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
    phase: phases.shipPlacement,
    placementOrientation: 'v'
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
  changeOrientation(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.orientationButton, gameProperties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3M/MDkyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQlVOVFUgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSA+IC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgLnNxdWFyZSB7XFxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiNGI0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuXFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuXFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkNWQ1NztcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OTVhZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFD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QTtFQUNFLHlCQUFBO0FBc0lGOztBQXBJQTtFQUNFLHlCQUFBO0FBdUlGOztBQXJJQTtFQUNFLHlCQUFBO0FBd0lGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG4kZ3JheTogIzRiNGI0YjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGV4dHJhLXNtYWxsLXNpemU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDVkNTc7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzk1YWQ7XFxufVxcblwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZm9ybSwgZ2FtZSwgbWVzc2FnZSwgb3JpZW50YXRpb25CdXR0b24gfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvcHRpb25Db21wdXRlcjoge1xuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24uY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIG9wdGlvblNpemU6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbGF5ZXJzOiB7XG4gICAgICBwbGF5ZXJPbmU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQub25lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIHBsYXllclR3bzoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC50d28nKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gLmVycm9yJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICAgIGJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb250aW51ZScpLFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IG1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gIH07XG59KSgpO1xuY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ub3JpZW50YXRpb24nKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGxldCBpc09uZVNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwRGF0YSwgc2hpcE9yaWVudCA9ICd2Jykge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgaWYgKHNoaXBEYXRhLnBsYWNlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHM6IG51bGwsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICdiYW5hbmEnO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBWZXJ0aWNhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcEhvcml6b250YWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGlzT25lU2hpcFBsYWNlZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzT25lU2hpcFBsYWNlZDtcbiAgICB9LFxuICAgIGNoZWNrUGxhY2VtZW50LFxuICAgIHNxdWFyZXMsXG4gICAgc2hpcHMsXG4gICAgY3JlYXRlQm9hcmQoc2l6ZSA9IDEwKSB7XG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICB0aGlzLnNxdWFyZXNbYCR7W2osIGldfWBdID0ge1xuICAgICAgICAgICAgaXNIaXQ6IGZhbHNlLFxuICAgICAgICAgICAgb2NjdXBpZXM6IG51bGwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlcztcbiAgICB9LFxuICAgIHBsYWNlU2hpcChzaGlwTmFtZSwgc3F1YXJlU3RyLCBuZXdPcmllbnQgPSAndicpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXTtcbiAgICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgICBjb25zdCBzaGlwT3JpZW50ID0gbmV3T3JpZW50O1xuICAgICAgaWYgKGNoZWNrUGxhY2VtZW50KHNxdWFyZVN0ciwgc2hpcCwgbmV3T3JpZW50KT8udmFsaWQpIHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwVmVydGljYWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0uaXNTdW5rKCkgJiYgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmVTdHIpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUlkU3RyID0gc3F1YXJlU3RyO1xuICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5zcXVhcmVzW3NxdWFyZUlkU3RyXTtcblxuICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIGBPdXQgb2YgYm91bmRzYDtcbiAgICAgIH0gZWxzZSBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgIHJldHVybiBgQWxyZWFkeSBoaXRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZS5vY2N1cGllcy5oaXQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzcXVhcmUub2NjdXBpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmUub2NjdXBpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgZm9ybSwgZ2FtZSwgbWVzc2FnZSwgb3JpZW50YXRpb25CdXR0b24gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5cbmNvbnN0IEdhbWVsb29wID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvY2Vzc0Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZvcm0ub3B0aW9ucztcbiAgICBjb25zdCBwbGF5ZXJzID0gZm9ybS5wbGF5ZXJzO1xuICAgIGNvbnN0IGFkZEZvcm1FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVBMYXllclR3bygpO1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zLm9wdGlvblNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlTbGlkZXJWYWx1ZShvcHRpb25zLm9wdGlvblNpemUuaW5wdXQsIG9wdGlvbnMub3B0aW9uU2l6ZS5vdXRwdXQpO1xuICAgICAgfSk7XG4gICAgICBmb3JtLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudChwbGF5ZXJzW3BsYXllcl0uZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXJzLnBsYXllck9uZS5pbnB1dC52YWxpZGl0eS52YWxpZCAmJlxuICAgICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LnZhbGlkaXR5LnZhbGlkXG4gICAgICAgICkge1xuICAgICAgICAgIGNyZWF0ZUdhbWVDb21wb25lbnRzKGdldEZvcm1JbnB1dChwbGF5ZXJzLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm9ybS5jb250YWluZXIucmVzZXQoKTtcbiAgICAgICAgICBoaWRlRWxlbWVudChmb3JtLmNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvcihwbGF5ZXJzW3BsYXllcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb250YWluZXIsIG1zZykge1xuICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVQTGF5ZXJUd28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5U2xpZGVyVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRGb3JtSW5wdXQgPSBmdW5jdGlvbiAocGxheWVycywgb3B0aW9ucykge1xuICAgICAgY29uc3QgZmlyc3ROYW1lID0gcGxheWVycy5wbGF5ZXJPbmUuaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBzZWNvbmROYW1lID0gcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBjb21wdXRlck9wdGlvbiA9IG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuY2hlY2tlZDtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSBvcHRpb25zLm9wdGlvblNpemUuaW5wdXQudmFsdWU7XG5cbiAgICAgIHJldHVybiB7IGZpcnN0TmFtZSwgc2Vjb25kTmFtZSwgY29tcHV0ZXJPcHRpb24sIGdhbWVib2FyZFNpemUgfTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlFcnJvciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIHNob3dFcnJvcihwbGF5ZXIuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBhZGRGb3JtRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlR2FtZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGdhbWUuY29udGFpbmVyO1xuICAgIC8vIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGdhbWUuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIucGxheWVyJyk7XG4gICAgY29uc3QgY3JlYXRlUGxheWVyRGF0YSA9IChvYmopID0+IHtcbiAgICAgIGlmIChvYmouY29tcHV0ZXJPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIHRydWUsIG9iai5nYW1lYm9hcmRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCBmYWxzZSwgb2JqLmdhbWVib2FyZFNpemUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cGxheWVyLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtwbGF5ZXIuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllci5nYW1lYm9hcmQuc3F1YXJlcykpIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICAgIHNxdWFyZUVsLmRhdGFzZXQuaWQgPSBbYCR7a2V5fWBdO1xuICAgICAgICAgIHNxdWFyZUVsLmRhdGFzZXQub3duZXIgPSBbYCR7cGxheWVyLm5hbWV9YF07XG4gICAgICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICAgIH07XG4gICAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllci5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCBgJHtrZXl9YCk7XG4gICAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyLm5hbWV9YDtcbiAgICAgICAgICBzaGlwcy5hcHBlbmQoc2hpcEVsKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdzaGlwcycsICdoaWRlJyk7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgIH07XG4gICAgICByZXR1cm4geyBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCkgfTtcbiAgICB9O1xuICAgIGNvbnN0IHNldEJhc2VVbml0U2l6ZSA9ICgpID0+IHtcbiAgICAgIC8vIG1ha2Ugc2hpcCB3aWR0aCB0aGUgc2FtZSBhcyBzcXVhcmUgd2lkdGhcbiAgICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1iYXNlLXVuaXQtc2l6ZScsXG4gICAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgICApO1xuICAgIH07XG4gICAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgICBjb25zdCBlbGVtZW50cyA9IGNyZWF0ZUdhbWVFbGVtZW50cyhkYXRhKTtcblxuICAgIHNob3dFbGVtZW50KGdhbWVDb250YWluZXIpO1xuICAgIC8vIHNldEJhc2VVbml0U2l6ZSgpO1xuICAgIHJldHVybiB7IGRhdGEsIGVsZW1lbnRzIH07XG4gIH07XG4gIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gZnVuY3Rpb24gKGJ1dHRvbiwgZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXNBcmcucGxhY2VtZW50T3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnaCc7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBsYWNlbWVudE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ3YnO1xuICAgICAgICBnYW1lUHJvcGVydGllc0FyZy5wbGFjZW1lbnRPcmllbnRhdGlvbiA9ICd2JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlU2hpcFBsYWNlbWVudCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBjb25zdCBkYXRhID0gcGxheWVyLmRhdGE7XG4gICAgY29uc3QgZWxlbWVudHMgPSBwbGF5ZXIuZWxlbWVudHM7XG4gICAgcGxheWVyLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBMaXN0KSkge1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwcykpIHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZEdyaWRFdmVudExpc3RlbmVyID0gKHNxdWFyZUxpc3QpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICApLmVsZW1lbnRzO1xuICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlLFxuICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGVuYWJsZURyYWdnYWJsZShlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgIGFkZFNoaXBFdmVudExpc3RlbmVyKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgYWRkR3JpZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlU2hpcFBsYWNlbWVudCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBwbGF5ZXIuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gaGlkZSBzaGlwc1xuICAgIC8vIHJlbW92ZWV2ZW50bGlzdGVuZXIgZnJvbSBhbGwgc3F1YXJlc1xuICAgIGNvbnN0IHNxdWFyZXMgPSBwbGF5ZXIuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGVuYWJsZUF0dGFja09uID0gZnVuY3Rpb24gKHBsYXllckFyZywgcGhhc2VBcmcgPSBnYW1lUHJvcGVydGllcykge1xuICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gcGxheWVyQXJnLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gZnVuY3Rpb24gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkge1xuICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJBcmcuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICAgIHNob3dFbGVtZW50KG1lc3NhZ2UuY29udGFpbmVyKTtcbiAgICAgICAgICBkaXNhYmxlQXR0YWNrT24ocGxheWVyQXJnKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXR0YWNrQ29udGVudCA9IHBsYXllckFyZy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgIHNxdWFyZU5vZGUuZGF0YXNldC5pZCxcbiAgICAgICAgKTtcbiAgICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgICAgZGlzYWJsZUF0dGFja09uKHBsYXllckFyZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRpc2FibGVBdHRhY2tPbiA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlTm9kZTtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgaWYgKGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID09PSAyKSB7XG4gICAgICBjb25zdCBzaGlwUmVxT25lID0gY3VyQWN0aXZlUGxheWVyLmRhdGEuZ2FtZWJvYXJkLmlzT25lU2hpcFBsYWNlZCgpO1xuICAgICAgY29uc3Qgc2hpcFJlcVR3byA9IGN1ckluYWN0aXZlUGxheWVyLmRhdGEuZ2FtZWJvYXJkLmlzT25lU2hpcFBsYWNlZCgpO1xuICAgICAgaWYgKHNoaXBSZXFPbmUgJiYgc2hpcFJlcVR3bykge1xuICAgICAgICBkaXNhYmxlU2hpcFBsYWNlbWVudChjdXJBY3RpdmVQbGF5ZXIpO1xuICAgICAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5wbGF5aW5nO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXNBcmcpO1xuICAgICAgfSBlbHNlIGlmIChzaGlwUmVxT25lIHx8IHNoaXBSZXFUd28pIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGN1ckFjdGl2ZVBsYXllcjtcbiAgICAgICAgY3VyQWN0aXZlUGxheWVyID0gY3VySW5hY3RpdmVQbGF5ZXI7XG4gICAgICAgIGN1ckluYWN0aXZlUGxheWVyID0gdGVtcDtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoY3VySW5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICBlbmFibGVTaGlwUGxhY2VtZW50KGN1ckFjdGl2ZVBsYXllcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9PT0gMykge1xuICAgICAgY29uc3QgdGVtcCA9IGN1ckFjdGl2ZVBsYXllcjtcbiAgICAgIGN1ckFjdGl2ZVBsYXllciA9IGN1ckluYWN0aXZlUGxheWVyO1xuICAgICAgY3VySW5hY3RpdmVQbGF5ZXIgPSB0ZW1wO1xuICAgICAgZW5hYmxlQXR0YWNrT24oY3VyQWN0aXZlUGxheWVyLCBjdXJJbmFjdGl2ZVBsYXllcik7XG4gICAgICBpZiAoZW5hYmxlQXR0YWNrT24uc3RhdHVzKSB7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9PT0gNCkge1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLndpbihjdXJBY3RpdmVQbGF5ZXIpO1xuICAgICAgZ2FtZVByb3BlcnRpZXNBcmcucGhhc2UgPSAxO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGlkZVBsYWNlZFNoaXBzID0gZnVuY3Rpb24gKHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBzaGlwU3F1YXJlcyA9XG4gICAgICBwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgIGZvciAobGV0IHNxdWFyZSBpbiBzaGlwU3F1YXJlcykge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2hvd1BsYWNlZFNoaXBzID0gZnVuY3Rpb24gKHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBzcXVhcmVzRGF0YSA9IHBsYXllckNvbXBvbmVudHMuZGF0YS5nYW1lYm9hcmQuc3F1YXJlcztcbiAgICBjb25zdCBzcXVhcmVzRWxlbWVudHMgPSBwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXJzLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXNEYXRhKSB7XG4gICAgICBpZiAoc3F1YXJlLm9jY3VwaWVzKSB7XG4gICAgICAgIHNxdWFyZXNFbGVtZW50cy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7c3F1YXJlfVwiXWApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlLmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgLyogbG9vcCAqL1xuICBjb25zdCBwaGFzZXMgPSB7XG4gICAgZm9ybVByb2Nlc3Npbmc6IDEsXG4gICAgc2hpcFBsYWNlbWVudDogMixcbiAgICBwbGF5aW5nOiAzLFxuICAgIHdpbjogNCxcbiAgfTtcbiAgbGV0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuc2hpcFBsYWNlbWVudCxcbiAgICBwbGFjZW1lbnRPcmllbnRhdGlvbjogJ3YnLFxuICB9O1xuXG4gIHByb2Nlc3NGb3JtKCk7XG4gIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgY29uc3QgY3VzdG9tTGVmdE9iaiA9IHtcbiAgICBuYW1lOiAnR3JlZ29yJyxcbiAgICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gICAgZ2FtZWJvYXJkU2l6ZTogJzEzJyxcbiAgfTtcbiAgY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gICAgbmFtZTogJ0NvbXB1dGVyJyxcbiAgICBjb21wdXRlck9wdGlvbjogdHJ1ZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnNycsXG4gIH07XG4gIGNvbnN0IGxlZnQgPSBnYW1lLmxlZnRQbGF5ZXI7XG4gIGNvbnN0IHJpZ2h0ID0gZ2FtZS5yaWdodFBsYXllcjtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c0xlZnQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21MZWZ0T2JqKTtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c1JpZ2h0ID0gY3JlYXRlR2FtZUNvbXBvbmVudHMoY3VzdG9tUmlnaHRPYmopO1xuICBsZWZ0LmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gIGxlZnQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNMZWZ0LmVsZW1lbnRzLnNoaXBDb250YWluZXIpO1xuICByaWdodC5nYW1lYm9hcmQuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgcmlnaHQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcblxuICBsZXQgY3VyQWN0aXZlUGxheWVyID0gcGxheWVyQ29tcG9uZW50c0xlZnQ7XG4gIGxldCBjdXJJbmFjdGl2ZVBsYXllciA9IHBsYXllckNvbXBvbmVudHNSaWdodDtcblxuICBlbmFibGVTaGlwUGxhY2VtZW50KHBsYXllckNvbXBvbmVudHNMZWZ0KTtcbiAgY2hhbmdlT3JpZW50YXRpb24ob3JpZW50YXRpb25CdXR0b24sIGdhbWVQcm9wZXJ0aWVzKTtcbiAgZ2FtZS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZUdhbWVDb21wb25lbnRzLFxuICAgIHByb2Nlc3NGb3JtLFxuICAgIGVuYWJsZVNoaXBQbGFjZW1lbnQsXG4gICAgaGlkZUVsZW1lbnQsXG4gICAgc2hvd0VsZW1lbnQsXG4gICAgLy8gZW5hYmxlQXR0YWNrLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWxvb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lID0gJ0NvbXB1dGVyJywgaXNDb21wdXRlciA9IGZhbHNlLCBzaXplKSB7XG4gIGNvbnN0IGF0dGFjaEdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgZ2FtZWJvYXJkOiBhdHRhY2hHYW1lYm9hcmQoc2l6ZSksXG4gICAgYXR0YWNrKGVuZW15LCBtb3ZlKSB7XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuZ2FtZWJvYXJkLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcXVhcmUoKSk7XG4gICAgfSxcbiAgICBjaGVja0Zvckxvc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4gICAgY3J1aXNlcjogbmV3IFNoaXAoMyksXG4gICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSksXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hpcHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnO1xuLy8gaW1wb3J0IEdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG4vLyBpbXBvcnQgeyBnYW1lLCBmb3JtIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiZm9ybSIsImdhbWUiLCJtZXNzYWdlIiwib3JpZW50YXRpb25CdXR0b24iLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJvcHRpb25Db21wdXRlciIsImlucHV0Iiwib3B0aW9uU2l6ZSIsIm91dHB1dCIsInBsYXllcnMiLCJwbGF5ZXJPbmUiLCJlcnJvciIsInBsYXllclR3byIsImxlZnRQbGF5ZXIiLCJnYW1lYm9hcmQiLCJzaGlwcyIsInJpZ2h0UGxheWVyIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzcXVhcmVzIiwiaXNPbmVTaGlwUGxhY2VkIiwiY2hlY2tQbGFjZW1lbnQiLCJzcXVhcmVTdHIiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJlbGVtZW50cyIsInZhbGlkIiwic2l6ZSIsIm5laWdoYm91clN0ciIsIm9jY3VwaWVzIiwicGxhY2VTaGlwVmVydGljYWxseSIsInNoaXAiLCJzZWxlY3RlZFNxdWFyZXMiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInBsYWNlU2hpcCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiT2JqZWN0Iiwia2V5cyIsImlzU3VuayIsInJlY2VpdmVBdHRhY2siLCJzcXVhcmVJZFN0ciIsInNxdWFyZSIsImhpdCIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIiLCJHYW1lbG9vcCIsInByb2Nlc3NGb3JtIiwiYWRkRm9ybUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVBMYXllclR3byIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXllciIsImhpZGVFbGVtZW50IiwidmFsaWRpdHkiLCJjcmVhdGVHYW1lQ29tcG9uZW50cyIsImdldEZvcm1JbnB1dCIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImNoZWNrZWQiLCJhZGQiLCJkaXNhYmxlZCIsInZhbHVlIiwiZmlyc3ROYW1lIiwic2Vjb25kTmFtZSIsImNvbXB1dGVyT3B0aW9uIiwiZ2FtZWJvYXJkU2l6ZSIsInZhbHVlTWlzc2luZyIsIm9iaiIsImdhbWVDb250YWluZXIiLCJjcmVhdGVQbGF5ZXJEYXRhIiwibmFtZSIsImNyZWF0ZUdhbWVFbGVtZW50cyIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJrZXkiLCJzcXVhcmVFbCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiZ3JpZENvbnRhaW5lciIsInNoaXBDb250YWluZXIiLCJzZXRCYXNlVW5pdFNpemUiLCJzcXVhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInNob3dFbGVtZW50IiwiY2hhbmdlT3JpZW50YXRpb24iLCJnYW1lUHJvcGVydGllc0FyZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0Iiwib3JpZW50YXRpb24iLCJnYW1lUHJvcGVydGllcyIsIm1velNvdXJjZU5vZGUiLCJzdGF0dXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZVNoaXBQbGFjZW1lbnQiLCJjaGlsZE5vZGVzIiwib2xkU3F1YXJlIiwibmV3U3F1YXJlIiwiY2xvbmVOb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImVuYWJsZUF0dGFja09uIiwicGxheWVyQXJnIiwicGhhc2VBcmciLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiY2hlY2tGb3JMb3NzIiwiZGlzYWJsZUF0dGFja09uIiwicGhhc2UiLCJwaGFzZXMiLCJ3aW4iLCJwcm9jZXNzUGhhc2UiLCJhdHRhY2tDb250ZW50Iiwic2hpcFJlcU9uZSIsImN1ckFjdGl2ZVBsYXllciIsInNoaXBSZXFUd28iLCJjdXJJbmFjdGl2ZVBsYXllciIsInBsYXlpbmciLCJ0ZW1wIiwiY2hhbmdlTWVzc2FnZSIsImhpZGVQbGFjZWRTaGlwcyIsInBsYXllckNvbXBvbmVudHMiLCJzaGlwU3F1YXJlcyIsInNob3dQbGFjZWRTaGlwcyIsInNxdWFyZXNEYXRhIiwic3F1YXJlc0VsZW1lbnRzIiwiZ3JpZENvbnRhaW5lcnMiLCJtZXNzYWdlQ29udGFpbmVyIiwidHVybiIsImZvcm1Qcm9jZXNzaW5nIiwic2hpcFBsYWNlbWVudCIsImN1c3RvbUxlZnRPYmoiLCJjdXN0b21SaWdodE9iaiIsImxlZnQiLCJyaWdodCIsInBsYXllckNvbXBvbmVudHNMZWZ0IiwicGxheWVyQ29tcG9uZW50c1JpZ2h0IiwiaXNDb21wdXRlciIsImF0dGFjaEdhbWVib2FyZCIsInByZXZpb3VzSGl0IiwiYXR0YWNrIiwiZW5lbXkiLCJtb3ZlIiwiY29tcHV0ZXJBdHRhY2siLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TcXVhcmUiLCJTaGlwIiwib3JpZW50IiwiaGl0cyIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciJdLCJzb3VyY2VSb290IjoiIn0=