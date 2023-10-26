import React, { useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import CSSTransition from "react-transition-group/CSSTransition";
import Overlay from "../Overlay";
import ClickOutside from "../ClickOutside";

import "./index.scss";

const onClick = (e) => e.stopPropagation();
function Drawer(props) {
  const {
    open,
    onClose,
    backdrop,
    children,
    direction,
    keepAlive,
    className,
    onClickOutside,
    closeOnClickOutside
  } = props;

  const setChildProps = {
    isDrawerOpen: open,
    closeDrawer: onClose
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

  const handleClickOutside = useCallback(() => {
    onClose();
    if (onClickOutside) {
      onClickOutside();
    }
  }, []);

  return (
    <CSSTransition
      in={open}
      timeout={200}
      classNames="slide"
      unmountOnExit={!keepAlive}
    >
      <>
        <ClickOutside
          disable={!closeOnClickOutside}
          handleClickOutside={handleClickOutside}
        >
          <span
            onClick={onClick}
            className={cx([
              direction,
              className,
              { visible: open, hidden: !open, noBackdrop: !backdrop },
              "drawer"
            ])}
            style={{ borderRadius: "24px 0px 0px 24px" }}
          >
            {renderChildWithProps()}
          </span>
        </ClickOutside>
        <Overlay disableScroll={false} open={open && backdrop} />
      </>
    </CSSTransition>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool,
  keepAlive: PropTypes.bool,
  onClose: PropTypes.func,
  onClickOutside: PropTypes.func,
  backdrop: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  closeOnClickOutside: PropTypes.bool,
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"])
};

Drawer.defaultProps = {
  open: undefined,
  keepAlive: false,
  onClose: () => {},
  backdrop: true,
  closeOnClickOutside: false,
  direction: "left",
  className: undefined,
  onClickOutside: undefined
};

export default Drawer;
