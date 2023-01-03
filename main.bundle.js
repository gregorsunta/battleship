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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container > .ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container > .ships .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container > .ships .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n}\n.container.game .ships.container > .ships .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container > .ships .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container > .ships .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.checked {\n  background-color: #6b8eb0;\n}\n\n.placed {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;AC3BA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AD4BF;;AC1BA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AD6BF;;AC3BA;EACE,cAAA;AD8BF;;AC5BA;;EAEE,gBAAA;AD+BF;;AC7BA;;EAEE,YAAA;ADgCF;;AC9BA;;;;EAIE,WAAA;EACA,aAAA;ADiCF;;AC/BA;EACE,yBAAA;EACA,iBAAA;ADkCF;;AC/BA,kBAAA;AD/HA;EACE,sBAAA;AAkKF;;AA/JA,WAAA;AAYA,UAAA;AAKA,WAAA;AAkBA;EACE,sBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,cArCW;AAsKb;;AA/HA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAkIF;;AAhIA,WAAA;AACA;EACE,8CAAA;EACA,mBAAA;EACA,aApBc;EAqBd,yBAhDgB;AAmLlB;AAlIE;EACE,qBAAA;EAEA,gBAAA;EACA,oBAAA;EACA,iBApDc;AAuLlB;;AA/HA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAkIF;;AAhIA;EACE,aAAA;EACA,sBAAA;EACA,SAzCc;EA0Cd,aA5Cc;EA6Cd,qBAhDoB;EAiDpB,gCAAA;AAmIF;AAjIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WA9De;AAiMnB;;AAhIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAlEY;AAqMd;AAlIE;EACE,aAAA;AAoIJ;AAlIE;EACE,WAAA;EACA,iBAAA;AAoIJ;AAnII;EACE,aAAA;AAqIN;AAnII;EACE,uCAAA;AAqIN;AAlIE;EAME,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,wBAAA;AA+HJ;AA9HI;EACE,yBAzGC;AAyOP;AA9HI;EACE,yBAjHY;EAkHZ,yBAAA;EACA,kBAbc;AA6IpB;AA9HI;EACE,yCAnBU;EAoBV,8CAAA;AAgIN;AA9HI;EACE,yCAvBU;EAwBV,8CAAA;AAgIN;AA9HI;EACE,yCA3BU;EA4BV,8CAAA;AAgIN;AA9HI;EACE,yCA/BU;EAgCV,8CAAA;AAgIN;AA9HI;EACE,yCAnCU;EAoCV,8CAAA;AAgIN;;AA5HA,WAAA;AACA;EACE,8CAAA;EACA,eAnHgB;EAoHhB,aAAA;EACA,uBAAA;EACA,yBAlJgB;AAiRlB;;AA5HA,oBAAA;AAEA;EACE,qBAlIoB;EAmIpB,yBAAA;EACA,eA9HgB;AA4PlB;;AA5HA;EACE,YAAA;AA+HF;;AA7HA;EACE,wBAAA;AAgIF;;AA9HA;EACE,yBAAA;AAiIF;;AA/HA;EACE,yBAAA;AAkIF;;AAhIA;EACE,YAAA;AAmIF","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  section {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $extra-small-size;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container > .ships {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.checked {\n  background-color: #6b8eb0;\n}\n.placed {\n  opacity: 0.5;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
  var checkPlacement = function checkPlacement(start, ship, shipOrient) {
    if (ship.placed) {
      return {
        elements: null,
        valid: false
      };
    }
    if (shipOrient === 'v') {
      var elements = [];
      for (var i = 0; i < ship.size; i++) {
        var _squares$neighbourStr;
        var neighbourStr = [start[0], start[1] + i].join();
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
      for (var _i = 0; _i < ship.size; _i++) {
        var _squares$_neighbourSt;
        var _neighbourStr = [start[0] + _i, start[1]].join();
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
  };
  var placeShipVertically = function placeShipVertically(square, ship) {
    var selectedSquares = [];
    for (var i = 0; i < ship.size; i++) {
      var neighbour = [square[0], square[1] + i];
      var neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  var placeShipHorizontally = function placeShipHorizontally(square, ship) {
    var selectedSquares = [];
    for (var i = 0; i < ship.size; i++) {
      var neighbour = [square[0] + i, square[1]];
      var neighbourStr = neighbour.join();
      squares[neighbourStr].occupies = ship;
      selectedSquares.push(neighbourStr);
    }
    return selectedSquares;
  };
  return {
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
      if ((_checkPlacement = checkPlacement(squareId, ship, newOrient)) !== null && _checkPlacement !== void 0 && _checkPlacement.valid) {
        if (shipOrient === 'v') {
          ship.placed = true;
          return placeShipVertically(squareId, ship, shipOrient);
        } else if (shipOrient === 'h') {
          ship.placed = true;
          return placeShipHorizontally(squareId, ship, shipOrient);
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
  var processForm = function () {
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
          initiateGame(getFormInput(players, options));
          _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container.reset();
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
  }();
  var initiateGame = function initiateGame(leftObj, rightObj) {
    var gameContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.container;
    var leftPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.leftPlayer;
    var rightPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.rightPlayer;
    var players = createPlayers(leftObj, rightObj);
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
          squareEl.dataset.owner = ["".concat(player.player.name)];
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
          shipEl.dataset.owner = "".concat(player.player.name);
          ships.append(shipEl);
        }
        ships.classList.add('ships');
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
    var leftElements = createGameElements(players.leftPlayer);
    var rightElements = createGameElements(players.rightPlayer);
    var elements = {
      leftElements: leftElements,
      rightElements: rightElements
    };
    leftPlayer.gameboard.append(leftElements.gridContainer);
    leftPlayer.ships.append(leftElements.shipContainer);
    rightPlayer.gameboard.append(rightElements.gridContainer);
    rightPlayer.ships.append(rightElements.shipContainer);
    hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
    showElement(gameContainer);
    setBaseUnitSize();
    return {
      players: players,
      elements: elements
    };
    // showElement(document.querySelector(`[data-id="0,0"]`));
  };

  var enableShipPlacement = function enableShipPlacement(selectedPlayer, playerElements) {
    var player = selectedPlayer;
    var elements = playerElements;
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
      var _loop = function _loop() {
        var square = _Object$values3[_i5];
        square.addEventListener('dragover', function (e) {
          e.preventDefault();
        });
        square.addEventListener('dragenter', function (e) {
          e.preventDefault();
          e.target.classList.add('hover');
        });
        square.addEventListener('dragleave', function (e) {
          e.preventDefault();
          e.target.classList.remove('hover');
        });
        square.addEventListener('drop', function (e) {
          e.target.classList.remove('hover');
          e.preventDefault();
          var selectedSquares = player.gameboard.placeShip(e.dataTransfer.mozSourceNode.dataset.type, square.dataset.id);
          if (selectedSquares) {
            e.dataTransfer.mozSourceNode.classList.add('placed');
            e.dataTransfer.mozSourceNode.setAttribute('draggable', false);
            var _iterator = _createForOfIteratorHelper(selectedSquares),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var squareStr = _step.value;
                elements.gridContainer.querySelector("[data-id=\"".concat(squareStr, "\"]")).classList.add('checked');
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            e.target.classList.add('checked');
          } else {
            // show some error
          }
        });
      };
      for (var _i5 = 0, _Object$values3 = Object.values(grid); _i5 < _Object$values3.length; _i5++) {
        _loop();
      }
    };
    enableDraggable(elements.shipContainer.querySelectorAll('.ship'));
    addShipEventListener(elements.shipContainer.querySelectorAll('.ship'));
    addGridEventListener(elements.gridContainer.querySelectorAll('.square'));
  };
  // UTILITY FUNCTIONS
  var hideElement = function hideElement(container) {
    container.classList.add('hide');
  };
  var showElement = function showElement(container) {
    container.classList.remove('hide');
  };
  var createPlayer = function createPlayer(obj) {
    if (obj.computerOption) {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Computer', true);
    } else {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.name, false);
    }
  };
  var createPlayers = function createPlayers(leftObj, rightObj) {
    var leftPlayer = createPlayer(leftObj);
    var rightPlayer = createPlayer(rightObj);
    return {
      leftPlayer: {
        player: leftPlayer,
        gameboard: leftPlayer.attachGameboard(leftObj.gameboardSize)
      },
      rightPlayer: {
        player: rightPlayer,
        gameboard: leftPlayer.attachGameboard(rightObj.gameboardSize)
      }
    };
  };
  return {
    initiateGame: initiateGame,
    processForm: processForm,
    enableShipPlacement: enableShipPlacement
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



var customLeftObj = {
  leftName: 'Gregor',
  computerOption: false,
  gameboardSize: '10'
};
var customRightObj = {
  rightName: '',
  computerOption: true,
  gameboardSize: '10'
};
var game = _components_gameloop_js__WEBPACK_IMPORTED_MODULE_0__["default"].initiateGame(customLeftObj, customRightObj);
_components_gameloop_js__WEBPACK_IMPORTED_MODULE_0__["default"].enableShipPlacement(game.players.rightPlayer, game.elements.rightElements);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3lGLGFBQWEsQ0FDNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ZWIwO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QUMzQkE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FENEJGOztBQzFCQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUQ2QkY7O0FDM0JBO0VBQ0UsY0FBQTtBRDhCRjs7QUM1QkE7O0VBRUUsZ0JBQUE7QUQrQkY7O0FDN0JBOztFQUVFLFlBQUE7QURnQ0Y7O0FDOUJBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QURpQ0Y7O0FDL0JBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRGtDRjs7QUMvQkEsa0JBQUE7QUQvSEE7RUFDRSxzQkFBQTtBQWtLRjs7QUEvSkEsV0FBQTtBQVlBLFVBQUE7QUFLQSxXQUFBO0FBa0JBO0VBQ0Usc0JBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyQ1c7QUFzS2I7O0FBL0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFrSUY7O0FBaElBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQXBCYztFQXFCZCx5QkFoRGdCO0FBbUxsQjtBQWxJRTtFQUNFLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQXBEYztBQXVMbEI7O0FBL0hBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFrSUY7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0F6Q2M7RUEwQ2QsYUE1Q2M7RUE2Q2QscUJBaERvQjtFQWlEcEIsZ0NBQUE7QUFtSUY7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBOURlO0FBaU1uQjs7QUFoSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBbEVZO0FBcU1kO0FBbElFO0VBQ0UsYUFBQTtBQW9JSjtBQWxJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQW9JSjtBQW5JSTtFQUNFLGFBQUE7QUFxSU47QUFuSUk7RUFDRSx1Q0FBQTtBQXFJTjtBQWxJRTtFQU1FLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUErSEo7QUE5SEk7RUFDRSx5QkF6R0M7QUF5T1A7QUE5SEk7RUFDRSx5QkFqSFk7RUFrSFoseUJBQUE7RUFDQSxrQkFiYztBQTZJcEI7QUE5SEk7RUFDRSx5Q0FuQlU7RUFvQlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0F2QlU7RUF3QlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0EzQlU7RUE0QlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0EvQlU7RUFnQ1YsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0FuQ1U7RUFvQ1YsOENBQUE7QUFnSU47O0FBNUhBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsZUFuSGdCO0VBb0hoQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFsSmdCO0FBaVJsQjs7QUE1SEEsb0JBQUE7QUFFQTtFQUNFLHFCQWxJb0I7RUFtSXBCLHlCQUFBO0VBQ0EsZUE5SGdCO0FBNFBsQjs7QUE1SEE7RUFDRSxZQUFBO0FBK0hGOztBQTdIQTtFQUNFLHdCQUFBO0FBZ0lGOztBQTlIQTtFQUNFLHlCQUFBO0FBaUlGOztBQS9IQTtFQUNFLHlCQUFBO0FBa0lGOztBQWhJQTtFQUNFLFlBQUE7QUFtSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVUJVTlRVICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLFwiQHVzZSAnLi9mb250cy5jc3MnO1xcbkB1c2UgJy4vcmVzZXQtc3R5bGVzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJGhpZ2hsaWdodDogI2ZmY2NjYztcXG5cXG4kbWFpbi1jb2xvcjogIzJjM2E0NztcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTFmOWY0O1xcbiRoaWdobGlnaHQtY29sb3I6ICNmZmNjY2M7XFxuJGxhcmdlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiRmb250LXNpemU6IDFyZW07XFxuJHNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcbiRmYWRlLWNvbG9yOiAjZTZlNmU2O1xcbiRncmF5OiAjNGI0YjRiO1xcblxcbi8qIGljb25zICovXFxuJGljb24tc2l6ZTogMS4ycmVtO1xcbiRzbWFsbC1pY29uLXNpemU6IDFyZW07XFxuJHNtYWxsZXItaWNvbi1zaXplOiAwLjhyZW07XFxuXFxuLyogbGF5b3V0ICovXFxuLy8gc2l6ZVxcbiRleHRyYS1zbWFsbC1zaXplOiAwLjhyZW07XFxuJHNtYWxsZXItc2l6ZTogMXJlbTtcXG4kc21hbGwtc2l6ZTogMnJlbTtcXG4kY29tbW9uLXNpemU6IDNyZW07XFxuJGxhcmdlLXNpemU6IDRyZW07XFxuLy8gcmFkaXVzXFxuJGNvbW1vbi1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiRzbWFsbC1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuJHNtYWxsZXItYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4vLyBwYWRkaW5nXFxuJGxhcmdlLXBhZGRpbmc6IDRyZW07XFxuJGNvbW1vbi1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbC1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbGVyLXBhZGRpbmc6IDAuNXJlbTtcXG4kZXh0cmEtc21hbGwtcGFkZGluZzogMC4yNXJlbTtcXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAkc21hbGwtcGFkZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBsb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udC1zaXplO1xcbiAgfVxcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAkc21hbGwtcGFkZGluZztcXG4gIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGZhZGUtY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAkZXh0cmEtc21hbGwtc2l6ZTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gID4gLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbiAgICB9XFxuICB9XFxuICAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIHtcXG4gICAgJGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAkYmFzZS1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtICRib3JkZXItd2lkdGgpO1xcbiAgICAkc2hpcC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXG4gICAgJGJvcmRlci1jb2xvcjogJGdyYXk7XFxuICAgICRib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XFxuICAgIH1cXG4gICAgLnNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRmYWRlLWNvbG9yO1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG59XFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ZWIwO1xcbn1cXG4ucGxhY2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgb3B0aW9uczoge1xuICAgICAgb3B0aW9uQ29tcHV0ZXI6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25TaXplOiB7XG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9wdGlvbi5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3Rvcignb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGxheWVyczoge1xuICAgICAgcGxheWVyT25lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0Lm9uZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJUd286IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQudHdvJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHN0YXJ0LCBzaGlwLCBzaGlwT3JpZW50KSB7XG4gICAgaWYgKHNoaXAucGxhY2VkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogbnVsbCxcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3N0YXJ0WzBdLCBzdGFydFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3N0YXJ0WzBdICsgaSwgc3RhcnRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcFZlcnRpY2FsbHkgPSBmdW5jdGlvbiAoc3F1YXJlLCBzaGlwKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdICsgaV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcEhvcml6b250YWxseSA9IGZ1bmN0aW9uIChzcXVhcmUsIHNoaXApIHtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlWzBdICsgaSwgc3F1YXJlWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVJZCwgc2hpcCwgbmV3T3JpZW50KT8udmFsaWQpIHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gcGxhY2VTaGlwVmVydGljYWxseShzcXVhcmVJZCwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc3F1YXJlSWQsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNba2V5XS5pc1N1bmsoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBmb3JtLCBnYW1lIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybS5vcHRpb25zO1xuICAgIGNvbnN0IHBsYXllcnMgPSBmb3JtLnBsYXllcnM7XG4gICAgY29uc3QgYWRkRm9ybUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUExheWVyVHdvKCk7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVNsaWRlclZhbHVlKG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dCwgb3B0aW9ucy5vcHRpb25TaXplLm91dHB1dCk7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgIGhpZGVFbGVtZW50KHBsYXllcnNbcGxheWVyXS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllcnMucGxheWVyT25lLmlucHV0LnZhbGlkaXR5LnZhbGlkICYmXG4gICAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQudmFsaWRpdHkudmFsaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5pdGlhdGVHYW1lKGdldEZvcm1JbnB1dChwbGF5ZXJzLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm9ybS5jb250YWluZXIucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yKHBsYXllcnNbcGxheWVyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVBMYXllclR3byA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVycy5wbGF5ZXJUd28uaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0KSB7XG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEZvcm1JbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXJzLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBmaXJzdE5hbWUgPSBwbGF5ZXJzLnBsYXllck9uZS5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHNlY29uZE5hbWUgPSBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbXB1dGVyT3B0aW9uID0gb3B0aW9ucy5vcHRpb25Db21wdXRlci5pbnB1dC5jaGVja2VkO1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IG9wdGlvbnMub3B0aW9uU2l6ZS5pbnB1dC52YWx1ZTtcblxuICAgICAgcmV0dXJuIHsgZmlyc3ROYW1lLCBzZWNvbmROYW1lLCBjb21wdXRlck9wdGlvbiwgZ2FtZWJvYXJkU2l6ZSB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9KSgpO1xuICBjb25zdCBpbml0aWF0ZUdhbWUgPSBmdW5jdGlvbiAobGVmdE9iaiwgcmlnaHRPYmopIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXI7XG4gICAgY29uc3QgbGVmdFBsYXllciA9IGdhbWUubGVmdFBsYXllcjtcbiAgICBjb25zdCByaWdodFBsYXllciA9IGdhbWUucmlnaHRQbGF5ZXI7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gY3JlYXRlUGxheWVycyhsZWZ0T2JqLCByaWdodE9iaik7XG5cbiAgICBjb25zdCBjcmVhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXIuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllci5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXIucGxheWVyLm5hbWV9YF07XG4gICAgICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICAgIH07XG4gICAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllci5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCBgJHtrZXl9YCk7XG4gICAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyLnBsYXllci5uYW1lfWA7XG4gICAgICAgICAgc2hpcHMuYXBwZW5kKHNoaXBFbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnKTtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7IGdyaWRDb250YWluZXI6IGNyZWF0ZUdyaWQoKSwgc2hpcENvbnRhaW5lcjogY3JlYXRlU2hpcHMoKSB9O1xuICAgIH07XG4gICAgY29uc3Qgc2V0QmFzZVVuaXRTaXplID0gKCkgPT4ge1xuICAgICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgICAgY29uc3Qgc3F1YXJlSGVpZ2h0ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIwLDBcIl1gKS5vZmZzZXRIZWlnaHQ7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgICAgYCR7c3F1YXJlSGVpZ2h0fXB4YCxcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCBsZWZ0RWxlbWVudHMgPSBjcmVhdGVHYW1lRWxlbWVudHMocGxheWVycy5sZWZ0UGxheWVyKTtcbiAgICBjb25zdCByaWdodEVsZW1lbnRzID0gY3JlYXRlR2FtZUVsZW1lbnRzKHBsYXllcnMucmlnaHRQbGF5ZXIpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0geyBsZWZ0RWxlbWVudHMsIHJpZ2h0RWxlbWVudHMgfTtcbiAgICBsZWZ0UGxheWVyLmdhbWVib2FyZC5hcHBlbmQobGVmdEVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICAgIGxlZnRQbGF5ZXIuc2hpcHMuYXBwZW5kKGxlZnRFbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgICByaWdodFBsYXllci5nYW1lYm9hcmQuYXBwZW5kKHJpZ2h0RWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gICAgcmlnaHRQbGF5ZXIuc2hpcHMuYXBwZW5kKHJpZ2h0RWxlbWVudHMuc2hpcENvbnRhaW5lcik7XG5cbiAgICBoaWRlRWxlbWVudChmb3JtLmNvbnRhaW5lcik7XG4gICAgc2hvd0VsZW1lbnQoZ2FtZUNvbnRhaW5lcik7XG4gICAgc2V0QmFzZVVuaXRTaXplKCk7XG4gICAgcmV0dXJuIHsgcGxheWVycywgZWxlbWVudHMgfTtcbiAgICAvLyBzaG93RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIjAsMFwiXWApKTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlU2hpcFBsYWNlbWVudCA9IGZ1bmN0aW9uIChzZWxlY3RlZFBsYXllciwgcGxheWVyRWxlbWVudHMpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBzZWxlY3RlZFBsYXllcjtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBsYXllckVsZW1lbnRzO1xuICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBMaXN0KSkge1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwcykpIHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZEdyaWRFdmVudExpc3RlbmVyID0gKHNxdWFyZUxpc3QpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGUsXG4gICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5pZCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHNlbGVjdGVkU3F1YXJlcykge1xuICAgICAgICAgICAgICBlbGVtZW50cy5ncmlkQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYClcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG93IHNvbWUgZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICBhZGRHcmlkRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH07XG4gIC8vIFVUSUxJVFkgRlVOQ1RJT05TXG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVBsYXllciA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmNvbXB1dGVyT3B0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVBsYXllcnMgPSBmdW5jdGlvbiAobGVmdE9iaiwgcmlnaHRPYmopIHtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gY3JlYXRlUGxheWVyKGxlZnRPYmopO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gY3JlYXRlUGxheWVyKHJpZ2h0T2JqKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdFBsYXllcjoge1xuICAgICAgICBwbGF5ZXI6IGxlZnRQbGF5ZXIsXG4gICAgICAgIGdhbWVib2FyZDogbGVmdFBsYXllci5hdHRhY2hHYW1lYm9hcmQobGVmdE9iai5nYW1lYm9hcmRTaXplKSxcbiAgICAgIH0sXG4gICAgICByaWdodFBsYXllcjoge1xuICAgICAgICBwbGF5ZXI6IHJpZ2h0UGxheWVyLFxuICAgICAgICBnYW1lYm9hcmQ6IGxlZnRQbGF5ZXIuYXR0YWNoR2FtZWJvYXJkKHJpZ2h0T2JqLmdhbWVib2FyZFNpemUpLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuICByZXR1cm4geyBpbml0aWF0ZUdhbWUsIHByb2Nlc3NGb3JtLCBlbmFibGVTaGlwUGxhY2VtZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lbG9vcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgYXR0YWNoR2FtZWJvYXJkKHNpemUpIHtcbiAgICAgIHRoaXMuR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgdGhpcy5HYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgICByZXR1cm4gdGhpcy5HYW1lYm9hcmQ7XG4gICAgfSxcbiAgICBhdHRhY2soZW5lbXksIG1vdmUpIHtcbiAgICAgIHJldHVybiBlbmVteS5HYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5HYW1lYm9hcmQuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLkdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLkdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV0/LmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbVNxdWFyZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVuZW15LkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNxdWFyZSgpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiksXG4gICAgc3VibWFyaW5lOiBuZXcgU2hpcCgzKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzKSxcbiAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcblxuY29uc3QgY3VzdG9tTGVmdE9iaiA9IHtcbiAgbGVmdE5hbWU6ICdHcmVnb3InLFxuICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gIGdhbWVib2FyZFNpemU6ICcxMCcsXG59O1xuY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gIHJpZ2h0TmFtZTogJycsXG4gIGNvbXB1dGVyT3B0aW9uOiB0cnVlLFxuICBnYW1lYm9hcmRTaXplOiAnMTAnLFxufTtcbmNvbnN0IGdhbWUgPSBHYW1lbG9vcC5pbml0aWF0ZUdhbWUoY3VzdG9tTGVmdE9iaiwgY3VzdG9tUmlnaHRPYmopO1xuR2FtZWxvb3AuZW5hYmxlU2hpcFBsYWNlbWVudChcbiAgZ2FtZS5wbGF5ZXJzLnJpZ2h0UGxheWVyLFxuICBnYW1lLmVsZW1lbnRzLnJpZ2h0RWxlbWVudHMsXG4pO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImZvcm0iLCJnYW1lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3B0aW9uQ29tcHV0ZXIiLCJpbnB1dCIsIm9wdGlvblNpemUiLCJvdXRwdXQiLCJwbGF5ZXJzIiwicGxheWVyT25lIiwiZXJyb3IiLCJwbGF5ZXJUd28iLCJsZWZ0UGxheWVyIiwiZ2FtZWJvYXJkIiwic2hpcHMiLCJyaWdodFBsYXllciIsIlNoaXBzIiwiR2FtZWJvYXJkIiwic3F1YXJlcyIsImNoZWNrUGxhY2VtZW50Iiwic3RhcnQiLCJzaGlwIiwic2hpcE9yaWVudCIsInBsYWNlZCIsImVsZW1lbnRzIiwidmFsaWQiLCJzaXplIiwibmVpZ2hib3VyU3RyIiwib2NjdXBpZXMiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5Iiwic3F1YXJlIiwic2VsZWN0ZWRTcXVhcmVzIiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJwbGFjZVNoaXAiLCJzaGlwTmFtZSIsInNxdWFyZVN0ciIsIm5ld09yaWVudCIsInNxdWFyZUlkIiwic3BsaXQiLCJlbCIsIk51bWJlciIsImFyZVNoaXBzU3VuayIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJQbGF5ZXIiLCJHYW1lbG9vcCIsInByb2Nlc3NGb3JtIiwiYWRkRm9ybUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVBMYXllclR3byIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYXllciIsImhpZGVFbGVtZW50IiwidmFsaWRpdHkiLCJpbml0aWF0ZUdhbWUiLCJnZXRGb3JtSW5wdXQiLCJyZXNldCIsImRpc3BsYXlFcnJvciIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJjaGVja2VkIiwiYWRkIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJjb21wdXRlck9wdGlvbiIsImdhbWVib2FyZFNpemUiLCJ2YWx1ZU1pc3NpbmciLCJsZWZ0T2JqIiwicmlnaHRPYmoiLCJnYW1lQ29udGFpbmVyIiwiY3JlYXRlUGxheWVycyIsImNyZWF0ZUdhbWVFbGVtZW50cyIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJzcXVhcmVFbCIsImRhdGFzZXQiLCJvd25lciIsIm5hbWUiLCJhcHBlbmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZVNoaXBzIiwic2hpcEVsIiwidHlwZSIsImdyaWRDb250YWluZXIiLCJzaGlwQ29udGFpbmVyIiwic2V0QmFzZVVuaXRTaXplIiwic3F1YXJlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJsZWZ0RWxlbWVudHMiLCJyaWdodEVsZW1lbnRzIiwic2hvd0VsZW1lbnQiLCJlbmFibGVTaGlwUGxhY2VtZW50Iiwic2VsZWN0ZWRQbGF5ZXIiLCJwbGF5ZXJFbGVtZW50cyIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0IiwibW96U291cmNlTm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVQbGF5ZXIiLCJvYmoiLCJhdHRhY2hHYW1lYm9hcmQiLCJpc0NvbXB1dGVyIiwicHJldmlvdXNIaXQiLCJhdHRhY2siLCJlbmVteSIsIm1vdmUiLCJjb21wdXRlckF0dGFjayIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIiwiY3VzdG9tTGVmdE9iaiIsImxlZnROYW1lIiwiY3VzdG9tUmlnaHRPYmoiLCJyaWdodE5hbWUiXSwic291cmNlUm9vdCI6IiJ9