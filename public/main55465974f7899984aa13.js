/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\nconst serachEl = document.querySelector(\".search\");\nserachEl.search.addEventListener(\"input\", () => {\n  let searchValue = serachEl.search.value.toLowerCase();\n  const cardsItem = document.querySelectorAll(\".cards__item\");\n  const cardsTitles = document.querySelectorAll(\".cards__title\");\n  cardsTitles.forEach((title, i) => {\n    if (title.textContent.toLowerCase().includes(searchValue)) {\n      cardsItem[i].classList.remove(\"hidden\");\n    } else {\n      cardsItem[i].classList.add(\"hidden\");\n    }\n  });\n});\n\n\nconst searchSelect = document.querySelectorAll(\".search__select-list li\");\nconst searchSelectSpan = document.querySelector(\".search__select span\");\nsearchSelect.forEach(li => {\n  let filterAPI;\n  li.addEventListener(\"click\", () => {\n    searchSelectSpan.textContent = li.textContent;\n    if (li.textContent == \"All\") {\n      filterAPI = `https://restcountries.com/v3.1/all`;\n    } else {\n      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;\n    }\n    (0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filterAPI).then(data => {\n      (0,_updateUI__WEBPACK_IMPORTED_MODULE_1__.createCountries)(data);\n    }).catch(err => {\n      alert(err);\n    });\n  });\n});\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(\".loader\");\nconst loaderToggle = info => {\n  if (info) {\n    loaderEl.classList.remove(\"hidden\");\n  } else {\n    loaderEl.classList.add(\"hidden\");\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst API = \"https://restcountries.com/v3.1/all\";\n(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API).then(data => {\n  (0,_updateUI__WEBPACK_IMPORTED_MODULE_2__.createCountries)(data);\n}).catch(err => {\n  alert(err.message);\n});\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const modeBtn = document.querySelector(\".header__dark-mode\");\nconst body = document.querySelector(\"body\");\nconst modeFromLocal = localStorage.getItem(\"mode\") ? localStorage.getItem(\"mode\") : null;\nif (modeFromLocal) {\n  body.classList.add(\"dark-mode\");\n}\nmodeBtn.addEventListener(\"click\", () => {\n  body.classList.toggle(\"dark-mode\");\n  modeFromLocal ? localStorage.setItem(\"mode\", \"\") : localStorage.setItem(\"mode\", \"dark\");\n});\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\nconst request = async resurse => {\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\n  const req = await fetch(resurse);\n  if (!req.ok) {\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\n    throw new Error(\"Something went wrong!\");\n  }\n  const data = await req.json();\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/request.js?");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCountries\": () => (/* binding */ createCountries),\n/* harmony export */   \"createCountryInfo\": () => (/* binding */ createCountryInfo)\n/* harmony export */ });\nconst cardsEl = document.querySelector(\".cards\");\nconst createCountries = countries => {\n  console.log(countries);\n  cardsEl.innerHTML = \"\";\n  countries.forEach(country => {\n    const commonName = country.name.common;\n    const population = country.population;\n    const region = country.region;\n    const capital = country.capital ? country.capital[0] : \"No Capital\";\n    const flag = country.flags.svg;\n    const li = document.createElement(\"li\");\n    li.classList.add(\"cards__item\");\n    li.innerHTML = `\n        <a href=\"./about.html?country=/name/${commonName}\">\n        <img src=${flag} alt=\"${commonName}-flag\" width=\"267\" height=\"160\">\n        <div class=\"cards__item-inner\">\n            <h3 class=\"cards__title\">${commonName}</h3>\n            <p class=\"population\">Population: <span>${population}</span></p>\n            <p class=\"region\">Region: <span>${region}</span></p>\n            <p class=\"capital\">Capital: <span>${capital}</span></p>\n        </div>\n    </a>\n    `;\n    cardsEl.appendChild(li);\n  });\n};\nconst counrtyInfoEl = document.querySelector(\".country-info\");\n// abouteUI\nconst createCountryInfo = counrty => {\n  const {\n    population,\n    borders,\n    capital,\n    flags,\n    name,\n    region,\n    tld,\n    currencies,\n    languages,\n    subregion\n  } = counrty;\n  const nativeName = Object.values(name.nativeName)[0].official;\n  const currenciesEl = Object.values(currencies)[0].name;\n  const language = Object.values(languages);\n  counrtyInfoEl.innerHTML = `\n  \n    <img\n      class=\"country-info__img\"\n      src=${flags.svg}\n      alt=\"germany-flag\"\n      width=\"560\"\n      height=\"400\"\n  />\n<div class=\"country-info__content\">\n  <h2>${name.common}</h2>\n  <ul class=\"country-info__list\">\n    <li class=\"country-info__item\">\n      <p class=\"name\">\n        Native Name:\n        <span>${nativeName}</span>\n      </p>\n      <p class=\"population\">\n        Population:\n        <span>${population}</span>\n      </p>\n      <p class=\"region\">\n        Region:\n        <span>${region}</span>\n      </p>\n      <p class=\"sub-region\">\n        Sub Region:\n        <span>${subregion} </span>\n      </p>\n      <p class=\"capital\">\n        Capital:\n        <span> ${capital}</span>\n      </p>\n    </li>\n    <li class=\"country-info__item\">\n      <p class=\"name\">\n        Top Level Domain:\n        <span>${tld} </span>\n      </p>\n      <p class=\"population\">\n        Currencies:\n        <span>${currenciesEl} </span>\n      </p>\n      <p class=\"region\">\n        Languages:\n        <span>${language} </span>\n      </p>\n    </li>\n  </ul>\n\n  <div class=\"country-info__borders\">\n    <h3>Border Countries:</h3>\n    ${borders ? borders.map(border => {\n    return `\n      <a href=\"./about.html?country=/alpha/${border}\">${border}</a>\n      `;\n  }) : \"No Borders\"}\n  </div>\n</div>\n  `;\n};\n\n//# sourceURL=webpack://amaliyot-webpck/./src/js/updateUI.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://amaliyot-webpck/./src/css/main.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;