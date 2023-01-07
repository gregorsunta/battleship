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
  var shipOrientation = 'v';
  var createPlayerData = function createPlayerData(obj) {
    if (obj.computer) {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](obj.name, true, obj.size);
    } else {
      return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](obj.name, false, obj.size);
    }
  };
  var createGameElements = function createGameElements(playerData) {
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
        if (shipOrientation === 'v') {
          button.textContent = 'Horizontal';
          shipOrientation = 'h';
        } else if (shipOrientation === 'h') {
          button.textContent = 'Vertical';
          shipOrientation = 'v';
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
    elements: createGameElements(data),
    markWinner: function markWinner() {
      this.elements.gridContainer.classList.add('winner');
    },
    enableShipPlacement: function enableShipPlacement() {
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
            var status = data.gameboard.checkPlacement(squareStr, ship, shipOrientation);
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
            var selectedSquares = data.gameboard.checkPlacement(squareStr, ship, shipOrientation).elements;
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
            var status = data.gameboard.checkPlacement(squareStr, ship, shipOrientation);
            if (status.valid) {
              var _iterator3 = _createForOfIteratorHelper(status.elements),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _squareStr3 = _step3.value;
                  var squareEl = elements.gridContainer.querySelector("[data-id=\"".concat(_squareStr3, "\"]"));
                  squareEl.classList.remove('place');
                  squareEl.classList.add('placed');
                  data.gameboard.placeShip(e.dataTransfer.mozSourceNode.dataset.type, _squareStr3, shipOrientation);
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
      var _this = this;
      var squareNodes = this.elements.gridContainer.childNodes;
      var processAttack = function processAttack(attackResultArg, squareNode) {
        if (attackResultArg === null) {
          squareNode.classList.add('miss');
        } else if (attackResultArg) {
          squareNode.classList.add('hit');
        }
      };
      var _iterator6 = _createForOfIteratorHelper(squareNodes),
        _step6;
      try {
        var _loop = function _loop() {
          var squareNode = _step6.value;
          squareNode.addEventListener('click', function () {
            var attackContent = _this.data.gameboard.receiveAttack(squareNode.dataset.id);
            processAttack(attackContent, squareNode);
            _this.disableReceivingAttack();
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
      var _gameProperties$activ, _gameProperties$activ2, _gameProperties$activ3, _gameProperties$inact, _gameProperties$inact2, _gameProperties$inact3;
      (_gameProperties$activ = gameProperties.activeComponents) === null || _gameProperties$activ === void 0 ? void 0 : _gameProperties$activ.elements.gridContainer.remove();
      (_gameProperties$activ2 = gameProperties.activeComponents) === null || _gameProperties$activ2 === void 0 ? void 0 : _gameProperties$activ2.elements.shipContainer.remove();
      (_gameProperties$activ3 = gameProperties.activeComponents) === null || _gameProperties$activ3 === void 0 ? void 0 : _gameProperties$activ3.elements.buttonContainer.remove();
      (_gameProperties$inact = gameProperties.inactiveComponents) === null || _gameProperties$inact === void 0 ? void 0 : _gameProperties$inact.elements.gridContainer.remove();
      (_gameProperties$inact2 = gameProperties.inactiveComponents) === null || _gameProperties$inact2 === void 0 ? void 0 : _gameProperties$inact2.elements.shipContainer.remove();
      (_gameProperties$inact3 = gameProperties.inactiveComponents) === null || _gameProperties$inact3 === void 0 ? void 0 : _gameProperties$inact3.elements.buttonContainer.remove();
      hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.container);
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
      processForm();
    } else if (gameProperties.phase === 1) {
      gameProperties.activeComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.leftPlayer);
      gameElements.leftPlayer.gameboard.append(gameProperties.activeComponents.elements.gridContainer);
      gameElements.leftPlayer.ships.append(gameProperties.activeComponents.elements.shipContainer);
      gameElements.leftPlayer.container.append(gameProperties.activeComponents.elements.buttonContainer);
      gameProperties.inactiveComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.rightPlayer);
      gameElements.rightPlayer.gameboard.append(gameProperties.inactiveComponents.elements.gridContainer);
      gameElements.rightPlayer.ships.append(gameProperties.inactiveComponents.elements.shipContainer);
      gameElements.rightPlayer.container.append(gameProperties.inactiveComponents.elements.buttonContainer);
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
      if (gameProperties.inactiveComponents.data.checkForLoss()) {
        gameProperties.phase = phases.win;
        processPhase(gameProperties);
      }
      var _temp = gameProperties.activeComponents;
      gameProperties.activeComponents = gameProperties.inactiveComponents;
      gameProperties.inactiveComponents = _temp;
      gameProperties.activeComponents.fadePlayer();
      gameProperties.inactiveComponents.unfadePlayer();
      gameProperties.inactiveComponents.enableReceivingAttack();
      changeMessage().turn(gameProperties.activeComponents);
      console.log(gameProperties.inactiveComponents.data.checkForLoss());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLHNCQUFzQixFQUFFO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFFOztFQUViO0VBQ0FBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLFNBQVNBLFFBQVEsR0FBRztJQUNsQyxPQUFPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLElBQUksRUFBRTtNQUM5QixJQUFJQyxPQUFPLEdBQUcsRUFBRTtNQUNoQixJQUFJQyxTQUFTLEdBQUcsT0FBT0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVc7TUFDOUMsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1hDLE9BQU8sSUFBSSxhQUFhLENBQUNFLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztNQUNqRDtNQUNBLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksU0FBUyxDQUFDRSxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDNUM7TUFDQSxJQUFJRSxTQUFTLEVBQUU7UUFDYkQsT0FBTyxJQUFJLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDRCxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDakY7TUFDQUMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBSSxDQUFDO01BQ3ZDLElBQUlFLFNBQVMsRUFBRTtRQUNiRCxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLE9BQU9BLE9BQU87SUFDaEIsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDYixDQUFDOztFQUVEO0VBQ0FSLElBQUksQ0FBQ1MsQ0FBQyxHQUFHLFNBQVNBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7SUFDM0QsSUFBSSxPQUFPSixPQUFPLEtBQUssUUFBUSxFQUFFO01BQy9CQSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRUEsT0FBTyxFQUFFSyxTQUFTLENBQUMsQ0FBQztJQUN4QztJQUNBLElBQUlDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFJSixNQUFNLEVBQUU7TUFDVixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNWLE1BQU0sRUFBRVUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSUMsRUFBRSxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUlDLEVBQUUsSUFBSSxJQUFJLEVBQUU7VUFDZEYsc0JBQXNCLENBQUNFLEVBQUUsQ0FBQyxHQUFHLElBQUk7UUFDbkM7TUFDRjtJQUNGO0lBQ0EsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUdULE9BQU8sQ0FBQ0gsTUFBTSxFQUFFWSxFQUFFLEVBQUUsRUFBRTtNQUMxQyxJQUFJaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQ0csTUFBTSxDQUFDSSxPQUFPLENBQUNTLEVBQUUsQ0FBQyxDQUFDO01BQ2pDLElBQUlQLE1BQU0sSUFBSUksc0JBQXNCLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdDO01BQ0Y7TUFDQSxJQUFJLE9BQU9XLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDaEMsSUFBSSxPQUFPWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO1VBQ2xDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdXLEtBQUs7UUFDakIsQ0FBQyxNQUFNO1VBQ0xYLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNuR0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHVyxLQUFLO1FBQ2pCO01BQ0Y7TUFDQSxJQUFJSCxLQUFLLEVBQUU7UUFDVCxJQUFJLENBQUNSLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNaQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdRLEtBQUs7UUFDakIsQ0FBQyxNQUFNO1VBQ0xSLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDOURBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1EsS0FBSztRQUNqQjtNQUNGO01BQ0EsSUFBSUUsUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDWkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQ0csTUFBTSxDQUFDTyxRQUFRLENBQUM7UUFDL0IsQ0FBQyxNQUFNO1VBQ0xWLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDbkVBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1UsUUFBUTtRQUNwQjtNQUNGO01BQ0FiLElBQUksQ0FBQ29CLElBQUksQ0FBQ2pCLElBQUksQ0FBQztJQUNqQjtFQUNGLENBQUM7RUFDRCxPQUFPSCxJQUFJO0FBQ2IsQ0FBQzs7Ozs7Ozs7OztBQ3BGWTs7QUFFYkgsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBVXVCLEdBQUcsRUFBRUMsT0FBTyxFQUFFO0VBQ3ZDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO0lBQ1pBLE9BQU8sR0FBRyxDQUFDLENBQUM7RUFDZDtFQUNBLElBQUksQ0FBQ0QsR0FBRyxFQUFFO0lBQ1IsT0FBT0EsR0FBRztFQUNaO0VBQ0FBLEdBQUcsR0FBR0UsTUFBTSxDQUFDRixHQUFHLENBQUNHLFVBQVUsR0FBR0gsR0FBRyxDQUFDSSxPQUFPLEdBQUdKLEdBQUcsQ0FBQzs7RUFFaEQ7RUFDQSxJQUFJLGNBQWMsQ0FBQ0ssSUFBSSxDQUFDTCxHQUFHLENBQUMsRUFBRTtJQUM1QkEsR0FBRyxHQUFHQSxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDeEI7RUFDQSxJQUFJTCxPQUFPLENBQUNNLElBQUksRUFBRTtJQUNoQlAsR0FBRyxJQUFJQyxPQUFPLENBQUNNLElBQUk7RUFDckI7O0VBRUE7RUFDQTtFQUNBLElBQUksbUJBQW1CLENBQUNGLElBQUksQ0FBQ0wsR0FBRyxDQUFDLElBQUlDLE9BQU8sQ0FBQ08sVUFBVSxFQUFFO0lBQ3ZELE9BQU8sSUFBSSxDQUFDdkIsTUFBTSxDQUFDZSxHQUFHLENBQUNTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUNBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQzFFO0VBQ0EsT0FBT1QsR0FBRztBQUNaLENBQUM7Ozs7Ozs7Ozs7QUN6Qlk7O0FBRWJ4QixNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVSyxJQUFJLEVBQUU7RUFDL0IsSUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3JCLElBQUk0QixVQUFVLEdBQUc1QixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLElBQUksQ0FBQzRCLFVBQVUsRUFBRTtJQUNmLE9BQU8zQixPQUFPO0VBQ2hCO0VBQ0EsSUFBSSxPQUFPNEIsSUFBSSxLQUFLLFVBQVUsRUFBRTtJQUM5QixJQUFJQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJTyxJQUFJLEdBQUcsOERBQThELENBQUNoQyxNQUFNLENBQUMyQixNQUFNLENBQUM7SUFDeEYsSUFBSU0sYUFBYSxHQUFHLE1BQU0sQ0FBQ2pDLE1BQU0sQ0FBQ2dDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDOUMsSUFBSUUsVUFBVSxHQUFHVCxVQUFVLENBQUNVLE9BQU8sQ0FBQ3ZDLEdBQUcsQ0FBQyxVQUFVd0MsTUFBTSxFQUFFO01BQ3hELE9BQU8sZ0JBQWdCLENBQUNwQyxNQUFNLENBQUN5QixVQUFVLENBQUNZLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQ3JDLE1BQU0sQ0FBQ29DLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDbkYsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUFDdEMsT0FBTyxDQUFDLENBQUNFLE1BQU0sQ0FBQ2tDLFVBQVUsQ0FBQyxDQUFDbEMsTUFBTSxDQUFDLENBQUNpQyxhQUFhLENBQUMsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQztFQUN4RTtFQUNBLE9BQU8sQ0FBQ0osT0FBTyxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0pBQXFEO0FBQ2pHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLDBJQUFrRDtBQUM5Riw0Q0FBNEMsd0pBQXlEO0FBQ3JHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxvRUFBb0UsNEJBQTRCLHlEQUF5RCxxQkFBcUIsR0FBRyxjQUFjLDRCQUE0Qix5REFBeUQscUJBQXFCLEdBQUcsY0FBYyw0QkFBNEIseURBQXlELHFCQUFxQixHQUFHLGNBQWMsNEJBQTRCLHlEQUF5RCxxQkFBcUIsdUJBQXVCLEdBQUcsY0FBYyw0QkFBNEIseURBQXlELHFCQUFxQix1QkFBdUIsR0FBRyx1cUJBQXVxQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLDBKQUEwSixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLCtEQUErRCxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsZ0NBQWdDLDJCQUEyQixHQUFHLG9EQUFvRCwyQkFBMkIsNEJBQTRCLHFCQUFxQixtQkFBbUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsMEJBQTBCLGlEQUFpRCwwQkFBMEIsa0JBQWtCLDhCQUE4QixHQUFHLGVBQWUsMEJBQTBCLHFCQUFxQix5QkFBeUIsc0JBQXNCLEdBQUcsOEJBQThCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLFlBQVksR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLGtCQUFrQiwwQkFBMEIscUNBQXFDLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0Isd0JBQXdCLGNBQWMsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsY0FBYyxHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyxlQUFlLGVBQWUsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyx3Q0FBd0MsZ0JBQWdCLHNCQUFzQixHQUFHLDhDQUE4QyxrQkFBa0IsR0FBRyxnREFBZ0QsNENBQTRDLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLDZCQUE2QixHQUFHLGdEQUFnRCw4QkFBOEIsR0FBRywwQ0FBMEMsOEJBQThCLDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsK0NBQStDLDhDQUE4QyxtREFBbUQsR0FBRywrQ0FBK0MsOENBQThDLG1EQUFtRCxHQUFHLDZDQUE2Qyw4Q0FBOEMsbURBQW1ELEdBQUcsZ0RBQWdELDhDQUE4QyxtREFBbUQsR0FBRyw2Q0FBNkMsOENBQThDLG1EQUFtRCxHQUFHLDBCQUEwQixpREFBaUQsc0JBQXNCLGtCQUFrQiw0QkFBNEIsOEJBQThCLEdBQUcsa0NBQWtDLDBCQUEwQiw4QkFBOEIsb0JBQW9CLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLFlBQVksOEJBQThCLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGFBQWEsOEJBQThCLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyxXQUFXLDhCQUE4QixHQUFHLGFBQWEseUNBQXlDLEdBQUcsT0FBTyx5TEFBeUwsS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxLQUFLLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFlBQVksZUFBZSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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azovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVsb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVUJVTlRVICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4vKiBpY29ucyAqL1xcbi8qIGxheW91dCAqL1xcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcbmhlYWRlciBsb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZTZlNmU2O1xcbn1cXG5mb3JtIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb3JtIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgPiAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnNoaXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NjYztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YjRiNGI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuY3J1aXNlciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA0KTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDUpO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcblxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcblxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWExOWI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWUwZmQ7XFxufVxcblxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvZm9udHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBQzNCQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUQ0QkY7O0FDMUJBLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0UsY0FBQTtBRDZCRjs7QUMzQkE7RUFDRSxjQUFBO0FEOEJGOztBQzVCQTs7RUFFRSxnQkFBQTtBRCtCRjs7QUM3QkE7O0VBRUUsWUFBQTtBRGdDRjs7QUM5QkE7Ozs7RUFJRSxXQUFBO0VBQ0EsYUFBQTtBRGlDRjs7QUMvQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FEa0NGOztBQy9CQSxrQkFBQTtBRC9IQTtFQUNFLHNCQUFBO0FBa0tGOztBQS9KQSxXQUFBO0FBWUEsVUFBQTtBQUtBLFdBQUE7QUFrQkE7RUFDRSxzQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXJDVztBQXNLYjs7QUEvSEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWtJRjs7QUFoSUEsV0FBQTtBQUNBO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBcEJjO0VBcUJkLHlCQWhEZ0I7QUFtTGxCO0FBbElFO0VBQ0UscUJBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBcERjO0FBdUxsQjs7QUEvSEEsaUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQWtJRjs7QUFoSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0EzQ2M7RUE0Q2QsYUE5Q2M7RUErQ2QscUJBbERvQjtFQW1EcEIsZ0NBQUE7QUFtSUY7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBN0RVO0FBZ01kO0FBaklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQW5FVTtBQXNNZDtBQWpJRTtFQUNFLGFBQUE7QUFtSUo7QUFqSUU7RUFDRSxVQUFBO0FBbUlKOztBQWhJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FoRlk7QUFtTmQ7QUFsSUU7RUFDRSxhQUFBO0FBb0lKO0FBbElFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBb0lKO0FBbklJO0VBQ0UsYUFBQTtBQXFJTjtBQW5JSTtFQUNFLHVDQUFBO0FBcUlOO0FBbElFO0VBTUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQStISjtBQTlISTtFQUNFLHlCQXZIQztBQXVQUDtBQTlISTtFQUNFLHlCQS9IWTtFQWdJWix5QkFBQTtFQUNBLGtCQWJjO0VBY2QsaUJBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0FwQlU7RUFxQlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0F4QlU7RUF5QlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0E1QlU7RUE2QlYsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0FoQ1U7RUFpQ1YsOENBQUE7QUFnSU47QUE5SEk7RUFDRSx5Q0FwQ1U7RUFxQ1YsOENBQUE7QUFnSU47O0FBNUhBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsZUFsSWdCO0VBbUloQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFqS2dCO0FBZ1NsQjs7QUE1SEEsb0JBQUE7QUFFQTtFQUNFLHFCQWpKb0I7RUFrSnBCLHlCQUFBO0VBQ0EsZUE3SWdCO0FBMlFsQjs7QUE1SEE7RUFDRSxZQUFBO0FBK0hGOztBQTdIQTtFQUNFLHdCQUFBO0FBZ0lGOztBQTlIQTtFQUNFLHlCQUFBO0FBaUlGOztBQS9IQTtFQUNFLHlCQUFBO0FBa0lGOztBQWhJQTtFQUNFLHlCQUFBO0FBbUlGOztBQWpJQTtFQUNFLFlBQUE7QUFvSUY7O0FBbElBO0VBQ0UseUJBQUE7QUFxSUY7O0FBbklBO0VBQ0UseUJBQUE7QUFzSUY7O0FBcElBO0VBQ0UseUJBQUE7QUF1SUY7O0FBcklBO0VBQ0UseUJBQUE7QUF3SUY7O0FBdElBO0VBQ0Usb0NBQUE7QUF5SUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVUJVTlRVICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLFwiQHVzZSAnLi9mb250cy5jc3MnO1xcbkB1c2UgJy4vcmVzZXQtc3R5bGVzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJGhpZ2hsaWdodDogI2ZmY2NjYztcXG5cXG4kbWFpbi1jb2xvcjogIzJjM2E0NztcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTFmOWY0O1xcbiRoaWdobGlnaHQtY29sb3I6ICNmZmNjY2M7XFxuJGxhcmdlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiRmb250LXNpemU6IDFyZW07XFxuJHNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcbiRmYWRlLWNvbG9yOiAjZTZlNmU2O1xcbiRncmF5OiAjNGI0YjRiO1xcblxcbi8qIGljb25zICovXFxuJGljb24tc2l6ZTogMS4ycmVtO1xcbiRzbWFsbC1pY29uLXNpemU6IDFyZW07XFxuJHNtYWxsZXItaWNvbi1zaXplOiAwLjhyZW07XFxuXFxuLyogbGF5b3V0ICovXFxuLy8gc2l6ZVxcbiRleHRyYS1zbWFsbC1zaXplOiAwLjhyZW07XFxuJHNtYWxsZXItc2l6ZTogMXJlbTtcXG4kc21hbGwtc2l6ZTogMnJlbTtcXG4kY29tbW9uLXNpemU6IDNyZW07XFxuJGxhcmdlLXNpemU6IDRyZW07XFxuLy8gcmFkaXVzXFxuJGNvbW1vbi1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiRzbWFsbC1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuJHNtYWxsZXItYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4vLyBwYWRkaW5nXFxuJGxhcmdlLXBhZGRpbmc6IDRyZW07XFxuJGNvbW1vbi1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbC1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbGVyLXBhZGRpbmc6IDAuNXJlbTtcXG4kZXh0cmEtc21hbGwtcGFkZGluZzogMC4yNXJlbTtcXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAkc21hbGwtcGFkZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBsb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udC1zaXplO1xcbiAgfVxcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkc21hbGwtcGFkZGluZztcXG4gIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGZhZGUtY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICAucGxheWVycy5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIH1cXG4gIHNlY3Rpb24ucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICB9XFxuICBzZWN0aW9uID4gLm9wdGlvbi5jb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgPiAucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxuICAgIH1cXG4gIH1cXG4gIC5zaGlwcy5jb250YWluZXIge1xcbiAgICAkYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICRiYXNlLXNpemU6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gJGJvcmRlci13aWR0aCk7XFxuICAgICRzaGlwLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xcbiAgICAkYm9yZGVyLWNvbG9yOiAkZ3JheTtcXG4gICAgJGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1jb2xvcjtcXG4gICAgfVxcbiAgICAuc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXAtY29sb3I7XFxuICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG4gICAgLmRlc3Ryb3llciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAyKTtcXG4gICAgfVxcbiAgICAuc3VibWFyaW5lIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5jcnVpc2VyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5iYXR0bGVzaGlwIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDQpO1xcbiAgICB9XFxuICAgIC5jYXJyaWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDUpO1xcbiAgICB9XFxuICB9XFxufVxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGZhZGUtY29sb3I7XFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbn1cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XFxuXCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcblxuY29uc3QgUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgbGV0IHNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgY29uc3QgY3JlYXRlUGxheWVyRGF0YSA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmNvbXB1dGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgdHJ1ZSwgb2JqLnNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgZmFsc2UsIG9iai5zaXplKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllckRhdGEuZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXJEYXRhLm5hbWV9YF07XG4gICAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZUVsKTtcbiAgICAgICAgZ3JpZC5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICB9XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gZ3JpZDtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7a2V5fWApO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC50eXBlID0gYCR7a2V5fWA7XG4gICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyRGF0YS5uYW1lfWA7XG4gICAgICAgIHNoaXBzLmFwcGVuZChzaGlwRWwpO1xuICAgICAgfVxuICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVSb3RhdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0aW9uJyk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksXG4gICAgICBzaGlwQ29udGFpbmVyOiBjcmVhdGVTaGlwcygpLFxuICAgICAgYnV0dG9uQ29udGFpbmVyOiBjcmVhdGVSb3RhdGlvbkJ1dHRvbigpLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGRhdGEgPSBjcmVhdGVQbGF5ZXJEYXRhKG9iaik7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBlbGVtZW50czogY3JlYXRlR2FtZUVsZW1lbnRzKGRhdGEpLFxuICAgIG1hcmtXaW5uZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XG4gICAgfSxcbiAgICBlbmFibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5zaGlwT3JpZW50YXRpb247XG4gICAgICBlbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcExpc3QpKSB7XG4gICAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkU2hpcEV2ZW50TGlzdGVuZXIgPSAoc2hpcExpc3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBzKSkge1xuICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXIgPSAoc3F1YXJlTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gc3F1YXJlTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKS5lbGVtZW50cztcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgICBhZGRTaGlwRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkR3JpZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICAgIH0sXG4gICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlO1xuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5hYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGNvbnN0IHByb2Nlc3NBdHRhY2sgPSAoYXR0YWNrUmVzdWx0QXJnLCBzcXVhcmVOb2RlKSA9PiB7XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHRBcmcgPT09IG51bGwpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHRBcmcpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgICBzcXVhcmVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF0dGFja0NvbnRlbnQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgICAgICBzcXVhcmVOb2RlLmRhdGFzZXQuaWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9jZXNzQXR0YWNrKGF0dGFja0NvbnRlbnQsIHNxdWFyZU5vZGUpO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVSZWNlaXZpbmdBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmVOb2RlO1xuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIH0sXG4gICAgdW5mYWRlUGxheWVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgfSxcbiAgICBoaWRlUGxhY2VkU2hpcHMoKSB7XG4gICAgICBjb25zdCBzaGlwU3F1YXJlcyA9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VkJyk7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc2hpcFNxdWFyZXMpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1BsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc3F1YXJlc0RhdGEgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnNxdWFyZXM7XG4gICAgICBjb25zdCBzcXVhcmVzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXI7XG4gICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3F1YXJlc0RhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZXNFbGVtZW50c1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtrZXl9XCJdYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNTaGlwUGxhY2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb21wb25lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lLCBtZXNzYWdlIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5sZWZ0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLnJpZ2h0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgbWVzc2FnZTogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5tZXNzYWdlJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ICBidXR0b24ucm90YXRpb24nKSxcbiAgICB9LFxuICAgIGNvbnRpbnVlQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbnRpbnVlJyksXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgIGJ1dHRvbi5yb3RhdGlvbicpLFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgbWVzc2FnZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgfTtcbn0pKCk7XG4vLyBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4vLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ub3JpZW50YXRpb24nKTtcbi8vIHJldHVybiBidXR0b247XG4vLyB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyQ29tcG9uZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyc7XG5pbXBvcnQge1xuICBmb3JtIGFzIGZvcm1XaW5kb3csXG4gIGdhbWUgYXMgZ2FtZVdpbmRvdyxcbiAgbWVzc2FnZSBhcyBtZXNzYWdlV2luZG93LFxufSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybVdpbmRvdy5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybVdpbmRvdy5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm1XaW5kb3cuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICAvLyBoaWRlRWxlbWVudChyaWdodFBsYXllci5uYW1lLmVycm9yKTtcbiAgICAgIC8vIGhpZGVFbGVtZW50KGxlZnRQbGF5ZXIubmFtZS5lcnJvcik7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm1XaW5kb3cuY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9O1xuICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSBnYW1lUHJvcGVydGllc0FyZztcbiAgICBjb25zdCBnYW1lRWxlbWVudHMgPSBnYW1lV2luZG93O1xuICAgIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMCkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLnNoaXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzPy5lbGVtZW50cy5idXR0b25Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLmdyaWRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLnNoaXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGhpZGVFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMSkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVFbGVtZW50cy5sZWZ0UGxheWVyLmdhbWVib2FyZC5hcHBlbmQoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllci5zaGlwcy5hcHBlbmQoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllci5jb250YWluZXIuYXBwZW5kKFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSBuZXcgUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgZm9ybURhdGEucmlnaHRQbGF5ZXIsXG4gICAgICApO1xuICAgICAgZ2FtZUVsZW1lbnRzLnJpZ2h0UGxheWVyLmdhbWVib2FyZC5hcHBlbmQoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllci5zaGlwcy5hcHBlbmQoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllci5jb250YWluZXIuYXBwZW5kKFxuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLFxuICAgICAgKTtcbiAgICAgIHNob3dFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLnN0YXJ0aW5nO1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAyKSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zaGlwUGxhY2VtZW50O1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkgJiZcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpXG4gICAgICApIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kaXNhYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmhpZGVQbGFjZWRTaGlwcygpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5wbGF5aW5nO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5pc1NoaXBQbGFjZWQoKSB8fFxuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKClcbiAgICAgICkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRpc2FibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaGlkZVBsYWNlZFNoaXBzKCk7XG5cbiAgICAgICAgY29uc3QgdGVtcCA9IGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMgPSBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IHRlbXA7XG5cbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZmFkZVBsYXllcigpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSA0KSB7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmRhdGEuY2hlY2tGb3JMb3NzKCkpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMud2luO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVtcCA9IGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLnR1cm4oZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBjb25zb2xlLmxvZyhnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5jaGVja0Zvckxvc3MoKSk7XG5cbiAgICAgIC8vIGlmIChlbmFibGVSZWNlaXZpbmdBdHRhY2suc3RhdHVzKSB7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gNSkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMubWFya1dpbm5lcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5zaG93UGxhY2VkU2hpcHMoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5zaG93UGxhY2VkU2hpcHMoKTtcbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS53aW4oZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5mb3JtUHJvY2Vzc2luZztcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdGlhbGl6YXRpb25cblxuICBjb25zdCBwaGFzZXMgPSB7XG4gICAgZm9ybVByb2Nlc3Npbmc6IDAsXG4gICAgY29tcG9uZW50Q3JlYXRpb246IDEsXG4gICAgc3RhcnRpbmc6IDIsXG4gICAgc2hpcFBsYWNlbWVudDogMyxcbiAgICBwbGF5aW5nOiA0LFxuICAgIHdpbjogNSxcbiAgfTtcbiAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSB7XG4gICAgcGhhc2U6IHBoYXNlcy5mb3JtUHJvY2Vzc2luZyxcbiAgICBwbGFjZW1lbnRPcmllbnRhdGlvbjogJ3YnLFxuICAgIGFjdGl2ZUNvbXBvbmVudHM6IG51bGwsXG4gICAgaW5hY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICB9O1xuICBjb25zdCBza2lwRm9ybVBoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnLCBmb3JtRGF0YUFyZykge1xuICAgIC8vIGNvbnN0IGxlZnRQbGF5ZXJEYXRhID0ge31cbiAgICBmb3JtRGF0YUFyZy5sZWZ0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgc2l6ZTogJzgnLFxuICAgICAgY29tcHV0ZXI6IGZhbHNlLFxuICAgIH07XG4gICAgZm9ybURhdGFBcmcucmlnaHRQbGF5ZXIgPSB7XG4gICAgICBuYW1lOiAnU2FyYWgnLFxuICAgICAgc2l6ZTogJzEyJyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLmNvbXBvbmVudENyZWF0aW9uO1xuICB9O1xuICBjb25zdCBza2lwVG9XaW5QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgfTtcbiAgLy8gc2tpcEZvcm1QaGFzZShnYW1lUHJvcGVydGllcywgZm9ybURhdGEpO1xuICAvLyBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAvLyBza2lwVG9XaW5QaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIGdhbWVXaW5kb3cuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIFBsYXllckNvbXBvbmVudHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lbG9vcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUgPSAnQ29tcHV0ZXInLCBpc0NvbXB1dGVyID0gZmFsc2UsIHNpemUpIHtcbiAgY29uc3QgYXR0YWNoR2FtZWJvYXJkID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkLmNyZWF0ZUJvYXJkKHNpemUpO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpc0NvbXB1dGVyOiBpc0NvbXB1dGVyLFxuICAgIHByZXZpb3VzSGl0OiBmYWxzZSxcbiAgICBnYW1lYm9hcmQ6IGF0dGFjaEdhbWVib2FyZChzaXplKSxcbiAgICBhdHRhY2soZW5lbXksIG1vdmUpIHtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5nYW1lYm9hcmQuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV0/LmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbVNxdWFyZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNxdWFyZSgpKTtcbiAgICB9LFxuICAgIGNoZWNrRm9yTG9zcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5hcmVTaGlwc1N1bmsoKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiksXG4gICAgc3VibWFyaW5lOiBuZXcgU2hpcCgzKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzKSxcbiAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbi8vIGltcG9ydCB7IGdhbWUsIGZvcm0gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJQbGF5ZXIiLCJQbGF5ZXJDb21wb25lbnRzIiwib2JqIiwic2hpcE9yaWVudGF0aW9uIiwiY3JlYXRlUGxheWVyRGF0YSIsImNvbXB1dGVyIiwibmFtZSIsInNpemUiLCJjcmVhdGVHYW1lRWxlbWVudHMiLCJwbGF5ZXJEYXRhIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYW1lYm9hcmQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiT2JqZWN0Iiwia2V5cyIsInNxdWFyZXMiLCJrZXkiLCJzcXVhcmVFbCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwcyIsInNoaXBFbCIsInR5cGUiLCJjcmVhdGVSb3RhdGlvbkJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDb250YWluZXIiLCJzaGlwQ29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiZWxlbWVudHMiLCJtYXJrV2lubmVyIiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsInJvdGF0aW9uIiwicmVtb3ZlIiwiZW5hYmxlRHJhZ2dhYmxlIiwic2hpcExpc3QiLCJ2YWx1ZXMiLCJzaGlwIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsImFkZEdyaWRFdmVudExpc3RlbmVyIiwic3F1YXJlTGlzdCIsInNxdWFyZSIsInByZXZlbnREZWZhdWx0IiwibW96U291cmNlTm9kZSIsInNxdWFyZVN0ciIsInN0YXR1cyIsImNoZWNrUGxhY2VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbGlkIiwic2VsZWN0ZWRTcXVhcmVzIiwicGxhY2VTaGlwIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGVTaGlwUGxhY2VtZW50IiwiY2hpbGROb2RlcyIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJlbmFibGVSZWNlaXZpbmdBdHRhY2siLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiYXR0YWNrQ29udGVudCIsInJlY2VpdmVBdHRhY2siLCJkaXNhYmxlUmVjZWl2aW5nQXR0YWNrIiwiZmFkZVBsYXllciIsInVuZmFkZVBsYXllciIsImhpZGVQbGFjZWRTaGlwcyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJlbnRyaWVzIiwidmFsdWUiLCJvY2N1cGllcyIsImlzU2hpcFBsYWNlZCIsImlzT25lU2hpcFBsYWNlZCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsImNvbnRhaW5lciIsImxlZnRQbGF5ZXIiLCJpbnB1dCIsImVycm9yIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJyb3RhdGlvbkJ1dHRvbiIsImNvbnRpbnVlQnV0dG9uIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImFyZVNoaXBzU3VuayIsImlzU3VuayIsInNxdWFyZUlkU3RyIiwiaGl0IiwiZm9ybVdpbmRvdyIsImdhbWVXaW5kb3ciLCJtZXNzYWdlV2luZG93IiwiR2FtZWxvb3AiLCJmb3JtRGF0YSIsInByb2Nlc3NGb3JtIiwic2hvd0VsZW1lbnQiLCJ0b2dnbGVQbGF5ZXJJbnB1dCIsInBsYXllciIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImxlZnRQbGF5ZXJWYWxpZCIsInZhbGlkaXR5IiwicmlnaHRQbGF5ZXJWYWxpZCIsImhpZGVFbGVtZW50IiwiZ2V0Rm9ybUlucHV0IiwiZ2FtZVByb3BlcnRpZXMiLCJwaGFzZSIsInBoYXNlcyIsImNvbXBvbmVudENyZWF0aW9uIiwicHJvY2Vzc1BoYXNlIiwicmVzZXQiLCJkaXNwbGF5RXJyb3IiLCJzaG93RXJyb3IiLCJlcnJvckNvbnRhaW5lciIsIm1zZyIsInBsYXllckFyZyIsInZhbHVlTWlzc2luZyIsInNldEJhc2VVbml0U2l6ZSIsInNxdWFyZUhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiY2hhbmdlTWVzc2FnZSIsIm1lc3NhZ2VDb250YWluZXIiLCJ3aW4iLCJ0dXJuIiwiZ2FtZVByb3BlcnRpZXNBcmciLCJnYW1lRWxlbWVudHMiLCJhY3RpdmVDb21wb25lbnRzIiwiaW5hY3RpdmVDb21wb25lbnRzIiwic3RhcnRpbmciLCJzaGlwUGxhY2VtZW50IiwicGxheWluZyIsInRlbXAiLCJjaGVja0Zvckxvc3MiLCJjb25zb2xlIiwibG9nIiwiZm9ybVByb2Nlc3NpbmciLCJwbGFjZW1lbnRPcmllbnRhdGlvbiIsInNraXBGb3JtUGhhc2UiLCJmb3JtRGF0YUFyZyIsInNraXBUb1dpblBoYXNlIiwiaXNDb21wdXRlciIsImF0dGFjaEdhbWVib2FyZCIsInByZXZpb3VzSGl0IiwiYXR0YWNrIiwiZW5lbXkiLCJtb3ZlIiwiY29tcHV0ZXJBdHRhY2siLCJnYW1lYm9hcmRTaXplIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tU3F1YXJlIiwiU2hpcCIsIm9yaWVudCIsImhpdHMiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9