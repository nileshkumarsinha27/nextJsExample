webpackHotUpdate("static/development/pages/books.js",{

/***/ "./components/listItem/ListItem.js":
/*!*****************************************!*\
  !*** ./components/listItem/ListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _articleDetails_ArticleDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articleDetails/ArticleDetails */ "./components/articleDetails/ArticleDetails.js");
/* harmony import */ var _bookDetails_BookDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookDetails/BookDetails */ "./components/bookDetails/BookDetails.js");
var _jsxFileName = "/home/nileshsinha/Desktop/Examples/nextApp/nextJsExample/components/listItem/ListItem.js";





var ListItem = function ListItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    key: props.index,
    className: "jsx-1936012938" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.fromArticles ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_articleDetails_ArticleDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.elem,
    index: props.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bookDetails_BookDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props.elem,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1936012938",
    __self: this
  }, ".list-item.jsx-1936012938{display:inline-grid;display:-webkit-inline-grid;display:-moz-inline-grid;display:-ms-inline-grid;display:-o-inline-grid;width:29%;border:1px solid #dbdfe3;padding:2%;border-radius:5px;box-shadow:0 0 31px 0 rgba(0,0,0,0.12);height:auto;margin:2%;background:#fff;}@media (min-width:480px) and (max-width:767px){.list-item.jsx-1936012938{width:46%;}}@media (min-width:320px) and (max-width:479px){.list-item.jsx-1936012938{width:96%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pbGVzaHNpbmhhL0Rlc2t0b3AvRXhhbXBsZXMvbmV4dEFwcC9uZXh0SnNFeGFtcGxlL2NvbXBvbmVudHMvbGlzdEl0ZW0vTGlzdEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVU8sQUFHK0IsQUFpQlIsQUFLQSxVQUpaLEFBS0EsVUF0QjRCLDRCQUNILHlCQUNELHdCQUNELHVCQUNiLFVBQ2UseUJBQ2QsV0FDTyxrQkFDd0IsdUNBQzlCLFlBQ0YsVUFDTSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvbmlsZXNoc2luaGEvRGVza3RvcC9FeGFtcGxlcy9uZXh0QXBwL25leHRKc0V4YW1wbGUvY29tcG9uZW50cy9saXN0SXRlbS9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlRGV0YWlscyBmcm9tICcuLi9hcnRpY2xlRGV0YWlscy9BcnRpY2xlRGV0YWlscyc7XG5pbXBvcnQgQm9va0RldGFpbHMgZnJvbSAnLi4vYm9va0RldGFpbHMvQm9va0RldGFpbHMnO1xuY29uc3QgTGlzdEl0ZW0gPSBwcm9wcyA9PiAoXG4gIDxsaSBrZXk9e3Byb3BzLmluZGV4fSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICB7cHJvcHMuZnJvbUFydGljbGVzID8gKFxuICAgICAgPEFydGljbGVEZXRhaWxzIGRhdGE9e3Byb3BzLmVsZW19IGluZGV4PXtwcm9wcy5pbmRleH0gLz5cbiAgICApIDogKFxuICAgICAgPEJvb2tEZXRhaWxzIGRhdGE9e3Byb3BzLmVsZW19IGluZGV4PXtpbmRleH0gLz5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ncmlkO1xuICAgICAgICAgIGRpc3BsYXk6IC1tb3otaW5saW5lLWdyaWQ7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1ncmlkO1xuICAgICAgICAgIGRpc3BsYXk6IC1vLWlubGluZS1ncmlkO1xuICAgICAgICAgIHdpZHRoOiAyOSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RiZGZlMztcbiAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDMxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXJnaW46IDIlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=/home/nileshsinha/Desktop/Examples/nextApp/nextJsExample/components/listItem/ListItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ })

})
//# sourceMappingURL=books.js.15813e6774c48cac5c9a.hot-update.js.map