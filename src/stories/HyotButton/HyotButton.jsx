import React from "react";
import PropTypes from "prop-types";
import "./HyotButton.css";

/**
 * Primary UI component for user interaction
 */
export const HyotButton = ({
  type,
  severities,
  icon,
  position_icon,
  shadow,
  rounded,
  label,
  onClick,
  ...props
}) => {
  const INIT = "hyotbtn-";
  let c_type = INIT + "type--" + type,
    c_icon_pos = icon ? INIT + position_icon : "",
    c_shadow = INIT + "shadow--" + shadow,
    c_rounded = INIT + "rounded--" + rounded,
    c_severities = INIT + "sev--" + severities;
  return (
    <button
      type="button"
      className={[
        "hyotbtn",
        c_type,
        c_severities,
        c_icon_pos,
        c_shadow,
        c_rounded,
      ].join(" ")}
      {...props}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

HyotButton.propTypes = {
  /**
   * Type of button
   */
  type: PropTypes.oneOf(["standard", "link", "disabled"]),
  /**
   * Background color
   */
  severities: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "help",
    "danger",
  ]),
  /**
   * How much rounded are the corner?
   */
  icon: PropTypes.string,
  /**
   * Position of icon
   */
  position_icon: PropTypes.oneOf(["center", "left", "right"]),
  /**
   * How large should the button be?
   */
  shadow: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  /**
   * Border radius of the button?
   */
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "max"]),
  /**
   * HyotButton contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handleraddon-docs
   */
  onClick: PropTypes.func,
};

HyotButton.defaultProps = {
  type: "standard",
  severities: "primary",
  icon: null,
  position_icon: "center",
  shadow: "none",
  rounded: "sm",
  label: "",
  onClick: () => {},
};
