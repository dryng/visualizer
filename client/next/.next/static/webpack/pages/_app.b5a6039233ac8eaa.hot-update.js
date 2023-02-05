"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/features/grid/gridSlice.js":
/*!**********************************************!*\
  !*** ./src/redux/features/grid/gridSlice.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nodeEnd\": function() { return /* binding */ nodeEnd; },\n/* harmony export */   \"nodeStart\": function() { return /* binding */ nodeStart; },\n/* harmony export */   \"nodeVisited\": function() { return /* binding */ nodeVisited; },\n/* harmony export */   \"nodeWeight\": function() { return /* binding */ nodeWeight; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst NUM_ROWS = 10;\nconst NUM_COLS = 10;\nfunction createGrid(rows, cols) {\n    // create an empty starting grid of nodes\n    const grid = [];\n    let count = 0;\n    for(let r = 0; r < rows; r++){\n        let row = [];\n        for(let c = 0; c < cols; c++){\n            row.push({\n                id: count,\n                x: rows - r - 1,\n                y: cols - c - 1,\n                weight: 1,\n                visited: false,\n                start: false,\n                end: false\n            });\n            count += 1;\n        }\n        grid.push(row);\n    }\n    return grid;\n}\nconst initialState = createGrid(NUM_COLS, NUM_ROWS);\n// createSlice uses \"immer\" which lets us write \"immutbale\" code, but its really just making a copy\nconst gridSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"grid\",\n    initialState,\n    reducers: {\n        nodeVisited: {\n            // prepare sends to reducer\n            // can call nodeVisited(x,y)\n            reducer (state, action) {\n                const { x , y  } = action.payload;\n                state[x][y].visited = true;\n            },\n            prepare (x, y) {\n                return {\n                    payload: {\n                        x,\n                        y\n                    }\n                };\n            }\n        },\n        nodeStart: {\n            reducer (state, action) {\n                // set => True or False.\n                // whether setting or unsetting\n                const { x , y , set  } = action.payload;\n                state[x][y].start = set;\n            },\n            prepare (x, y, set) {\n                return {\n                    payload: {\n                        x,\n                        y,\n                        set\n                    }\n                };\n            }\n        },\n        nodeEnd: {\n            reducer (state, action) {\n                const { x , y , set  } = action.payload;\n                state[x][y].end = set;\n            },\n            prepare (x, y, set) {\n                return {\n                    payload: {\n                        x,\n                        y,\n                        set\n                    }\n                };\n            }\n        },\n        nodeWeight: {\n            reducer (state, action) {\n                const { x , y  } = action.payload;\n                state[x][y].end = true;\n            },\n            prepare (x, y, weight) {\n                return {\n                    payload: {\n                        x,\n                        y,\n                        weight\n                    }\n                };\n            }\n        }\n    }\n});\nconst { nodeVisited , nodeStart , nodeEnd , nodeWeight  } = gridSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (gridSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRU8sTUFBTSxFQUFFUSxZQUFXLEVBQUVNLFVBQVMsRUFBRUUsUUFBTyxFQUFFQyxXQUFVLEVBQUUsR0FBR1osVUFBVWEsT0FBTyxDQUFDO0FBQ2pGLCtEQUFlYixVQUFVSSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2ZlYXR1cmVzL2dyaWQvZ3JpZFNsaWNlLmpzPzk1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBOVU1fUk9XUyA9IDEwO1xuY29uc3QgTlVNX0NPTFMgPSAxMDtcblxuZnVuY3Rpb24gY3JlYXRlR3JpZChyb3dzLCBjb2xzKSB7XG4gICAgLy8gY3JlYXRlIGFuIGVtcHR5IHN0YXJ0aW5nIGdyaWQgb2Ygbm9kZXNcbiAgICBjb25zdCBncmlkPSBbXTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjICsrKSB7XG4gICAgICAgICAgICByb3cucHVzaChcbiAgICAgICAgICAgICAgICB7aWQ6IGNvdW50LCB4OiAocm93cyAtIHIgLSAxKSwgeTogKGNvbHMgLSBjIC0gMSksIHdlaWdodDogMSwgdmlzaXRlZDogZmFsc2UsIHN0YXJ0OiBmYWxzZSwgZW5kOiBmYWxzZX1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGdyaWQucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZ3JpZDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0gY3JlYXRlR3JpZChOVU1fQ09MUywgTlVNX1JPV1MpXG4vLyBjcmVhdGVTbGljZSB1c2VzIFwiaW1tZXJcIiB3aGljaCBsZXRzIHVzIHdyaXRlIFwiaW1tdXRiYWxlXCIgY29kZSwgYnV0IGl0cyByZWFsbHkganVzdCBtYWtpbmcgYSBjb3B5XG5jb25zdCBncmlkU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2dyaWQnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBub2RlVmlzaXRlZDoge1xuICAgICAgICAgICAgLy8gcHJlcGFyZSBzZW5kcyB0byByZWR1Y2VyXG4gICAgICAgICAgICAvLyBjYW4gY2FsbCBub2RlVmlzaXRlZCh4LHkpXG4gICAgICAgICAgICByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHN0YXRlW3hdW3ldLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXBhcmUoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt4LCB5fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbm9kZVN0YXJ0OiB7XG4gICAgICAgICAgICByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgPT4gVHJ1ZSBvciBGYWxzZS5cbiAgICAgICAgICAgICAgICAvLyB3aGV0aGVyIHNldHRpbmcgb3IgdW5zZXR0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCBzZXQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHN0YXRlW3hdW3ldLnN0YXJ0ID0gc2V0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXBhcmUoeCwgeSwgc2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge3gsIHksIHNldH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5vZGVFbmQ6IHtcbiAgICAgICAgICAgIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgc2V0IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICBzdGF0ZVt4XVt5XS5lbmQgPSBzZXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlcGFyZSh4LCB5LCBzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7eCwgeSwgc2V0fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbm9kZVdlaWdodDoge1xuICAgICAgICAgICAgcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICBzdGF0ZVt4XVt5XS5lbmQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXBhcmUoeCwgeSwgd2VpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge3gsIHksIHdlaWdodH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IFxufSlcblxuZXhwb3J0IGNvbnN0IHsgbm9kZVZpc2l0ZWQsIG5vZGVTdGFydCwgbm9kZUVuZCwgbm9kZVdlaWdodCB9ID0gZ3JpZFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBncmlkU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJOVU1fUk9XUyIsIk5VTV9DT0xTIiwiY3JlYXRlR3JpZCIsInJvd3MiLCJjb2xzIiwiZ3JpZCIsImNvdW50IiwiciIsInJvdyIsImMiLCJwdXNoIiwiaWQiLCJ4IiwieSIsIndlaWdodCIsInZpc2l0ZWQiLCJzdGFydCIsImVuZCIsImluaXRpYWxTdGF0ZSIsImdyaWRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsIm5vZGVWaXNpdGVkIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInByZXBhcmUiLCJub2RlU3RhcnQiLCJzZXQiLCJub2RlRW5kIiwibm9kZVdlaWdodCIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/features/grid/gridSlice.js\n"));

/***/ })

});