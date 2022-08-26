'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "";
styleInject(css_248z$2);

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
  return hideMessage ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null) : /*#__PURE__*/React__default["default"].createElement("div", _extends({
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

var css_248z$1 = "";
styleInject(css_248z$1);

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

  var INIT = "hyotbtn-";
  var c_type = INIT + "type--" + type,
      c_icon_pos = icon ? INIT + position_icon : "",
      c_shadow = INIT + "shadow--" + shadow,
      c_rounded = INIT + "rounded--" + rounded,
      c_severities = INIT + "sev--" + severities;
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
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

var css_248z = "";
styleInject(css_248z);

/**
 * Primary UI component for user input
 */

var HyotInput = function HyotInput(props) {
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
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
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
