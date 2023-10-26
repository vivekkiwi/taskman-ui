import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

function PointAngle({ direction, size, className, style }) {
  return (
    <div
      className={cx(["point-cntr", size, direction, className || ""])}
      style={style}
    />
  );
}

PointAngle.propTypes = {
  style: PropTypes.object,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string
};

PointAngle.defaultProps = {
  style: {},
  className: "",
  size: "medium"
};

export default PointAngle;
