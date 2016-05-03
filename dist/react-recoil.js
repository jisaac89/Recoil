(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactRecoil"] = factory();
	else
		root["ReactRecoil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// for typescript we need to decalre module first.
	"use strict";

	var Align_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Align/Align\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Button_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Button/Button\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Card_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Card/Card\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Checkbox_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Checkbox/Checkbox\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Door_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Door/Door\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Dropdown_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Dropdown/Dropdown\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Emerge_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Emerge/Emerge\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Grid_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Grid/Grid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Input_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Input/Input\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Layer_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Layer/Layer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Loading_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Loading/Loading\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Modal_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Modal/Modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Pane_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Pane/Pane\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Selectable_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Selectable/Selectable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Shrink_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Shrink/Shrink\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Toolbar_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Toolbar/Toolbar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Transform_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Transform/Transform\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Wizard_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Wizard/Wizard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Shortcut_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Shortcut/Shortcut\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	    Align: Align_1.default,
	    Button: Button_1.default,
	    Card: Card_1.default,
	    Checkbox: Checkbox_1.default,
	    Door: Door_1.default,
	    Dropdown: Dropdown_1.default,
	    Emerge: Emerge_1.default,
	    Grid: Grid_1.default,
	    Input: Input_1.default,
	    Layer: Layer_1.default,
	    Loading: Loading_1.default,
	    Modal: Modal_1.default,
	    Pane: Pane_1.default,
	    Selectable: Selectable_1.default,
	    Shrink: Shrink_1.default,
	    Toolbar: Toolbar_1.default,
	    Transform: Transform_1.default,
	    Wizard: Wizard_1.default,
	    Shortcut: Shortcut_1.default
	};

/***/ }
/******/ ])
});
;