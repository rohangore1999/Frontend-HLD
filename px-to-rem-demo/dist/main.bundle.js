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

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://px-to-rem-demo/./css/style.css?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n// Import the CSS file so Webpack can process it\n\n\n// This script demonstrates accessibility features enabled by using rem units\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Get the toggle button\n  const fontSizeToggle = document.getElementById(\"font-size-toggle\");\n\n  // Track the current font size state\n  let largeFont = false;\n\n  // Add click event handler to toggle font size\n  fontSizeToggle.addEventListener(\"click\", function () {\n    // Toggle the font size by changing the root font size\n    // This works because we're using rem units in our CSS\n    if (largeFont) {\n      // Reset to default font size\n      document.documentElement.style.fontSize = \"16px\";\n      fontSizeToggle.textContent = \"Enable Larger Text\";\n    } else {\n      // Increase font size for better readability\n      document.documentElement.style.fontSize = \"20px\";\n      fontSizeToggle.textContent = \"Reset Text Size\";\n    }\n\n    // Toggle the state\n    largeFont = !largeFont;\n\n    console.log(`Font size is now ${document.documentElement.style.fontSize}`);\n  });\n\n  // Add a note about what's happening\n  console.log(\"This demo shows how rem units enable better accessibility.\");\n  console.log(\n    \"The original CSS uses pixel values, but PostCSS converts them to rem units.\"\n  );\n  console.log(\n    \"This allows the user to scale the entire UI by changing just the root font size.\"\n  );\n});\n\n\n//# sourceURL=webpack://px-to-rem-demo/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;