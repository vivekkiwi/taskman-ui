import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

const Paper = React.forwardRef(({ containerClass, children, id }, ref) => {
  return (
    <div id={id} className={cx(["paper-root", containerClass])} ref={ref}>
      {children}
    </div>
  );
});

Paper.propTypes = {
  id: PropTypes.string,
  containerClass: PropTypes.string,
  children: PropTypes.any
};
Paper.defaultProps = {
  id: "",
  containerClass: "",
  children: null
};

export default Paper;
