import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import RadioIcon from "./RadioIcon";

import "./index.scss";

class Radio extends React.PureComponent {
  onChange = (e) => {
    const { disabled, name, label, value } = this.props;
    if (disabled) return;

    if (this.props.onChange) {
      this.props.onChange(e, {
        name,
        label,
        value
      });
    }
  };

  render() {
    const {
      label,
      name,
      size,
      value,
      checked,
      disabled,
      iconProps,
      inputClass,
      appearance,
      inputStyles,
      CheckedIcon,
      UncheckedIcon,
      labelClassName,
      containerClassName,
      iconContainerClass,
      checkedIconClassName,
      uncheckedIconClassName
    } = this.props;

    const _iconProps = {
      ...iconProps,
      checked,
      disabled,
      className: checked ? checkedIconClassName : uncheckedIconClassName
    };

    return (
      <div
        className={cx([
          appearance,
          size,
          { disabled },
          containerClassName,
          "radio"
        ])}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="radioInputWrapper">
          <span
            className={cx([
              "icon",
              { iconDisabled: disabled },
              iconContainerClass
            ])}
          >
            <input
              type="radio"
              name={name}
              value={value}
              disabled={disabled}
              style={inputStyles}
              className={cx([
                "input",
                { inputHidden: !!(CheckedIcon || UncheckedIcon) },
                { disabled },
                inputClass
              ])}
              checked={checked}
              onChange={this.onChange}
              dataId={`${(name || "").replace(" ", "_").toUpperCase()}_${
                checked ? "ON" : "OFF"
              }`}
            />
            {checked && CheckedIcon && (
              <CheckedIcon key={value} {..._iconProps} />
            )}
            {!checked && UncheckedIcon && (
              <UncheckedIcon key={value} {..._iconProps} />
            )}
          </span>

          {label && (
            <span
              className={cx([
                "label",
                { labelDisabled: disabled },
                labelClassName
              ])}
            >
              {label}
            </span>
          )}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  value: PropTypes.string,
  iconProps: PropTypes.object,
  inputStyles: PropTypes.object,
  inputClass: PropTypes.string,
  CheckedIcon: PropTypes.element,
  UncheckedIcon: PropTypes.element,
  labelClassName: PropTypes.string,
  iconContainerClass: PropTypes.string,
  containerClassName: PropTypes.string,
  checkedIconClassName: PropTypes.string,
  uncheckedIconClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  appearance: PropTypes.oneOf(["primary", "secondary"])
};

Radio.defaultProps = {
  value: "",
  inputStyles: {},
  iconProps: {},
  inputClass: "",
  labelClassName: "",
  iconContainerClass: "",
  containerClassName: "",
  checkedIconClassName: "",
  uncheckedIconClassName: "",
  CheckedIcon: RadioIcon,
  UncheckedIcon: RadioIcon,
  disabled: false,
  appearance: "primary",
  size: "medium"
};

export default Radio;
