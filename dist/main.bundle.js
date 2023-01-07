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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform .players.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 3rem;\n}\nform section.player {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3rem;\n}\nform section > .option.computer {\n  display: flex;\n}\nform button {\n  width: 30%;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #f9a19b;\n}\n\n.miss {\n  background-color: #95e0fd;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  .players.container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    gap: $common-size;\n  }\n  section.player {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $common-size;\n  }\n  section > .option.computer {\n    display: flex;\n  }\n  button {\n    width: 30%;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #f9a19b;\n}\n.miss {\n  background-color: #95e0fd;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
        gameElements.rightPlayer.container.append(gameProperties.inactiveComponents.elements.buttonContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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Y2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3M/MDkyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSAucGxheWVycy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb3JtIHNlY3Rpb24ucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uID4gLm9wdGlvbi5jb21wdXRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QUMzQkE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FENEJGOztBQzFCQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUQ2QkY7O0FDM0JBO0VBQ0UsY0FBQTtBRDhCRjs7QUM1QkE7O0VBRUUsZ0JBQUE7QUQrQkY7O0FDN0JBOztFQUVFLFlBQUE7QURnQ0Y7O0FDOUJBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QURpQ0Y7O0FDL0JBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRGtDRjs7QUMvQkEsa0JBQUE7QUQvSEE7RUFDRSxzQkFBQTtBQWtLRjs7QUEvSkEsV0FBQTtBQVlBLFVBQUE7QUFLQSxXQUFBO0FBa0JBO0VBQ0Usc0JBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FyQ1c7QUFzS2I7O0FBL0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFrSUY7O0FBaElBLFdBQUE7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQXBCYztFQXFCZCx5QkFoRGdCO0FBbUxsQjtBQWxJRTtFQUNFLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQXBEYztBQXVMbEI7O0FBL0hBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUFrSUY7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBM0NjO0VBNENkLGFBOUNjO0VBK0NkLHFCQWxEb0I7RUFtRHBCLGdDQUFBO0FBbUlGO0FBaklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQTdEVTtBQWdNZDtBQWpJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FuRVU7QUFzTWQ7QUFqSUU7RUFDRSxhQUFBO0FBbUlKO0FBaklFO0VBQ0UsVUFBQTtBQW1JSjs7QUFoSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBaEZZO0FBbU5kO0FBbElFO0VBQ0UsYUFBQTtBQW9JSjtBQWxJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQW9JSjtBQW5JSTtFQUNFLGFBQUE7QUFxSU47QUFuSUk7RUFDRSx1Q0FBQTtBQXFJTjtBQWxJRTtFQU1FLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUErSEo7QUE5SEk7RUFDRSx5QkF2SEM7QUF1UFA7QUE5SEk7RUFDRSx5QkEvSFk7RUFnSVoseUJBQUE7RUFDQSxrQkFiYztFQWNkLGlCQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBcEJVO0VBcUJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBeEJVO0VBeUJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBNUJVO0VBNkJWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBaENVO0VBaUNWLDhDQUFBO0FBZ0lOO0FBOUhJO0VBQ0UseUNBcENVO0VBcUNWLDhDQUFBO0FBZ0lOOztBQTVIQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLGVBbElnQjtFQW1JaEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBaktnQjtBQWdTbEI7O0FBNUhBLG9CQUFBO0FBRUE7RUFDRSxxQkFqSm9CO0VBa0pwQix5QkFBQTtFQUNBLGVBN0lnQjtBQTJRbEI7O0FBNUhBO0VBQ0UsWUFBQTtBQStIRjs7QUE3SEE7RUFDRSx3QkFBQTtBQWdJRjs7QUE5SEE7RUFDRSx5QkFBQTtBQWlJRjs7QUEvSEE7RUFDRSx5QkFBQTtBQWtJRjs7QUFoSUE7RUFDRSx5QkFBQTtBQW1JRjs7QUFqSUE7RUFDRSxZQUFBO0FBb0lGOztBQWxJQTtFQUNFLHlCQUFBO0FBcUlGOztBQW5JQTtFQUNFLHlCQUFBO0FBc0lGOztBQXBJQTtFQUNFLHlCQUFBO0FBdUlGOztBQXJJQTtFQUNFLHlCQUFBO0FBd0lGOztBQXRJQTtFQUNFLG9DQUFBO0FBeUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG4kZ3JheTogIzRiNGI0YjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgLnBsYXllcnMuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICB9XFxuICBzZWN0aW9uLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgfVxcbiAgc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gID4gLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbiAgICB9XFxuICB9XFxuICAuc2hpcHMuY29udGFpbmVyIHtcXG4gICAgJGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAkYmFzZS1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtICRib3JkZXItd2lkdGgpO1xcbiAgICAkc2hpcC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXG4gICAgJGJvcmRlci1jb2xvcjogJGdyYXk7XFxuICAgICRib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XFxuICAgIH1cXG4gICAgLnNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRmYWRlLWNvbG9yO1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG59XFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTE5YjtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZTBmZDtcXG59XFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVxcblwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5cbmNvbnN0IFBsYXllckNvbXBvbmVudHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGxldCBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gIGNvbnN0IGNyZWF0ZVBsYXllckRhdGEgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5jb21wdXRlcikge1xuICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIHRydWUsIG9iai5zaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIGZhbHNlLCBvYmouc2l6ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjcmVhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllckRhdGEuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgIHNxdWFyZUVsLmRhdGFzZXQub3duZXIgPSBbYCR7cGxheWVyRGF0YS5uYW1lfWBdO1xuICAgICAgICBncmlkLmFwcGVuZChzcXVhcmVFbCk7XG4gICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICBncmlkLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgfVxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyRGF0YS5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2tleX1gKTtcbiAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC5vd25lciA9IGAke3BsYXllckRhdGEubmFtZX1gO1xuICAgICAgICBzaGlwcy5hcHBlbmQoc2hpcEVsKTtcbiAgICAgIH1cbiAgICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUm90YXRpb25CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGlvbicpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdoJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ3YnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JpZENvbnRhaW5lcjogY3JlYXRlR3JpZCgpLFxuICAgICAgc2hpcENvbnRhaW5lcjogY3JlYXRlU2hpcHMoKSxcbiAgICAgIGJ1dHRvbkNvbnRhaW5lcjogY3JlYXRlUm90YXRpb25CdXR0b24oKSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBkYXRhID0gY3JlYXRlUGxheWVyRGF0YShvYmopO1xuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgZWxlbWVudHM6IGNyZWF0ZUdhbWVFbGVtZW50cyhkYXRhKSxcbiAgICBtYXJrV2lubmVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICAgIH0sXG4gICAgZW5hYmxlU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHRoaXMuc2hpcE9yaWVudGF0aW9uO1xuICAgICAgZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBjb25zdCBlbmFibGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAoc2hpcExpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBMaXN0KSkge1xuICAgICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFkZFNoaXBFdmVudExpc3RlbmVyID0gKHNoaXBMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gc2hpcExpc3Q7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwcykpIHtcbiAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCBgJHtlLnRhcmdldH1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFkZEdyaWRFdmVudExpc3RlbmVyID0gKHNxdWFyZUxpc3QpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHNxdWFyZUxpc3Q7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBPYmplY3QudmFsdWVzKGdyaWQpKSB7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGUsXG4gICAgICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGVuYWJsZURyYWdnYWJsZShlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICAgIGFkZEdyaWRFdmVudExpc3RlbmVyKGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgICB9LFxuICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZVJlY2VpdmluZ0F0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tDb250ZW50ID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlTm9kZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIHVuZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIH0sXG4gICAgaGlkZVBsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNoaXBTcXVhcmVzKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZXNEYXRhID0gdGhpcy5kYXRhLmdhbWVib2FyZC5zcXVhcmVzO1xuICAgICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyO1xuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXNEYXRhKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZXNFbGVtZW50c1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtrZXl9XCJdYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNTaGlwUGxhY2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb21wb25lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lLCBtZXNzYWdlIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5sZWZ0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLnJpZ2h0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgbWVzc2FnZTogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5tZXNzYWdlJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ICBidXR0b24ucm90YXRpb24nKSxcbiAgICB9LFxuICAgIGNvbnRpbnVlQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbnRpbnVlJyksXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgIGJ1dHRvbi5yb3RhdGlvbicpLFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgbWVzc2FnZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgfTtcbn0pKCk7XG4vLyBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG4vLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ub3JpZW50YXRpb24nKTtcbi8vIHJldHVybiBidXR0b247XG4vLyB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyQ29tcG9uZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyc7XG5pbXBvcnQge1xuICBmb3JtIGFzIGZvcm1XaW5kb3csXG4gIGdhbWUgYXMgZ2FtZVdpbmRvdyxcbiAgbWVzc2FnZSBhcyBtZXNzYWdlV2luZG93LFxufSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybVdpbmRvdy5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybVdpbmRvdy5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm1XaW5kb3cuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICAvLyBoaWRlRWxlbWVudChyaWdodFBsYXllci5uYW1lLmVycm9yKTtcbiAgICAgIC8vIGhpZGVFbGVtZW50KGxlZnRQbGF5ZXIubmFtZS5lcnJvcik7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm1XaW5kb3cuY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9O1xuICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSBnYW1lUHJvcGVydGllc0FyZztcbiAgICBjb25zdCBnYW1lRWxlbWVudHMgPSBnYW1lV2luZG93O1xuICAgIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMCkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLnNoaXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM/LmVsZW1lbnRzLnNoaXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBoaWRlRWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBzaG93RWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBwcm9jZXNzRm9ybSgpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDEpIHtcbiAgICAgIGlmICghZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cykge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gbmV3IFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgICAgZm9ybURhdGEubGVmdFBsYXllcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLmxlZnRQbGF5ZXIuZ2FtZWJvYXJkLmFwcGVuZChcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIsXG4gICAgICAgICk7XG4gICAgICAgIGdhbWVFbGVtZW50cy5sZWZ0UGxheWVyLnNoaXBzLmFwcGVuZChcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLnNoaXBDb250YWluZXIsXG4gICAgICAgICk7XG4gICAgICAgIGdhbWVFbGVtZW50cy5sZWZ0UGxheWVyLmNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5idXR0b25Db250YWluZXIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIWdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cykge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSBuZXcgUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllcixcbiAgICAgICAgKTtcbiAgICAgICAgZ2FtZUVsZW1lbnRzLnJpZ2h0UGxheWVyLmdhbWVib2FyZC5hcHBlbmQoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIsXG4gICAgICAgICk7XG4gICAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllci5zaGlwcy5hcHBlbmQoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLnNoaXBDb250YWluZXIsXG4gICAgICAgICk7XG4gICAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllci5jb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5idXR0b25Db250YWluZXIsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzaG93RWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zdGFydGluZztcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMikge1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuc2hpcFBsYWNlbWVudDtcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMykge1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpICYmXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5pc1NoaXBQbGFjZWQoKVxuICAgICAgKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkgfHxcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpXG4gICAgICApIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kaXNhYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmhpZGVQbGFjZWRTaGlwcygpO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSB0ZW1wO1xuXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gNCkge1xuICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5kYXRhLmNoZWNrRm9yTG9zcygpKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXAgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cztcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IHRlbXA7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbmFibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS50dXJuKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgY29uc29sZS5sb2coZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmRhdGEuY2hlY2tGb3JMb3NzKCkpO1xuXG4gICAgICAvLyBpZiAoZW5hYmxlUmVjZWl2aW5nQXR0YWNrLnN0YXR1cykge1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDUpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLm1hcmtXaW5uZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuZm9ybVByb2Nlc3Npbmc7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXRpYWxpemF0aW9uXG5cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgY29uc3Qgc2tpcEZvcm1QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZywgZm9ybURhdGFBcmcpIHtcbiAgICAvLyBjb25zdCBsZWZ0UGxheWVyRGF0YSA9IHt9XG4gICAgZm9ybURhdGFBcmcubGVmdFBsYXllciA9IHtcbiAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgIHNpemU6ICc4JyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGZvcm1EYXRhQXJnLnJpZ2h0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ1NhcmFoJyxcbiAgICAgIHNpemU6ICcxMicsXG4gICAgICBjb21wdXRlcjogZmFsc2UsXG4gICAgfTtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2tpcFRvV2luUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy53aW47XG4gIH07XG4gIC8vIHNraXBGb3JtUGhhc2UoZ2FtZVByb3BlcnRpZXMsIGZvcm1EYXRhKTtcbiAgLy8gcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gc2tpcFRvV2luUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lV2luZG93LmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBQbGF5ZXJDb21wb25lbnRzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWxvb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lID0gJ0NvbXB1dGVyJywgaXNDb21wdXRlciA9IGZhbHNlLCBzaXplKSB7XG4gIGNvbnN0IGF0dGFjaEdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgZ2FtZWJvYXJkOiBhdHRhY2hHYW1lYm9hcmQoc2l6ZSksXG4gICAgYXR0YWNrKGVuZW15LCBtb3ZlKSB7XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuZ2FtZWJvYXJkLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcXVhcmUoKSk7XG4gICAgfSxcbiAgICBjaGVja0Zvckxvc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIpLFxuICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMyksXG4gICAgY3J1aXNlcjogbmV3IFNoaXAoMyksXG4gICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSksXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hpcHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MnO1xuLy8gaW1wb3J0IEdhbWVsb29wIGZyb20gJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG4vLyBpbXBvcnQgeyBnYW1lLCBmb3JtIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiUGxheWVyIiwiUGxheWVyQ29tcG9uZW50cyIsIm9iaiIsInNoaXBPcmllbnRhdGlvbiIsImNyZWF0ZVBsYXllckRhdGEiLCJjb21wdXRlciIsIm5hbWUiLCJzaXplIiwiY3JlYXRlR2FtZUVsZW1lbnRzIiwicGxheWVyRGF0YSIsImNyZWF0ZUdyaWQiLCJncmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ2FtZWJvYXJkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJzcXVhcmVzIiwia2V5Iiwic3F1YXJlRWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwib3duZXIiLCJhcHBlbmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZVNoaXBzIiwic2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiY3JlYXRlUm90YXRpb25CdXR0b24iLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmlkQ29udGFpbmVyIiwic2hpcENvbnRhaW5lciIsImJ1dHRvbkNvbnRhaW5lciIsImVsZW1lbnRzIiwibWFya1dpbm5lciIsImVuYWJsZVNoaXBQbGFjZW1lbnQiLCJyb3RhdGlvbiIsInJlbW92ZSIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2hpcCIsInNldEF0dHJpYnV0ZSIsImFkZFNoaXBFdmVudExpc3RlbmVyIiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJhZGRHcmlkRXZlbnRMaXN0ZW5lciIsInNxdWFyZUxpc3QiLCJzcXVhcmUiLCJwcmV2ZW50RGVmYXVsdCIsIm1velNvdXJjZU5vZGUiLCJzcXVhcmVTdHIiLCJzdGF0dXMiLCJjaGVja1BsYWNlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZCIsInNlbGVjdGVkU3F1YXJlcyIsInBsYWNlU2hpcCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZW5hYmxlUmVjZWl2aW5nQXR0YWNrIiwic3F1YXJlTm9kZXMiLCJwcm9jZXNzQXR0YWNrIiwiYXR0YWNrUmVzdWx0QXJnIiwic3F1YXJlTm9kZSIsImF0dGFja0NvbnRlbnQiLCJyZWNlaXZlQXR0YWNrIiwiZGlzYWJsZVJlY2VpdmluZ0F0dGFjayIsImZhZGVQbGF5ZXIiLCJ1bmZhZGVQbGF5ZXIiLCJoaWRlUGxhY2VkU2hpcHMiLCJzaGlwU3F1YXJlcyIsInNob3dQbGFjZWRTaGlwcyIsInNxdWFyZXNEYXRhIiwic3F1YXJlc0VsZW1lbnRzIiwiZW50cmllcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9jY3VwaWVzIiwiaXNTaGlwUGxhY2VkIiwiaXNPbmVTaGlwUGxhY2VkIiwiZm9ybSIsImdhbWUiLCJtZXNzYWdlIiwiY29udGFpbmVyIiwibGVmdFBsYXllciIsImlucHV0IiwiZXJyb3IiLCJvdXRwdXQiLCJyaWdodFBsYXllciIsInJvdGF0aW9uQnV0dG9uIiwiY29udGludWVCdXR0b24iLCJTaGlwcyIsIkdhbWVib2FyZCIsInNoaXBEYXRhIiwic2hpcE9yaWVudCIsInNxdWFyZUlkIiwic3BsaXQiLCJlbCIsIk51bWJlciIsInBsYWNlZCIsIm5laWdoYm91clN0ciIsInBsYWNlU2hpcFZlcnRpY2FsbHkiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJmb3JtV2luZG93IiwiZ2FtZVdpbmRvdyIsIm1lc3NhZ2VXaW5kb3ciLCJHYW1lbG9vcCIsImZvcm1EYXRhIiwicHJvY2Vzc0Zvcm0iLCJzaG93RWxlbWVudCIsInRvZ2dsZVBsYXllcklucHV0IiwicGxheWVyIiwiY2hlY2tlZCIsImRpc2FibGVkIiwiZGlzcGxheVNsaWRlclZhbHVlIiwibGVmdFBsYXllclZhbGlkIiwidmFsaWRpdHkiLCJyaWdodFBsYXllclZhbGlkIiwiaGlkZUVsZW1lbnQiLCJnZXRGb3JtSW5wdXQiLCJnYW1lUHJvcGVydGllcyIsInBoYXNlIiwicGhhc2VzIiwiY29tcG9uZW50Q3JlYXRpb24iLCJwcm9jZXNzUGhhc2UiLCJyZXNldCIsImRpc3BsYXlFcnJvciIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwicGxheWVyQXJnIiwidmFsdWVNaXNzaW5nIiwic2V0QmFzZVVuaXRTaXplIiwic3F1YXJlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0UHJvcGVydHkiLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZUNvbnRhaW5lciIsIndpbiIsInR1cm4iLCJnYW1lUHJvcGVydGllc0FyZyIsImdhbWVFbGVtZW50cyIsImFjdGl2ZUNvbXBvbmVudHMiLCJpbmFjdGl2ZUNvbXBvbmVudHMiLCJzdGFydGluZyIsInNoaXBQbGFjZW1lbnQiLCJwbGF5aW5nIiwidGVtcCIsImNoZWNrRm9yTG9zcyIsImZvcm1Qcm9jZXNzaW5nIiwicGxhY2VtZW50T3JpZW50YXRpb24iLCJza2lwRm9ybVBoYXNlIiwiZm9ybURhdGFBcmciLCJza2lwVG9XaW5QaGFzZSIsImlzQ29tcHV0ZXIiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwiZ2FtZWJvYXJkU2l6ZSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==