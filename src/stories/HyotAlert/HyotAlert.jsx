import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./HyotAlert.css";

/**
 * Primary UI component  for display a message
 */
function printIcon(tt) {
  switch (tt) {
    case "success":
      return (
        <span className="material-symbols-outlined color-success alert-icon">
          check_circle
        </span>
      );
      break;
    case "warning":
      return (
        <span className="material-symbols-outlined color-warning alert-icon">
          warning
        </span>
      );
      break;
    case "error":
      return (
        <span className="material-symbols-outlined color-danger alert-icon">
          error
        </span>
      );
      break;
  }
}
export const HyotAlert = ({
  type,
  message,
  position,
  dismissable,
  timeout,
  onClick,
  ...props
}) => {
  const INIT = "hyotalert-";
  const [hideMessage, setHideMessage] = useState(false);
  const Alert = useRef(null);
  let removeAlert = () => {
    if (Alert.current) {
      Alert.current.classList.add("cancel-animation");
      setTimeout(() => {
        setHideMessage(true);
      }, 500);
    }
  };
  let c_type = INIT + "type--" + type,
    c_title = INIT + "title",
    c_message = INIT + "message",
    c_dismissable = INIT + dismissable ? "dismissible" : "not-dismissible";
  timeout > 0 && setTimeout(removeAlert, timeout);
  return hideMessage ? (
    <></>
  ) : (
    <div
      ref={Alert}
      className={["hyotalert", c_type, c_dismissable].join(" ")}
      {...props}
    >
      {printIcon(type)}
      <span className={c_title}>{type.toUpperCase()}:</span>
      <span className={c_message}> {message}</span>
      {dismissable && (
        <span
          className="close-alert material-symbols-outlined"
          onClick={removeAlert}
        >
          close
        </span>
      )}
    </div>
  );
};

HyotAlert.propTypes = {
  /**
   * Type of message
   */
  type: PropTypes.oneOf(["success", "error", "warning"]),
  /**
   * Add an X for close the alert
   */
  dismissable: PropTypes.bool,
  /**
   * Time after the message will disappear automatically, set to 0 for no disappear
   */
  timeout: PropTypes.number,
  /**
   * After that delay the alert will disapper
   */
  message: PropTypes.string.isRequired,
};

HyotAlert.defaultProps = {
  type: "success",
  position: "unset",
  dismissable: false,
  timeout: 0,
  message: "No message configured",
};
