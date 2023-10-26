import React, { useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";
import Tooltip from "../Tooltip";

function Chip({
  Icon,
  size,
  value,
  label,
  onClick,
  disabled,
  appearance,
  onIconClick,
  showSeparator,
  labelClassName,
  containerClassName,
  iconClassName,
  outlineClassName,
  showTooltip,
  completeLabel,
  tooltipClass,
  ...restProps
}) {
  const onChipClick = (e) => {
    e.stopPropagation();
    if (!disabled && onClick) onClick({ label, value });
  };

  const onIconClickHandler = (e) => {
    e.stopPropagation();
    if (!disabled && onIconClick) onIconClick({ label, value }, e);
  };

  const chipTooltipRef = useRef(null);

  return (
    <>
      <div
        className={cx([
          "chip",
          containerClassName,
          appearance,
          size,
          { disabled }
        ])}
        onClick={onChipClick}
        ref={chipTooltipRef}
        {...restProps}
      >
        <span className={cx(["label", labelClassName])}>{label}</span>
        {showSeparator && (
          <span className={cx(["outline", outlineClassName])} />
        )}
        {onIconClick && (
          <span
            className={cx(["chip-icon", iconClassName])}
            onClick={onIconClickHandler}
          >
            {Icon || "x"}
          </span>
        )}
      </div>
      {showTooltip && (
        <Tooltip
          trigger={() => chipTooltipRef}
          on={["hover"]}
          mouseLeaveDelay={0}
          position={["top center"]}
          className={tooltipClass}
        >
          {completeLabel || label}
        </Tooltip>
      )}
    </>
  );
}

Chip.propTypes = {
  Icon: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  appearance: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary"
  ]),
  showSeparator: PropTypes.bool,
  label: PropTypes.any.isRequired,
  value: PropTypes.any,
  onIconClick: PropTypes.func,
  labelClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  outlineClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  onClick: PropTypes.func,
  showTooltip: PropTypes.bool,
  completeLabel: PropTypes.string,
  tooltipClass: PropTypes.string
};

Chip.defaultProps = {
  Icon: null,
  value: null,
  disabled: false,
  size: "medium",
  appearance: "primary",
  showSeparator: false,
  onClick: undefined,
  onIconClick: undefined,
  labelClassName: "",
  containerClassName: "",
  iconClassName: "",
  outlineClassName: "",
  showTooltip: false,
  completeLabel: null,
  tooltipClass: ""
};

export default Chip;
