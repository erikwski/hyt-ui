import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { font_family, success, warning, danger } from "../style";
import styled from "styled-components";
const WrapperHyotAlert = styled.div`
  padding: 24px;
  border: 2px solid gray;
  background: #fff;
  transition: 0.7s ease-in-out;
  color: rgb(54, 54, 54);
  position: relative;
  z-index: 1000;
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${font_family};
  animation: scale-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  &.color-success {
    color: ${success};
  }
  &.color-warning {
    color: ${warning};
  }
  &.color-danger {
    color: ${danger};
  }

  &.hyotalert-dismissible {
    padding-right: 50px;
  }
  &.cancel-animation {
    animation: scale-out-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.hyotalert-type--success {
    color: ${success};
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: ${success};
    }
  }
  &.hyotalert-type--warning {
    color: ${warning};
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: ${warning};
    }
  }
  &.hyotalert-type--error {
    color: ${danger};
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background-color: ${danger};
    }
  }
  &:hover {
    filter: brightness(0.8);
  }

  .hyotalert-title {
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 600;
    margin-right: 5px;
  }
  .close-alert {
    fill: #fff;
    position: absolute;
    right: 1rem;
    cursor: pointer;
  }
  .alert-icon {
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    & {
      flex-direction: column;
      padding: 20px 10px 10;
      &:before {
        width: 100% !important;
        height: 10px !important;
      }
    }
    &.hyotalert-dismissible {
      padding-right: 24px;
    }
    .hyotalert-title,
    .alert-icon {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }

  @keyframes scale-center {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

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
export const HyotAlert = React.forwardRef((props, ref) => {
  const { type, message, dismissable, timeout } = props,
    INIT = "hyotalert-",
    [hideMessage, setHideMessage] = useState(false),
    Alert = ref;

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
    <WrapperHyotAlert
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
    </WrapperHyotAlert>
  );
});

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
