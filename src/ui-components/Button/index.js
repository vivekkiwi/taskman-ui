import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import BtnLoader from "../Loader";

import "./index.scss";

function Button({
  children,
  Loader,
  disabled,
  loading,
  appearance,
  onClick,
  size,
  className,
  variant,
  ripple,
  ...restProps
}) {
  const onButtonClick = (e) => {
    e.stopPropagation();

    if (loading || disabled) return;
    onClick(e);
  };

  const ButtonLoader =
    Loader ||
    (() => (
      <BtnLoader
        type="dots"
        theme={appearance === "primary" ? "light" : "dark"}
      >
        {children}
      </BtnLoader>
    ));

  const buttonProps = {
    ...restProps,
    className: cx([
      "btn",
      appearance,
      size,
      className,
      variant,
      {
        ripple,
        loading,
        disabled
      }
    ]),
    onClick: onButtonClick
  };

  const child = loading ? <ButtonLoader /> : children;

  return (
    <>
      {variant === "button" && (
        <button type="button" {...buttonProps}>
          {child}
        </button>
      )}

      {variant === "link" && <a {...buttonProps}>{child}</a>}
    </>
  );
}

Button.defaultProps = {
  Loader: null,
  ripple: false,
  linkByForce: false,
  disabled: false,
  loading: false,
  appearance: "primary",
  className: "",
  size: "medium",
  variant: "button",
  style: {}
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  ripple: PropTypes.bool,
  linkByForce: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  appearance: PropTypes.oneOf(["primary", "secondary"]),
  Loader: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["button", "link"]),
  style: PropTypes.object
};

export default Button;
