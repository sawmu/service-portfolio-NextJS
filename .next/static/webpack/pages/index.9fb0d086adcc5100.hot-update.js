"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Layouts.js":
/*!********************************!*\
  !*** ./src/layouts/Layouts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_colorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/colorContext */ \"./src/context/colorContext.js\");\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\n/* harmony import */ var _BackMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BackMobile */ \"./src/layouts/BackMobile.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ \"./src/layouts/Header.js\");\n/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Switcher */ \"./src/layouts/Switcher.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layouts = function(param) {\n    var children = param.children, bodyCls = param.bodyCls, extraPage = param.extraPage, light = param.light;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.querySelector(\"body\").classList = bodyCls ? bodyCls : \"dark fullscreendark\";\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), changeMobileMenu = ref.changeMobileMenu, mobileMenu = ref.mobileMenu;\n    var color = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_colorContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).color;\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().width;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (width > 1025) {\n            changeMobileMenu(false);\n        }\n    }, [\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/skins/\".concat(color, \".css\"),\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Personal Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page animated\",\n                style: {\n                    animationDuration: \"500ms\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Switcher__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    !extraPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        light: light\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 38,\n                        columnNumber: 24\n                    }, _this),\n                    \" \",\n                    extraPage ? children : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        id: \"main\",\n                        className: \"\".concat(width < 1025 ? mobileMenu ? \"open\" : \"\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                changeMobileMenu: changeMobileMenu,\n                                mobileMenu: mobileMenu\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this),\n                            children\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kyi Chan Nyein Linn\\\\Desktop\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layouts, \"1ZMkSxEHkY53pQ3y4/+WLVzPea0=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Layouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);\nvar _c;\n$RefreshReg$(_c, \"Layouts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDMkI7QUFDTDtBQUNKO0FBQ0Y7QUFDUDtBQUNSO0FBQ0k7O0FBRWxDLElBQU1VLE9BQU8sR0FBRyxnQkFBNkM7UUFBMUNDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDcERYLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxHQUFHTCxPQUFPLEdBQzlDQSxPQUFPLEdBQ1AscUJBQXFCLENBQUM7S0FDM0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLElBQXlDVixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0csMkRBQVUsQ0FBQyxFQUF2RGEsZ0JBQWdCLEdBQWlCaEIsR0FBc0IsQ0FBdkRnQixnQkFBZ0IsRUFBRUMsVUFBVSxHQUFLakIsR0FBc0IsQ0FBckNpQixVQUFVO0lBQ3BDLElBQU0sS0FBTyxHQUFLakIsaURBQVUsQ0FBQ0UsNkRBQVksQ0FBQyxDQUFsQ2dCLEtBQUs7SUFDYixJQUFNLEtBQU8sR0FBS2QsMERBQWEsRUFBRSxDQUF6QmUsS0FBSztJQUNibEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWtCLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDaEJILGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0tBQ0YsRUFBRTtRQUFDRyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNwQiwyQ0FBUTs7MEJBQ1AsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ3NCLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxLQUFLLEVBQUMsS0FBSzt3QkFDWEMsSUFBSSxFQUFFLFlBQVcsQ0FBUSxNQUFJLENBQVZMLEtBQUssRUFBQyxNQUFJLENBQUM7d0JBQzlCTSxHQUFHLEVBQUMsWUFBWTs7Ozs7NkJBQ2hCO29CQUFDLEdBQUc7a0NBQ04sOERBQUNDLE9BQUs7a0NBQUMsb0JBQWtCOzs7Ozs2QkFBUTs7Ozs7O3FCQUM1QjswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsaUJBQWlCLEVBQUUsT0FBTztpQkFBRTs7a0NBQ2xFLDhEQUFDdEIsaURBQVE7Ozs7NkJBQUc7b0JBRVgsQ0FBQ0ksU0FBUyxrQkFBSSw4REFBQ0wsK0NBQU07d0JBQUNNLEtBQUssRUFBRUEsS0FBSzs7Ozs7NkJBQUk7b0JBQ1gsR0FBRztvQkFDOUJELFNBQVMsR0FDUkYsUUFBUSxpQkFFUiw4REFBQ3FCLE1BQUk7d0JBQ0hDLEVBQUUsRUFBQyxNQUFNO3dCQUNUSixTQUFTLEVBQUUsRUFBQyxDQUFpRCxPQUEvQ1IsS0FBSyxHQUFHLElBQUksR0FBSUYsVUFBVSxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUksRUFBRSxDQUFFOzswQ0FHOUQsOERBQUNaLG1EQUFVO2dDQUNUVyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO2dDQUNsQ0MsVUFBVSxFQUFFQSxVQUFVOzs7OztxQ0FDdEI7NEJBQ0RSLFFBQVE7Ozs7Ozs2QkFDSjs7Ozs7O3FCQUVMO1lBQUMsR0FBRzs7Ozs7O2FBQ0QsQ0FDWDtDQUNIO0dBaERLRCxPQUFPOztRQVFPSixzREFBYTs7O0FBUjNCSSxLQUFBQSxPQUFPO0FBaURiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvTGF5b3V0cy5qcz82YjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29sb3JDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2NvbG9yQ29udGV4dFwiO1xyXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uYXZDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91c2VXaW5kb3dTaXplXCI7XHJcbmltcG9ydCBCYWNrTW9iaWxlIGZyb20gXCIuL0JhY2tNb2JpbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFN3aXRjaGVyIGZyb20gXCIuL1N3aXRjaGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXRzID0gKHsgY2hpbGRyZW4sIGJvZHlDbHMsIGV4dHJhUGFnZSwgbGlnaHQgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QgPSBib2R5Q2xzXHJcbiAgICAgID8gYm9keUNsc1xyXG4gICAgICA6IFwiZGFyayBmdWxsc2NyZWVuZGFya1wiO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB7IGNoYW5nZU1vYmlsZU1lbnUsIG1vYmlsZU1lbnUgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcbiAgY29uc3QgeyBjb2xvciB9ID0gdXNlQ29udGV4dChDb2xvckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpZHRoID4gMTAyNSkge1xyXG4gICAgICBjaGFuZ2VNb2JpbGVNZW51KGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbd2lkdGhdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcclxuICAgICAgICAgIGhyZWY9e2Bjc3Mvc2tpbnMvJHtjb2xvcn0uY3NzYH1cclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIDx0aXRsZT5QZXJzb25hbCBQb3J0Zm9saW88L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZSBhbmltYXRlZFwiIHN0eWxlPXt7IGFuaW1hdGlvbkR1cmF0aW9uOiBcIjUwMG1zXCIgfX0+XHJcbiAgICAgICAgPFN3aXRjaGVyIC8+XHJcbiAgICAgICAgey8qIEhlYWRlciBTdGFydHMgKi99XHJcbiAgICAgICAgeyFleHRyYVBhZ2UgJiYgPEhlYWRlciBsaWdodD17bGlnaHR9IC8+fVxyXG4gICAgICAgIHsvKiBNYWluIENvbnRlbnQgU3RhcnRzICovfXtcIiBcIn1cclxuICAgICAgICB7ZXh0cmFQYWdlID8gKFxyXG4gICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPG1haW5cclxuICAgICAgICAgICAgaWQ9XCJtYWluXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt3aWR0aCA8IDEwMjUgPyAobW9iaWxlTWVudSA/IFwib3BlblwiIDogXCJcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBCYWNrIFRvIEhvbWUgU3RhcnRzIFtPTkxZIE1PQklMRV0gKi99XHJcbiAgICAgICAgICAgIDxCYWNrTW9iaWxlXHJcbiAgICAgICAgICAgICAgY2hhbmdlTW9iaWxlTWVudT17Y2hhbmdlTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgICBtb2JpbGVNZW51PXttb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRzO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkNvbG9yQ29udGV4dCIsIk5hdkNvbnRleHQiLCJ1c2VXaW5kb3dTaXplIiwiQmFja01vYmlsZSIsIkhlYWRlciIsIlN3aXRjaGVyIiwiTGF5b3V0cyIsImNoaWxkcmVuIiwiYm9keUNscyIsImV4dHJhUGFnZSIsImxpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY2hhbmdlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnUiLCJjb2xvciIsIndpZHRoIiwibGluayIsInR5cGUiLCJtZWRpYSIsImhyZWYiLCJyZWwiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJtYWluIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Layouts.js\n"));

/***/ })

});