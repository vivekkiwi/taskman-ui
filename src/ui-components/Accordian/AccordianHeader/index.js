import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import PointAngle from "../../PointAngle";
import "./index.scss";

function AccordianHeader({ titleClassName, title, open }) {
  const direction = open ? "up" : "down";

  return (
    <>
      <div className={cx(["title", titleClassName])}>{title}</div>
      <div className={cx([["pointAngleWrapper", { open }]])}>
        <PointAngle size="small" direction={direction} />
      </div>
    </>
  );
}

AccordianHeader.propTypes = {
  titleClassName: PropTypes.string,
  title: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired
};

AccordianHeader.defaultProps = {
  titleClassName: ""
};

export default AccordianHeader;
