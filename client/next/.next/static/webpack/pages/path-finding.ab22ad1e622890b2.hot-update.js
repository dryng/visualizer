"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/path-finding",{

/***/ "./src/pages/path-finding/index.js":
/*!*****************************************!*\
  !*** ./src/pages/path-finding/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PathFindingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Grid */ \"./src/components/Grid.jsx\");\n/* harmony import */ var src_components_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Node */ \"./src/components/Node.jsx\");\n/* harmony import */ var _app_algos_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/algos/logger */ \"./src/app/algos/logger.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_features_grid_gridSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/features/grid/gridSlice */ \"./src/redux/features/grid/gridSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction sleep(ms) {\n    return new Promise((resolve)=>setTimeout(resolve, ms));\n}\nfunction pause(ms) {\n    var date = new Date();\n    var curDate = null;\n    do {\n        curDate = new Date();\n    }while (curDate - date < ms);\n}\nfunction PathFindingPage() {\n    _s();\n    const grid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.grid);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    async function algoCaller() {\n        //const response = await fetch('/api/algos/path-finding/bfs', {\n        const response = await fetch(\"http://127.0.0.1:8000/bfs/\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                data: grid\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(\"data response\", data);\n        // mark nodes visited in redux so nodes can change color\n        for (node of data.nodesVisited){\n            dispatch((0,_redux_features_grid_gridSlice__WEBPACK_IMPORTED_MODULE_5__.nodeVisited)(node[0], node[1]));\n            await sleep(100);\n        }\n        data.nodesVisited.map((node1)=>{\n            dispatch((0,_redux_features_grid_gridSlice__WEBPACK_IMPORTED_MODULE_5__.nodeVisited)(node1[0], node1[1]));\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hey\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                algo: _app_algos_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                algoName: \"BFS\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: algoCaller,\n                children: [\n                    \"Run: \",\n                    \"ALGO NAME\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(PathFindingPage, \"DUyxPHpDoOet50ttFvhf3nO8S8s=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = PathFindingPage;\nvar _c;\n$RefreshReg$(_c, \"PathFindingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aC1maW5kaW5nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNDO0FBQ2U7QUFDTztBQUU5RCxTQUFTTSxNQUFNQyxFQUFFLEVBQUU7SUFDZixPQUFPLElBQUlDLFFBQVFDLENBQUFBLFVBQVdDLFdBQVdELFNBQVNGO0FBQ3REO0FBQ0EsU0FBU0ksTUFBTUosRUFBRSxFQUFDO0lBQ2QsSUFBSUssT0FBTyxJQUFJQztJQUNmLElBQUlDLFVBQVUsSUFBSTtJQUNsQixHQUFHO1FBQUVBLFVBQVUsSUFBSUQ7SUFBUSxRQUNyQkMsVUFBUUYsT0FBT0wsSUFBSTtBQUM3QjtBQUVlLFNBQVNRLGtCQUFrQjs7SUFFdEMsTUFBTUMsT0FBT1osd0RBQVdBLENBQUMsQ0FBQ2EsUUFBVUEsTUFBTUQsSUFBSTtJQUM5QyxNQUFNRSxXQUFXZix3REFBV0E7SUFFNUIsZUFBZWdCLGFBQWE7UUFDeEIsK0RBQStEO1FBQy9ELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4QkFBOEI7WUFDdkRDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxNQUFNVjtZQUFLO1lBQ2xDVyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtRQUNKO1FBQ0EsTUFBTUQsT0FBTyxNQUFNTixTQUFTUSxJQUFJO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSjtRQUM3Qix3REFBd0Q7UUFDeEQsS0FBS0ssUUFBUUwsS0FBS00sWUFBWSxDQUFFO1lBQzVCZCxTQUFTYiwyRUFBV0EsQ0FBQzBCLElBQUksQ0FBQyxFQUFFLEVBQUVBLElBQUksQ0FBQyxFQUFFO1lBQ3JDLE1BQU16QixNQUFNO1FBQ2hCO1FBQ0FvQixLQUFLTSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxDQUFDRixRQUFTO1lBQzVCYixTQUFTYiwyRUFBV0EsQ0FBQzBCLEtBQUksQ0FBQyxFQUFFLEVBQUVBLEtBQUksQ0FBQyxFQUFFO1FBQ3pDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDbkMsMkRBQUlBO2dCQUFDb0MsTUFBTWxDLHlEQUFNQTtnQkFBRW1DLFVBQVU7Ozs7OzswQkFDOUIsOERBQUNDO2dCQUFPQyxTQUFTcEI7O29CQUFZO29CQUFNOzs7Ozs7Ozs7Ozs7O0FBRy9DLENBQUM7R0FqQ3VCSjs7UUFFUFgsb0RBQVdBO1FBQ1BELG9EQUFXQTs7O0tBSFJZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXRoLWZpbmRpbmcvaW5kZXguanM/YmQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZCBmcm9tIFwic3JjL2NvbXBvbmVudHMvR3JpZFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcInNyYy9jb21wb25lbnRzL05vZGVcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIkAvYXBwL2FsZ29zL2xvZ2dlclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBub2RlVmlzaXRlZCB9IGZyb20gXCJAL3JlZHV4L2ZlYXR1cmVzL2dyaWQvZ3JpZFNsaWNlXCI7XG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuZnVuY3Rpb24gcGF1c2UobXMpe1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgY3VyRGF0ZSA9IG51bGw7XG4gICAgZG8geyBjdXJEYXRlID0gbmV3IERhdGUoKTsgfVxuICAgIHdoaWxlKGN1ckRhdGUtZGF0ZSA8IG1zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0aEZpbmRpbmdQYWdlKCkge1xuICAgIFxuICAgIGNvbnN0IGdyaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyaWQpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFsZ29DYWxsZXIoKSB7XG4gICAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hbGdvcy9wYXRoLWZpbmRpbmcvYmZzJywge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2Jmcy9cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gc2hvdWxkIGJlIGdldCBidXQgY2FuIHNlbmQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiBncmlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXNwb25zZVwiLCBkYXRhKTtcbiAgICAgICAgLy8gbWFyayBub2RlcyB2aXNpdGVkIGluIHJlZHV4IHNvIG5vZGVzIGNhbiBjaGFuZ2UgY29sb3JcbiAgICAgICAgZm9yIChub2RlIG9mIGRhdGEubm9kZXNWaXNpdGVkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChub2RlVmlzaXRlZChub2RlWzBdLCBub2RlWzFdKSk7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEubm9kZXNWaXNpdGVkLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2gobm9kZVZpc2l0ZWQobm9kZVswXSwgbm9kZVsxXSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPmhleTwvaDE+XG4gICAgICAgICAgICA8R3JpZCBhbGdvPXtsb2dnZXJ9IGFsZ29OYW1lPXtcIkJGU1wifT48L0dyaWQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FsZ29DYWxsZXJ9PlJ1bjoge1wiQUxHTyBOQU1FXCJ9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiR3JpZCIsIk5vZGUiLCJsb2dnZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibm9kZVZpc2l0ZWQiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicGF1c2UiLCJkYXRlIiwiRGF0ZSIsImN1ckRhdGUiLCJQYXRoRmluZGluZ1BhZ2UiLCJncmlkIiwic3RhdGUiLCJkaXNwYXRjaCIsImFsZ29DYWxsZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiaGVhZGVycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibm9kZSIsIm5vZGVzVmlzaXRlZCIsIm1hcCIsImRpdiIsImgxIiwiYWxnbyIsImFsZ29OYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/path-finding/index.js\n"));

/***/ })

});