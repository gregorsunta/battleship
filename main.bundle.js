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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform .players.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 3rem;\n}\nform section.player {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3rem;\n}\nform section > .option.computer {\n  display: flex;\n}\nform button {\n  width: 30%;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game > .player {\n  display: flex;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container > .ships {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container > .ships .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container > .ships .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container > .ships .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container > .ships .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container > .ships .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container > .ships .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #ad5d57;\n}\n\n.miss {\n  background-color: #5795ad;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  .players.container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    gap: $common-size;\n  }\n  section.player {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: $common-size;\n  }\n  section > .option.computer {\n    display: flex;\n  }\n  button {\n    width: 30%;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  > .player {\n    display: flex;\n  }\n  .gameboard.container {\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container > .ships {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #ad5d57;\n}\n.miss {\n  background-color: #5795ad;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
  var formData = {};
  var processForm = function processForm() {
    showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
    var leftPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.leftPlayer;
    var rightPlayer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.rightPlayer;
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
    _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.button.addEventListener('click', function (e) {
      e.preventDefault();
      var leftPlayerValid = leftPlayer.name.input.validity.valid;
      var rightPlayerValid = rightPlayer.name.input.validity.valid;

      // hideElement(rightPlayer.name.error);
      // hideElement(leftPlayer.name.error);

      if (leftPlayerValid && rightPlayerValid) {
        hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container.reset();
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

  var createGameComponents = function createGameComponents(obj) {
    var gameContainer = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game.container;
    // const playerContainer = game.container.querySelector('.container.player');
    var createPlayerData = function createPlayerData(obj) {
      if (obj.computer) {
        return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.name, true, obj.size);
      } else {
        return new _src_components_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](obj.name, false, obj.size);
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
        ships.classList.add('ships', 'container', 'hide');
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
    console.log(data);
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
  var isShipPlaced = function isShipPlaced(playerComponents) {
    return playerComponents === null || playerComponents === void 0 ? void 0 : playerComponents.data.gameboard.isOneShipPlaced();
  };
  var processPhase = function processPhase(gamePropertiesArg) {
    var gameData = gamePropertiesArg;
    var gameElements = _src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.game;
    if (gameData.phase === 0) {
      showElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_0__.form.container);
      processForm();
    } else if (gameData.phase === 1) {
      console.log(formData);
      gameProperties.activeComponents = createGameComponents(formData.leftPlayer);
      gameProperties.inactiveComponents = createGameComponents(formData.rightPlayer);
      gameElements.leftPlayer.container.append(gameProperties.activeComponents.elements.gridContainer, gameProperties.activeComponents.elements.shipContainer);
      gameElements.rightPlayer.container.append(gameProperties.inactiveComponents.elements.gridContainer, gameProperties.inactiveComponents.elements.shipContainer);
      showElement(gamePropertiesArg.activeComponents.elements.gridContainer);
      showElement(gamePropertiesArg.inactiveComponents.elements.gridContainer);
    } else if (gameData.phase === 2) {
      enableShipPlacement(gameData.activeComponents);
      gameData.phase = phases.shipPlacement;
      processPhase(gameData);
    } else if (gameData.phase === 3) {
      if (isShipPlaced(gameData.activeComponents) && isShipPlaced(gameData.inactiveComponents)) {
        disableShipPlacement(gameData.activeComponents);
        gameData.phase = phases.playing;
        processPhase(gameData);
      } else if (isShipPlaced(gameData.activeComponents) || isShipPlaced(gameData.inactiveComponents)) {
        var temp = gameData.activeComponents;
        gameData.activeComponents = gameData.inactiveComponents;
        gameData.inactiveComponents = temp;
        disableShipPlacement(gameData.inactiveComponents);
        enableShipPlacement(gameData.activeComponents);
      }
    } else if (gameData.phase === 4) {
      var _temp = gameData.activeComponents;
      gameData.activeComponents = gameData.inactiveComponents;
      gameData.inactiveComponents = _temp;
      fadePLayer(gameData.activeComponents);
      unfadePlayer(gameData.inactiveComponents);
      enableAttackOn(gameData.inactiveComponents, gameData.activeComponents);
      changeMessage().turn(gameData.activeComponents);
      if (enableAttackOn.status) {}
    } else if (gameData.phase === 5) {
      unfadePlayer(gameData.activeComponents);
      markWinner(gameData.activeComponents);
      changeMessage().win(gameData.activeComponents);
      gameData.phase = phases.formProcessing;
    }
  };

  // initialization

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
  // const left = game.leftPlayer;
  // const right = game.rightPlayer;
  // const playerComponentsLeft = createGameComponents(customLeftObj);
  // const playerComponentsRight = createGameComponents(customRightObj);
  // left.gameboard.append(playerComponentsLeft.elements.gridContainer);
  // left.ships.append(playerComponentsLeft.elements.shipContainer);
  // right.gameboard.append(playerComponentsRight.elements.gridContainer);
  // right.ships.append(playerComponentsRight.elements.shipContainer);
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
  processPhase(gameProperties);
  // processForm();
  // hideElement(form.container);

  // enableShipPlacement(gameProperties.activeComponents);
  // changeOrientation(orientationButton, gameProperties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksT0FBTyxXQUFXLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxhQUFhLFFBQVEsWUFBWSxLQUFLLGFBQWEsYUFBYSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFB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SUFBSUgsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QkksU0FBUyxFQUFFLElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEJLLE9BQU8sRUFBRSxJQUFJTCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BCTSxVQUFVLEVBQUUsSUFBSU4sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2Qk8sT0FBTyxFQUFFLElBQUlQLElBQUksQ0FBQyxDQUFDO0VBQ3JCLENBQUM7QUFDSCxDQUFDO0FBQ0QsaUVBQWUvSyxLQUFLOzs7Ozs7VUMzQnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNBO0FBQ2xDO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3M/MDkyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQlVOVFUgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gLnBsYXllcnMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSA+IC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgLnNxdWFyZSB7XFxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiNGI0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyID4gLnNoaXBzIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgPiAuc2hpcHMgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuXFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuXFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkNWQ1NztcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OTVhZDtcXG59XFxuXFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9mb250cy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvcmVzZXQtc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBRUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FDM0JBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBRDRCRjs7QUMxQkEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FENkJGOztBQzNCQTtFQUNFLGNBQUE7QUQ4QkY7O0FDNUJBOztFQUVFLGdCQUFBO0FEK0JGOztBQzdCQTs7RUFFRSxZQUFBO0FEZ0NGOztBQzlCQTs7OztFQUlFLFdBQUE7RUFDQSxhQUFBO0FEaUNGOztBQy9CQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7O0FDL0JBLGtCQUFBO0FEL0hBO0VBQ0Usc0JBQUE7QUFrS0Y7O0FBL0pBLFdBQUE7QUFZQSxVQUFBO0FBS0EsV0FBQTtBQWtCQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBckNXO0FBc0tiOztBQS9IQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBa0lGOztBQWhJQSxXQUFBO0FBQ0E7RUFDRSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFwQmM7RUFxQmQseUJBaERnQjtBQW1MbEI7QUFsSUU7RUFDRSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFwRGM7QUF1TGxCOztBQS9IQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBa0lGOztBQWhJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQTNDYztFQTRDZCxhQTlDYztFQStDZCxxQkFsRG9CO0VBbURwQixnQ0FBQTtBQW1JRjtBQWpJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0E3RFU7QUFnTWQ7QUFqSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBbkVVO0FBc01kO0FBaklFO0VBQ0UsYUFBQTtBQW1JSjtBQWpJRTtFQUNFLFVBQUE7QUFtSUo7O0FBaElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQWhGWTtBQW1OZDtBQWxJRTtFQUNFLGFBQUE7QUFvSUo7QUFsSUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFvSUo7QUFuSUk7RUFDRSxhQUFBO0FBcUlOO0FBbklJO0VBQ0UsdUNBQUE7QUFxSU47QUFsSUU7RUFNRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBK0hKO0FBOUhJO0VBQ0UseUJBdkhDO0FBdVBQO0FBOUhJO0VBQ0UseUJBL0hZO0VBZ0laLHlCQUFBO0VBQ0Esa0JBYmM7RUFjZCxpQkFBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBCVTtFQXFCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXhCVTtFQXlCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQTVCVTtFQTZCViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQWhDVTtFQWlDViw4Q0FBQTtBQWdJTjtBQTlISTtFQUNFLHlDQXBDVTtFQXFDViw4Q0FBQTtBQWdJTjs7QUE1SEEsV0FBQTtBQUNBO0VBQ0UsOENBQUE7RUFDQSxlQWxJZ0I7RUFtSWhCLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQWpLZ0I7QUFnU2xCOztBQTVIQSxvQkFBQTtBQUVBO0VBQ0UscUJBakpvQjtFQWtKcEIseUJBQUE7RUFDQSxlQTdJZ0I7QUEyUWxCOztBQTVIQTtFQUNFLFlBQUE7QUErSEY7O0FBN0hBO0VBQ0Usd0JBQUE7QUFnSUY7O0FBOUhBO0VBQ0UseUJBQUE7QUFpSUY7O0FBL0hBO0VBQ0UseUJBQUE7QUFrSUY7O0FBaElBO0VBQ0UseUJBQUE7QUFtSUY7O0FBaklBO0VBQ0UsWUFBQTtBQW9JRjs7QUFsSUE7RUFDRSx5QkFBQTtBQXFJRjs7QUFuSUE7RUFDRSx5QkFBQTtBQXNJRjs7QUFwSUE7RUFDRSx5QkFBQTtBQXVJRjs7QUFySUE7RUFDRSx5QkFBQTtBQXdJRjs7QUF0SUE7RUFDRSxvQ0FBQTtBQXlJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQlVOVFUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUJvbGQudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1MaWdodEl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUl0YWxpYy50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsXCJAdXNlICcuL2ZvbnRzLmNzcyc7XFxuQHVzZSAnLi9yZXNldC1zdHlsZXMuY3NzJztcXG5cXG46cm9vdCB7XFxuICAtLWJhc2UtdW5pdC1zaXplOiAxNXB4O1xcbn1cXG5cXG4vKiBjb2xvcnMgKi9cXG4kaGlnaGxpZ2h0OiAjZmZjY2NjO1xcblxcbiRtYWluLWNvbG9yOiAjMmMzYTQ3O1xcbiRzZWNvbmRhcnktY29sb3I6ICNlMWY5ZjQ7XFxuJGhpZ2hsaWdodC1jb2xvcjogI2ZmY2NjYztcXG4kbGFyZ2UtZm9udC1zaXplOiAxLjRyZW07XFxuJGZvbnQtc2l6ZTogMXJlbTtcXG4kc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxuJGZhZGUtY29sb3I6ICNlNmU2ZTY7XFxuJGdyYXk6ICM0YjRiNGI7XFxuXFxuLyogaWNvbnMgKi9cXG4kaWNvbi1zaXplOiAxLjJyZW07XFxuJHNtYWxsLWljb24tc2l6ZTogMXJlbTtcXG4kc21hbGxlci1pY29uLXNpemU6IDAuOHJlbTtcXG5cXG4vKiBsYXlvdXQgKi9cXG4vLyBzaXplXFxuJGV4dHJhLXNtYWxsLXNpemU6IDAuOHJlbTtcXG4kc21hbGxlci1zaXplOiAxcmVtO1xcbiRzbWFsbC1zaXplOiAycmVtO1xcbiRjb21tb24tc2l6ZTogM3JlbTtcXG4kbGFyZ2Utc2l6ZTogNHJlbTtcXG4vLyByYWRpdXNcXG4kY29tbW9uLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuJHNtYWxsLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4kc21hbGxlci1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbi8vIHBhZGRpbmdcXG4kbGFyZ2UtcGFkZGluZzogNHJlbTtcXG4kY29tbW9uLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsZXItcGFkZGluZzogMC41cmVtO1xcbiRleHRyYS1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6ICRzbWFsbC1wYWRkaW5nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICBmb250LXNpemU6ICRsYXJnZS1mb250LXNpemU7XFxuICB9XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRzbWFsbC1wYWRkaW5nO1xcbiAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkZmFkZS1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgfVxcbiAgc2VjdGlvbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIH1cXG4gIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICA+IC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5zcXVhcmUge1xcbiAgICAgIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG4gICAgfVxcbiAgfVxcbiAgLnNoaXBzLmNvbnRhaW5lciA+IC5zaGlwcyB7XFxuICAgICRib3JkZXItd2lkdGg6IDJweDtcXG4gICAgJGJhc2Utc2l6ZTogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAkYm9yZGVyLXdpZHRoKTtcXG4gICAgJHNoaXAtY29sb3I6ICRoaWdobGlnaHQtY29sb3I7XFxuICAgICRib3JkZXItY29sb3I6ICRncmF5O1xcbiAgICAkYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxuICAgIC5zaGlwOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xcbiAgICB9XFxuICAgIC5zaGlwIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2hpcC1jb2xvcjtcXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcbiAgICAuZGVzdHJveWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDIpO1xcbiAgICB9XFxuICAgIC5zdWJtYXJpbmUge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmNydWlzZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMyk7XFxuICAgIH1cXG4gICAgLmJhdHRsZXNoaXAge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNCk7XFxuICAgIH1cXG4gICAgLmNhcnJpZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZmFkZS1jb2xvcjtcXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxufVxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDVkNTc7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Nzk1YWQ7XFxufVxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cXG5cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFJFU0VUIEJVVFRPTlMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UsIG9yaWVudGF0aW9uQnV0dG9uIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5sZWZ0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJpZ2h0UGxheWVyOiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLnJpZ2h0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lID4gaW5wdXQnKSxcbiAgICAgICAgbWVzc2FnZTogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5tZXNzYWdlJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLmNvbXB1dGVyID4gaW5wdXQnKSxcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IG91dHB1dCcpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IGdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgICBidXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBtZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufSkoKTtcbmNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm9yaWVudGF0aW9uJyk7XG4gIHJldHVybiBidXR0b247XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNoaXBzIGZyb20gJy4vc2hpcC5qcyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3F1YXJlcyA9IHt9O1xuICBjb25zdCBzaGlwcyA9IG5ldyBTaGlwcygpO1xuICBsZXQgaXNPbmVTaGlwUGxhY2VkID0gZmFsc2U7XG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcERhdGEsIHNoaXBPcmllbnQgPSAndicpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGlmIChzaGlwRGF0YS5wbGFjZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzOiBudWxsLFxuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICdoJykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnYmFuYW5hJztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3F1YXJlLm9jY3VwaWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlLm9jY3VwaWVzO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGZvcm0sIGdhbWUsIG1lc3NhZ2UsIG9yaWVudGF0aW9uQnV0dG9uIH0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybS5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybS5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm0uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICAvLyBoaWRlRWxlbWVudChyaWdodFBsYXllci5uYW1lLmVycm9yKTtcbiAgICAgIC8vIGhpZGVFbGVtZW50KGxlZnRQbGF5ZXIubmFtZS5lcnJvcik7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtLmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm0uY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5pbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBsYXllci5lcnJvciwgJ0EgbmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGFkZEZvcm1FdmVudExpc3RlbmVycygpO1xuICB9O1xuICBjb25zdCBjcmVhdGVHYW1lQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXI7XG4gICAgLy8gY29uc3QgcGxheWVyQ29udGFpbmVyID0gZ2FtZS5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci5wbGF5ZXInKTtcbiAgICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5jb21wdXRlcikge1xuICAgICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgdHJ1ZSwgb2JqLnNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIob2JqLm5hbWUsIGZhbHNlLCBvYmouc2l6ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVHYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXIuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3BsYXllci5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyLmdhbWVib2FyZC5zcXVhcmVzKSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5pZCA9IFtgJHtrZXl9YF07XG4gICAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXIubmFtZX1gXTtcbiAgICAgICAgICBncmlkLmFwcGVuZChzcXVhcmVFbCk7XG4gICAgICAgICAgZ3JpZC5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgICAgZ3JpZC5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnY29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzaGlwRWwuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2tleX1gKTtcbiAgICAgICAgICBzaGlwRWwuZGF0YXNldC50eXBlID0gYCR7a2V5fWA7XG4gICAgICAgICAgc2hpcEVsLmRhdGFzZXQub3duZXIgPSBgJHtwbGF5ZXIubmFtZX1gO1xuICAgICAgICAgIHNoaXBzLmFwcGVuZChzaGlwRWwpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJywgJ2NvbnRhaW5lcicsICdoaWRlJyk7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgIH07XG4gICAgICByZXR1cm4geyBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCkgfTtcbiAgICB9O1xuICAgIGNvbnN0IHNldEJhc2VVbml0U2l6ZSA9ICgpID0+IHtcbiAgICAgIC8vIG1ha2Ugc2hpcCB3aWR0aCB0aGUgc2FtZSBhcyBzcXVhcmUgd2lkdGhcbiAgICAgIGNvbnN0IHNxdWFyZUhlaWdodCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiMCwwXCJdYCkub2Zmc2V0SGVpZ2h0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1iYXNlLXVuaXQtc2l6ZScsXG4gICAgICAgIGAke3NxdWFyZUhlaWdodH1weGAsXG4gICAgICApO1xuICAgIH07XG4gICAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gY3JlYXRlR2FtZUVsZW1lbnRzKGRhdGEpO1xuXG4gICAgc2hvd0VsZW1lbnQoZ2FtZUNvbnRhaW5lcik7XG4gICAgLy8gc2V0QmFzZVVuaXRTaXplKCk7XG4gICAgcmV0dXJuIHsgZGF0YSwgZWxlbWVudHMgfTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSBmdW5jdGlvbiAoYnV0dG9uLCBnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzQXJnLnBsYWNlbWVudE9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgICAgICBnYW1lUHJvcGVydGllc0FyZy5wbGFjZW1lbnRPcmllbnRhdGlvbiA9ICdoJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzQXJnLnBsYWNlbWVudE9yaWVudGF0aW9uID0gJ3YnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBlbmFibGVTaGlwUGxhY2VtZW50ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIGNvbnN0IGRhdGEgPSBwbGF5ZXIuZGF0YTtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBsYXllci5lbGVtZW50cztcbiAgICBwbGF5ZXIuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgY29uc3QgZW5hYmxlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKHNoaXBMaXN0KSB7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcExpc3QpKSB7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFkZFNoaXBFdmVudExpc3RlbmVyID0gKHNoaXBMaXN0KSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IHNoaXBMaXN0O1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBzKSkge1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgYCR7ZS50YXJnZXR9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXIgPSAoc3F1YXJlTGlzdCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IHNxdWFyZUxpc3Q7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2YgT2JqZWN0LnZhbHVlcyhncmlkKSkge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHNlbGVjdGVkU3F1YXJlcykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZScpO1xuICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGUsXG4gICAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICBhZGRHcmlkRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH07XG4gIGNvbnN0IGRpc2FibGVTaGlwUGxhY2VtZW50ID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyBoaWRlIHNoaXBzXG4gICAgLy8gcmVtb3ZlZXZlbnRsaXN0ZW5lciBmcm9tIGFsbCBzcXVhcmVzXG4gICAgY29uc3Qgc3F1YXJlcyA9IHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbWFya1dpbm5lciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICBwbGF5ZXIuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlQXR0YWNrT24gPSBmdW5jdGlvbiAocGxheWVyQXJnLCBwaGFzZUFyZyA9IGdhbWVQcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgc3F1YXJlTm9kZXMgPSBwbGF5ZXJBcmcuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IHByb2Nlc3NBdHRhY2sgPSBmdW5jdGlvbiAoYXR0YWNrUmVzdWx0QXJnLCBzcXVhcmVOb2RlKSB7XG4gICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHRBcmcpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgaWYgKHBsYXllckFyZy5kYXRhLmNoZWNrRm9yTG9zcygpKSB7XG4gICAgICAgICAgLy8gc2hvd0VsZW1lbnQobWVzc2FnZS5jb250YWluZXIpO1xuICAgICAgICAgIGRpc2FibGVBdHRhY2tPbihwbGF5ZXJBcmcpO1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLndpbjtcbiAgICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICBzcXVhcmVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhdHRhY2tDb250ZW50ID0gcGxheWVyQXJnLmRhdGEuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICApO1xuICAgICAgICBwcm9jZXNzQXR0YWNrKGF0dGFja0NvbnRlbnQsIHNxdWFyZU5vZGUpO1xuICAgICAgICBkaXNhYmxlQXR0YWNrT24ocGxheWVyQXJnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGlzYWJsZUF0dGFja09uID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gcGxheWVyLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmVOb2RlO1xuICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBmYWRlUExheWVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgfTtcbiAgY29uc3QgdW5mYWRlUGxheWVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgfTtcbiAgY29uc3QgaGlkZVBsYWNlZFNoaXBzID0gZnVuY3Rpb24gKHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBzaGlwU3F1YXJlcyA9XG4gICAgICBwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgIGZvciAobGV0IHNxdWFyZSBpbiBzaGlwU3F1YXJlcykge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2hvd1BsYWNlZFNoaXBzID0gZnVuY3Rpb24gKHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBzcXVhcmVzRGF0YSA9IHBsYXllckNvbXBvbmVudHMuZGF0YS5nYW1lYm9hcmQuc3F1YXJlcztcbiAgICBjb25zdCBzcXVhcmVzRWxlbWVudHMgPSBwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXJzLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXNEYXRhKSB7XG4gICAgICBpZiAoc3F1YXJlLm9jY3VwaWVzKSB7XG4gICAgICAgIHNxdWFyZXNFbGVtZW50cy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7c3F1YXJlfVwiXWApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlLmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgaXNTaGlwUGxhY2VkID0gZnVuY3Rpb24gKHBsYXllckNvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gcGxheWVyQ29tcG9uZW50cz8uZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NQaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZykge1xuICAgIGNvbnN0IGdhbWVEYXRhID0gZ2FtZVByb3BlcnRpZXNBcmc7XG4gICAgY29uc3QgZ2FtZUVsZW1lbnRzID0gZ2FtZTtcbiAgICBpZiAoZ2FtZURhdGEucGhhc2UgPT09IDApIHtcbiAgICAgIHNob3dFbGVtZW50KGZvcm0uY29udGFpbmVyKTtcbiAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgfSBlbHNlIGlmIChnYW1lRGF0YS5waGFzZSA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IGNyZWF0ZUdhbWVDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cyA9IGNyZWF0ZUdhbWVDb21wb25lbnRzKFxuICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllcixcbiAgICAgICk7XG4gICAgICBnYW1lRWxlbWVudHMubGVmdFBsYXllci5jb250YWluZXIuYXBwZW5kKFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIsXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBnYW1lRWxlbWVudHMucmlnaHRQbGF5ZXIuY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIsXG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLFxuICAgICAgKTtcbiAgICAgIHNob3dFbGVtZW50KGdhbWVQcm9wZXJ0aWVzQXJnLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gICAgICBzaG93RWxlbWVudChnYW1lUHJvcGVydGllc0FyZy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gICAgfSBlbHNlIGlmIChnYW1lRGF0YS5waGFzZSA9PT0gMikge1xuICAgICAgZW5hYmxlU2hpcFBsYWNlbWVudChnYW1lRGF0YS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGdhbWVEYXRhLnBoYXNlID0gcGhhc2VzLnNoaXBQbGFjZW1lbnQ7XG4gICAgICBwcm9jZXNzUGhhc2UoZ2FtZURhdGEpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZURhdGEucGhhc2UgPT09IDMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNTaGlwUGxhY2VkKGdhbWVEYXRhLmFjdGl2ZUNvbXBvbmVudHMpICYmXG4gICAgICAgIGlzU2hpcFBsYWNlZChnYW1lRGF0YS5pbmFjdGl2ZUNvbXBvbmVudHMpXG4gICAgICApIHtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICAgIGdhbWVEYXRhLnBoYXNlID0gcGhhc2VzLnBsYXlpbmc7XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lRGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc1NoaXBQbGFjZWQoZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cykgfHxcbiAgICAgICAgaXNTaGlwUGxhY2VkKGdhbWVEYXRhLmluYWN0aXZlQ29tcG9uZW50cylcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0ZW1wID0gZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cztcbiAgICAgICAgZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cyA9IGdhbWVEYXRhLmluYWN0aXZlQ29tcG9uZW50cztcbiAgICAgICAgZ2FtZURhdGEuaW5hY3RpdmVDb21wb25lbnRzID0gdGVtcDtcbiAgICAgICAgZGlzYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZURhdGEuaW5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgICAgZW5hYmxlU2hpcFBsYWNlbWVudChnYW1lRGF0YS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdhbWVEYXRhLnBoYXNlID09PSA0KSB7XG4gICAgICBjb25zdCB0ZW1wID0gZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cztcbiAgICAgIGdhbWVEYXRhLmFjdGl2ZUNvbXBvbmVudHMgPSBnYW1lRGF0YS5pbmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgICBnYW1lRGF0YS5pbmFjdGl2ZUNvbXBvbmVudHMgPSB0ZW1wO1xuICAgICAgZmFkZVBMYXllcihnYW1lRGF0YS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIHVuZmFkZVBsYXllcihnYW1lRGF0YS5pbmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZW5hYmxlQXR0YWNrT24oZ2FtZURhdGEuaW5hY3RpdmVDb21wb25lbnRzLCBnYW1lRGF0YS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGNoYW5nZU1lc3NhZ2UoKS50dXJuKGdhbWVEYXRhLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgaWYgKGVuYWJsZUF0dGFja09uLnN0YXR1cykge1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZURhdGEucGhhc2UgPT09IDUpIHtcbiAgICAgIHVuZmFkZVBsYXllcihnYW1lRGF0YS5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIG1hcmtXaW5uZXIoZ2FtZURhdGEuYWN0aXZlQ29tcG9uZW50cyk7XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkud2luKGdhbWVEYXRhLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgZ2FtZURhdGEucGhhc2UgPSBwaGFzZXMuZm9ybVByb2Nlc3Npbmc7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXRpYWxpemF0aW9uXG5cbiAgY29uc3QgY3VzdG9tTGVmdE9iaiA9IHtcbiAgICBuYW1lOiAnR3JlZ29yJyxcbiAgICBjb21wdXRlck9wdGlvbjogZmFsc2UsXG4gICAgZ2FtZWJvYXJkU2l6ZTogJzEzJyxcbiAgfTtcbiAgY29uc3QgY3VzdG9tUmlnaHRPYmogPSB7XG4gICAgbmFtZTogJ0NvbXB1dGVyJyxcbiAgICBjb21wdXRlck9wdGlvbjogdHJ1ZSxcbiAgICBnYW1lYm9hcmRTaXplOiAnNycsXG4gIH07XG4gIC8vIGNvbnN0IGxlZnQgPSBnYW1lLmxlZnRQbGF5ZXI7XG4gIC8vIGNvbnN0IHJpZ2h0ID0gZ2FtZS5yaWdodFBsYXllcjtcbiAgLy8gY29uc3QgcGxheWVyQ29tcG9uZW50c0xlZnQgPSBjcmVhdGVHYW1lQ29tcG9uZW50cyhjdXN0b21MZWZ0T2JqKTtcbiAgLy8gY29uc3QgcGxheWVyQ29tcG9uZW50c1JpZ2h0ID0gY3JlYXRlR2FtZUNvbXBvbmVudHMoY3VzdG9tUmlnaHRPYmopO1xuICAvLyBsZWZ0LmdhbWVib2FyZC5hcHBlbmQocGxheWVyQ29tcG9uZW50c0xlZnQuZWxlbWVudHMuZ3JpZENvbnRhaW5lcik7XG4gIC8vIGxlZnQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNMZWZ0LmVsZW1lbnRzLnNoaXBDb250YWluZXIpO1xuICAvLyByaWdodC5nYW1lYm9hcmQuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5ncmlkQ29udGFpbmVyKTtcbiAgLy8gcmlnaHQuc2hpcHMuYXBwZW5kKHBsYXllckNvbXBvbmVudHNSaWdodC5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gcHJvY2Vzc0Zvcm0oKTtcbiAgLy8gaGlkZUVsZW1lbnQoZm9ybS5jb250YWluZXIpO1xuXG4gIC8vIGVuYWJsZVNoaXBQbGFjZW1lbnQoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyk7XG4gIC8vIGNoYW5nZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uQnV0dG9uLCBnYW1lUHJvcGVydGllcyk7XG4gIGdhbWUuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVHYW1lQ29tcG9uZW50cyxcbiAgICBwcm9jZXNzRm9ybSxcbiAgICBlbmFibGVTaGlwUGxhY2VtZW50LFxuICAgIGhpZGVFbGVtZW50LFxuICAgIHNob3dFbGVtZW50LFxuICAgIC8vIGVuYWJsZUF0dGFjayxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVsb29wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSA9ICdDb21wdXRlcicsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gICAgY2hlY2tGb3JMb3NzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgLy8gc3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBvcmllbnQ6ICd2JyxcbiAgICBoaXRzOiAwLFxuICAgIHBsYWNlZDogZmFsc2UsXG4gICAgaGl0KCkge1xuICAgICAgcmV0dXJuICsrdGhpcy5oaXRzO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gIH07XG59O1xuY29uc3QgU2hpcHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgZGVzdHJveWVyOiBuZXcgU2hpcCgyKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMpLFxuICAgIGNydWlzZXI6IG5ldyBTaGlwKDMpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQpLFxuICAgIGNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXBzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbi8vIGltcG9ydCBHYW1lbG9vcCBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMnO1xuLy8gaW1wb3J0IHsgZ2FtZSwgZm9ybSB9IGZyb20gJy9zcmMvY29tcG9uZW50cy9kb20uanMnO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsIm9yaWVudGF0aW9uQnV0dG9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwibGVmdFBsYXllciIsIm5hbWUiLCJpbnB1dCIsImVycm9yIiwiY29tcHV0ZXIiLCJzaXplIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJnYW1lYm9hcmQiLCJzaGlwcyIsIlNoaXBzIiwiR2FtZWJvYXJkIiwic3F1YXJlcyIsImlzT25lU2hpcFBsYWNlZCIsImNoZWNrUGxhY2VtZW50Iiwic3F1YXJlU3RyIiwic2hpcERhdGEiLCJzaGlwT3JpZW50Iiwic3F1YXJlSWQiLCJzcGxpdCIsImVsIiwiTnVtYmVyIiwicGxhY2VkIiwiZWxlbWVudHMiLCJ2YWxpZCIsIm5laWdoYm91clN0ciIsIm9jY3VwaWVzIiwicGxhY2VTaGlwVmVydGljYWxseSIsInNoaXAiLCJzZWxlY3RlZFNxdWFyZXMiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInBsYWNlU2hpcCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiT2JqZWN0Iiwia2V5cyIsImlzU3VuayIsInJlY2VpdmVBdHRhY2siLCJzcXVhcmVJZFN0ciIsInNxdWFyZSIsImhpdCIsImNvbnNvbGUiLCJsb2ciLCJQbGF5ZXIiLCJHYW1lbG9vcCIsImZvcm1EYXRhIiwicHJvY2Vzc0Zvcm0iLCJzaG93RWxlbWVudCIsInRvZ2dsZVBsYXllcklucHV0IiwicGxheWVyIiwiY2hlY2tlZCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVkIiwidmFsdWUiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGlzcGxheVNsaWRlclZhbHVlIiwibGVmdFBsYXllclZhbGlkIiwidmFsaWRpdHkiLCJyaWdodFBsYXllclZhbGlkIiwiaGlkZUVsZW1lbnQiLCJnZXRGb3JtSW5wdXQiLCJnYW1lUHJvcGVydGllcyIsInBoYXNlIiwicGhhc2VzIiwiY29tcG9uZW50Q3JlYXRpb24iLCJwcm9jZXNzUGhhc2UiLCJyZXNldCIsImRpc3BsYXlFcnJvciIsInNob3dFcnJvciIsImVycm9yQ29udGFpbmVyIiwibXNnIiwidGV4dENvbnRlbnQiLCJwbGF5ZXJBcmciLCJ2YWx1ZU1pc3NpbmciLCJjcmVhdGVHYW1lQ29tcG9uZW50cyIsIm9iaiIsImdhbWVDb250YWluZXIiLCJjcmVhdGVQbGF5ZXJEYXRhIiwiY3JlYXRlR2FtZUVsZW1lbnRzIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImtleSIsInNxdWFyZUVsIiwiZGF0YXNldCIsIm93bmVyIiwiYXBwZW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJjcmVhdGVTaGlwcyIsInNoaXBFbCIsInR5cGUiLCJncmlkQ29udGFpbmVyIiwic2hpcENvbnRhaW5lciIsInNldEJhc2VVbml0U2l6ZSIsInNxdWFyZUhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiY2hhbmdlT3JpZW50YXRpb24iLCJnYW1lUHJvcGVydGllc0FyZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiYWRkR3JpZEV2ZW50TGlzdGVuZXIiLCJzcXVhcmVMaXN0Iiwib3JpZW50YXRpb24iLCJtb3pTb3VyY2VOb2RlIiwic3RhdHVzIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGVTaGlwUGxhY2VtZW50IiwiY2hpbGROb2RlcyIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJtYXJrV2lubmVyIiwiZW5hYmxlQXR0YWNrT24iLCJwaGFzZUFyZyIsInNxdWFyZU5vZGVzIiwicHJvY2Vzc0F0dGFjayIsImF0dGFja1Jlc3VsdEFyZyIsInNxdWFyZU5vZGUiLCJjaGVja0Zvckxvc3MiLCJkaXNhYmxlQXR0YWNrT24iLCJ3aW4iLCJhdHRhY2tDb250ZW50IiwiZmFkZVBMYXllciIsInVuZmFkZVBsYXllciIsImhpZGVQbGFjZWRTaGlwcyIsInBsYXllckNvbXBvbmVudHMiLCJzaGlwU3F1YXJlcyIsInNob3dQbGFjZWRTaGlwcyIsInNxdWFyZXNEYXRhIiwic3F1YXJlc0VsZW1lbnRzIiwiZ3JpZENvbnRhaW5lcnMiLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZUNvbnRhaW5lciIsInR1cm4iLCJpc1NoaXBQbGFjZWQiLCJnYW1lRGF0YSIsImdhbWVFbGVtZW50cyIsImFjdGl2ZUNvbXBvbmVudHMiLCJpbmFjdGl2ZUNvbXBvbmVudHMiLCJzaGlwUGxhY2VtZW50IiwicGxheWluZyIsInRlbXAiLCJmb3JtUHJvY2Vzc2luZyIsImN1c3RvbUxlZnRPYmoiLCJjb21wdXRlck9wdGlvbiIsImdhbWVib2FyZFNpemUiLCJjdXN0b21SaWdodE9iaiIsInN0YXJ0aW5nIiwiaXNDb21wdXRlciIsImF0dGFjaEdhbWVib2FyZCIsInByZXZpb3VzSGl0IiwiYXR0YWNrIiwiZW5lbXkiLCJtb3ZlIiwiY29tcHV0ZXJBdHRhY2siLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TcXVhcmUiLCJTaGlwIiwib3JpZW50IiwiaGl0cyIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsImNydWlzZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciJdLCJzb3VyY2VSb290IjoiIn0=