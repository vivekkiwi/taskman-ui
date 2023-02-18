import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import DefaultItem from "./DefaultItem";
import ClickOutside from "../ClickOutside";
import BaseInput from "../BaseInput";
import PointAngle from "../PointAngle";
import "./index.scss";

const DEFAULT_FOCUS = 0;
const NO_SELECTED = null;
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const TAB = "Tab";
const Enter = "Enter";

const RefInput = React.forwardRef((props, ref) => {
  return <BaseInput {...props} forwardedRef={ref} />;
});

const searchOptions = (query, options) => {
  if (!query) return options;

  return options.filter((item) =>
    item.label.toLowerCase().startsWith(query.toLowerCase())
  );
};

const findOptionIndex = (options, queryOption) => {
  let index = NO_SELECTED;

  if (queryOption) {
    index = options.findIndex(
      (item) =>
        item.label === queryOption.label && item.value === queryOption.value
    );

    index = index >= 0 ? index : NO_SELECTED;
  }

  return index;
};

const findFocusIndex = (options, queryOption) => {
  return findOptionIndex(options, queryOption) || DEFAULT_FOCUS;
};

class SelectBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      open: false,
      focusedItem: DEFAULT_FOCUS,
      selectedItem: props.value || NO_SELECTED,
      filteredOptions: props.options
    };

    this.inputRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const updatedState = {
      selectedItem: nextProps.value
    };

    if (!prevState.open) {
      const isSelectedOptionInList =
        findOptionIndex(nextProps.options, nextProps.value) !== NO_SELECTED;
      updatedState.filteredOptions = nextProps.options;
      updatedState.query = isSelectedOptionInList ? nextProps.value.label : "";
    }

    return updatedState;
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  onInputChange = (e) => {
    const { value } = e.target;
    let { filteredOptions } = this.state;

    if (this.props.onInputChange) {
      this.props.onInputChange(e);
    } else {
      filteredOptions = searchOptions(value, this.props.options);
    }

    this.setState({
      query: value,
      filteredOptions
    });
  };

  addListeners = () => {
    if (this.state.filteredOptions.length > 0) {
      document.addEventListener("keydown", this.handleContentKeyDown);
    }
  };

  removeListeners = () => {
    document.addEventListener("keydown", this.handleContentKeyDown);
  };

  openBox = () => {
    if (this.state.open) return;

    this.setState((state) => {
      return {
        open: true,
        focusedItem: findFocusIndex(state.filteredOptions, state.selectedItem)
      };
    });

    this.addListeners();

    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  closeBox = () => {
    if (!this.state.open) return;
    this.setState({ open: false });
    this.blurItem();
    this.removeListeners();

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  selectItem = (index) => {
    const { filteredOptions, selectedItem } = this.state;
    const item = filteredOptions[index] || selectedItem;
    this.closeBox();
    this.loseInputFocus();
    this.props.onChange(item);
  };

  loseInputFocus = () => {
    if (this.inputRef) this.inputRef.current.blur();
  };

  focusInput = () => {
    if (this.inputRef) this.inputRef.current.focus();
  };

  focusItem = (index) => () => {
    this.setState({ focusedItem: index });
  };

  blurItem = () => {
    if (this.state.focusedItem !== DEFAULT_FOCUS) {
      this.setState({ focusedItem: DEFAULT_FOCUS });
    }
  };

  onItemClick = (index) => (e) => {
    e.persist();
    e.stopPropagation();

    this.selectItem(index);
  };

  handleContentKeyDown = (e) => {
    const { open, filteredOptions } = this.state;
    const { loading } = this.props;

    if (open && !loading && filteredOptions.length > 0) {
      // close box if tab is clicked
      if (e.key === TAB || e.key === Enter) {
        return this.selectItem(this.state.focusedItem);
      }

      if (![ARROW_DOWN, ARROW_UP].includes(e.key)) {
        return null;
      }

      const optionsLength = filteredOptions.length;

      this.setState((prevState) => {
        let { focusedItem } = prevState;
        if (e.key === ARROW_UP) {
          if (optionsLength && focusedItem > 0) {
            focusedItem -= 1;
          }
        } else if (e.key === ARROW_DOWN) {
          if (optionsLength && focusedItem < optionsLength - 1) {
            focusedItem += 1;
          }
        }

        return {
          focusedItem
        };
      });
    }

    return null;
  };

  render() {
    const { open, query, focusedItem, selectedItem, filteredOptions } =
      this.state;
    const {
      loading,
      inputProps,
      loadingMessage,
      RenderItem,
      RenderLoading,
      RenderNoOption,
      noOptionsMessage,
      contentClassName,
      containerClassName
    } = this.props;
    const rightIconNode = <PointAngle direction="down" />;

    return (
      <ClickOutside handleClickOutside={this.closeBox}>
        <div className={cx(["selectbox-cntr", containerClassName])}>
          <RefInput
            {...inputProps}
            ref={this.inputRef}
            value={query}
            onFocus={this.openBox}
            onChange={this.onInputChange}
            rightIconNode={rightIconNode}
            onRightIconClick={this.focusInput}
          />

          {open && (
            <div className={cx(["content", contentClassName])}>
              {loading && <RenderLoading label={loadingMessage} />}
              {!loading && filteredOptions.length === 0 && (
                <RenderNoOption label={noOptionsMessage} />
              )}
              {!loading &&
                filteredOptions.length > 0 &&
                filteredOptions.map(({ label, value }, index) => {
                  const isItemSelected =
                    selectedItem &&
                    selectedItem.label === label &&
                    selectedItem.value === value;

                  return (
                    <RenderItem
                      key={label}
                      onClick={this.onItemClick(index)}
                      onFocus={this.focusItem(index)}
                      onBlur={this.blurItem}
                      onMouseOver={this.focusItem(index)}
                      onMouseOut={this.blurItem}
                      selected={isItemSelected}
                      hovered={focusedItem === index}
                      label={label}
                      value={value}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </ClickOutside>
    );
  }
}

SelectBox.propTypes = {
  inputProps: PropTypes.object,
  value: PropTypes.object,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ),
  RenderItem: PropTypes.func,
  RenderLoading: PropTypes.func,
  RenderNoOption: PropTypes.func,
  loadingMessage: PropTypes.string,
  noOptionsMessage: PropTypes.string,
  contentClassName: PropTypes.string,
  containerClassName: PropTypes.string
};

SelectBox.defaultProps = {
  inputProps: {},
  value: undefined,
  onInputChange: undefined,
  onOpen: undefined,
  onClose: undefined,
  loading: false,
  options: [],
  RenderLoading: DefaultItem,
  RenderItem: DefaultItem,
  RenderNoOption: DefaultItem,
  loadingMessage: "",
  noOptionsMessage: "",
  contentClassName: "",
  containerClassName: ""
};

export default SelectBox;
