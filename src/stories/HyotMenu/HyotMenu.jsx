import React, { useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  font_family,
} from "../style";
const WrapperHyotMenu = styled.div`
  font-family: ${font_family};
  
`;

/**
 * SideBar for application
 */
export const HyotMenu = (props) => {
  const {
    logo,
    pages,
    user,
  } = props;
  const [expanded, setExpanded] = useState;
  let c_expanded = `hyotmenu--${
    expanded ? "expandable" : "not-expandable"
  }`;
  return (
    <WrapperHyotMenu
      className={[
        "hyotmenu",
        c_expanded
      ].join(" ")}
      {...props}
    >
      {pages.map(()=> <span>Test</span>)}
    </WrapperHyotMenu>
  );
};

HyotMenu.propTypes = {
  /**
   * Image file rappresent the logo
   */
  logo: PropTypes.object,
  /**
   * List of parameter for render HyotMenuItem
   */
  pages: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  /**
   * Parameter of HyotMenuAvatar
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

HyotMenu.defaultProps = {
  logo: {},
  pages: [
    {
      icon: "",
      label: "",
      onClick: "",
    } 
  ],
  user:{
    role:"test",
    company: "ttt",
    onClick: ()=>{}
  }
};
