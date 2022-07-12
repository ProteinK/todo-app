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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(name) {\n  let items = [];\n\n  const proto = {\n    addItem(item) {\n      items.push(item);\n    },\n\n    getItems() {\n      return items;\n    },\n\n    getItem(index) {\n      return items[index];\n    },\n\n    removeItem(index) {\n      items.splice(index, 1);\n    }\n  };\n\n  return Object.assign(Object.create(proto), { name });\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectManager.js":
/*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nconst ProjectManager = (function () {\n  let projects = [];\n\n  function initialize() {\n    let project = (0,_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Default\");\n    addProject(project);\n  }\n\n  function addProject(project) {\n    projects.push(project);\n  }\n\n  function getProject(name) {\n    return projects.find(p => p.name === name);\n  }\n\n  function getProjects() {\n    return projects;\n  }\n\n  return Object.assign({}, { initialize, addProject, getProject, getProjects });\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n\n//# sourceURL=webpack://odin-todo/./src/ProjectManager.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ItemController\": () => (/* binding */ ItemController),\n/* harmony export */   \"ProjectController\": () => (/* binding */ ProjectController)\n/* harmony export */ });\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n\n\n\nconst ProjectController = (function () {\n\n  function showProjectForm() {\n    document.querySelector('#project-form').classList.toggle('hidden');\n  }\n\n  function showItemForm() {\n    let projects = _ProjectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects();\n    const select = document.querySelector('#picked-project');\n    select.innerHTML = '';\n\n    for (const project of projects) {\n      let option = document.createElement('option');\n      option.value = project.name;\n      option.textContent = project.name;\n      if (option.value === 'Default') {\n        option.selected = true;\n      }\n      select.appendChild(option);\n    }\n\n    document.querySelector('#item-form').classList.toggle('hidden');\n  }\n\n  function addProject() {\n    let projectName = document.querySelector('#project-name').value;\n    let project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName);\n    _ProjectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(project);\n  }\n\n  function addItem() {\n    let title = document.querySelector('#title').value;\n    let desc = document.querySelector('#desc').value;\n    let date = document.querySelector('#date').value;\n    let priority = document.querySelector('#priority').value;\n\n    let item = (0,_TodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, desc, date, priority);\n\n    let projectName = document.querySelector('#picked-project').value;\n    let project = _ProjectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProject(projectName);\n    project.addItem(item);\n    if (projectName === 'Default') {\n      _views__WEBPACK_IMPORTED_MODULE_3__.ProjectView.display(project, false);\n    }\n    else {\n      _views__WEBPACK_IMPORTED_MODULE_3__.ProjectView.display(project);\n    }\n  }\n\n  function removeItem(itemView) {\n    let projectName = itemView.getAttribute('data-project');\n    let index = itemView.getAttribute('data-index');\n    let project = _ProjectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProject(projectName);\n\n    project.removeItem(index);\n    _views__WEBPACK_IMPORTED_MODULE_3__.ProjectView.display(project);\n  }\n\n  return Object.assign({}, { showItemForm, addItem, removeItem, showProjectForm, addProject });\n})();\n\nconst ItemController = (function () {\n\n  function editItem(itemView) {\n    let projectName = itemView.getAttribute('data-project');\n    let index = itemView.getAttribute('data-index');\n    let project = _ProjectManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProject(projectName);\n\n    let item = project.getItem(index);\n\n    let inputs = itemView.querySelectorAll('input');\n    let btn = itemView.querySelector('button#edit');\n\n    // first click\n    if (inputs[0].readOnly) {\n      for (const input of inputs) {\n        input.readOnly = false;\n      }\n      btn.textContent = 'Done';\n    } else {\n      // finished editing\n      for (const input of inputs) {\n        input.readOnly = true;\n        item[input.name] = input.value;\n      }\n      btn.textContent = 'Edit';\n    }\n  }\n\n  return Object.assign({}, { editItem });\n})();\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/controllers.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n\n\n\n_ProjectManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialize();\n\n_views__WEBPACK_IMPORTED_MODULE_0__.ProjectView.display(_ProjectManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProject(\"Default\"), false);\n\n\n\n//# sourceURL=webpack://odin-todo/./src/main.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ItemView\": () => (/* binding */ ItemView),\n/* harmony export */   \"ProjectView\": () => (/* binding */ ProjectView)\n/* harmony export */ });\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers */ \"./src/controllers.js\");\n\n\nconst ProjectView = (function () {\n  function display(project, collapsed = true) {\n    let main = document.querySelector('#projects');\n\n    // clear out the project view first\n    let temp = main.querySelector(`.project[data-project=${project.name}]`);\n    if (temp) {\n      main.removeChild(temp);\n    }\n\n    let projectView = document.createElement('div');\n    projectView.classList.add('project');\n    projectView.setAttribute('data-project', project.name);\n    let title = document.createElement('h1');\n    title.textContent = project.name;\n    title.addEventListener('click', () => {\n      display(project, !collapsed);\n    });\n\n    projectView.appendChild(title);\n\n    if (!collapsed) {\n      let items = project.getItems();\n      for (let i = 0; i < items.length; i++) {\n        let item = project.getItem(i);\n        ItemView.display(item, i, project.name, projectView);\n      }\n    }\n\n    main.appendChild(projectView);\n  }\n\n  const addItemBtn = document.querySelector('#add-item');\n  addItemBtn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.addItem);\n\n  const addProjectBtn = document.querySelector('#add-project');\n  addProjectBtn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.addProject);\n\n  const btn = document.querySelector('#add-new-item');\n  btn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.showItemForm);\n\n  const newProjectBtn = document.querySelector('#add-new-project');\n  newProjectBtn.addEventListener('click', _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.showProjectForm);\n\n  return Object.assign({}, { display });\n})();\n\nconst ItemView = (function () {\n  function expandItem(item, element) {\n    const main = document.createElement('div');\n    main.classList.add('expanded-item');\n\n    const div = document.createElement('div');\n\n    let desc = document.createElement('input');\n    desc.value = item.desc;\n    desc.readOnly = true;\n    desc.name = 'desc';\n    let date = document.createElement('input');\n    date.setAttribute('type', 'date');\n    date.value = item.date;\n    date.readOnly = true;\n    date.name = 'date';\n\n    div.appendChild(desc);\n    div.appendChild(date);\n\n    main.appendChild(div);\n\n    const editBtn = document.createElement('button');\n    editBtn.textContent = 'Edit';\n    editBtn.id = 'edit';\n    editBtn.addEventListener('click', () => {\n      _controllers__WEBPACK_IMPORTED_MODULE_0__.ItemController.editItem(element);\n    });\n    main.appendChild(editBtn);\n\n    const removeBtn = document.createElement('button');\n    removeBtn.textContent = 'Remove';\n    removeBtn.addEventListener('click', () => {\n      _controllers__WEBPACK_IMPORTED_MODULE_0__.ProjectController.removeItem(element);\n    });\n    main.appendChild(removeBtn);\n\n    element.appendChild(main);\n  }\n\n  function collapseItem(element) {\n    let div = element.querySelector('.expanded-item');\n    element.removeChild(div);\n  }\n\n  function display(item, index, projectName, projectView) {\n    let view = document.createElement('div');\n    view.setAttribute('data-index', index);\n    view.setAttribute('data-project', projectName);\n    let p = document.createElement('p');\n    p.textContent = item.title;\n    view.classList.add('todo-item');\n\n    if (item.priority == 1) {\n      view.classList.add('item-priority-1');\n    } else if (item.priority == 2) {\n      view.classList.add('item-priority-2');\n    } else {\n      view.classList.add('item-priority-3');\n    }\n\n    p.addEventListener('click', e => {\n      if (view.querySelector('.expanded-item')) {\n        collapseItem(view);\n      } else {\n        expandItem(item, view);\n      }\n    });\n    view.appendChild(p);\n    projectView.appendChild(view);\n  }\n\n  return Object.assign({}, { display });\n})();\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/views.js?");

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