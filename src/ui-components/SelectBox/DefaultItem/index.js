import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./index.scss";

function SelectBoxItem({ label, value, hovered, selected, ...restProps }) {
  return (
    <div {...restProps} className={cx([{ hovered, selected }])}>
      {label}
    </div>
  );
}

SelectBoxItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  hovered: PropTypes.bool,
  selected: PropTypes.bool
};

SelectBoxItem.defaultProps = {
  hovered: false,
  selected: false
};

export default SelectBoxItem;
