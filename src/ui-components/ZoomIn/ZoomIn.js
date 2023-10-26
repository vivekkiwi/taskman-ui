import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import BaseTransition from "../BaseTransition";

import * as s from "./ZoomIn.module.scss";

function ZoomIn({
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
      className={cx(s.zoomIn, className)}
      classNames={{
        enter: cx(s.enter, enter),
        enterActive: cx(s.enterActive, enterActive),
        enterDone: cx(s.enterDone, enterDone)
      }}
      onTransitionEnd={onTransitionEnd}
    >
      <div>{children}</div>
    </BaseTransition>
  );
}

ZoomIn.defaultProps = {
  onTransitionEnd: () => {},
  startTransition: false,
  classNames: {},
  transitionTime: 500,
  className: ""
};

ZoomIn.propTypes = {
  startTransition: PropTypes.bool,
  classNames: PropTypes.object,
  onTransitionEnd: PropTypes.func,
  children: PropTypes.element.isRequired,
  transitionTime: PropTypes.number,
  className: PropTypes.string
};

export default ZoomIn;
