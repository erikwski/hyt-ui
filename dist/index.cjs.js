'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('material-symbols');
var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var primary = "#1ea7fd";
var primary_opacity = "#1ea8fd3a";
var secondary = "#423e38";
var success = "#0ed916";
var info = "#1e6cfd";
var warning = "#fda01e";
var help = "#1efd5a";
var danger = "#fd1e1e";
var font_family = "sans-serif";

var _templateObject$2;

var _excluded$1 = ["type", "message", "position", "dismissable", "timeout", "onClick"];
/**
 * Primary UI component  for display a message
 */

function printIcon(tt) {
  switch (tt) {
    case "success":
      return /*#__PURE__*/React__default["default"].createElement("span", {
        className: "material-symbols-outlined color-success alert-icon"
      }, "check_circle");

    case "warning":
      return /*#__PURE__*/React__default["default"].createElement("span", {
        className: "material-symbols-outlined color-warning alert-icon"
      }, "warning");

    case "error":
      return /*#__PURE__*/React__default["default"].createElement("span", {
        className: "material-symbols-outlined color-danger alert-icon"
      }, "error");
  }
}

var HyotAlert = function HyotAlert(_ref) {
  var type = _ref.type,
      message = _ref.message;
      _ref.position;
      var dismissable = _ref.dismissable,
      timeout = _ref.timeout;
      _ref.onClick;
      var props = _objectWithoutProperties(_ref, _excluded$1);

  var WrapperHyotAlert = styled__default["default"].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n    padding: 24px;\n    border: 2px solid gray;\n    background: #fff;\n    transition: 0.7s ease-in-out;\n    color: rgb(54, 54, 54);\n    position: relative;\n    z-index: 1000;\n    margin: 2rem 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: ", ";\n    animation: scale-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n\n    &.color-success {\n      color: ", ";\n    }\n    &.color-warning {\n      color: ", ";\n    }\n    &.color-danger {\n      color: ", ";\n    }\n\n    &.hyotalert-dismissible {\n      padding-right: 50px;\n    }\n    &.cancel-animation {\n      animation: scale-out-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n    }\n    &.hyotalert-type--success {\n      color: ", ";\n      &:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 10px;\n        height: 100%;\n        background-color: ", ";\n      }\n    }\n    &.hyotalert-type--warning {\n      color: ", ";\n      &:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 10px;\n        height: 100%;\n        background-color: ", ";\n      }\n    }\n    &.hyotalert-type--error {\n      color: ", ";\n      &:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 10px;\n        height: 100%;\n        background-color: ", ";\n      }\n    }\n    &:hover {\n      filter: brightness(0.8);\n    }\n\n    .hyotalert-title {\n      text-transform: uppercase;\n      text-decoration: underline;\n      font-weight: 600;\n      margin-right: 5px;\n    }\n    .close-alert {\n      fill: #fff;\n      position: absolute;\n      right: 1rem;\n      cursor: pointer;\n    }\n    .alert-icon {\n      margin-right: 10px;\n    }\n    @media (max-width: 800px) {\n      & {\n        flex-direction: column;\n        padding: 20px 10px 10;\n        &:before {\n          width: 100% !important;\n          height: 10px !important;\n        }\n      }\n      &.hyotalert-dismissible {\n        padding-right: 24px;\n      }\n      .hyotalert-title,\n      .alert-icon {\n        margin-right: 0;\n        margin-bottom: 5px;\n      }\n    }\n\n    @keyframes scale-center {\n      0% {\n        transform: scale(0);\n        opacity: 0;\n      }\n      100% {\n        transform: scale(1);\n        opacity: 1;\n      }\n    }\n\n    @keyframes scale-out-center {\n      0% {\n        transform: scale(1);\n        opacity: 1;\n      }\n      100% {\n        transform: scale(0);\n        opacity: 0;\n      }\n    }\n  "])), font_family, success, warning, danger, success, success, warning, warning, danger, danger);
  var INIT = "hyotalert-";

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hideMessage = _useState2[0],
      setHideMessage = _useState2[1];

  var Alert = React.useRef(null);

  var removeAlert = function removeAlert() {
    if (Alert.current) {
      Alert.current.classList.add("cancel-animation");
      setTimeout(function () {
        setHideMessage(true);
      }, 500);
    }
  };

  var c_type = INIT + "type--" + type,
      c_title = INIT + "title",
      c_message = INIT + "message",
      c_dismissable = INIT + dismissable ? "dismissible" : "not-dismissible";
  timeout > 0 && setTimeout(removeAlert, timeout);
  return hideMessage ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null) : /*#__PURE__*/React__default["default"].createElement(WrapperHyotAlert, _extends({
    ref: Alert,
    className: ["hyotalert", c_type, c_dismissable].join(" ")
  }, props), printIcon(type), /*#__PURE__*/React__default["default"].createElement("span", {
    className: c_title
  }, type.toUpperCase(), ":"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: c_message
  }, " ", message), dismissable && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "close-alert material-symbols-outlined",
    onClick: removeAlert
  }, "close"));
};
HyotAlert.propTypes = {
  /**
   * Type of message
   */
  type: PropTypes__default["default"].oneOf(["success", "error", "warning"]),

  /**
   * Add an X for close the alert
   */
  dismissable: PropTypes__default["default"].bool,

  /**
   * Time after the message will disappear automatically, set to 0 for no disappear
   */
  timeout: PropTypes__default["default"].number,

  /**
   * After that delay the alert will disapper
   */
  message: PropTypes__default["default"].string.isRequired
};
HyotAlert.defaultProps = {
  type: "success",
  position: "unset",
  dismissable: false,
  timeout: 0,
  message: "No message configured"
};

var _templateObject$1;

var _excluded = ["type", "severities", "icon", "position_icon", "shadow", "rounded", "label", "onClick"];
/**
 * Primary UI component for user interaction
 */

var HyotButton = function HyotButton(_ref) {
  var type = _ref.type,
      severities = _ref.severities,
      icon = _ref.icon,
      position_icon = _ref.position_icon,
      shadow = _ref.shadow,
      rounded = _ref.rounded,
      label = _ref.label;
      _ref.onClick;
      var props = _objectWithoutProperties(_ref, _excluded);

  var WrapperHyotButton = styled__default["default"].button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: 700;\n    border: 0;\n    cursor: pointer;\n    display: inline-block;\n    padding: 10px 2rem;\n    line-height: 1;\n    color: white;\n    background-color: $primary;\n    transition: all 0.7s ease-in-out;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 44px;\n\n    svg {\n      transition: all 0.7s ease-in-out;\n      fill: #fff;\n    }\n\n    &.hyotbtn-sev--primary {\n      background-color: ", ";\n    }\n    &.hyotbtn-sev--secondary {\n      background-color: ", ";\n    }\n    &.hyotbtn-sev--success {\n      background-color: ", ";\n    }\n    &.hyotbtn-sev--info {\n      background-color: ", ";\n    }\n    &.hyotbtn-sev--warning {\n      background-color: ", ";\n      color: #333;\n      svg {\n        fill: #333;\n      }\n    }\n    &.hyotbtn-sev--help {\n      background-color: ", ";\n      color: #333;\n      svg {\n        fill: #333;\n      }\n    }\n    &.hyotbtn-sev--danger {\n      background-color: ", ";\n    }\n    &.hyotbtn-type--link {\n      background-color: white;\n      border: none;\n      color: ", ";\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n    &.hyotbtn-center {\n      flex-direction: column;\n    }\n    &.hyotbtn-left span {\n      margin-right: 1rem;\n    }\n    &.hyotbtn-right {\n      flex-direction: row-reverse;\n      span {\n        margin-left: 1rem;\n      }\n    }\n    &.hyotbtn-type--disabled {\n      background-color: gainsboro;\n      border: rgb(139, 139, 139);\n      color: rgb(139, 139, 139);\n      pointer-events: none;\n      &:hover {\n        transform: scale(1);\n      }\n    }\n    &.hyotbtn-rounded--none {\n      border-radius: 0;\n    }\n    &.hyotbtn-rounded--sm {\n      border-radius: 5px;\n    }\n    &.hyotbtn-rounded--md {\n      border-radius: 12px;\n    }\n    &.hyotbtn-rounded--lg {\n      border-radius: 2rem;\n    }\n    &.hyotbtn-rounded--max {\n      border-radius: 100%;\n      aspect-ratio: 1/1;\n      padding: 12px;\n    }\n    &.hyotbtn-shadow--none {\n      box-shadow: none;\n    }\n    &.hyotbtn-shadow--sm {\n      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),\n        0 3px 1px -2px rgb(0 0 0 / 20%);\n    }\n    &.hyotbtn-shadow--md {\n      box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),\n        0 2px 4px -1px rgb(0 0 0 / 30%);\n    }\n    &.hyotbtn-shadow--lg {\n      box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%),\n        0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 30%);\n    }\n    &:hover {\n      transform: scale(1.1);\n    }\n  "])), font_family, primary, secondary, success, info, warning, help, danger, primary);
  var INIT = "hyotbtn-";
  var c_type = INIT + "type--" + type,
      c_icon_pos = icon ? INIT + position_icon : "",
      c_shadow = INIT + "shadow--" + shadow,
      c_rounded = INIT + "rounded--" + rounded,
      c_severities = INIT + "sev--" + severities;
  return /*#__PURE__*/React__default["default"].createElement(WrapperHyotButton, _extends({
    type: "button",
    className: ["hyotbtn", c_type, c_severities, c_icon_pos, c_shadow, c_rounded].join(" ")
  }, props), icon && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-symbols-outlined"
  }, icon), /*#__PURE__*/React__default["default"].createElement("span", null, label));
};
HyotButton.propTypes = {
  /**
   * Type of button
   */
  type: PropTypes__default["default"].oneOf(["standard", "link", "disabled"]),

  /**
   * Background color
   */
  severities: PropTypes__default["default"].oneOf(["primary", "secondary", "success", "info", "warning", "help", "danger"]),

  /**
   * How much rounded are the corner?
   */
  icon: PropTypes__default["default"].string,

  /**
   * Position of icon
   */
  position_icon: PropTypes__default["default"].oneOf(["center", "left", "right"]),

  /**
   * How large should the button be?
   */
  shadow: PropTypes__default["default"].oneOf(["none", "sm", "md", "lg"]),

  /**
   * Border radius of the button?
   */
  rounded: PropTypes__default["default"].oneOf(["none", "sm", "md", "lg", "max"]),

  /**
   * HyotButton contents
   */
  label: PropTypes__default["default"].string.isRequired,

  /**
   * Optional click handleraddon-docs
   */
  onClick: PropTypes__default["default"].func
};
HyotButton.defaultProps = {
  type: "standard",
  severities: "primary",
  icon: null,
  position_icon: "center",
  shadow: "none",
  rounded: "sm",
  label: "",
  onClick: function onClick() {}
};

var _templateObject;
/**
 * Primary UI component for user input
 */

var HyotInput = function HyotInput(props) {
  var WrapperHyotInput = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 10px;\n    display: grid;\n    text-align: start;\n    margin-bottom: 20px;\n    position: relative;\n    font-family: ", ";\n\n    input {\n      height: 46px;\n      border-radius: 4px;\n      border: 1px solid rgb(182, 182, 182);\n\n      &:hover {\n        border-color: ", ";\n      }\n      &:focus-visible {\n        outline: 2px ", ";\n        padding: 2px;\n      }\n    }\n    label {\n      margin: 0px 0 2px 5px;\n    }\n    &.hyotinput-icon-pos {\n      &--left .input-icon,\n      &--right .input-icon {\n        position: absolute;\n        top: 41px;\n        opacity: 0.6;\n        font-size: 32px;\n      }\n      &--left {\n        input {\n          padding-left: 64px;\n        }\n        .input-icon {\n          left: 25px;\n        }\n      }\n      &--right {\n        input {\n          padding-right: 64px;\n        }\n        .input-icon {\n          right: 25px;\n        }\n      }\n    }\n    .help-text {\n      font-size: 14px;\n      padding-left: 1rem;\n      opacity: 0.8;\n    }\n\n    &.hyotinput-disabled {\n      opacity: 0.7;\n      pointer-events: none;\n      label {\n        opacity: 0.7;\n      }\n    }\n\n    &.hyotinput-error {\n      input {\n        border: 2px solid ", ";\n      }\n      .help-text {\n        color: ", ";\n      }\n    }\n  "])), font_family, primary, primary_opacity, danger, danger);
  var label = props.label,
      type = props.type,
      value = props.value,
      on_change = props.on_change,
      help_text = props.help_text,
      error = props.error,
      disabled = props.disabled,
      icon = props.icon,
      icon_position = props.icon_position;
  var INIT = "hyotinput-";
  var c_icon_pos = icon ? INIT + "icon-pos--" + icon_position : "",
      c_error = error ? INIT + "error" : "",
      c_disabled = disabled ? INIT + "disabled" : "";
  return /*#__PURE__*/React__default["default"].createElement(WrapperHyotInput, _extends({
    className: ["hyotinput", c_icon_pos, c_error, c_disabled].join(" ")
  }, props), icon && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "material-symbols-outlined input-icon"
  }, icon), /*#__PURE__*/React__default["default"].createElement("label", null, label), /*#__PURE__*/React__default["default"].createElement("input", {
    type: type,
    defaultValue: value,
    onChange: function onChange(e) {
      return on_change(e.target.value);
    },
    disabled: disabled
  }), help_text && /*#__PURE__*/React__default["default"].createElement("span", {
    className: "help-text"
  }, help_text));
};
HyotInput.propTypes = {
  /**
   * Label of the input
   */
  label: PropTypes__default["default"].string,

  /**
   * Type of the input
   */
  type: PropTypes__default["default"].oneOf(["text", "number", "email", "password", "date"]),

  /**
   * Value of the input get updated by setState
   */
  value: PropTypes__default["default"].string,

  /**
   * function necessary to update the state returned by setState
   */
  on_change: PropTypes__default["default"].func,

  /**
   * Text for help the user to fill the input/show the error of the fill if error is setted to true
   */
  help_text: PropTypes__default["default"].string,

  /**
   * Value of the input get updated by setState
   */
  error: PropTypes__default["default"].bool,

  /**
   * Value of the input get updated by setState
   */
  disabled: PropTypes__default["default"].bool,

  /**
   * Icon on the input
   */
  icon: PropTypes__default["default"].string,

  /**
   * Position of that icon (default on left)
   */
  icon_position: PropTypes__default["default"].oneOf(["left", "right"])
};
HyotInput.defaultProps = {
  label: null,
  type: "text",
  value: "",
  on_change: function on_change() {},
  help_text: "",
  error: false,
  disabled: false,
  icon: "",
  icon_position: "left"
};

exports.HyotAlert = HyotAlert;
exports.HyotButton = HyotButton;
exports.HyotInput = HyotInput;
