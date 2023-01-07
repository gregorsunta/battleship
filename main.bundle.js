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
      var attackContent = this.data.gameboard.receiveComputerAttack();
      processAttack(attackContent, squareNode);
      this.disableReceivingAttack();
    },
    disableReceivingAttack: function disableReceivingAttack() {
      var squareNodes = this.elements.gridContainer.childNodes;
      var _iterator7 = _createForOfIteratorHelper(squareNodes),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _squareNode = _step7.value;
          var oldSquare = _squareNode;
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
    receiveComputerAttack: function receiveComputerAttack(enemy) {
      var _this = this;
      var gameboardSize = this.size;
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
      var randomSq = randomSquare();
      return [enemy.gameboard.receiveAttack(randomSq), randomSq];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNBO0FBQ2xDO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3M/MDkyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSAucGxheWVycy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb3JtIHNlY3Rpb24ucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uID4gLm9wdGlvbi5jb21wdXRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lID4gLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QUMzQkE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LHlCQUFBO0FBd0lGOztBQXRJQTtFQUNFLG9DQUFBO0FBeUlGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRsYXJnZS1mb250LXNpemU6IDEuNHJlbTtcXG4kZm9udC1zaXplOiAxcmVtO1xcbiRzbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXG4kZmFkZS1jb2xvcjogI2U2ZTZlNjtcXG4kZ3JheTogIzRiNGI0YjtcXG5cXG4vKiBpY29ucyAqL1xcbiRpY29uLXNpemU6IDEuMnJlbTtcXG4kc21hbGwtaWNvbi1zaXplOiAxcmVtO1xcbiRzbWFsbGVyLWljb24tc2l6ZTogMC44cmVtO1xcblxcbi8qIGxheW91dCAqL1xcbi8vIHNpemVcXG4kZXh0cmEtc21hbGwtc2l6ZTogMC44cmVtO1xcbiRzbWFsbGVyLXNpemU6IDFyZW07XFxuJHNtYWxsLXNpemU6IDJyZW07XFxuJGNvbW1vbi1zaXplOiAzcmVtO1xcbiRsYXJnZS1zaXplOiA0cmVtO1xcbi8vIHJhZGl1c1xcbiRjb21tb24tYm9yZGVyLXJhZGl1czogMnJlbTtcXG4kc21hbGwtYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiRzbWFsbGVyLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuLy8gcGFkZGluZ1xcbiRsYXJnZS1wYWRkaW5nOiA0cmVtO1xcbiRjb21tb24tcGFkZGluZzogMnJlbTtcXG4kc21hbGwtcGFkZGluZzogMnJlbTtcXG4kc21hbGxlci1wYWRkaW5nOiAwLjVyZW07XFxuJGV4dHJhLXNtYWxsLXBhZGRpbmc6IDAuMjVyZW07XFxuXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogJG1haW4tY29sb3I7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogJHNtYWxsLXBhZGRpbmc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbiAgbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogJHNtYWxsLXBhZGRpbmc7XFxuICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRmYWRlLWNvbG9yO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgLnBsYXllcnMuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICB9XFxuICBzZWN0aW9uLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgfVxcbiAgc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gID4gLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbiAgICB9XFxuICB9XFxuICAuc2hpcHMuY29udGFpbmVyIHtcXG4gICAgJGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAkYmFzZS1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtICRib3JkZXItd2lkdGgpO1xcbiAgICAkc2hpcC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXG4gICAgJGJvcmRlci1jb2xvcjogJGdyYXk7XFxuICAgICRib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XFxuICAgIH1cXG4gICAgLnNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRmYWRlLWNvbG9yO1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG59XFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTE5YjtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZTBmZDtcXG59XFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVxcblwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcblxuY29uc3QgUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgbGV0IHNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgY29uc3QgY3JlYXRlUGxheWVyRGF0YSA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmNvbXB1dGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgdHJ1ZSwgb2JqLnNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgZmFsc2UsIG9iai5zaXplKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllckRhdGEuZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXJEYXRhLm5hbWV9YF07XG4gICAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZUVsKTtcbiAgICAgICAgZ3JpZC5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICB9XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gZ3JpZDtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7a2V5fWApO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC50eXBlID0gYCR7a2V5fWA7XG4gICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyRGF0YS5uYW1lfWA7XG4gICAgICAgIHNoaXBzLmFwcGVuZChzaGlwRWwpO1xuICAgICAgfVxuICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVSb3RhdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0aW9uJyk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksXG4gICAgICBzaGlwQ29udGFpbmVyOiBjcmVhdGVTaGlwcygpLFxuICAgICAgYnV0dG9uQ29udGFpbmVyOiBjcmVhdGVSb3RhdGlvbkJ1dHRvbigpLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGRhdGEgPSBjcmVhdGVQbGF5ZXJEYXRhKG9iaik7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBlbGVtZW50czogY3JlYXRlR2FtZUVsZW1lbnRzKGRhdGEpLFxuICAgIG1hcmtXaW5uZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XG4gICAgfSxcbiAgICBlbmFibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5zaGlwT3JpZW50YXRpb247XG4gICAgICBlbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcExpc3QpKSB7XG4gICAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkU2hpcEV2ZW50TGlzdGVuZXIgPSAoc2hpcExpc3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBzKSkge1xuICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXIgPSAoc3F1YXJlTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gc3F1YXJlTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKS5lbGVtZW50cztcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgICBhZGRTaGlwRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkR3JpZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICAgIH0sXG4gICAgZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKSB7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgZGF0YS5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAodGhpcy5kYXRhLmdhbWVib2FyZC5zaGlwc1trZXldKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZVJlY2VpdmluZ0F0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tDb250ZW50ID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVSZWNlaXZpbmdDb21wdXRlckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGF0dGFja0NvbnRlbnQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnJlY2VpdmVDb21wdXRlckF0dGFjaygpO1xuICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgIHRoaXMuZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpO1xuICAgIH0sXG4gICAgZGlzYWJsZVJlY2VpdmluZ0F0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZU5vZGU7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWRlUGxheWVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgfSxcbiAgICB1bmZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIGhpZGVQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZWQnKTtcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzaGlwU3F1YXJlcykge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VkJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93UGxhY2VkU2hpcHMoKSB7XG4gICAgICBjb25zdCBzcXVhcmVzRGF0YSA9IHRoaXMuZGF0YS5nYW1lYm9hcmQuc3F1YXJlcztcbiAgICAgIGNvbnN0IHNxdWFyZXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcjtcbiAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzcXVhcmVzRGF0YSkpIHtcbiAgICAgICAgaWYgKHZhbHVlLm9jY3VwaWVzKSB7XG4gICAgICAgICAgc3F1YXJlc0VsZW1lbnRzXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2tleX1cIl1gKVxuICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1NoaXBQbGFjZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmdhbWVib2FyZC5pc09uZVNoaXBQbGFjZWQoKTtcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFBsYXllckNvbXBvbmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UgfTtcblxuY29uc3QgZm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLmlucHV0LmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSxcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLmxlZnQuY29udGFpbmVyJyksXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLm5hbWUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgZXJyb3I6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIucmlnaHQuY29udGFpbmVyJyksXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm5hbWUgPiBpbnB1dCcpLFxuICAgICAgICBtZXNzYWdlOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm1lc3NhZ2UnKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXInKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IGlucHV0JyksXG4gICAgICAgIG91dHB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICAgIHJvdGF0aW9uQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgIGJ1dHRvbi5yb3RhdGlvbicpLFxuICAgIH0sXG4gICAgY29udGludWVCdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAgYnV0dG9uLnJvdGF0aW9uJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBtZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufSkoKTtcbi8vIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5vcmllbnRhdGlvbicpO1xuLy8gcmV0dXJuIGJ1dHRvbjtcbi8vIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGxldCBpc09uZVNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwRGF0YSwgc2hpcE9yaWVudCA9ICd2Jykge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgaWYgKHNoaXBEYXRhLnBsYWNlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHM6IG51bGwsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcFZlcnRpY2FsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2hlY2tQbGFjZW1lbnQsXG4gICAgc3F1YXJlcyxcbiAgICBzaGlwcyxcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjcmVhdGVCb2FyZChzaXplID0gMTApIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgIHRoaXMuc3F1YXJlc1tgJHtbaiwgaV19YF0gPSB7XG4gICAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgICAgICBvY2N1cGllczogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zcXVhcmVzO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzcXVhcmVTdHIsIG5ld09yaWVudCA9ICd2Jykge1xuICAgICAgY29uc29sZS5sb2coc3F1YXJlU3RyKTtcblxuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICAgIGNvbnN0IHNoaXBPcmllbnQgPSBuZXdPcmllbnQ7XG4gICAgICBpZiAoY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCBuZXdPcmllbnQpPy52YWxpZCkge1xuICAgICAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlclBsYWNlU2hpcChzaGlwKSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIGNvbnN0IHNoaXBPcmllbnRBcnIgPSBbJ3YnLCAnaCddO1xuICAgICAgICBjb25zdCByYW5kb21PcmllbnQgPVxuICAgICAgICAgIHNoaXBPcmllbnRBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcE9yaWVudEFyci5sZW5ndGgpXTtcblxuICAgICAgICBpZiAoY2hlY2tQbGFjZW1lbnQocmFuZG9tU3F1YXJlLCBzaGlwLCByYW5kb21PcmllbnQpLnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIFtzaGlwLm5hbWUsIHJhbmRvbVNxdWFyZSwgcmFuZG9tT3JpZW50XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb20gPSByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgICB0aGlzLnBsYWNlU2hpcCguLi5yYW5kb20pO1xuICAgIH0sXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3Qua2V5cyh0aGlzLnNoaXBzKSkge1xuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0uaXNTdW5rKCkgJiYgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhzcXVhcmVTdHIpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUlkU3RyID0gc3F1YXJlU3RyO1xuICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5zcXVhcmVzW3NxdWFyZUlkU3RyXTtcblxuICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgcmV0dXJuIGBPdXQgb2YgYm91bmRzYDtcbiAgICAgIH0gZWxzZSBpZiAoc3F1YXJlLmlzSGl0KSB7XG4gICAgICAgIHJldHVybiBgQWxyZWFkeSBoaXRgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZS5vY2N1cGllcy5oaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKGVuZW15KSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcSA9IHJhbmRvbVNxdWFyZSgpO1xuICAgICAgcmV0dXJuIFtlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcSksIHJhbmRvbVNxXTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyQ29tcG9uZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyc7XG5pbXBvcnQge1xuICBmb3JtIGFzIGZvcm1XaW5kb3csXG4gIGdhbWUgYXMgZ2FtZVdpbmRvdyxcbiAgbWVzc2FnZSBhcyBtZXNzYWdlV2luZG93LFxufSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybVdpbmRvdy5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybVdpbmRvdy5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm1XaW5kb3cuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICAvLyBoaWRlRWxlbWVudChyaWdodFBsYXllci5uYW1lLmVycm9yKTtcbiAgICAgIC8vIGhpZGVFbGVtZW50KGxlZnRQbGF5ZXIubmFtZS5lcnJvcik7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm1XaW5kb3cuY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICBjb25zdCBzZXRCYXNlVW5pdFNpemUgPSAoKSA9PiB7XG4gICAgLy8gbWFrZSBzaGlwIHdpZHRoIHRoZSBzYW1lIGFzIHNxdWFyZSB3aWR0aFxuICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICctLWJhc2UtdW5pdC1zaXplJyxcbiAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgcGxheWVyQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5ZXJDb21wb25lbnRzPy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHBsYXllckNvbXBvbmVudHM/LmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcbiAgY29uc3QgYXBwZW5kUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb250YWluZXIsIHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb250YWluZXIuZ2FtZWJvYXJkLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuY29udGFpbmVyLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcik7XG4gIH07XG4gIGNvbnN0IHN3aXRjaEFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGNvbnN0IHRlbXAgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzO1xuICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMgPSBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1BoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSBnYW1lUHJvcGVydGllc0FyZztcbiAgICBjb25zdCBnYW1lRWxlbWVudHMgPSBnYW1lV2luZG93O1xuICAgIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMCkge1xuICAgICAgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyhnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIHJlbW92ZVBsYXllckNvbXBvbmVudHMoZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGhpZGVFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMSkge1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IG5ldyBQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllcixcbiAgICAgICk7XG4gICAgICBhcHBlbmRQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllcixcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyxcbiAgICAgICk7XG4gICAgICBhcHBlbmRQbGF5ZXJDb21wb25lbnRzKFxuICAgICAgICBnYW1lRWxlbWVudHMucmlnaHRQbGF5ZXIsXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyxcbiAgICAgICk7XG4gICAgICBzaG93RWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zdGFydGluZztcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMikge1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuc2hpcFBsYWNlbWVudDtcbiAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gMykge1xuICAgICAgY29uc3QgbGVmdFNoaXBQbGFjZWQgPSBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpO1xuICAgICAgY29uc3QgcmlnaHRTaGlwUGxhY2VkID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmlzU2hpcFBsYWNlZCgpO1xuXG4gICAgICBpZiAobGVmdFNoaXBQbGFjZWQgJiYgcmlnaHRTaGlwUGxhY2VkKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgLy8gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMucGxheWluZztcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAobGVmdFNoaXBQbGFjZWQgfHwgcmlnaHRTaGlwUGxhY2VkKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGlzYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgLy8gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcblxuICAgICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICAgIGlmIChnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlcikge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVDb21wdXRlclBsYWNlbWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnYW1lUHJvcGVydGllcy5waGFzZSA9PT0gNCkge1xuICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5kYXRhLmNoZWNrRm9yTG9zcygpKSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaEFjdGl2ZVBsYXllcihnYW1lUHJvcGVydGllcyk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbmFibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS50dXJuKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgY29uc29sZS5sb2coZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmRhdGEuY2hlY2tGb3JMb3NzKCkpO1xuXG4gICAgICAvLyBpZiAoZW5hYmxlUmVjZWl2aW5nQXR0YWNrLnN0YXR1cykge1xuICAgICAgLy8gfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDUpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLm1hcmtXaW5uZXIoKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuc2hvd1BsYWNlZFNoaXBzKCk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuZm9ybVByb2Nlc3Npbmc7XG4gICAgfVxuICB9O1xuXG4gIC8qIElOSVRJQUxJWkFUSU4gKi9cblxuICBjb25zdCBwaGFzZXMgPSB7XG4gICAgZm9ybVByb2Nlc3Npbmc6IDAsXG4gICAgY29tcG9uZW50Q3JlYXRpb246IDEsXG4gICAgc3RhcnRpbmc6IDIsXG4gICAgc2hpcFBsYWNlbWVudDogMyxcbiAgICBwbGF5aW5nOiA0LFxuICAgIHdpbjogNSxcbiAgfTtcbiAgY29uc3QgZ2FtZVByb3BlcnRpZXMgPSB7XG4gICAgcGhhc2U6IHBoYXNlcy5mb3JtUHJvY2Vzc2luZyxcbiAgICBwbGFjZW1lbnRPcmllbnRhdGlvbjogJ3YnLFxuICAgIGFjdGl2ZUNvbXBvbmVudHM6IG51bGwsXG4gICAgaW5hY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICB9O1xuICBjb25zdCBza2lwRm9ybVBoYXNlID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnLCBmb3JtRGF0YUFyZykge1xuICAgIC8vIGNvbnN0IGxlZnRQbGF5ZXJEYXRhID0ge31cbiAgICBmb3JtRGF0YUFyZy5sZWZ0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgc2l6ZTogJzgnLFxuICAgICAgY29tcHV0ZXI6IGZhbHNlLFxuICAgIH07XG4gICAgZm9ybURhdGFBcmcucmlnaHRQbGF5ZXIgPSB7XG4gICAgICBuYW1lOiAnU2FyYWgnLFxuICAgICAgc2l6ZTogJzEyJyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLmNvbXBvbmVudENyZWF0aW9uO1xuICB9O1xuICBjb25zdCBza2lwVG9XaW5QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgfTtcbiAgLy8gc2tpcEZvcm1QaGFzZShnYW1lUHJvcGVydGllcywgZm9ybURhdGEpO1xuICAvLyBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAvLyBza2lwVG9XaW5QaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIGdhbWVXaW5kb3cuY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWxvb3A7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uIChuYW1lID0gJ0NvbXB1dGVyJywgaXNDb21wdXRlciA9IGZhbHNlLCBzaXplKSB7XG4gIGNvbnN0IGF0dGFjaEdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZC5jcmVhdGVCb2FyZChzaXplKTtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaXNDb21wdXRlcjogaXNDb21wdXRlcixcbiAgICBwcmV2aW91c0hpdDogZmFsc2UsXG4gICAgZ2FtZWJvYXJkOiBhdHRhY2hHYW1lYm9hcmQoc2l6ZSksXG4gICAgYXR0YWNrKGVuZW15LCBtb3ZlKSB7XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgfSxcbiAgICBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuZ2FtZWJvYXJkLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21TcXVhcmUoKSk7XG4gICAgfSxcbiAgICBjaGVja0Zvckxvc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYXJlU2hpcHNTdW5rKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uIChzaXplLCBuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIC8vIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb3JpZW50OiAndicsXG4gICAgaGl0czogMCxcbiAgICBwbGFjZWQ6IGZhbHNlLFxuICAgIGhpdCgpIHtcbiAgICAgIHJldHVybiArK3RoaXMuaGl0cztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG4gICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcbmNvbnN0IFNoaXBzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3llcjogbmV3IFNoaXAoMiwgJ2Rlc3Ryb3llcicpLFxuICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMywgJ3N1Ym1hcmluZScpLFxuICAgIGNydWlzZXI6IG5ldyBTaGlwKDMsICdjcnVpc2VyJyksXG4gICAgYmF0dGxlc2hpcDogbmV3IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKSxcbiAgICBjYXJyaWVyOiBuZXcgU2hpcCg1LCAnY2FycmllcicpLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXBzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBHYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuLy8gaW1wb3J0IHsgZ2FtZSwgZm9ybSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsIlBsYXllciIsIlBsYXllckNvbXBvbmVudHMiLCJvYmoiLCJzaGlwT3JpZW50YXRpb24iLCJjcmVhdGVQbGF5ZXJEYXRhIiwiY29tcHV0ZXIiLCJuYW1lIiwic2l6ZSIsImNyZWF0ZUdhbWVFbGVtZW50cyIsInBsYXllckRhdGEiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdhbWVib2FyZCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwic3F1YXJlcyIsImtleSIsInNxdWFyZUVsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsIm93bmVyIiwiYXBwZW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJjcmVhdGVTaGlwcyIsInNoaXBzIiwic2hpcEVsIiwidHlwZSIsImNyZWF0ZVJvdGF0aW9uQnV0dG9uIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ3JpZENvbnRhaW5lciIsInNoaXBDb250YWluZXIiLCJidXR0b25Db250YWluZXIiLCJlbGVtZW50cyIsIm1hcmtXaW5uZXIiLCJlbmFibGVTaGlwUGxhY2VtZW50Iiwicm90YXRpb24iLCJyZW1vdmUiLCJlbmFibGVEcmFnZ2FibGUiLCJzaGlwTGlzdCIsInZhbHVlcyIsInNoaXAiLCJzZXRBdHRyaWJ1dGUiLCJhZGRTaGlwRXZlbnRMaXN0ZW5lciIsImUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0Iiwic3F1YXJlIiwicHJldmVudERlZmF1bHQiLCJtb3pTb3VyY2VOb2RlIiwic3F1YXJlU3RyIiwic3RhdHVzIiwiY2hlY2tQbGFjZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsaWQiLCJzZWxlY3RlZFNxdWFyZXMiLCJwbGFjZVNoaXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQiLCJjb21wdXRlclBsYWNlU2hpcCIsImRpc2FibGVTaGlwUGxhY2VtZW50IiwiY2hpbGROb2RlcyIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJlbmFibGVSZWNlaXZpbmdBdHRhY2siLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiYXR0YWNrQ29udGVudCIsInJlY2VpdmVBdHRhY2siLCJkaXNhYmxlUmVjZWl2aW5nQXR0YWNrIiwiZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2siLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJmYWRlUGxheWVyIiwidW5mYWRlUGxheWVyIiwiaGlkZVBsYWNlZFNoaXBzIiwic2hpcFNxdWFyZXMiLCJzaG93UGxhY2VkU2hpcHMiLCJzcXVhcmVzRGF0YSIsInNxdWFyZXNFbGVtZW50cyIsImVudHJpZXMiLCJ2YWx1ZSIsIm9jY3VwaWVzIiwiaXNTaGlwUGxhY2VkIiwiaXNPbmVTaGlwUGxhY2VkIiwiZm9ybSIsImdhbWUiLCJtZXNzYWdlIiwiY29udGFpbmVyIiwibGVmdFBsYXllciIsImlucHV0IiwiZXJyb3IiLCJvdXRwdXQiLCJyaWdodFBsYXllciIsInJvdGF0aW9uQnV0dG9uIiwiY29udGludWVCdXR0b24iLCJTaGlwcyIsIkdhbWVib2FyZCIsInNoaXBEYXRhIiwic2hpcE9yaWVudCIsInNxdWFyZUlkIiwic3BsaXQiLCJlbCIsIk51bWJlciIsInBsYWNlZCIsIm5laWdoYm91clN0ciIsInBsYWNlU2hpcFZlcnRpY2FsbHkiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiY29uc29sZSIsImxvZyIsImdhbWVib2FyZFNpemUiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QbGFjZW1lbnQiLCJyYW5kb21TcXVhcmUiLCJzaGlwT3JpZW50QXJyIiwicmFuZG9tT3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJlbmVteSIsInJhbmRvbVNxIiwiZm9ybVdpbmRvdyIsImdhbWVXaW5kb3ciLCJtZXNzYWdlV2luZG93IiwiR2FtZWxvb3AiLCJmb3JtRGF0YSIsInByb2Nlc3NGb3JtIiwic2hvd0VsZW1lbnQiLCJ0b2dnbGVQbGF5ZXJJbnB1dCIsInBsYXllciIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImxlZnRQbGF5ZXJWYWxpZCIsInZhbGlkaXR5IiwicmlnaHRQbGF5ZXJWYWxpZCIsImhpZGVFbGVtZW50IiwiZ2V0Rm9ybUlucHV0IiwiZ2FtZVByb3BlcnRpZXMiLCJwaGFzZSIsInBoYXNlcyIsImNvbXBvbmVudENyZWF0aW9uIiwicHJvY2Vzc1BoYXNlIiwicmVzZXQiLCJkaXNwbGF5RXJyb3IiLCJzaG93RXJyb3IiLCJlcnJvckNvbnRhaW5lciIsIm1zZyIsInBsYXllckFyZyIsInZhbHVlTWlzc2luZyIsInNldEJhc2VVbml0U2l6ZSIsInNxdWFyZUhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiY2hhbmdlTWVzc2FnZSIsIm1lc3NhZ2VDb250YWluZXIiLCJ3aW4iLCJ0dXJuIiwicmVtb3ZlUGxheWVyQ29tcG9uZW50cyIsInBsYXllckNvbXBvbmVudHMiLCJhcHBlbmRQbGF5ZXJDb21wb25lbnRzIiwic3dpdGNoQWN0aXZlUGxheWVyIiwiZ2FtZVByb3BlcnRpZXNBcmciLCJ0ZW1wIiwiYWN0aXZlQ29tcG9uZW50cyIsImluYWN0aXZlQ29tcG9uZW50cyIsImdhbWVFbGVtZW50cyIsInN0YXJ0aW5nIiwic2hpcFBsYWNlbWVudCIsImxlZnRTaGlwUGxhY2VkIiwicmlnaHRTaGlwUGxhY2VkIiwicGxheWluZyIsImlzQ29tcHV0ZXIiLCJjaGVja0Zvckxvc3MiLCJmb3JtUHJvY2Vzc2luZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwic2tpcEZvcm1QaGFzZSIsImZvcm1EYXRhQXJnIiwic2tpcFRvV2luUGhhc2UiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsIm1vdmUiLCJjb21wdXRlckF0dGFjayIsIlNoaXAiLCJvcmllbnQiLCJoaXRzIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==