import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import BaseTransition from "../BaseTransition";

import * as s from "./SwipeAppearLeft.module.scss";

function SwipeAppearLeft({
  startTransition,
  transitionTime,
  classNames,
  onTransitionEnd,
  children,
  className
}) {
  const { enter, enterActive, enterDone } = classNames;

  return (
    <BaseTransition
      startTransition={startTransition}
      transitionTime={transitionTime}
      className={cx(s.appear, className)}
      classNames={{
        enter: cx(s.enter, enter),
        enterActive: cx(s.enterActive, enterActive),
        enterDone: cx(s.enterDone, enterDone)
      }}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </BaseTransition>
  );
}

SwipeAppearLeft.defaultProps = {
  onTransitionEnd: () => {},
  startTransition: false,
  classNames: {},
  transitionTime: 500,
  className: ""
};

SwipeAppearLeft.propTypes = {
  startTransition: PropTypes.bool,
  classNames: PropTypes.object,
  onTransitionEnd: PropTypes.func,
  children: PropTypes.element.isRequired,
  transitionTime: PropTypes.number,
  className: PropTypes.string
};

export default SwipeAppearLeft;
