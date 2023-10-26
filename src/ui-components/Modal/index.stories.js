import React from "react";
import PropTypes from "prop-types";
import Modal from "./index";

export default { title: "Modal" };

class ModalWithToggleBtn extends React.Component {
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
        <Modal open={isOpen} {...restProps} onClose={this.close}>
          {children}
        </Modal>

        <button type="button" onClick={this.toggle}>
          {isOpen ? "Close" : "Open"}
        </button>
      </>
    );
  }
}

ModalWithToggleBtn.propTypes = {
  children: PropTypes.any.isRequired,
  onClose: PropTypes.func
};

ModalWithToggleBtn.defaultProps = {
  onClose: undefined
};

export const withText = () => (
  <ModalWithToggleBtn closeOnClickOutside>
    This is the text content. Click outside modal to close it
  </ModalWithToggleBtn>
);

export const withElements = () => (
  <ModalWithToggleBtn closeOnClickOutside>
    <div>Click outside modal to close it</div>
    <div>Click outside modal to close it</div>
    <div>Click outside modal to close it</div>
    <div>Click outside modal to close it</div>
    <div>Click outside modal to close it</div>
    <div>Click outside modal to close it</div>
  </ModalWithToggleBtn>
);

export const noBackdrop = () => (
  <ModalWithToggleBtn backdrop={false} closeOnClickOutside>
    This is the text content. Click outside modal to close it
  </ModalWithToggleBtn>
);

export const withCloseButton = () => (
  <ModalWithToggleBtn>
    {({ closeModal }) => (
      <>
        This is the text content. Click Close Me to close
        <br />
        <br />
        <button type="button" onClick={closeModal}>
          Close Me
        </button>
      </>
    )}
  </ModalWithToggleBtn>
);
