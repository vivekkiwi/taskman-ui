import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./index.scss";

function Loader({ theme, size, type, children }) {
  const className = cx("spinnerLoader", theme, size, type);
  return <div className={className}>{children}</div>;
}

Loader.propTypes = {
  size: PropTypes.oneOf(["very_small", "small", "medium", "large"]),
  theme: PropTypes.oneOf(["dark", "light", "blue"]),
  type: PropTypes.oneOf(["dots", "circle"]),
  children: PropTypes.any
};

Loader.defaultProps = {
  size: "medium",
  theme: "dark",
  type: "circle",
  children: undefined
};

export default Loader;
