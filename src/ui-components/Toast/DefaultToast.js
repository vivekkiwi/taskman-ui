import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CloseIcon } from "@components/atoms/Icon/icons";

function DefaultToast({
  message,
  actionIcon,
  messageClassName,
  actionClassName,
  onClose
}) {
  return (
    <div className="toast-wrapper">
      <div className={cx(["toast-wrapper-msg", messageClassName])}>
        {message}
      </div>
      <span
        className={cx(["toast-wrapper-action", actionClassName])}
        onClick={onClose}
      >
        {actionIcon || <CloseIcon />}
      </span>
    </div>
  );
}

DefaultToast.propTypes = {
  message: PropTypes.string,
  messageClassName: PropTypes.string,
  actionClassName: PropTypes.string,
  actionIcon: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

DefaultToast.defaultProps = {
  message: "",
  messageClassName: "",
  actionClassName: "",
  actionIcon: ""
};

export default DefaultToast;
