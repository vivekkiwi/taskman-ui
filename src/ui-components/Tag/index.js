import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./index.scss";

function Tag({ text, variant, ...restProps }) {
  return (
    <span
      id={text}
      variant={variant}
      className={cx("TagContainer", `TagContainer_${variant}`)}
      {...restProps}
    >
      {text}
    </span>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string
};

Tag.defaultProps = {
  variant: "primary"
};
export default Tag;
