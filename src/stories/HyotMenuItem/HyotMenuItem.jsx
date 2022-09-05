import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  font_family,
  primary,
  primary_opacity
} from "../style";
const WrapperHyotMenuItem = styled.div`
  font-family: ${font_family};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  button {
    width: 40px;
    height: 40px;
    background-color: ${primary_opacity};
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.7s all;

    .menu-item-icon {
      font-size: 32px;
      color: #fff;
    }
  }

  .menu-item-label {
    margin-left: 1rem;
    transform: translateX(-200%);
    transition: 0.7s all;
    opacity: 0;
  }

  &:hover {
    button {
      background-color: ${primary};
    }
  }

  &.hyotmenuitem--expandable .menu-item-label {
    transform: translateX(0);
    opacity: 1;
  }
`;

/**
 * MenuItem used only in the component HyotMenu
 */
export const HyotMenuItem = (props) => {
  const {
    icon,
    label,
    onClick,
    expanded
  } = props;
  let c_expanded = `hyotmenuitem--${
    expanded ? "expandable" : "not-expandable"
  }`;
  return (
    <WrapperHyotMenuItem 
      className={[
        "hyotmenuitem",
        c_expanded,
      ].join(" ")} 
      {...props}
    >
      <button onClick={onClick}>
        <span className="material-symbols-outlined menu-item-icon">
          {icon}
        </span>
      </button>
      {expanded && <span className="menu-item-label">{label}</span>}
    </WrapperHyotMenuItem>
  );
};

HyotMenuItem.propTypes = {
  /**
   * If the menu is expanded or not
   */
  expanded: PropTypes.bool,
  /**
   * Icon of the menu item
   */
  icon: PropTypes.string,
  /**
   * HyotMenuItem contents on expanded menu
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handleraddon-docs
   */
  onClick: PropTypes.func,
};

HyotMenuItem.defaultProps = {
  expanded: false,
  icon: null,
  label: "",
  onClick: () => {},
};
