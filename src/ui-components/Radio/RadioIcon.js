import React from "react";
import PropTypes from "prop-types";

function RadioIcon(props) {
  const getStyles = () => {
    const {
      size,
      innerSize,
      rootColor,
      pointColor,
      disabled,
      disabledColor,
      marginRight
    } = props;

    return {
      root: {
        width: size || 18,
        height: size || 18,
        padding: 3,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: disabled
          ? disabledColor || "#e1e1e1"
          : rootColor || "#7c8ba2",
        marginRight: marginRight || 0
      },
      checked: {
        borderColor: pointColor || "#2870c1"
      },
      inner: {
        width: innerSize || 8,
        height: innerSize || 8,
        borderRadius: "50%",
        background: pointColor || "#2870c1"
      }
    };
  };

  const { checked } = props;
  const style = getStyles();
  const iconStyle = Object.assign(style.root, checked ? style.checked : {});
  return <div style={iconStyle}>{checked && <div style={style.inner} />}</div>;
}

RadioIcon.propTypes = {
  size: PropTypes.number,
  innerSize: PropTypes.number,
  rootColor: PropTypes.string,
  pointColor: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  marginRight: PropTypes.number
};

RadioIcon.defaultProps = {
  size: undefined,
  innerSize: undefined,
  rootColor: "",
  pointColor: "",
  checked: false,
  disabled: false,
  disabledColor: "",
  marginRight: undefined
};

export default RadioIcon;
