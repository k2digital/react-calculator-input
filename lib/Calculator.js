"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NumericKeys = _interopRequireDefault(require("./NumericKeys"));

var _NumericOps = _interopRequireDefault(require("./NumericOps"));

var _ConfirmButton = _interopRequireDefault(require("./ConfirmButton"));

var _CalculatorDisplay = _interopRequireDefault(require("./CalculatorDisplay"));

var _calc = _interopRequireDefault(require("./calc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Calculator = function Calculator(_ref) {
  var close = _ref.close,
      displayValue = _ref.displayValue,
      onChange = _ref.onChange,
      onComplete = _ref.onComplete,
      backgroundColor = _ref.backgroundColor,
      keyColor = _ref.keyColor;

  function handleNumberClick(number) {
    _calc["default"][number]();

    onChange();
  }

  function handleOperationClick(op) {
    _calc["default"][op]();

    onChange();
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "close"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: close
  }, "X")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-display"
  }, /*#__PURE__*/_react["default"].createElement(_CalculatorDisplay["default"], {
    text: displayValue
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-keyboard"
  }, /*#__PURE__*/_react["default"].createElement(_NumericKeys["default"], {
    backgroundColor: keyColor,
    onNumberClick: handleNumberClick
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-right"
  }, /*#__PURE__*/_react["default"].createElement(_ConfirmButton["default"], {
    confirmText: "OK",
    onComplete: onComplete,
    backgroundColor: keyColor
  }), /*#__PURE__*/_react["default"].createElement(_NumericOps["default"], {
    backgroundColor: keyColor,
    onOperationClick: handleOperationClick
  }))));
};

var _default = Calculator;
exports["default"] = _default;