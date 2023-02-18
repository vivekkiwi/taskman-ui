import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import "./index.scss";

class Overlay extends PureComponent {
  constructor(props) {
    super(props);

    this.html = document.querySelector("html");
    this.body = document.querySelector("body");
  }

  componentDidMount() {
    if (this.props.open && this.props.disableScroll) {
      this.disableScroll();
    }
  }

  componentDidUpdate(prevProps) {
    const { open: isOpenBefore } = prevProps;
    const { open: isOpenNow } = this.props;

    if (isOpenBefore && !isOpenNow) this.enableScroll();
    if (!isOpenBefore && isOpenNow) this.disableScroll();
  }

  componentWillUnmount() {
    if (!this.props.doNotEnableScroll) {
      this.enableScroll();
    }
  }

  disableScroll = () => {
    this.html.classList.add("noScroll");
    this.body.classList.add("noScroll");
  };

  enableScroll = () => {
    this.html.classList.remove("noScroll");
    this.body.classList.remove("noScroll");
  };

  handleClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { children, open, className } = this.props;
    const classes = cx(["overlay", className]);

    return (
      <CSSTransition
        appear
        in={open}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div onClick={this.handleClick} className={classes}>
          {children}
        </div>
      </CSSTransition>
    );
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  open: PropTypes.bool,
  disableScroll: PropTypes.bool,
  doNotEnableScroll: PropTypes.bool
};

Overlay.defaultProps = {
  className: "",
  children: null,
  open: false,
  disableScroll: false,
  doNotEnableScroll: false
};

export default Overlay;
