import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

// NOTE: do not remove this title prop even when its not used in the component
function Tab({
  title: _title,
  disabled: _disabled,
  renderTitle: _renderTitle,
  children
}) {
  return <div>{children}</div>;
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  renderTitle: PropTypes.func
};

Tab.defaultProps = {
  disabled: false,
  renderTitle: (s) => s
};

export default Tab;
