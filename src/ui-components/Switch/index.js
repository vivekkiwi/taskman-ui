import React from "react";
import PropTypes from "prop-types";
import SwitchIcon from "./SwitchIcon";
import CheckBox from "../CheckBox";
import "./index.scss";

function Switch(props) {
  const { inputWrapperClass, containerClassName } = props;
  return (
    <CheckBox
      {...props}
      containerClassName={`${containerClassName} switch`}
      inputContainerClassName={`${inputWrapperClass} switch-wrapper`}
    />
  );
}

Switch.propTypes = {
  CheckedIcon: PropTypes.element,
  UncheckedIcon: PropTypes.element,
  inputWrapperClass: PropTypes.string,
  containerClassName: PropTypes.string
};

Switch.defaultProps = {
  CheckedIcon: SwitchIcon,
  UncheckedIcon: SwitchIcon,
  inputWrapperClass: "",
  containerClassName: ""
};

export default Switch;
