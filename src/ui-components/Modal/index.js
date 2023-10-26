import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import CSSTransition from "react-transition-group/CSSTransition";
import Overlay from "../Overlay";
import ClickOutside from "../ClickOutside";

import "./index.scss";

const onClick = (e) => e.stopPropagation();
function Modal(props) {
  const {
    open,
    onClose,
    backdrop,
    children,
    direction,
    keepAlive,
    disableScroll,
    closeOnClickOutside,
    doNotEnableScroll,
    className,
    dontSlide
  } = props;
  const setChildProps = {
    isModalOpen: open,
    closeModal: onClose
  };

  const renderChildWithProps = () => {
    if (!children || Array.isArray(children) || typeof children === "string") {
      return children;
    }

    if (typeof children === "function") {
      return children(setChildProps);
    }

    return React.cloneElement(children, setChildProps);
  };

  return (
    <CSSTransition
      in={open}
      timeout={250}
      classNames={!dontSlide && "slide"}
      unmountOnExit={!keepAlive}
    >
      <>
        <ClickOutside
          disable={!closeOnClickOutside}
          handleClickOutside={onClose}
        >
          <div
            onClick={onClick}
            className={cx([
              direction,
              { visible: open, hidden: !open, noBackdrop: !backdrop },
              "modal",
              className
            ])}
          >
            {renderChildWithProps()}
          </div>
        </ClickOutside>
        <Overlay
          open={open && backdrop}
          disableScroll={disableScroll}
          doNotEnableScroll={doNotEnableScroll}
        />
      </>
    </CSSTransition>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  keepAlive: PropTypes.bool,
  backdrop: PropTypes.bool,
  onClose: PropTypes.func,
  disableScroll: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  children: PropTypes.any.isRequired,
  direction: PropTypes.oneOf(["center", "left", "right", "top", "bottom"]),
  doNotEnableScroll: PropTypes.bool,
  className: PropTypes.string,
  dontSlide: PropTypes.bool
};

Modal.defaultProps = {
  open: undefined,
  keepAlive: false,
  closeOnClickOutside: false,
  onClose: () => {},
  backdrop: true,
  direction: "center",
  disableScroll: false,
  doNotEnableScroll: false,
  className: "",
  dontSlide: false
};

export default Modal;
