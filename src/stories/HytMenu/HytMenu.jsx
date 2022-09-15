import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { font_family } from "../style";
const WrapperHytMenu = styled.div`
  font-family: ${font_family};
`;

/**
 * SideBar for application
 */
export const HytMenu = (props) => {
  const { logo, pages, user } = props;
  const [expanded, setExpanded] = useState;
  let c_expanded = `hytmenu--${expanded ? "expandable" : "not-expandable"}`;
  return (
    <WrapperHytMenu className={["hytmenu", c_expanded].join(" ")} {...props}>
      {pages.map(() => (
        <span>Test</span>
      ))}
    </WrapperHytMenu>
  );
};

HytMenu.propTypes = {
  /**
   * Image file rappresent the logo
   */
  logo: PropTypes.object,
  /**
   * List of parameter for render HytMenuItem
   */
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Icon of the menu item
       */
      icon: PropTypes.string,
      /**
       * HytMenuItem contents on expanded menu
       */
      label: PropTypes.string.isRequired,
      /**
       * Optional click handleraddon-docs
       */
      onClick: PropTypes.func,
    })
  ),
  /**
   * Parameter of HytMenuAvatar
   */
  user: PropTypes.shape({
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
  }),
};

HytMenu.defaultProps = {
  logo: {},
  pages: [
    {
      icon: "",
      label: "",
      onClick: "",
    },
  ],
  user: {
    role: "test",
    company: "ttt",
    onClick: () => {},
  },
};
