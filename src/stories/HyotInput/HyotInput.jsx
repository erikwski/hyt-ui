import React from "react";
import PropTypes from "prop-types";
import { primary, primary_opacity, danger, font_family } from "../style";
import styled from "styled-components";
const WrapperHyotInput = styled.div`
  padding: 10px;
  display: grid;
  text-align: start;
  margin-bottom: 20px;
  position: relative;
  font-family: ${font_family};

  input {
    height: 46px;
    border-radius: 4px;
    border: 1px solid rgb(182, 182, 182);

    &:hover {
      border-color: ${primary};
    }
    &:focus-visible {
      outline: 2px ${primary_opacity};
      padding: 2px;
    }
  }
  label {
    margin: 0px 0 2px 5px;
  }
  &.hyotinput-icon-pos {
    &--left .input-icon,
    &--right .input-icon {
      position: absolute;
      top: 41px;
      opacity: 0.6;
      font-size: 32px;
    }
    &--left {
      input {
        padding-left: 64px;
      }
      .input-icon {
        left: 25px;
      }
    }
    &--right {
      input {
        padding-right: 64px;
      }
      .input-icon {
        right: 25px;
      }
    }
  }
  .help-text {
    font-size: 14px;
    padding-left: 1rem;
    opacity: 0.8;
  }

  &.hyotinput-disabled {
    opacity: 0.7;
    pointer-events: none;
    label {
      opacity: 0.7;
    }
  }

  &.hyotinput-error {
    input {
      border: 2px solid ${danger};
    }
    .help-text {
      color: ${danger};
    }
  }
`;

/**
 * Primary UI component for user input
 */

export const HyotInput = (props) => {
  const {
    label,
    type,
    value,
    on_change,
    help_text,
    error,
    disabled,
    icon,
    icon_position,
  } = props;
  const INIT = "hyotinput-";
  let c_icon_pos = icon ? INIT + "icon-pos--" + icon_position : "",
    c_error = error ? INIT + "error" : "",
    c_disabled = disabled ? INIT + "disabled" : "";
  return (
    <WrapperHyotInput
      className={["hyotinput", c_icon_pos, c_error, c_disabled].join(" ")}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined input-icon">{icon}</span>
      )}
      <label>{label}</label>
      <input
        type={type}
        defaultValue={value}
        onChange={(e) => on_change(e.target.value)}
        disabled={disabled}
      />
      {help_text && <span className="help-text">{help_text}</span>}
    </WrapperHyotInput>
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
