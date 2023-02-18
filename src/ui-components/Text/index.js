import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import * as s from "./index.module.scss";

function Text({ children, variant, className, element, ...restProps }) {
  return (
    (children &&
      React.createElement(
        element,
        {
          className: cx([s.text, s[variant] || "", className]),
          ...restProps
        },
        children
      )) ||
    null
  );
}

Text.defaultProps = {
  className: "",
  variant: "plain",
  element: "div"
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(["error", "plain", "inputLabel"]),
  className: PropTypes.string,
  element: PropTypes.string
};

export default Text;
