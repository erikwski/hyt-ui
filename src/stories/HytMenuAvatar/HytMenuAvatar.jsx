import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font_family, primary } from "../style";
const WrapperHytMenuAvatar = styled.div`
  font-family: ${font_family};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  padding: 8px 14px;
  background-color: #ebebeb;
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;

  .role-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 2rem;
    }
  }
  .menu-avatar-role,
  .company-container {
    display: none;
  }

  &.hytmenuavatar--expandable {
    flex-direction: column;

    .role-icon-container {
      margin-bottom: 8px;

      .icon {
        margin-right: 7px;
      }
    }
    .menu-avatar-role,
    .company-container {
      display: block;
    }

    .company-container {
      font-weight: 600;
    }
  }

  &:hover {
    background-color: #dcdcdc;
  }
`;

/**
 * MenuAvatar used only in the component HytMenu
 */
export const HytMenuAvatar = (props) => {
  const { role, company, onClick, expanded } = props;
  let c_expanded = `hytmenuavatar--${
    expanded ? "expandable" : "not-expandable"
  }`;
  return (
    <WrapperHytMenuAvatar
      className={["hytmenuavatar", c_expanded].join(" ")}
      {...props}
      onClick={onClick}
    >
      <div className="role-icon-container">
        <span className="material-symbols-outlined icon">account_circle</span>
        {expanded && <span className="menu-avatar-role">{role}</span>}
      </div>
      {expanded && (
        <div className="company-container">
          <span className="menu-avatar-company">{company}</span>
        </div>
      )}
    </WrapperHytMenuAvatar>
  );
};

HytMenuAvatar.propTypes = {
  /**
   * If the menu is expanded or not
   */
  expanded: PropTypes.bool,
  /**
   * role of the user, rendered only if expanded
   */
  role: PropTypes.string,
  /**
   * Company of user, rendered only if expanded
   */
  company: PropTypes.string,
  /**
   * Optional click handleraddon-docs
   */
  onClick: PropTypes.func,
};

HytMenuAvatar.defaultProps = {
  expanded: false,
  onClick: () => {},
  role: "/",
  company: "/",
};
