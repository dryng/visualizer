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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PathFindingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_components_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Grid */ \"./src/components/Grid.jsx\");\n/* harmony import */ var src_components_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Node */ \"./src/components/Node.jsx\");\n/* harmony import */ var _app_algos_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/algos/logger */ \"./src/app/algos/logger.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_features_grid_gridSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/features/grid/gridSlice */ \"./src/redux/features/grid/gridSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction sleep(ms) {\n    return new Promise((resolve)=>setTimeout(resolve, ms));\n}\nfunction PathFindingPage() {\n    _s();\n    const grid = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.grid);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    async function algoCaller() {\n        //const response = await fetch('/api/algos/path-finding/bfs', {\n        const response = await fetch(\"http://127.0.0.1:8000/bfs/\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                data: grid\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(\"data response\", data);\n        // mark nodes visited in redux so nodes can change color\n        data.nodesVisited.map((node)=>{\n            dispatch((0,_redux_features_grid_gridSlice__WEBPACK_IMPORTED_MODULE_5__.nodeVisited)(node[0], node[1]));\n            sleep(1000);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hey\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_components_Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                algo: _app_algos_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                algoName: \"BFS\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: algoCaller,\n                children: [\n                    \"Run: \",\n                    \"ALGO NAME\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Code/Web/visualizer/client/next/src/pages/path-finding/index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(PathFindingPage, \"DUyxPHpDoOet50ttFvhf3nO8S8s=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = PathFindingPage;\nvar _c;\n$RefreshReg$(_c, \"PathFindingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aC1maW5kaW5nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNDO0FBQ2U7QUFDTztBQUU5RCxTQUFTTSxNQUFNQyxFQUFFLEVBQUU7SUFDZixPQUFPLElBQUlDLFFBQVFDLENBQUFBLFVBQVdDLFdBQVdELFNBQVNGO0FBQ3REO0FBRWUsU0FBU0ksa0JBQWtCOztJQUN0QyxNQUFNQyxPQUFPUix3REFBV0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNRCxJQUFJO0lBQzlDLE1BQU1FLFdBQVdYLHdEQUFXQTtJQUU1QixlQUFlWSxhQUFhO1FBQ3hCLCtEQUErRDtRQUMvRCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sOEJBQThCO1lBQ3ZEQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsTUFBTVY7WUFBSztZQUNsQ1csU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUNBLE1BQU1ELE9BQU8sTUFBTU4sU0FBU1EsSUFBSTtRQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQko7UUFDN0Isd0RBQXdEO1FBQ3hEQSxLQUFLSyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO1lBQzVCZixTQUFTVCwyRUFBV0EsQ0FBQ3dCLElBQUksQ0FBQyxFQUFFLEVBQUVBLElBQUksQ0FBQyxFQUFFO1lBQ3JDdkIsTUFBTTtRQUNWO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3dCOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQy9CLDJEQUFJQTtnQkFBQ2dDLE1BQU05Qix5REFBTUE7Z0JBQUUrQixVQUFVOzs7Ozs7MEJBQzlCLDhEQUFDQztnQkFBT0MsU0FBU3BCOztvQkFBWTtvQkFBTTs7Ozs7Ozs7Ozs7OztBQUcvQyxDQUFDO0dBN0J1Qko7O1FBQ1BQLG9EQUFXQTtRQUNQRCxvREFBV0E7OztLQUZSUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF0aC1maW5kaW5nL2luZGV4LmpzP2JkMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWQgZnJvbSBcInNyYy9jb21wb25lbnRzL0dyaWRcIjtcbmltcG9ydCBOb2RlIGZyb20gXCJzcmMvY29tcG9uZW50cy9Ob2RlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJAL2FwcC9hbGdvcy9sb2dnZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbm9kZVZpc2l0ZWQgfSBmcm9tIFwiQC9yZWR1eC9mZWF0dXJlcy9ncmlkL2dyaWRTbGljZVwiO1xuXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0aEZpbmRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGdyaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyaWQpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFsZ29DYWxsZXIoKSB7XG4gICAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hbGdvcy9wYXRoLWZpbmRpbmcvYmZzJywge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2Jmcy9cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gc2hvdWxkIGJlIGdldCBidXQgY2FuIHNlbmQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiBncmlkIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXNwb25zZVwiLCBkYXRhKTtcbiAgICAgICAgLy8gbWFyayBub2RlcyB2aXNpdGVkIGluIHJlZHV4IHNvIG5vZGVzIGNhbiBjaGFuZ2UgY29sb3JcbiAgICAgICAgZGF0YS5ub2Rlc1Zpc2l0ZWQubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChub2RlVmlzaXRlZChub2RlWzBdLCBub2RlWzFdKSk7XG4gICAgICAgICAgICBzbGVlcCgxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5oZXk8L2gxPlxuICAgICAgICAgICAgPEdyaWQgYWxnbz17bG9nZ2VyfSBhbGdvTmFtZT17XCJCRlNcIn0+PC9HcmlkPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthbGdvQ2FsbGVyfT5SdW46IHtcIkFMR08gTkFNRVwifTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkdyaWQiLCJOb2RlIiwibG9nZ2VyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIm5vZGVWaXNpdGVkIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIlBhdGhGaW5kaW5nUGFnZSIsImdyaWQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWxnb0NhbGxlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJub2Rlc1Zpc2l0ZWQiLCJtYXAiLCJub2RlIiwiZGl2IiwiaDEiLCJhbGdvIiwiYWxnb05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/path-finding/index.js\n"));

/***/ })

});