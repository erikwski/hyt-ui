import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  font_family,
  secondary,
  success,
  info,
  warning,
  help,
  danger,
  primary,
  primary_opacity,
} from "../style";
const WrapperHytButton = styled.button`
  font-family: ${font_family};
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  padding: 10px 2rem;
  line-height: 1;
  color: white;
  background-color: $primary;
  transition: all 0.7s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  text-transform: uppercase;

  svg {
    transition: all 0.7s ease-in-out;
    fill: #fff;
  }

  &.hytbtn-sev--primary {
    background-color: ${primary};
  }
  &.hytbtn-sev--secondary {
    background-color: ${secondary};
  }
  &.hytbtn-sev--success {
    background-color: ${success};
  }
  &.hytbtn-sev--info {
    background-color: ${info};
  }
  &.hytbtn-sev--warning {
    background-color: ${warning};
    color: #333;
    svg {
      fill: #333;
    }
  }
  &.hytbtn-sev--help {
    background-color: ${help};
    color: #333;
    svg {
      fill: #333;
    }
  }
  &.hytbtn-sev--danger {
    background-color: ${danger};
  }
  &.hytbtn-type--link {
    background-color: white;
    border: none;
    color: ${primary};

    &:hover {
      text-decoration: underline;
    }
  }
  &.hytbtn-center {
    flex-direction: column;
  }
  &.hytbtn-left span {
    margin-right: 1rem;
  }
  &.hytbtn-right {
    flex-direction: row-reverse;
    span {
      margin-left: 1rem;
    }
  }
  &.hytbtn-type--disabled {
    background-color: ${primary_opacity};
    border: rgb(139, 139, 139);
    color: rgb(139, 139, 139);
    pointer-events: none;
    &:hover {
      transform: scale(1);
    }
  }
  &.hytbtn-rounded--none {
    border-radius: 0;
  }
  &.hytbtn-rounded--sm {
    border-radius: 5px;
  }
  &.hytbtn-rounded--md {
    border-radius: 12px;
  }
  &.hytbtn-rounded--lg {
    border-radius: 2rem;
  }
  &.hytbtn-rounded--max {
    border-radius: 100%;
    aspect-ratio: 1/1;
    padding: 12px;
  }
  &.hytbtn-shadow--none {
    box-shadow: none;
  }
  &.hytbtn-shadow--sm {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%),
      0 3px 1px -2px rgb(0 0 0 / 20%);
  }
  &.hytbtn-shadow--md {
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
      0 2px 4px -1px rgb(0 0 0 / 30%);
  }
  &.hytbtn-shadow--lg {
    box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%),
      0 5px 5px -3px rgb(0 0 0 / 30%);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * Primary button of the library
 */
export const HytButton = (props) => {
  const {
    type,
    severities,
    icon,
    position_icon,
    shadow,
    rounded,
    label,
    onClick,
  } = props;
  const INIT = "hytbtn-";
  let c_type = INIT + "type--" + type,
    c_icon_pos = icon ? INIT + position_icon : "",
    c_shadow = INIT + "shadow--" + shadow,
    c_rounded = INIT + "rounded--" + rounded,
    c_severities = INIT + "sev--" + severities;
  return (
    <WrapperHytButton
      type="button"
      className={[
        "hytbtn",
        c_type,
        c_severities,
        c_icon_pos,
        c_shadow,
        c_rounded,
      ].join(" ")}
      {...props}
      onClick={onClick}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <span>{label}</span>
    </WrapperHytButton>
  );
};

HytButton.propTypes = {
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
   * box-shadow of the button
   */
  shadow: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  /**
   * Border radius of the button
   */
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "max"]),
  /**
   * Text inside the button
   */
  label: PropTypes.string.isRequired,
  /**
   * Function that get triggered onClick
   */
  onClick: PropTypes.func,
};

HytButton.defaultProps = {
  type: "standard",
  severities: "primary",
  icon: null,
  position_icon: "center",
  shadow: "none",
  rounded: "sm",
  label: "",
  onClick: () => {},
};
