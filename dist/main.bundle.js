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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container > .ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container > .ships .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container > .ships .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container > .ships .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container > .ships .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container > .ships .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #ad5d57;\n}\n\n.miss {\n  background-color: #5795ad;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  section {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $extra-small-size;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container > .ships {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #ad5d57;\n}\n.miss {\n  background-color: #5795ad;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
    button.textContent = 'Vertical';
    button.addEventListener('click', function () {
      if (gamePropertiesArg.placementOrientation === 'v') {
        button.textContent = 'Horizontal';
        gamePropertiesArg.placementOrientation = 'h';
      } else {
        button.textContent = 'Vertical';
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
  var markWinner = function markWinner(player) {
    player.elements.gridContainer.classList.add('winner');
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
          // showElement(message.container);
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
  var fadePLayer = function fadePLayer(player) {
    player.elements.gridContainer.classList.add('fade');
  };
  var unfadePlayer = function unfadePlayer(player) {
    player.elements.gridContainer.classList.remove('fade');
  };
  var processPhase = function processPhase(gamePropertiesArg) {
    var game = gamePropertiesArg;
    if (game.phase === 1) {
      enableShipPlacement(game.activeComponents);
      game.phase = phases.shipPlacement;
      processPhase(game);
    } else if (game.phase === 2) {
      var shipReqOne = game.activeComponents.data.gameboard.isOneShipPlaced();
      var shipReqTwo = game.inactiveComponents.data.gameboard.isOneShipPlaced();
      if (shipReqOne && shipReqTwo) {
        disableShipPlacement(game.activeComponents);
        game.phase = phases.playing;
        processPhase(game);
      } else if (shipReqOne || shipReqTwo) {
        var temp = game.activeComponents;
        game.activeComponents = game.inactiveComponents;
        game.inactiveComponents = temp;
        disableShipPlacement(game.inactiveComponents);
        enableShipPlacement(game.activeComponents);
      }
    } else if (game.phase === 3) {
      var _temp = game.activeComponents;
      game.activeComponents = game.inactiveComponents;
      game.inactiveComponents = _temp;
      fadePLayer(game.activeComponents);
      unfadePlayer(game.inactiveComponents);
      enableAttackOn(game.inactiveComponents, game.activeComponents);
      changeMessage().turn(game.activeComponents);
      if (enableAttackOn.status) {}
    } else if (game.phase === 4) {
      unfadePlayer(game.activeComponents);
      markWinner(game.activeComponents);
      changeMessage().win(game.activeComponents);
      game.phase = 1;
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
  var phases = {
    formProcessing: 0,
    starting: 1,
    shipPlacement: 2,
    playing: 3,
    win: 4
  };
  var gameProperties = {
    phase: phases.win,
    placementOrientation: 'v',
    activeComponents: playerComponentsLeft,
    inactiveComponents: playerComponentsRight
  };
  processForm();
  hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
  enableShipPlacement(gameProperties.activeComponents);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0E7QUFDbEM7QUFDQSx1RCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ1ZDU3O1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5NWFkO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QUMzQkE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FENEJGOztBQzFCQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUQ2QkY7O0FDM0JBO0VBQ0UsY0FBQTtBRDhCRjs7QUM1QkE7O0VBRUUsZ0JBQUE7QUQrQkY7O0FDN0JBOztFQUVFLFlBQUE7QURnQ0Y7O0FDOUJBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QURpQ0Y7O0FDL0JBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRGtDRjs7QUMvQkEsa0JBQUE7QUQvSEE7RUFDRSxzQkFBQTtBQWtLRjs7QUEvSkEsV0FBQTtBQVlBLFVBQUE7QUFLQSxXQUFBO0FBa0JBO0VBQ0Usc0JBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyQ1c7QUFzS2I7O0FBL0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFrSUY7O0FBaElBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQXBCYztFQXFCZCx5QkFoRGdCO0FBbUxsQjtBQWxJRTtFQUNFLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQXBEYztBQXVMbEI7O0FBL0hBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFrSUY7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0F6Q2M7RUEwQ2QsYUE1Q2M7RUE2Q2QscUJBaERvQjtFQWlEcEIsZ0NBQUE7QUFtSUY7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBOURlO0FBaU1uQjs7QUFoSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBbEVZO0FBcU1kO0FBbElFO0VBQ0UsYUFBQTtBQW9JSjtBQWxJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQW9JSjtBQW5JSTtFQUNFLGFBQUE7QUFxSU47QUFuSUk7RUFDRSx1Q0FBQTtBQXFJTjtBQWxJRTtFQU1FLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUErSEo7QUE5SEk7RUFDRSx5QkF6R0M7QUF5T1A7QUE5SEk7RUFDRSx5QkFqSFk7RUFrSFoseUJBQUE7RUFDQSxrQkFiYztFQWNkLGlCQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBcEJVO0VBcUJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBeEJVO0VBeUJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBNUJVO0VBNkJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBaENVO0VBaUNWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBcENVO0VBcUNWLDhDQUFBO0FBZ0lOOztBQTVIQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLGVBcEhnQjtFQXFIaEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBbkpnQjtBQWtSbEI7O0FBNUhBLG9CQUFBO0FBRUE7RUFDRSxxQkFuSW9CO0VBb0lwQix5QkFBQTtFQUNBLGVBL0hnQjtBQTZQbEI7O0FBNUhBO0VBQ0UsWUFBQTtBQStIRjs7QUE3SEE7RUFDRSx3QkFBQTtBQWdJRjs7QUE5SEE7RUFDRSx5QkFBQTtBQWlJRjs7QUEvSEE7RUFDRSx5QkFBQTtBQWtJRjs7QUFoSUE7RUFDRSx5QkFBQTtBQW1JRjs7QUFqSUE7RUFDRSxZQUFBO0FBb0lGOztBQWxJQTtFQUNFLHlCQUFBO0FBcUlGOztBQW5JQTtFQUNFLHlCQUFBO0FBc0lGOztBQXBJQTtFQUNFLHlCQUFBO0FBdUlGOztBQXJJQTtFQUNFLHlCQUFBO0FBd0lGOztBQXRJQTtFQUNFLG9DQUFBO0FBeUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG4kZ3JheTogIzRiNGI0YjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGV4dHJhLXNtYWxsLXNpemU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDVkNTc7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzk1YWQ7XFxufVxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UsIG9yaWVudGF0aW9uQnV0dG9uIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgb3B0aW9uczoge1xuICAgICAgb3B0aW9uQ29tcHV0ZXI6IHtcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25TaXplOiB7XG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm9wdGlvbi5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3Rvcignb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGxheWVyczoge1xuICAgICAgcGxheWVyT25lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0Lm9uZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5vbmUgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJUd286IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQudHdvJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnR3byA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBtZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufSkoKTtcbmNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm9yaWVudGF0aW9uJyk7XG4gIHJldHVybiBidXR0b247XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3F1YXJlLm9jY3VwaWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UsIG9yaWVudGF0aW9uQnV0dG9uIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmb3JtLm9wdGlvbnM7XG4gICAgY29uc3QgcGxheWVycyA9IGZvcm0ucGxheWVycztcbiAgICBjb25zdCBhZGRGb3JtRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQTGF5ZXJUd28oKTtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucy5vcHRpb25TaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5U2xpZGVyVmFsdWUob3B0aW9ucy5vcHRpb25TaXplLmlucHV0LCBvcHRpb25zLm9wdGlvblNpemUub3V0cHV0KTtcbiAgICAgIH0pO1xuICAgICAgZm9ybS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgaGlkZUVsZW1lbnQocGxheWVyc1twbGF5ZXJdLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVycy5wbGF5ZXJPbmUuaW5wdXQudmFsaWRpdHkudmFsaWQgJiZcbiAgICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC52YWxpZGl0eS52YWxpZFxuICAgICAgICApIHtcbiAgICAgICAgICBjcmVhdGVHYW1lQ29tcG9uZW50cyhnZXRGb3JtSW5wdXQocGxheWVycywgb3B0aW9ucykpO1xuICAgICAgICAgIGZvcm0uY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICAgICAgaGlkZUVsZW1lbnQoZm9ybS5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IocGxheWVyc1twbGF5ZXJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yQ29udGFpbmVyLCBtc2cpIHtcbiAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gbXNnO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlUExheWVyVHdvID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdGlvbnMub3B0aW9uQ29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllcnMucGxheWVyVHdvLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXJzLnBsYXllclR3by5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZGlzcGxheVNsaWRlclZhbHVlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQpIHtcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllcnMsIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TmFtZSA9IHBsYXllcnMucGxheWVyT25lLmlucHV0LnZhbHVlO1xuICAgICAgY29uc3Qgc2Vjb25kTmFtZSA9IHBsYXllcnMucGxheWVyVHdvLmlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgY29tcHV0ZXJPcHRpb24gPSBvcHRpb25zLm9wdGlvbkNvbXB1dGVyLmlucHV0LmNoZWNrZWQ7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gb3B0aW9ucy5vcHRpb25TaXplLmlucHV0LnZhbHVlO1xuXG4gICAgICByZXR1cm4geyBmaXJzdE5hbWUsIHNlY29uZE5hbWUsIGNvbXB1dGVyT3B0aW9uLCBnYW1lYm9hcmRTaXplIH07XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5RXJyb3IgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAocGxheWVyLmlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBzaG93RXJyb3IocGxheWVyLmVycm9yLCAnQSBuYW1lIGlzIHJlcXVpcmVkLicpO1xuICAgICAgfVxuICAgIH07XG4gICAgYWRkRm9ybUV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUdhbWVDb21wb25lbnRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBnYW1lLmNvbnRhaW5lcjtcbiAgICAvLyBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBnYW1lLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLnBsYXllcicpO1xuICAgIGNvbnN0IGNyZWF0ZVBsYXllckRhdGEgPSAob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvbXB1dGVyT3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCB0cnVlLCBvYmouZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgZmFsc2UsIG9iai5nYW1lYm9hcmRTaXplKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3BsYXllci5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7cGxheWVyLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXIuZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgICBzcXVhcmVFbC5kYXRhc2V0Lm93bmVyID0gW2Ake3BsYXllci5uYW1lfWBdO1xuICAgICAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZUVsKTtcbiAgICAgICAgICBncmlkLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgICBncmlkLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgICB9XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsICdjb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgICB9O1xuICAgICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzKSkge1xuICAgICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7a2V5fWApO1xuICAgICAgICAgIHNoaXBFbC5kYXRhc2V0LnR5cGUgPSBgJHtrZXl9YDtcbiAgICAgICAgICBzaGlwRWwuZGF0YXNldC5vd25lciA9IGAke3BsYXllci5uYW1lfWA7XG4gICAgICAgICAgc2hpcHMuYXBwZW5kKHNoaXBFbCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnLCAnaGlkZScpO1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgZ3JpZENvbnRhaW5lcjogY3JlYXRlR3JpZCgpLCBzaGlwQ29udGFpbmVyOiBjcmVhdGVTaGlwcygpIH07XG4gICAgfTtcbiAgICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgICAvLyBtYWtlIHNoaXAgd2lkdGggdGhlIHNhbWUgYXMgc3F1YXJlIHdpZHRoXG4gICAgICBjb25zdCBzcXVhcmVIZWlnaHQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIjAsMFwiXWApLm9mZnNldEhlaWdodDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYmFzZS11bml0LXNpemUnLFxuICAgICAgICBgJHtzcXVhcmVIZWlnaHR9cHhgLFxuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVQbGF5ZXJEYXRhKG9iaik7XG4gICAgY29uc3QgZWxlbWVudHMgPSBjcmVhdGVHYW1lRWxlbWVudHMoZGF0YSk7XG5cbiAgICBzaG93RWxlbWVudChnYW1lQ29udGFpbmVyKTtcbiAgICAvLyBzZXRCYXNlVW5pdFNpemUoKTtcbiAgICByZXR1cm4geyBkYXRhLCBlbGVtZW50cyB9O1xuICB9O1xuICBjb25zdCBjaGFuZ2VPcmllbnRhdGlvbiA9IGZ1bmN0aW9uIChidXR0b24sIGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXNBcmcucGxhY2VtZW50T3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBsYWNlbWVudE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgZ2FtZVByb3BlcnRpZXNBcmcucGxhY2VtZW50T3JpZW50YXRpb24gPSAndic7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGVuYWJsZVNoaXBQbGFjZW1lbnQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgY29uc3QgZGF0YSA9IHBsYXllci5kYXRhO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGxheWVyLmVsZW1lbnRzO1xuICAgIHBsYXllci5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBjb25zdCBlbmFibGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAoc2hpcExpc3QpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwTGlzdCkpIHtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkU2hpcEV2ZW50TGlzdGVuZXIgPSAoc2hpcExpc3QpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBzID0gc2hpcExpc3Q7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcHMpKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCBgJHtlLnRhcmdldH1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBhZGRHcmlkRXZlbnRMaXN0ZW5lciA9IChzcXVhcmVMaXN0KSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gc3F1YXJlTGlzdDtcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBPYmplY3QudmFsdWVzKGdyaWQpKSB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICApO1xuICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgKS5lbGVtZW50cztcbiAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBlbmFibGVEcmFnZ2FibGUoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICBhZGRTaGlwRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgIGFkZEdyaWRFdmVudExpc3RlbmVyKGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZVNoaXBQbGFjZW1lbnQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgcGxheWVyLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vIGhpZGUgc2hpcHNcbiAgICAvLyByZW1vdmVldmVudGxpc3RlbmVyIGZyb20gYWxsIHNxdWFyZXNcbiAgICBjb25zdCBzcXVhcmVzID0gcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlO1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBtYXJrV2lubmVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICB9O1xuICBjb25zdCBlbmFibGVBdHRhY2tPbiA9IGZ1bmN0aW9uIChwbGF5ZXJBcmcsIHBoYXNlQXJnID0gZ2FtZVByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHBsYXllckFyZy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IGZ1bmN0aW9uIChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpIHtcbiAgICAgIGlmIChhdHRhY2tSZXN1bHRBcmcgPT09IG51bGwpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICBpZiAocGxheWVyQXJnLmRhdGEuY2hlY2tGb3JMb3NzKCkpIHtcbiAgICAgICAgICAvLyBzaG93RWxlbWVudChtZXNzYWdlLmNvbnRhaW5lcik7XG4gICAgICAgICAgZGlzYWJsZUF0dGFja09uKHBsYXllckFyZyk7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMud2luO1xuICAgICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgIHNxdWFyZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGFja0NvbnRlbnQgPSBwbGF5ZXJBcmcuZGF0YS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICBzcXVhcmVOb2RlLmRhdGFzZXQuaWQsXG4gICAgICAgICk7XG4gICAgICAgIHByb2Nlc3NBdHRhY2soYXR0YWNrQ29udGVudCwgc3F1YXJlTm9kZSk7XG4gICAgICAgIGRpc2FibGVBdHRhY2tPbihwbGF5ZXJBcmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkaXNhYmxlQXR0YWNrT24gPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgY29uc3Qgc3F1YXJlTm9kZXMgPSBwbGF5ZXIuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZU5vZGU7XG4gICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZhZGVQTGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICB9O1xuICBjb25zdCB1bmZhZGVQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICB9O1xuICBjb25zdCBwcm9jZXNzUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBjb25zdCBnYW1lID0gZ2FtZVByb3BlcnRpZXNBcmc7XG4gICAgaWYgKGdhbWUucGhhc2UgPT09IDEpIHtcbiAgICAgIGVuYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGdhbWUucGhhc2UgPSBwaGFzZXMuc2hpcFBsYWNlbWVudDtcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lKTtcbiAgICB9IGVsc2UgaWYgKGdhbWUucGhhc2UgPT09IDIpIHtcbiAgICAgIGNvbnN0IHNoaXBSZXFPbmUgPSBnYW1lLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgICBjb25zdCBzaGlwUmVxVHdvID1cbiAgICAgICAgZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgICBpZiAoc2hpcFJlcU9uZSAmJiBzaGlwUmVxVHdvKSB7XG4gICAgICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICAgIGdhbWUucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWUpO1xuICAgICAgfSBlbHNlIGlmIChzaGlwUmVxT25lIHx8IHNoaXBSZXFUd28pIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGdhbWUuYWN0aXZlQ29tcG9uZW50cztcbiAgICAgICAgZ2FtZS5hY3RpdmVDb21wb25lbnRzID0gZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICAgIGdhbWUuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgICBlbmFibGVTaGlwUGxhY2VtZW50KGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lLnBoYXNlID09PSAzKSB7XG4gICAgICBjb25zdCB0ZW1wID0gZ2FtZS5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgZ2FtZS5hY3RpdmVDb21wb25lbnRzID0gZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICBnYW1lLmluYWN0aXZlQ29tcG9uZW50cyA9IHRlbXA7XG4gICAgICBmYWRlUExheWVyKGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICB1bmZhZGVQbGF5ZXIoZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZW5hYmxlQXR0YWNrT24oZ2FtZS5pbmFjdGl2ZUNvbXBvbmVudHMsIGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkudHVybihnYW1lLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgaWYgKGVuYWJsZUF0dGFja09uLnN0YXR1cykge1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZS5waGFzZSA9PT0gNCkge1xuICAgICAgdW5mYWRlUGxheWVyKGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBtYXJrV2lubmVyKGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWUuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBnYW1lLnBoYXNlID0gMTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhpZGVQbGFjZWRTaGlwcyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgcGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWQnKTtcbiAgICBmb3IgKGxldCBzcXVhcmUgaW4gc2hpcFNxdWFyZXMpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNob3dQbGFjZWRTaGlwcyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgY29uc3Qgc3F1YXJlc0RhdGEgPSBwbGF5ZXJDb21wb25lbnRzLmRhdGEuZ2FtZWJvYXJkLnNxdWFyZXM7XG4gICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gcGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVycy5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzRGF0YSkge1xuICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICBzcXVhcmVzRWxlbWVudHMucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3NxdWFyZX1cIl1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGNoYW5nZU1lc3NhZ2UgPSBmdW5jdGlvbiAoY29udGFpbmVyID0gbWVzc2FnZS5jb250YWluZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHJldHVybiB7XG4gICAgICB3aW46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUaGUgd2lubmVyIGlzICR7cGxheWVyLmRhdGEubmFtZX1gO1xuICAgICAgfSxcbiAgICAgIHR1cm46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBJdCBpcyAke3BsYXllci5kYXRhLm5hbWV9J3MgdHVybmA7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG4gIC8qIGxvb3AgKi9cbiAgY29uc3QgY3VzdG9tTGVmdE9iaiA9IHtcbiAgICBuYW1lOiAnR3JlZ29yJyxcbiAgICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gICAgZ2FtZWJvYXJkU2l6ZTogJzEzJyxcbiAgfTtcbiAgY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gICAgbmFtZTogJ0NvbXB1dGVyJyxcbiAgICBjb21wdXRlck9wdGlvbjogdHJ1ZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnNycsXG4gIH07XG4gIGNvbnN0IGxlZnQgPSBnYW1lLmxlZnRQbGF5ZXI7XG4gIGNvbnN0IHJpZ2h0ID0gZ2FtZS5yaWdodFBsYXllcjtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c0xlZnQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21MZWZ0T2JqKTtcbiAgY29uc3QgcGxheWVyQ29tcG9uZW50c1JpZ2h0ID0gY3JlYXRlR2FtZUNvbXBvbmVudHMoY3VzdG9tUmlnaHRPYmopO1xuICBsZWZ0LmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gIGxlZnQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNMZWZ0LmVsZW1lbnRzLnNoaXBDb250YWluZXIpO1xuICByaWdodC5nYW1lYm9hcmQuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgcmlnaHQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIHN0YXJ0aW5nOiAxLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDIsXG4gICAgcGxheWluZzogMyxcbiAgICB3aW46IDQsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMud2luLFxuICAgIHBsYWNlbWVudE9yaWVudGF0aW9uOiAndicsXG4gICAgYWN0aXZlQ29tcG9uZW50czogcGxheWVyQ29tcG9uZW50c0xlZnQsXG4gICAgaW5hY3RpdmVDb21wb25lbnRzOiBwbGF5ZXJDb21wb25lbnRzUmlnaHQsXG4gIH07XG4gIHByb2Nlc3NGb3JtKCk7XG4gIGhpZGVFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcblxuICBlbmFibGVTaGlwUGxhY2VtZW50KGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICBjaGFuZ2VPcmllbnRhdGlvbihvcmllbnRhdGlvbkJ1dHRvbiwgZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUNvbXBvbmVudHMsXG4gICAgcHJvY2Vzc0Zvcm0sXG4gICAgZW5hYmxlU2hpcFBsYWNlbWVudCxcbiAgICBoaWRlRWxlbWVudCxcbiAgICBzaG93RWxlbWVudCxcbiAgICAvLyBlbmFibGVBdHRhY2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lbG9vcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgUGxheWVyID0gZnVuY3Rpb24gKG5hbWUgPSAnQ29tcHV0ZXInLCBpc0NvbXB1dGVyID0gZmFsc2UsIHNpemUpIHtcbiAgY29uc3QgYXR0YWNoR2FtZWJvYXJkID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkLmNyZWF0ZUJvYXJkKHNpemUpO1xuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpc0NvbXB1dGVyOiBpc0NvbXB1dGVyLFxuICAgIHByZXZpb3VzSGl0OiBmYWxzZSxcbiAgICBnYW1lYm9hcmQ6IGF0dGFjaEdhbWVib2FyZChzaXplKSxcbiAgICBhdHRhY2soZW5lbXksIG1vdmUpIHtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5nYW1lYm9hcmQuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV0/LmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbVNxdWFyZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNxdWFyZSgpKTtcbiAgICB9LFxuICAgIGNoZWNrRm9yTG9zcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5hcmVTaGlwc1N1bmsoKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGlwID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiBzaXplLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiksXG4gICAgc3VibWFyaW5lOiBuZXcgU2hpcCgzKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzKSxcbiAgICBiYXR0bGVzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbi8vIGltcG9ydCB7IGdhbWUsIGZvcm0gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJmb3JtIiwiZ2FtZSIsIm1lc3NhZ2UiLCJvcmllbnRhdGlvbkJ1dHRvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsIm9wdGlvbkNvbXB1dGVyIiwiaW5wdXQiLCJvcHRpb25TaXplIiwib3V0cHV0IiwicGxheWVycyIsInBsYXllck9uZSIsImVycm9yIiwicGxheWVyVHdvIiwibGVmdFBsYXllciIsImdhbWVib2FyZCIsInNoaXBzIiwicmlnaHRQbGF5ZXIiLCJTaGlwcyIsIkdhbWVib2FyZCIsInNxdWFyZXMiLCJpc09uZVNoaXBQbGFjZWQiLCJjaGVja1BsYWNlbWVudCIsInNxdWFyZVN0ciIsInNoaXBEYXRhIiwic2hpcE9yaWVudCIsInNxdWFyZUlkIiwic3BsaXQiLCJlbCIsIk51bWJlciIsInBsYWNlZCIsImVsZW1lbnRzIiwidmFsaWQiLCJzaXplIiwibmVpZ2hib3VyU3RyIiwib2NjdXBpZXMiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5Iiwic2hpcCIsInNlbGVjdGVkU3F1YXJlcyIsIm5laWdoYm91ciIsInBsYWNlU2hpcEhvcml6b250YWxseSIsImNyZWF0ZUJvYXJkIiwiaiIsImlzSGl0IiwicGxhY2VTaGlwIiwic2hpcE5hbWUiLCJuZXdPcmllbnQiLCJhcmVTaGlwc1N1bmsiLCJPYmplY3QiLCJrZXlzIiwiaXNTdW5rIiwicmVjZWl2ZUF0dGFjayIsInNxdWFyZUlkU3RyIiwic3F1YXJlIiwiaGl0IiwiY29uc29sZSIsImxvZyIsIlBsYXllciIsIkdhbWVsb29wIiwicHJvY2Vzc0Zvcm0iLCJhZGRGb3JtRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlUExheWVyVHdvIiwiZGlzcGxheVNsaWRlclZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGxheWVyIiwiaGlkZUVsZW1lbnQiLCJ2YWxpZGl0eSIsImNyZWF0ZUdhbWVDb21wb25lbnRzIiwiZ2V0Rm9ybUlucHV0IiwicmVzZXQiLCJkaXNwbGF5RXJyb3IiLCJzaG93RXJyb3IiLCJlcnJvckNvbnRhaW5lciIsIm1zZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRleHRDb250ZW50IiwiY2hlY2tlZCIsImFkZCIsImRpc2FibGVkIiwidmFsdWUiLCJmaXJzdE5hbWUiLCJzZWNvbmROYW1lIiwiY29tcHV0ZXJPcHRpb24iLCJnYW1lYm9hcmRTaXplIiwidmFsdWVNaXNzaW5nIiwib2JqIiwiZ2FtZUNvbnRhaW5lciIsImNyZWF0ZVBsYXllckRhdGEiLCJuYW1lIiwiY3JlYXRlR2FtZUVsZW1lbnRzIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImtleSIsInNxdWFyZUVsIiwiZGF0YXNldCIsIm93bmVyIiwiYXBwZW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJjcmVhdGVTaGlwcyIsInNoaXBFbCIsInR5cGUiLCJncmlkQ29udGFpbmVyIiwic2hpcENvbnRhaW5lciIsInNldEJhc2VVbml0U2l6ZSIsInNxdWFyZUhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5Iiwic2hvd0VsZW1lbnQiLCJjaGFuZ2VPcmllbnRhdGlvbiIsImdhbWVQcm9wZXJ0aWVzQXJnIiwicGxhY2VtZW50T3JpZW50YXRpb24iLCJlbmFibGVTaGlwUGxhY2VtZW50IiwiZW5hYmxlRHJhZ2dhYmxlIiwic2hpcExpc3QiLCJ2YWx1ZXMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRTaGlwRXZlbnRMaXN0ZW5lciIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJhZGRHcmlkRXZlbnRMaXN0ZW5lciIsInNxdWFyZUxpc3QiLCJvcmllbnRhdGlvbiIsImdhbWVQcm9wZXJ0aWVzIiwibW96U291cmNlTm9kZSIsInN0YXR1cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwibWFya1dpbm5lciIsImVuYWJsZUF0dGFja09uIiwicGxheWVyQXJnIiwicGhhc2VBcmciLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiY2hlY2tGb3JMb3NzIiwiZGlzYWJsZUF0dGFja09uIiwicGhhc2UiLCJwaGFzZXMiLCJ3aW4iLCJwcm9jZXNzUGhhc2UiLCJhdHRhY2tDb250ZW50IiwiZmFkZVBMYXllciIsInVuZmFkZVBsYXllciIsImFjdGl2ZUNvbXBvbmVudHMiLCJzaGlwUGxhY2VtZW50Iiwic2hpcFJlcU9uZSIsInNoaXBSZXFUd28iLCJpbmFjdGl2ZUNvbXBvbmVudHMiLCJwbGF5aW5nIiwidGVtcCIsImNoYW5nZU1lc3NhZ2UiLCJ0dXJuIiwiaGlkZVBsYWNlZFNoaXBzIiwicGxheWVyQ29tcG9uZW50cyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJncmlkQ29udGFpbmVycyIsIm1lc3NhZ2VDb250YWluZXIiLCJjdXN0b21MZWZ0T2JqIiwiY3VzdG9tUmlnaHRPYmoiLCJsZWZ0IiwicmlnaHQiLCJwbGF5ZXJDb21wb25lbnRzTGVmdCIsInBsYXllckNvbXBvbmVudHNSaWdodCIsImZvcm1Qcm9jZXNzaW5nIiwic3RhcnRpbmciLCJpc0NvbXB1dGVyIiwiYXR0YWNoR2FtZWJvYXJkIiwicHJldmlvdXNIaXQiLCJhdHRhY2siLCJlbmVteSIsIm1vdmUiLCJjb21wdXRlckF0dGFjayIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==