import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

const DEFAULT_PADDING = 15;
function BaseInput(props) {
  const leftIconNodeRef = useRef(null);
  const inputRef = useRef(null);

  // set input focus
  const setInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onLeftIconClickHandler = () => {
    setInputFocus();
    if (props.disabled || !props.onLeftIconClick) return;
    props.onLeftIconClick();
  };

  const onRightIconClickHandler = () => {
    setInputFocus();
    if (props.disabled || !props.onRightIconClick) return;
    props.onRightIconClick();
  };

  useEffect(() => {
    const { forwardedRef } = props;
    if (leftIconNodeRef.current && forwardedRef && forwardedRef.current) {
      const { height, width } = getComputedStyle(leftIconNodeRef.current);
      forwardedRef.current.style.paddingLeft = `${
        parseInt(width, 10) + DEFAULT_PADDING
      }px`;

      const { paddingTop, paddingBottom } = getComputedStyle(
        forwardedRef.current
      );

      forwardedRef.current.style.height = `${
        parseInt(height, 10) +
        parseInt(paddingTop, 10) +
        parseInt(paddingBottom, 10)
      }px`;
    }
  });

  const {
    error,
    value,
    label,
    disabled,
    inputStyle,
    forwardedRef,
    leftIconNode,
    rightIconNode,
    leftIconStyle,
    rightIconStyle,
    labelClassName,
    inputClassName,
    onLeftIconClick,
    onRightIconClick,
    leftIconClassName,
    rightIconClassName,
    containerClassName,
    errorClassName,
    ...restInputProps
  } = props;

  const setInputRef = (el) => {
    inputRef.current = el;
    if (forwardedRef) {
      forwardedRef.current = el;
    }
  };

  return (
    <>
      <div className="inputWrapper" onClick={onLeftIconClickHandler}>
        {leftIconNode && (
          <div
            ref={leftIconNodeRef}
            className={cx("leftIcon", leftIconClassName, {
              disable: disabled,
              error
            })}
            style={leftIconStyle}
            onClick={onLeftIconClickHandler}
          >
            {leftIconNode}
          </div>
        )}

        <div className={containerClassName}>
          <input
            spellCheck="false"
            autoComplete="off"
            {...restInputProps}
            className={cx([
              {
                error,
                active: !!value,
                leftPadding: !!leftIconNode,
                rightPadding: !!rightIconNode
              },
              inputClassName
            ])}
            style={inputStyle}
            value={value}
            disabled={disabled}
            ref={setInputRef}
          />
          {label && (
            <label
              htmlFor="input"
              className={cx("label", labelClassName, {
                error,
                leftPadding: !!leftIconNode,
                rightPadding: !!rightIconNode
              })}
            >
              {{ label }}
            </label>
          )}
        </div>
        {rightIconNode && (
          <span
            className={cx("rightIcon", rightIconClassName, {
              disable: disabled,
              error
            })}
            style={rightIconStyle}
            onClick={onRightIconClickHandler}
          >
            {rightIconNode}
          </span>
        )}
      </div>
      {error && (
        <div className={cx("errorText", errorClassName)}>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

BaseInput.propTypes = {
  forwardedRef: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  containerClassName: PropTypes.string,
  inputStyle: PropTypes.object,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  leftIconClassName: PropTypes.string,
  rightIconClassName: PropTypes.string,
  onLeftIconClick: PropTypes.func,
  onRightIconClick: PropTypes.func,
  leftIconStyle: PropTypes.object,
  rightIconStyle: PropTypes.object,
  leftIconNode: PropTypes.any,
  rightIconNode: PropTypes.any,
  errorClassName: PropTypes.string
};

BaseInput.defaultProps = {
  forwardedRef: null,
  disabled: false,
  value: undefined,
  error: "",
  label: "",
  inputStyle: {},
  containerClassName: "",
  inputClassName: "",
  labelClassName: "",
  leftIconStyle: {},
  rightIconStyle: {},
  leftIconClassName: "",
  rightIconClassName: "",

  onLeftIconClick: () => {},
  onRightIconClick: () => {},

  leftIconNode: null,
  rightIconNode: null,
  errorClassName: ""
};

export default BaseInput;
