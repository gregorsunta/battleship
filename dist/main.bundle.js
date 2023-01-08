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
    enableComputerPlacement: function enableComputerPlacement() {
      for (var _i6 = 0, _Object$keys3 = Object.keys(this.data.gameboard.ships); _i6 < _Object$keys3.length; _i6++) {
        var key = _Object$keys3[_i6];
        data.gameboard.computerPlaceShip(this.data.gameboard.ships[key]);
      }
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
    enableReceivingComputerAttack: function enableReceivingComputerAttack() {
      var squareNodes = this.elements.gridContainer.childNodes;
      var processAttack = function processAttack(attackResultArg, squareNode) {
        if (attackResultArg === null) {
          squareNode.classList.add('miss');
        } else if (attackResultArg) {
          squareNode.classList.add('hit');
        }
      };
      var _this$data$gameboard$ = this.data.gameboard.receiveComputerAttack(),
        _this$data$gameboard$2 = _slicedToArray(_this$data$gameboard$, 2),
        result = _this$data$gameboard$2[0],
        square = _this$data$gameboard$2[1];
      var squareNode = this.elements.gridContainer.querySelector("[data-id=\"".concat(square, "\"]"));
      console.log(squareNode);
      processAttack(result, squareNode);
      // this.disableReceivingAttack();
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
      for (var _i7 = 0, _Object$entries = Object.entries(squaresData); _i7 < _Object$entries.length; _i7++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i7], 2),
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


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    checkPlacement: checkPlacement,
    squares: squares,
    ships: ships,
    isOneShipPlaced: function isOneShipPlaced() {
      return _isOneShipPlaced;
    },
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
      console.log(squareStr);
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
    computerPlaceShip: function computerPlaceShip(ship) {
      var gameboardSize = this.size;
      var randomNumber = function randomNumber(gameboardSize) {
        return Math.floor(Math.random() * gameboardSize);
      };
      var randomPlacement = function randomPlacement() {
        var randomSquare = "".concat(randomNumber(gameboardSize), ",").concat(randomNumber(gameboardSize));
        var shipOrientArr = ['v', 'h'];
        var randomOrient = shipOrientArr[Math.floor(Math.random() * shipOrientArr.length)];
        if (checkPlacement(randomSquare, ship, randomOrient).valid) {
          return [ship.name, randomSquare, randomOrient];
        } else {
          return randomPlacement();
        }
      };
      var random = randomPlacement();
      console.log(random);
      this.placeShip.apply(this, _toConsumableArray(random));
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
    },
    receiveComputerAttack: function receiveComputerAttack() {
      var _this = this;
      var gameboardSize = this.size;
      var randomNumber = function randomNumber(gameboardSize) {
        return Math.floor(Math.random() * gameboardSize);
      };
      var randomSquare = function randomSquare() {
        var _this$squares$square;
        var square = "".concat(randomNumber(gameboardSize), ",").concat(randomNumber(gameboardSize));
        _this.squares[square];
        if (((_this$squares$square = _this.squares[square]) === null || _this$squares$square === void 0 ? void 0 : _this$squares$square.isHit) === false) {
          return square;
        } else {
          return randomSquare();
        }
      };
      var randomSq = randomSquare();
      return [this.receiveAttack(randomSq), randomSq];
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
  var removePlayerComponents = function removePlayerComponents(playerComponents) {
    playerComponents === null || playerComponents === void 0 ? void 0 : playerComponents.elements.gridContainer.remove();
    playerComponents === null || playerComponents === void 0 ? void 0 : playerComponents.elements.shipContainer.remove();
    playerComponents === null || playerComponents === void 0 ? void 0 : playerComponents.elements.buttonContainer.remove();
  };
  var appendPlayerComponents = function appendPlayerComponents(container, playerComponents) {
    container.gameboard.append(playerComponents.elements.gridContainer);
    container.ships.append(playerComponents.elements.shipContainer);
    container.container.append(playerComponents.elements.buttonContainer);
  };
  var switchActivePlayer = function switchActivePlayer(gamePropertiesArg) {
    var temp = gameProperties.activeComponents;
    gameProperties.activeComponents = gameProperties.inactiveComponents;
    gameProperties.inactiveComponents = temp;
  };
  var processPhase = function processPhase(gamePropertiesArg) {
    var gameProperties = gamePropertiesArg;
    var gameElements = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game;
    if (gameProperties.phase === 0) {
      removePlayerComponents(gameProperties.activeComponents);
      removePlayerComponents(gameProperties.inactiveComponents);
      hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.container);
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
      processForm();
    } else if (gameProperties.phase === 1) {
      gameProperties.activeComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.leftPlayer);
      gameProperties.inactiveComponents = new _src_components_PlayerComponents_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.rightPlayer);
      appendPlayerComponents(gameElements.leftPlayer, gameProperties.activeComponents);
      appendPlayerComponents(gameElements.rightPlayer, gameProperties.inactiveComponents);
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.container);
      gameProperties.phase = phases.starting;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 2) {
      gameProperties.phase = phases.shipPlacement;
      processPhase(gameProperties);
    } else if (gameProperties.phase === 3) {
      var leftShipPlaced = gameProperties.activeComponents.isShipPlaced();
      var rightShipPlaced = gameProperties.inactiveComponents.isShipPlaced();
      if (leftShipPlaced && rightShipPlaced) {
        gameProperties.activeComponents.disableShipPlacement();
        // gameProperties.activeComponents.hidePlacedShips();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
      } else if (leftShipPlaced || rightShipPlaced) {
        gameProperties.activeComponents.disableShipPlacement();
        // gameProperties.activeComponents.hidePlacedShips();

        switchActivePlayer(gameProperties);
        gameProperties.activeComponents.unfadePlayer();
        if (gameProperties.activeComponents.data.isComputer) {
          gameProperties.activeComponents.enableComputerPlacement();
        } else {
          gameProperties.activeComponents.enableShipPlacement();
        }
      } else {
        gameProperties.inactiveComponents.fadePlayer();
        if (gameProperties.activeComponents.data.isComputer) {
          gameProperties.activeComponents.enableComputerPlacement();
        } else {
          gameProperties.activeComponents.enableShipPlacement();
        }
      }
    } else if (gameProperties.phase === 4) {
      if (gameProperties.inactiveComponents.data.checkForLoss()) {
        gameProperties.phase = phases.win;
        processPhase(gameProperties);
      }
      switchActivePlayer(gameProperties);
      gameProperties.activeComponents.fadePlayer();
      gameProperties.inactiveComponents.unfadePlayer();
      if (gameProperties.activeComponents.data.isComputer) {
        gameProperties.inactiveComponents.enableReceivingComputerAttack();
      } else {
        gameProperties.inactiveComponents.enableReceivingAttack();
      }
      changeMessage().turn(gameProperties.activeComponents);
    } else if (gameProperties.phase === 5) {
      gameProperties.activeComponents.unfadePlayer();
      gameProperties.activeComponents.markWinner();
      gameProperties.activeComponents.showPlacedShips();
      gameProperties.inactiveComponents.showPlacedShips();
      changeMessage().win(gameProperties.activeComponents);
      gameProperties.phase = phases.formProcessing;
    }
  };

  /* INITIALIZATIN */

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


var Ship = function Ship(size, name) {
  return {
    size: size,
    name: name,
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
    destroyer: new Ship(2, 'destroyer'),
    submarine: new Ship(3, 'submarine'),
    cruiser: new Ship(3, 'cruiser'),
    battleship: new Ship(4, 'battleship'),
    carrier: new Ship(5, 'carrier')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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Q0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0E7QUFDbEM7QUFDQSx1RCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzcz8wOTIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVsb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVUJVTlRVICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4vKiBpY29ucyAqL1xcbi8qIGxheW91dCAqL1xcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcbmhlYWRlciBsb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZTZlNmU2O1xcbn1cXG5mb3JtIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbi5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb3JtIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgPiAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMzB2dztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIC5zcXVhcmUge1xcbiAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnNoaXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NjYztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YjRiNGI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmRlc3Ryb3llciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zdWJtYXJpbmUge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuY3J1aXNlciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5iYXR0bGVzaGlwIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA0KTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmNhcnJpZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDUpO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcblxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcblxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWExOWI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWUwZmQ7XFxufVxcblxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvZm9udHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JB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QWpJQTtFQUNFLFlBQUE7QUFvSUY7O0FBbElBO0VBQ0UseUJBQUE7QUFxSUY7O0FBbklBO0VBQ0UseUJBQUE7QUFzSUY7O0FBcElBO0VBQ0UseUJBQUE7QUF1SUY7O0FBcklBO0VBQ0UseUJBQUE7QUF3SUY7O0FBdElBO0VBQ0Usb0NBQUE7QUF5SUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVUJVTlRVICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLFwiQHVzZSAnLi9mb250cy5jc3MnO1xcbkB1c2UgJy4vcmVzZXQtc3R5bGVzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJGhpZ2hsaWdodDogI2ZmY2NjYztcXG5cXG4kbWFpbi1jb2xvcjogIzJjM2E0NztcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTFmOWY0O1xcbiRoaWdobGlnaHQtY29sb3I6ICNmZmNjY2M7XFxuJGxhcmdlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiRmb250LXNpemU6IDFyZW07XFxuJHNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcbiRmYWRlLWNvbG9yOiAjZTZlNmU2O1xcbiRncmF5OiAjNGI0YjRiO1xcblxcbi8qIGljb25zICovXFxuJGljb24tc2l6ZTogMS4ycmVtO1xcbiRzbWFsbC1pY29uLXNpemU6IDFyZW07XFxuJHNtYWxsZXItaWNvbi1zaXplOiAwLjhyZW07XFxuXFxuLyogbGF5b3V0ICovXFxuLy8gc2l6ZVxcbiRleHRyYS1zbWFsbC1zaXplOiAwLjhyZW07XFxuJHNtYWxsZXItc2l6ZTogMXJlbTtcXG4kc21hbGwtc2l6ZTogMnJlbTtcXG4kY29tbW9uLXNpemU6IDNyZW07XFxuJGxhcmdlLXNpemU6IDRyZW07XFxuLy8gcmFkaXVzXFxuJGNvbW1vbi1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiRzbWFsbC1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuJHNtYWxsZXItYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4vLyBwYWRkaW5nXFxuJGxhcmdlLXBhZGRpbmc6IDRyZW07XFxuJGNvbW1vbi1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbC1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbGVyLXBhZGRpbmc6IDAuNXJlbTtcXG4kZXh0cmEtc21hbGwtcGFkZGluZzogMC4yNXJlbTtcXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAkc21hbGwtcGFkZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBsb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udC1zaXplO1xcbiAgfVxcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkc21hbGwtcGFkZGluZztcXG4gIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGZhZGUtY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICAucGxheWVycy5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIH1cXG4gIHNlY3Rpb24ucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICB9XFxuICBzZWN0aW9uID4gLm9wdGlvbi5jb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBidXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgPiAucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxuICAgIH1cXG4gIH1cXG4gIC5zaGlwcy5jb250YWluZXIge1xcbiAgICAkYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICRiYXNlLXNpemU6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gJGJvcmRlci13aWR0aCk7XFxuICAgICRzaGlwLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xcbiAgICAkYm9yZGVyLWNvbG9yOiAkZ3JheTtcXG4gICAgJGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1jb2xvcjtcXG4gICAgfVxcbiAgICAuc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXAtY29sb3I7XFxuICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG4gICAgLmRlc3Ryb3llciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAyKTtcXG4gICAgfVxcbiAgICAuc3VibWFyaW5lIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5jcnVpc2VyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5iYXR0bGVzaGlwIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDQpO1xcbiAgICB9XFxuICAgIC5jYXJyaWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDUpO1xcbiAgICB9XFxuICB9XFxufVxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGZhZGUtY29sb3I7XFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbn1cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XFxuXCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBQbGF5ZXJDb21wb25lbnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBsZXQgc2hpcE9yaWVudGF0aW9uID0gJ3YnO1xuICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouY29tcHV0ZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCB0cnVlLCBvYmouc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCBmYWxzZSwgb2JqLnNpemUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKHBsYXllckRhdGEpIHtcbiAgICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3BsYXllckRhdGEuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyRGF0YS5nYW1lYm9hcmQuc3F1YXJlcykpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZUVsLmRhdGFzZXQuaWQgPSBbYCR7a2V5fWBdO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0Lm93bmVyID0gW2Ake3BsYXllckRhdGEubmFtZX1gXTtcbiAgICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICBncmlkLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgZ3JpZC5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgIH1cbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsICdjb250YWluZXInKTtcbiAgICAgIHJldHVybiBncmlkO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllckRhdGEuZ2FtZWJvYXJkLnNoaXBzKSkge1xuICAgICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCBgJHtrZXl9YCk7XG4gICAgICAgIHNoaXBFbC5kYXRhc2V0LnR5cGUgPSBgJHtrZXl9YDtcbiAgICAgICAgc2hpcEVsLmRhdGFzZXQub3duZXIgPSBgJHtwbGF5ZXJEYXRhLm5hbWV9YDtcbiAgICAgICAgc2hpcHMuYXBwZW5kKHNoaXBFbCk7XG4gICAgICB9XG4gICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdzaGlwcycsICdjb250YWluZXInKTtcbiAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVJvdGF0aW9uQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRpb24nKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAnaCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyaWRDb250YWluZXI6IGNyZWF0ZUdyaWQoKSxcbiAgICAgIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCksXG4gICAgICBidXR0b25Db250YWluZXI6IGNyZWF0ZVJvdGF0aW9uQnV0dG9uKCksXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGVsZW1lbnRzOiBjcmVhdGVHYW1lRWxlbWVudHMoZGF0YSksXG4gICAgbWFya1dpbm5lcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICB9LFxuICAgIGVuYWJsZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnNoaXBPcmllbnRhdGlvbjtcbiAgICAgIGVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgY29uc3QgZW5hYmxlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKHNoaXBMaXN0KSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwTGlzdCkpIHtcbiAgICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBMaXN0O1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcHMpKSB7XG4gICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgYCR7ZS50YXJnZXR9YCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRHcmlkRXZlbnRMaXN0ZW5lciA9IChzcXVhcmVMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgT2JqZWN0LnZhbHVlcyhncmlkKSkge1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApLmVsZW1lbnRzO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHNlbGVjdGVkU3F1YXJlcykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlLFxuICAgICAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbmFibGVEcmFnZ2FibGUoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICAgIGFkZFNoaXBFdmVudExpc3RlbmVyKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgICBhZGRHcmlkRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gICAgfSxcbiAgICBlbmFibGVDb21wdXRlclBsYWNlbWVudCgpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEuZ2FtZWJvYXJkLnNoaXBzKSkge1xuICAgICAgICBkYXRhLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCh0aGlzLmRhdGEuZ2FtZWJvYXJkLnNoaXBzW2tleV0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgY29uc3Qgc3F1YXJlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlO1xuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5hYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGNvbnN0IHByb2Nlc3NBdHRhY2sgPSAoYXR0YWNrUmVzdWx0QXJnLCBzcXVhcmVOb2RlKSA9PiB7XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHRBcmcgPT09IG51bGwpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHRBcmcpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgICBzcXVhcmVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF0dGFja0NvbnRlbnQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgICAgICBzcXVhcmVOb2RlLmRhdGFzZXQuaWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9jZXNzQXR0YWNrKGF0dGFja0NvbnRlbnQsIHNxdWFyZU5vZGUpO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGNvbnN0IHByb2Nlc3NBdHRhY2sgPSAoYXR0YWNrUmVzdWx0QXJnLCBzcXVhcmVOb2RlKSA9PiB7XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHRBcmcgPT09IG51bGwpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHRBcmcpIHtcbiAgICAgICAgICBzcXVhcmVOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgW3Jlc3VsdCwgc3F1YXJlXSA9IHRoaXMuZGF0YS5nYW1lYm9hcmQucmVjZWl2ZUNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlfVwiXWAsXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coc3F1YXJlTm9kZSk7XG5cbiAgICAgIHByb2Nlc3NBdHRhY2socmVzdWx0LCBzcXVhcmVOb2RlKTtcbiAgICAgIC8vIHRoaXMuZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgIH0sXG4gICAgZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZU5vZGU7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWRlUGxheWVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgfSxcbiAgICB1bmZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIGhpZGVQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWQnKTtcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzaGlwU3F1YXJlcykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93UGxhY2VkU2hpcHMoKSB7XG4gICAgICBjb25zdCBzcXVhcmVzRGF0YSA9IHRoaXMuZGF0YS5nYW1lYm9hcmQuc3F1YXJlcztcbiAgICAgIGNvbnN0IHNxdWFyZXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcjtcbiAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzcXVhcmVzRGF0YSkpIHtcbiAgICAgICAgaWYgKHZhbHVlLm9jY3VwaWVzKSB7XG4gICAgICAgICAgc3F1YXJlc0VsZW1lbnRzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2tleX1cIl1gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1NoaXBQbGFjZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFBsYXllckNvbXBvbmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UgfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLmxlZnQuY29udGFpbmVyJyksXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLm5hbWUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIucmlnaHQuY29udGFpbmVyJyksXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm5hbWUgPiBpbnB1dCcpLFxuICAgICAgICBtZXNzYWdlOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm1lc3NhZ2UnKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXInKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IGlucHV0JyksXG4gICAgICAgIG91dHB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICAgIHJvdGF0aW9uQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgIGJ1dHRvbi5yb3RhdGlvbicpLFxuICAgIH0sXG4gICAgY29udGludWVCdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAgYnV0dG9uLnJvdGF0aW9uJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBtZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufSkoKTtcbi8vIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5vcmllbnRhdGlvbicpO1xuLy8gcmV0dXJuIGJ1dHRvbjtcbi8vIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGxldCBpc09uZVNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwRGF0YSwgc2hpcE9yaWVudCA9ICd2Jykge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgaWYgKHNoaXBEYXRhLnBsYWNlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHM6IG51bGwsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcFZlcnRpY2FsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2hlY2tQbGFjZW1lbnQsXG4gICAgc3F1YXJlcyxcbiAgICBzaGlwcyxcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjcmVhdGVCb2FyZChzaXplID0gMTApIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgIHRoaXMuc3F1YXJlc1tgJHtbaiwgaV19YF0gPSB7XG4gICAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgICAgICBvY2N1cGllczogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zcXVhcmVzO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzcXVhcmVTdHIsIG5ld09yaWVudCA9ICd2Jykge1xuICAgICAgY29uc29sZS5sb2coc3F1YXJlU3RyKTtcblxuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICAgIGNvbnN0IHNoaXBPcmllbnQgPSBuZXdPcmllbnQ7XG4gICAgICBpZiAoY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCBuZXdPcmllbnQpPy52YWxpZCkge1xuICAgICAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlclBsYWNlU2hpcChzaGlwKSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIGNvbnN0IHNoaXBPcmllbnRBcnIgPSBbJ3YnLCAnaCddO1xuICAgICAgICBjb25zdCByYW5kb21PcmllbnQgPVxuICAgICAgICAgIHNoaXBPcmllbnRBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcE9yaWVudEFyci5sZW5ndGgpXTtcblxuICAgICAgICBpZiAoY2hlY2tQbGFjZW1lbnQocmFuZG9tU3F1YXJlLCBzaGlwLCByYW5kb21PcmllbnQpLnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIFtzaGlwLm5hbWUsIHJhbmRvbVNxdWFyZSwgcmFuZG9tT3JpZW50XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb20gPSByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgICB0aGlzLnBsYWNlU2hpcCguLi5yYW5kb20pO1xuICAgIH0sXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0uaXNTdW5rKCkgJiYgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmVTdHIpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUlkU3RyID0gc3F1YXJlU3RyO1xuICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5zcXVhcmVzW3NxdWFyZUlkU3RyXTtcblxuICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIGBPdXQgb2YgYm91bmRzYDtcbiAgICAgIH0gZWxzZSBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgIHJldHVybiBgQWxyZWFkeSBoaXRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZS5vY2N1cGllcy5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKCkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxID0gcmFuZG9tU3F1YXJlKCk7XG4gICAgICByZXR1cm4gW3RoaXMucmVjZWl2ZUF0dGFjayhyYW5kb21TcSksIHJhbmRvbVNxXTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyQ29tcG9uZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyc7XG5pbXBvcnQge1xuICBmb3JtIGFzIGZvcm1XaW5kb3csXG4gIGdhbWUgYXMgZ2FtZVdpbmRvdyxcbiAgbWVzc2FnZSBhcyBtZXNzYWdlV2luZG93LFxufSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybVdpbmRvdy5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybVdpbmRvdy5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm1XaW5kb3cuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICAvLyBoaWRlRWxlbWVudChyaWdodFBsYXllci5uYW1lLmVycm9yKTtcbiAgICAgIC8vIGhpZGVFbGVtZW50KGxlZnRQbGF5ZXIubmFtZS5lcnJvcik7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm1XaW5kb3cuY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgcGxheWVyQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5ZXJDb21wb25lbnRzPy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHBsYXllckNvbXBvbmVudHM/LmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcbiAgY29uc3QgYXBwZW5kUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb250YWluZXIsIHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb250YWluZXIuZ2FtZWJvYXJkLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuY29udGFpbmVyLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcik7XG4gIH07XG4gIGNvbnN0IHN3aXRjaEFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGNvbnN0IHRlbXAgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzO1xuICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMgPSBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSBnYW1lUHJvcGVydGllc0FyZztcbiAgICBjb25zdCBnYW1lRWxlbWVudHMgPSBnYW1lV2luZG93O1xuICAgIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMCkge1xuICAgICAgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyhnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIHJlbW92ZVBsYXllckNvbXBvbmVudHMoZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGhpZGVFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMSkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllcixcbiAgICAgICk7XG4gICAgICBhcHBlbmRQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllcixcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyxcbiAgICAgICk7XG4gICAgICBhcHBlbmRQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBnYW1lRWxlbWVudHMucmlnaHRQbGF5ZXIsXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyxcbiAgICAgICk7XG4gICAgICBzaG93RWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zdGFydGluZztcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMikge1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuc2hpcFBsYWNlbWVudDtcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMykge1xuICAgICAgY29uc3QgbGVmdFNoaXBQbGFjZWQgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpO1xuICAgICAgY29uc3QgcmlnaHRTaGlwUGxhY2VkID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpO1xuXG4gICAgICBpZiAobGVmdFNoaXBQbGFjZWQgJiYgcmlnaHRTaGlwUGxhY2VkKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgLy8gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAobGVmdFNoaXBQbGFjZWQgfHwgcmlnaHRTaGlwUGxhY2VkKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgLy8gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcblxuICAgICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICAgIGlmIChnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlcikge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVDb21wdXRlclBsYWNlbWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gNCkge1xuICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5kYXRhLmNoZWNrRm9yTG9zcygpKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaEFjdGl2ZVBsYXllcihnYW1lUHJvcGVydGllcyk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgIGlmIChnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlcikge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbmFibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgIH1cbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS50dXJuKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDUpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLm1hcmtXaW5uZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuZm9ybVByb2Nlc3Npbmc7XG4gICAgfVxuICB9O1xuXG4gIC8qIElOSVRJQUxJWkFUSU4gKi9cblxuICBjb25zdCBwaGFzZXMgPSB7XG4gICAgZm9ybVByb2Nlc3Npbmc6IDAsXG4gICAgY29tcG9uZW50Q3JlYXRpb246IDEsXG4gICAgc3RhcnRpbmc6IDIsXG4gICAgc2hpcFBsYWNlbWVudDogMyxcbiAgICBwbGF5aW5nOiA0LFxuICAgIHdpbjogNSxcbiAgfTtcbiAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSB7XG4gICAgcGhhc2U6IHBoYXNlcy5mb3JtUHJvY2Vzc2luZyxcbiAgICBwbGFjZW1lbnRPcmllbnRhdGlvbjogJ3YnLFxuICAgIGFjdGl2ZUNvbXBvbmVudHM6IG51bGwsXG4gICAgaW5hY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICB9O1xuICBjb25zdCBza2lwRm9ybVBoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnLCBmb3JtRGF0YUFyZykge1xuICAgIC8vIGNvbnN0IGxlZnRQbGF5ZXJEYXRhID0ge31cbiAgICBmb3JtRGF0YUFyZy5sZWZ0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgc2l6ZTogJzgnLFxuICAgICAgY29tcHV0ZXI6IGZhbHNlLFxuICAgIH07XG4gICAgZm9ybURhdGFBcmcucmlnaHRQbGF5ZXIgPSB7XG4gICAgICBuYW1lOiAnU2FyYWgnLFxuICAgICAgc2l6ZTogJzEyJyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLmNvbXBvbmVudENyZWF0aW9uO1xuICB9O1xuICBjb25zdCBza2lwVG9XaW5QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgfTtcbiAgLy8gc2tpcEZvcm1QaGFzZShnYW1lUHJvcGVydGllcywgZm9ybURhdGEpO1xuICAvLyBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAvLyBza2lwVG9XaW5QaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIGdhbWVXaW5kb3cuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWxvb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lID0gJ0NvbXB1dGVyJywgaXNDb21wdXRlciA9IGZhbHNlLCBzaXplKSB7XG4gIGNvbnN0IGF0dGFjaEdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgZ2FtZWJvYXJkOiBhdHRhY2hHYW1lYm9hcmQoc2l6ZSksXG4gICAgYXR0YWNrKGVuZW15LCBtb3ZlKSB7XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuZ2FtZWJvYXJkLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcXVhcmUoKSk7XG4gICAgfSxcbiAgICBjaGVja0Zvckxvc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplLCBuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiwgJ2Rlc3Ryb3llcicpLFxuICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMywgJ3N1Ym1hcmluZScpLFxuICAgIGNydWlzZXI6IG5ldyBTaGlwKDMsICdjcnVpc2VyJyksXG4gICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1LCAnY2FycmllcicpLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXBzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBHYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuLy8gaW1wb3J0IHsgZ2FtZSwgZm9ybSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsIlBsYXllciIsIlBsYXllckNvbXBvbmVudHMiLCJvYmoiLCJzaGlwT3JpZW50YXRpb24iLCJjcmVhdGVQbGF5ZXJEYXRhIiwiY29tcHV0ZXIiLCJuYW1lIiwic2l6ZSIsImNyZWF0ZUdhbWVFbGVtZW50cyIsInBsYXllckRhdGEiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdhbWVib2FyZCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwic3F1YXJlcyIsImtleSIsInNxdWFyZUVsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsIm93bmVyIiwiYXBwZW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJjcmVhdGVTaGlwcyIsInNoaXBzIiwic2hpcEVsIiwidHlwZSIsImNyZWF0ZVJvdGF0aW9uQnV0dG9uIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ3JpZENvbnRhaW5lciIsInNoaXBDb250YWluZXIiLCJidXR0b25Db250YWluZXIiLCJlbGVtZW50cyIsIm1hcmtXaW5uZXIiLCJlbmFibGVTaGlwUGxhY2VtZW50Iiwicm90YXRpb24iLCJyZW1vdmUiLCJlbmFibGVEcmFnZ2FibGUiLCJzaGlwTGlzdCIsInZhbHVlcyIsInNoaXAiLCJzZXRBdHRyaWJ1dGUiLCJhZGRTaGlwRXZlbnRMaXN0ZW5lciIsImUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0Iiwic3F1YXJlIiwicHJldmVudERlZmF1bHQiLCJtb3pTb3VyY2VOb2RlIiwic3F1YXJlU3RyIiwic3RhdHVzIiwiY2hlY2tQbGFjZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsaWQiLCJzZWxlY3RlZFNxdWFyZXMiLCJwbGFjZVNoaXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQiLCJjb21wdXRlclBsYWNlU2hpcCIsImRpc2FibGVTaGlwUGxhY2VtZW50IiwiY2hpbGROb2RlcyIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJlbmFibGVSZWNlaXZpbmdBdHRhY2siLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiYXR0YWNrQ29udGVudCIsInJlY2VpdmVBdHRhY2siLCJkaXNhYmxlUmVjZWl2aW5nQXR0YWNrIiwiZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2siLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZmFkZVBsYXllciIsInVuZmFkZVBsYXllciIsImhpZGVQbGFjZWRTaGlwcyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJlbnRyaWVzIiwidmFsdWUiLCJvY2N1cGllcyIsImlzU2hpcFBsYWNlZCIsImlzT25lU2hpcFBsYWNlZCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsImNvbnRhaW5lciIsImxlZnRQbGF5ZXIiLCJpbnB1dCIsImVycm9yIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJyb3RhdGlvbkJ1dHRvbiIsImNvbnRpbnVlQnV0dG9uIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImdhbWVib2FyZFNpemUiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QbGFjZW1lbnQiLCJyYW5kb21TcXVhcmUiLCJzaGlwT3JpZW50QXJyIiwicmFuZG9tT3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJyYW5kb21TcSIsImZvcm1XaW5kb3ciLCJnYW1lV2luZG93IiwibWVzc2FnZVdpbmRvdyIsIkdhbWVsb29wIiwiZm9ybURhdGEiLCJwcm9jZXNzRm9ybSIsInNob3dFbGVtZW50IiwidG9nZ2xlUGxheWVySW5wdXQiLCJwbGF5ZXIiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJkaXNwbGF5U2xpZGVyVmFsdWUiLCJsZWZ0UGxheWVyVmFsaWQiLCJ2YWxpZGl0eSIsInJpZ2h0UGxheWVyVmFsaWQiLCJoaWRlRWxlbWVudCIsImdldEZvcm1JbnB1dCIsImdhbWVQcm9wZXJ0aWVzIiwicGhhc2UiLCJwaGFzZXMiLCJjb21wb25lbnRDcmVhdGlvbiIsInByb2Nlc3NQaGFzZSIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJwbGF5ZXJBcmciLCJ2YWx1ZU1pc3NpbmciLCJzZXRCYXNlVW5pdFNpemUiLCJzcXVhcmVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsImNoYW5nZU1lc3NhZ2UiLCJtZXNzYWdlQ29udGFpbmVyIiwid2luIiwidHVybiIsInJlbW92ZVBsYXllckNvbXBvbmVudHMiLCJwbGF5ZXJDb21wb25lbnRzIiwiYXBwZW5kUGxheWVyQ29tcG9uZW50cyIsInN3aXRjaEFjdGl2ZVBsYXllciIsImdhbWVQcm9wZXJ0aWVzQXJnIiwidGVtcCIsImFjdGl2ZUNvbXBvbmVudHMiLCJpbmFjdGl2ZUNvbXBvbmVudHMiLCJnYW1lRWxlbWVudHMiLCJzdGFydGluZyIsInNoaXBQbGFjZW1lbnQiLCJsZWZ0U2hpcFBsYWNlZCIsInJpZ2h0U2hpcFBsYWNlZCIsInBsYXlpbmciLCJpc0NvbXB1dGVyIiwiY2hlY2tGb3JMb3NzIiwiZm9ybVByb2Nlc3NpbmciLCJwbGFjZW1lbnRPcmllbnRhdGlvbiIsInNraXBGb3JtUGhhc2UiLCJmb3JtRGF0YUFyZyIsInNraXBUb1dpblBoYXNlIiwiYXR0YWNoR2FtZWJvYXJkIiwicHJldmlvdXNIaXQiLCJhdHRhY2siLCJlbmVteSIsIm1vdmUiLCJjb21wdXRlckF0dGFjayIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==