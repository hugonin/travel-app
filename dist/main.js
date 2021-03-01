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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{box-sizing:border-box}body{margin:0;font-family:'Montserrat', sans-serif;font-size:1rem;color:#404040;line-height:1.6}img{max-width:100%}h1{font-size:1.5rem;position:relative;margin-top:1em}h1,h2,strong{font-weight:700}h1:before{content:'';position:absolute;width:30%;height:7px;top:-20px;left:33%;background-color:#7A4900}.info-title-country,.info-title-date{grid-column:2 / -2;color:#000;text-align:center}.info-title-country{font-size:2rem;margin-bottom:.5em;justify-self:center}.info-title-country::after{content:'';display:block;width:100%;height:30px;background:#47946E;margin-top:-40px;margin-left:15px}.info-title-date{margin:.5em 0 3em;font-size:1.125rem}p{font-size:.9rem;line-height:1.4em;width:90%;margin:0 auto 2em}.btn{padding:.5em 1.75em;font-weight:700;margin-top:.5em;text-decoration:none;border:0;cursor:pointer}.btn-primary{background:#7A4900;color:#fff;justify-self:start}.btn-primary:hover,.btn-primary:focus{filter:brightness(120%)}.btn-form{justify-self:end}.cta{display:block;padding:.7em;margin-bottom:1em;background-color:#7A4900;color:white;white-space:nowrap}.outline{background:none;border:2px solid #47946E;color:black}main{padding:1em;text-align:center}.main-grid{display:grid;grid-template-columns:minmax(1em, 1fr) minmax(0px, 500px) minmax(1em, 1fr);grid-column-gap:1em}@media (min-width: 600px){.main-grid{grid-template-columns:1fr 1fr}}header{display:flex;padding:1em;justify-content:space-between}a{color:#7A4900;text-decoration:none;font-weight:bold}.logo{text-transform:uppercase}.menu{width:1.5em;cursor:pointer}ul{position:fixed;top:0;left:0;background:white;height:100vh;width:100%;padding:0;margin:0;list-style:none;display:none;place-content:center;z-index:1}ul li a{color:black;padding:2em;display:block;font-size:1.4rem;margin-left:-4em}.exit svg{width:1.5em;position:absolute;top:1em;right:2em;cursor:pointer}.active a{color:#217C4f}.open-nav{display:grid}.main-template{padding:1em .5em}.main-template>*{grid-column:1 / -1}.secondary-info{margin-top:1em}@media (min-width: 600px){.main-image{grid-column:1 / 2}.main-info{grid-column:1 / span 2;grid-row:span 2}.secondary-info{display:grid;padding:1em 2em;grid-column-gap:2em;grid-template-areas:\"img  title\" \"img  date\" \"img  btn\" \"img  countdown\" \"img  temp\" \"img  description\";grid-template-columns:1fr 1fr}#placeimage{grid-area:img}#country{grid-area:title;justify-self:center}#date{grid-area:date}#btn-container{grid-area:btn;justify-self:center;align-self:center}#countdown{grid-area:countdown}#temp{grid-area:temp}#description{grid-area:description}}.form{display:grid}label{font-weight:700}input,textarea{margin-bottom:.5em;padding:.4em;font-family:inherit}textarea{resize:none;height:100px}@media (min-width: 600px){.form{grid-template-columns:repeat(2, 1fr);grid-auto-flow:dense;grid-column-gap:1em}.city-label,.city-input{grid-column:1}.date-label,.date-input{grid-column:2}.btn-form{grid-column:2}}@media (min-width: 600px){body{font-size:18px}.menu,.exit{display:none}ul{display:flex;background:none;height:unset;position:unset;text-transform:uppercase}ul li a{font-size:.9em;margin-left:unset;padding:0 .5rem}h1{font-size:2.5em}p{font-size:1em}.btn-container{display:flex;justify-content:center}.cta{padding:.7em 1.2em}.outline{margin-left:1em}}@media (min-width: 800px){body{background:white}main{text-align:left;width:90%;margin-left:2em}p{width:100%}.btn-container{justify-content:left}h1:before{width:10%;left:0}.content-wrapper{display:flex}}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "performAction", function() { return /* reexport */ performAction; });
__webpack_require__.d(__webpack_exports__, "countdownTimer", function() { return /* reexport */ countdownTimer; });

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
    let remaining = "Time's up!";

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

document.getElementById("countdown").innerHTML = ` My trip is ${remaining} away`;
  }
  
countdownTimer();
setInterval(countdownTimer, 1000);


// CONCATENATED MODULE: ./src/client/js/app.js


/* Global Variables */
const baseUrl = "http://api.geonames.org/searchJSON?q=";
const baseUrlWeather = "http://api.weatherbit.io/v2.0/forecast/daily?";
const baseUrlImage = "https://pixabay.com/api/?";
const USERNAME = "hugonin_"; // Geonames
const API_KEY_1 = "7ef1e110e00c49abb914bc08eddf17c6"; // WeatherBit 
const API_KEY_2 = "5463371-fdf4fcef6ada1fce8e8a016d5" // Pixabay 



async function performAction(event) {
    event.preventDefault()

    let cityName = document.getElementById("city").value;
    let date = document.getElementById("date-picker").value;

    const dLocation = await getCityInfo(baseUrl, cityName, USERNAME)
    const cityUrl = await postData('/add', { cityLat: dLocation.geonames[0].lat, cityLong: dLocation.geonames[0].lng, city: cityName, country: dLocation.geonames[0].countryName, date: date })
    const dWeather = await getWeather(baseUrlWeather, dLocation.geonames[0].lat, dLocation.geonames[0].lng, API_KEY_1)
    const weatherUrl = await postData('/add', { temp: dWeather.data[0].temp, description: dWeather.data[0].weather.description, maxTemp: dWeather.data[0].max_temp, minTemp: dWeather.data[0].min_temp})
    const dImage = await getImage(baseUrlImage, cityName, API_KEY_2)
    const imageUrl = await postData('/add', { image: dImage.hits[0].webformatURL })
    let urls = []


    urls.push(cityUrl,weatherUrl,imageUrl)

    async function logInOrder(urls) {
        const dataPromises = urls.map(async url => {
            const response = await fetch(url);
            return response.data();
        });

        for (const dataPromise of dataPromises) {
            console.log( await dataPromise)
        }
    }

    updateUI();
         
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
}

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
}


// asynchronous function to fetch the data from the pixabay app endpoint  
const getImage = async (url, city, key) => {

    const res = await fetch(url + `&key=${key}&q=${city}&image_type=photo`)
    try {
        const imageData = await res.json();
        console.log(imageData)
        return imageData;
    } catch(error) {
        console.log("error", error)
    }
}


// Post Route
const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });
    
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
};


// Update UI function
const updateUI = async () => {
  
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('country').innerHTML = `<h2 class="info-title-country">My trip to: ${allData.city}, ${allData.country}</h2>`;
        document.getElementById('date').innerHTML = ` <h2 class="info-title-date">Departing: ${allData.date}</h2> `;
        document.getElementById('btn-container').innerHTML = 
            `<div class="btn-container">
                <a href="#" class="cta">Save</a>
                <a href="#" class="cta outline">Remove</a>
            </div>`
        document.getElementById('countdown').innerHTML = `<p class="info-countdown">${allData.city}, ${allData.country} is </p> `;
        document.getElementById('temp').innerHTML = `<p class="info-temp">Typical weather for then is: ${allData.temp}°C, Max: ${allData.maxTemp}°C, Min: ${allData.minTemp}°C</p>`;
        document.getElementById('description').innerHTML = `<p class="info-description-fineprint">${allData.description}</p>`;
        document.getElementById('placeimage').innerHTML = `<img class="main-image" src="${allData.image}" alt="image-of-the-city">`;
    }catch(error){
      console.log("error", error);
    }
  }


    


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(1);
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





// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);



/***/ })
/******/ ]);