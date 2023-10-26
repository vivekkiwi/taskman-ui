import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./index";

export default { title: "Base Input" };

function LeftIconNode(props) {
  return <span {...props}>&#8377;</span>;
}
function RightIconNode(props) {
  return <span {...props}>Lakhs</span>;
}

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.value
    };
  }

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <BaseInput {...this.props} value={inputValue} onChange={this.onChange} />
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string
};

TextField.defaultProps = {
  value: ""
};

export const withValue = () => <TextField value="This is value" />;
export const withPlaceholder = () => (
  <TextField placeholder="This is placeholder" />
);
export const disabled = () => <TextField disabled value="This is value" />;
export const withLeftIcon = () => (
  <TextField leftIconNode={<LeftIconNode />} value="This is value" />
);
export const withRightIcon = () => (
  <TextField rightIconNode={<RightIconNode />} value="This is value" />
);

export const withBothIcons = () => (
  <TextField
    leftIconNode={<LeftIconNode />}
    rightIconNode={<RightIconNode />}
    value="This is value"
  />
);
