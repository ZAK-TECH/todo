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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RenderDOM.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/RenderDOM.js":
/*!**************************!*\
  !*** ./src/RenderDOM.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n    \r\n   function RenderList() { \r\n    \r\n    let todolist=[];\r\n    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));\r\n    let table = document.getElementById(\"ToDoTable\");\r\n\r\n    if(lastList!=null)todolist=lastList;\r\n    todolist.forEach( (todo)=>{\r\n\r\n    let row = table.insertRow(0);\r\n    let cell1 = row.insertCell(0);\r\n    let cell2 = row.insertCell(1);\r\n    let cell3 = row.insertCell(2);\r\n    let cell4 = row.insertCell(3);\r\n    let cell5=row.insertCell(4);7\r\n\r\n    \r\n    cell1.innerHTML = todo.name;\r\n    cell2.innerHTML=todo.toDoDate;\r\n    cell3.innerHTML=`<span class=\"badge badge-warning\">${todo.state}</span>`;\r\n    cell4.innerHTML='<div class=\"dropdown\"><button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">State</button><div class=\"dropdown-menu\"><button class=\"dropdown-item btn btn-primary \" >ToDo</button><button class=\"dropdown-item\">Done</button></div></div>';\r\n    cell5.innerHTML=`<div class=\"custom-control custom-switch\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch${todo.id}\" ><label class=\"custom-control-label\" for=\"customSwitch${todo.id}\"></label></div>`;\r\n\r\n    });\r\n\r\n  }\r\n  RenderList();\n\n//# sourceURL=webpack:///./src/RenderDOM.js?");

/***/ })

/******/ });