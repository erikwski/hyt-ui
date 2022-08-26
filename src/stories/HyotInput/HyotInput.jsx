import React from "react";
import PropTypes from "prop-types";
import "./HyotInput.css";

/**
 * Primary UI component for user interaction
 */
export const HyotInput = ({
  label,
  type,
  value,
  on_change,
  help_text,
  error,
  disabled,
  icon,
  icon_position,
  ...props
}) => {
  const INIT = "hyotinput-";
  let c_icon_pos = icon ? INIT + "icon-pos--" + icon_position : "",
    c_error = error ? INIT + "error" : "",
    c_disabled = disabled ? INIT + "disabled" : "";
  return (
    <div
      className={["hyotinput", c_icon_pos, c_error, c_disabled].join(" ")}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined input-icon">{icon}</span>
      )}
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          console.log(on_change);
          on_change(e.target.value);
        }}
        disabled={disabled}
      />
      {help_text && <span className="help-text">{help_text}</span>}
    </div>
  );
};

HyotInput.propTypes = {
  /**
   * Label of the input
   */
  label: PropTypes.string,
  /**
   * Type of the input
   */
  type: PropTypes.oneOf(["text", "number", "email", "password", "date"]),
  /**
   * Value of the input get updated by setState
   */
  value: PropTypes.string,
  /**
   * function necessary to update the state returned by setState
   */
  on_change: PropTypes.func,
  /**
   * Text for help the user to fill the input/show the error of the fill if error is setted to true
   */
  help_text: PropTypes.string,
  /**
   * Value of the input get updated by setState
   */
  error: PropTypes.bool,
  /**
   * Value of the input get updated by setState
   */
  disabled: PropTypes.bool,
  /**
   * Icon on the input
   */
  icon: PropTypes.string,
  /**
   * Position of that icon (default on left)
   */
  icon_position: PropTypes.oneOf(["left", "right"]),
};

HyotInput.defaultProps = {
  label: null,
  type: "text",
  value: "",
  on_change: () => {},
  help_text: "",
  error: false,
  disabled: false,
  icon: "",
  icon_position: "left",
};
