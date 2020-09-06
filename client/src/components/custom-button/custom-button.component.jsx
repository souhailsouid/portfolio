import React from "react";
import PropTypes from "prop-types";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isGithubSignIn,
  inverted,
  wishList,
  outOfStock,
  ...otherProps
}) => (
  <button
    className={` 

    ${inverted ? "inverted" : ""} 
    ${outOfStock ? "out-of-stock" : ""}
    ${wishList ? "wish-list" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""}
    ${isGithubSignIn ? "github-sign-in" : ""} 
   ${wishList ? "wish-button" : "custom-button"}
     `}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isGoogleSignIn: PropTypes.bool,
  isGithubSignIn: PropTypes.bool,
  inverted: PropTypes.bool,
  wishList: PropTypes.bool,
  outOfStock: PropTypes.bool,
};
export default CustomButton;
