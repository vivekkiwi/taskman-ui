import React from "react";
import PropTypes from "prop-types";

class ClickOutside extends React.PureComponent {
  constructor(props) {
    super(props);
    this.domNode = null;
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (e) => {
    if (
      !this.props.disable &&
      this.domNode &&
      !this.domNode.contains(e.target)
    ) {
      this.props.handleClickOutside(e);
    }
  };

  disablePropagation = (e) => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        onClick={this.disablePropagation}
        ref={(c) => {
          this.domNode = c;
        }}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

ClickOutside.propTypes = {
  handleClickOutside: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  disable: PropTypes.bool,
  className: PropTypes.string
};

ClickOutside.defaultProps = {
  disable: false,
  className: ""
};

export default ClickOutside;
