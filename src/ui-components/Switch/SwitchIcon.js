import React from "react";
import PropTypes from "prop-types";

function SwitchIcon(props) {
  const getStyles = () => {
    const { size, radius, innerSize, pointColor, marginRight } = props;

    return {
      root: {
        width: size || 34,
        height: size || 14,
        backgroundColor: "#ebecf0",
        borderRadius: radius,
        marginRight: marginRight || 0,
        display: "flex",
        alignItems: "center",
        transition: "all .3s"
      },
      checked: {
        borderColor: pointColor || "#2870c1",
        backgroundColor: "#edf5fb"
      },
      inner: {
        width: innerSize || 20,
        height: innerSize || 20,
        borderRadius: "50%",
        backgroundColor: pointColor || "#fff",
        boxShadow: "0 0 4px 0 rgba(0, 106, 194, 0.2)",
        animation: "unchecked-thumb .3s",
        transform: "translateX(0)"
      },

      innerChecked: {
        boxShadow: "0 3px 8px 0 rgba(0, 106, 194, 0.2)",
        backgroundColor: "#4a90e2",
        animation: "checked-thumb .3s",
        transform: "translateX(calc(100% - 6px))"
      }
    };
  };

  const { checked } = props;
  const style = getStyles();
  const iconStyle = Object.assign(style.root, checked ? style.checked : {});
  const innerIconStyle = Object.assign(
    style.inner,
    checked ? style.innerChecked : {}
  );
  return (
    <div style={iconStyle}>
      <div style={innerIconStyle} className="thumb" />
    </div>
  );
}

SwitchIcon.propTypes = {
  size: PropTypes.number,
  innerSize: PropTypes.number,
  radius: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  pointColor: PropTypes.string,
  checked: PropTypes.bool,
  marginRight: PropTypes.number
};

SwitchIcon.defaultProps = {
  size: undefined,
  innerSize: undefined,
  pointColor: "",
  checked: false,
  marginRight: undefined,
  radius: 10
};

export default SwitchIcon;
