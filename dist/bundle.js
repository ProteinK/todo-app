/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(name) {\n  let items = [];\n\n  const proto = {\n    addItem(item) {\n      items.push(item);\n    },\n\n    getItems() {\n      return items;\n    }\n  };\n\n  return Object.assign(Object.create(proto), { name });\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectManager.js":
/*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nconst ProjectManager = (function () {\n  let projects = [];\n\n  function initialize() {\n    let project = (0,_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Default\");\n    addProject(project);\n  }\n\n  function addProject(project) {\n    projects.push(project);\n  }\n\n  function getProject(name) {\n    return projects.find(p => p.name === name);\n  }\n\n  return Object.assign({}, { initialize, addProject, getProject });\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n\n//# sourceURL=webpack://odin-todo/./src/ProjectManager.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, desc, date, priority) {\n  const proto = {\n    test() {\n      console.log(this.title);\n    }\n  };\n\n  return Object.assign(Object.create(proto), { title, desc, date, priority });\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/TodoItem.js?");

/***/ }),

/***/ "./src/controllers.js":
/*!****************************!*\
  !*** ./src/controllers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectController\": () => (/* binding */ ProjectController)\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n\n\nconst ProjectController = (function () {\n\n  function showItemForm() {\n    document.querySelector('#item-form').classList.toggle('hidden');\n  }\n\n  function addItem() {\n    let title = document.querySelector('#title').value;\n    let desc = document.querySelector('#desc').value;\n    let date = document.querySelector('#date').value;\n    let priority = document.querySelector('#priority').value;\n\n    let item = (0,_TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, desc, date, priority);\n    let project = _ProjectManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(\"Default\");\n    project.addItem(item);\n    _views__WEBPACK_IMPORTED_MODULE_2__.ProjectView.display(project);\n  }\n\n  return Object.assign({}, { showItemForm, addItem });\n})();\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/controllers.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n\n\n\n_ProjectManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialize();\n\n_views__WEBPACK_IMPORTED_MODULE_0__.ProjectView.display(_ProjectManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(\"Default\"));\n\n\n\n//# sourceURL=webpack://odin-todo/./src/main.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ItemView\": () => (/* binding */ ItemView),\n/* harmony export */   \"ProjectView\": () => (/* binding */ ProjectView)\n/* harmony export */ });\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ \"./src/controllers.js\");\n\n\nconst ProjectView = (function () {\n  function display(project) {\n    let main = document.querySelector('#main-project');\n    main.innerHTML = '';\n    let items = project.getItems();\n    for (const item of items) {\n      ItemView.display(item);\n    }\n\n    const btn = document.createElement('button');\n    btn.textContent = 'Add new item';\n    btn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.showItemForm);\n\n    main.appendChild(btn);\n  }\n\n  const addItemBtn = document.querySelector('#add-item');\n  addItemBtn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.addItem);\n\n  return Object.assign({}, { display });\n})();\n\nconst ItemView = (function () {\n  function display(item) {\n    let test = document.createElement('p');\n    test.textContent = item.title;\n    document.querySelector('#main-project').appendChild(test);\n  }\n\n  return Object.assign({}, { display });\n})();\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/views.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;