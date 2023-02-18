import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./index.scss";

function ListItem({
  containerClass,
  children,
  selected,
  style,
  id,
  ...restProps
}) {
  return (
    <div
      style={style}
      id={id}
      className={cx(["list-item-root", containerClass, { selected }])}
      onClick={restProps.onClick}
    >
      {children}
    </div>
  );
}

ListItem.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
  id: PropTypes.string,
  containerClass: PropTypes.string,
  children: PropTypes.any
};
ListItem.defaultProps = {
  id: "",
  containerClass: "",
  children: null,
  selected: false,
  style: {}
};

export default ListItem;
