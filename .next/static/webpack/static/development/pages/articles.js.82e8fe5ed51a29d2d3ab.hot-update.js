webpackHotUpdate("static/development/pages/articles.js",{

/***/ "./components/articleDetails/ArticleDetails.js":
/*!*****************************************************!*\
  !*** ./components/articleDetails/ArticleDetails.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/home/nileshsinha/Desktop/Examples/nextApp/nextJsExample/components/articleDetails/ArticleDetails.js";



var ArticleDetails =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticleDetails, _Component);

  function ArticleDetails() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArticleDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticleDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showMore: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeState", function () {
      return _this.setState(function (prevState) {
        return {
          showMore: !prevState.showMore
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "generateArticleDOM", function () {
      var _this$props$data = _this.props.data,
          title = _this$props$data.title,
          url = _this$props$data.url,
          byline = _this$props$data.byline,
          abstract = _this$props$data.abstract,
          section = _this$props$data.section;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, byline), !_this.state.showMore && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: _this.changeState,
        className: "details-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Show More"), _this.state.showMore && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Description: ", abstract), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Url:", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Click Here")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Section: ", section), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: _this.changeState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Show Less")));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArticleDetails, [{
    key: "render",
    value: function render(props, state) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1213048080" + " " + "articledetails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.generateArticleDOM(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1213048080",
        __self: this
      }, ".articledetails{display:inline-block;position:relative;}.articledetails h2{font-size:15px;margin:0;padding:0 8px 8px;}.articledetails p{font-size:14px;margin:0;padding:0 8px 8px;}.articledetails button{position:absolute;font-size:12px;bottom:-5px;right:0;cursor:pointer;color:#003f72;font-weight:600;display:inline;}.articledetails a{padding:0 2px;color:#fe801b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pbGVzaHNpbmhhL0Rlc2t0b3AvRXhhbXBsZXMvbmV4dEFwcC9uZXh0SnNFeGFtcGxlL2NvbXBvbmVudHMvYXJ0aWNsZURldGFpbHMvQXJ0aWNsZURldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNXLEFBR29DLEFBSU4sQUFLQSxBQUtHLEFBVUosY0FDQSxDQXBCTCxBQUtBLEdBS00sR0FkRyxHQUtBLEFBS0EsSUFlcEIsS0FWYyxNQWRkLEdBS0EsQUFLQSxHQUtVLFFBQ08sZUFDRCxjQUNFLGdCQUNELGVBQ2pCIiwiZmlsZSI6Ii9ob21lL25pbGVzaHNpbmhhL0Rlc2t0b3AvRXhhbXBsZXMvbmV4dEFwcC9uZXh0SnNFeGFtcGxlL2NvbXBvbmVudHMvYXJ0aWNsZURldGFpbHMvQXJ0aWNsZURldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQXJ0aWNsZURldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93TW9yZTogZmFsc2VcbiAgfTtcblxuICBjaGFuZ2VTdGF0ZSA9ICgpID0+XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsgc2hvd01vcmU6ICFwcmV2U3RhdGUuc2hvd01vcmUgfSkpO1xuXG4gIGdlbmVyYXRlQXJ0aWNsZURPTSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCB1cmwsIGJ5bGluZSwgYWJzdHJhY3QsIHNlY3Rpb24gfSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD57YnlsaW5lfTwvcD5cbiAgICAgICAgeyF0aGlzLnN0YXRlLnNob3dNb3JlICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2hhbmdlU3RhdGV9IGNsYXNzTmFtZT1cImRldGFpbHMtYnV0dG9uXCI+XG4gICAgICAgICAgICBTaG93IE1vcmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vcmUgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjoge2Fic3RyYWN0fTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBVcmw6XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIENsaWNrIEhlcmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+U2VjdGlvbjoge3NlY3Rpb259PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNoYW5nZVN0YXRlfT5TaG93IExlc3M8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJlbmRlcihwcm9wcywgc3RhdGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlZGV0YWlsc1wiPlxuICAgICAgICB7dGhpcy5nZW5lcmF0ZUFydGljbGVET00oKX1cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5hcnRpY2xlZGV0YWlscyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGVkZXRhaWxzIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlZGV0YWlscyBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnRpY2xlZGV0YWlscyBidXR0b24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwM2Y3MjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFydGljbGVkZXRhaWxzIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZTgwMWI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVEZXRhaWxzO1xuIl19 */\n/*@ sourceURL=/home/nileshsinha/Desktop/Examples/nextApp/nextJsExample/components/articleDetails/ArticleDetails.js */"));
    }
  }]);

  return ArticleDetails;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ArticleDetails);

/***/ })

})
//# sourceMappingURL=articles.js.82e8fe5ed51a29d2d3ab.hot-update.js.map