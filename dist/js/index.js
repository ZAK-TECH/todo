!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}o.r(e);var r,a,i,c=function t(e,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ToDo",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"false";n(this,t),this.id=Date.now(),this.name=e,this.toDoDate=o,this.state=r,this.isImportant=a};r=[],a=JSON.parse(localStorage.getItem("MyToDoList")),i=document.getElementById("ToDoTable"),null!=a&&(r=a),r.forEach((function(t){var e=i.insertRow(0),o=e.insertCell(0),n=e.insertCell(1),r=e.insertCell(2),a=e.insertCell(3),c=e.insertCell(4);o.innerHTML=t.name,n.innerHTML=t.toDoDate,"ToDo"==t.state?(r.innerHTML='<span class="badge badge-warning">'.concat(t.state,"</span>"),a.innerHTML='<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item" id="D'.concat(t.id,'">Done</button></div></div>')):(r.innerHTML='<span class="badge  badge-success">'.concat(t.state,"</span>"),a.innerHTML='<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item btn btn-primary "  id="T'.concat(t.id,'" >ToDo</button></div></div>')),c.innerHTML='<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch'.concat(t.id,'" ><label class="custom-control-label" for="customSwitch').concat(t.id,'"></label></div>'),document.getElementById("customSwitch"+t.id).checked=t.isImportant})),document.getElementById("ToDoForm").addEventListener("submit",(function(t){t.preventDefault();var e=[],o=JSON.parse(localStorage.getItem("MyToDoList"));null!=o&&(e=o);var n=document.getElementById("toDoInput").value,r=document.getElementById("toDoDate").value;""==r&&(r="Not mentionned");var a=new c(n,r);e.push(a),localStorage.setItem("MyToDoList",JSON.stringify(e)),document.getElementById("ToDoForm").reset(),location.reload()})),function(){var t=[],e=JSON.parse(localStorage.getItem("MyToDoList"));null!=e&&(t=e),t.forEach((function(e){if("Done"==e.state){var o="T"+e.id;document.getElementById(o).addEventListener("click",(function(){e.state="ToDo",localStorage.setItem("MyToDoList",JSON.stringify(t)),location.reload()}))}else{var n="D"+e.id;document.getElementById(n).addEventListener("click",(function(){e.state="Done",localStorage.setItem("MyToDoList",JSON.stringify(t)),location.reload()}))}}))}(),function(){var t=[],e=JSON.parse(localStorage.getItem("MyToDoList"));null!=e&&(t=e),t.forEach((function(e){var o="customSwitch"+e.id,n=document.getElementById(o);n.addEventListener("change",(function(){e.isImportant=n.checked,console.log(n.checked),localStorage.setItem("MyToDoList",JSON.stringify(t))}))}))}()}]);