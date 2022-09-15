import React, { useState } from "react";
import PropTypes from "prop-types";
/**
 * Logo component that can render two version of it
 */
const URL_DEFAULT_LOGO = "./logo-default.png",
  URL_DEFAULT_SMALL_LOGO = "./logo-small-default.png";

export const HytLogo = (props) => {
  const { src, alt, mobile, mobile_src } = props;
  let url = mobile ? mobile_src : src,
    url_fallback = mobile ? URL_DEFAULT_SMALL_LOGO : URL_DEFAULT_LOGO;

  if (!url) url = url_fallback;

  return (
    <img
      alt={alt}
      src={url}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = url_fallback;
      }}
    />
  );
};

HytLogo.propTypes = {
  /**
   * URL of the asse
   */
  src: PropTypes.string,
  /**
   * True will render the mobile_src, if not exist/configured will render the default small logo
   */
  mobile: PropTypes.bool,
  /**
   * If you need to render the same component in two version, you can pass 2 src and update with the flag mobile
   */
  mobile_src: PropTypes.string,
  /**
   * alternative text
   */
  alt: PropTypes.string,
};

HytLogo.defaultProps = {
  src: URL_DEFAULT_LOGO,
  mobile: false,
  mobile_src: URL_DEFAULT_SMALL_LOGO,
  alt: "logo",
};
