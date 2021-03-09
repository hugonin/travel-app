var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--primary-color: #343F4D;--border-radius: 0.5em}html{box-sizing:border-box}body{background-color:var(--primary-color);background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c5c5c5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\");font-family:'Montserrat', sans-serif}h1{color:white;padding:1em;background:rgba(0,0,0,0.5);border-radius:var(--border-radius);cursor:pointer;text-align:center;text-transform:uppercase;width:275px;margin:1.25em auto 0.625em;user-select:none}h1:hover{background:rgba(0,0,0,0.8)}.container{display:grid;justify-content:center;place-content:center}.item{background:rgba(0,0,0,0.5);color:white;border-radius:var(--border-radius);padding:2.5em;margin:1.25em;text-align:center;position:relative}.item:hover{background:rgba(0,0,0,0.6)}a{font-size:1.25em;font-weight:bold;text-transform:uppercase}a:link,a:visited{color:white;text-decoration:none}a:hover,a:active{text-decoration:underline}.fa-times{float:right;cursor:pointer;z-index:2}.city{margin:1.25em 1.25em}.main-image{width:100%;height:auto;vertical-align:sub;margin-right:.3125em}.cta{display:block;padding:.7em;margin-bottom:1em;background-color:var(--primary-color);border-radius:var(--border-radius);color:white;white-space:nowrap}.outline{background:none;border:.125em solid #c5c5c5;color:black}.modal-container{background:rgba(0,0,0,0.6);display:none;position:fixed;top:0;left:0;right:0;bottom:0}.show-modal{display:flex;align-items:center;justify-content:center}.modal{background:#fff;box-shadow:0 0 0.625em rgba(0,0,0,0.8);max-width:95%;width:500px;animation:modalopen 1s}@keyframes modalopen{from{opacity:0}to{opacity:1}}.close-icon{float:right;color:white;font-size:1.5em;position:relative;top:.1em;right:.5em;cursor:pointer}.modal-header{background:var(--primary-color);color:#fff;padding:.25em}h3{margin:0}.modal-content{padding:1.5em;background:whitesmoke}.form-group{height:3.5em}.form-input{width:97%;padding:.3125em;border:0.125em solid var(--primary-color);border-radius:var(--border-radius);display:block;outline:none}.form-label{color:var(--primary-color);display:block}button{cursor:pointer;color:white;background:var(--primary-color);border:none;height:1.875em;width:100px;border-radius:var(--border-radius);margin-top:.625em}button:hover{filter:brightness(110%)}button:focus{outline:none}@media screen and (min-width: 600px){.container{grid-template-columns:1fr}#info-countdown{margin-top:1em;place-self:center}.btn-container{display:flex;justify-content:center}.cta{padding:.7em 1.2em}.outline{margin-left:1em}}@media (min-width: 800px){.container{grid-template-columns:repeat(3, 1fr);grid-template-rows:auto;grid-template-areas:\"image image destination\" \"image image date\" \". . btn\" \". . countdown\" \". . timer\"  \". . temp\" \". . description\"}#placeimage{grid-area:image}#country{grid-area:destination;place-self:center}#date{grid-area:date;place-self:center}#btn-container{grid-area:btn;margin:1em;place-self:center}#info-countdown{grid-area:countdown;place-self:center}#countdown{grid-area:timer}#temp{grid-area:temp}#description{grid-area:description}.btn-container{justify-content:left}}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(6);
var v4 = __webpack_require__(7);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(1);
var bytesToUuid = __webpack_require__(2);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(1);
var bytesToUuid = __webpack_require__(2);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "performAction", function() { return /* reexport */ performAction; });
__webpack_require__.d(__webpack_exports__, "countdownTimer", function() { return /* reexport */ countdownTimer; });
__webpack_require__.d(__webpack_exports__, "showModal", function() { return /* reexport */ showModal; });
__webpack_require__.d(__webpack_exports__, "create_UUID", function() { return /* reexport */ create_UUID; });

// CONCATENATED MODULE: ./src/client/js/countdown.js
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;



function countdownTimer() {
  let dateInput = document.getElementById("date-picker").value;
  let currentDate =  new Date(); 
  let departureDate = new Date(dateInput); 

    const difference = +departureDate - +currentDate;
    let remaining = "";

    if (difference > 0) {
        const parts = {
            days : Math.floor(difference / day),
            hours : Math.floor((difference / hour) % 24),
            minutes : Math.floor((difference / minute) % 60),
            seconds : Math.floor((difference / second) % 60),
        };
        remaining = Object.keys(parts).map(part => {
            return `${parts[part]} ${part}`;
         }).join(" ");
    }

  // document.getElementById("countdown").innerHTML = ` ${remaining}`;

  }
  
countdownTimer();
setInterval(countdownTimer, 1000);



// CONCATENATED MODULE: ./src/client/js/showModal.js
const showModal_modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const cityNameEl = document.getElementById('city-name');

// Show Modal, Focus on Input
function showModal() {
	showModal_modal.classList.add('show-modal');
	cityNameEl.focus();
}


// CONCATENATED MODULE: ./src/client/js/createId.js

function create_UUID(){
    // returns a unique id
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    
// CONCATENATED MODULE: ./src/client/js/app.js






/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const baseUrlWeather = "http://api.weatherbit.io/v2.0/forecast/daily?";
const baseUrlImage = "https://pixabay.com/api/?";
const baseUrlRestCountries = "https://restcountries.eu/rest/v2/name/";
const USERNAME = "hugonin_"; // Geonames
const API_KEY_1 = "7ef1e110e00c49abb914bc08eddf17c6"; // WeatherBit 
const API_KEY_2 = "5463371-fdf4fcef6ada1fce8e8a016d5" // Pixabay 
const { v4: uuidv4 } = __webpack_require__(5);
uuidv4();
const booktripForm = document.getElementById('booktrip-form');
const booktripsContainer = document.getElementById('booktrips-container');
let booktrips = {};
//const remaining = countdownTimer();
const app_currentId = create_UUID();
let urls = [];

async function performAction(event) {
    event.preventDefault()

    let cityName = document.getElementById("city-name").value;
    let date = document.getElementById("date-picker").value;
   

    const dLocation = await getCityInfo(baseUrl, cityName, USERNAME)
    const cityUrl = await postData('/add', { cityLat: dLocation.geonames[0].lat, cityLong: dLocation.geonames[0].lng, city: cityName, country: dLocation.geonames[0].countryName, date: date })
    const dWeather = await getWeather(baseUrlWeather, dLocation.geonames[0].lat, dLocation.geonames[0].lng, API_KEY_1)
    const weatherUrl = await postData('/add', { temp: dWeather.data[0].temp, description: dWeather.data[0].weather.description, icon: dWeather.data[0].weather.icon, maxTemp: dWeather.data[0].max_temp, minTemp: dWeather.data[0].min_temp})
    const dRestCountries = await getRestCountries(baseUrlRestCountries, dLocation.geonames[0].countryName)
    const restCountriesUrl = await postData('/add', { population: dRestCountries.population})
    const dImage = await getImage(baseUrlImage, cityName, API_KEY_2)
    const imageUrl = await postData('/add', { image: dImage.hits[0].webformatURL })
  
    

    urls.push(cityUrl, weatherUrl,imageUrl, restCountriesUrl)

    async function logInOrder(urls) {
        const dataPromises = urls.map(async url => {
            const response = await fetch(url);
            console.log(response)
            return response.data();
        });

        for (const dataPromise of dataPromises) {
            console.log( await dataPromise)
        }
    }
  buildBooktrips();
  fetchBooktrips();
  storeBooktrip(event);
}



// asynchronous function to fetch the data from the geonames app endpoint  
const getCityInfo = async (url, city, username) => {

    const res = await fetch(url + `${city}&maxRows=1&username=${username}`)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error)
    }
};

// asynchronous function to fetch the data from the weatherBit app endpoint  
const getWeather = async (url, lat, lon, key ) => {

    const res = await fetch(url + `&lat=${lat}&lon=${lon}&key=${key}`)
    try {
        const weatherData = await res.json();
        console.log(weatherData)
        return weatherData;
    } catch(error) {
        console.log("error", error)
    }
};


// asynchronous function to fetch the data from the pixabay app endpoint  
const getImage = async (url, city, key) => {

    const res = await fetch(url + `&key=${key}&q=${city}&image_type=all,photo`)
    try {
        const imageData = await res.json();
        console.log(imageData)
        return imageData;
    } catch(error) {
        console.log("error", error)
    }
};

// asynchronous function to fetch data from REST countries API
const getRestCountries = async (url, country) => {

    const res = await fetch(url + `${country}`)
    try {
        const restData = await res.json();
        console.log(restData)
        return restData;
    }catch(error) {
        console.log("error", error)
    }
}


// Post Route
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });
    
    try {
        const newData = await response;
        console.log('Data received:', newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
};



const buildBooktrips = async () => {

    const request = await fetch('/all');
    try{
        const allData = await request.json();
        // Remove all booktrip elements
	    booktripsContainer.textContent = '';
	    // Build items
	    Object.keys(booktrips).forEach((currentId) => {

		    const { city, date } = booktrips[currentId];
		    console.log(city, date);
		    // Item
		    const item = document.createElement('div');
		    item.classList.add('item');

		    booktripsContainer.appendChild(item).innerHTML = `
		    <i class="fas fa-times close-icon" title= "Delete booktrip" onclick="${deleteBooktrip(currentId)}')"></i>
		    <img class="main-image" src="${allData.image}" alt="image-of-the-city">
		    <h2 class="info-title-country">My trip to: ${allData.city}, ${allData.country}</h2>
		    <h3 class="info-title-date">Departing: ${allData.date}</h3>
		    <p class="info-countdown">${allData.city}, ${allData.country} is in: <span id="countdown">  </span></p>
		    <p class="info-temp">Typical weather for then is: ${allData.temp}°C, Max: ${allData.maxTemp}°C, Min: ${allData.minTemp}°C</p>
		    <p class="info-description-fineprint">${allData.description}<img height="50" width="50" alt="Weather API Icon" src="https://www.weatherbit.io/static/img/icons/${allData.icon}.png"></p>
		    `;

	    });

    }catch(error) {
        console.log("error", error);
    }
	

}

const fetchBooktrips = async () => {

    const request = await fetch('/all');
    try{
		const allData = await request.json();
       // Get booktrips from localStorage if available
		if (localStorage.getItem('booktrips')) {
			booktrips = JSON.parse(localStorage.getItem('booktrips'));
		} else {
		// Create booktrips object in localStorage
			const currentId = `${create_UUID()} `
			booktrips[currentId] = {
				city: '',
				date: '',
			}
			localStorage.setItem('booktrips', JSON.stringify(booktrips));
		}
		buildBooktrips();
    }catch(error){
      console.log("error", error);
    }
}

const storeBooktrip = async (e) => {

    const request = await fetch('/all');
	e.preventDefault();
    let cityValue = document.getElementById("city-name").value;
    let dateValue = document.getElementById("date-picker").value;
	
    try{
        const allData = await request.json();
		// Set booktrip object, add to array
		const booktrip = {
			city: cityValue,
			date: dateValue,
		};
		booktrips[dateValue] = booktrip;
		// Set booktrips in localStorage, fetch, reset input fields
		localStorage.setItem('booktrips', JSON.stringify(booktrips));
		fetchBooktrips();
		booktripForm.reset();
		document.getElementById("city-name").focus();
    }catch(error){
      console.log("error", error);
    }
}

const deleteBooktrip = async (id) => {

    const request = await fetch('/all');
    try{
        const allData = await request.json();
		// Loop through the bookmarks array
		if (booktrips[id]) {
			delete booktrips[id]
		}
		// Update bookmarks array in localStorage, re-populate DOM
		localStorage.setItem('booktrips', JSON.stringify(booktrips));
		fetchBooktrips();
    }catch(error){
      console.log("error", error);
    }

}

// Event Listener
booktripForm.addEventListener('submit', storeBooktrip);

// On Load, Fetch booktrips
window.onload = fetchBooktrips();

    


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./src/client/styles/style.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var styles_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/client/index.js










const client_booktripForm = document.getElementById('booktrip-form');

// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);
// Modal Event Listeners
document.getElementById('show-modal').addEventListener('click', showModal);
document.getElementById('close-modal').addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));






/***/ })
/******/ ]);