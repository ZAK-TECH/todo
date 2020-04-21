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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_RenderList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/RenderList */ \"./src/modules/RenderList.js\");\n/* harmony import */ var _modules_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todo */ \"./src/modules/Todo.js\");\n\n\n\nObject(_modules_RenderList__WEBPACK_IMPORTED_MODULE_0__[\"RenderList\"])();\nObject(_modules_Todo__WEBPACK_IMPORTED_MODULE_1__[\"AddTodo\"])();\nObject(_modules_Todo__WEBPACK_IMPORTED_MODULE_1__[\"changeState\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/RenderList.js":
/*!***********************************!*\
  !*** ./src/modules/RenderList.js ***!
  \***********************************/
/*! exports provided: RenderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderList\", function() { return RenderList; });\nfunction RenderList() {\n  var todolist = [];\n  var lastList = JSON.parse(localStorage.getItem('MyToDoList'));\n  var table = document.getElementById(\"ToDoTable\");\n  if (lastList != null) todolist = lastList;\n  todolist.forEach(function (todo) {\n    var row = table.insertRow(0);\n    var cell1 = row.insertCell(0);\n    var cell2 = row.insertCell(1);\n    var cell3 = row.insertCell(2);\n    var cell4 = row.insertCell(3);\n    var cell5 = row.insertCell(4);\n    cell1.innerHTML = todo.name;\n    cell2.innerHTML = todo.toDoDate;\n\n    if (todo.state == \"ToDo\") {\n      cell3.innerHTML = \"<span class=\\\"badge badge-warning\\\">\".concat(todo.state, \"</span>\");\n      cell4.innerHTML = \"<div class=\\\"dropdown\\\"><button type=\\\"button\\\" class=\\\"btn btn-primary dropdown-toggle\\\" data-toggle=\\\"dropdown\\\">State</button><div class=\\\"dropdown-menu\\\"><button class=\\\"dropdown-item\\\" id=\\\"D\".concat(todo.id, \"\\\">Done</button></div></div>\");\n    } else {\n      cell3.innerHTML = \"<span class=\\\"badge  badge-success\\\">\".concat(todo.state, \"</span>\");\n      cell4.innerHTML = \"<div class=\\\"dropdown\\\"><button type=\\\"button\\\" class=\\\"btn btn-primary dropdown-toggle\\\" data-toggle=\\\"dropdown\\\">State</button><div class=\\\"dropdown-menu\\\"><button class=\\\"dropdown-item btn btn-primary \\\"  id=\\\"T\".concat(todo.id, \"\\\" >ToDo</button></div></div>\");\n    }\n\n    cell5.innerHTML = \"<div class=\\\"custom-control custom-switch\\\"><input type=\\\"checkbox\\\" class=\\\"custom-control-input\\\" id=\\\"customSwitch\".concat(todo.id, \"\\\" ><label class=\\\"custom-control-label\\\" for=\\\"customSwitch\").concat(todo.id, \"\\\"></label></div>\");\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/RenderList.js?");

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/*! exports provided: default, AddTodo, changeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTodo\", function() { return AddTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeState\", function() { return changeState; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Todo = function Todo(name, toDoDate) {\n  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ToDo';\n  var isImportant = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'false';\n\n  _classCallCheck(this, Todo);\n\n  this.id = Date.now();\n  this.name = name;\n  this.toDoDate = toDoDate;\n  this.state = state;\n  this.isImportant = isImportant;\n};\n\n\nfunction AddTodo() {\n  var ToDoForm = document.getElementById(\"ToDoForm\");\n  ToDoForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    /* get last todo list from localstorage before writing to it */\n\n    var todolist = [];\n    var lastList = JSON.parse(localStorage.getItem('MyToDoList'));\n    if (lastList != null) todolist = lastList;\n    /* add  todo to local storage */\n\n    var todo = document.getElementById(\"toDoInput\").value;\n    var toDoDate = document.getElementById(\"toDoDate\").value;\n    if (toDoDate == \"\") toDoDate = \"Not mentionned\";\n    var todoObject = new Todo(todo, toDoDate);\n    todolist.push(todoObject); //console.warn('added',todolist);\n\n    localStorage.setItem('MyToDoList', JSON.stringify(todolist));\n    document.getElementById(\"ToDoForm\").reset();\n    /* Insert  todo into the  table */\n\n    /* let table = document.getElementById(\"ToDoTable\");\r\n    let row = table.insertRow(0);\r\n    let cell1 = row.insertCell(0);\r\n    let cell2 = row.insertCell(1);\r\n    let cell3 = row.insertCell(2);\r\n    let cell4 = row.insertCell(3);\r\n    let cell5=row.insertCell(4);\r\n    \r\n    cell1.innerHTML =todoObject.name;\r\n    cell2.innerHTML=todoObject.toDoDate;\r\n    cell3.innerHTML=`<span class=\"badge badge-warning\">${todoObject.state}</span>`;\r\n    cell4.innerHTML=`<div class=\"dropdown\"><button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">State</button><div class=\"dropdown-menu\"><button class=\"dropdown-item\" id=\"D${todo.id}\">Done</button></div></div>`;    \r\n    cell5.innerHTML=`<div class=\"custom-control custom-switch\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch${todoObject.id}\" ><label class=\"custom-control-label\" for=\"customSwitch${todoObject.id}\"></label></div>`; */\n\n    location.reload();\n  });\n}\nfunction changeState() {\n  var todolist = [];\n  var lastList = JSON.parse(localStorage.getItem('MyToDoList'));\n  if (lastList != null) todolist = lastList;\n  todolist.forEach(function (todo) {\n    if (todo.state == 'Done') {\n      var buttonId = 'T' + todo.id;\n      var setToDoButton = document.getElementById(buttonId);\n      setToDoButton.addEventListener(\"click\", function () {\n        todo.state = \"ToDo\"; //    localStorage.removeItem('MyToDoList');\n\n        localStorage.setItem('MyToDoList', JSON.stringify(todolist));\n        location.reload();\n      });\n    } else {\n      var butonId = 'D' + todo.id;\n      var setDoneButton = document.getElementById(butonId);\n      setDoneButton.addEventListener(\"click\", function () {\n        todo.state = \"Done\"; //    localStorage.removeItem('MyToDoList');\n\n        localStorage.setItem('MyToDoList', JSON.stringify(todolist));\n        location.reload();\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/Todo.js?");

/***/ })

/******/ });