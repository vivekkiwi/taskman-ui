import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import UnmountClosed from "../Collapse/UnmountClosed";
import Collapse from "../Collapse/Collapse";
import Header from "./AccordianHeader";
import "./index.scss";

class Accordian extends PureComponent {
  onChange = () => {
    const { open, onClose, onOpen } = this.props;
    const onChange = open ? onClose : onOpen;

    onChange(!open);
  };

  render() {
    const {
      open,
      title,
      children,
      keepAlive,
      isNoHeader,
      RenderHeader,
      titleClassName,
      headerClassName,
      containerClassName,
      contentContainerClassName,
      handleAfterClose,
      handleAfterOpened
    } = this.props;

    return (
      <div className={cx(["acdn-wrapper", containerClassName, { open }])}>
        {!isNoHeader && (
          <div
            className={cx(["acdn-header", headerClassName])}
            onClick={this.onChange}
          >
            <RenderHeader
              open={open}
              title={title}
              className={titleClassName}
            />
          </div>
        )}
        {keepAlive ? (
          <Collapse
            isOpened={open}
            handleAfterClose={handleAfterClose}
            handleAfterOpened={handleAfterOpened}
            contentContainerClassName={cx([
              "content",
              contentContainerClassName
            ])}
          >
            <div className={cx(["content", contentContainerClassName])}>
              {children}
            </div>
          </Collapse>
        ) : (
          <UnmountClosed
            isOpened={open}
            handleAfterClose={handleAfterClose}
            handleAfterOpened={handleAfterOpened}
            contentContainerClassName={cx([
              "content",
              contentContainerClassName
            ])}
          >
            <div className={cx(["content", contentContainerClassName])}>
              {children}
            </div>
          </UnmountClosed>
        )}
      </div>
    );
  }
}

Accordian.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  headerClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  contentContainerClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  RenderHeader: PropTypes.node,
  children: PropTypes.any.isRequired,
  keepAlive: PropTypes.bool,
  isNoHeader: PropTypes.bool,
  handleAfterClose: PropTypes.func,
  handleAfterOpened: PropTypes.func
};

Accordian.defaultProps = {
  title: "",
  headerClassName: "",
  containerClassName: "",
  contentContainerClassName: "",
  titleClassName: "",
  RenderHeader: Header,
  keepAlive: false,
  isNoHeader: false,
  handleAfterClose: () => {},
  handleAfterOpened: () => {}
};

export default Accordian;
