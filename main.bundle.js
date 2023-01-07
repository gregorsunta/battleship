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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform .players.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 3rem;\n}\nform section.player {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3rem;\n}\nform section > .option.computer {\n  display: flex;\n}\nform button {\n  width: 30%;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #f9a19b;\n}\n\n.miss {\n  background-color: #95e0fd;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA;EACE,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;AC3BA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AD4BF;;AC1BA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AD6BF;;AC3BA;EACE,cAAA;AD8BF;;AC5BA;;EAEE,gBAAA;AD+BF;;AC7BA;;EAEE,YAAA;ADgCF;;AC9BA;;;;EAIE,WAAA;EACA,aAAA;ADiCF;;AC/BA;EACE,yBAAA;EACA,iBAAA;ADkCF;;AC/BA,kBAAA;AD/HA;EACE,sBAAA;AAkKF;;AA/JA,WAAA;AAYA,UAAA;AAKA,WAAA;AAkBA;EACE,sBAAA;EAEA,qBAAA;EACA,gBAAA;EACA,cArCW;AAsKb;;AA/HA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAkIF;;AAhIA,WAAA;AACA;EACE,8CAAA;EACA,mBAAA;EACA,aApBc;EAqBd,yBAhDgB;AAmLlB;AAlIE;EACE,qBAAA;EAEA,gBAAA;EACA,oBAAA;EACA,iBApDc;AAuLlB;;AA/HA,iBAAA;AACA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;AAkIF;;AAhIA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SA3Cc;EA4Cd,aA9Cc;EA+Cd,qBAlDoB;EAmDpB,gCAAA;AAmIF;AAjIE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SA7DU;AAgMd;AAjIE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAnEU;AAsMd;AAjIE;EACE,aAAA;AAmIJ;AAjIE;EACE,UAAA;AAmIJ;;AAhIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAhFY;AAmNd;AAlIE;EACE,aAAA;AAoIJ;AAlIE;EACE,WAAA;EACA,iBAAA;AAoIJ;AAnII;EACE,aAAA;AAqIN;AAnII;EACE,uCAAA;AAqIN;AAlIE;EAME,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,wBAAA;AA+HJ;AA9HI;EACE,yBAvHC;AAuPP;AA9HI;EACE,yBA/HY;EAgIZ,yBAAA;EACA,kBAbc;EAcd,iBAAA;AAgIN;AA9HI;EACE,yCApBU;EAqBV,8CAAA;AAgIN;AA9HI;EACE,yCAxBU;EAyBV,8CAAA;AAgIN;AA9HI;EACE,yCA5BU;EA6BV,8CAAA;AAgIN;AA9HI;EACE,yCAhCU;EAiCV,8CAAA;AAgIN;AA9HI;EACE,yCApCU;EAqCV,8CAAA;AAgIN;;AA5HA,WAAA;AACA;EACE,8CAAA;EACA,eAlIgB;EAmIhB,aAAA;EACA,uBAAA;EACA,yBAjKgB;AAgSlB;;AA5HA,oBAAA;AAEA;EACE,qBAjJoB;EAkJpB,yBAAA;EACA,eA7IgB;AA2QlB;;AA5HA;EACE,YAAA;AA+HF;;AA7HA;EACE,wBAAA;AAgIF;;AA9HA;EACE,yBAAA;AAiIF;;AA/HA;EACE,yBAAA;AAkIF;;AAhIA;EACE,yBAAA;AAmIF;;AAjIA;EACE,YAAA;AAoIF;;AAlIA;EACE,yBAAA;AAqIF;;AAnIA;EACE,yBAAA;AAsIF;;AApIA;EACE,yBAAA;AAuIF;;AArIA;EACE,yBAAA;AAwIF;;AAtIA;EACE,oCAAA;AAyIF","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  .players.container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    gap: $common-size;\n  }\n  section.player {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $common-size;\n  }\n  section > .option.computer {\n    display: flex;\n  }\n  button {\n    width: 30%;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #f9a19b;\n}\n.miss {\n  background-color: #95e0fd;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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

/***/ "./src/components/PlayerComponents.js":
/*!********************************************!*\
  !*** ./src/components/PlayerComponents.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/player.js */ "./src/components/player.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PlayerComponents = function PlayerComponents(obj) {
  var createPlayerData = function createPlayerData(obj) {
    if (obj.computer) {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](obj.name, true, obj.size);
    } else {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](obj.name, false, obj.size);
    }
  };
  var createGameElements = function createGameElements(playerData) {
    var parent = this;
    var createGrid = function createGrid() {
      var grid = document.createElement('div');
      grid.style.gridTemplateRows = "repeat(".concat(playerData.gameboard.size, ", 1fr)");
      grid.style.gridTemplateColumns = "repeat(".concat(playerData.gameboard.size, ", 1fr)");
      for (var _i = 0, _Object$keys = Object.keys(playerData.gameboard.squares); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.dataset.id = ["".concat(key)];
        squareEl.dataset.owner = ["".concat(playerData.name)];
        grid.append(squareEl);
        grid.style.height = "100%";
        grid.style.width = "100%";
      }
      grid.classList.add('grid', 'container');
      return grid;
    };
    var createShips = function createShips() {
      var ships = document.createElement('div');
      for (var _i2 = 0, _Object$keys2 = Object.keys(playerData.gameboard.ships); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        var shipEl = document.createElement('div');
        shipEl.classList.add('ship', "".concat(key));
        shipEl.dataset.type = "".concat(key);
        shipEl.dataset.owner = "".concat(playerData.name);
        ships.append(shipEl);
      }
      ships.classList.add('ships', 'container');
      return ships;
    };
    var createRotationButton = function createRotationButton() {
      var button = document.createElement('button');
      button.classList.add('rotation');
      button.textContent = 'Vertical';
      button.addEventListener('click', function () {
        if (parent.shipOrientation === 'v') {
          button.textContent = 'Horizontal';
          parent.shipOrientation = 'h';
        } else if (parent.shipOrientation === 'h') {
          button.textContent = 'Vertical';
          parent.shipOrientation = 'v';
        }
      });
      return button;
    };
    return {
      gridContainer: createGrid(),
      shipContainer: createShips(),
      buttonContainer: createRotationButton()
    };
  };
  var data = createPlayerData(obj);
  return {
    data: data,
    shipOrientation: 'v',
    elements: createGameElements(data),
    markWinner: function markWinner() {
      this.elements.gridContainer.classList.add('winner');
    },
    enableShipPlacement: function enableShipPlacement() {
      var _this = this;
      var data = this.data;
      var elements = this.elements;
      var rotation = this.shipOrientation;
      elements.shipContainer.classList.remove('hide');
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
            var status = data.gameboard.checkPlacement(squareStr, ship, _this.shipOrientation);
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
            // const orientation = gameProperties.placementOrientation;
            e.preventDefault();
            var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
            var squareStr = e.target.dataset.id;
            var selectedSquares = data.gameboard.checkPlacement(squareStr, ship, _this.shipOrientation).elements;
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
            // const orientation = gameProperties.placementOrientation;
            e.preventDefault();
            var ship = data.gameboard.ships[e.dataTransfer.mozSourceNode.dataset.type];
            var squareStr = e.target.dataset.id;
            var status = data.gameboard.checkPlacement(squareStr, ship, _this.shipOrientation);
            if (status.valid) {
              var _iterator3 = _createForOfIteratorHelper(status.elements),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _squareStr3 = _step3.value;
                  var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr3, "\"]"));
                  squareEl.classList.remove('place');
                  squareEl.classList.add('placed');
                  data.gameboard.placeShip(e.dataTransfer.mozSourceNode.dataset.type, _squareStr3, _this.shipOrientation);
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
    },
    disableShipPlacement: function disableShipPlacement() {
      this.elements.shipContainer.classList.add('hide');
      var squares = this.elements.gridContainer.childNodes;
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
    },
    enableReceivingAttack: function enableReceivingAttack() {
      var _this2 = this;
      var squareNodes = this.elements.gridContainer.childNodes;
      var processAttack = function processAttack(attackResultArg, squareNode) {
        if (attackResultArg === null) {
          squareNode.classList.add('miss');
        } else if (attackResultArg) {
          squareNode.classList.add('hit');
          if (_this2.data.checkForLoss()) {
            _this2.disableReceivingAttack();
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
            var attackContent = _this2.data.gameboard.receiveAttack(squareNode.dataset.id);
            processAttack(attackContent, squareNode);
            _this2.disableReceivingAttack();
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
    },
    disableReceivingAttack: function disableReceivingAttack() {
      var squareNodes = this.elements.gridContainer.childNodes;
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
    },
    fadePlayer: function fadePlayer() {
      this.elements.shipContainer.classList.add('fade');
      this.elements.gridContainer.classList.add('fade');
    },
    unfadePlayer: function unfadePlayer() {
      this.elements.shipContainer.classList.remove('fade');
      this.elements.gridContainer.classList.remove('fade');
    },
    hidePlacedShips: function hidePlacedShips() {
      var shipSquares = this.elements.gridContainer.querySelectorAll('.placed');
      var _iterator8 = _createForOfIteratorHelper(shipSquares),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var square = _step8.value;
          square.classList.remove('placed');
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    },
    showPlacedShips: function showPlacedShips() {
      var squaresData = this.data.gameboard.squares;
      var squaresElements = this.elements.gridContainer;
      for (var _i6 = 0, _Object$entries = Object.entries(squaresData); _i6 < _Object$entries.length; _i6++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        console.log(key);
        console.log(value);
        if (value.occupies) {
          squaresElements.querySelector("[data-id=\"".concat(key, "\"]")).classList.add('placed');
        }
      }
    },
    isShipPlaced: function isShipPlaced() {
      return this.data.gameboard.isOneShipPlaced();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerComponents);

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
    leftPlayer: {
      container: container.querySelector('.player.left.container'),
      name: {
        container: container.querySelector('.left > .name'),
        input: container.querySelector('.left > .name > input'),
        error: container.querySelector('.left > .error')
      },
      computer: {
        container: container.querySelector('.left > .computer'),
        input: container.querySelector('.left > .computer > input')
      },
      size: {
        container: container.querySelector('.left > .size'),
        input: container.querySelector('.left > .size > input'),
        output: container.querySelector('.left > .size > output')
      }
    },
    rightPlayer: {
      container: container.querySelector('.player.right.container'),
      name: {
        container: container.querySelector('.right > .name'),
        input: container.querySelector('.right > .name > input'),
        message: container.querySelector('.right > .message')
      },
      computer: {
        container: container.querySelector('.right > .computer'),
        input: container.querySelector('.right > .computer > input')
      },
      size: {
        container: container.querySelector('.right > .size'),
        input: container.querySelector('.right > .size > input'),
        output: container.querySelector('.right > .size > output')
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
      ships: container.querySelector('.left .ships.container'),
      rotationButton: container.querySelector('.left  button.rotation')
    },
    continueButton: container.querySelector('button.continue'),
    rightPlayer: {
      container: container.querySelector('.right.player'),
      gameboard: container.querySelector('.right .gameboard.container'),
      ships: container.querySelector('.right .ships.container'),
      rotationButton: container.querySelector('.right  button.rotation')
    }
  };
}();
var message = function () {
  var container = document.querySelector('.message.container');
  return {
    container: container
  };
}();
// const orientationButton = (function () {
// const button = document.querySelector('button.orientation');
// return button;
// })();

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
/* harmony import */ var _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/PlayerComponents.js */ "./src/components/PlayerComponents.js");
/* harmony import */ var _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/dom.js */ "./src/components/dom.js");
/* harmony import */ var _src_components_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/player.js */ "./src/components/player.js");





var Gameloop = function () {
  var formData = {};
  var processForm = function processForm() {
    showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
    var leftPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.leftPlayer;
    var rightPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.rightPlayer;
    var togglePlayerInput = function togglePlayerInput(player) {
      if (player.computer.input.checked) {
        player.name.container.classList.add('fade');
        // player.size.container.classList.add('fade');
        player.name.input.disabled = true;
        player.name.input.value = '';
      } else {
        // player.size.container.classList.remove('fade');
        player.name.container.classList.remove('fade');
        player.name.input.disabled = false;
      }
    };
    leftPlayer.computer.input.addEventListener('input', function (e) {
      e.preventDefault();
      togglePlayerInput(leftPlayer);
    });
    rightPlayer.computer.input.addEventListener('input', function (e) {
      e.preventDefault();
      togglePlayerInput(rightPlayer);
    });
    leftPlayer.size.input.addEventListener('input', function () {
      displaySliderValue(leftPlayer);
    });
    rightPlayer.size.input.addEventListener('input', function () {
      displaySliderValue(rightPlayer);
    });
    _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.button.addEventListener('click', function (e) {
      e.preventDefault();
      var leftPlayerValid = leftPlayer.name.input.validity.valid;
      var rightPlayerValid = rightPlayer.name.input.validity.valid;

      // hideElement(rightPlayer.name.error);
      // hideElement(leftPlayer.name.error);

      if (leftPlayerValid && rightPlayerValid) {
        hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container.reset();
      } else {
        if (leftPlayerValid) {
          displayError(leftPlayer);
        }
        if (rightPlayerValid) {
          displayError(rightPlayer);
        }
      }
    });
    var showError = function showError(errorContainer, msg) {
      errorContainer.classList.remove('hide');
      errorContainer.textContent = msg;
    };
    var displaySliderValue = function displaySliderValue(player) {
      player.size.output.textContent = player.size.input.value;
    };
    var getFormInput = function getFormInput(playerArg) {
      var player = playerArg;
      return {
        name: player.name.input.value,
        computer: player.computer.input.checked,
        size: player.size.input.value
      };
    };
    var displayError = function displayError(player) {
      if (player.input.validity.valueMissing) {
        showError(player.error, 'A name is required.');
      }
    };
    // addFormEventListeners();
  };

  var setBaseUnitSize = function setBaseUnitSize() {
    // make ship width the same as square width
    var squareHeight = document.querySelector("[data-id=\"0,0\"]").offsetHeight;
    document.documentElement.style.setProperty('--base-unit-size', "".concat(squareHeight, "px"));
  };
  var changeMessage = function changeMessage() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.message.container;
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
  var processPhase = function processPhase(gamePropertiesArg) {
    var gameProperties = gamePropertiesArg;
    var gameElements = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game;
    if (gameProperties.phase === 0) {
      var _gameProperties$activ, _gameProperties$inact, _gameProperties$activ2, _gameProperties$inact2;
      (_gameProperties$activ = gameProperties.activeComponents) === null || _gameProperties$activ === void 0 ? void 0 : _gameProperties$activ.elements.gridContainer.remove();
      (_gameProperties$inact = gameProperties.inactiveComponents) === null || _gameProperties$inact === void 0 ? void 0 : _gameProperties$inact.elements.gridContainer.remove();
      (_gameProperties$activ2 = gameProperties.activeComponents) === null || _gameProperties$activ2 === void 0 ? void 0 : _gameProperties$activ2.elements.shipContainer.remove();
      (_gameProperties$inact2 = gameProperties.inactiveComponents) === null || _gameProperties$inact2 === void 0 ? void 0 : _gameProperties$inact2.elements.shipContainer.remove();
      hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.container);
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
      processForm();
    } else if (gameProperties.phase === 1) {
      if (!gameProperties.activeComponents) {
        gameProperties.activeComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.leftPlayer);
        gameElements.leftPlayer.gameboard.append(gameProperties.activeComponents.elements.gridContainer);
        gameElements.leftPlayer.ships.append(gameProperties.activeComponents.elements.shipContainer);
        gameElements.leftPlayer.container.append(gameProperties.activeComponents.elements.buttonContainer);
      }
      if (!gameProperties.inactiveComponents) {
        gameProperties.inactiveComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.rightPlayer);
        gameElements.rightPlayer.gameboard.append(gameProperties.inactiveComponents.elements.gridContainer);
        gameElements.rightPlayer.ships.append(gameProperties.inactiveComponents.elements.shipContainer);
        gameElements.rightPlayer.container.append(gameProperties.inactiveComponents.createRotationButton());
      }
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.container);
      gameProperties.phase = phases.starting;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 2) {
      gameProperties.phase = phases.shipPlacement;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 3) {
      if (gameProperties.activeComponents.isShipPlaced() && gameProperties.inactiveComponents.isShipPlaced()) {
        gameProperties.activeComponents.disableShipPlacement();
        gameProperties.activeComponents.hidePlacedShips();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
      } else if (gameProperties.activeComponents.isShipPlaced() || gameProperties.inactiveComponents.isShipPlaced()) {
        gameProperties.activeComponents.disableShipPlacement();
        gameProperties.activeComponents.hidePlacedShips();
        var temp = gameProperties.activeComponents;
        gameProperties.activeComponents = gameProperties.inactiveComponents;
        gameProperties.inactiveComponents = temp;
        gameProperties.activeComponents.unfadePlayer();
        gameProperties.activeComponents.enableShipPlacement();
      } else {
        gameProperties.inactiveComponents.fadePlayer();
        gameProperties.activeComponents.enableShipPlacement();
      }
    } else if (gameProperties.phase === 4) {
      var _temp = gameProperties.activeComponents;
      gameProperties.activeComponents = gameProperties.inactiveComponents;
      gameProperties.inactiveComponents = _temp;
      gameProperties.activeComponents.fadePlayer();
      gameProperties.inactiveComponents.unfadePlayer();
      gameProperties.inactiveComponents.enableReceivingAttack();
      changeMessage().turn(gameProperties.activeComponents);
      // if (enableReceivingAttack.status) {
      // }
    } else if (gameProperties.phase === 5) {
      gameProperties.activeComponents.unfadePlayer();
      gameProperties.activeComponents.markWinner();
      gameProperties.activeComponents.showPlacedShips();
      gameProperties.inactiveComponents.showPlacedShips();
      changeMessage().win(gameProperties.activeComponents);
      gameProperties.phase = phases.formProcessing;
    }
  };

  // initialization

  var phases = {
    formProcessing: 0,
    componentCreation: 1,
    starting: 2,
    shipPlacement: 3,
    playing: 4,
    win: 5
  };
  var gameProperties = {
    phase: phases.formProcessing,
    placementOrientation: 'v',
    activeComponents: null,
    inactiveComponents: null
  };
  var skipFormPhase = function skipFormPhase(gamePropertiesArg, formDataArg) {
    // const leftPlayerData = {}
    formDataArg.leftPlayer = {
      name: 'John',
      size: '8',
      computer: false
    };
    formDataArg.rightPlayer = {
      name: 'Sarah',
      size: '12',
      computer: false
    };
    gamePropertiesArg.phase = phases.componentCreation;
  };
  var skipToWinPhase = function skipToWinPhase(gamePropertiesArg) {
    gamePropertiesArg.phase = phases.win;
  };
  // skipFormPhase(gameProperties, formData);
  // processPhase(gameProperties);
  // skipToWinPhase(gameProperties);
  processPhase(gameProperties);
  _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.continueButton.addEventListener('click', function (e) {
    processPhase(gameProperties);
  });
  return {
    PlayerComponents: _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUNsQztBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzPzA5MjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXJDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQlVOVFUgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gLnBsYXllcnMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSA+IC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgLnNxdWFyZSB7XFxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiNGI0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuXFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuXFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTE5YjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZTBmZDtcXG59XFxuXFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9mb250cy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQtc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBRUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FDM0JBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRDRCRjs7QUMxQkEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FENkJGOztBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7O0FDNUJBOztFQUVFLGdCQUFBO0FEK0JGOztBQzdCQTs7RUFFRSxZQUFBO0FEZ0NGOztBQzlCQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FEaUNGOztBQy9CQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7O0FDL0JBLGtCQUFBO0FEL0hBO0VBQ0Usc0JBQUE7QUFrS0Y7O0FBL0pBLFdBQUE7QUFZQSxVQUFBO0FBS0EsV0FBQTtBQWtCQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBckNXO0FBc0tiOztBQS9IQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBa0lGOztBQWhJQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFwQmM7RUFxQmQseUJBaERnQjtBQW1MbEI7QUFsSUU7RUFDRSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFwRGM7QUF1TGxCOztBQS9IQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBa0lGOztBQWhJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQTNDYztFQTRDZCxhQTlDYztFQStDZCxxQkFsRG9CO0VBbURwQixnQ0FBQTtBQW1JRjtBQWpJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0E3RFU7QUFnTWQ7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBbkVVO0FBc01kO0FBaklFO0VBQ0UsYUFBQTtBQW1JSjtBQWpJRTtFQUNFLFVBQUE7QUFtSUo7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQWhGWTtBQW1OZDtBQWxJRTtFQUNFLGFBQUE7QUFvSUo7QUFsSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFvSUo7QUFuSUk7RUFDRSxhQUFBO0FBcUlOO0FBbklJO0VBQ0UsdUNBQUE7QUFxSU47QUFsSUU7RUFNRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBK0hKO0FBOUhJO0VBQ0UseUJBdkhDO0FBdVBQO0FBOUhJO0VBQ0UseUJBL0hZO0VBZ0laLHlCQUFBO0VBQ0Esa0JBYmM7RUFjZCxpQkFBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBCVTtFQXFCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXhCVTtFQXlCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQTVCVTtFQTZCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQWhDVTtFQWlDViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBDVTtFQXFDViw4Q0FBQTtBQWdJTjs7QUE1SEEsV0FBQTtBQUNBO0VBQ0UsOENBQUE7RUFDQSxlQWxJZ0I7RUFtSWhCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQWpLZ0I7QUFnU2xCOztBQTVIQSxvQkFBQTtBQUVBO0VBQ0UscUJBakpvQjtFQWtKcEIseUJBQUE7RUFDQSxlQTdJZ0I7QUEyUWxCOztBQTVIQTtFQUNFLFlBQUE7QUErSEY7O0FBN0hBO0VBQ0Usd0JBQUE7QUFnSUY7O0FBOUhBO0VBQ0UseUJBQUE7QUFpSUY7O0FBL0hBO0VBQ0UseUJBQUE7QUFrSUY7O0FBaElBO0VBQ0UseUJBQUE7QUFtSUY7O0FBaklBO0VBQ0UsWUFBQTtBQW9JRjs7QUFsSUE7RUFDRSx5QkFBQTtBQXFJRjs7QUFuSUE7RUFDRSx5QkFBQTtBQXNJRjs7QUFwSUE7RUFDRSx5QkFBQTtBQXVJRjs7QUFySUE7RUFDRSx5QkFBQTtBQXdJRjs7QUF0SUE7RUFDRSxvQ0FBQTtBQXlJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQlVOVFUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsXCJAdXNlICcuL2ZvbnRzLmNzcyc7XFxuQHVzZSAnLi9yZXNldC1zdHlsZXMuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4kaGlnaGxpZ2h0OiAjZmZjY2NjO1xcblxcbiRtYWluLWNvbG9yOiAjMmMzYTQ3O1xcbiRzZWNvbmRhcnktY29sb3I6ICNlMWY5ZjQ7XFxuJGhpZ2hsaWdodC1jb2xvcjogI2ZmY2NjYztcXG4kbGFyZ2UtZm9udC1zaXplOiAxLjRyZW07XFxuJGZvbnQtc2l6ZTogMXJlbTtcXG4kc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxuJGZhZGUtY29sb3I6ICNlNmU2ZTY7XFxuJGdyYXk6ICM0YjRiNGI7XFxuXFxuLyogaWNvbnMgKi9cXG4kaWNvbi1zaXplOiAxLjJyZW07XFxuJHNtYWxsLWljb24tc2l6ZTogMXJlbTtcXG4kc21hbGxlci1pY29uLXNpemU6IDAuOHJlbTtcXG5cXG4vKiBsYXlvdXQgKi9cXG4vLyBzaXplXFxuJGV4dHJhLXNtYWxsLXNpemU6IDAuOHJlbTtcXG4kc21hbGxlci1zaXplOiAxcmVtO1xcbiRzbWFsbC1zaXplOiAycmVtO1xcbiRjb21tb24tc2l6ZTogM3JlbTtcXG4kbGFyZ2Utc2l6ZTogNHJlbTtcXG4vLyByYWRpdXNcXG4kY29tbW9uLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuJHNtYWxsLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4kc21hbGxlci1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbi8vIHBhZGRpbmdcXG4kbGFyZ2UtcGFkZGluZzogNHJlbTtcXG4kY29tbW9uLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsZXItcGFkZGluZzogMC41cmVtO1xcbiRleHRyYS1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6ICRzbWFsbC1wYWRkaW5nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICBmb250LXNpemU6ICRsYXJnZS1mb250LXNpemU7XFxuICB9XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRzbWFsbC1wYWRkaW5nO1xcbiAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkZmFkZS1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgfVxcbiAgc2VjdGlvbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIH1cXG4gIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWExOWI7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWUwZmQ7XFxufVxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBQbGF5ZXJDb21wb25lbnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouY29tcHV0ZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCB0cnVlLCBvYmouc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCBmYWxzZSwgb2JqLnNpemUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKHBsYXllckRhdGEpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzO1xuICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllckRhdGEuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgIHNxdWFyZUVsLmRhdGFzZXQub3duZXIgPSBbYCR7cGxheWVyRGF0YS5uYW1lfWBdO1xuICAgICAgICBncmlkLmFwcGVuZChzcXVhcmVFbCk7XG4gICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICBncmlkLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgfVxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyRGF0YS5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2tleX1gKTtcbiAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC5vd25lciA9IGAke3BsYXllckRhdGEubmFtZX1gO1xuICAgICAgICBzaGlwcy5hcHBlbmQoc2hpcEVsKTtcbiAgICAgIH1cbiAgICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUm90YXRpb25CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGlvbicpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHBhcmVudC5zaGlwT3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgICBwYXJlbnQuc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudC5zaGlwT3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgICAgcGFyZW50LnNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyaWRDb250YWluZXI6IGNyZWF0ZUdyaWQoKSxcbiAgICAgIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCksXG4gICAgICBidXR0b25Db250YWluZXI6IGNyZWF0ZVJvdGF0aW9uQnV0dG9uKCksXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIHNoaXBPcmllbnRhdGlvbjogJ3YnLFxuICAgIGVsZW1lbnRzOiBjcmVhdGVHYW1lRWxlbWVudHMoZGF0YSksXG4gICAgbWFya1dpbm5lcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICB9LFxuICAgIGVuYWJsZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnNoaXBPcmllbnRhdGlvbjtcbiAgICAgIGVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgY29uc3QgZW5hYmxlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKHNoaXBMaXN0KSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwTGlzdCkpIHtcbiAgICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBMaXN0O1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcHMpKSB7XG4gICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgYCR7ZS50YXJnZXR9YCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRHcmlkRXZlbnRMaXN0ZW5lciA9IChzcXVhcmVMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgT2JqZWN0LnZhbHVlcyhncmlkKSkge1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHRoaXMuc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICB0aGlzLnNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgdGhpcy5zaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbmFibGVEcmFnZ2FibGUoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICAgIGFkZFNoaXBFdmVudExpc3RlbmVyKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgICBhZGRHcmlkRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gICAgfSxcbiAgICBkaXNhYmxlU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVSZWNlaXZpbmdBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tDb250ZW50ID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlTm9kZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIHVuZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIH0sXG4gICAgaGlkZVBsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNoaXBTcXVhcmVzKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZXNEYXRhID0gdGhpcy5kYXRhLmdhbWVib2FyZC5zcXVhcmVzO1xuICAgICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyO1xuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXNEYXRhKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZXNFbGVtZW50c1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtrZXl9XCJdYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNTaGlwUGxhY2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb21wb25lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lLCBtZXNzYWdlIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5sZWZ0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLnJpZ2h0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgbWVzc2FnZTogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5tZXNzYWdlJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ICBidXR0b24ucm90YXRpb24nKSxcbiAgICB9LFxuICAgIGNvbnRpbnVlQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbnRpbnVlJyksXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgIGJ1dHRvbi5yb3RhdGlvbicpLFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgbWVzc2FnZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgfTtcbn0pKCk7XG4vLyBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4vLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ub3JpZW50YXRpb24nKTtcbi8vIHJldHVybiBidXR0b247XG4vLyB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3F1YXJlLm9jY3VwaWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQbGF5ZXJDb21wb25lbnRzIGZyb20gJy9zcmMvY29tcG9uZW50cy9QbGF5ZXJDb21wb25lbnRzLmpzJztcbmltcG9ydCB7XG4gIGZvcm0gYXMgZm9ybVdpbmRvdyxcbiAgZ2FtZSBhcyBnYW1lV2luZG93LFxuICBtZXNzYWdlIGFzIG1lc3NhZ2VXaW5kb3csXG59IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcbmNvbnN0IEdhbWVsb29wID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZm9ybURhdGEgPSB7fTtcbiAgY29uc3QgcHJvY2Vzc0Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvd0VsZW1lbnQoZm9ybVdpbmRvdy5jb250YWluZXIpO1xuICAgIGNvbnN0IGxlZnRQbGF5ZXIgPSBmb3JtV2luZG93LmxlZnRQbGF5ZXI7XG4gICAgY29uc3QgcmlnaHRQbGF5ZXIgPSBmb3JtV2luZG93LnJpZ2h0UGxheWVyO1xuICAgIGNvbnN0IHRvZ2dsZVBsYXllcklucHV0ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5jb21wdXRlci5pbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIHBsYXllci5uYW1lLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIC8vIHBsYXllci5zaXplLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyLm5hbWUuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsYXllci5zaXplLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIHBsYXllci5uYW1lLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBsZWZ0UGxheWVyLmNvbXB1dGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRvZ2dsZVBsYXllcklucHV0KGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLmNvbXB1dGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRvZ2dsZVBsYXllcklucHV0KHJpZ2h0UGxheWVyKTtcbiAgICB9KTtcbiAgICBsZWZ0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUobGVmdFBsYXllcik7XG4gICAgfSk7XG4gICAgcmlnaHRQbGF5ZXIuc2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGRpc3BsYXlTbGlkZXJWYWx1ZShyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgZm9ybVdpbmRvdy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbGVmdFBsYXllclZhbGlkID0gbGVmdFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuICAgICAgY29uc3QgcmlnaHRQbGF5ZXJWYWxpZCA9IHJpZ2h0UGxheWVyLm5hbWUuaW5wdXQudmFsaWRpdHkudmFsaWQ7XG5cbiAgICAgIC8vIGhpZGVFbGVtZW50KHJpZ2h0UGxheWVyLm5hbWUuZXJyb3IpO1xuICAgICAgLy8gaGlkZUVsZW1lbnQobGVmdFBsYXllci5uYW1lLmVycm9yKTtcblxuICAgICAgaWYgKGxlZnRQbGF5ZXJWYWxpZCAmJiByaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgIGhpZGVFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICAgICAgZm9ybURhdGEubGVmdFBsYXllciA9IGdldEZvcm1JbnB1dChsZWZ0UGxheWVyKTtcbiAgICAgICAgZm9ybURhdGEucmlnaHRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQocmlnaHRQbGF5ZXIpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgICAgZm9ybVdpbmRvdy5jb250YWluZXIucmVzZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQpIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3IobGVmdFBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0UGxheWVyVmFsaWQpIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3IocmlnaHRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yQ29udGFpbmVyLCBtc2cpIHtcbiAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gbXNnO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheVNsaWRlclZhbHVlID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgcGxheWVyLnNpemUub3V0cHV0LnRleHRDb250ZW50ID0gcGxheWVyLnNpemUuaW5wdXQudmFsdWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRGb3JtSW5wdXQgPSBmdW5jdGlvbiAocGxheWVyQXJnKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJBcmc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBwbGF5ZXIubmFtZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgY29tcHV0ZXI6IHBsYXllci5jb21wdXRlci5pbnB1dC5jaGVja2VkLFxuICAgICAgICBzaXplOiBwbGF5ZXIuc2l6ZS5pbnB1dC52YWx1ZSxcbiAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5RXJyb3IgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAocGxheWVyLmlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBzaG93RXJyb3IocGxheWVyLmVycm9yLCAnQSBuYW1lIGlzIHJlcXVpcmVkLicpO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gYWRkRm9ybUV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG4gIGNvbnN0IHNldEJhc2VVbml0U2l6ZSA9ICgpID0+IHtcbiAgICAvLyBtYWtlIHNoaXAgd2lkdGggdGhlIHNhbWUgYXMgc3F1YXJlIHdpZHRoXG4gICAgY29uc3Qgc3F1YXJlSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIwLDBcIl1gKS5vZmZzZXRIZWlnaHQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgJy0tYmFzZS11bml0LXNpemUnLFxuICAgICAgYCR7c3F1YXJlSGVpZ2h0fXB4YCxcbiAgICApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VNZXNzYWdlID0gZnVuY3Rpb24gKGNvbnRhaW5lciA9IG1lc3NhZ2VXaW5kb3cuY29udGFpbmVyKSB7XG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICByZXR1cm4ge1xuICAgICAgd2luOiAocGxheWVyKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgVGhlIHdpbm5lciBpcyAke3BsYXllci5kYXRhLm5hbWV9YDtcbiAgICAgIH0sXG4gICAgICB0dXJuOiAocGxheWVyKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgSXQgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfSdzIHR1cm5gO1xuICAgICAgfSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBoaWRlRWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9O1xuICBjb25zdCBzaG93RWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9O1xuICBjb25zdCBwcm9jZXNzUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBjb25zdCBnYW1lUHJvcGVydGllcyA9IGdhbWVQcm9wZXJ0aWVzQXJnO1xuICAgIGNvbnN0IGdhbWVFbGVtZW50cyA9IGdhbWVXaW5kb3c7XG4gICAgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAwKSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzPy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzPy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cz8uZWxlbWVudHMuc2hpcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cz8uZWxlbWVudHMuc2hpcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGhpZGVFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMSkge1xuICAgICAgaWYgKCFnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMgPSBuZXcgUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyLFxuICAgICAgICApO1xuICAgICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllci5nYW1lYm9hcmQuYXBwZW5kKFxuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLmxlZnRQbGF5ZXIuc2hpcHMuYXBwZW5kKFxuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLmxlZnRQbGF5ZXIuY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyLFxuICAgICAgICApO1xuICAgICAgICBnYW1lRWxlbWVudHMucmlnaHRQbGF5ZXIuZ2FtZWJvYXJkLmFwcGVuZChcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLnJpZ2h0UGxheWVyLnNoaXBzLmFwcGVuZChcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLnJpZ2h0UGxheWVyLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmNyZWF0ZVJvdGF0aW9uQnV0dG9uKCksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzaG93RWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zdGFydGluZztcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMikge1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuc2hpcFBsYWNlbWVudDtcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMykge1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpICYmXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5pc1NoaXBQbGFjZWQoKVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkgfHxcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpXG4gICAgICApIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kaXNhYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmhpZGVQbGFjZWRTaGlwcygpO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSB0ZW1wO1xuXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gNCkge1xuICAgICAgY29uc3QgdGVtcCA9IGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLnR1cm4oZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICAvLyBpZiAoZW5hYmxlUmVjZWl2aW5nQXR0YWNrLnN0YXR1cykge1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDUpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLm1hcmtXaW5uZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuZm9ybVByb2Nlc3Npbmc7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXRpYWxpemF0aW9uXG5cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgY29uc3Qgc2tpcEZvcm1QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZywgZm9ybURhdGFBcmcpIHtcbiAgICAvLyBjb25zdCBsZWZ0UGxheWVyRGF0YSA9IHt9XG4gICAgZm9ybURhdGFBcmcubGVmdFBsYXllciA9IHtcbiAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgIHNpemU6ICc4JyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGZvcm1EYXRhQXJnLnJpZ2h0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ1NhcmFoJyxcbiAgICAgIHNpemU6ICcxMicsXG4gICAgICBjb21wdXRlcjogZmFsc2UsXG4gICAgfTtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2tpcFRvV2luUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy53aW47XG4gIH07XG4gIC8vIHNraXBGb3JtUGhhc2UoZ2FtZVByb3BlcnRpZXMsIGZvcm1EYXRhKTtcbiAgLy8gcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gc2tpcFRvV2luUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lV2luZG93LmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBQbGF5ZXJDb21wb25lbnRzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWxvb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lID0gJ0NvbXB1dGVyJywgaXNDb21wdXRlciA9IGZhbHNlLCBzaXplKSB7XG4gIGNvbnN0IGF0dGFjaEdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgZ2FtZWJvYXJkOiBhdHRhY2hHYW1lYm9hcmQoc2l6ZSksXG4gICAgYXR0YWNrKGVuZW15LCBtb3ZlKSB7XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuZ2FtZWJvYXJkLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcXVhcmUoKSk7XG4gICAgfSxcbiAgICBjaGVja0Zvckxvc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4gICAgY3J1aXNlcjogbmV3IFNoaXAoMyksXG4gICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSksXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hpcHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnO1xuLy8gaW1wb3J0IEdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG4vLyBpbXBvcnQgeyBnYW1lLCBmb3JtIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiUGxheWVyIiwiUGxheWVyQ29tcG9uZW50cyIsIm9iaiIsImNyZWF0ZVBsYXllckRhdGEiLCJjb21wdXRlciIsIm5hbWUiLCJzaXplIiwiY3JlYXRlR2FtZUVsZW1lbnRzIiwicGxheWVyRGF0YSIsInBhcmVudCIsImNyZWF0ZUdyaWQiLCJncmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ2FtZWJvYXJkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJzcXVhcmVzIiwia2V5Iiwic3F1YXJlRWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwib3duZXIiLCJhcHBlbmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZVNoaXBzIiwic2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiY3JlYXRlUm90YXRpb25CdXR0b24iLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaGlwT3JpZW50YXRpb24iLCJncmlkQ29udGFpbmVyIiwic2hpcENvbnRhaW5lciIsImJ1dHRvbkNvbnRhaW5lciIsImVsZW1lbnRzIiwibWFya1dpbm5lciIsImVuYWJsZVNoaXBQbGFjZW1lbnQiLCJyb3RhdGlvbiIsInJlbW92ZSIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2hpcCIsInNldEF0dHJpYnV0ZSIsImFkZFNoaXBFdmVudExpc3RlbmVyIiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJhZGRHcmlkRXZlbnRMaXN0ZW5lciIsInNxdWFyZUxpc3QiLCJzcXVhcmUiLCJwcmV2ZW50RGVmYXVsdCIsIm1velNvdXJjZU5vZGUiLCJzcXVhcmVTdHIiLCJzdGF0dXMiLCJjaGVja1BsYWNlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZCIsInNlbGVjdGVkU3F1YXJlcyIsInBsYWNlU2hpcCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZW5hYmxlUmVjZWl2aW5nQXR0YWNrIiwic3F1YXJlTm9kZXMiLCJwcm9jZXNzQXR0YWNrIiwiYXR0YWNrUmVzdWx0QXJnIiwic3F1YXJlTm9kZSIsImNoZWNrRm9yTG9zcyIsImRpc2FibGVSZWNlaXZpbmdBdHRhY2siLCJnYW1lUHJvcGVydGllcyIsInBoYXNlIiwicGhhc2VzIiwid2luIiwicHJvY2Vzc1BoYXNlIiwiYXR0YWNrQ29udGVudCIsInJlY2VpdmVBdHRhY2siLCJmYWRlUGxheWVyIiwidW5mYWRlUGxheWVyIiwiaGlkZVBsYWNlZFNoaXBzIiwic2hpcFNxdWFyZXMiLCJzaG93UGxhY2VkU2hpcHMiLCJzcXVhcmVzRGF0YSIsInNxdWFyZXNFbGVtZW50cyIsImVudHJpZXMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvY2N1cGllcyIsImlzU2hpcFBsYWNlZCIsImlzT25lU2hpcFBsYWNlZCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsImNvbnRhaW5lciIsImxlZnRQbGF5ZXIiLCJpbnB1dCIsImVycm9yIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJyb3RhdGlvbkJ1dHRvbiIsImNvbnRpbnVlQnV0dG9uIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImFyZVNoaXBzU3VuayIsImlzU3VuayIsInNxdWFyZUlkU3RyIiwiaGl0IiwiZm9ybVdpbmRvdyIsImdhbWVXaW5kb3ciLCJtZXNzYWdlV2luZG93IiwiR2FtZWxvb3AiLCJmb3JtRGF0YSIsInByb2Nlc3NGb3JtIiwic2hvd0VsZW1lbnQiLCJ0b2dnbGVQbGF5ZXJJbnB1dCIsInBsYXllciIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImxlZnRQbGF5ZXJWYWxpZCIsInZhbGlkaXR5IiwicmlnaHRQbGF5ZXJWYWxpZCIsImhpZGVFbGVtZW50IiwiZ2V0Rm9ybUlucHV0IiwiY29tcG9uZW50Q3JlYXRpb24iLCJyZXNldCIsImRpc3BsYXlFcnJvciIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwicGxheWVyQXJnIiwidmFsdWVNaXNzaW5nIiwic2V0QmFzZVVuaXRTaXplIiwic3F1YXJlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZUNvbnRhaW5lciIsInR1cm4iLCJnYW1lUHJvcGVydGllc0FyZyIsImdhbWVFbGVtZW50cyIsImFjdGl2ZUNvbXBvbmVudHMiLCJpbmFjdGl2ZUNvbXBvbmVudHMiLCJzdGFydGluZyIsInNoaXBQbGFjZW1lbnQiLCJwbGF5aW5nIiwidGVtcCIsImZvcm1Qcm9jZXNzaW5nIiwicGxhY2VtZW50T3JpZW50YXRpb24iLCJza2lwRm9ybVBoYXNlIiwiZm9ybURhdGFBcmciLCJza2lwVG9XaW5QaGFzZSIsImlzQ29tcHV0ZXIiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwiZ2FtZWJvYXJkU2l6ZSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==