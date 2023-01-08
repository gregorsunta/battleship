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
___CSS_LOADER_EXPORT___.push([module.id, "/* UBUNTU */\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Ubuntu\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: 500;\n  font-style: italic;\n}\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n/* icons */\n/* layout */\n:root {\n  box-sizing: border-box;\n  font-family: \"Ubuntu\";\n  font-weight: 500;\n  color: #2c3a47;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: 2rem;\n  background-color: #e1f9f4;\n}\nheader logo {\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: -1px;\n  font-size: 1.4rem;\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 4rem;\n  border-radius: 0.5rem;\n  box-shadow: 0px 0px 10px #e6e6e6;\n}\nform .players.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 3rem;\n}\nform .players.container .player {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3rem;\n}\nform section > .option.computer {\n  display: flex;\n}\nform button {\n  width: 30%;\n}\n\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n.container.game .continue {\n  width: 10vw;\n  height: 3vw;\n}\n.container.game .components {\n  display: flex;\n}\n.container.game .player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  font-size: 3rem;\n}\n.container.game .rotation {\n  height: 30vw;\n}\n.container.game .gameboard.container {\n  width: 30vw;\n  aspect-ratio: 1/1;\n}\n.container.game .gameboard.container > div {\n  display: grid;\n}\n.container.game .gameboard.container .square {\n  border: 0.5px dashed rgb(162, 162, 162);\n}\n.container.game .ships.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  filter: brightness(115%);\n}\n.container.game .ships.container .ship:hover {\n  background-color: #4b4b4b;\n}\n.container.game .ships.container .ship {\n  background-color: #ffcccc;\n  border: 2px solid #4b4b4b;\n  border-radius: 3px;\n  user-select: none;\n}\n.container.game .ships.container .destroyer {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 2);\n}\n.container.game .ships.container .submarine {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .cruiser {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 3);\n}\n.container.game .ships.container .battleship {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 4);\n}\n.container.game .ships.container .carrier {\n  height: calc(var(--base-unit-size) - 2px);\n  width: calc((var(--base-unit-size) - 2px) * 5);\n}\n\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1f9f4;\n}\n\n/* COMMON ELEMENTS */\ninput {\n  border-radius: 0.5rem;\n  border: 1px solid #e6e6e6;\n  padding: 0.5rem;\n}\n\nbutton {\n  border-radius: 5px;\n  border: solid 1px #2c3a47;\n  background-color: #e1f9f4;\n}\n\nbutton:hover {\n  background-color: rgb(173, 173, 173);\n}\n\n.fade {\n  opacity: 0.3;\n}\n\n.hide {\n  display: none !important;\n}\n\n.hover {\n  background-color: #2c3a47;\n}\n\n.place {\n  background-color: #bceeff;\n}\n\n.invalid-place {\n  background-color: #ff2222;\n}\n\n.used {\n  opacity: 0.5;\n}\n\n.checked {\n  background-color: #0b3c6d;\n}\n\n.placed {\n  background-color: #264a56;\n}\n\n.hit {\n  background-color: #f9a19b;\n}\n\n.miss {\n  background-color: #95e0fd;\n}\n\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/fonts.css","webpack://./src/stylesheets/style.scss","webpack://./src/stylesheets/reset-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* UBUNTU */\n\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Bold.ttf);\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-LightItalic.ttf);\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url(../fonts/Ubuntu/Ubuntu-Italic.ttf);\n  font-weight: 500;\n  font-style: italic;\n}\n","@use './fonts.css';\n@use './reset-styles.css';\n\n:root {\n  --base-unit-size: 15px;\n}\n\n/* colors */\n$highlight: #ffcccc;\n\n$main-color: #2c3a47;\n$secondary-color: #e1f9f4;\n$highlight-color: #ffcccc;\n$extra-large-font-size: 3rem;\n$large-font-size: 1.4rem;\n$font-size: 1rem;\n$small-font-size: 0.8rem;\n$fade-color: #e6e6e6;\n$gray: #4b4b4b;\n\n/* icons */\n$icon-size: 1.2rem;\n$small-icon-size: 1rem;\n$smaller-icon-size: 0.8rem;\n\n/* layout */\n// size\n$extra-small-size: 0.8rem;\n$smaller-size: 1rem;\n$small-size: 2rem;\n$common-size: 3rem;\n$large-size: 4rem;\n// radius\n$common-border-radius: 2rem;\n$small-border-radius: 0.5rem;\n$smaller-border-radius: 0.25rem;\n// padding\n$large-padding: 4rem;\n$common-padding: 2rem;\n$small-padding: 2rem;\n$smaller-padding: 0.5rem;\n$extra-small-padding: 0.25rem;\n\n:root {\n  box-sizing: border-box;\n\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: $main-color;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n/* HEADER */\nheader {\n  /* background-color: var(--secondary-color); */\n  height: min-content;\n  padding: $small-padding;\n  background-color: $secondary-color;\n  logo {\n    display: inline-block;\n\n    font-weight: 500;\n    letter-spacing: -1px;\n    font-size: $large-font-size;\n  }\n}\n\n/* MAIN CONTENT */\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: $small-padding;\n  padding: $large-padding;\n  border-radius: $small-border-radius;\n  box-shadow: 0px 0px 10px $fade-color;\n  // background-color: $white-color;\n\n  .players.container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    gap: $common-size;\n    .player {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      gap: $common-size;\n    }\n  }\n  section > .option.computer {\n    display: flex;\n  }\n  button {\n    width: 30%;\n  }\n}\n.container.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: $common-size;\n  .continue {\n    width: 10vw;\n    height: 3vw;\n  }\n  .components {\n    display: flex;\n  }\n  .player {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: $common-size;\n\n    font-size: $extra-large-font-size;\n  }\n  .rotation {\n    height: 30vw;\n    // width: 3vw;\n  }\n  .gameboard.container {\n    // display: flex;\n    width: 30vw;\n    aspect-ratio: 1/1;\n    > div {\n      display: grid;\n    }\n    .square {\n      border: 0.5px dashed rgb(162, 162, 162);\n    }\n  }\n  .ships.container {\n    $border-width: 2px;\n    $base-size: calc(var(--base-unit-size) - $border-width);\n    $ship-color: $highlight-color;\n    $border-color: $gray;\n    $border-radius: 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    filter: brightness(115%);\n    .ship:hover {\n      background-color: $border-color;\n    }\n    .ship {\n      background-color: $ship-color;\n      border: $border-width solid $border-color;\n      border-radius: $border-radius;\n      user-select: none;\n    }\n    .destroyer {\n      height: $base-size;\n      width: calc($base-size * 2);\n    }\n    .submarine {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .cruiser {\n      height: $base-size;\n      width: calc($base-size * 3);\n    }\n    .battleship {\n      height: $base-size;\n      width: calc($base-size * 4);\n    }\n    .carrier {\n      height: $base-size;\n      width: calc($base-size * 5);\n    }\n  }\n}\n/* FOOTER */\nfooter {\n  /* background-color: var(--secondary-color); */\n  padding: $smaller-padding;\n  display: flex;\n  justify-content: center;\n  background-color: $secondary-color;\n}\n\n/* COMMON ELEMENTS */\n\ninput {\n  border-radius: $small-border-radius;\n  border: 1px solid $fade-color;\n  padding: $smaller-padding;\n}\nbutton {\n  border-radius: 5px;\n  border: solid 1px $main-color;\n  background-color: $secondary-color;\n}\nbutton:hover {\n  background-color: rgb(173, 173, 173);\n}\n.fade {\n  opacity: 0.3;\n}\n.hide {\n  display: none !important;\n}\n.hover {\n  background-color: #2c3a47;\n}\n.place {\n  background-color: #bceeff;\n}\n.invalid-place {\n  background-color: #ff2222;\n}\n.used {\n  opacity: 0.5;\n}\n.checked {\n  background-color: #0b3c6d;\n}\n.placed {\n  background-color: #264a56;\n}\n.hit {\n  background-color: #f9a19b;\n}\n.miss {\n  background-color: #95e0fd;\n}\n.winner {\n  box-shadow: 0px 0px 1px 10px #d9ffc6;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* RESET BUTTONS */\n"],"sourceRoot":""}]);
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
      console.log('here');
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
          console.log('here');
          displayError(leftPlayer);
        }
        if (!rightPlayerValid) {
          console.log('here');
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


// import Gameloop from './components/gameloop.js';
// import { game, form } from '/src/components/dom.js';
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxLQUFLLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFlBQVksZUFBZSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxjQUFjLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxZ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QTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDQTtBQUNsQztBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzPzA5MjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXJDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQlVOVFUgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbi8qIGljb25zICovXFxuLyogbGF5b3V0ICovXFxuOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzJjM2E0NztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuaGVhZGVyIGxvZ28ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmU2ZTY7XFxufVxcbmZvcm0gLnBsYXllcnMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9ybSAucGxheWVycy5jb250YWluZXIgLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcbmZvcm0gc2VjdGlvbiA+IC5vcHRpb24uY29tcHV0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmNvbnRhaW5lci5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbi5jb250YWluZXIuZ2FtZSAuY29udGludWUge1xcbiAgd2lkdGg6IDEwdnc7XFxuICBoZWlnaHQ6IDN2dztcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5jb21wb25lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIuZ2FtZSAucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnJvdGF0aW9uIHtcXG4gIGhlaWdodDogMzB2dztcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5nYW1lYm9hcmQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuZ2FtZWJvYXJkLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLmdhbWVib2FyZC5jb250YWluZXIgLnNxdWFyZSB7XFxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCByZ2IoMTYyLCAxNjIsIDE2Mik7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzRiNGI0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuZGVzdHJveWVyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAyKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLnN1Ym1hcmluZSB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogMyk7XFxufVxcbi5jb250YWluZXIuZ2FtZSAuc2hpcHMuY29udGFpbmVyIC5jcnVpc2VyIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpO1xcbiAgd2lkdGg6IGNhbGMoKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCkgKiAzKTtcXG59XFxuLmNvbnRhaW5lci5nYW1lIC5zaGlwcy5jb250YWluZXIgLmJhdHRsZXNoaXAge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtIDJweCk7XFxuICB3aWR0aDogY2FsYygodmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KSAqIDQpO1xcbn1cXG4uY29udGFpbmVyLmdhbWUgLnNoaXBzLmNvbnRhaW5lciAuY2FycmllciB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYmFzZS11bml0LXNpemUpIC0gMnB4KTtcXG4gIHdpZHRoOiBjYWxjKCh2YXIoLS1iYXNlLXVuaXQtc2l6ZSkgLSAycHgpICogNSk7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpOyAqL1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjlmNDtcXG59XFxuXFxuLyogQ09NTU9OIEVMRU1FTlRTICovXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMyYzNhNDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmOWY0O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNhNDc7XFxufVxcblxcbi5wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNlZWZmO1xcbn1cXG5cXG4uaW52YWxpZC1wbGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xcbn1cXG5cXG4udXNlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjNjNmQ7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGE1NjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMTliO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVlMGZkO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDEwcHggI2Q5ZmZjNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2ZvbnRzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9yZXNldC1zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VB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Q0EsZUFySmdCO0VBc0poQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFyTGdCO0FBK1NsQjs7QUF2SEEsb0JBQUE7QUFFQTtFQUNFLHFCQXBLb0I7RUFxS3BCLHlCQUFBO0VBQ0EsZUFoS2dCO0FBeVJsQjs7QUF2SEE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBbE1nQjtBQTRUbEI7O0FBeEhBO0VBQ0Usb0NBQUE7QUEySEY7O0FBekhBO0VBQ0UsWUFBQTtBQTRIRjs7QUExSEE7RUFDRSx3QkFBQTtBQTZIRjs7QUEzSEE7RUFDRSx5QkFBQTtBQThIRjs7QUE1SEE7RUFDRSx5QkFBQTtBQStIRjs7QUE3SEE7RUFDRSx5QkFBQTtBQWdJRjs7QUE5SEE7RUFDRSxZQUFBO0FBaUlGOztBQS9IQTtFQUNFLHlCQUFBO0FBa0lGOztBQWhJQTtFQUNFLHlCQUFBO0FBbUlGOztBQWpJQTtFQUNFLHlCQUFBO0FBb0lGOztBQWxJQTtFQUNFLHlCQUFBO0FBcUlGOztBQW5JQTtFQUNFLG9DQUFBO0FBc0lGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVCVU5UVSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybCguLi9mb250cy9VYnVudHUvVWJ1bnR1LUxpZ2h0SXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL1VidW50dS9VYnVudHUtSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIixcIkB1c2UgJy4vZm9udHMuY3NzJztcXG5AdXNlICcuL3Jlc2V0LXN0eWxlcy5jc3MnO1xcblxcbjpyb290IHtcXG4gIC0tYmFzZS11bml0LXNpemU6IDE1cHg7XFxufVxcblxcbi8qIGNvbG9ycyAqL1xcbiRoaWdobGlnaHQ6ICNmZmNjY2M7XFxuXFxuJG1haW4tY29sb3I6ICMyYzNhNDc7XFxuJHNlY29uZGFyeS1jb2xvcjogI2UxZjlmNDtcXG4kaGlnaGxpZ2h0LWNvbG9yOiAjZmZjY2NjO1xcbiRleHRyYS1sYXJnZS1mb250LXNpemU6IDNyZW07XFxuJGxhcmdlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiRmb250LXNpemU6IDFyZW07XFxuJHNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcbiRmYWRlLWNvbG9yOiAjZTZlNmU2O1xcbiRncmF5OiAjNGI0YjRiO1xcblxcbi8qIGljb25zICovXFxuJGljb24tc2l6ZTogMS4ycmVtO1xcbiRzbWFsbC1pY29uLXNpemU6IDFyZW07XFxuJHNtYWxsZXItaWNvbi1zaXplOiAwLjhyZW07XFxuXFxuLyogbGF5b3V0ICovXFxuLy8gc2l6ZVxcbiRleHRyYS1zbWFsbC1zaXplOiAwLjhyZW07XFxuJHNtYWxsZXItc2l6ZTogMXJlbTtcXG4kc21hbGwtc2l6ZTogMnJlbTtcXG4kY29tbW9uLXNpemU6IDNyZW07XFxuJGxhcmdlLXNpemU6IDRyZW07XFxuLy8gcmFkaXVzXFxuJGNvbW1vbi1ib3JkZXItcmFkaXVzOiAycmVtO1xcbiRzbWFsbC1ib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuJHNtYWxsZXItYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4vLyBwYWRkaW5nXFxuJGxhcmdlLXBhZGRpbmc6IDRyZW07XFxuJGNvbW1vbi1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbC1wYWRkaW5nOiAycmVtO1xcbiRzbWFsbGVyLXBhZGRpbmc6IDAuNXJlbTtcXG4kZXh0cmEtc21hbGwtcGFkZGluZzogMC4yNXJlbTtcXG5cXG46cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAkbWFpbi1jb2xvcjtcXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAkc21hbGwtcGFkZGluZztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxuICBsb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udC1zaXplO1xcbiAgfVxcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkc21hbGwtcGFkZGluZztcXG4gIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcbiAgYm9yZGVyLXJhZGl1czogJHNtYWxsLWJvcmRlci1yYWRpdXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGZhZGUtY29sb3I7XFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuXFxuICAucGxheWVycy5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6ICRjb21tb24tc2l6ZTtcXG4gICAgLnBsYXllciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICAgIH1cXG4gIH1cXG4gIHNlY3Rpb24gPiAub3B0aW9uLmNvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbi5jb250YWluZXIuZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAkY29tbW9uLXNpemU7XFxuICAuY29udGludWUge1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxuICAuY29tcG9uZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAucGxheWVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogJGNvbW1vbi1zaXplO1xcblxcbiAgICBmb250LXNpemU6ICRleHRyYS1sYXJnZS1mb250LXNpemU7XFxuICB9XFxuICAucm90YXRpb24ge1xcbiAgICBoZWlnaHQ6IDMwdnc7XFxuICAgIC8vIHdpZHRoOiAzdnc7XFxuICB9XFxuICAuZ2FtZWJvYXJkLmNvbnRhaW5lciB7XFxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLnNxdWFyZSB7XFxuICAgICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgcmdiKDE2MiwgMTYyLCAxNjIpO1xcbiAgICB9XFxuICB9XFxuICAuc2hpcHMuY29udGFpbmVyIHtcXG4gICAgJGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAkYmFzZS1zaXplOiBjYWxjKHZhcigtLWJhc2UtdW5pdC1zaXplKSAtICRib3JkZXItd2lkdGgpO1xcbiAgICAkc2hpcC1jb2xvcjogJGhpZ2hsaWdodC1jb2xvcjtcXG4gICAgJGJvcmRlci1jb2xvcjogJGdyYXk7XFxuICAgICRib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG4gICAgLnNoaXA6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XFxuICAgIH1cXG4gICAgLnNoaXAge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaGlwLWNvbG9yO1xcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuICAgIC5kZXN0cm95ZXIge1xcbiAgICAgIGhlaWdodDogJGJhc2Utc2l6ZTtcXG4gICAgICB3aWR0aDogY2FsYygkYmFzZS1zaXplICogMik7XFxuICAgIH1cXG4gICAgLnN1Ym1hcmluZSB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuY3J1aXNlciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiAzKTtcXG4gICAgfVxcbiAgICAuYmF0dGxlc2hpcCB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA0KTtcXG4gICAgfVxcbiAgICAuY2FycmllciB7XFxuICAgICAgaGVpZ2h0OiAkYmFzZS1zaXplO1xcbiAgICAgIHdpZHRoOiBjYWxjKCRiYXNlLXNpemUgKiA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTsgKi9cXG4gIHBhZGRpbmc6ICRzbWFsbGVyLXBhZGRpbmc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcbn1cXG5cXG4vKiBDT01NT04gRUxFTUVOVFMgKi9cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAkc21hbGwtYm9yZGVyLXJhZGl1cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRmYWRlLWNvbG9yO1xcbiAgcGFkZGluZzogJHNtYWxsZXItcGFkZGluZztcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICRtYWluLWNvbG9yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuLmZhZGUge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzYTQ3O1xcbn1cXG4ucGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZWVmZjtcXG59XFxuLmludmFsaWQtcGxhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcXG59XFxuLnVzZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIzYzZkO1xcbn1cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjRhNTY7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTE5YjtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZTBmZDtcXG59XFxuLndpbm5lciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxMHB4ICNkOWZmYzY7XFxufVxcblwiLFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUkVTRVQgQlVUVE9OUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBsYXllciBmcm9tICcvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzJztcblxuY29uc3QgUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgbGV0IHNoaXBPcmllbnRhdGlvbiA9ICd2JztcbiAgY29uc3QgY3JlYXRlUGxheWVyRGF0YSA9IChvYmopID0+IHtcbiAgICBpZiAob2JqLmNvbXB1dGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgdHJ1ZSwgb2JqLnNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFBsYXllcihvYmoubmFtZSwgZmFsc2UsIG9iai5zaXplKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUdhbWVFbGVtZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaXplfSwgMWZyKWA7XG4gICAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7cGxheWVyRGF0YS5nYW1lYm9hcmQuc2l6ZX0sIDFmcilgO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHBsYXllckRhdGEuZ2FtZWJvYXJkLnNxdWFyZXMpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgICBzcXVhcmVFbC5kYXRhc2V0LmlkID0gW2Ake2tleX1gXTtcbiAgICAgICAgc3F1YXJlRWwuZGF0YXNldC5vd25lciA9IFtgJHtwbGF5ZXJEYXRhLm5hbWV9YF07XG4gICAgICAgIGdyaWQuYXBwZW5kKHNxdWFyZUVsKTtcbiAgICAgICAgZ3JpZC5zdHlsZS5oZWlnaHQgPSBgMTAwJWA7XG4gICAgICAgIGdyaWQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICB9XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gZ3JpZDtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwbGF5ZXJEYXRhLmdhbWVib2FyZC5zaGlwcykpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7a2V5fWApO1xuICAgICAgICBzaGlwRWwuZGF0YXNldC50eXBlID0gYCR7a2V5fWA7XG4gICAgICAgIHNoaXBFbC5kYXRhc2V0Lm93bmVyID0gYCR7cGxheWVyRGF0YS5uYW1lfWA7XG4gICAgICAgIHNoaXBzLmFwcGVuZChzaGlwRWwpO1xuICAgICAgfVxuICAgICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnLCAnY29udGFpbmVyJyk7XG4gICAgICByZXR1cm4gc2hpcHM7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVSb3RhdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0aW9uJyk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBncmlkQ29udGFpbmVyOiBjcmVhdGVHcmlkKCksXG4gICAgICBzaGlwQ29udGFpbmVyOiBjcmVhdGVTaGlwcygpLFxuICAgICAgYnV0dG9uQ29udGFpbmVyOiBjcmVhdGVSb3RhdGlvbkJ1dHRvbigpLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGRhdGEgPSBjcmVhdGVQbGF5ZXJEYXRhKG9iaik7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZGF0YSxcbiAgICBlbGVtZW50czogY3JlYXRlR2FtZUVsZW1lbnRzKGRhdGEpLFxuICAgIG1hcmtXaW5uZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XG4gICAgfSxcbiAgICBlbmFibGVTaGlwUGxhY2VtZW50KCkge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5zaGlwT3JpZW50YXRpb247XG4gICAgICBlbGVtZW50cy5zaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGNvbnN0IGVuYWJsZURyYWdnYWJsZSA9IGZ1bmN0aW9uIChzaGlwTGlzdCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC52YWx1ZXMoc2hpcExpc3QpKSB7XG4gICAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkU2hpcEV2ZW50TGlzdGVuZXIgPSAoc2hpcExpc3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBzaGlwTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBPYmplY3QudmFsdWVzKHNoaXBzKSkge1xuICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvaHRtbCcsIGAke2UudGFyZ2V0fWApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXIgPSAoc3F1YXJlTGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gc3F1YXJlTGlzdDtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIE9iamVjdC52YWx1ZXMoZ3JpZCkpIHtcbiAgICAgICAgICBpZiAoc3F1YXJlLmlzTGlzdGVuaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNxdWFyZS5pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZVN0ciBvZiBzdGF0dXMuZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2UnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVFbC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXBsYWNlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IG9yaWVudGF0aW9uID0gZ2FtZVByb3BlcnRpZXMucGxhY2VtZW50T3JpZW50YXRpb247XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwID1cbiAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQuc2hpcHNbZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGVdO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlU3RyID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IGRhdGEuZ2FtZWJvYXJkLmNoZWNrUGxhY2VtZW50KFxuICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbixcbiAgICAgICAgICAgICkuZWxlbWVudHM7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc2VsZWN0ZWRTcXVhcmVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1pZD1cIiR7c3F1YXJlU3RyfVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVFbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3Qgb3JpZW50YXRpb24gPSBnYW1lUHJvcGVydGllcy5wbGFjZW1lbnRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPVxuICAgICAgICAgICAgICBkYXRhLmdhbWVib2FyZC5zaGlwc1tlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLmRhdGFzZXQudHlwZV07XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVTdHIgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YS5nYW1lYm9hcmQuY2hlY2tQbGFjZW1lbnQoXG4gICAgICAgICAgICAgIHNxdWFyZVN0cixcbiAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlU3RyIG9mIHN0YXR1cy5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUVsID0gZWxlbWVudHMuZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmVTdHJ9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlRWwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIubW96U291cmNlTm9kZS5kYXRhc2V0LnR5cGUsXG4gICAgICAgICAgICAgICAgICBzcXVhcmVTdHIsXG4gICAgICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5tb3pTb3VyY2VOb2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLm1velNvdXJjZU5vZGUuY2xhc3NMaXN0LmFkZCgndXNlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGxldCBzcXVhcmVTdHIgb2Ygc3RhdHVzLmVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlRWwgPSBlbGVtZW50cy5ncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke3NxdWFyZVN0cn1cIl1gLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZUVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNxdWFyZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcGxhY2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGVuYWJsZURyYWdnYWJsZShlbGVtZW50cy5zaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykpO1xuICAgICAgYWRkU2hpcEV2ZW50TGlzdGVuZXIoZWxlbWVudHMuc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpKTtcbiAgICAgIGFkZEdyaWRFdmVudExpc3RlbmVyKGVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgICB9LFxuICAgIGVuYWJsZUNvbXB1dGVyUGxhY2VtZW50KCkge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YS5nYW1lYm9hcmQuc2hpcHMpKSB7XG4gICAgICAgIGRhdGEuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKHRoaXMuZGF0YS5nYW1lYm9hcmQuc2hpcHNba2V5XSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlU2hpcFBsYWNlbWVudCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICBjb25zdCBzcXVhcmVzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNoaWxkTm9kZXM7XG4gICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc3F1YXJlcykge1xuICAgICAgICBjb25zdCBvbGRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IG9sZFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG9sZFNxdWFyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcXVhcmUsIG9sZFNxdWFyZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmFibGVSZWNlaXZpbmdBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBzcXVhcmVOb2RlIG9mIHNxdWFyZU5vZGVzKSB7XG4gICAgICAgIHNxdWFyZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrQ29udGVudCA9IHRoaXMuZGF0YS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICAgIHNxdWFyZU5vZGUuZGF0YXNldC5pZCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHByb2Nlc3NBdHRhY2soYXR0YWNrQ29udGVudCwgc3F1YXJlTm9kZSk7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICBjb25zdCBzcXVhcmVOb2RlcyA9IHRoaXMuZWxlbWVudHMuZ3JpZENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgcHJvY2Vzc0F0dGFjayA9IChhdHRhY2tSZXN1bHRBcmcsIHNxdWFyZU5vZGUpID0+IHtcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdEFyZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdEFyZykge1xuICAgICAgICAgIHNxdWFyZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBbcmVzdWx0LCBzcXVhcmVdID0gdGhpcy5kYXRhLmdhbWVib2FyZC5yZWNlaXZlQ29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIGNvbnN0IHNxdWFyZU5vZGUgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWlkPVwiJHtzcXVhcmV9XCJdYCxcbiAgICAgICk7XG4gICAgICBwcm9jZXNzQXR0YWNrKHJlc3VsdCwgc3F1YXJlTm9kZSk7XG4gICAgfSxcbiAgICBkaXNhYmxlUmVjZWl2aW5nQXR0YWNrKCkge1xuICAgICAgY29uc3Qgc3F1YXJlTm9kZXMgPSB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgIGZvciAobGV0IHNxdWFyZU5vZGUgb2Ygc3F1YXJlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gc3F1YXJlTm9kZTtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gb2xkU3F1YXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgb2xkU3F1YXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NxdWFyZSwgb2xkU3F1YXJlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhZGVQbGF5ZXIoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICB9LFxuICAgIHVuZmFkZVBsYXllcigpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgIH0sXG4gICAgaGlkZVBsYWNlZFNoaXBzKCkge1xuICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlZCcpO1xuICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNoaXBTcXVhcmVzKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZWQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQbGFjZWRTaGlwcygpIHtcbiAgICAgIGNvbnN0IHNxdWFyZXNEYXRhID0gdGhpcy5kYXRhLmdhbWVib2FyZC5zcXVhcmVzO1xuICAgICAgY29uc3Qgc3F1YXJlc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5ncmlkQ29udGFpbmVyO1xuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNxdWFyZXNEYXRhKSkge1xuICAgICAgICBpZiAodmFsdWUub2NjdXBpZXMpIHtcbiAgICAgICAgICBzcXVhcmVzRWxlbWVudHNcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7a2V5fVwiXWApXG4gICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGlzU2hpcFBsYWNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2FtZWJvYXJkLmlzT25lU2hpcFBsYWNlZCgpO1xuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ29tcG9uZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZm9ybSwgZ2FtZSwgbWVzc2FnZSB9O1xuXG5jb25zdCBmb3JtID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUuaW5wdXQuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGJ1dHRvbjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLFxuICAgIGxlZnRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubGVmdC5jb250YWluZXInKSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAubmFtZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLm5hbWUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0IC5lcnJvcicpLFxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVyOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLmNvbXB1dGVyJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgPiAuc2l6ZScpLFxuICAgICAgICBpbnB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0ID4gLnNpemUgPiBpbnB1dCcpLFxuICAgICAgICBvdXRwdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIucmlnaHQuY29udGFpbmVyJyksXG4gICAgICBuYW1lOiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5uYW1lJyksXG4gICAgICAgIGlucHV0OiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLm5hbWUgPiBpbnB1dCcpLFxuICAgICAgICBlcnJvcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuZXJyb3InKSxcbiAgICAgIH0sXG4gICAgICBjb21wdXRlcjoge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXInKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuY29tcHV0ZXIgPiBpbnB1dCcpLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJpZ2h0ID4gLnNpemUnKSxcbiAgICAgICAgaW5wdXQ6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgPiAuc2l6ZSA+IGlucHV0JyksXG4gICAgICAgIG91dHB1dDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCA+IC5zaXplID4gb3V0cHV0JyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KSgpO1xuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLmNvbnRhaW5lcicpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBsZWZ0UGxheWVyOiB7XG4gICAgICBuYW1lOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLm5hbWUnKSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LnBsYXllcicpLFxuICAgICAgZ2FtZWJvYXJkOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLmdhbWVib2FyZC5jb250YWluZXInKSxcbiAgICAgIHNoaXBzOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmxlZnQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGVmdCAucm90YXRpb24nKSxcbiAgICB9LFxuICAgIGNvbnRpbnVlQnV0dG9uOiBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbnRpbnVlJyksXG4gICAgcmlnaHRQbGF5ZXI6IHtcbiAgICAgIG5hbWU6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLm5hbWUnKSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC5wbGF5ZXInKSxcbiAgICAgIGdhbWVib2FyZDogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCAuZ2FtZWJvYXJkLmNvbnRhaW5lcicpLFxuICAgICAgc2hpcHM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLnNoaXBzLmNvbnRhaW5lcicpLFxuICAgICAgcm90YXRpb25CdXR0b246IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmlnaHQgLnJvdGF0aW9uJyksXG4gICAgfSxcbiAgfTtcbn0pKCk7XG5jb25zdCBtZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UuY29udGFpbmVyJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICB9O1xufSkoKTtcbi8vIGNvbnN0IG9yaWVudGF0aW9uQnV0dG9uID0gKGZ1bmN0aW9uICgpIHtcbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5vcmllbnRhdGlvbicpO1xuLy8gcmV0dXJuIGJ1dHRvbjtcbi8vIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgU2hpcHMgZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzcXVhcmVzID0ge307XG4gIGNvbnN0IHNoaXBzID0gbmV3IFNoaXBzKCk7XG4gIGxldCBpc09uZVNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgY29uc3QgY2hlY2tQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwRGF0YSwgc2hpcE9yaWVudCA9ICd2Jykge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyLnNwbGl0KCcsJykubWFwKChlbCkgPT4gTnVtYmVyKGVsKSk7XG4gICAgaWYgKHNoaXBEYXRhLnBsYWNlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHM6IG51bGwsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChzaGlwT3JpZW50ID09PSAndicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBEYXRhLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBbc3F1YXJlSWRbMF0sIHNxdWFyZUlkWzFdICsgaV0uam9pbigpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgICAgIGlmICghc3F1YXJlc1tuZWlnaGJvdXJTdHJdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlc1tuZWlnaGJvdXJTdHJdPy5vY2N1cGllcykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VyU3RyID0gW3NxdWFyZUlkWzBdICsgaSwgc3F1YXJlSWRbMV1dLmpvaW4oKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChuZWlnaGJvdXJTdHIpO1xuICAgICAgICBpZiAoIXNxdWFyZXNbbmVpZ2hib3VyU3RyXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZXNbbmVpZ2hib3VyU3RyXT8ub2NjdXBpZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcFZlcnRpY2FsbHkgPSBmdW5jdGlvbiAoc3F1YXJlU3RyLCBzaGlwKSB7XG4gICAgaXNPbmVTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZVN0ci5zcGxpdCgnLCcpLm1hcCgoZWwpID0+IE51bWJlcihlbCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IFtzcXVhcmVJZFswXSwgc3F1YXJlSWRbMV0gKyBpXTtcbiAgICAgIGNvbnN0IG5laWdoYm91clN0ciA9IG5laWdoYm91ci5qb2luKCk7XG4gICAgICBzcXVhcmVzW25laWdoYm91clN0cl0ub2NjdXBpZXMgPSBzaGlwO1xuICAgICAgc2VsZWN0ZWRTcXVhcmVzLnB1c2gobmVpZ2hib3VyU3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3F1YXJlcztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKHNxdWFyZVN0ciwgc2hpcCkge1xuICAgIGlzT25lU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzZWxlY3RlZFNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBbc3F1YXJlSWRbMF0gKyBpLCBzcXVhcmVJZFsxXV07XG4gICAgICBjb25zdCBuZWlnaGJvdXJTdHIgPSBuZWlnaGJvdXIuam9pbigpO1xuICAgICAgc3F1YXJlc1tuZWlnaGJvdXJTdHJdLm9jY3VwaWVzID0gc2hpcDtcbiAgICAgIHNlbGVjdGVkU3F1YXJlcy5wdXNoKG5laWdoYm91clN0cik7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNxdWFyZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2hlY2tQbGFjZW1lbnQsXG4gICAgc3F1YXJlcyxcbiAgICBzaGlwcyxcbiAgICBpc09uZVNoaXBQbGFjZWQ6ICgpID0+IHtcbiAgICAgIHJldHVybiBpc09uZVNoaXBQbGFjZWQ7XG4gICAgfSxcbiAgICBjcmVhdGVCb2FyZChzaXplID0gMTApIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgIHRoaXMuc3F1YXJlc1tgJHtbaiwgaV19YF0gPSB7XG4gICAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgICAgICBvY2N1cGllczogbnVsbCxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zcXVhcmVzO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCBzcXVhcmVTdHIsIG5ld09yaWVudCA9ICd2Jykge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVTdHIuc3BsaXQoJywnKS5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKTtcbiAgICAgIGNvbnN0IHNoaXBPcmllbnQgPSBuZXdPcmllbnQ7XG4gICAgICBpZiAoY2hlY2tQbGFjZW1lbnQoc3F1YXJlU3RyLCBzaGlwLCBuZXdPcmllbnQpPy52YWxpZCkge1xuICAgICAgICBpZiAoc2hpcE9yaWVudCA9PT0gJ3YnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBWZXJ0aWNhbGx5KHNxdWFyZVN0ciwgc2hpcCwgc2hpcE9yaWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcE9yaWVudCA9PT0gJ2gnKSB7XG4gICAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc3F1YXJlU3RyLCBzaGlwLCBzaGlwT3JpZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlclBsYWNlU2hpcChzaGlwKSB7XG4gICAgICBjb25zdCBnYW1lYm9hcmRTaXplID0gdGhpcy5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIGNvbnN0IHNoaXBPcmllbnRBcnIgPSBbJ3YnLCAnaCddO1xuICAgICAgICBjb25zdCByYW5kb21PcmllbnQgPVxuICAgICAgICAgIHNoaXBPcmllbnRBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcE9yaWVudEFyci5sZW5ndGgpXTtcblxuICAgICAgICBpZiAoY2hlY2tQbGFjZW1lbnQocmFuZG9tU3F1YXJlLCBzaGlwLCByYW5kb21PcmllbnQpLnZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIFtzaGlwLm5hbWUsIHJhbmRvbVNxdWFyZSwgcmFuZG9tT3JpZW50XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tUGxhY2VtZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCByYW5kb20gPSByYW5kb21QbGFjZW1lbnQoKTtcbiAgICAgIHRoaXMucGxhY2VTaGlwKC4uLnJhbmRvbSk7XG4gICAgfSxcbiAgICBhcmVTaGlwc1N1bmsoKSB7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIE9iamVjdC5rZXlzKHRoaXMuc2hpcHMpKSB7XG4gICAgICAgIGlmICghdGhpcy5zaGlwc1tzaGlwXS5pc1N1bmsoKSAmJiB0aGlzLnNoaXBzW3NoaXBdLnBsYWNlZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKHNxdWFyZVN0cikge1xuICAgICAgY29uc3Qgc3F1YXJlSWRTdHIgPSBzcXVhcmVTdHI7XG4gICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLnNxdWFyZXNbc3F1YXJlSWRTdHJdO1xuXG4gICAgICBpZiAoIXNxdWFyZSkge1xuICAgICAgICByZXR1cm4gYE91dCBvZiBib3VuZHNgO1xuICAgICAgfSBlbHNlIGlmIChzcXVhcmUuaXNIaXQpIHtcbiAgICAgICAgcmV0dXJuIGBBbHJlYWR5IGhpdGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVhcmUuaXNIaXQgPSB0cnVlO1xuICAgICAgICBpZiAoc3F1YXJlLm9jY3VwaWVzKSB7XG4gICAgICAgICAgc3F1YXJlLm9jY3VwaWVzLmhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmUub2NjdXBpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWNlaXZlQ29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICBjb25zdCBjaGVja0lmUG9zc2libGVIaXQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IFtzcXVhcmVTdHIsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzcXVhcmVzKSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5pc0hpdCAmJiB2YWx1ZS5vY2N1cGllcykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3F1YXJlU3RyLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICAgICAgICBbMCwgMV0sXG4gICAgICAgICAgICAgIFsxLCAwXSxcbiAgICAgICAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBjcmVhdGVNb3ZlID0gZnVuY3Rpb24gKHNxdWFyZVN0cmluZywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgTnVtYmVyKHNxdWFyZUlkWzBdKSArIE51bWJlcihkaXJlY3Rpb25bMF0pLFxuICAgICAgICAgICAgICAgIE51bWJlcihzcXVhcmVJZFsxXSkgKyBOdW1iZXIoZGlyZWN0aW9uWzFdKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9ucykge1xuICAgICAgICAgICAgICBsZXQgbmV3UG9zc2libGVUYXJnZXQgPSBjcmVhdGVNb3ZlKFxuICAgICAgICAgICAgICAgIHNxdWFyZS5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICApLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNxdWFyZXNbbmV3UG9zc2libGVUYXJnZXRdPy5pc0hpdCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgIHNxdWFyZXNbbmV3UG9zc2libGVUYXJnZXRdPy5vY2N1cGllc1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NzaWJsZVRhcmdldCA9IGNyZWF0ZU1vdmUoXG4gICAgICAgICAgICAgICAgICBuZXdQb3NzaWJsZVRhcmdldCxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICApLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgICBzcXVhcmVzW25ld1Bvc3NpYmxlVGFyZ2V0XSAmJlxuICAgICAgICAgICAgICAgICAgc3F1YXJlc1tuZXdQb3NzaWJsZVRhcmdldF0/Lm9jY3VwaWVzXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc3F1YXJlc1tuZXdQb3NzaWJsZVRhcmdldF0/LmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UG9zc2libGVUYXJnZXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBuZXdQb3NzaWJsZVRhcmdldCA9IGNyZWF0ZU1vdmUoXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc3NpYmxlVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICApLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdQb3NzaWJsZVRhcmdldCA9IGNyZWF0ZU1vdmUoXG4gICAgICAgICAgICAgICAgc3F1YXJlLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICkuam9pbignLCcpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQb3NzaWJsZVRhcmdldCk7XG4gICAgICAgICAgICAgIGlmIChzcXVhcmVzW25ld1Bvc3NpYmxlVGFyZ2V0XT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bvc3NpYmxlVGFyZ2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLnNpemU7XG4gICAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoZ2FtZWJvYXJkU2l6ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkU2l6ZSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBgJHtyYW5kb21OdW1iZXIoZ2FtZWJvYXJkU2l6ZSl9LCR7cmFuZG9tTnVtYmVyKFxuICAgICAgICAgIGdhbWVib2FyZFNpemUsXG4gICAgICAgICl9YDtcbiAgICAgICAgdGhpcy5zcXVhcmVzW3NxdWFyZV07XG4gICAgICAgIGlmICh0aGlzLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBwb3NzaWJsZUhpdCA9IGNoZWNrSWZQb3NzaWJsZUhpdCgpO1xuICAgICAgaWYgKHBvc3NpYmxlSGl0KSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yZWNlaXZlQXR0YWNrKHBvc3NpYmxlSGl0KSwgcG9zc2libGVIaXRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3EgPSByYW5kb21TcXVhcmUoKTtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlY2VpdmVBdHRhY2socmFuZG9tU3EpLCByYW5kb21TcV07XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFBsYXllckNvbXBvbmVudHMgZnJvbSAnL3NyYy9jb21wb25lbnRzL1BsYXllckNvbXBvbmVudHMuanMnO1xuaW1wb3J0IHtcbiAgZm9ybSBhcyBmb3JtV2luZG93LFxuICBnYW1lIGFzIGdhbWVXaW5kb3csXG4gIG1lc3NhZ2UgYXMgbWVzc2FnZVdpbmRvdyxcbn0gZnJvbSAnL3NyYy9jb21wb25lbnRzL2RvbS5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMnO1xuY29uc3QgR2FtZWxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICBjb25zdCBwcm9jZXNzRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG93RWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgY29uc3QgbGVmdFBsYXllciA9IGZvcm1XaW5kb3cubGVmdFBsYXllcjtcbiAgICBjb25zdCByaWdodFBsYXllciA9IGZvcm1XaW5kb3cucmlnaHRQbGF5ZXI7XG4gICAgY29uc3QgdG9nZ2xlUGxheWVySW5wdXQgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAocGxheWVyLmNvbXB1dGVyLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgcGxheWVyLm5hbWUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgLy8gcGxheWVyLnNpemUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXIubmFtZS5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGxheWVyLnNpemUuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgcGxheWVyLm5hbWUuaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxlZnRQbGF5ZXIuY29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlUGxheWVySW5wdXQobGVmdFBsYXllcik7XG4gICAgfSk7XG4gICAgcmlnaHRQbGF5ZXIuY29tcHV0ZXIuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlUGxheWVySW5wdXQocmlnaHRQbGF5ZXIpO1xuICAgIH0pO1xuICAgIGxlZnRQbGF5ZXIuc2l6ZS5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIGRpc3BsYXlTbGlkZXJWYWx1ZShsZWZ0UGxheWVyKTtcbiAgICB9KTtcbiAgICByaWdodFBsYXllci5zaXplLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZGlzcGxheVNsaWRlclZhbHVlKHJpZ2h0UGxheWVyKTtcbiAgICB9KTtcbiAgICBmb3JtV2luZG93LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsZWZ0UGxheWVyVmFsaWQgPSBsZWZ0UGxheWVyLm5hbWUuaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gICAgICBjb25zdCByaWdodFBsYXllclZhbGlkID0gcmlnaHRQbGF5ZXIubmFtZS5pbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG5cbiAgICAgIGlmIChsZWZ0UGxheWVyVmFsaWQgJiYgcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICBoaWRlRWxlbWVudChmb3JtV2luZG93LmNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIgPSBnZXRGb3JtSW5wdXQobGVmdFBsYXllcik7XG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyID0gZ2V0Rm9ybUlucHV0KHJpZ2h0UGxheWVyKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMucGhhc2UgPSBwaGFzZXMuY29tcG9uZW50Q3JlYXRpb247XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICAgIGZvcm1XaW5kb3cuY29udGFpbmVyLnJlc2V0KCk7XG4gICAgICAgIHRvZ2dsZVBsYXllcklucHV0KGxlZnRQbGF5ZXIpO1xuICAgICAgICB0b2dnbGVQbGF5ZXJJbnB1dChyaWdodFBsYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxlZnRQbGF5ZXJWYWxpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgZGlzcGxheUVycm9yKGxlZnRQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmlnaHRQbGF5ZXJWYWxpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgICAgICAgZGlzcGxheUVycm9yKHJpZ2h0UGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvbnRhaW5lciwgbXNnKSB7XG4gICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1zZztcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXlTbGlkZXJWYWx1ZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgIHBsYXllci5zaXplLm91dHB1dC50ZXh0Q29udGVudCA9IHBsYXllci5zaXplLmlucHV0LnZhbHVlO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Rm9ybUlucHV0ID0gZnVuY3Rpb24gKHBsYXllckFyZykge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyQXJnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIGNvbXB1dGVyOiBwbGF5ZXIuY29tcHV0ZXIuaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgc2l6ZTogcGxheWVyLnNpemUuaW5wdXQudmFsdWUsXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheUVycm9yID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllci5uYW1lLmlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBzaG93RXJyb3IocGxheWVyLm5hbWUuZXJyb3IsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlTWVzc2FnZSA9IGZ1bmN0aW9uIChjb250YWluZXIgPSBtZXNzYWdlV2luZG93LmNvbnRhaW5lcikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIuZGF0YS5uYW1lfWA7XG4gICAgICB9LFxuICAgICAgdHVybjogKHBsYXllcikgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEl0IGlzICR7cGxheWVyLmRhdGEubmFtZX0ncyB0dXJuYDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChwbGF5ZXJDb21wb25lbnRzKSB7XG4gICAgcGxheWVyQ29tcG9uZW50cz8uZWxlbWVudHMuZ3JpZENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBwbGF5ZXJDb21wb25lbnRzPy5lbGVtZW50cy5zaGlwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHBsYXllckNvbXBvbmVudHM/LmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcbiAgY29uc3QgYXBwZW5kUGxheWVyQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb250YWluZXIsIHBsYXllckNvbXBvbmVudHMpIHtcbiAgICBjb250YWluZXIuZ2FtZWJvYXJkLmFwcGVuZChwbGF5ZXJDb21wb25lbnRzLmVsZW1lbnRzLmdyaWRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5zaGlwcy5hcHBlbmQocGxheWVyQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIucm90YXRpb25CdXR0b24uYXBwZW5kKHBsYXllckNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyKTtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoQWN0aXZlUGxheWVyID0gZnVuY3Rpb24gKGdhbWVQcm9wZXJ0aWVzQXJnKSB7XG4gICAgY29uc3QgdGVtcCA9IGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHM7XG4gICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cyA9IGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cztcbiAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMgPSB0ZW1wO1xuICB9O1xuICBjb25zdCBwcm9jZXNzUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBjb25zdCBnYW1lUHJvcGVydGllcyA9IGdhbWVQcm9wZXJ0aWVzQXJnO1xuICAgIGNvbnN0IGdhbWVFbGVtZW50cyA9IGdhbWVXaW5kb3c7XG4gICAgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAwKSB7XG4gICAgICByZW1vdmVQbGF5ZXJDb21wb25lbnRzKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgcmVtb3ZlUGxheWVyQ29tcG9uZW50cyhnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMpO1xuICAgICAgaGlkZUVsZW1lbnQoZ2FtZVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgc2hvd0VsZW1lbnQoZm9ybVdpbmRvdy5jb250YWluZXIpO1xuICAgICAgcHJvY2Vzc0Zvcm0oKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAxKSB7XG4gICAgICBnYW1lV2luZG93LmxlZnRQbGF5ZXIubmFtZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLmxlZnRQbGF5ZXIubmFtZTtcbiAgICAgIGdhbWVXaW5kb3cucmlnaHRQbGF5ZXIubmFtZS50ZXh0Q29udGVudCA9IGZvcm1EYXRhLnJpZ2h0UGxheWVyLm5hbWU7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzID0gbmV3IFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGZvcm1EYXRhLmxlZnRQbGF5ZXIsXG4gICAgICApO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzID0gbmV3IFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGZvcm1EYXRhLnJpZ2h0UGxheWVyLFxuICAgICAgKTtcbiAgICAgIGFwcGVuZFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGdhbWVFbGVtZW50cy5sZWZ0UGxheWVyLFxuICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLFxuICAgICAgKTtcbiAgICAgIGFwcGVuZFBsYXllckNvbXBvbmVudHMoXG4gICAgICAgIGdhbWVFbGVtZW50cy5yaWdodFBsYXllcixcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLFxuICAgICAgKTtcbiAgICAgIHNob3dFbGVtZW50KGdhbWVXaW5kb3cuY29udGFpbmVyKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLnN0YXJ0aW5nO1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAyKSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5zaGlwUGxhY2VtZW50O1xuICAgICAgcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSAzKSB7XG4gICAgICBpZiAoIWdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbGVtZW50cy5zaGlwQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLmJ1dHRvbkNvbnRhaW5lcj8ucmVtb3ZlKCk7XG4gICAgICAgICAgcmV0dXJuIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5lbmFibGVTaGlwUGxhY2VtZW50KCk7XG4gICAgICB9IGVsc2UgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuaXNTaGlwUGxhY2VkKCkpIHtcbiAgICAgICAgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5oaWRlUGxhY2VkU2hpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmRhdGEuaXNDb21wdXRlciAmJlxuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5pc0NvbXB1dGVyXG4gICAgICAgICkge1xuICAgICAgICAgIGdhbWVQcm9wZXJ0aWVzLmluYWN0aXZlQ29tcG9uZW50cy5zaG93UGxhY2VkU2hpcHMoKTtcbiAgICAgICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuc2hpcENvbnRhaW5lcj8ucmVtb3ZlKCk7XG4gICAgICAgIGdhbWVQcm9wZXJ0aWVzLmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVsZW1lbnRzLnNoaXBDb250YWluZXI/LnJlbW92ZSgpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZWxlbWVudHMuYnV0dG9uQ29udGFpbmVyPy5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy51bmZhZGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy5wbGF5aW5nO1xuICAgICAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ2FtZVByb3BlcnRpZXMucGhhc2UgPT09IDQpIHtcbiAgICAgIGlmIChnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZGF0YS5jaGVja0Zvckxvc3MoKSkge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5waGFzZSA9IHBoYXNlcy53aW47XG4gICAgICAgIHByb2Nlc3NQaGFzZShnYW1lUHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICBzd2l0Y2hBY3RpdmVQbGF5ZXIoZ2FtZVByb3BlcnRpZXMpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5mYWRlUGxheWVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMudW5mYWRlUGxheWVyKCk7XG4gICAgICBpZiAoZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5kYXRhLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLmVuYWJsZVJlY2VpdmluZ0NvbXB1dGVyQXR0YWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lUHJvcGVydGllcy5pbmFjdGl2ZUNvbXBvbmVudHMuZW5hYmxlUmVjZWl2aW5nQXR0YWNrKCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VNZXNzYWdlKCkudHVybihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVQcm9wZXJ0aWVzLnBoYXNlID09PSA1KSB7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnVuZmFkZVBsYXllcigpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuYWN0aXZlQ29tcG9uZW50cy5tYXJrV2lubmVyKCk7XG4gICAgICBnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgZ2FtZVByb3BlcnRpZXMuaW5hY3RpdmVDb21wb25lbnRzLnNob3dQbGFjZWRTaGlwcygpO1xuICAgICAgY2hhbmdlTWVzc2FnZSgpLndpbihnYW1lUHJvcGVydGllcy5hY3RpdmVDb21wb25lbnRzKTtcbiAgICAgIGdhbWVQcm9wZXJ0aWVzLnBoYXNlID0gcGhhc2VzLmZvcm1Qcm9jZXNzaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKiBJTklUSUFMSVpBVElOICovXG5cbiAgY29uc3QgcGhhc2VzID0ge1xuICAgIGZvcm1Qcm9jZXNzaW5nOiAwLFxuICAgIGNvbXBvbmVudENyZWF0aW9uOiAxLFxuICAgIHN0YXJ0aW5nOiAyLFxuICAgIHNoaXBQbGFjZW1lbnQ6IDMsXG4gICAgcGxheWluZzogNCxcbiAgICB3aW46IDUsXG4gIH07XG4gIGNvbnN0IGdhbWVQcm9wZXJ0aWVzID0ge1xuICAgIHBoYXNlOiBwaGFzZXMuZm9ybVByb2Nlc3NpbmcsXG4gICAgcGxhY2VtZW50T3JpZW50YXRpb246ICd2JyxcbiAgICBhY3RpdmVDb21wb25lbnRzOiBudWxsLFxuICAgIGluYWN0aXZlQ29tcG9uZW50czogbnVsbCxcbiAgfTtcbiAgY29uc3Qgc2tpcEZvcm1QaGFzZSA9IGZ1bmN0aW9uIChnYW1lUHJvcGVydGllc0FyZywgZm9ybURhdGFBcmcpIHtcbiAgICAvLyBjb25zdCBsZWZ0UGxheWVyRGF0YSA9IHt9XG4gICAgZm9ybURhdGFBcmcubGVmdFBsYXllciA9IHtcbiAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgIHNpemU6ICc4JyxcbiAgICAgIGNvbXB1dGVyOiBmYWxzZSxcbiAgICB9O1xuICAgIGZvcm1EYXRhQXJnLnJpZ2h0UGxheWVyID0ge1xuICAgICAgbmFtZTogJ1NhcmFoJyxcbiAgICAgIHNpemU6ICcxMicsXG4gICAgICBjb21wdXRlcjogZmFsc2UsXG4gICAgfTtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy5jb21wb25lbnRDcmVhdGlvbjtcbiAgfTtcbiAgY29uc3Qgc2tpcFRvV2luUGhhc2UgPSBmdW5jdGlvbiAoZ2FtZVByb3BlcnRpZXNBcmcpIHtcbiAgICBnYW1lUHJvcGVydGllc0FyZy5waGFzZSA9IHBoYXNlcy53aW47XG4gIH07XG4gIC8vIHNraXBGb3JtUGhhc2UoZ2FtZVByb3BlcnRpZXMsIGZvcm1EYXRhKTtcbiAgLy8gcHJvY2Vzc1BoYXNlKGdhbWVQcm9wZXJ0aWVzKTtcbiAgLy8gc2tpcFRvV2luUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICBnYW1lV2luZG93LmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9jZXNzUGhhc2UoZ2FtZVByb3BlcnRpZXMpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVsb29wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwcyBmcm9tICcuL3NoaXAuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSA9ICdDb21wdXRlcicsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgc2l6ZSkge1xuICBjb25zdCBhdHRhY2hHYW1lYm9hcmQgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuY3JlYXRlQm9hcmQoc2l6ZSk7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGlzQ29tcHV0ZXI6IGlzQ29tcHV0ZXIsXG4gICAgcHJldmlvdXNIaXQ6IGZhbHNlLFxuICAgIGdhbWVib2FyZDogYXR0YWNoR2FtZWJvYXJkKHNpemUpLFxuICAgIGF0dGFjayhlbmVteSwgbW92ZSkge1xuICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgIH0sXG4gICAgY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZFNpemUgPSB0aGlzLmdhbWVib2FyZC5zaXplO1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKGdhbWVib2FyZFNpemUpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZFNpemUpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gYCR7cmFuZG9tTnVtYmVyKGdhbWVib2FyZFNpemUpfSwke3JhbmRvbU51bWJlcihcbiAgICAgICAgICBnYW1lYm9hcmRTaXplLFxuICAgICAgICApfWA7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLnNxdWFyZXNbc3F1YXJlXT8uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmFuZG9tU3F1YXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tU3F1YXJlKCkpO1xuICAgIH0sXG4gICAgY2hlY2tGb3JMb3NzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmFyZVNoaXBzU3VuaygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoaXAgPSBmdW5jdGlvbiAoc2l6ZSwgbmFtZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgbmFtZTogbmFtZSxcbiAgICAvLyBzdGFydDogdW5kZWZpbmVkLFxuICAgIG9yaWVudDogJ3YnLFxuICAgIGhpdHM6IDAsXG4gICAgcGxhY2VkOiBmYWxzZSxcbiAgICBoaXQoKSB7XG4gICAgICByZXR1cm4gKyt0aGlzLmhpdHM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5jb25zdCBTaGlwcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIsICdkZXN0cm95ZXInKSxcbiAgICBzdWJtYXJpbmU6IG5ldyBTaGlwKDMsICdzdWJtYXJpbmUnKSxcbiAgICBjcnVpc2VyOiBuZXcgU2hpcCgzLCAnY3J1aXNlcicpLFxuICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQsICdiYXR0bGVzaGlwJyksXG4gICAgY2FycmllcjogbmV3IFNoaXAoNSwgJ2NhcnJpZXInKSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9nYW1lbG9vcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuc2Nzcyc7XG4vLyBpbXBvcnQgR2FtZWxvb3AgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVsb29wLmpzJztcbi8vIGltcG9ydCB7IGdhbWUsIGZvcm0gfSBmcm9tICcvc3JjL2NvbXBvbmVudHMvZG9tLmpzJztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJQbGF5ZXIiLCJQbGF5ZXJDb21wb25lbnRzIiwib2JqIiwic2hpcE9yaWVudGF0aW9uIiwiY3JlYXRlUGxheWVyRGF0YSIsImNvbXB1dGVyIiwibmFtZSIsInNpemUiLCJjcmVhdGVHYW1lRWxlbWVudHMiLCJwbGF5ZXJEYXRhIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYW1lYm9hcmQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiT2JqZWN0Iiwia2V5cyIsInNxdWFyZXMiLCJrZXkiLCJzcXVhcmVFbCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJvd25lciIsImFwcGVuZCIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlU2hpcHMiLCJzaGlwcyIsInNoaXBFbCIsInR5cGUiLCJjcmVhdGVSb3RhdGlvbkJ1dHRvbiIsImJ1dHRvbiIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDb250YWluZXIiLCJzaGlwQ29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiZWxlbWVudHMiLCJtYXJrV2lubmVyIiwiZW5hYmxlU2hpcFBsYWNlbWVudCIsInJvdGF0aW9uIiwicmVtb3ZlIiwiZW5hYmxlRHJhZ2dhYmxlIiwic2hpcExpc3QiLCJ2YWx1ZXMiLCJzaGlwIiwic2V0QXR0cmlidXRlIiwiYWRkU2hpcEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRhcmdldCIsImFkZEdyaWRFdmVudExpc3RlbmVyIiwic3F1YXJlTGlzdCIsInNxdWFyZSIsImlzTGlzdGVuaW5nIiwicHJldmVudERlZmF1bHQiLCJtb3pTb3VyY2VOb2RlIiwic3F1YXJlU3RyIiwic3RhdHVzIiwiY2hlY2tQbGFjZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsaWQiLCJzZWxlY3RlZFNxdWFyZXMiLCJwbGFjZVNoaXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5hYmxlQ29tcHV0ZXJQbGFjZW1lbnQiLCJjb21wdXRlclBsYWNlU2hpcCIsImRpc2FibGVTaGlwUGxhY2VtZW50IiwiY2hpbGROb2RlcyIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJlbmFibGVSZWNlaXZpbmdBdHRhY2siLCJzcXVhcmVOb2RlcyIsInByb2Nlc3NBdHRhY2siLCJhdHRhY2tSZXN1bHRBcmciLCJzcXVhcmVOb2RlIiwiYXR0YWNrQ29udGVudCIsInJlY2VpdmVBdHRhY2siLCJkaXNhYmxlUmVjZWl2aW5nQXR0YWNrIiwiZW5hYmxlUmVjZWl2aW5nQ29tcHV0ZXJBdHRhY2siLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJyZXN1bHQiLCJmYWRlUGxheWVyIiwidW5mYWRlUGxheWVyIiwiaGlkZVBsYWNlZFNoaXBzIiwic2hpcFNxdWFyZXMiLCJzaG93UGxhY2VkU2hpcHMiLCJzcXVhcmVzRGF0YSIsInNxdWFyZXNFbGVtZW50cyIsImVudHJpZXMiLCJ2YWx1ZSIsIm9jY3VwaWVzIiwiaXNTaGlwUGxhY2VkIiwiaXNPbmVTaGlwUGxhY2VkIiwiZm9ybSIsImdhbWUiLCJtZXNzYWdlIiwiY29udGFpbmVyIiwibGVmdFBsYXllciIsImlucHV0IiwiZXJyb3IiLCJvdXRwdXQiLCJyaWdodFBsYXllciIsInJvdGF0aW9uQnV0dG9uIiwiY29udGludWVCdXR0b24iLCJTaGlwcyIsIkdhbWVib2FyZCIsInNoaXBEYXRhIiwic2hpcE9yaWVudCIsInNxdWFyZUlkIiwic3BsaXQiLCJlbCIsIk51bWJlciIsInBsYWNlZCIsIm5laWdoYm91clN0ciIsInBsYWNlU2hpcFZlcnRpY2FsbHkiLCJuZWlnaGJvdXIiLCJwbGFjZVNoaXBIb3Jpem9udGFsbHkiLCJjcmVhdGVCb2FyZCIsImoiLCJpc0hpdCIsInNoaXBOYW1lIiwibmV3T3JpZW50IiwiZ2FtZWJvYXJkU2l6ZSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVBsYWNlbWVudCIsInJhbmRvbVNxdWFyZSIsInNoaXBPcmllbnRBcnIiLCJyYW5kb21PcmllbnQiLCJhcmVTaGlwc1N1bmsiLCJpc1N1bmsiLCJzcXVhcmVJZFN0ciIsImhpdCIsImNoZWNrSWZQb3NzaWJsZUhpdCIsImRpcmVjdGlvbnMiLCJjcmVhdGVNb3ZlIiwic3F1YXJlU3RyaW5nIiwiZGlyZWN0aW9uIiwibmV3UG9zc2libGVUYXJnZXQiLCJwb3NzaWJsZUhpdCIsInJhbmRvbVNxIiwiZm9ybVdpbmRvdyIsImdhbWVXaW5kb3ciLCJtZXNzYWdlV2luZG93IiwiR2FtZWxvb3AiLCJmb3JtRGF0YSIsInByb2Nlc3NGb3JtIiwic2hvd0VsZW1lbnQiLCJ0b2dnbGVQbGF5ZXJJbnB1dCIsInBsYXllciIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImRpc3BsYXlTbGlkZXJWYWx1ZSIsImxlZnRQbGF5ZXJWYWxpZCIsInZhbGlkaXR5IiwicmlnaHRQbGF5ZXJWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJoaWRlRWxlbWVudCIsImdldEZvcm1JbnB1dCIsImdhbWVQcm9wZXJ0aWVzIiwicGhhc2UiLCJwaGFzZXMiLCJjb21wb25lbnRDcmVhdGlvbiIsInByb2Nlc3NQaGFzZSIsInJlc2V0IiwiZGlzcGxheUVycm9yIiwic2hvd0Vycm9yIiwiZXJyb3JDb250YWluZXIiLCJtc2ciLCJwbGF5ZXJBcmciLCJ2YWx1ZU1pc3NpbmciLCJjaGFuZ2VNZXNzYWdlIiwibWVzc2FnZUNvbnRhaW5lciIsIndpbiIsInR1cm4iLCJyZW1vdmVQbGF5ZXJDb21wb25lbnRzIiwicGxheWVyQ29tcG9uZW50cyIsImFwcGVuZFBsYXllckNvbXBvbmVudHMiLCJzd2l0Y2hBY3RpdmVQbGF5ZXIiLCJnYW1lUHJvcGVydGllc0FyZyIsInRlbXAiLCJhY3RpdmVDb21wb25lbnRzIiwiaW5hY3RpdmVDb21wb25lbnRzIiwiZ2FtZUVsZW1lbnRzIiwic3RhcnRpbmciLCJzaGlwUGxhY2VtZW50IiwiaXNDb21wdXRlciIsInBsYXlpbmciLCJjaGVja0Zvckxvc3MiLCJmb3JtUHJvY2Vzc2luZyIsInBsYWNlbWVudE9yaWVudGF0aW9uIiwic2tpcEZvcm1QaGFzZSIsImZvcm1EYXRhQXJnIiwic2tpcFRvV2luUGhhc2UiLCJhdHRhY2hHYW1lYm9hcmQiLCJwcmV2aW91c0hpdCIsImF0dGFjayIsImVuZW15IiwibW92ZSIsImNvbXB1dGVyQXR0YWNrIiwiU2hpcCIsIm9yaWVudCIsImhpdHMiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9