/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-plusplus */\r\n/* eslint-disable-next-line no-plusplus */\r\n\r\nconst listElement = document.querySelector('ul');\r\n\r\nconst taskList = [\r\n  {\r\n    index: 0,\r\n    description: 'Going to the gym',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 2,\r\n    description: 'Visit Friends and Family',\r\n    completed: false,\r\n  },\r\n  {\r\n    index: 1,\r\n    description: 'Going home',\r\n    completed: false,\r\n  },\r\n];\r\n\r\nfunction populateList() {\r\n  for (let i = 0; i < taskList.length; i++) {\r\n    const newItem = document.createElement('li');\r\n\r\n    const inputCheckbox = document.createElement('input');\r\n    inputCheckbox.type = 'checkbox';\r\n    inputCheckbox.className = 'box';\r\n    newItem.appendChild(inputCheckbox);\r\n    inputCheckbox.style.marginRight = '10px';\r\n\r\n    const span = document.createElement('span');\r\n    span.innerHTML = taskList[i].description;\r\n    newItem.appendChild(span);\r\n\r\n    const anchorElement = document.createElement('a');\r\n    anchorElement.classList.add('delete');\r\n    anchorElement.innerHTML = '<i class=\"fas fa-trash-alt\"></i>';\r\n    anchorElement.style.float = 'right';\r\n    anchorElement.style.paddingLeft = '150px';\r\n    anchorElement.style.color = 'red';\r\n    newItem.appendChild(anchorElement);\r\n\r\n    listElement.appendChild(newItem);\r\n\r\n    \r\n  }\r\n}\r\n\r\npopulateList();\n\n//# sourceURL=webpack://webpack-bundler/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;