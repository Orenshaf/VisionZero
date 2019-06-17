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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stacked_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked_chart */ \"./lib/charts/stacked_chart.js\");\n/* harmony import */ var _grouped_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grouped_chart */ \"./lib/charts/grouped_chart.js\");\n\n\n\nlet currentBorough = \"NYC\";\nlet currentStyle = \"Stacked\";\nlet newStyle;\n\nconst Chart = (DATA, borough = currentBorough) => {\n    const radios = document.getElementsByTagName(\"INPUT\");\n    for (let button of radios) {\n        if (button.checked) {\n            newStyle = button.id;\n        }\n    }\n    \n    if (currentBorough !== borough || currentStyle !== newStyle) {\n        if (currentBorough !== borough) {\n            if (document.getElementsByTagName(\"svg\").length > 0) {\n                const removeSVG = document.getElementsByTagName(\"svg\");\n                removeSVG[0].parentElement.removeChild(removeSVG[0]);\n            }\n            currentBorough = borough;\n            Object(_stacked_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, borough)\n        } else {\n            if (newStyle === \"Stacked\") {\n                currentStyle = newStyle\n                // remove these once transitions work\n                if (document.getElementsByTagName(\"svg\").length > 0) {\n                    const removeSVG = document.getElementsByTagName(\"svg\");\n                    removeSVG[0].parentElement.removeChild(removeSVG[0]);\n                }\n                Object(_stacked_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, borough);\n            } else {\n                currentStyle = newStyle;\n                // remove these once transitions work\n                if (document.getElementsByTagName(\"svg\").length > 0) {\n                    const removeSVG = document.getElementsByTagName(\"svg\");\n                    removeSVG[0].parentElement.removeChild(removeSVG[0]);\n                }\n                Object(_grouped_chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DATA, borough);\n            }\n        }\n    } else {\n        if (document.getElementsByTagName(\"svg\").length > 0) {\n            const removeSVG = document.getElementsByTagName(\"svg\");\n            removeSVG[0].parentElement.removeChild(removeSVG[0]);\n        }\n        if (currentStyle === \"Stacked\") {\n            Object(_stacked_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, borough);\n        } else {\n            Object(_grouped_chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DATA, borough);\n        }\n    }    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n\n//# sourceURL=webpack:///./lib/charts/chart.js?");

/***/ }),

/***/ "./lib/charts/choose_chart.js":
/*!************************************!*\
  !*** ./lib/charts/choose_chart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n\n\nconst ChooseChart = (DATA) => {\n    const chartStyle = [\"Stacked\", \"Grouped\"];\n    chartStyle.forEach( style => {\n        const radio = document.createElement(\"INPUT\");\n        radio.setAttribute(\"type\", \"radio\");\n        radio.setAttribute(\"id\", `${style}`)\n\n        if (style === 'Stacked') {\n            radio.checked = true;\n        }\n\n        radio.onclick = () => {\n            const radios = document.getElementsByTagName(\"INPUT\")\n            for (let button of radios) {\n                if (button.checked) {\n                    button.checked = false;\n                }\n            }\n            radio.checked = true;\n            Object(_charts_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA);\n        }\n\n        const label = document.createElement(\"SPAN\");\n        const text = document.createTextNode(`${style}`);\n        label.appendChild(text);\n\n        document.body.appendChild(label);\n        document.body.appendChild(radio);\n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChooseChart);\n\n//# sourceURL=webpack:///./lib/charts/choose_chart.js?");

/***/ }),

/***/ "./lib/charts/grouped_chart.js":
/*!*************************************!*\
  !*** ./lib/charts/grouped_chart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GroupedChart = (DATA, borough) => {\n\n    const intermediate = Object.keys(DATA[borough]).map(year => {\n        return {\n            year: year,\n            Cyclist_Deaths: DATA[borough][year].cyclistDeaths,\n            Motorist_Deaths: DATA[borough][year].motoristDeaths,\n            Pedestrian_Deaths: DATA[borough][year].pedestrianDeaths,\n            // Person_Deaths: DATA[borough][year].personDeaths,\n            Cyclist_Injuries: Math.round(DATA[borough][year].cyclistInjuries / 100),\n            Pedestrian_Injuries: Math.round(DATA[borough][year].pedestrianInjuries / 100),\n            Motorist_Injuries: Math.round(DATA[borough][year].motoristInjuries / 100),\n            // Person_Injuries: Math.round(DATA[borough][year].personInjuries / 100),\n        };\n    })\n    const margin = { top: 20, right: 115, bottom: 30, left: 65 },\n        width = 700 - margin.left - margin.right,\n        height = 350 - margin.top - margin.bottom;\n    \n    const keys = intermediate.map( datum => {\n        return datum.year;\n    })\n\n    const categories = Object.keys(intermediate[0]).slice(1);\n\n    const x0 = d3.scaleBand()\n        .domain(keys)\n        .rangeRound([0, width], 0.1)\n\n    const x1 = d3.scaleBand()\n        .padding(0.05)\n        .domain(categories)\n        .rangeRound([0, x0.bandwidth()])\n    \n    const y = d3.scaleLinear()\n        .rangeRound([height, 0])\n        .domain([0, d3.max(intermediate, d => d3.max(categories, category => d[category]))]).nice()\n\n    const colors = category => {\n        if (category === \"Cyclist_Deaths\") {\n            return \"#ff8c00\"\n        } else if (category === \"Motorist_Deaths\") {\n            return \"#d0743c\"\n        } else if (category === \"Pedestrian_Deaths\") {\n            return \"#a05d56\"\n        } \n        // else if (category === \"Person_Deaths\") {\n        //     return \"#510639\"\n        // } \n        else if (category === \"Cyclist_Injuries\") {\n            return \"#6b486b\"\n        } else if (category === \"Motorist_Injuries\") {\n            return \"#8a89a6\"\n        } else if (category === \"Pedestrian_Injuries\") {\n            return \"#7b6888\"\n        } \n        // else if (category === \"Person_Injuries\") {\n        //     return \"#F4F9E1\"\n        // }\n    }\n\n    const xAxis = d3.axisBottom(x0)\n\n    const yAxis = d3.axisLeft(y)\n\n    const svg = d3.select('body')\n        .append('svg')\n        .attr('width', width + margin.left + margin.right)\n        .attr('height', height + margin.top + margin.bottom)\n        .append('g')\n        .attr('transform', `translate(${margin.left}, ${margin.top})`)\n\n    svg.append(\"g\")\n        .selectAll(\"g\")\n        .data(intermediate)\n        .enter()\n        .append(\"g\")\n        .attr(\"transform\", d => `translate(${x0(d.year)}, 0)`)\n        .selectAll(\"rect\")\n        .data((d) => { return categories.map(category => { \n            return { category, value: d[category] }\n        })})\n        .enter()\n        .append(\"rect\")\n        .attr(\"x\", d => {\n            return x1(d.category)\n        })\n        .attr(\"y\", d => {\n            return y(d.value)\n        })\n        .attr(\"width\", x1.bandwidth())\n        .attr(\"height\", d => (height - y(d.value)))\n        .attr(\"fill\", d => colors(d.category))\n        .on(\"mouseover\", function () { tooltip.style(\"display\", null) })\n        .on(\"mouseout\", function () { tooltip.style(\"display\", \"none\") })\n        .on(\"mousemove\", function (d) {\n            // console.log(d);\n            const xPosition = d3.mouse(this)[0] - 20;\n            const yPosition = d3.mouse(this)[1] - 20;\n\n            tooltip.attr(\"transform\", `translate(${xPosition}, ${yPosition})`);\n            tooltip.select(\"text\").text(function () {\n                const category = d.category.split('_').join(\" \");\n                if (category.includes(\"Injuries\")){\n                    return `${category} (in hundreds): ${d.value}`\n                } else {\n                    return `${category}: ${d.value}`\n                }\n            });\n        })\n\n    svg.append('g')\n        .attr('class', 'axis axis--x')\n        .attr('transform', `translate(0, ${height})`)\n        .call(xAxis)\n\n    svg.append('g')\n        .attr('class', 'axis axis--y')\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", `${0 - 45}`)\n        .attr(\"x\", `${0 - (height / 2)}`)\n        .attr(\"dy\", \"1em\")\n        .attr('fill', 'black')\n        .style(\"text-anchor\", \"middle\")\n        .text(\"Totals\");\n    \n    const tooltip = svg.append(\"g\")\n        .attr(\"class\", \"tooltip\")\n        .style(\"display\", \"none\");\n\n    tooltip.append(\"rect\")\n        .attr(\"width\", 100)\n        .attr(\"height\", 20)\n        .attr(\"fill\", \"grey\")\n        .style(\"opacity\", 0)\n        .style(\"pointer-events\", \"none\")\n\n    tooltip.append(\"text\")\n        .attr(\"x\", 80)\n        .attr(\"dy\", \"1.2em\")\n        .style(\"text-anchor\", \"middle\")\n        .attr(\"font-size\", \"12px\")\n        .attr(\"font-weight\", \"bold\")\n        .attr(\"fill\", \"black\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupedChart);\n\n//# sourceURL=webpack:///./lib/charts/grouped_chart.js?");

/***/ }),

/***/ "./lib/charts/stacked_chart.js":
/*!*************************************!*\
  !*** ./lib/charts/stacked_chart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst StackedChart = (DATA, borough) => {\n    const intermediate = Object.keys(DATA[borough]).map(year => {\n        return {\n            year: year,\n            Cyclist_Deaths: DATA[borough][year].cyclistDeaths,\n            Motorist_Deaths: DATA[borough][year].motoristDeaths,\n            Pedestrian_Deaths: DATA[borough][year].pedestrianDeaths,\n            // Person_Deaths: DATA[borough][year].personDeaths,\n            Cyclist_Injuries: Math.round(DATA[borough][year].cyclistInjuries / 100),\n            Pedestrian_Injuries: Math.round(DATA[borough][year].pedestrianInjuries / 100),\n            Motorist_Injuries: Math.round(DATA[borough][year].motoristInjuries / 100),\n            // Person_Injuries: Math.round(DATA[borough][year].personInjuries / 100),\n        };\n    })\n\n    const stackKeys = Object.keys(intermediate[0]).slice(1);\n\n    const series = d3.stack()\n        .keys(stackKeys)(intermediate);\n        \n    const margin = { top: 20, right: 115, bottom: 30, left: 65 },\n          width = 700 - margin.left - margin.right,\n          height = 350 - margin.top - margin.bottom;\n\n    const x = d3.scaleBand()\n        .domain(series[0].map(d => d.data.year))\n        .rangeRound([0, width], 0.1)\n\n    const y = d3.scaleLinear()\n        .domain([0, d3.max(series[5], d => (d[0] + d[1]))]).nice()\n        .rangeRound([height, 0])\n\n    const deaths = (i) => {\n        if (i === 0) {\n            return \"#ff8c00\"\n        } else if (i === 1) {\n            return \"#d0743c\"\n        } else if (i === 2) {\n            return \"#a05d56\"\n        } \n        // else if (i === 3) {\n        //     return \"#510639\"\n        // }\n    }\n\n    const injuries = (i) => {\n        if (i === 3) {\n            return \"#6b486b\"\n        } else if (i === 4) {\n            return \"#7b6888\"\n        } else if (i === 5) {\n            return \"#8a89a6\"\n        } \n        // else if (i === 7) {\n        //     return \"#F4F9E1\"\n        // }\n    }\n\n    const xAxis = d3.axisBottom(x)\n\n    const yAxis = d3.axisLeft(y)\n        .tickFormat( d => d)\n\n    const svg = d3.select('body')\n        .append('svg')\n        .attr('width', width + margin.left + margin.right)\n        .attr('height', height + margin.top + margin.bottom)\n        .append('g')\n        .attr('transform', `translate(${margin.left}, ${margin.top})`)\n\n    const layer = svg.selectAll('layer')\n        .data(series)\n        .enter()\n        .append('g')\n        .attr('class', 'layer')\n        .style('fill', (d, i) => i < 3 ? deaths(i) : injuries(i))\n\n\n    layer.selectAll('rect')\n        .data(d => d)\n        .enter()\n        .append('rect')\n        .attr('x', d => (x(d.data.year) + 2))\n        .attr('y', d => y(d[0] + d[1]))\n        .attr('height', d => (y(d[0]) - y(d[1] + d[0])))\n        .attr('width', x.bandwidth() - 4)\n        .on(\"mouseover\", function () { tooltip.style(\"display\", null) })\n        .on(\"mouseout\", function () { tooltip.style(\"display\", \"none\") })\n        .on(\"mousemove\", function (d) {\n            // console.log(d);\n            const xPosition = d3.mouse(this)[0] - 20;\n            const yPosition = d3.mouse(this)[1] - 20;\n            tooltip.attr(\"transform\", `translate(${xPosition}, ${yPosition})`);\n            tooltip.select(\"text\").text(function () {\n                let category;\n                const categories = Object.keys(d.data);\n                for (let i = 0; i < categories.length; i++) {\n                    if (d.data[categories[i]] === d[1] - d[0]) {\n                        category = categories[i].split('_').join(\" \");\n                        break;\n                    }\n                }\n                if (category.includes(\"Injuries\")) {\n                    return `${category} (in hundreds): ${d[1] - d[0]}`\n                } else {\n                    return `${category}: ${d[1] - d[0]}`\n                }\n            });\n        })\n\n    svg.append('g')\n        .attr('class', 'axis axis--x')\n        .attr('transform', `translate(0, ${height})`)\n        .call(xAxis)\n\n    svg.append('g')\n        .attr('class', 'axis axis--y')\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", `${0 - 45}`)\n        .attr(\"x\", `${0 - (height / 2)}`)\n        .attr(\"dy\", \"1em\")\n        .attr('fill', 'black')\n        .style(\"text-anchor\", \"middle\")\n        .text(\"Totals\");\n\n    const tooltip = svg.append(\"g\")\n        .attr(\"class\", \"tooltip\")\n        .style(\"display\", \"none\");\n\n    tooltip.append(\"rect\")\n        .attr(\"width\", 100)\n        .attr(\"height\", 20)\n        .attr(\"fill\", \"grey\")\n        .style(\"opacity\", 0)\n        .style(\"pointer-events\", \"none\")\n\n    tooltip.append(\"text\")\n        .attr(\"x\", 80)\n        .attr(\"dy\", \"1.2em\")\n        .style(\"text-anchor\", \"middle\")\n        .attr(\"font-size\", \"12px\")\n        .attr(\"font-weight\", \"bold\")\n        .attr(\"fill\", \"black\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedChart);\n\n//# sourceURL=webpack:///./lib/charts/stacked_chart.js?");

/***/ }),

/***/ "./lib/data/choose_data.js":
/*!*********************************!*\
  !*** ./lib/data/choose_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n\n\nconst ChooseData = (DATA) => {\n    Object.keys(DATA).forEach( borough => {\n        const btn = document.createElement('BUTTON')\n        btn.innerHTML = `${borough}`\n        btn.onclick = () => {\n            Object(_charts_chart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DATA, btn.innerHTML);\n        }\n        document.body.appendChild(btn);\n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChooseData);\n\n//# sourceURL=webpack:///./lib/data/choose_data.js?");

/***/ }),

/***/ "./lib/data/parse_data.js":
/*!********************************!*\
  !*** ./lib/data/parse_data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _charts_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chart */ \"./lib/charts/chart.js\");\n\n\nconst ParseData = (response) => {\n    const bronx = parseBoro(\"BRONX\", response);\n    const bronxDates = parseDates(bronx);\n    const Bronx = breakdownStats(bronxDates);\n\n    const brooklyn = parseBoro(\"BROOKLYN\", response);\n    const brooklynDates = parseDates(brooklyn);\n    const Brooklyn = breakdownStats(brooklynDates);\n\n    const queens = parseBoro(\"QUEENS\", response);\n    const queensDates = parseDates(queens);\n    const Queens = breakdownStats(queensDates);\n\n    const manhattan = parseBoro(\"MANHATTAN\", response);\n    const manhattanDates = parseDates(manhattan);\n    const Manhattan = breakdownStats(manhattanDates);\n\n    const statenIsland = parseBoro(\"STATEN ISLAND\", response);\n    const statenIslandDates = parseDates(statenIsland);\n    const StatenIsland = breakdownStats(statenIslandDates);\n\n    const NewYorkCity = sumTotals(Bronx, Brooklyn, Queens, Manhattan, StatenIsland);\n    \n    const Store = {\n        \"BRONX\": Bronx,\n        \"BROOKLYN\": Brooklyn,\n        \"QUEENS\": Queens,\n        \"MANHATTAN\": Manhattan,\n        \"STATEN ISLAND\": StatenIsland,\n        \"NYC\": NewYorkCity\n    }\n    return Store;\n}\n\nconst parseBoro = (boro, response) => {\n    const array = [];\n    response.forEach( element => {\n        if (element.borough === boro) {\n            array.push(element);\n        }\n    })\n\n    return array;\n}\n\nconst parseDates = (data) => {\n    const obj = {\n        2013: [],\n        2014: [],\n        2015: [],\n        2016: [],\n        2017: [],\n        2018: [],\n    };\n    data.forEach( element => {\n        const year = parseInt(element.date.split(\"-\")[0]);\n        obj[year].push(element);\n    })\n    return obj;\n}\n\nconst breakdownStats = (data) => {\n    const obj = {\n        2013: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2014: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2015: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2016: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2017: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2018: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n    };\n\n    Object.keys(obj).forEach(year => {\n        let cyclistDeaths,\n            motoristDeaths,\n            pedestrianDeaths,\n            // personDeaths,\n            cyclistInjuries,\n            motoristInjuries,\n            pedestrianInjuries;\n            // personInjuries;\n        \n        cyclistDeaths = data[year].map(datum => {\n           return datum.number_of_cyclist_killed ? parseInt(datum.number_of_cyclist_killed) : 0;\n        }) \n\n        motoristDeaths = data[year].map(datum => {\n           return datum.number_of_motorist_killed ? parseInt(datum.number_of_motorist_killed) : 0;\n        }) \n\n        pedestrianDeaths = data[year].map(datum => {\n           return datum.number_of_pedestrians_killed ? parseInt(datum.number_of_pedestrians_killed) : 0;\n        }) \n\n        // personDeaths = data[year].map(datum => {\n        //    return datum.number_of_persons_killed ? parseInt(datum.number_of_persons_killed) : 0;\n        // })\n        \n        cyclistInjuries = data[year].map(datum => {\n           return datum.number_of_cyclist_injured ? parseInt(datum.number_of_cyclist_injured) : 0;\n        })\n\n        motoristInjuries = data[year].map(datum => {\n           return datum.number_of_motorist_injured ? parseInt(datum.number_of_motorist_injured) : 0;\n        })\n\n        pedestrianInjuries = data[year].map(datum => {\n           return datum.number_of_pedestrians_injured ? parseInt(datum.number_of_pedestrians_injured) : 0;\n        })\n\n        // personInjuries = data[year].map(datum => {\n        //    return datum.number_of_persons_injured ? parseInt(datum.number_of_persons_injured) : 0;\n        // })\n        \n        if (cyclistDeaths.length > 0) {\n            cyclistDeaths = cyclistDeaths.reduce((acc, el) => acc + el);\n        }\n\n        if (motoristDeaths.length > 0) {\n            motoristDeaths = motoristDeaths.reduce((acc, el) => acc + el);\n        }\n\n        if (pedestrianDeaths.length > 0) {\n            pedestrianDeaths = pedestrianDeaths.reduce((acc, el) => acc + el);\n        }\n\n        // if (personDeaths.length > 0) {\n            // personDeaths = personDeaths.reduce((acc, el) => acc + el);\n        // }\n\n        if (cyclistInjuries.length > 0) {\n            cyclistInjuries = cyclistInjuries.reduce((acc, el) => acc + el);\n        }\n\n        if (motoristInjuries.length > 0) {\n            motoristInjuries = motoristInjuries.reduce((acc, el) => acc + el);\n        }\n\n        if (pedestrianInjuries.length > 0) {\n            pedestrianInjuries = pedestrianInjuries.reduce((acc, el) => acc + el);\n        }\n\n        // if (personInjuries.length > 0) {\n            // personInjuries = personInjuries.reduce((acc, el) => acc + el);\n        // }\n\n        obj[year].cyclistDeaths += cyclistDeaths;\n        obj[year].motoristDeaths += motoristDeaths;\n        obj[year].pedestrianDeaths += pedestrianDeaths;\n        // obj[year].personDeaths += personDeaths;\n        \n        obj[year].cyclistInjuries += cyclistInjuries;\n        obj[year].motoristInjuries += motoristInjuries;\n        obj[year].pedestrianInjuries += pedestrianInjuries;\n        // obj[year].personInjuries += personInjuries;\n    })\n    return obj;\n}\n\nconst sumTotals = (...args) => {\n    const obj = {\n        2013: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2014: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2015: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2016: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2017: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n        2018: {\n            cyclistDeaths: 0,\n            motoristDeaths: 0,\n            pedestrianDeaths: 0,\n            // personDeaths: 0,\n            cyclistInjuries: 0,\n            motoristInjuries: 0,\n            pedestrianInjuries: 0,\n            // personInjuries: 0,\n        },\n    };\n    args.forEach(borough => {\n        Object.keys(obj).forEach( year => {\n            obj[year].cyclistDeaths += borough[year].cyclistDeaths;\n            obj[year].motoristDeaths += borough[year].motoristDeaths;\n            obj[year].pedestrianDeaths += borough[year].pedestrianDeaths;\n            // obj[year].personDeaths += borough[year].personDeaths;\n\n            obj[year].cyclistInjuries += borough[year].cyclistInjuries;\n            obj[year].motoristInjuries += borough[year].motoristInjuries;\n            obj[year].pedestrianInjuries += borough[year].pedestrianInjuries;\n            // obj[year].personInjuries += borough[year].personInjuries;\n        })\n    })\n\n    return obj;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParseData);\n\n//# sourceURL=webpack:///./lib/data/parse_data.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_util_total_data_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util/total_data_util */ \"./lib/util/total_data_util.js\");\n/* harmony import */ var _lib_data_parse_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/data/parse_data */ \"./lib/data/parse_data.js\");\n/* harmony import */ var _lib_data_choose_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/data/choose_data */ \"./lib/data/choose_data.js\");\n/* harmony import */ var _lib_charts_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/charts/chart */ \"./lib/charts/chart.js\");\n/* harmony import */ var _lib_charts_choose_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/charts/choose_chart */ \"./lib/charts/choose_chart.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let DATA;\n    const url = new URL(\"https://data.cityofnewyork.us/resource/qiz3-axqb.json\");\n\n    const data = {\n        \"$select\": \"date, borough, number_of_persons_injured, number_of_persons_killed, number_of_pedestrians_injured, number_of_pedestrians_killed, number_of_cyclist_injured, number_of_cyclist_killed, number_of_motorist_injured, number_of_motorist_killed\",\n        \"$limit\": 1000000,\n        \"$where\": \"borough IS NOT NULL AND date > '2012-12-31' AND date < '2019-01-01'\",\n        \"$$app_token\": \"2sSaKKLyrQJ6NGnDCvtjftDQd\"\n    }\n\n    url.search = new URLSearchParams(data);\n\n    Object(_lib_util_total_data_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url).then(response => {\n        document.getElementById(\"loader\").remove();\n        DATA = Object(_lib_data_parse_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response);\n        Object(_lib_data_choose_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DATA);\n        Object(_lib_charts_choose_chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(DATA);\n        Object(_lib_charts_chart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DATA);\n    })\n})\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });