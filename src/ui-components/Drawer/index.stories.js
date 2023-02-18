import React from "react";
import PropTypes from "prop-types";
import Drawer from "./index";

export default { title: "Drawer" };

class DrawerWithToggleBtn extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const { isOpen } = this.state;

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  close = () => {
    this.setState({ isOpen: false });

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    const { children, ...restProps } = this.props;

    return (
      <>
        <Drawer open={isOpen} {...restProps} onClose={this.close}>
          {children}
        </Drawer>

        <button type="button" onClick={this.toggle}>
          {isOpen ? "Close" : "Open"}
        </button>
      </>
    );
  }
}

DrawerWithToggleBtn.propTypes = {
  children: PropTypes.any.isRequired,
  onClose: PropTypes.func
};

DrawerWithToggleBtn.defaultProps = {
  onClose: undefined
};

export const withText = () => (
  <DrawerWithToggleBtn closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const withElements = () => (
  <DrawerWithToggleBtn closeOnClickOutside>
    <div>Click outside drawer to close it</div>
    <div>Click outside drawer to close it</div>
    <div>Click outside drawer to close it</div>
    <div>Click outside drawer to close it</div>
    <div>Click outside drawer to close it</div>
    <div>Click outside drawer to close it</div>
  </DrawerWithToggleBtn>
);

export const directionRight = () => (
  <DrawerWithToggleBtn direction="right" closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const directionLeft = () => (
  <DrawerWithToggleBtn direction="left" closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const directionTop = () => (
  <DrawerWithToggleBtn direction="top" closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const directionBottom = () => (
  <DrawerWithToggleBtn direction="bottom" closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const noBackdrop = () => (
  <DrawerWithToggleBtn backdrop={false} closeOnClickOutside>
    This is the text content. Click outside drawer to close it
  </DrawerWithToggleBtn>
);

export const withCloseButton = () => (
  <DrawerWithToggleBtn direction="right">
    {({ closeDrawer }) => (
      <>
        This is the text content. Click Close Me to close
        <br />
        <br />
        <button type="button" onClick={closeDrawer}>
          Close Me
        </button>
      </>
    )}
  </DrawerWithToggleBtn>
);
