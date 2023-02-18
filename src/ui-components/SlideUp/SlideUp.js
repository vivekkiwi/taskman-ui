import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import BaseTransition from "../BaseTransition";

import * as s from "./SlideUp.module.scss";

function SlideUp({
  startTransition,
  transitionTime,
  onTransitionEnd,
  children,
  className,
  classNames,
  nodeRef
}) {
  const { enter, enterActive, enterDone } = classNames;

  return (
    <BaseTransition
      startTransition={startTransition}
      transitionTime={transitionTime}
      className={cx(s.slideUp, className)}
      classNames={{
        enter: cx(s.enter, enter),
        enterActive: cx(s.enterActive, enterActive),
        enterDone: cx(s.enterDone, enterDone)
      }}
      onTransitionEnd={onTransitionEnd}
      nodeRef={nodeRef}
    >
      <div>{children}</div>
    </BaseTransition>
  );
}

SlideUp.defaultProps = {
  onTransitionEnd: () => {},
  startTransition: false,
  transitionTime: 500,
  classNames: {},
  className: "",
  nodeRef: null
};

SlideUp.propTypes = {
  startTransition: PropTypes.bool,
  onTransitionEnd: PropTypes.func,
  children: PropTypes.node.isRequired,
  transitionTime: PropTypes.number,
  classNames: PropTypes.object,
  className: PropTypes.string,
  nodeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default SlideUp;
