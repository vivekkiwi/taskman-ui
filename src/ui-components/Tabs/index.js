import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.activeTab || 0,
      isControlled: typeof this.props.activeTab !== "undefined"
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isControlled, activeTab } = prevState;
    if (isControlled && nextProps.activeTab !== activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }
    return null;
  }

  onTabClick = (index, childProps) => {
    if (childProps.disabled) return;

    this.setState({ activeTab: index });
    this.props.onTabClick(index, childProps);
  };

  renderHeaders = () => {
    const { tabHeaderContainerClass, children } = this.props;
    return (
      <ul className={`tab-list ${tabHeaderContainerClass || ""}`}>
        {React.Children.map(children, (child, index) => {
          if (!child) return null;
          const {
            className: clazzName,
            title,
            disabled,
            renderTitle
          } = child.props;

          const tabItemClass = cx("tab-header", clazzName || "", {
            "tab-active": this.state.activeTab === index,
            disabled
          });

          return React.createElement(
            "li",
            {
              className: tabItemClass,
              onClick: () => this.onTabClick(index, child.props)
            },
            renderTitle(title)
          );
        })}
      </ul>
    );
  };

  render() {
    const { tabContentClass, containerClass, children } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={cx(["tabs", containerClass])}>
        {this.renderHeaders()}
        <div className={`tab-content ${tabContentClass || ""}`}>
          {children[activeTab]}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  activeTab: PropTypes.number,
  containerClass: PropTypes.string,
  tabHeaderContainerClass: PropTypes.string,
  tabContentClass: PropTypes.string,
  onTabClick: PropTypes.func.isRequired
};

Tabs.defaultProps = {
  activeTab: undefined,
  containerClass: "",
  tabContentClass: "",
  tabHeaderContainerClass: ""
};

export default Tabs;
