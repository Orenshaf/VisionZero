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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/charts/chart.js":
/*!*****************************!*\
  !*** ./lib/charts/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stacked_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked_chart */ \"./lib/charts/stacked_chart.js\");\n/* harmony import */ var _grouped_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grouped_chart */ \"./lib/charts/grouped_chart.js\");\n/* harmony import */ var _htmlstuff_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../htmlstuff/header */ \"./lib/htmlstuff/header.js\");\n\n\n\n\nlet currentBorough = \"MANHATTAN\";\n\nconst Chart = (DATA, borough = currentBorough) => {\n    Object(_htmlstuff_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(borough);\n    let style;\n    const radios = document.getElementsByTagName(\"INPUT\");\n    for (let radio of radios) {\n        debugger;\n        if (radio.checked) {\n            style = radio.getAttribute(\"id\");\n        }\n    }\n    \n    debugger;\n\n    if (currentBorough !== borough) {\n            if (document.getElementsByTagName(\"svg\").length > 0) {\n                const removeSVG = document.getElementsByTagName(\"svg\");\n                removeSVG[0].parentElement.removeChild(removeSVG[0]);\n            }\n            currentBorough = borough;\n            if (style === \"Stacked\") {\n                Object(_stacked_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA);\n            } else {\n                Object(_grouped_chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DATA);\n            }\n    } else {\n        if (document.getElementsByTagName(\"svg\").length > 0) {\n            const removeSVG = document.getElementsByTagName(\"svg\");\n            removeSVG[0].parentElement.removeChild(removeSVG[0]);\n        }\n        if (style === \"Stacked\") {\n            Object(_stacked_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, borough);\n        } else {\n            Object(_grouped_chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DATA, borough);\n        }\n    }    \n    //  else {\n    //         if (newStyle === \"Grouped\") {\n    //             currentStyle = newStyle\n    //             // remove these once transitions work\n    //             if (document.getElementsByTagName(\"svg\").length > 0) {\n    //                 const removeSVG = document.getElementsByTagName(\"svg\");\n    //                 removeSVG[0].parentElement.removeChild(removeSVG[0]);\n    //             }\n    //             GroupedChart(DATA);\n    //         } else {\n    //             currentStyle = newStyle;\n    //             // remove these once transitions work\n    //             if (document.getElementsByTagName(\"svg\").length > 0) {\n    //                 const removeSVG = document.getElementsByTagName(\"svg\");\n    //                 removeSVG[0].parentElement.removeChild(removeSVG[0]);\n    //             }\n    //             StackedChart(DATA);\n    //         }\n    //     }\n    // } \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n\n//# sourceURL=webpack:///./lib/charts/chart.js?");

/***/ }),

/***/ "./lib/charts/choose_chart.js":
/*!************************************!*\
  !*** ./lib/charts/choose_chart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n\n\nconst ChooseChart = (DATA) => {\n    const chartStyle = [\"Stacked\", \"Grouped\"];\n    chartStyle.forEach( style => {\n        const radio = document.createElement(\"INPUT\");\n        radio.setAttribute(\"type\", \"radio\");\n        radio.setAttribute(\"id\", `${style}`)\n\n        if (style === 'Stacked') {\n            radio.checked = true;\n        }\n\n        radio.onclick = () => {\n            const radios = document.getElementsByTagName(\"INPUT\")\n            for (let button of radios) {\n                if (button.checked) {\n                    button.checked = false;\n                }\n            }\n            radio.checked = true;\n            Object(_charts_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA);\n        }\n\n        const label = document.createElement(\"SPAN\");\n        const text = document.createTextNode(`${style}`);\n        label.appendChild(text);\n\n        document.getElementById(\"radios\").appendChild(label);\n        document.getElementById(\"radios\").appendChild(radio);\n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChooseChart);\n\n//# sourceURL=webpack:///./lib/charts/choose_chart.js?");

/***/ }),

/***/ "./lib/charts/grouped_chart.js":
/*!*************************************!*\
  !*** ./lib/charts/grouped_chart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GroupedChart = (DATA) => {\n    const intermediate = Object.keys(DATA).map(year => {\n        return {\n            year: year,\n            Cyclist_Deaths: DATA[year].cyclistDeaths,\n            Motorist_Deaths: DATA[year].motoristDeaths,\n            Pedestrian_Deaths: DATA[year].pedestrianDeaths,\n            Motorist_Injuries: Math.round(DATA[year].motoristInjuries / 100),\n            Pedestrian_Injuries: Math.round(DATA[year].pedestrianInjuries / 100),\n            Cyclist_Injuries: Math.round(DATA[year].cyclistInjuries / 100),\n        };\n    })\n\n    const margin = { top: 20, right: 110, bottom: 30, left: 65 },\n        width = 700 - margin.left - margin.right,\n        height = 350 - margin.top - margin.bottom;\n    \n    const keys = intermediate.map( datum => {\n        return datum.year;\n    })\n\n    const categories = Object.keys(intermediate[0]).slice(1);\n\n    const x0 = d3.scaleBand()\n        .domain(keys)\n        .rangeRound([0, width], 0.1)\n\n    const x1 = d3.scaleBand()\n        .padding(0.05)\n        .domain(categories)\n        .rangeRound([0, x0.bandwidth()])\n    \n    const y = d3.scaleLinear()\n        .rangeRound([height, 0])\n        .domain([0, d3.max(intermediate, d => d3.max(categories, category => d[category]))]).nice()\n\n    const colors = category => {\n        if (category === \"Cyclist_Deaths\") {\n            return \"#ff8c00\"\n        } else if (category === \"Motorist_Deaths\") {\n            return \"#d0743c\"\n        } else if (category === \"Pedestrian_Deaths\") {\n            return \"#a05d56\"\n        } else if (category === \"Cyclist_Injuries\") {\n            return \"#8a89a6\"\n        } else if (category === \"Motorist_Injuries\") {\n            return \"#6b486b\"\n        } else if (category === \"Pedestrian_Injuries\") {\n            return \"#7b6888\"\n        } \n    }\n\n    const xAxis = d3.axisBottom(x0)\n\n    const yAxis = d3.axisLeft(y)\n\n    const svg = d3.select('#svg')\n        .append('svg')\n        .attr('width', width + margin.left + margin.right)\n        .attr('height', height + margin.top + margin.bottom)\n        .append('g')\n        .attr('transform', `translate(${margin.left}, ${margin.top})`)\n\n    svg.append(\"g\")\n        .selectAll(\"g\")\n        .data(intermediate)\n        .enter()\n        .append(\"g\")\n        .attr(\"transform\", d => `translate(${x0(d.year)}, 0)`)\n        .selectAll(\"rect\")\n        .data((d) => { return categories.map(category => { \n            return { category, value: d[category] }\n        }, (category) => category)})\n        .join(\"rect\")\n        .attr(\"x\", d => {\n            return x1(d.category)\n        })\n        .attr(\"y\", height)\n        .attr(\"width\", x1.bandwidth())\n        .attr(\"height\", 0)\n        .attr(\"fill\", d => colors(d.category))\n        .call(selection => {\n            selection.transition()\n                .duration(500)\n                .delay((d, i) => i * 20)\n                .transition()\n                .attr(\"height\", d => (height - y(d.value)))\n                .attr(\"y\", d => {\n                    return y(d.value)\n                })\n        })\n        .on(\"mouseover\", function () { \n            this.setAttribute(\"stroke\", \"#33FF00\")\n            this.setAttribute(\"stroke-width\", 3)\n            tooltip.style(\"display\", null) \n        })\n        .on(\"mouseout\", function () { \n            this.removeAttribute(\"stroke\")\n            tooltip.style(\"display\", \"none\") \n        })\n        .on(\"mousemove\", function (d) {\n            tooltip.select(\"text\").text(function () {\n                const category = d.category.split('_').join(\" \");\n                if (category.includes(\"Injuries\")){\n                    return `${category} (in hundreds): ${d.value}`\n                } else {\n                    return `${category}: ${d.value}`\n                }\n            });\n        })\n        \n\n    svg.append('g')\n        .attr('class', 'axis axis--x')\n        .attr('transform', `translate(0, ${height})`)\n        .call(xAxis)\n\n    svg.append('g')\n        .attr('class', 'axis axis--y')\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", `${0 - 45}`)\n        .attr(\"x\", `${0 - (height / 2)}`)\n        .attr(\"dy\", \"1em\")\n        .attr('fill', 'black')\n        .style(\"text-anchor\", \"middle\")\n        .text(\"Totals\");\n    \n    const tooltip = svg.append(\"g\")\n        .attr(\"class\", \"tooltip\")\n        .style(\"display\", \"none\");\n\n    tooltip.append(\"rect\")\n        .attr(\"transform\", `translate(${width}, 0)`)\n        .attr(\"width\", 100)\n        .attr(\"height\", 20)\n        .attr(\"fill\", \"grey\")\n        .style(\"opacity\", 0)\n        .style(\"pointer-events\", \"none\")\n\n    tooltip.append(\"text\")\n        .attr(\"x\", 400)\n        .attr(\"dy\", \"1.2em\")\n        .style(\"text-anchor\", \"middle\")\n        .attr(\"font-size\", \"12px\")\n        .attr(\"font-weight\", \"bold\")\n        .attr(\"fill\", \"black\");\n    \n    const legend = svg.append(\"g\")\n        .attr(\"class\", \"legend\")\n        .attr(\"transform\", \"translate(605, 0)\")\n\n    legend.selectAll(\"rect\")\n        .data(categories)\n        .enter()\n        .append(\"rect\")\n        .attr('x', 0)\n        .attr('y', (d, i) => i * 18)\n        .attr('width', 12)\n        .attr('height', 12)\n        .attr('fill', function (d, i) {\n            return colors(categories[i]);\n        });\n\n    legend.selectAll('text')\n        .data(categories)\n        .enter()\n        .append('text')\n        .text(d => {\n            return d.split('_').join(\" \");\n        })\n        .attr('x', 0)\n        .attr('y', (d, i) => i * 18)\n        .attr('text-anchor', 'end')\n        .attr(\"font-size\", \"10px\")\n        .attr('alignment-baseline', 'hanging');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupedChart);\n\n//# sourceURL=webpack:///./lib/charts/grouped_chart.js?");

/***/ }),

/***/ "./lib/charts/stacked_chart.js":
/*!*************************************!*\
  !*** ./lib/charts/stacked_chart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst StackedChart = (DATA) => {\n    const intermediate = Object.keys(DATA).map(year => {\n        return {\n            year: year,\n            Cyclist_Deaths: DATA[year].cyclistDeaths,\n            Motorist_Deaths: DATA[year].motoristDeaths,\n            Pedestrian_Deaths: DATA[year].pedestrianDeaths,\n            Motorist_Injuries: Math.round(DATA[year].motoristInjuries / 100),\n            Pedestrian_Injuries: Math.round(DATA[year].pedestrianInjuries / 100),\n            Cyclist_Injuries: Math.round(DATA[year].cyclistInjuries / 100),\n        };\n    })\n\n    const stackKeys = Object.keys(intermediate[0]).slice(1);\n\n    const series = d3.stack()\n        .keys(stackKeys)(intermediate);\n\n    const margin = { top: 20, right: 110, bottom: 30, left: 65 },\n          width = 700 - margin.left - margin.right,\n          height = 350 - margin.top - margin.bottom;\n\n    const x = d3.scaleBand()\n        .domain(series[0].map(d => d.data.year))\n        .rangeRound([0, width], 0.1)\n\n    const y = d3.scaleLinear()\n        .domain([0, d3.max(series[5], d => (d[1]))]).nice()\n        .range([height, 0])\n\n    const colors = category => {\n        if (category === \"Cyclist_Deaths\") {\n            return \"#ff8c00\"\n        } else if (category === \"Motorist_Deaths\") {\n            return \"#d0743c\"\n        } else if (category === \"Pedestrian_Deaths\") {\n            return \"#a05d56\"\n        } else if (category === \"Cyclist_Injuries\") {\n            return \"#8a89a6\"\n        } else if (category === \"Motorist_Injuries\") {\n            return \"#6b486b\"\n        } else if (category === \"Pedestrian_Injuries\") {\n            return \"#7b6888\"\n        }\n    }\n\n    const xAxis = d3.axisBottom(x)\n\n    const yAxis = d3.axisLeft(y)\n\n    const svg = d3.select('#svg')\n        .append('svg')\n        .attr('width', width + margin.left + margin.right)\n        .attr('height', height + margin.top + margin.bottom)\n        .append('g')\n        .attr('transform', `translate(${margin.left}, ${margin.top})`)\n\n    series.forEach((category, i) => {\n        svg.selectAll(`layer-${i}`)\n            .data(category, (category) => category.key)\n            .join('rect')\n            .attr('class', `layer-${i}`)\n            .attr('x', d => (x(d.data.year) + 2))\n            .attr('y', d => ((height - ((height - y(d[1] - d[0]) + (height - y(d[0])))))))\n            .attr(\"height\", d => y(d[0]) - y(d[1]))\n            .attr(\"width\", 0)\n            .call(selection => {\n                selection.transition()\n                    .duration(750)\n                    .attr('x', d => (x(d.data.year) + 2))\n                    .attr('y', d => ((height - ((height - y(d[1] - d[0]) + (height - y(d[0])))))))\n                    .attr('height', d => (height - y(d[1] - d[0])))\n                    .attr('width', x.bandwidth() - 4)\n            })\n            .on(\"mouseover\", function () {\n                this.setAttribute(\"stroke\", \"#33FF00\")\n                this.setAttribute(\"stroke-width\", 2)\n                tooltip.style(\"display\", null)\n            })\n            .on(\"mouseout\", function () {\n                this.removeAttribute(\"stroke\")\n                tooltip.style(\"display\", \"none\")\n            })\n            .on(\"mousemove\", function (d) {\n                tooltip.select(\"text\").text(function () {\n                    let category;\n                    const categories = Object.keys(d.data);\n                    for (let i = 0; i < categories.length; i++) {\n                        if (d.data[categories[i]] === d[1] - d[0]) {\n                            category = categories[i].split('_').join(\" \");\n                            break;\n                        }\n                    }\n                    if (category.includes(\"Injuries\")) {\n                        return `${category} (in hundreds): ${d[1] - d[0]}`\n                    } else {\n                        return `${category}: ${d[1] - d[0]}`\n                    }\n                });\n            })\n    })\n\n\n    svg.append('g')\n        .attr('class', 'axis axis--x')\n        .attr('transform', `translate(0, ${height})`)\n        .call(xAxis)\n\n    svg.append('g')\n        .attr('class', 'axis axis--y')\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", `${0 - 45}`)\n        .attr(\"x\", `${0 - (height / 2)}`)\n        .attr(\"dy\", \"1em\")\n        .attr('fill', 'black')\n        .style(\"text-anchor\", \"middle\")\n        .text(\"Totals\");\n\n    const tooltip = svg.append(\"g\")\n        .attr(\"class\", \"tooltip\")\n        .style(\"display\", \"none\");\n\n    tooltip.append(\"rect\")\n        .attr(\"transform\", `translate(${width}, 0)`)\n        .attr(\"width\", 100)\n        .attr(\"height\", 20)\n        .attr(\"fill\", \"grey\")\n        .style(\"opacity\", 0)\n        .style(\"pointer-events\", \"none\")\n\n    tooltip.append(\"text\")\n        .attr(\"x\", 400)\n        .attr(\"dy\", \"1.2em\")\n        .style(\"text-anchor\", \"middle\")\n        .attr(\"font-size\", \"12px\")\n        .attr(\"font-weight\", \"bold\")\n\n    const legend = svg.append(\"g\")\n        .attr(\"class\", \"legend\")\n        .attr(\"transform\", \"translate(605, 0)\")\n\n    legend.selectAll(\"rect\")\n        .data(stackKeys)\n        .enter()\n        .append(\"rect\")\n        .attr('x', 0)\n        .attr('y', (d, i) => i * 18)\n        .attr('width', 12)\n        .attr('height', 12)\n        .attr('fill', function (d, i) {\n            return colors(stackKeys[i]);\n        });\n\n    legend.selectAll('text')\n        .data(stackKeys)\n        .enter()\n        .append('text')\n        .text(d => {\n            return d.split('_').join(\" \");\n        })\n        .attr('x', 0)\n        .attr('y', (d, i) => i * 18)\n        .attr('text-anchor', 'end')\n        .attr(\"font-size\", \"10px\")\n        .attr('alignment-baseline', 'hanging');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedChart);\n\n//# sourceURL=webpack:///./lib/charts/stacked_chart.js?");

/***/ }),

/***/ "./lib/data/choose_data.js":
/*!*********************************!*\
  !*** ./lib/data/choose_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n\n\nconst ChooseData = (DATA, borough) => {\n    const btn = document.getElementById(borough);\n    btn.onclick = () => {\n        Object(_charts_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, btn.innerHTML);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChooseData);\n\n//# sourceURL=webpack:///./lib/data/choose_data.js?");

/***/ }),

/***/ "./lib/data/fetch_data.js":
/*!********************************!*\
  !*** ./lib/data/fetch_data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FetchData; });\n/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/data_util */ \"./lib/util/data_util.js\");\n/* harmony import */ var _parse_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse_data */ \"./lib/data/parse_data.js\");\n/* harmony import */ var _htmlstuff_create_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../htmlstuff/create_buttons */ \"./lib/htmlstuff/create_buttons.js\");\n/* harmony import */ var _choose_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose_data */ \"./lib/data/choose_data.js\");\n/* harmony import */ var _charts_choose_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/choose_chart */ \"./lib/charts/choose_chart.js\");\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n/* harmony import */ var _maps_init_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maps/init_map */ \"./lib/maps/init_map.js\");\n\n\n\n\n\n\n\n\nlet Store = {};\n\nconst manhattanUrl = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\nconst manhattanData = {\n    \"$select\": \"date, borough, latitude, longitude, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n    \"$limit\": 1000000,\n    \"$where\": \"borough LIKE 'MANHATTAN' AND date > '2012-12-31' AND date < '2019-01-01'\",\n    \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n}\n\nmanhattanUrl.search = new URLSearchParams(manhattanData);\n\nconst bronxUrl = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\nconst bronxData = {\n    \"$select\": \"date, borough, latitude, longitude, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n    \"$limit\": 1000000,\n    \"$where\": \"borough LIKE 'BRONX' AND date > '2012-12-31' AND date < '2019-01-01'\",\n    \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n}\n\nbronxUrl.search = new URLSearchParams(bronxData);\n\nconst queensUrl = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\nconst queensData = {\n    \"$select\": \"date, borough, latitude, longitude, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n    \"$limit\": 1000000,\n    \"$where\": \"borough LIKE 'QUEENS' AND date > '2012-12-31' AND date < '2019-01-01'\",\n    \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n}\n\nqueensUrl.search = new URLSearchParams(queensData);\n\nconst brooklynUrl = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\nconst brooklynData = {\n    \"$select\": \"date, borough, latitude, longitude, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n    \"$limit\": 1000000,\n    \"$where\": \"borough LIKE 'BROOKLYN' AND date > '2012-12-31' AND date < '2019-01-01'\",\n    \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n}\n\nbrooklynUrl.search = new URLSearchParams(brooklynData);\n\nconst statenIslandUrl = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\nconst statenIslandData = {\n    \"$select\": \"date, borough, latitude, longitude, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n    \"$limit\": 1000000,\n    \"$where\": \"borough LIKE 'STATEN ISLAND' AND date > '2012-12-31' AND date < '2019-01-01'\",\n    \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n}\n statenIslandUrl.search = new URLSearchParams(statenIslandData);\n\n\nfunction FetchData() {\n    Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(manhattanUrl).then(response => {\n        document.getElementById(\"loading\").remove();\n        Store[\"MANHATTAN\"] = Object(_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n        Object(_maps_init_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response);\n        Object(_htmlstuff_create_buttons__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        Object(_charts_choose_chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Store[\"MANHATTAN\"]);\n        Object(_choose_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Store[\"MANHATTAN\"], [\"MANHATTAN\"]);\n        Object(_charts_chart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Store[\"MANHATTAN\"]);\n    }).then(() => {\n        Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(queensUrl).then(response => {\n            Store[\"QUEENS\"] = Object(_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n            Object(_choose_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Store[\"QUEENS\"], \"QUEENS\");\n        }).then(() => {\n            Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(brooklynUrl).then(response => {\n                Store[\"BROOKLYN\"] = Object(_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n                Object(_choose_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Store[\"BROOKLYN\"], \"BROOKLYN\");\n            }).then(() => {\n                Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bronxUrl).then(response => {\n                    Store[\"BRONX\"] = Object(_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n                    Object(_choose_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Store[\"BRONX\"], \"BRONX\");\n                }).then(() => {\n                    Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(statenIslandUrl).then(response => {\n                        Store[\"STATEN ISLAND\"] = Object(_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n                        Object(_choose_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Store[\"STATEN ISLAND\"], \"STATEN ISLAND\");\n                    })\n                })\n            })\n        })\n    })\n}\n\n\n//# sourceURL=webpack:///./lib/data/fetch_data.js?");

/***/ }),

/***/ "./lib/data/parse_data.js":
/*!********************************!*\
  !*** ./lib/data/parse_data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParseData; });\nfunction ParseData(response) {\n    const dates = parseDates(response);\n    const breakdown = breakdownStats(dates);\n\n    return breakdown;\n}\n\nconst parseDates = (data) => {\n    const obj = {\n        2013: [],\n        2014: [],\n        2015: [],\n        2016: [],\n        2017: [],\n        2018: [],\n    };\n    data.forEach( element => {\n        const year = parseInt(element.date.split(\"-\")[0]);\n        obj[year].push(element);\n    })\n    return obj;\n}\n\nconst breakdownStats = (data) => {\n    const obj = {\n        2013: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n        2014: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n        2015: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n        2016: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n        2017: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n        2018: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n        },\n    };\n\n    Object.keys(obj).forEach(year => {\n        let cyclistDeaths,\n            motoristDeaths,\n            pedestrianDeaths,\n            cyclistInjuries,\n            motoristInjuries,\n            pedestrianInjuries;\n        \n        cyclistDeaths = data[year].map(datum => {\n           return datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;\n        }) \n\n        motoristDeaths = data[year].map(datum => {\n           return datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;\n        }) \n\n        pedestrianDeaths = data[year].map(datum => {\n           return datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;\n        }) \n        \n        cyclistInjuries = data[year].map(datum => {\n           return datum.number_of_cyclist_injured ? parseInt(datum.number_of_cyclist_injured) : 0;\n        })\n\n        motoristInjuries = data[year].map(datum => {\n           return datum.number_of_motorist_injured ? parseInt(datum.number_of_motorist_injured) : 0;\n        })\n\n        pedestrianInjuries = data[year].map(datum => {\n           return datum.number_of_pedestrians_injured ? parseInt(datum.number_of_pedestrians_injured) : 0;\n        })\n        \n        if (cyclistDeaths.length > 0) {\n            cyclistDeaths = cyclistDeaths.reduce((acc, el) => acc + el);\n        }\n\n        if (motoristDeaths.length > 0) {\n            motoristDeaths = motoristDeaths.reduce((acc, el) => acc + el);\n        }\n\n        if (pedestrianDeaths.length > 0) {\n            pedestrianDeaths = pedestrianDeaths.reduce((acc, el) => acc + el);\n        }\n\n        if (cyclistInjuries.length > 0) {\n            cyclistInjuries = cyclistInjuries.reduce((acc, el) => acc + el);\n        }\n\n        if (motoristInjuries.length > 0) {\n            motoristInjuries = motoristInjuries.reduce((acc, el) => acc + el);\n        }\n\n        if (pedestrianInjuries.length > 0) {\n            pedestrianInjuries = pedestrianInjuries.reduce((acc, el) => acc + el);\n        }\n\n        obj[year].cyclistDeaths += cyclistDeaths;\n        obj[year].motoristDeaths += motoristDeaths;\n        obj[year].pedestrianDeaths += pedestrianDeaths;\n        \n        obj[year].cyclistInjuries += cyclistInjuries;\n        obj[year].motoristInjuries += motoristInjuries;\n        obj[year].pedestrianInjuries += pedestrianInjuries;\n    })\n    return obj;\n}\n\n// const sumTotals = (...args) => {\n//     const obj = {\n//         2013: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//         2014: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//         2015: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//         2016: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//         2017: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//         2018: {\n//             cyclistDeaths: 0,\n//             motoristDeaths: 0,\n//             pedestrianDeaths: 0,\n//             cyclistInjuries: 0,\n//             motoristInjuries: 0,\n//             pedestrianInjuries: 0,\n//         },\n//     };\n//     args.forEach(borough => {\n//         Object.keys(obj).forEach( year => {\n//             obj[year].cyclistDeaths += borough[year].cyclistDeaths;\n//             obj[year].motoristDeaths += borough[year].motoristDeaths;\n//             obj[year].pedestrianDeaths += borough[year].pedestrianDeaths;\n//             // obj[year].personDeaths += borough[year].personDeaths;\n\n//             obj[year].cyclistInjuries += borough[year].cyclistInjuries;\n//             obj[year].motoristInjuries += borough[year].motoristInjuries;\n//             obj[year].pedestrianInjuries += borough[year].pedestrianInjuries;\n//             // obj[year].personInjuries += borough[year].personInjuries;\n//         })\n//     })\n\n//     return obj;\n// }\n\n// export default ParseData;\n\n//# sourceURL=webpack:///./lib/data/parse_data.js?");

/***/ }),

/***/ "./lib/htmlstuff/create_buttons.js":
/*!*****************************************!*\
  !*** ./lib/htmlstuff/create_buttons.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateButtons; });\nfunction CreateButtons() {\n    const boroughs = [\"MANHATTAN\", \"QUEENS\", \"BROOKLYN\", \"BRONX\", \"STATEN ISLAND\"];\n    boroughs.forEach( borough => {\n        const btn = document.createElement('BUTTON');\n        btn.setAttribute(\"id\", borough);\n        btn.innerHTML = borough;\n        document.getElementById(\"buttons\").appendChild(btn);\n    })\n}\n\n//# sourceURL=webpack:///./lib/htmlstuff/create_buttons.js?");

/***/ }),

/***/ "./lib/htmlstuff/header.js":
/*!*********************************!*\
  !*** ./lib/htmlstuff/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\nfunction Header(borough) {\n    if (document.getElementById('borough-header')) {\n        const header = document.getElementById('borough-header');\n        header.parentElement.removeChild(header);\n    }\n    const header = document.createElement(\"H1\");\n    header.setAttribute(\"id\", \"borough-header\");\n    header.innerHTML = `${borough}`;\n    document.getElementById(\"header\").appendChild(header);\n}\n\n//# sourceURL=webpack:///./lib/htmlstuff/header.js?");

/***/ }),

/***/ "./lib/maps/init_map.js":
/*!******************************!*\
  !*** ./lib/maps/init_map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst InitMap = (response) => {\n    // const center = new google.maps.LatLng(40.730610, -73.935242);\n    // const mapOptions = {\n    //     zoom: 10,\n    //     center: center,\n    //     mapTypeId: 'satellite'\n    // }\n\n    // const map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n\n    // let heatmapData = [];\n    // response.forEach(entry => {\n    //     if (entry.latitude && entry.longitude) {\n    //         heatmapData.push({location: new google.maps.LatLng(entry.latitude, entry.longitude), weight: 10});\n    //     }\n    // })\n    // debugger\n    // const heatmap = new google.maps.visualization.HeatmapLayer({\n    //     data: heatmapData\n    // });\n\n    // heatmap.setMap(map);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InitMap);\n\n//# sourceURL=webpack:///./lib/maps/init_map.js?");

/***/ }),

/***/ "./lib/util/data_util.js":
/*!*******************************!*\
  !*** ./lib/util/data_util.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Data(url) {\n    return fetch(url, {\n        mode: 'cors',\n        cache: 'no-cache',\n        credentials: 'same-origin',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        redirect: 'follow',\n        referrer: 'no-referrer',\n    })\n        .then(response => response.json());\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);\n\n\n//# sourceURL=webpack:///./lib/util/data_util.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_data_fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/data/fetch_data */ \"./lib/data/fetch_data.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    Object(_lib_data_fetch_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });