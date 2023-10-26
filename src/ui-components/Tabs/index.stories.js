import React from "react";
import PropTypes from "prop-types";
import Tabs from "./index";
import Tab from "../Tab";

export default { title: "Tabs" };

class WithTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.activeTab || 0
    };
  }

  onTabClick = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { activeTab } = this.state;
    const { children, ...restProps } = this.props;
    return (
      <Tabs {...restProps} activeTab={activeTab} onTabClick={this.onTabClick}>
        {children}
      </Tabs>
    );
  }
}

WithTabs.propTypes = {
  activeTab: PropTypes.number,
  children: PropTypes.any.isRequired
};

WithTabs.defaultProps = {
  activeTab: 0
};

export const selected = () => (
  <WithTabs>
    <Tab title="Tab One">This is tab 1 Content</Tab>
    <Tab title="Tab Two">This is tab 2 Content</Tab>
    <Tab title="Tab Three">This is tab 3 Content</Tab>
    <Tab title="Tab Four">This is tab 4 Content</Tab>
  </WithTabs>
);
