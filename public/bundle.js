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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/dates.js":
/*!****************************!*\
  !*** ./constants/dates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    new Date(2018, 1, 1, 15, 0, 0),\r\n    new Date(2018, 1, 1, 15, 15, 0),\r\n    new Date(2018, 1, 1, 16, 10, 0),\r\n    new Date(2018, 1, 1, 17, 25, 0),\r\n]);\r\n\n\n//# sourceURL=webpack:///./constants/dates.js?");

/***/ }),

/***/ "./constants/days.js":
/*!***************************!*\
  !*** ./constants/days.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    \"Monday\",\r\n    \"Tuesday\",\r\n    \"Wednesday\",\r\n    \"Thursday\",\r\n    \"Friday\",\r\n    \"Saturday\",\r\n    \"Sunday\",\r\n]);\n\n//# sourceURL=webpack:///./constants/days.js?");

/***/ }),

/***/ "./js/Interval.js":
/*!************************!*\
  !*** ./js/Interval.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Interval; });\nclass Interval {\r\n    constructor(day, start, end) {\r\n        this.day= day;\r\n        this.start = start;\r\n        this.end = end;\r\n    }\r\n    \r\n    static empty() {\r\n        return new Interval(null, new Date(), new Date());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Interval.js?");

/***/ }),

/***/ "./js/IntervalsModel.js":
/*!******************************!*\
  !*** ./js/IntervalsModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IntervalsModel; });\n/* harmony import */ var _Interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interval */ \"./js/Interval.js\");\n/* harmony import */ var _constants_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/days */ \"./constants/days.js\");\n/* harmony import */ var _constants_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dates */ \"./constants/dates.js\");\n\r\n\r\n\r\n\r\nfunction IntervalsModel() {\r\n    this.intervals = [\r\n        new _Interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants_days__WEBPACK_IMPORTED_MODULE_1__[\"default\"][2], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][0], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][1]),\r\n        new _Interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants_days__WEBPACK_IMPORTED_MODULE_1__[\"default\"][6], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][1], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][2]),\r\n        new _Interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants_days__WEBPACK_IMPORTED_MODULE_1__[\"default\"][4], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][2], _constants_dates__WEBPACK_IMPORTED_MODULE_2__[\"default\"][3]),\r\n    ]; \r\n\r\n    this.add = function() {\r\n        this.intervals.push(_Interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"].empty());\r\n    };\r\n    \r\n    this.remove = function(interval) {\r\n        this.intervals.remove(interval);\r\n    };\r\n\t\r\n\tthis.save = function() {\r\n        const intervalsJSON = JSON.stringify(this.intervals());\r\n\t\tlocalStorage.setItem(\"intervals\", intervalsJSON);\r\n    };\r\n\t\r\n\tthis.load = function() {\r\n        const intervalsJSON = localStorage.getItem(\"intervals\");\r\n        const newIntervals = JSON.parse(intervalsJSON);\r\n        this.intervals = newIntervals;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./js/IntervalsModel.js?");

/***/ }),

/***/ "./js/IntervalsViewModel.js":
/*!**********************************!*\
  !*** ./js/IntervalsViewModel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IntrevalsViewModel; });\n/* harmony import */ var _Interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interval */ \"./js/Interval.js\");\n/* harmony import */ var _constants_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/days */ \"./constants/days.js\");\n\r\n\r\n\r\nfunction IntrevalsViewModel(intrevalsModel) {\r\n    const self = this;\r\n\r\n    self.intrevalsModel = intrevalsModel;\r\n\r\n    self.intervals = ko.observableArray(self.intrevalsModel.intervals);\r\n\r\n    self.days = ko.observableArray(_constants_days__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n    // self.dates = ko.observableArray([\r\n    //     obs(dates[0]),\r\n    //     obs(dates[1]),\r\n    //     obs(dates[2]),\r\n    //     obs(dates[3]),\r\n    // ]);\r\n\r\n    // self.intervals = ko.observableArray([\r\n    //     new Interval(self.days()[2], self.dates()[0], self.dates()[1]),\r\n    //     new Interval(self.days()[6], self.dates()[1], self.dates()[2]),\r\n    //     new Interval(self.days()[4], self.dates()[2], self.dates()[3]),\r\n    // ]);\r\n\r\n    self.updateIntevalsFromModel = function() {\r\n        self.intervals(self.intrevalsModel.intervals);\r\n    }\r\n    \r\n    self.addInterval = function() {\r\n        const newInterval = _Interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"].empty();\r\n        self.intrevalsModel.add(newInterval);\r\n        self.updateIntevalsFromModel();\r\n        // self.intervals()[0].start = new Date();\r\n    };\r\n    \r\n    self.removeInterval = function(interval) {\r\n        self.intrevalsModel.remove(interval);\r\n        self.updateIntevalsFromModel();\r\n    };\r\n\t\r\n\tself.save = function() {\r\n        self.intrevalsModel.save();\r\n    };\r\n\t\r\n\tself.load = function() {\r\n        self.intrevalsModel.load();\r\n        self.updateIntevalsFromModel();\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./js/IntervalsViewModel.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IntervalsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntervalsModel */ \"./js/IntervalsModel.js\");\n/* harmony import */ var _IntervalsViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntervalsViewModel */ \"./js/IntervalsViewModel.js\");\n\r\n\r\n\r\nko.bindingHandlers.defaultTime = {\r\n    init: function(element, valueAccessor) {\r\n        $(element).timepicker({\r\n            defaultTime: valueAccessor(),\r\n            timeFormat: \"HH:mm:ss\",\r\n        });\r\n    },\r\n};\r\n\r\nconst intervalsModel = new _IntervalsModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst intrevalsViewModel = new _IntervalsViewModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](intervalsModel);\r\nconsole.log(\"CCC\")\r\nko.applyBindings(intrevalsViewModel);\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./js/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/index.js */\"./js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./js/index.js?");

/***/ })

/******/ });