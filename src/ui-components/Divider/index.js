import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

function Divider({ rootClass, appearance }) {
  return <hr className={cx(["dividerRoot", rootClass, appearance])} />;
}

Divider.propTypes = {
  appearance: PropTypes.string,
  rootClass: PropTypes.string
};

Divider.defaultProps = {
  appearance: "light",
  rootClass: ""
};

export default Divider;
