import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ClickOutside, BaseInput } from "@src/ui-components";
import * as s from "./index.module.scss";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const TAB = "Tab";

class Autosuggest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: -1,
      open: false
    };
  }

  openSuggestions = () => {
    if (!this.state.open) {
      this.setState({ open: true });
    }
  };

  closeSuggestions = () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
  };

  onQueryChange = ({ target: { value, name } }) => {
    if (this.state.hoveredItem !== -1) {
      this.setState({ hoveredItem: -1 });
    }
    this.openSuggestions();
    this.props.inputProps.onChange({ value, name });
  };

  selectItem = (value, id) => {
    this.closeSuggestions();
    this.props.onSelection(value, id);
  };

  handleArrowKeys = (e, prevState) => {
    const itemsLength = (this.props.suggestions || []).length;

    if (![ARROW_DOWN, ARROW_UP].includes(e.key) || !prevState.open) {
      return null;
    }

    let { hoveredItem } = prevState;

    if (e.key === ARROW_UP) {
      if (itemsLength && hoveredItem > 0) {
        hoveredItem -= 1;
      }
    } else if (e.key === ARROW_DOWN) {
      if (itemsLength && hoveredItem < itemsLength - 1) {
        hoveredItem += 1;
      }
    }

    // dont do anything if same item is hovered again
    if (prevState.hoveredItem === hoveredItem) return null;

    const { name: value = "", id = null } = this.props.suggestions[hoveredItem];
    this.props.onSelection(value, id);

    return {
      hoveredItem
    };
  };

  handleKeyDown = (e) => {
    e.persist();
    // if pressed tab, close the suggestions
    if (e.key === TAB) {
      this.closeSuggestions();
      return;
    }

    this.setState((prevState) => {
      const itemsLength = (this.props.suggestions || []).length;
      if (!itemsLength) {
        return {
          hoveredItem: -1
        };
      }

      return { ...this.handleArrowKeys(e, prevState) };
    });
  };

  renderItems = ({ items, selectItem, hoveredItem }) => (
    <ul className={s.autoInputBox_ul}>
      {items.map((item, index) => (
        <li
          key={`${item.name}-${item.id}`}
          className={cx([
            s.autoInputBox_li,
            { [s.hovered_item]: index === hoveredItem }
          ])}
          onClick={() => selectItem(item.name, item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );

  render() {
    const RenderItems = this.props.renderItems || this.renderItems;
    const { hoveredItem } = this.state;
    const { suggestions, inputProps } = this.props;
    return (
      <ClickOutside handleClickOutside={this.closeSuggestions}>
        <BaseInput
          type="text"
          tabIndex="0"
          {...inputProps}
          onChange={this.onQueryChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.openSuggestions}
        />
        {this.state.open &&
          (inputProps.value || "").length > 0 &&
          (suggestions || []).length > 0 && (
            <RenderItems
              items={suggestions}
              selectItem={this.selectItem}
              hoveredItem={hoveredItem}
            />
          )}
      </ClickOutside>
    );
  }
}

Autosuggest.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onSelection: PropTypes.func.isRequired,
  renderItems: PropTypes.func,
  inputProps: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }).isRequired
};

Autosuggest.defaultProps = {
  suggestions: [],
  renderItems: null
};

export default Autosuggest;
