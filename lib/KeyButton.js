"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var KeyButton = function KeyButton(_ref) {
  var backgroundColor = _ref.backgroundColor,
      className = _ref.className,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      text = _ref.text;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("button", className),
    role: "button",
    onClick: function onClick() {
      _onClick(text);
    },
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, text));
};

var _default = KeyButton;
exports["default"] = _default;