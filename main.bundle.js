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
      this.elements.buttonContainer.classList.add('hide');
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
      processAttack(result, squareNode);
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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
      var checkIfPossibleHit = function checkIfPossibleHit() {
        for (var _i3 = 0, _Object$entries = Object.entries(squares); _i3 < _Object$entries.length; _i3++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (value.isHit && value.occupies && !value.occupies.isSunk()) {
            var square = key.split(',');
            var neighbourArr = [[Number(square[0]) + 1, Number(square[1])], [Number(square[0]) - 1, Number(square[1])], [Number(square[0]), Number(square[1]) + 1], [Number(square[0]), Number(square[1]) - 1]];
            for (var _i4 = 0, _neighbourArr = neighbourArr; _i4 < _neighbourArr.length; _i4++) {
              var _squares$neighbour$jo;
              var neighbour = _neighbourArr[_i4];
              if (((_squares$neighbour$jo = squares[neighbour.join(',')]) === null || _squares$neighbour$jo === void 0 ? void 0 : _squares$neighbour$jo.isHit) === false) {
                return neighbour;
              }
            }
          }
        }
        return null;
      };
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
      var possibleHit = checkIfPossibleHit();
      if (possibleHit) {
        return [this.receiveAttack(possibleHit), possibleHit];
      } else {
        var randomSq = randomSquare();
        return [this.receiveAttack(randomSq), randomSq];
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
        gameProperties.activeComponents.hidePlacedShips();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
      } else if (leftShipPlaced || rightShipPlaced) {
        gameProperties.activeComponents.disableShipPlacement();
        gameProperties.activeComponents.hidePlacedShips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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SUFBSUwsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUM7SUFDL0JNLFVBQVUsRUFBRSxJQUFJTixJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQztJQUNyQ08sT0FBTyxFQUFFLElBQUlQLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUztFQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFlcEcsS0FBSzs7Ozs7O1VDNUJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUNsQztBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzPzA5MjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXJDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQlVOVFUgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gLnBsYXllcnMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSA+IC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgLnNxdWFyZSB7XFxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiNGI0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuXFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuXFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTE5YjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZTBmZDtcXG59XFxuXFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9mb250cy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQtc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBRUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FDM0JBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRDRCRjs7QUMxQkEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FENkJGOztBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7O0FDNUJBOztFQUVFLGdCQUFBO0FEK0JGOztBQzdCQTs7RUFFRSxZQUFBO0FEZ0NGOztBQzlCQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FEaUNGOztBQy9CQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7O0FDL0JBLGtCQUFBO0FEL0hBO0VBQ0Usc0JBQUE7QUFrS0Y7O0FBL0pBLFdBQUE7QUFZQSxVQUFBO0FBS0EsV0FBQTtBQWtCQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBckNXO0FBc0tiOztBQS9IQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBa0lGOztBQWhJQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFwQmM7RUFxQmQseUJBaERnQjtBQW1MbEI7QUFsSUU7RUFDRSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFwRGM7QUF1TGxCOztBQS9IQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBa0lGOztBQWhJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQTNDYztFQTRDZCxhQTlDYztFQStDZCxxQkFsRG9CO0VBbURwQixnQ0FBQTtBQW1JRjtBQWpJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0E3RFU7QUFnTWQ7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBbkVVO0FBc01kO0FBaklFO0VBQ0UsYUFBQTtBQW1JSjtBQWpJRTtFQUNFLFVBQUE7QUFtSUo7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQWhGWTtBQW1OZDtBQWxJRTtFQUNFLGFBQUE7QUFvSUo7QUFsSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFvSUo7QUFuSUk7RUFDRSxhQUFBO0FBcUlOO0FBbklJO0VBQ0UsdUNBQUE7QUFxSU47QUFsSUU7RUFNRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBK0hKO0FBOUhJO0VBQ0UseUJBdkhDO0FBdVBQO0FBOUhJO0VBQ0UseUJBL0hZO0VBZ0laLHlCQUFBO0VBQ0Esa0JBYmM7RUFjZCxpQkFBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBCVTtFQXFCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXhCVTtFQXlCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQTVCVTtFQTZCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQWhDVTtFQWlDViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBDVTtFQXFDViw4Q0FBQTtBQWdJTjs7QUE1SEEsV0FBQTtBQUNBO0VBQ0UsOENBQUE7RUFDQSxlQWxJZ0I7RUFtSWhCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQWpLZ0I7QUFnU2xCOztBQTVIQSxvQkFBQTtBQUVBO0VBQ0UscUJBakpvQjtFQWtKcEIseUJBQUE7RUFDQSxlQTdJZ0I7QUEyUWxCOztBQTVIQTtFQUNFLFlBQUE7QUErSEY7O0FBN0hBO0VBQ0Usd0JBQUE7QUFnSUY7O0FBOUhBO0VBQ0UseUJBQUE7QUFpSUY7O0FBL0hBO0VBQ0UseUJBQUE7QUFrSUY7O0FBaElBO0VBQ0UseUJBQUE7QUFtSUY7O0FBaklBO0VBQ0UsWUFBQTtBQW9JRjs7QUFsSUE7RUFDRSx5QkFBQTtBQXFJRjs7QUFuSUE7RUFDRSx5QkFBQTtBQXNJRjs7QUFwSUE7RUFDRSx5QkFBQTtBQXVJRjs7QUFySUE7RUFDRSx5QkFBQTtBQXdJRjs7QUF0SUE7RUFDRSxvQ0FBQTtBQXlJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQlVOVFUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsXCJAdXNlICcuL2ZvbnRzLmNzcyc7XFxuQHVzZSAnLi9yZXNldC1zdHlsZXMuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4kaGlnaGxpZ2h0OiAjZmZjY2NjO1xcblxcbiRtYWluLWNvbG9yOiAjMmMzYTQ3O1xcbiRzZWNvbmRhcnktY29sb3I6ICNlMWY5ZjQ7XFxuJGhpZ2hsaWdodC1jb2xvcjogI2ZmY2NjYztcXG4kbGFyZ2UtZm9udC1zaXplOiAxLjRyZW07XFxuJGZvbnQtc2l6ZTogMXJlbTtcXG4kc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxuJGZhZGUtY29sb3I6ICNlNmU2ZTY7XFxuJGdyYXk6ICM0YjRiNGI7XFxuXFxuLyogaWNvbnMgKi9cXG4kaWNvbi1zaXplOiAxLjJyZW07XFxuJHNtYWxsLWljb24tc2l6ZTogMXJlbTtcXG4kc21hbGxlci1pY29uLXNpemU6IDAuOHJlbTtcXG5cXG4vKiBsYXlvdXQgKi9cXG4vLyBzaXplXFxuJGV4dHJhLXNtYWxsLXNpemU6IDAuOHJlbTtcXG4kc21hbGxlci1zaXplOiAxcmVtO1xcbiRzbWFsbC1zaXplOiAycmVtO1xcbiRjb21tb24tc2l6ZTogM3JlbTtcXG4kbGFyZ2Utc2l6ZTogNHJlbTtcXG4vLyByYWRpdXNcXG4kY29tbW9uLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuJHNtYWxsLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4kc21hbGxlci1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbi8vIHBhZGRpbmdcXG4kbGFyZ2UtcGFkZGluZzogNHJlbTtcXG4kY29tbW9uLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsZXItcGFkZGluZzogMC41cmVtO1xcbiRleHRyYS1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6ICRzbWFsbC1wYWRkaW5nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICBmb250LXNpemU6ICRsYXJnZS1mb250LXNpemU7XFxuICB9XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRzbWFsbC1wYWRkaW5nO1xcbiAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkZmFkZS1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgfVxcbiAgc2VjdGlvbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIH1cXG4gIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWExOWI7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWUwZmQ7XFxufVxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5cbmNvbnN0IFBsYXllckNvbXBvbmVudHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGxldCBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gIGNvbnN0IGNyZWF0ZVBsYXllckRhdGEgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5jb21wdXRlcikge1xuICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIHRydWUsIG9iai5zaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIGZhbHNlLCBvYmouc2l6ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjcmVhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgIGNvbnN0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllckRhdGEuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgIHNxdWFyZUVsLmRhdGFzZXQub3duZXIgPSBbYCR7cGxheWVyRGF0YS5uYW1lfWBdO1xuICAgICAgICBncmlkLmFwcGVuZChzcXVhcmVFbCk7XG4gICAgICAgIGdyaWQuc3R5bGUuaGVpZ2h0ID0gYDEwMCVgO1xuICAgICAgICBncmlkLnN0eWxlLndpZHRoID0gYDEwMCVgO1xuICAgICAgfVxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyRGF0YS5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2tleX1gKTtcbiAgICAgICAgc2hpcEVsLmRhdGFzZXQudHlwZSA9IGAke2tleX1gO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC5vd25lciA9IGAke3BsYXllckRhdGEubmFtZX1gO1xuICAgICAgICBzaGlwcy5hcHBlbmQoc2hpcEVsKTtcbiAgICAgIH1cbiAgICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJywgJ2NvbnRhaW5lcicpO1xuICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUm90YXRpb25CdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGlvbicpO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdoJztcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ3YnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JpZENvbnRhaW5lcjogY3JlYXRlR3JpZCgpLFxuICAgICAgc2hpcENvbnRhaW5lcjogY3JlYXRlU2hpcHMoKSxcbiAgICAgIGJ1dHRvbkNvbnRhaW5lcjogY3JlYXRlUm90YXRpb25CdXR0b24oKSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBkYXRhID0gY3JlYXRlUGxheWVyRGF0YShvYmopO1xuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgZWxlbWVudHM6IGNyZWF0ZUdhbWVFbGVtZW50cyhkYXRhKSxcbiAgICBtYXJrV2lubmVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICAgIH0sXG4gICAgZW5hYmxlU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHRoaXMuc2hpcE9yaWVudGF0aW9uO1xuICAgICAgZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBjb25zdCBlbmFibGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAoc2hpcExpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBMaXN0KSkge1xuICAgICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFkZFNoaXBFdmVudExpc3RlbmVyID0gKHNoaXBMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gc2hpcExpc3Q7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwcykpIHtcbiAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L2h0bWwnLCBgJHtlLnRhcmdldH1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFkZEdyaWRFdmVudExpc3RlbmVyID0gKHNxdWFyZUxpc3QpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHNxdWFyZUxpc3Q7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBPYmplY3QudmFsdWVzKGdyaWQpKSB7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGUsXG4gICAgICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGVuYWJsZURyYWdnYWJsZShlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICAgIGFkZEdyaWRFdmVudExpc3RlbmVyKGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgICB9LFxuICAgIGVuYWJsZUNvbXB1dGVyUGxhY2VtZW50KCkge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YS5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgIGRhdGEuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKHRoaXMuZGF0YS5nYW1lYm9hcmQuc2hpcHNba2V5XSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVSZWNlaXZpbmdBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICAgIHNxdWFyZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrQ29udGVudCA9IHRoaXMuZGF0YS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICAgIHNxdWFyZU5vZGUuZGF0YXNldC5pZCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHByb2Nlc3NBdHRhY2soYXR0YWNrQ29udGVudCwgc3F1YXJlTm9kZSk7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBbcmVzdWx0LCBzcXVhcmVdID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQ29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGUgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmV9XCJdYCxcbiAgICAgICk7XG4gICAgICBwcm9jZXNzQXR0YWNrKHJlc3VsdCwgc3F1YXJlTm9kZSk7XG4gICAgfSxcbiAgICBkaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlTm9kZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIHVuZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIH0sXG4gICAgaGlkZVBsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNoaXBTcXVhcmVzKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZXNEYXRhID0gdGhpcy5kYXRhLmdhbWVib2FyZC5zcXVhcmVzO1xuICAgICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyO1xuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXNEYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmVzRWxlbWVudHNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7a2V5fVwiXWApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlzU2hpcFBsYWNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2FtZWJvYXJkLmlzT25lU2hpcFBsYWNlZCgpO1xuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ29tcG9uZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZm9ybSwgZ2FtZSwgbWVzc2FnZSB9O1xuXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLFxuICAgIGxlZnRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubGVmdC5jb250YWluZXInKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLm5hbWUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmVycm9yJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuY29tcHV0ZXInKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlciA+IGlucHV0JyksXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IGlucHV0JyksXG4gICAgICAgIG91dHB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUgPiBvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5yaWdodC5jb250YWluZXInKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm5hbWUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIG1lc3NhZ2U6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubWVzc2FnZScpLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5jb21wdXRlciA+IGlucHV0JyksXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBnYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGxlZnRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAgYnV0dG9uLnJvdGF0aW9uJyksXG4gICAgfSxcbiAgICBjb250aW51ZUJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb250aW51ZScpLFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5zaGlwcy5jb250YWluZXInKSxcbiAgICAgIHJvdGF0aW9uQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ICBidXR0b24ucm90YXRpb24nKSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IG1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gIH07XG59KSgpO1xuLy8gY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm9yaWVudGF0aW9uJyk7XG4vLyByZXR1cm4gYnV0dG9uO1xuLy8gfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNxdWFyZXMgPSB7fTtcbiAgY29uc3Qgc2hpcHMgPSBuZXcgU2hpcHMoKTtcbiAgbGV0IGlzT25lU2hpcFBsYWNlZCA9IGZhbHNlO1xuICBjb25zdCBjaGVja1BsYWNlbWVudCA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXBEYXRhLCBzaGlwT3JpZW50ID0gJ3YnKSB7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBpZiAoc2hpcERhdGEucGxhY2VkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogbnVsbCxcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGlzT25lU2hpcFBsYWNlZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzT25lU2hpcFBsYWNlZDtcbiAgICB9LFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVyUGxhY2VTaGlwKHNoaXApIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21TcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgY29uc3Qgc2hpcE9yaWVudEFyciA9IFsndicsICdoJ107XG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudCA9XG4gICAgICAgICAgc2hpcE9yaWVudEFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGlwT3JpZW50QXJyLmxlbmd0aCldO1xuXG4gICAgICAgIGlmIChjaGVja1BsYWNlbWVudChyYW5kb21TcXVhcmUsIHNoaXAsIHJhbmRvbU9yaWVudCkudmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gW3NoaXAubmFtZSwgcmFuZG9tU3F1YXJlLCByYW5kb21PcmllbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBsYWNlbWVudCgpO1xuICAgICAgdGhpcy5wbGFjZVNoaXAoLi4ucmFuZG9tKTtcbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2VpdmVDb21wdXRlckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IGNoZWNrSWZQb3NzaWJsZUhpdCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXMpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmlzSGl0ICYmIHZhbHVlLm9jY3VwaWVzICYmICF2YWx1ZS5vY2N1cGllcy5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvdXJBcnIgPSBbXG4gICAgICAgICAgICAgIFtOdW1iZXIoc3F1YXJlWzBdKSArIDEsIE51bWJlcihzcXVhcmVbMV0pXSxcbiAgICAgICAgICAgICAgW051bWJlcihzcXVhcmVbMF0pIC0gMSwgTnVtYmVyKHNxdWFyZVsxXSldLFxuICAgICAgICAgICAgICBbTnVtYmVyKHNxdWFyZVswXSksIE51bWJlcihzcXVhcmVbMV0pICsgMV0sXG4gICAgICAgICAgICAgIFtOdW1iZXIoc3F1YXJlWzBdKSwgTnVtYmVyKHNxdWFyZVsxXSkgLSAxXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGxldCBuZWlnaGJvdXIgb2YgbmVpZ2hib3VyQXJyKSB7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW25laWdoYm91ci5qb2luKCcsJyldPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVpZ2hib3VyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBwb3NzaWJsZUhpdCA9IGNoZWNrSWZQb3NzaWJsZUhpdCgpO1xuICAgICAgaWYgKHBvc3NpYmxlSGl0KSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yZWNlaXZlQXR0YWNrKHBvc3NpYmxlSGl0KSwgcG9zc2libGVIaXRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3EgPSByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlY2VpdmVBdHRhY2socmFuZG9tU3EpLCByYW5kb21TcV07XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBsYXllckNvbXBvbmVudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL1BsYXllckNvbXBvbmVudHMuanMnO1xuaW1wb3J0IHtcbiAgZm9ybSBhcyBmb3JtV2luZG93LFxuICBnYW1lIGFzIGdhbWVXaW5kb3csXG4gIG1lc3NhZ2UgYXMgbWVzc2FnZVdpbmRvdyxcbn0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuY29uc3QgR2FtZWxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICBjb25zdCBwcm9jZXNzRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG93RWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgY29uc3QgbGVmdFBsYXllciA9IGZvcm1XaW5kb3cubGVmdFBsYXllcjtcbiAgICBjb25zdCByaWdodFBsYXllciA9IGZvcm1XaW5kb3cucmlnaHRQbGF5ZXI7XG4gICAgY29uc3QgdG9nZ2xlUGxheWVySW5wdXQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAocGxheWVyLmNvbXB1dGVyLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgcGxheWVyLm5hbWUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgLy8gcGxheWVyLnNpemUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyLnNpemUuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxlZnRQbGF5ZXIuY29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlUGxheWVySW5wdXQobGVmdFBsYXllcik7XG4gICAgfSk7XG4gICAgcmlnaHRQbGF5ZXIuY29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlUGxheWVySW5wdXQocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGxlZnRQbGF5ZXIuc2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGRpc3BsYXlTbGlkZXJWYWx1ZShsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKHJpZ2h0UGxheWVyKTtcbiAgICB9KTtcbiAgICBmb3JtV2luZG93LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsZWZ0UGxheWVyVmFsaWQgPSBsZWZ0UGxheWVyLm5hbWUuaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gICAgICBjb25zdCByaWdodFBsYXllclZhbGlkID0gcmlnaHRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcblxuICAgICAgLy8gaGlkZUVsZW1lbnQocmlnaHRQbGF5ZXIubmFtZS5lcnJvcik7XG4gICAgICAvLyBoaWRlRWxlbWVudChsZWZ0UGxheWVyLm5hbWUuZXJyb3IpO1xuXG4gICAgICBpZiAobGVmdFBsYXllclZhbGlkICYmIHJpZ2h0UGxheWVyVmFsaWQpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQoZm9ybVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyID0gZ2V0Rm9ybUlucHV0KGxlZnRQbGF5ZXIpO1xuICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllciA9IGdldEZvcm1JbnB1dChyaWdodFBsYXllcik7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLmNvbXBvbmVudENyZWF0aW9uO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICBmb3JtV2luZG93LmNvbnRhaW5lci5yZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxlZnRQbGF5ZXJWYWxpZCkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvcihsZWZ0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvcihyaWdodFBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb250YWluZXIsIG1zZykge1xuICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5U2xpZGVyVmFsdWUgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBwbGF5ZXIuc2l6ZS5vdXRwdXQudGV4dENvbnRlbnQgPSBwbGF5ZXIuc2l6ZS5pbnB1dC52YWx1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldEZvcm1JbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXJBcmcpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllckFyZztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHBsYXllci5uYW1lLmlucHV0LnZhbHVlLFxuICAgICAgICBjb21wdXRlcjogcGxheWVyLmNvbXB1dGVyLmlucHV0LmNoZWNrZWQsXG4gICAgICAgIHNpemU6IHBsYXllci5zaXplLmlucHV0LnZhbHVlLFxuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlFcnJvciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIHNob3dFcnJvcihwbGF5ZXIuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3Qgc2V0QmFzZVVuaXRTaXplID0gKCkgPT4ge1xuICAgIC8vIG1ha2Ugc2hpcCB3aWR0aCB0aGUgc2FtZSBhcyBzcXVhcmUgd2lkdGhcbiAgICBjb25zdCBzcXVhcmVIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIjAsMFwiXWApLm9mZnNldEhlaWdodDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1iYXNlLXVuaXQtc2l6ZScsXG4gICAgICBgJHtzcXVhcmVIZWlnaHR9cHhgLFxuICAgICk7XG4gIH07XG4gIGNvbnN0IGNoYW5nZU1lc3NhZ2UgPSBmdW5jdGlvbiAoY29udGFpbmVyID0gbWVzc2FnZVdpbmRvdy5jb250YWluZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHJldHVybiB7XG4gICAgICB3aW46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBUaGUgd2lubmVyIGlzICR7cGxheWVyLmRhdGEubmFtZX1gO1xuICAgICAgfSxcbiAgICAgIHR1cm46IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBJdCBpcyAke3BsYXllci5kYXRhLm5hbWV9J3MgdHVybmA7XG4gICAgICB9LFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVBsYXllckNvbXBvbmVudHMgPSBmdW5jdGlvbiAocGxheWVyQ29tcG9uZW50cykge1xuICAgIHBsYXllckNvbXBvbmVudHM/LmVsZW1lbnRzLmdyaWRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgcGxheWVyQ29tcG9uZW50cz8uZWxlbWVudHMuc2hpcENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5ZXJDb21wb25lbnRzPy5lbGVtZW50cy5idXR0b25Db250YWluZXIucmVtb3ZlKCk7XG4gIH07XG4gIGNvbnN0IGFwcGVuZFBsYXllckNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgY29udGFpbmVyLmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5idXR0b25Db250YWluZXIpO1xuICB9O1xuICBjb25zdCBzd2l0Y2hBY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBjb25zdCB0ZW1wID0gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cztcbiAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzO1xuICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IHRlbXA7XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NQaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0gZ2FtZVByb3BlcnRpZXNBcmc7XG4gICAgY29uc3QgZ2FtZUVsZW1lbnRzID0gZ2FtZVdpbmRvdztcbiAgICBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDApIHtcbiAgICAgIHJlbW92ZVBsYXllckNvbXBvbmVudHMoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICByZW1vdmVQbGF5ZXJDb21wb25lbnRzKGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBoaWRlRWxlbWVudChnYW1lV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBzaG93RWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICBwcm9jZXNzRm9ybSgpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDEpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMgPSBuZXcgUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgZm9ybURhdGEubGVmdFBsYXllcixcbiAgICAgICk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSBuZXcgUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgZm9ybURhdGEucmlnaHRQbGF5ZXIsXG4gICAgICApO1xuICAgICAgYXBwZW5kUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgZ2FtZUVsZW1lbnRzLmxlZnRQbGF5ZXIsXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMsXG4gICAgICApO1xuICAgICAgYXBwZW5kUGxheWVyQ29tcG9uZW50cyhcbiAgICAgICAgZ2FtZUVsZW1lbnRzLnJpZ2h0UGxheWVyLFxuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMsXG4gICAgICApO1xuICAgICAgc2hvd0VsZW1lbnQoZ2FtZVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuc3RhcnRpbmc7XG4gICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDIpIHtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLnNoaXBQbGFjZW1lbnQ7XG4gICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDMpIHtcbiAgICAgIGNvbnN0IGxlZnRTaGlwUGxhY2VkID0gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5pc1NoaXBQbGFjZWQoKTtcbiAgICAgIGNvbnN0IHJpZ2h0U2hpcFBsYWNlZCA9IGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5pc1NoaXBQbGFjZWQoKTtcblxuICAgICAgaWYgKGxlZnRTaGlwUGxhY2VkICYmIHJpZ2h0U2hpcFBsYWNlZCkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRpc2FibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaGlkZVBsYWNlZFNoaXBzKCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLnBsYXlpbmc7XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKGxlZnRTaGlwUGxhY2VkIHx8IHJpZ2h0U2hpcFBsYWNlZCkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRpc2FibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaGlkZVBsYWNlZFNoaXBzKCk7XG5cbiAgICAgICAgc3dpdGNoQWN0aXZlUGxheWVyKGdhbWVQcm9wZXJ0aWVzKTtcblxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgICBpZiAoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kYXRhLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVuYWJsZUNvbXB1dGVyUGxhY2VtZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5mYWRlUGxheWVyKCk7XG4gICAgICAgIGlmIChnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlcikge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDQpIHtcbiAgICAgIGlmIChnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kYXRhLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkudHVybihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSA1KSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5tYXJrV2lubmVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLndpbihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLmZvcm1Qcm9jZXNzaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKiBJTklUSUFMSVpBVElOICovXG5cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgY29uc3Qgc2tpcEZvcm1QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZywgZm9ybURhdGFBcmcpIHtcbiAgICAvLyBjb25zdCBsZWZ0UGxheWVyRGF0YSA9IHt9XG4gICAgZm9ybURhdGFBcmcubGVmdFBsYXllciA9IHtcbiAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgIHNpemU6ICc4JyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGZvcm1EYXRhQXJnLnJpZ2h0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ1NhcmFoJyxcbiAgICAgIHNpemU6ICcxMicsXG4gICAgICBjb21wdXRlcjogZmFsc2UsXG4gICAgfTtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2tpcFRvV2luUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy53aW47XG4gIH07XG4gIC8vIHNraXBGb3JtUGhhc2UoZ2FtZVByb3BlcnRpZXMsIGZvcm1EYXRhKTtcbiAgLy8gcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gc2tpcFRvV2luUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lV2luZG93LmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVsb29wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSA9ICdDb21wdXRlcicsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gICAgY2hlY2tGb3JMb3NzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSwgbmFtZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgbmFtZTogbmFtZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIsICdkZXN0cm95ZXInKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMsICdzdWJtYXJpbmUnKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzLCAnY3J1aXNlcicpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQsICdiYXR0bGVzaGlwJyksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSwgJ2NhcnJpZXInKSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbi8vIGltcG9ydCB7IGdhbWUsIGZvcm0gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJQbGF5ZXIiLCJQbGF5ZXJDb21wb25lbnRzIiwib2JqIiwic2hpcE9yaWVudGF0aW9uIiwiY3JlYXRlUGxheWVyRGF0YSIsImNvbXB1dGVyIiwibmFtZSIsInNpemUiLCJjcmVhdGVHYW1lRWxlbWVudHMiLCJwbGF5ZXJEYXRhIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYW1lYm9hcmQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiT2JqZWN0Iiwia2V5cyIsInNxdWFyZXMiLCJrZXkiLCJzcXVhcmVFbCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwcyIsInNoaXBFbCIsInR5cGUiLCJjcmVhdGVSb3RhdGlvbkJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDb250YWluZXIiLCJzaGlwQ29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiZWxlbWVudHMiLCJtYXJrV2lubmVyIiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsInJvdGF0aW9uIiwicmVtb3ZlIiwiZW5hYmxlRHJhZ2dhYmxlIiwic2hpcExpc3QiLCJ2YWx1ZXMiLCJzaGlwIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsImFkZEdyaWRFdmVudExpc3RlbmVyIiwic3F1YXJlTGlzdCIsInNxdWFyZSIsInByZXZlbnREZWZhdWx0IiwibW96U291cmNlTm9kZSIsInNxdWFyZVN0ciIsInN0YXR1cyIsImNoZWNrUGxhY2VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbGlkIiwic2VsZWN0ZWRTcXVhcmVzIiwicGxhY2VTaGlwIiwicXVlcnlTZWxlY3RvckFsbCIsImVuYWJsZUNvbXB1dGVyUGxhY2VtZW50IiwiY29tcHV0ZXJQbGFjZVNoaXAiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZW5hYmxlUmVjZWl2aW5nQXR0YWNrIiwic3F1YXJlTm9kZXMiLCJwcm9jZXNzQXR0YWNrIiwiYXR0YWNrUmVzdWx0QXJnIiwic3F1YXJlTm9kZSIsImF0dGFja0NvbnRlbnQiLCJyZWNlaXZlQXR0YWNrIiwiZGlzYWJsZVJlY2VpdmluZ0F0dGFjayIsImVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwicmVzdWx0IiwiZmFkZVBsYXllciIsInVuZmFkZVBsYXllciIsImhpZGVQbGFjZWRTaGlwcyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJlbnRyaWVzIiwidmFsdWUiLCJvY2N1cGllcyIsImlzU2hpcFBsYWNlZCIsImlzT25lU2hpcFBsYWNlZCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsImNvbnRhaW5lciIsImxlZnRQbGF5ZXIiLCJpbnB1dCIsImVycm9yIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJyb3RhdGlvbkJ1dHRvbiIsImNvbnRpbnVlQnV0dG9uIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImdhbWVib2FyZFNpemUiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QbGFjZW1lbnQiLCJyYW5kb21TcXVhcmUiLCJzaGlwT3JpZW50QXJyIiwicmFuZG9tT3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJjaGVja0lmUG9zc2libGVIaXQiLCJuZWlnaGJvdXJBcnIiLCJwb3NzaWJsZUhpdCIsInJhbmRvbVNxIiwiZm9ybVdpbmRvdyIsImdhbWVXaW5kb3ciLCJtZXNzYWdlV2luZG93IiwiR2FtZWxvb3AiLCJmb3JtRGF0YSIsInByb2Nlc3NGb3JtIiwic2hvd0VsZW1lbnQiLCJ0b2dnbGVQbGF5ZXJJbnB1dCIsInBsYXllciIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImxlZnRQbGF5ZXJWYWxpZCIsInZhbGlkaXR5IiwicmlnaHRQbGF5ZXJWYWxpZCIsImhpZGVFbGVtZW50IiwiZ2V0Rm9ybUlucHV0IiwiZ2FtZVByb3BlcnRpZXMiLCJwaGFzZSIsInBoYXNlcyIsImNvbXBvbmVudENyZWF0aW9uIiwicHJvY2Vzc1BoYXNlIiwicmVzZXQiLCJkaXNwbGF5RXJyb3IiLCJzaG93RXJyb3IiLCJlcnJvckNvbnRhaW5lciIsIm1zZyIsInBsYXllckFyZyIsInZhbHVlTWlzc2luZyIsInNldEJhc2VVbml0U2l6ZSIsInNxdWFyZUhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiY2hhbmdlTWVzc2FnZSIsIm1lc3NhZ2VDb250YWluZXIiLCJ3aW4iLCJ0dXJuIiwicmVtb3ZlUGxheWVyQ29tcG9uZW50cyIsInBsYXllckNvbXBvbmVudHMiLCJhcHBlbmRQbGF5ZXJDb21wb25lbnRzIiwic3dpdGNoQWN0aXZlUGxheWVyIiwiZ2FtZVByb3BlcnRpZXNBcmciLCJ0ZW1wIiwiYWN0aXZlQ29tcG9uZW50cyIsImluYWN0aXZlQ29tcG9uZW50cyIsImdhbWVFbGVtZW50cyIsInN0YXJ0aW5nIiwic2hpcFBsYWNlbWVudCIsImxlZnRTaGlwUGxhY2VkIiwicmlnaHRTaGlwUGxhY2VkIiwicGxheWluZyIsImlzQ29tcHV0ZXIiLCJjaGVja0Zvckxvc3MiLCJmb3JtUHJvY2Vzc2luZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwic2tpcEZvcm1QaGFzZSIsImZvcm1EYXRhQXJnIiwic2tpcFRvV2luUGhhc2UiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwiU2hpcCIsIm9yaWVudCIsImhpdHMiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9