import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import CSSTransition from "react-transition-group/CSSTransition";
import DefaultToast from "./DefaultToast";
import ClickOutside from "../ClickOutside";

import "./index.scss";

class Toast extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: null
    };

    this.toastTimeoutId = null;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { message: currentMsg } = nextProps;
    const { message: prevMsg } = prevState;

    const isFreshMessage = !prevMsg && !!currentMsg;
    const isMessageChanged =
      !!prevMsg && !!currentMsg && prevMsg !== currentMsg;

    return {
      isOpen: isFreshMessage || isMessageChanged || prevState.isOpen,
      message:
        isFreshMessage || isMessageChanged
          ? nextProps.message
          : prevState.message
    };
  }

  componentDidMount() {
    if (this.state.isOpen) {
      this.setToastTimeout();
    }
  }

  componentDidUpdate(prevProps, _prevState) {
    const { message: currentMsg } = this.props;
    const { message: prevMsg } = prevProps;

    const isFreshMessage = !prevMsg && !!currentMsg;
    const isMessageChanged =
      !!prevMsg && !!currentMsg && prevMsg !== currentMsg;

    if (this.state.isOpen && (isFreshMessage || isMessageChanged)) {
      this.setToastTimeout();
    }
  }

  componentWillUnmount() {
    this.clearToastTimeout();
  }

  setToastTimeout = () => {
    this.clearToastTimeout();
    this.toastTimeoutId = setTimeout(
      this.closeToast,
      this.props.autoHideDuration
    );
  };

  clearToastTimeout = () => {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
      this.toastTimeoutId = null;
    }
  };

  closeToast = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      this.clearToastTimeout();
    }
  };

  onExited = () => {
    this.setState({ message: null });
    this.props.onClose();
  };

  render() {
    const {
      variant,
      direction,
      children,
      actionIcon,
      actionClassName,
      messageClassName,
      containerClassName,
      closeOnClickOutside
    } = this.props;

    const { isOpen, message } = this.state;
    const toastProps = {
      isOpen,
      message,
      onClose: this.closeToast,
      actionClassName,
      messageClassName,
      actionIcon
    };
    const RenderChildren = children || DefaultToast;

    return (
      <CSSTransition
        in={isOpen}
        timeout={250}
        classNames="toaster"
        onExited={this.onExited}
        unmountOnExit
      >
        <ClickOutside
          disable={!closeOnClickOutside}
          handleClickOutside={this.closeToast}
        >
          <div
            className={cx([
              "toast",
              containerClassName,
              direction,
              variant,
              { showMsg: isOpen, hideMsg: !isOpen }
            ])}
          >
            {RenderChildren &&
              (typeof RenderChildren === "function"
                ? RenderChildren(toastProps)
                : RenderChildren)}
          </div>
        </ClickOutside>
      </CSSTransition>
    );
  }
}

Toast.propTypes = {
  children: PropTypes.any,
  autoHideDuration: PropTypes.number,
  closeOnClickOutside: PropTypes.bool,
  containerClassName: PropTypes.string,
  messageClassName: PropTypes.string,
  actionClassName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  message: PropTypes.string,
  actionIcon: PropTypes.node,
  variant: PropTypes.oneOf(["default", "success", "warning", "error"])
};

Toast.defaultProps = {
  children: undefined,
  autoHideDuration: 4000,
  closeOnClickOutside: true,
  containerClassName: "",
  messageClassName: "",
  actionClassName: "",
  direction: "bottom",
  message: "",
  actionIcon: null,
  variant: "default"
};

export default Toast;
