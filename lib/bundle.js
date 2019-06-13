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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/data/parse_data.js":
/*!********************************!*\
  !*** ./lib/data/parse_data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ParseData = (response) => {\n    const bronx = parseBoro(\"BRONX\", response);\n    const bronxDates = parseDates(bronx);\n    const bronxBreakdown = breakdownStats(bronxDates);\n    const Bronx = bronxBreakdown;\n\n    const brooklyn = parseBoro(\"BROOKLYN\", response);\n    const brooklynDates = parseDates(brooklyn);\n    const brooklynBreakdown = breakdownStats(brooklynDates);\n    const Brooklyn = brooklynBreakdown; \n\n    const queens = parseBoro(\"QUEENS\", response);\n    const queensDates = parseDates(queens);\n    const queensBreakdown = breakdownStats(queensDates);\n    const Queens = queensBreakdown; \n\n    const manhattan = parseBoro(\"MANHATTAN\", response);\n    const manhattanDates = parseDates(manhattan);\n    const manhattanBreakdown = breakdownStats(manhattanDates);\n    const Manhattan = manhattanBreakdown; \n\n    const statenIsland = parseBoro(\"STATEN ISLAND\", response);\n    const statenIslandDates = parseDates(statenIsland);\n    const statenIslandBreakdown = breakdownStats(statenIslandDates);\n    const StatenIsland = statenIslandBreakdown;\n    \n    const Store = {\n        \"BRONX\": Bronx,\n        \"BROOKLYN\": Brooklyn,\n        \"QUEENS\": Queens,\n        \"MANHATTAN\": Manhattan,\n        \"STATEN ISLAND\": StatenIsland\n    }\n    return Store;\n}\n\nconst parseBoro = (boro, response) => {\n    const array = [];\n    response.forEach( element => {\n        if (element.borough === boro) {\n            array.push(element);\n        }\n    })\n\n    return array;\n}\n\nconst parseDates = (data) => {\n    const obj = {\n        2013: [],\n        2014: [],\n        2015: [],\n        2016: [],\n        2017: [],\n        2018: [],\n    };\n    data.forEach( element => {\n        const year = parseInt(element.date.split(\"-\")[0]);\n        obj[year].push(element);\n    })\n    return obj;\n}\n\nconst breakdownStats = (data) => {\n    const obj = {\n        2013: {\n            deaths: 0,\n            injuries: 0\n        },\n        2014: {\n            deaths: 0,\n            injuries: 0\n        },\n        2015: {\n            deaths: 0,\n            injuries: 0\n        },\n        2016: {\n            deaths: 0,\n            injuries: 0\n        },\n        2017: {\n            deaths: 0,\n            injuries: 0\n        },\n        2018: {\n            deaths: 0,\n            injuries: 0\n        },\n    };\n    const years = [\n        2013,\n        2014,\n        2015,\n        2016,\n        2017,\n        2018,\n    ]\n    years.forEach(year => {\n        let deaths;\n        let injuries;\n        deaths = data[year].map(datum => {\n            const cyclist = datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;\n            const motorist = datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;\n            const pedestrians = datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;\n            const persons = datum.number_of_persons_killed ? parseInt(datum.number_of_persons_killed) : 0;\n            \n            return (cyclist + motorist + pedestrians + persons)\n        }) \n        injuries = data[year].map(datum => {\n            const cyclist = datum.number_of_cyclist_injured ? parseInt(datum.number_of_cyclist_injured) : 0;\n            const motorist = datum.number_of_motorist_injured ? parseInt(datum.number_of_motorist_injured) : 0;\n            const pedestrians = datum.number_of_pedestrians_injured ? parseInt(datum.number_of_pedestrians_injured) : 0;\n            const persons = datum.number_of_persons_injured ? parseInt(datum.number_of_persons_injured) : 0;\n            \n            return (cyclist + motorist + pedestrians + persons)\n        }) \n        if (deaths.length > 0) {\n            deaths = deaths.reduce((acc, el) => acc + el);\n        }\n        if (injuries.length > 0) {\n            injuries = injuries.reduce((acc, el) => acc + el);\n        }\n        obj[year].deaths += deaths;\n        obj[year].injuries += injuries;\n    })\n    return obj;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParseData);\n\n//# sourceURL=webpack:///./lib/data/parse_data.js?");

/***/ }),

/***/ "./lib/graph.js":
/*!**********************!*\
  !*** ./lib/graph.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_data_parse_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/data/parse_data */ \"./lib/data/parse_data.js\");\n\n\nconst Graph = (response) => {\n    const graphData = Object(_lib_data_parse_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response);\n    // const yearDeaths = [];\n    // Object.values(graphData.BRONX).forEach(year => {\n    //     yearDeaths.push(year.deaths);\n    // })\n    // d3.select('h3').style('color', 'darkblue'); d3.select('h3').style('font-size', '24px');\n\n    // const fruits = ['apple', 'mango', 'banana', 'orange'];\n\n    // d3.select('ul').selectAll('li').data(fruits).enter().append('li').text(function (d) { return d; });\n\n    // const data = [80, 120, 60, 150, 200];\n\n    // const barHeight = 20;\n\n    // const bar = d3.select('svg').selectAll('rect').data(yearDeaths).enter().append('rect').attr('width', function (d) { return d; }).attr('height', barHeight - 1).attr('transform', function (d, i) { return \"translate(0,\" + i * barHeight + \")\"; });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\n\n//# sourceURL=webpack:///./lib/graph.js?");

/***/ }),

/***/ "./lib/util/total_data_util.js":
/*!*************************************!*\
  !*** ./lib/util/total_data_util.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction TotalData(url) {\n    return fetch(url, {\n        mode: 'cors',\n        cache: 'no-cache',\n        credentials: 'same-origin',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        redirect: 'follow',\n        referrer: 'no-referrer',\n    })\n        .then(response => response.json());\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TotalData);\n\n\n//# sourceURL=webpack:///./lib/util/total_data_util.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/graph */ \"./lib/graph.js\");\n/* harmony import */ var _lib_util_total_data_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util/total_data_util */ \"./lib/util/total_data_util.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const url = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\n    const data = {\n        \"$select\": \"date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n        \"$limit\": 1000000,\n        \"$where\": \"borough IS NOT NULL AND date > '2012-12-31' AND date < '2019-01-01'\",\n        \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n    }\n\n    url.search = new URLSearchParams(data);\n\n    Object(_lib_util_total_data_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url).then(response => {\n        alert(\"done fetching data\");\n        Object(_lib_graph__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response);\n    })\n})\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });