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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-size: 1rem;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game .player {\n  display: flex;\n}\n.container.game .container.gameboard {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .container.gameboard > div {\n  display: grid;\n}\n.container.game .container.gameboard .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .container.ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.container.game .container.ships .ship:hover {\n  background-color: #6b6b6b;\n}\n.container.game .container.ships .ship {\n  background-color: #e6e6e6;\n  border: 0.2px solid #6b6b6b;\n  border-radius: 50%;\n}\n.container.game .container.ships .destroyer {\n  height: calc(var(--base-size) * 0.7);\n  width: calc(var(--base-size) * 2);\n}\n.container.game .container.ships .submarine {\n  height: calc(var(--base-size) * 0.7);\n  width: calc(var(--base-size) * 3);\n}\n.container.game .container.ships .cruiser {\n  height: calc(var(--base-size) * 0.7);\n  width: calc(var(--base-size) * 3);\n}\n.container.game .container.ships .battleship {\n  height: calc(var(--base-size) * 0.9);\n  width: calc(var(--base-size) * 4);\n}\n.container.game .container.ships .carrier {\n  height: calc(var(--base-size) * 1);\n  width: calc(var(--base-size) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;AC3BA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AD4BF;;AC1BA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AD6BF;;AC3BA;EACE,cAAA;AD8BF;;AC5BA;;EAEE,gBAAA;AD+BF;;AC7BA;;EAEE,YAAA;ADgCF;;AC9BA;;;;EAIE,WAAA;EACA,aAAA;ADiCF;;AC/BA;EACE,yBAAA;EACA,iBAAA;ADkCF;;AC/BA,kBAAA;AD/HA;EACE,iBAAA;AAkKF;;AA/JA,WAAA;AASA,UAAA;AAKA,WAAA;AAkBA;EACE,sBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,cApCW;AAwKb;;AAlIA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAqIF;;AAnIA,WAAA;AACA;EACE,8CAAA;EACA,mBAAA;EACA,aApBc;EAqBd,yBA/CgB;AAqLlB;AArIE;EACE,qBAAA;EAEA,gBAAA;EACA,oBAAA;EACA,iBAnDc;AAyLlB;;AAlIA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAqIF;;AAnIA;EACE,aAAA;EACA,sBAAA;EACA,SAzCc;EA0Cd,aA5Cc;EA6Cd,qBAhDoB;EAiDpB,gCAAA;AAsIF;AApIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WA9De;AAoMnB;;AAnIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAlEY;AAwMd;AArIE;EACE,aAAA;AAuIJ;AArIE;EACE,WAAA;EACA,iBAAA;AAuIJ;AAtII;EACE,aAAA;AAwIN;AAtII;EACE,uCAAA;AAwIN;AArIE;EAKE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAmIJ;AAlII;EACE,yBARa;AA4InB;AAlII;EACE,yBAZM;EAaN,2BAAA;EACA,kBAZc;AAgJpB;AAlII;EACE,oCAAA;EACA,iCAAA;AAoIN;AAlII;EACE,oCAAA;EACA,iCAAA;AAoIN;AAlII;EACE,oCAAA;EACA,iCAAA;AAoIN;AAlII;EACE,oCAAA;EACA,iCAAA;AAoIN;AAlII;EACE,kCAAA;EACA,iCAAA;AAoIN;;AAhIA,WAAA;AACA;EACE,8CAAA;EACA,eAjHgB;EAkHhB,aAAA;EACA,uBAAA;EACA,yBA/IgB;AAkRlB;;AAhIA,oBAAA;AAEA;EACE,qBAhIoB;EAiIpB,yBAAA;EACA,eA5HgB;AA8PlB;;AAhIA;EACE,YAAA;AAmIF;;AAjIA;EACE,wBAAA;AAoIF","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-size: 1rem;\n}\n\n/* colors */\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #58b19f;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  section {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $extra-small-size;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  .player {\n    display: flex;\n  }\n  .container.gameboard {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .container.ships {\n    $base-size: var(--base-size);\n    $color: #e6e6e6;\n    $border-color: #6b6b6b;\n    $border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $color;\n      border: 0.2px solid $border-color;\n      border-radius: $border-radius;\n    }\n    .destroyer {\n      height: calc($base-size * 0.7);\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: calc($base-size * 0.7);\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: calc($base-size * 0.7);\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: calc($base-size * 0.9);\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: calc($base-size * 1);\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
      gameboard: {
        container: container.querySelector('.left.gameboard')
      },
      ships: {
        container: container.querySelector('.container.ships.left'),
        destroyer: 'destroyer',
        submarine: 'submarine',
        cruiser: 'cruiser',
        battleship: 'battleship',
        carrier: 'carrier'
      }
    },
    rightPlayer: {
      container: container.querySelector('.right.player'),
      gameboard: {
        container: container.querySelector('.right.gameboard')
      },
      ships: {
        container: container.querySelector('.container.ships.right'),
        destroyer: 'destroyer',
        submarine: 'submarine',
        cruiser: 'cruiser',
        battleship: 'battleship',
        carrier: 'carrier'
      }
    }
  };
}();

/***/ }),

/***/ "./src/components/gameLoop.js":
/*!************************************!*\
  !*** ./src/components/gameLoop.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/dom.js */ "./src/components/dom.js");
/* harmony import */ var _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/player.js */ "./src/components/player.js");




var Gameloop = function () {
  var processForm = function () {
    var options = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.options;
    var players = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.players;
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
        initiateGame(getFormInput(players, options));
        _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container.reset();
      } else {
        for (var _player in players) {
          displayError(players[_player]);
        }
      }
    });
  }();
  var initiateGame = function initiateGame(obj) {
    hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
    var gameContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.container;
    var leftContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.leftPlayer.gameboard.container;
    var rightContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.rightPlayer.gameboard.container;
    var leftShipContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.leftPlayer.ships.container;
    var rightShipContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.rightPlayer.ships.container;
    var players = {
      playerOne: new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.firstName),
      playerTwo: function playerTwo() {
        if (obj.computerOption) {
          return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Computer', true);
        } else {
          return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.secondName, false);
        }
      }
    };
    var gameboards = {
      gameboardOne: players.playerOne.attachGameboard(obj.gameboardSize),
      gameboardTwo: players.playerTwo().attachGameboard(obj.gameboardSize)
    };
    var createGameboardEl = function createGameboardEl(gameboard) {
      var gridContainer = document.createElement('div');
      gridContainer.style.gridTemplateRows = "repeat(".concat(obj.gameboardSize, ", 1fr)");
      gridContainer.style.gridTemplateColumns = "repeat(".concat(obj.gameboardSize, ", 1fr)");
      for (var _i = 0, _Object$keys = Object.keys(gameboard.squares); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.dataset.id = ["".concat(key)];
        gridContainer.append(squareEl);
        gridContainer.style.height = "100%";
        gridContainer.style.width = "100%";
      }
      return gridContainer;
    };
    leftContainer.append(createGameboardEl(gameboards.gameboardOne));
    rightContainer.append(createGameboardEl(gameboards.gameboardTwo));
    showElement(gameContainer);
    var squareHeight = document.querySelector("[data-id=\"0,0\"]").offsetHeight;

    // set ship size
    document.documentElement.style.setProperty('--base-size', "".concat(squareHeight, "px"));
  };
  // UTILITY FUNCTIONS
  var hideElement = function hideElement(container) {
    container.classList.add('hide');
  };
  var showElement = function showElement(container) {
    container.classList.remove('hide');
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
  return {
    squares: {},
    ships: new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
    createBoard: function createBoard() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      this.size = size;
      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
          this.squares["".concat([i, j])] = {
            isHit: false,
            occupies: null
          };
        }
      }
      return this.squares;
    },
    placeShip: function placeShip(shipName, squareStr) {
      var newOrient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'v';
      var ship = this.ships[shipName];
      var squares = this.squares;
      var squareId = squareStr.split(',').map(function (el) {
        return Number(el);
      });
      var shipSize = ship.size;
      var shipOrient = ship.orient = newOrient;
      var isPlacementValid = function isPlacementValid(start, ship) {
        if (shipOrient === 'v') {
          for (var i = 0; i < ship.size; i++) {
            var _squares$neighbourStr;
            var neighbourStr = [start[0], start[1] + i].join();
            if ((_squares$neighbourStr = squares[neighbourStr]) !== null && _squares$neighbourStr !== void 0 && _squares$neighbourStr.occupies) {
              return false;
            }
          }
          return true;
        }
        if (shipOrient === 'h') {
          for (var _i = 0; _i < ship.size; _i++) {
            var _squares$_neighbourSt;
            var _neighbourStr = [start[0] + _i, start[1]].join();
            if (!squares[_neighbourStr]) {
              return false;
            } else if ((_squares$_neighbourSt = squares[_neighbourStr]) !== null && _squares$_neighbourSt !== void 0 && _squares$_neighbourSt.occupies) {
              return false;
            }
          }
          return true;
        }
      };
      var placeShipVertically = function placeShipVertically() {
        for (var i = 0; i < shipSize; i++) {
          var neighbour = [squareId[0], squareId[1] + i];
          var neighbourStr = neighbour.join();
          squares[neighbourStr].occupies = ship;
        }
      };
      var placeShipHorizontally = function placeShipHorizontally() {
        for (var i = 0; i < shipSize; i++) {
          var neighbour = [squareId[0] + i, squareId[1]];
          var neighbourStr = neighbour.join();
          squares[neighbourStr].occupies = ship;
        }
      };
      if (isPlacementValid(squareId, ship)) {
        if (shipOrient === 'v') {
          placeShipVertically(squareId, shipSize, squares);
        } else if (shipOrient === 'h') {
          placeShipHorizontally(squareId, shipSize, squares);
        }
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
  return {
    name: name,
    isComputer: isComputer,
    previousHit: false,
    attachGameboard: function attachGameboard(size) {
      this.Gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.Gameboard.createBoard(size);
      return this.Gameboard;
    },
    attack: function attack(enemy, move) {
      return enemy.Gameboard.receiveAttack(move);
    },
    computerAttack: function computerAttack(enemy) {
      var _this = this;
      var gameboardSize = this.Gameboard.size;
      var randomNumber = function randomNumber(gameboardSize) {
        return Math.floor(Math.random() * gameboardSize);
      };
      var randomSquare = function randomSquare() {
        var _this$Gameboard$squar;
        var square = "".concat(randomNumber(gameboardSize), ",").concat(randomNumber(gameboardSize));
        _this.Gameboard.squares[square];
        if (((_this$Gameboard$squar = _this.Gameboard.squares[square]) === null || _this$Gameboard$squar === void 0 ? void 0 : _this$Gameboard$squar.isHit) === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      return enemy.Gameboard.receiveAttack(randomSquare());
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
/* harmony import */ var _components_gameLoop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gameLoop.js */ "./src/components/gameLoop.js");
/* harmony import */ var _stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/style.scss */ "./src/stylesheets/style.scss");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FrQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVMb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXNpemU6IDFyZW07XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuY29udGFpbmVyLmdhbWVib2FyZCB7XFxuICB3aWR0aDogMzB2dztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmNvbnRhaW5lci5nYW1lYm9hcmQgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250YWluZXIuZ2FtZWJvYXJkIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmNvbnRhaW5lci5zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250YWluZXIuc2hpcHMgLnNoaXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250YWluZXIuc2hpcHMgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIGJvcmRlcjogMC4ycHggc29saWQgIzZiNmI2YjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250YWluZXIuc2hpcHMgLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS1zaXplKSAqIDAuNyk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1iYXNlLXNpemUpICogMik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuY29udGFpbmVyLnNoaXBzIC5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2Utc2l6ZSkgKiAwLjcpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tYmFzZS1zaXplKSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmNvbnRhaW5lci5zaGlwcyAuY3J1aXNlciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS1zaXplKSAqIDAuNyk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1iYXNlLXNpemUpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuY29udGFpbmVyLnNoaXBzIC5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXNpemUpICogMC45KTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWJhc2Utc2l6ZSkgKiA0KTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250YWluZXIuc2hpcHMgLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2Utc2l6ZSkgKiAxKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWJhc2Utc2l6ZSkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QUMzQkE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FENEJGOztBQzFCQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUQ2QkY7O0FDM0JBO0VBQ0UsY0FBQTtBRDhCRjs7QUM1QkE7O0VBRUUsZ0JBQUE7QUQrQkY7O0FDN0JBOztFQUVFLFlBQUE7QURnQ0Y7O0FDOUJBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QURpQ0Y7O0FDL0JBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRGtDRjs7QUMvQkEsa0JBQUE7QUQvSEE7RUFDRSxpQkFBQTtBQWtLRjs7QUEvSkEsV0FBQTtBQVNBLFVBQUE7QUFLQSxXQUFBO0FBa0JBO0VBQ0Usc0JBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FwQ1c7QUF3S2I7O0FBbElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFxSUY7O0FBbklBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQXBCYztFQXFCZCx5QkEvQ2dCO0FBcUxsQjtBQXJJRTtFQUNFLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQW5EYztBQXlMbEI7O0FBbElBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFxSUY7O0FBbklBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0F6Q2M7RUEwQ2QsYUE1Q2M7RUE2Q2QscUJBaERvQjtFQWlEcEIsZ0NBQUE7QUFzSUY7QUFwSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBOURlO0FBb01uQjs7QUFuSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBbEVZO0FBd01kO0FBcklFO0VBQ0UsYUFBQTtBQXVJSjtBQXJJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQXVJSjtBQXRJSTtFQUNFLGFBQUE7QUF3SU47QUF0SUk7RUFDRSx1Q0FBQTtBQXdJTjtBQXJJRTtFQUtFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBbUlKO0FBbElJO0VBQ0UseUJBUmE7QUE0SW5CO0FBbElJO0VBQ0UseUJBWk07RUFhTiwyQkFBQTtFQUNBLGtCQVpjO0FBZ0pwQjtBQWxJSTtFQUNFLG9DQUFBO0VBQ0EsaUNBQUE7QUFvSU47QUFsSUk7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0FBb0lOO0FBbElJO0VBQ0Usb0NBQUE7RUFDQSxpQ0FBQTtBQW9JTjtBQWxJSTtFQUNFLG9DQUFBO0VBQ0EsaUNBQUE7QUFvSU47QUFsSUk7RUFDRSxrQ0FBQTtFQUNBLGlDQUFBO0FBb0lOOztBQWhJQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLGVBakhnQjtFQWtIaEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBL0lnQjtBQWtSbEI7O0FBaElBLG9CQUFBO0FBRUE7RUFDRSxxQkFoSW9CO0VBaUlwQix5QkFBQTtFQUNBLGVBNUhnQjtBQThQbEI7O0FBaElBO0VBQ0UsWUFBQTtBQW1JRjs7QUFqSUE7RUFDRSx3QkFBQTtBQW9JRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQlVOVFUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsXCJAdXNlICcuL2ZvbnRzLmNzcyc7XFxuQHVzZSAnLi9yZXNldC1zdHlsZXMuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLWJhc2Utc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjNThiMTlmO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGV4dHJhLXNtYWxsLXNpemU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICAucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jb250YWluZXIuZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxuICAgIH1cXG4gIH1cXG4gIC5jb250YWluZXIuc2hpcHMge1xcbiAgICAkYmFzZS1zaXplOiB2YXIoLS1iYXNlLXNpemUpO1xcbiAgICAkY29sb3I6ICNlNmU2ZTY7XFxuICAgICRib3JkZXItY29sb3I6ICM2YjZiNmI7XFxuICAgICRib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxuICAgICAgYm9yZGVyOiAwLjJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogY2FsYygkYmFzZS1zaXplICogMC43KTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKCRiYXNlLXNpemUgKiAwLjcpO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKCRiYXNlLXNpemUgKiAwLjcpO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKCRiYXNlLXNpemUgKiAwLjkpO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKCRiYXNlLXNpemUgKiAxKTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUgfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvcHRpb25Db21wdXRlcjoge1xuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24uY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIG9wdGlvblNpemU6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbGF5ZXJzOiB7XG4gICAgICBwbGF5ZXJPbmU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQub25lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9uZSA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIHBsYXllclR3bzoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC50d28nKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudHdvID4gLmVycm9yJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogeyBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5nYW1lYm9hcmQnKSB9LFxuICAgICAgc2hpcHM6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci5zaGlwcy5sZWZ0JyksXG4gICAgICAgIGRlc3Ryb3llcjogJ2Rlc3Ryb3llcicsXG4gICAgICAgIHN1Ym1hcmluZTogJ3N1Ym1hcmluZScsXG4gICAgICAgIGNydWlzZXI6ICdjcnVpc2VyJyxcbiAgICAgICAgYmF0dGxlc2hpcDogJ2JhdHRsZXNoaXAnLFxuICAgICAgICBjYXJyaWVyOiAnY2FycmllcicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogeyBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQuZ2FtZWJvYXJkJykgfSxcbiAgICAgIHNoaXBzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIuc2hpcHMucmlnaHQnKSxcbiAgICAgICAgZGVzdHJveWVyOiAnZGVzdHJveWVyJyxcbiAgICAgICAgc3VibWFyaW5lOiAnc3VibWFyaW5lJyxcbiAgICAgICAgY3J1aXNlcjogJ2NydWlzZXInLFxuICAgICAgICBiYXR0bGVzaGlwOiAnYmF0dGxlc2hpcCcsXG4gICAgICAgIGNhcnJpZXI6ICdjYXJyaWVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGZvcm0sIGdhbWUgfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5cbmNvbnN0IEdhbWVsb29wID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvY2Vzc0Zvcm0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmb3JtLm9wdGlvbnM7XG4gICAgY29uc3QgcGxheWVycyA9IGZvcm0ucGxheWVycztcbiAgICBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb250YWluZXIsIG1zZykge1xuICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVQTGF5ZXJUd28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5U2xpZGVyVmFsdWUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRGb3JtSW5wdXQgPSBmdW5jdGlvbiAocGxheWVycywgb3B0aW9ucykge1xuICAgICAgY29uc3QgZmlyc3ROYW1lID0gcGxheWVycy5wbGF5ZXJPbmUuaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBzZWNvbmROYW1lID0gcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBjb21wdXRlck9wdGlvbiA9IG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuY2hlY2tlZDtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSBvcHRpb25zLm9wdGlvblNpemUuaW5wdXQudmFsdWU7XG5cbiAgICAgIHJldHVybiB7IGZpcnN0TmFtZSwgc2Vjb25kTmFtZSwgY29tcHV0ZXJPcHRpb24sIGdhbWVib2FyZFNpemUgfTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlFcnJvciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIHNob3dFcnJvcihwbGF5ZXIuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgdG9nZ2xlUExheWVyVHdvKCk7XG4gICAgfSk7XG4gICAgb3B0aW9ucy5vcHRpb25TaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dCwgb3B0aW9ucy5vcHRpb25TaXplLm91dHB1dCk7XG4gICAgfSk7XG4gICAgZm9ybS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9yIChsZXQgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQocGxheWVyc1twbGF5ZXJdLmVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVycy5wbGF5ZXJPbmUuaW5wdXQudmFsaWRpdHkudmFsaWQgJiZcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsaWRpdHkudmFsaWRcbiAgICAgICkge1xuICAgICAgICBpbml0aWF0ZUdhbWUoZ2V0Rm9ybUlucHV0KHBsYXllcnMsIG9wdGlvbnMpKTtcbiAgICAgICAgZm9ybS5jb250YWluZXIucmVzZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHBsYXllcnNbcGxheWVyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgaW5pdGlhdGVHYW1lID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBnYW1lLmNvbnRhaW5lcjtcbiAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZ2FtZS5sZWZ0UGxheWVyLmdhbWVib2FyZC5jb250YWluZXI7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBnYW1lLnJpZ2h0UGxheWVyLmdhbWVib2FyZC5jb250YWluZXI7XG4gICAgY29uc3QgbGVmdFNoaXBDb250YWluZXIgPSBnYW1lLmxlZnRQbGF5ZXIuc2hpcHMuY29udGFpbmVyO1xuICAgIGNvbnN0IHJpZ2h0U2hpcENvbnRhaW5lciA9IGdhbWUucmlnaHRQbGF5ZXIuc2hpcHMuY29udGFpbmVyO1xuICAgIGNvbnN0IHBsYXllcnMgPSB7XG4gICAgICBwbGF5ZXJPbmU6IG5ldyBQbGF5ZXIob2JqLmZpcnN0TmFtZSksXG4gICAgICBwbGF5ZXJUd286ICgpID0+IHtcbiAgICAgICAgaWYgKG9iai5jb21wdXRlck9wdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5zZWNvbmROYW1lLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0ge1xuICAgICAgZ2FtZWJvYXJkT25lOiBwbGF5ZXJzLnBsYXllck9uZS5hdHRhY2hHYW1lYm9hcmQob2JqLmdhbWVib2FyZFNpemUpLFxuICAgICAgZ2FtZWJvYXJkVHdvOiBwbGF5ZXJzLnBsYXllclR3bygpLmF0dGFjaEdhbWVib2FyZChvYmouZ2FtZWJvYXJkU2l6ZSksXG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVHYW1lYm9hcmRFbCA9IGZ1bmN0aW9uIChnYW1lYm9hcmQpIHtcbiAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGdyaWRDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtvYmouZ2FtZWJvYXJkU2l6ZX0sIDFmcilgO1xuICAgICAgZ3JpZENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke29iai5nYW1lYm9hcmRTaXplfSwgMWZyKWA7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICBncmlkQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgZ3JpZENvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG4gICAgfTtcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZEVsKGdhbWVib2FyZHMuZ2FtZWJvYXJkT25lKSk7XG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZEVsKGdhbWVib2FyZHMuZ2FtZWJvYXJkVHdvKSk7XG4gICAgc2hvd0VsZW1lbnQoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3Qgc3F1YXJlSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIwLDBcIl1gKS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvLyBzZXQgc2hpcCBzaXplXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgJy0tYmFzZS1zaXplJyxcbiAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgKTtcbiAgfTtcbiAgLy8gVVRJTElUWSBGVU5DVElPTlNcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgc3F1YXJlczoge30sXG4gICAgc2hpcHM6IG5ldyBTaGlwcygpLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tpLCBqXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5zcXVhcmVzO1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICAgIGNvbnN0IHNoaXBTaXplID0gc2hpcC5zaXplO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IChzaGlwLm9yaWVudCA9IG5ld09yaWVudCk7XG5cbiAgICAgIGNvbnN0IGlzUGxhY2VtZW50VmFsaWQgPSBmdW5jdGlvbiAoc3RhcnQsIHNoaXApIHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzdGFydFswXSwgc3RhcnRbMV0gKyBpXS5qb2luKCk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3RhcnRbMF0gKyBpLCBzdGFydFsxXV0uam9pbigpO1xuICAgICAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBwbGFjZVNoaXBWZXJ0aWNhbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV07XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV07XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGlzUGxhY2VtZW50VmFsaWQoc3F1YXJlSWQsIHNoaXApKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBwbGFjZVNoaXBWZXJ0aWNhbGx5KHNxdWFyZUlkLCBzaGlwU2l6ZSwgc3F1YXJlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNxdWFyZUlkLCBzaGlwU2l6ZSwgc3F1YXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNba2V5XS5pc1N1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSwgaXNDb21wdXRlciA9IGZhbHNlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpc0NvbXB1dGVyOiBpc0NvbXB1dGVyLFxuICAgIHByZXZpb3VzSGl0OiBmYWxzZSxcbiAgICBhdHRhY2hHYW1lYm9hcmQoc2l6ZSkge1xuICAgICAgdGhpcy5HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICB0aGlzLkdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICAgIHJldHVybiB0aGlzLkdhbWVib2FyZDtcbiAgICB9LFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLkdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuR2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuR2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgLy8gc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvcmllbnQ6ICd2JyxcbiAgICBoaXRzOiAwLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiksXG4gICAgc3VibWFyaW5lOiBuZXcgU2hpcCgzKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzKSxcbiAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lTG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiZm9ybSIsImdhbWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJvcHRpb25Db21wdXRlciIsImlucHV0Iiwib3B0aW9uU2l6ZSIsIm91dHB1dCIsInBsYXllcnMiLCJwbGF5ZXJPbmUiLCJlcnJvciIsInBsYXllclR3byIsImxlZnRQbGF5ZXIiLCJnYW1lYm9hcmQiLCJzaGlwcyIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciIsInJpZ2h0UGxheWVyIiwiUGxheWVyIiwiR2FtZWxvb3AiLCJwcm9jZXNzRm9ybSIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJ0b2dnbGVQTGF5ZXJUd28iLCJjaGVja2VkIiwiYWRkIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImdldEZvcm1JbnB1dCIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJjb21wdXRlck9wdGlvbiIsImdhbWVib2FyZFNpemUiLCJkaXNwbGF5RXJyb3IiLCJwbGF5ZXIiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoaWRlRWxlbWVudCIsInZhbGlkIiwiaW5pdGlhdGVHYW1lIiwicmVzZXQiLCJvYmoiLCJnYW1lQ29udGFpbmVyIiwibGVmdENvbnRhaW5lciIsInJpZ2h0Q29udGFpbmVyIiwibGVmdFNoaXBDb250YWluZXIiLCJyaWdodFNoaXBDb250YWluZXIiLCJnYW1lYm9hcmRzIiwiZ2FtZWJvYXJkT25lIiwiYXR0YWNoR2FtZWJvYXJkIiwiZ2FtZWJvYXJkVHdvIiwiY3JlYXRlR2FtZWJvYXJkRWwiLCJncmlkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwic3F1YXJlcyIsImtleSIsInNxdWFyZUVsIiwiZGF0YXNldCIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwic2hvd0VsZW1lbnQiLCJzcXVhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsIlNoaXBzIiwiR2FtZWJvYXJkIiwiY3JlYXRlQm9hcmQiLCJzaXplIiwiaiIsImlzSGl0Iiwib2NjdXBpZXMiLCJwbGFjZVNoaXAiLCJzaGlwTmFtZSIsInNxdWFyZVN0ciIsIm5ld09yaWVudCIsInNoaXAiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJzaGlwU2l6ZSIsInNoaXBPcmllbnQiLCJvcmllbnQiLCJpc1BsYWNlbWVudFZhbGlkIiwic3RhcnQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwicmVjZWl2ZUF0dGFjayIsInNxdWFyZUlkU3RyIiwic3F1YXJlIiwiaGl0IiwibmFtZSIsImlzQ29tcHV0ZXIiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tU3F1YXJlIiwiU2hpcCIsImhpdHMiXSwic291cmNlUm9vdCI6IiJ9