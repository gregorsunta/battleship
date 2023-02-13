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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform .players.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 3rem;\n}\nform .players.container .player {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3rem;\n}\nform section > .option.computer {\n  display: flex;\n}\nform button {\n  width: 30%;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game .continue {\n  width: 10vw;\n  height: 3vw;\n}\n.container.game .components {\n  display: flex;\n}\n.container.game .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  font-size: 3rem;\n}\n.container.game .rotation {\n  height: 30vw;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\nbutton {\n  border-radius: 5px;\n  border: solid 1px #2c3a47;\n  background-color: #e1f9f4;\n}\n\nbutton:hover {\n  background-color: rgb(173, 173, 173);\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #f9a19b;\n}\n\n.miss {\n  background-color: #95e0fd;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$extra-large-font-size: 3rem;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n  .players.container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    gap: $common-size;\n    .player {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      gap: $common-size;\n    }\n  }\n  section > .option.computer {\n    display: flex;\n  }\n  button {\n    width: 30%;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  .continue {\n    width: 10vw;\n    height: 3vw;\n  }\n  .components {\n    display: flex;\n  }\n  .player {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: $common-size;\n\n    font-size: $extra-large-font-size;\n  }\n  .rotation {\n    height: 30vw;\n    // width: 3vw;\n  }\n  .gameboard.container {\n    // display: flex;\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\nbutton {\n  border-radius: 5px;\n  border: solid 1px $main-color;\n  background-color: $secondary-color;\n}\nbutton:hover {\n  background-color: rgb(173, 173, 173);\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #f9a19b;\n}\n.miss {\n  background-color: #95e0fd;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
          if (square.isListening) {
            return;
          }
          square.isListening = true;
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
        error: container.querySelector('.left .error')
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
        error: container.querySelector('.right .error')
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
      name: container.querySelector('.left .name'),
      container: container.querySelector('.left.player'),
      gameboard: container.querySelector('.left .gameboard.container'),
      ships: container.querySelector('.left .ships.container'),
      rotationButton: container.querySelector('.left .rotation')
    },
    continueButton: container.querySelector('button.continue'),
    rightPlayer: {
      name: container.querySelector('.right .name'),
      container: container.querySelector('.right.player'),
      gameboard: container.querySelector('.right .gameboard.container'),
      ships: container.querySelector('.right .ships.container'),
      rotationButton: container.querySelector('.right .rotation')
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
            squareStr = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (value.isHit && value.occupies) {
            var square = squareStr.split(',');
            var directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
            var createMove = function createMove(squareString, direction) {
              var squareId = squareString.split(',');
              return [Number(squareId[0]) + Number(direction[0]), Number(squareId[1]) + Number(direction[1])];
            };
            for (var _i4 = 0, _directions = directions; _i4 < _directions.length; _i4++) {
              var _squares$newPossibleT, _squares$newPossibleT2;
              var direction = _directions[_i4];
              var newPossibleTarget = createMove(square.join(','), direction).join(',');
              if (((_squares$newPossibleT = squares[newPossibleTarget]) === null || _squares$newPossibleT === void 0 ? void 0 : _squares$newPossibleT.isHit) === true && (_squares$newPossibleT2 = squares[newPossibleTarget]) !== null && _squares$newPossibleT2 !== void 0 && _squares$newPossibleT2.occupies) {
                newPossibleTarget = createMove(newPossibleTarget, direction).join(',');
                while (squares[newPossibleTarget] && (_squares$newPossibleT3 = squares[newPossibleTarget]) !== null && _squares$newPossibleT3 !== void 0 && _squares$newPossibleT3.occupies) {
                  var _squares$newPossibleT3, _squares$newPossibleT4;
                  if (((_squares$newPossibleT4 = squares[newPossibleTarget]) === null || _squares$newPossibleT4 === void 0 ? void 0 : _squares$newPossibleT4.isHit) === false) {
                    return newPossibleTarget;
                  }
                  newPossibleTarget = createMove(newPossibleTarget, direction).join(',');
                }
              }
            }
            for (var _i5 = 0, _directions2 = directions; _i5 < _directions2.length; _i5++) {
              var _squares$_newPossible;
              var _direction = _directions2[_i5];
              var _newPossibleTarget = createMove(square.join(','), _direction).join(',');
              // console.log(newPossibleTarget);
              if (((_squares$_newPossible = squares[_newPossibleTarget]) === null || _squares$_newPossible === void 0 ? void 0 : _squares$_newPossible.isHit) === false) {
                return _newPossibleTarget;
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
      if (leftPlayerValid && rightPlayerValid) {
        hideElement(_src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container);
        formData.leftPlayer = getFormInput(leftPlayer);
        formData.rightPlayer = getFormInput(rightPlayer);
        gameProperties.phase = phases.componentCreation;
        processPhase(gameProperties);
        _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.form.container.reset();
        togglePlayerInput(leftPlayer);
        togglePlayerInput(rightPlayer);
      } else {
        if (!leftPlayerValid) {
          displayError(leftPlayer);
        }
        if (!rightPlayerValid) {
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
      if (player.name.input.validity.valueMissing) {
        showError(player.name.error, 'A name is required.');
      }
    };
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
    container.rotationButton.append(playerComponents.elements.buttonContainer);
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
      _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.leftPlayer.name.textContent = formData.leftPlayer.name;
      _src_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.game.rightPlayer.name.textContent = formData.rightPlayer.name;
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
      if (!gameProperties.activeComponents.isShipPlaced()) {
        gameProperties.activeComponents.unfadePlayer();
        gameProperties.inactiveComponents.fadePlayer();
        if (gameProperties.activeComponents.data.isComputer) {
          var _gameProperties$activ, _gameProperties$activ2;
          (_gameProperties$activ = gameProperties.activeComponents.elements.shipContainer) === null || _gameProperties$activ === void 0 ? void 0 : _gameProperties$activ.remove();
          (_gameProperties$activ2 = gameProperties.activeComponents.elements.buttonContainer) === null || _gameProperties$activ2 === void 0 ? void 0 : _gameProperties$activ2.remove();
          return gameProperties.activeComponents.enableComputerPlacement();
        }
        return gameProperties.activeComponents.enableShipPlacement();
      } else if (!gameProperties.inactiveComponents.isShipPlaced()) {
        if (!gameProperties.inactiveComponents.data.isComputer) {
          gameProperties.activeComponents.hidePlacedShips();
        }
        switchActivePlayer(gameProperties);
        processPhase(gameProperties);
      } else {
        var _gameProperties$activ3, _gameProperties$activ4, _gameProperties$inact, _gameProperties$inact2;
        if (!gameProperties.inactiveComponents.data.isComputer) {
          gameProperties.activeComponents.hidePlacedShips();
        }
        if (gameProperties.inactiveComponents.data.isComputer && gameProperties.activeComponents.data.isComputer) {
          gameProperties.inactiveComponents.showPlacedShips();
          gameProperties.activeComponents.showPlacedShips();
        }
        (_gameProperties$activ3 = gameProperties.activeComponents.elements.shipContainer) === null || _gameProperties$activ3 === void 0 ? void 0 : _gameProperties$activ3.remove();
        (_gameProperties$activ4 = gameProperties.activeComponents.elements.buttonContainer) === null || _gameProperties$activ4 === void 0 ? void 0 : _gameProperties$activ4.remove();
        (_gameProperties$inact = gameProperties.inactiveComponents.elements.shipContainer) === null || _gameProperties$inact === void 0 ? void 0 : _gameProperties$inact.remove();
        (_gameProperties$inact2 = gameProperties.inactiveComponents.elements.buttonContainer) === null || _gameProperties$inact2 === void 0 ? void 0 : _gameProperties$inact2.remove();
        gameProperties.activeComponents.unfadePlayer();
        gameProperties.inactiveComponents.unfadePlayer();
        gameProperties.phase = phases.playing;
        processPhase(gameProperties);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLHNCQUFzQixFQUFFO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFFOztFQUViO0VBQ0FBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLFNBQVNBLFFBQVEsR0FBRztJQUNsQyxPQUFPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLElBQUksRUFBRTtNQUM5QixJQUFJQyxPQUFPLEdBQUcsRUFBRTtNQUNoQixJQUFJQyxTQUFTLEdBQUcsT0FBT0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVc7TUFDOUMsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1hDLE9BQU8sSUFBSSxhQUFhLENBQUNFLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztNQUNqRDtNQUNBLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksU0FBUyxDQUFDRSxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDNUM7TUFDQSxJQUFJRSxTQUFTLEVBQUU7UUFDYkQsT0FBTyxJQUFJLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDRCxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDakY7TUFDQUMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBSSxDQUFDO01BQ3ZDLElBQUlFLFNBQVMsRUFBRTtRQUNiRCxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLE9BQU9BLE9BQU87SUFDaEIsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDYixDQUFDOztFQUVEO0VBQ0FSLElBQUksQ0FBQ1MsQ0FBQyxHQUFHLFNBQVNBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7SUFDM0QsSUFBSSxPQUFPSixPQUFPLEtBQUssUUFBUSxFQUFFO01BQy9CQSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRUEsT0FBTyxFQUFFSyxTQUFTLENBQUMsQ0FBQztJQUN4QztJQUNBLElBQUlDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFJSixNQUFNLEVBQUU7TUFDVixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNWLE1BQU0sRUFBRVUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSUMsRUFBRSxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUlDLEVBQUUsSUFBSSxJQUFJLEVBQUU7VUFDZEYsc0JBQXNCLENBQUNFLEVBQUUsQ0FBQyxHQUFHLElBQUk7UUFDbkM7TUFDRjtJQUNGO0lBQ0EsS0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUdULE9BQU8sQ0FBQ0gsTUFBTSxFQUFFWSxFQUFFLEVBQUUsRUFBRTtNQUMxQyxJQUFJaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQ0csTUFBTSxDQUFDSSxPQUFPLENBQUNTLEVBQUUsQ0FBQyxDQUFDO01BQ2pDLElBQUlQLE1BQU0sSUFBSUksc0JBQXNCLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdDO01BQ0Y7TUFDQSxJQUFJLE9BQU9XLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDaEMsSUFBSSxPQUFPWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO1VBQ2xDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdXLEtBQUs7UUFDakIsQ0FBQyxNQUFNO1VBQ0xYLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNuR0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHVyxLQUFLO1FBQ2pCO01BQ0Y7TUFDQSxJQUFJSCxLQUFLLEVBQUU7UUFDVCxJQUFJLENBQUNSLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNaQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdRLEtBQUs7UUFDakIsQ0FBQyxNQUFNO1VBQ0xSLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDOURBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1EsS0FBSztRQUNqQjtNQUNGO01BQ0EsSUFBSUUsUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDWkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQ0csTUFBTSxDQUFDTyxRQUFRLENBQUM7UUFDL0IsQ0FBQyxNQUFNO1VBQ0xWLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUNHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDbkVBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1UsUUFBUTtRQUNwQjtNQUNGO01BQ0FiLElBQUksQ0FBQ29CLElBQUksQ0FBQ2pCLElBQUksQ0FBQztJQUNqQjtFQUNGLENBQUM7RUFDRCxPQUFPSCxJQUFJO0FBQ2IsQ0FBQzs7Ozs7Ozs7OztBQ3BGWTs7QUFFYkgsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBVXVCLEdBQUcsRUFBRUMsT0FBTyxFQUFFO0VBQ3ZDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO0lBQ1pBLE9BQU8sR0FBRyxDQUFDLENBQUM7RUFDZDtFQUNBLElBQUksQ0FBQ0QsR0FBRyxFQUFFO0lBQ1IsT0FBT0EsR0FBRztFQUNaO0VBQ0FBLEdBQUcsR0FBR0UsTUFBTSxDQUFDRixHQUFHLENBQUNHLFVBQVUsR0FBR0gsR0FBRyxDQUFDSSxPQUFPLEdBQUdKLEdBQUcsQ0FBQzs7RUFFaEQ7RUFDQSxJQUFJLGNBQWMsQ0FBQ0ssSUFBSSxDQUFDTCxHQUFHLENBQUMsRUFBRTtJQUM1QkEsR0FBRyxHQUFHQSxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDeEI7RUFDQSxJQUFJTCxPQUFPLENBQUNNLElBQUksRUFBRTtJQUNoQlAsR0FBRyxJQUFJQyxPQUFPLENBQUNNLElBQUk7RUFDckI7O0VBRUE7RUFDQTtFQUNBLElBQUksbUJBQW1CLENBQUNGLElBQUksQ0FBQ0wsR0FBRyxDQUFDLElBQUlDLE9BQU8sQ0FBQ08sVUFBVSxFQUFFO0lBQ3ZELE9BQU8sSUFBSSxDQUFDdkIsTUFBTSxDQUFDZSxHQUFHLENBQUNTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUNBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQzFFO0VBQ0EsT0FBT1QsR0FBRztBQUNaLENBQUM7Ozs7Ozs7Ozs7QUN6Qlk7O0FBRWJ4QixNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVSyxJQUFJLEVBQUU7RUFDL0IsSUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3JCLElBQUk0QixVQUFVLEdBQUc1QixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLElBQUksQ0FBQzRCLFVBQVUsRUFBRTtJQUNmLE9BQU8zQixPQUFPO0VBQ2hCO0VBQ0EsSUFBSSxPQUFPNEIsSUFBSSxLQUFLLFVBQVUsRUFBRTtJQUM5QixJQUFJQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJTyxJQUFJLEdBQUcsOERBQThELENBQUNoQyxNQUFNLENBQUMyQixNQUFNLENBQUM7SUFDeEYsSUFBSU0sYUFBYSxHQUFHLE1BQU0sQ0FBQ2pDLE1BQU0sQ0FBQ2dDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDOUMsSUFBSUUsVUFBVSxHQUFHVCxVQUFVLENBQUNVLE9BQU8sQ0FBQ3ZDLEdBQUcsQ0FBQyxVQUFVd0MsTUFBTSxFQUFFO01BQ3hELE9BQU8sZ0JBQWdCLENBQUNwQyxNQUFNLENBQUN5QixVQUFVLENBQUNZLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQ3JDLE1BQU0sQ0FBQ29DLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDbkYsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUFDdEMsT0FBTyxDQUFDLENBQUNFLE1BQU0sQ0FBQ2tDLFVBQVUsQ0FBQyxDQUFDbEMsTUFBTSxDQUFDLENBQUNpQyxhQUFhLENBQUMsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQztFQUN4RTtFQUNBLE9BQU8sQ0FBQ0osT0FBTyxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0pBQXFEO0FBQ2pHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLDBJQUFrRDtBQUM5Riw0Q0FBNEMsd0pBQXlEO0FBQ3JHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxvRUFBb0UsNEJBQTRCLHlEQUF5RCxxQkFBcUIsR0FBRyxjQUFjLDRCQUE0Qix5REFBeUQscUJBQXFCLEdBQUcsY0FBYyw0QkFBNEIseURBQXlELHFCQUFxQixHQUFHLGNBQWMsNEJBQTRCLHlEQUF5RCxxQkFBcUIsdUJBQXVCLEdBQUcsY0FBYyw0QkFBNEIseURBQXlELHFCQUFxQix1QkFBdUIsR0FBRyx1cUJBQXVxQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLDBKQUEwSixtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLCtEQUErRCxrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyw4QkFBOEIsc0JBQXNCLEdBQUcsZ0NBQWdDLDJCQUEyQixHQUFHLG9EQUFvRCwyQkFBMkIsNEJBQTRCLHFCQUFxQixtQkFBbUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsMEJBQTBCLGlEQUFpRCwwQkFBMEIsa0JBQWtCLDhCQUE4QixHQUFHLGVBQWUsMEJBQTBCLHFCQUFxQix5QkFBeUIsc0JBQXNCLEdBQUcsOEJBQThCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLFlBQVksR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLGtCQUFrQiwwQkFBMEIscUNBQXFDLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0Isd0JBQXdCLGNBQWMsR0FBRyxtQ0FBbUMsa0JBQWtCLHdCQUF3QiwyQkFBMkIsY0FBYyxHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyxlQUFlLGVBQWUsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLDZCQUE2QixnQkFBZ0IsZ0JBQWdCLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLDJCQUEyQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyxvQkFBb0IsR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsd0NBQXdDLGdCQUFnQixzQkFBc0IsR0FBRyw4Q0FBOEMsa0JBQWtCLEdBQUcsZ0RBQWdELDRDQUE0QyxHQUFHLG9DQUFvQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyw2QkFBNkIsR0FBRyxnREFBZ0QsOEJBQThCLEdBQUcsMENBQTBDLDhCQUE4Qiw4QkFBOEIsdUJBQXVCLHNCQUFzQixHQUFHLCtDQUErQyw4Q0FBOEMsbURBQW1ELEdBQUcsK0NBQStDLDhDQUE4QyxtREFBbUQsR0FBRyw2Q0FBNkMsOENBQThDLG1EQUFtRCxHQUFHLGdEQUFnRCw4Q0FBOEMsbURBQW1ELEdBQUcsNkNBQTZDLDhDQUE4QyxtREFBbUQsR0FBRywwQkFBMEIsaURBQWlELHNCQUFzQixrQkFBa0IsNEJBQTRCLDhCQUE4QixHQUFHLGtDQUFrQywwQkFBMEIsOEJBQThCLG9CQUFvQixHQUFHLFlBQVksdUJBQXVCLDhCQUE4Qiw4QkFBOEIsR0FBRyxrQkFBa0IseUNBQXlDLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLFlBQVksOEJBQThCLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGFBQWEsOEJBQThCLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyxXQUFXLDhCQUE4QixHQUFHLGFBQWEseUNBQXlDLEdBQUcsT0FBTyx5TEFBeUwsS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxLQUFLLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFlBQVksZUFBZSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZ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b3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3M/MDkyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFVCVU5UVSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuLyogaWNvbnMgKi9cXG4vKiBsYXlvdXQgKi9cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMmMzYTQ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5oZWFkZXIgbG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZTZlNjtcXG59XFxuZm9ybSAucGxheWVycy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb3JtIC5wbGF5ZXJzLmNvbnRhaW5lciAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSBzZWN0aW9uID4gLm9wdGlvbi5jb21wdXRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uY29udGFpbmVyLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb250aW51ZSB7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmNvbXBvbmVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5wbGF5ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSAucm90YXRpb24ge1xcbiAgaGVpZ2h0OiAzMHZ3O1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciAuc3F1YXJlIHtcXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYigxNjIsIDE2MiwgMTYyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI0YjRiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5kZXN0cm95ZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDIpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc3VibWFyaW5lIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmNydWlzZXIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDMpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuYmF0dGxlc2hpcCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNCk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jYXJyaWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiA1KTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7ICovXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzJjM2E0NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWY5ZjQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5mYWRlIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2E0NztcXG59XFxuXFxuLnBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2VlZmY7XFxufVxcblxcbi5pbnZhbGlkLXBsYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XFxufVxcblxcbi51c2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiM2M2ZDtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0YTU2O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWExOWI7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWUwZmQ7XFxufVxcblxcbi53aW5uZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMTBweCAjZDlmZmM2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvZm9udHMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LXN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtF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eUJBQUE7RUFDQSx5QkFqTWdCO0FBNFRsQjs7QUF6SEE7RUFDRSxvQ0FBQTtBQTRIRjs7QUExSEE7RUFDRSxZQUFBO0FBNkhGOztBQTNIQTtFQUNFLHdCQUFBO0FBOEhGOztBQTVIQTtFQUNFLHlCQUFBO0FBK0hGOztBQTdIQTtFQUNFLHlCQUFBO0FBZ0lGOztBQTlIQTtFQUNFLHlCQUFBO0FBaUlGOztBQS9IQTtFQUNFLFlBQUE7QUFrSUY7O0FBaElBO0VBQ0UseUJBQUE7QUFtSUY7O0FBaklBO0VBQ0UseUJBQUE7QUFvSUY7O0FBbElBO0VBQ0UseUJBQUE7QUFxSUY7O0FBbklBO0VBQ0UseUJBQUE7QUFzSUY7O0FBcElBO0VBQ0Usb0NBQUE7QUF1SUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVUJVTlRVICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1NZWRpdW0udHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTGlnaHRJdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1JdGFsaWMudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiLFwiQHVzZSAnLi9mb250cy5jc3MnO1xcbkB1c2UgJy4vcmVzZXQtc3R5bGVzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1iYXNlLXVuaXQtc2l6ZTogMTVweDtcXG59XFxuXFxuLyogY29sb3JzICovXFxuJGhpZ2hsaWdodDogI2ZmY2NjYztcXG5cXG4kbWFpbi1jb2xvcjogIzJjM2E0NztcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTFmOWY0O1xcbiRoaWdobGlnaHQtY29sb3I6ICNmZmNjY2M7XFxuJGV4dHJhLWxhcmdlLWZvbnQtc2l6ZTogM3JlbTtcXG4kbGFyZ2UtZm9udC1zaXplOiAxLjRyZW07XFxuJGZvbnQtc2l6ZTogMXJlbTtcXG4kc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxuJGZhZGUtY29sb3I6ICNlNmU2ZTY7XFxuJGdyYXk6ICM0YjRiNGI7XFxuXFxuLyogaWNvbnMgKi9cXG4kaWNvbi1zaXplOiAxLjJyZW07XFxuJHNtYWxsLWljb24tc2l6ZTogMXJlbTtcXG4kc21hbGxlci1pY29uLXNpemU6IDAuOHJlbTtcXG5cXG4vKiBsYXlvdXQgKi9cXG4vLyBzaXplXFxuJGV4dHJhLXNtYWxsLXNpemU6IDAuOHJlbTtcXG4kc21hbGxlci1zaXplOiAxcmVtO1xcbiRzbWFsbC1zaXplOiAycmVtO1xcbiRjb21tb24tc2l6ZTogM3JlbTtcXG4kbGFyZ2Utc2l6ZTogNHJlbTtcXG4vLyByYWRpdXNcXG4kY29tbW9uLWJvcmRlci1yYWRpdXM6IDJyZW07XFxuJHNtYWxsLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4kc21hbGxlci1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbi8vIHBhZGRpbmdcXG4kbGFyZ2UtcGFkZGluZzogNHJlbTtcXG4kY29tbW9uLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsLXBhZGRpbmc6IDJyZW07XFxuJHNtYWxsZXItcGFkZGluZzogMC41cmVtO1xcbiRleHRyYS1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtO1xcblxcbjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICRtYWluLWNvbG9yO1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6ICRzbWFsbC1wYWRkaW5nO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICBmb250LXNpemU6ICRsYXJnZS1mb250LXNpemU7XFxuICB9XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRzbWFsbC1wYWRkaW5nO1xcbiAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkZmFkZS1jb2xvcjtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gIC5wbGF5ZXJzLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcbiAgICAucGxheWVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gICAgfVxcbiAgfVxcbiAgc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gIC5jb250aW51ZSB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDN2dztcXG4gIH1cXG4gIC5jb21wb25lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuXFxuICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlLWZvbnQtc2l6ZTtcXG4gIH1cXG4gIC5yb3RhdGlvbiB7XFxuICAgIGhlaWdodDogMzB2dztcXG4gICAgLy8gd2lkdGg6IDN2dztcXG4gIH1cXG4gIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gICAgLy8gZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgICAuc3F1YXJlIHtcXG4gICAgICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxuICAgIH1cXG4gIH1cXG4gIC5zaGlwcy5jb250YWluZXIge1xcbiAgICAkYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICRiYXNlLXNpemU6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gJGJvcmRlci13aWR0aCk7XFxuICAgICRzaGlwLWNvbG9yOiAkaGlnaGxpZ2h0LWNvbG9yO1xcbiAgICAkYm9yZGVyLWNvbG9yOiAkZ3JheTtcXG4gICAgJGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbiAgICAuc2hpcDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1jb2xvcjtcXG4gICAgfVxcbiAgICAuc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNoaXAtY29sb3I7XFxuICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG4gICAgLmRlc3Ryb3llciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAyKTtcXG4gICAgfVxcbiAgICAuc3VibWFyaW5lIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5jcnVpc2VyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDMpO1xcbiAgICB9XFxuICAgIC5iYXR0bGVzaGlwIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDQpO1xcbiAgICB9XFxuICAgIC5jYXJyaWVyIHtcXG4gICAgICBoZWlnaHQ6ICRiYXNlLXNpemU7XFxuICAgICAgd2lkdGg6IGNhbGMoJGJhc2Utc2l6ZSAqIDUpO1xcbiAgICB9XFxuICB9XFxufVxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxufVxcblxcbi8qIENPTU1PTiBFTEVNRU5UUyAqL1xcblxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6ICRzbWFsbC1ib3JkZXItcmFkaXVzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGZhZGUtY29sb3I7XFxuICBwYWRkaW5nOiAkc21hbGxlci1wYWRkaW5nO1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggJG1haW4tY29sb3I7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XFxuXCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBSRVNFVCBCVVRUT05TICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuXG5jb25zdCBQbGF5ZXJDb21wb25lbnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBsZXQgc2hpcE9yaWVudGF0aW9uID0gJ3YnO1xuICBjb25zdCBjcmVhdGVQbGF5ZXJEYXRhID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouY29tcHV0ZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCB0cnVlLCBvYmouc2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUGxheWVyKG9iai5uYW1lLCBmYWxzZSwgb2JqLnNpemUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlR2FtZUVsZW1lbnRzID0gZnVuY3Rpb24gKHBsYXllckRhdGEpIHtcbiAgICBjb25zdCBjcmVhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3BsYXllckRhdGEuZ2FtZWJvYXJkLnNpemV9LCAxZnIpYDtcbiAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocGxheWVyRGF0YS5nYW1lYm9hcmQuc3F1YXJlcykpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgIHNxdWFyZUVsLmRhdGFzZXQuaWQgPSBbYCR7a2V5fWBdO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0Lm93bmVyID0gW2Ake3BsYXllckRhdGEubmFtZX1gXTtcbiAgICAgICAgZ3JpZC5hcHBlbmQoc3F1YXJlRWwpO1xuICAgICAgICBncmlkLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgICAgZ3JpZC5zdHlsZS53aWR0aCA9IGAxMDAlYDtcbiAgICAgIH1cbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsICdjb250YWluZXInKTtcbiAgICAgIHJldHVybiBncmlkO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllckRhdGEuZ2FtZWJvYXJkLnNoaXBzKSkge1xuICAgICAgICBjb25zdCBzaGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcEVsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCBgJHtrZXl9YCk7XG4gICAgICAgIHNoaXBFbC5kYXRhc2V0LnR5cGUgPSBgJHtrZXl9YDtcbiAgICAgICAgc2hpcEVsLmRhdGFzZXQub3duZXIgPSBgJHtwbGF5ZXJEYXRhLm5hbWV9YDtcbiAgICAgICAgc2hpcHMuYXBwZW5kKHNoaXBFbCk7XG4gICAgICB9XG4gICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdzaGlwcycsICdjb250YWluZXInKTtcbiAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVJvdGF0aW9uQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRpb24nKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAnaCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyaWRDb250YWluZXI6IGNyZWF0ZUdyaWQoKSxcbiAgICAgIHNoaXBDb250YWluZXI6IGNyZWF0ZVNoaXBzKCksXG4gICAgICBidXR0b25Db250YWluZXI6IGNyZWF0ZVJvdGF0aW9uQnV0dG9uKCksXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgZGF0YSA9IGNyZWF0ZVBsYXllckRhdGEob2JqKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGVsZW1lbnRzOiBjcmVhdGVHYW1lRWxlbWVudHMoZGF0YSksXG4gICAgbWFya1dpbm5lcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICB9LFxuICAgIGVuYWJsZVNoaXBQbGFjZW1lbnQoKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnNoaXBPcmllbnRhdGlvbjtcbiAgICAgIGVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgY29uc3QgZW5hYmxlRHJhZ2dhYmxlID0gZnVuY3Rpb24gKHNoaXBMaXN0KSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LnZhbHVlcyhzaGlwTGlzdCkpIHtcbiAgICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRTaGlwRXZlbnRMaXN0ZW5lciA9IChzaGlwTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IHNoaXBMaXN0O1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcHMpKSB7XG4gICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9odG1sJywgYCR7ZS50YXJnZXR9YCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBhZGRHcmlkRXZlbnRMaXN0ZW5lciA9IChzcXVhcmVMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBzcXVhcmVMaXN0O1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgT2JqZWN0LnZhbHVlcyhncmlkKSkge1xuICAgICAgICAgIGlmIChzcXVhcmUuaXNMaXN0ZW5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3F1YXJlLmlzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKS5lbGVtZW50cztcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzZWxlY3RlZFNxdWFyZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBvcmllbnRhdGlvbiA9IGdhbWVQcm9wZXJ0aWVzLnBsYWNlbWVudE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9XG4gICAgICAgICAgICAgIGRhdGEuZ2FtZWJvYXJkLnNoaXBzW2UuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuZGF0YXNldC50eXBlXTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVN0ciA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkYXRhLmdhbWVib2FyZC5jaGVja1BsYWNlbWVudChcbiAgICAgICAgICAgICAgc3F1YXJlU3RyLFxuICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2UnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZSxcbiAgICAgICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVFbCA9IGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlRWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZW5hYmxlRHJhZ2dhYmxlKGVsZW1lbnRzLnNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKSk7XG4gICAgICBhZGRTaGlwRXZlbnRMaXN0ZW5lcihlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkR3JpZEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICAgIH0sXG4gICAgZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKSB7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgZGF0YS5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAodGhpcy5kYXRhLmdhbWVib2FyZC5zaGlwc1trZXldKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5idXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZVJlY2VpdmluZ0F0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgc3F1YXJlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhdHRhY2tDb250ZW50ID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgICAgc3F1YXJlTm9kZS5kYXRhc2V0LmlkLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJvY2Vzc0F0dGFjayhhdHRhY2tDb250ZW50LCBzcXVhcmVOb2RlKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVSZWNlaXZpbmdBdHRhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVSZWNlaXZpbmdDb21wdXRlckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBwcm9jZXNzQXR0YWNrID0gKGF0dGFja1Jlc3VsdEFyZywgc3F1YXJlTm9kZSkgPT4ge1xuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0QXJnID09PSBudWxsKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0QXJnKSB7XG4gICAgICAgICAgc3F1YXJlTm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IFtyZXN1bHQsIHNxdWFyZV0gPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnJlY2VpdmVDb21wdXRlckF0dGFjaygpO1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZSA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZX1cIl1gLFxuICAgICAgKTtcbiAgICAgIHByb2Nlc3NBdHRhY2socmVzdWx0LCBzcXVhcmVOb2RlKTtcbiAgICB9LFxuICAgIGRpc2FibGVSZWNlaXZpbmdBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgZm9yIChsZXQgc3F1YXJlTm9kZSBvZiBzcXVhcmVOb2Rlcykge1xuICAgICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmVOb2RlO1xuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBvbGRTcXVhcmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBvbGRTcXVhcmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3F1YXJlLCBvbGRTcXVhcmUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIH0sXG4gICAgdW5mYWRlUGxheWVyKCkge1xuICAgICAgdGhpcy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgfSxcbiAgICBoaWRlUGxhY2VkU2hpcHMoKSB7XG4gICAgICBjb25zdCBzaGlwU3F1YXJlcyA9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VkJyk7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc2hpcFNxdWFyZXMpIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1BsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc3F1YXJlc0RhdGEgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkLnNxdWFyZXM7XG4gICAgICBjb25zdCBzcXVhcmVzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXI7XG4gICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3F1YXJlc0RhdGEpKSB7XG4gICAgICAgIGlmICh2YWx1ZS5vY2N1cGllcykge1xuICAgICAgICAgIHNxdWFyZXNFbGVtZW50c1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtrZXl9XCJdYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNTaGlwUGxhY2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nYW1lYm9hcmQuaXNPbmVTaGlwUGxhY2VkKCk7XG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb21wb25lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBmb3JtLCBnYW1lLCBtZXNzYWdlIH07XG5cbmNvbnN0IGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS5pbnB1dC5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgYnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyksXG4gICAgbGVmdFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5sZWZ0LmNvbnRhaW5lcicpLFxuICAgICAgbmFtZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLmVycm9yJyksXG4gICAgICB9LFxuICAgICAgY29tcHV0ZXI6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuY29tcHV0ZXInKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5jb21wdXRlciA+IGlucHV0JyksXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZSA+IGlucHV0JyksXG4gICAgICAgIG91dHB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUgPiBvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci5yaWdodC5jb250YWluZXInKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm5hbWUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAubmFtZSA+IGlucHV0JyksXG4gICAgICAgIGVycm9yOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5jb21wdXRlcicpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5jb21wdXRlciA+IGlucHV0JyksXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplID4gaW5wdXQnKSxcbiAgICAgICAgb3V0cHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUgPiBvdXRwdXQnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBnYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGxlZnRQbGF5ZXI6IHtcbiAgICAgIG5hbWU6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAubmFtZScpLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQucGxheWVyJyksXG4gICAgICBnYW1lYm9hcmQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5yb3RhdGlvbicpLFxuICAgIH0sXG4gICAgY29udGludWVCdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGludWUnKSxcbiAgICByaWdodFBsYXllcjoge1xuICAgICAgbmFtZTogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAubmFtZScpLFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0IC5nYW1lYm9hcmQuY29udGFpbmVyJyksXG4gICAgICBzaGlwczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuc2hpcHMuY29udGFpbmVyJyksXG4gICAgICByb3RhdGlvbkJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAucm90YXRpb24nKSxcbiAgICB9LFxuICB9O1xufSkoKTtcbmNvbnN0IG1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS5jb250YWluZXInKTtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gIH07XG59KSgpO1xuLy8gY29uc3Qgb3JpZW50YXRpb25CdXR0b24gPSAoZnVuY3Rpb24gKCkge1xuLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm9yaWVudGF0aW9uJyk7XG4vLyByZXR1cm4gYnV0dG9uO1xuLy8gfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNxdWFyZXMgPSB7fTtcbiAgY29uc3Qgc2hpcHMgPSBuZXcgU2hpcHMoKTtcbiAgbGV0IGlzT25lU2hpcFBsYWNlZCA9IGZhbHNlO1xuICBjb25zdCBjaGVja1BsYWNlbWVudCA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXBEYXRhLCBzaGlwT3JpZW50ID0gJ3YnKSB7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBpZiAoc2hpcERhdGEucGxhY2VkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50czogbnVsbCxcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNoaXBPcmllbnQgPT09ICd2Jykge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcERhdGEuc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXS5qb2luKCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICAgICAgaWYgKCFzcXVhcmVzW25laWdoYm91clN0cl0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVzW25laWdoYm91clN0cl0/Lm9jY3VwaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IGZ1bmN0aW9uIChzcXVhcmVTdHIsIHNoaXApIHtcbiAgICBpc09uZVNoaXBQbGFjZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRTcXVhcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykge1xuICAgICAgY29uc3QgbmVpZ2hib3VyID0gW3NxdWFyZUlkWzBdLCBzcXVhcmVJZFsxXSArIGldO1xuICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gbmVpZ2hib3VyLmpvaW4oKTtcbiAgICAgIHNxdWFyZXNbbmVpZ2hib3VyU3RyXS5vY2N1cGllcyA9IHNoaXA7XG4gICAgICBzZWxlY3RlZFNxdWFyZXMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTcXVhcmVzO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSArIGksIHNxdWFyZUlkWzFdXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjaGVja1BsYWNlbWVudCxcbiAgICBzcXVhcmVzLFxuICAgIHNoaXBzLFxuICAgIGlzT25lU2hpcFBsYWNlZDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzT25lU2hpcFBsYWNlZDtcbiAgICB9LFxuICAgIGNyZWF0ZUJvYXJkKHNpemUgPSAxMCkge1xuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgdGhpcy5zcXVhcmVzW2Ake1tqLCBpXX1gXSA9IHtcbiAgICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgICAgIG9jY3VwaWVzOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnNxdWFyZXM7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHNxdWFyZVN0ciwgbmV3T3JpZW50ID0gJ3YnKSB7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgICAgY29uc3Qgc2hpcE9yaWVudCA9IG5ld09yaWVudDtcbiAgICAgIGlmIChjaGVja1BsYWNlbWVudChzcXVhcmVTdHIsIHNoaXAsIG5ld09yaWVudCk/LnZhbGlkKSB7XG4gICAgICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFZlcnRpY2FsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwT3JpZW50ID09PSAnaCcpIHtcbiAgICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcEhvcml6b250YWxseShzcXVhcmVTdHIsIHNoaXAsIHNoaXBPcmllbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVyUGxhY2VTaGlwKHNoaXApIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21TcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgY29uc3Qgc2hpcE9yaWVudEFyciA9IFsndicsICdoJ107XG4gICAgICAgIGNvbnN0IHJhbmRvbU9yaWVudCA9XG4gICAgICAgICAgc2hpcE9yaWVudEFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGlwT3JpZW50QXJyLmxlbmd0aCldO1xuXG4gICAgICAgIGlmIChjaGVja1BsYWNlbWVudChyYW5kb21TcXVhcmUsIHNoaXAsIHJhbmRvbU9yaWVudCkudmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gW3NoaXAubmFtZSwgcmFuZG9tU3F1YXJlLCByYW5kb21PcmllbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbVBsYWNlbWVudCgpO1xuICAgICAgdGhpcy5wbGFjZVNoaXAoLi4ucmFuZG9tKTtcbiAgICB9LFxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgT2JqZWN0LmtleXModGhpcy5zaGlwcykpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBdLmlzU3VuaygpICYmIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soc3F1YXJlU3RyKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZFN0ciA9IHNxdWFyZVN0cjtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tzcXVhcmVJZFN0cl07XG5cbiAgICAgIGlmICghc3F1YXJlKSB7XG4gICAgICAgIHJldHVybiBgT3V0IG9mIGJvdW5kc2A7XG4gICAgICB9IGVsc2UgaWYgKHNxdWFyZS5pc0hpdCkge1xuICAgICAgICByZXR1cm4gYEFscmVhZHkgaGl0YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIGlmIChzcXVhcmUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmUub2NjdXBpZXMuaGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZS5vY2N1cGllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlY2VpdmVDb21wdXRlckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IGNoZWNrSWZQb3NzaWJsZUhpdCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgW3NxdWFyZVN0ciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXMpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLmlzSGl0ICYmIHZhbHVlLm9jY3VwaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzcXVhcmVTdHIuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICAgICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgICAgICAgWzEsIDBdLFxuICAgICAgICAgICAgICBbLTEsIDBdLFxuICAgICAgICAgICAgICBbMCwgLTFdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU1vdmUgPSBmdW5jdGlvbiAoc3F1YXJlU3RyaW5nLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBOdW1iZXIoc3F1YXJlSWRbMF0pICsgTnVtYmVyKGRpcmVjdGlvblswXSksXG4gICAgICAgICAgICAgICAgTnVtYmVyKHNxdWFyZUlkWzFdKSArIE51bWJlcihkaXJlY3Rpb25bMV0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdQb3NzaWJsZVRhcmdldCA9IGNyZWF0ZU1vdmUoXG4gICAgICAgICAgICAgICAgc3F1YXJlLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICkuam9pbignLCcpO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3F1YXJlc1tuZXdQb3NzaWJsZVRhcmdldF0/LmlzSGl0ID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgc3F1YXJlc1tuZXdQb3NzaWJsZVRhcmdldF0/Lm9jY3VwaWVzXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc3NpYmxlVGFyZ2V0ID0gY3JlYXRlTW92ZShcbiAgICAgICAgICAgICAgICAgIG5ld1Bvc3NpYmxlVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICkuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICAgIHNxdWFyZXNbbmV3UG9zc2libGVUYXJnZXRdICYmXG4gICAgICAgICAgICAgICAgICBzcXVhcmVzW25ld1Bvc3NpYmxlVGFyZ2V0XT8ub2NjdXBpZXNcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzcXVhcmVzW25ld1Bvc3NpYmxlVGFyZ2V0XT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NzaWJsZVRhcmdldDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5ld1Bvc3NpYmxlVGFyZ2V0ID0gY3JlYXRlTW92ZShcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zc2libGVUYXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICkuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1Bvc3NpYmxlVGFyZ2V0ID0gY3JlYXRlTW92ZShcbiAgICAgICAgICAgICAgICBzcXVhcmUuam9pbignLCcpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgKS5qb2luKCcsJyk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Bvc3NpYmxlVGFyZ2V0KTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZXNbbmV3UG9zc2libGVUYXJnZXRdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UG9zc2libGVUYXJnZXQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgICAgY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChnYW1lYm9hcmRTaXplKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmRTaXplKTtcbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb21TcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGAke3JhbmRvbU51bWJlcihnYW1lYm9hcmRTaXplKX0sJHtyYW5kb21OdW1iZXIoXG4gICAgICAgICAgZ2FtZWJvYXJkU2l6ZSxcbiAgICAgICAgKX1gO1xuICAgICAgICB0aGlzLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuc3F1YXJlc1tzcXVhcmVdPy5pc0hpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvc3NpYmxlSGl0ID0gY2hlY2tJZlBvc3NpYmxlSGl0KCk7XG4gICAgICBpZiAocG9zc2libGVIaXQpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlY2VpdmVBdHRhY2socG9zc2libGVIaXQpLCBwb3NzaWJsZUhpdF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByYW5kb21TcSA9IHJhbmRvbVNxdWFyZSgpO1xuICAgICAgICByZXR1cm4gW3RoaXMucmVjZWl2ZUF0dGFjayhyYW5kb21TcSksIHJhbmRvbVNxXTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUGxheWVyQ29tcG9uZW50cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvUGxheWVyQ29tcG9uZW50cy5qcyc7XG5pbXBvcnQge1xuICBmb3JtIGFzIGZvcm1XaW5kb3csXG4gIGdhbWUgYXMgZ2FtZVdpbmRvdyxcbiAgbWVzc2FnZSBhcyBtZXNzYWdlV2luZG93LFxufSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyc7XG5jb25zdCBHYW1lbG9vcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0ge307XG4gIGNvbnN0IHByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3dFbGVtZW50KGZvcm1XaW5kb3cuY29udGFpbmVyKTtcbiAgICBjb25zdCBsZWZ0UGxheWVyID0gZm9ybVdpbmRvdy5sZWZ0UGxheWVyO1xuICAgIGNvbnN0IHJpZ2h0UGxheWVyID0gZm9ybVdpbmRvdy5yaWdodFBsYXllcjtcbiAgICBjb25zdCB0b2dnbGVQbGF5ZXJJbnB1dCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIGlmIChwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5uYW1lLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwbGF5ZXIuc2l6ZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgbGVmdFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5jb21wdXRlci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgfSk7XG4gICAgbGVmdFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKGxlZnRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIHJpZ2h0UGxheWVyLnNpemUuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2xpZGVyVmFsdWUocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGZvcm1XaW5kb3cuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxlZnRQbGF5ZXJWYWxpZCA9IGxlZnRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnN0IHJpZ2h0UGxheWVyVmFsaWQgPSByaWdodFBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbGlkO1xuXG4gICAgICBpZiAobGVmdFBsYXllclZhbGlkICYmIHJpZ2h0UGxheWVyVmFsaWQpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQoZm9ybVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgICBmb3JtRGF0YS5sZWZ0UGxheWVyID0gZ2V0Rm9ybUlucHV0KGxlZnRQbGF5ZXIpO1xuICAgICAgICBmb3JtRGF0YS5yaWdodFBsYXllciA9IGdldEZvcm1JbnB1dChyaWdodFBsYXllcik7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLmNvbXBvbmVudENyZWF0aW9uO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICBmb3JtV2luZG93LmNvbnRhaW5lci5yZXNldCgpO1xuICAgICAgICB0b2dnbGVQbGF5ZXJJbnB1dChsZWZ0UGxheWVyKTtcbiAgICAgICAgdG9nZ2xlUGxheWVySW5wdXQocmlnaHRQbGF5ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsZWZ0UGxheWVyVmFsaWQpIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3IobGVmdFBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyaWdodFBsYXllclZhbGlkKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBzaG93RXJyb3IocGxheWVyLm5hbWUuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgcGxheWVyQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5ZXJDb21wb25lbnRzPy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHBsYXllckNvbXBvbmVudHM/LmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcbiAgY29uc3QgYXBwZW5kUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb250YWluZXIsIHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb250YWluZXIuZ2FtZWJvYXJkLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIucm90YXRpb25CdXR0b24uYXBwZW5kKHBsYXllckNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyKTtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoQWN0aXZlUGxheWVyID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgdGVtcCA9IGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cztcbiAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSB0ZW1wO1xuICB9O1xuICBjb25zdCBwcm9jZXNzUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBjb25zdCBnYW1lUHJvcGVydGllcyA9IGdhbWVQcm9wZXJ0aWVzQXJnO1xuICAgIGNvbnN0IGdhbWVFbGVtZW50cyA9IGdhbWVXaW5kb3c7XG4gICAgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAwKSB7XG4gICAgICByZW1vdmVQbGF5ZXJDb21wb25lbnRzKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyhnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgaGlkZUVsZW1lbnQoZ2FtZVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgc2hvd0VsZW1lbnQoZm9ybVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgcHJvY2Vzc0Zvcm0oKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAxKSB7XG4gICAgICBnYW1lV2luZG93LmxlZnRQbGF5ZXIubmFtZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmxlZnRQbGF5ZXIubmFtZTtcbiAgICAgIGdhbWVXaW5kb3cucmlnaHRQbGF5ZXIubmFtZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLnJpZ2h0UGxheWVyLm5hbWU7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gbmV3IFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIsXG4gICAgICApO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gbmV3IFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGFwcGVuZFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGdhbWVFbGVtZW50cy5sZWZ0UGxheWVyLFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLFxuICAgICAgKTtcbiAgICAgIGFwcGVuZFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllcixcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLFxuICAgICAgKTtcbiAgICAgIHNob3dFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLnN0YXJ0aW5nO1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAyKSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zaGlwUGxhY2VtZW50O1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAzKSB7XG4gICAgICBpZiAoIWdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcj8ucmVtb3ZlKCk7XG4gICAgICAgICAgcmV0dXJuIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICB9IGVsc2UgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkpIHtcbiAgICAgICAgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlciAmJlxuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyXG4gICAgICAgICkge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5zaG93UGxhY2VkU2hpcHMoKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcj8ucmVtb3ZlKCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLnNoaXBDb250YWluZXI/LnJlbW92ZSgpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5wbGF5aW5nO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDQpIHtcbiAgICAgIGlmIChnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kYXRhLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkudHVybihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSA1KSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5tYXJrV2lubmVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLndpbihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLmZvcm1Qcm9jZXNzaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKiBJTklUSUFMSVpBVElOICovXG5cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgY29uc3Qgc2tpcEZvcm1QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZywgZm9ybURhdGFBcmcpIHtcbiAgICAvLyBjb25zdCBsZWZ0UGxheWVyRGF0YSA9IHt9XG4gICAgZm9ybURhdGFBcmcubGVmdFBsYXllciA9IHtcbiAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgIHNpemU6ICc4JyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGZvcm1EYXRhQXJnLnJpZ2h0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ1NhcmFoJyxcbiAgICAgIHNpemU6ICcxMicsXG4gICAgICBjb21wdXRlcjogZmFsc2UsXG4gICAgfTtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2tpcFRvV2luUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy53aW47XG4gIH07XG4gIC8vIHNraXBGb3JtUGhhc2UoZ2FtZVByb3BlcnRpZXMsIGZvcm1EYXRhKTtcbiAgLy8gcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gc2tpcFRvV2luUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lV2luZG93LmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVsb29wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSA9ICdDb21wdXRlcicsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gICAgY2hlY2tGb3JMb3NzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSwgbmFtZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgbmFtZTogbmFtZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIsICdkZXN0cm95ZXInKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMsICdzdWJtYXJpbmUnKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzLCAnY3J1aXNlcicpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQsICdiYXR0bGVzaGlwJyksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSwgJ2NhcnJpZXInKSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiUGxheWVyIiwiUGxheWVyQ29tcG9uZW50cyIsIm9iaiIsInNoaXBPcmllbnRhdGlvbiIsImNyZWF0ZVBsYXllckRhdGEiLCJjb21wdXRlciIsIm5hbWUiLCJzaXplIiwiY3JlYXRlR2FtZUVsZW1lbnRzIiwicGxheWVyRGF0YSIsImNyZWF0ZUdyaWQiLCJncmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ2FtZWJvYXJkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJzcXVhcmVzIiwia2V5Iiwic3F1YXJlRWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwib3duZXIiLCJhcHBlbmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZVNoaXBzIiwic2hpcHMiLCJzaGlwRWwiLCJ0eXBlIiwiY3JlYXRlUm90YXRpb25CdXR0b24iLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmlkQ29udGFpbmVyIiwic2hpcENvbnRhaW5lciIsImJ1dHRvbkNvbnRhaW5lciIsImVsZW1lbnRzIiwibWFya1dpbm5lciIsImVuYWJsZVNoaXBQbGFjZW1lbnQiLCJyb3RhdGlvbiIsInJlbW92ZSIsImVuYWJsZURyYWdnYWJsZSIsInNoaXBMaXN0IiwidmFsdWVzIiwic2hpcCIsInNldEF0dHJpYnV0ZSIsImFkZFNoaXBFdmVudExpc3RlbmVyIiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJhZGRHcmlkRXZlbnRMaXN0ZW5lciIsInNxdWFyZUxpc3QiLCJzcXVhcmUiLCJpc0xpc3RlbmluZyIsInByZXZlbnREZWZhdWx0IiwibW96U291cmNlTm9kZSIsInNxdWFyZVN0ciIsInN0YXR1cyIsImNoZWNrUGxhY2VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbGlkIiwic2VsZWN0ZWRTcXVhcmVzIiwicGxhY2VTaGlwIiwicXVlcnlTZWxlY3RvckFsbCIsImVuYWJsZUNvbXB1dGVyUGxhY2VtZW50IiwiY29tcHV0ZXJQbGFjZVNoaXAiLCJkaXNhYmxlU2hpcFBsYWNlbWVudCIsImNoaWxkTm9kZXMiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZW5hYmxlUmVjZWl2aW5nQXR0YWNrIiwic3F1YXJlTm9kZXMiLCJwcm9jZXNzQXR0YWNrIiwiYXR0YWNrUmVzdWx0QXJnIiwic3F1YXJlTm9kZSIsImF0dGFja0NvbnRlbnQiLCJyZWNlaXZlQXR0YWNrIiwiZGlzYWJsZVJlY2VpdmluZ0F0dGFjayIsImVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwicmVzdWx0IiwiZmFkZVBsYXllciIsInVuZmFkZVBsYXllciIsImhpZGVQbGFjZWRTaGlwcyIsInNoaXBTcXVhcmVzIiwic2hvd1BsYWNlZFNoaXBzIiwic3F1YXJlc0RhdGEiLCJzcXVhcmVzRWxlbWVudHMiLCJlbnRyaWVzIiwidmFsdWUiLCJvY2N1cGllcyIsImlzU2hpcFBsYWNlZCIsImlzT25lU2hpcFBsYWNlZCIsImZvcm0iLCJnYW1lIiwibWVzc2FnZSIsImNvbnRhaW5lciIsImxlZnRQbGF5ZXIiLCJpbnB1dCIsImVycm9yIiwib3V0cHV0IiwicmlnaHRQbGF5ZXIiLCJyb3RhdGlvbkJ1dHRvbiIsImNvbnRpbnVlQnV0dG9uIiwiU2hpcHMiLCJHYW1lYm9hcmQiLCJzaGlwRGF0YSIsInNoaXBPcmllbnQiLCJzcXVhcmVJZCIsInNwbGl0IiwiZWwiLCJOdW1iZXIiLCJwbGFjZWQiLCJuZWlnaGJvdXJTdHIiLCJwbGFjZVNoaXBWZXJ0aWNhbGx5IiwibmVpZ2hib3VyIiwicGxhY2VTaGlwSG9yaXpvbnRhbGx5IiwiY3JlYXRlQm9hcmQiLCJqIiwiaXNIaXQiLCJzaGlwTmFtZSIsIm5ld09yaWVudCIsImdhbWVib2FyZFNpemUiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21QbGFjZW1lbnQiLCJyYW5kb21TcXVhcmUiLCJzaGlwT3JpZW50QXJyIiwicmFuZG9tT3JpZW50IiwiYXJlU2hpcHNTdW5rIiwiaXNTdW5rIiwic3F1YXJlSWRTdHIiLCJoaXQiLCJjaGVja0lmUG9zc2libGVIaXQiLCJkaXJlY3Rpb25zIiwiY3JlYXRlTW92ZSIsInNxdWFyZVN0cmluZyIsImRpcmVjdGlvbiIsIm5ld1Bvc3NpYmxlVGFyZ2V0IiwicG9zc2libGVIaXQiLCJyYW5kb21TcSIsImZvcm1XaW5kb3ciLCJnYW1lV2luZG93IiwibWVzc2FnZVdpbmRvdyIsIkdhbWVsb29wIiwiZm9ybURhdGEiLCJwcm9jZXNzRm9ybSIsInNob3dFbGVtZW50IiwidG9nZ2xlUGxheWVySW5wdXQiLCJwbGF5ZXIiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJkaXNwbGF5U2xpZGVyVmFsdWUiLCJsZWZ0UGxheWVyVmFsaWQiLCJ2YWxpZGl0eSIsInJpZ2h0UGxheWVyVmFsaWQiLCJoaWRlRWxlbWVudCIsImdldEZvcm1JbnB1dCIsImdhbWVQcm9wZXJ0aWVzIiwicGhhc2UiLCJwaGFzZXMiLCJjb21wb25lbnRDcmVhdGlvbiIsInByb2Nlc3NQaGFzZSIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJwbGF5ZXJBcmciLCJ2YWx1ZU1pc3NpbmciLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZUNvbnRhaW5lciIsIndpbiIsInR1cm4iLCJyZW1vdmVQbGF5ZXJDb21wb25lbnRzIiwicGxheWVyQ29tcG9uZW50cyIsImFwcGVuZFBsYXllckNvbXBvbmVudHMiLCJzd2l0Y2hBY3RpdmVQbGF5ZXIiLCJnYW1lUHJvcGVydGllc0FyZyIsInRlbXAiLCJhY3RpdmVDb21wb25lbnRzIiwiaW5hY3RpdmVDb21wb25lbnRzIiwiZ2FtZUVsZW1lbnRzIiwic3RhcnRpbmciLCJzaGlwUGxhY2VtZW50IiwiaXNDb21wdXRlciIsInBsYXlpbmciLCJjaGVja0Zvckxvc3MiLCJmb3JtUHJvY2Vzc2luZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwic2tpcEZvcm1QaGFzZSIsImZvcm1EYXRhQXJnIiwic2tpcFRvV2luUGhhc2UiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwiU2hpcCIsIm9yaWVudCIsImhpdHMiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9