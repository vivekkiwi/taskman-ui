import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import PropTypes from "prop-types";

function BaseTransition({
  startTransition,
  transitionTime,
  classNames,
  onTransitionEnd,
  children,
  className
}) {
  const { enter, enterActive, enterDone } = classNames;

  return (
    <CSSTransition
      in={startTransition}
      timeout={transitionTime}
      unmountOnExit={false}
      style={{ transitionDuration: `${transitionTime}ms` }}
      className={className}
      classNames={{
        enter,
        enterActive,
        enterDone
      }}
      onEntered={onTransitionEnd}
    >
      <div>{children}</div>
    </CSSTransition>
  );
}

BaseTransition.defaultProps = {
  onTransitionEnd: () => {},
  startTransition: false,
  classNames: {},
  transitionTime: 500,
  className: ""
};

BaseTransition.propTypes = {
  startTransition: PropTypes.bool,
  classNames: PropTypes.object,
  onTransitionEnd: PropTypes.func,
  children: PropTypes.element.isRequired,
  transitionTime: PropTypes.number,
  className: PropTypes.string
};

export default BaseTransition;
