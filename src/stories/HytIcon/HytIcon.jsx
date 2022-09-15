import React from "react";
import PropTypes from "prop-types";
/**
 * Icon
 */
export const HytIcon = (props) => {
  const { type } = props;
  return;
  type == "material" ? (
    <span className="material-symbols-outlined">{icon}</span>
  ) : (
    <span></span>
  );
};

HytIcon.propTypes = {
  /**
   * Source of icon
   */
  type: PropTypes.oneOf(["material", "custom"]),
};

HytIcon.defaultProps = {};
