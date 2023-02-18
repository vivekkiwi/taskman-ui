import React from "react";
import PropTypes from "prop-types";

import * as s from "./SlideButton.module.scss";

function SlideButton({ onChange, selectedDirection, leftLabel, rightLable }) {
  const handleClick = ({ target }) => {
    const clickedDir = target.getAttribute("data-dir");
    onChange(clickedDir);
  };
  return (
    <div className={`${s.wrap} ${s[selectedDirection]}`}>
      <button
        type="button"
        className={`${s.button} ${
          selectedDirection === "left" ? s.selected : ""
        }`}
        onClick={handleClick}
        data-dir="left"
      >
        {leftLabel}
      </button>
      <button
        type="button"
        className={`${s.button} ${
          selectedDirection === "right" ? s.selected : ""
        }`}
        onClick={handleClick}
        data-dir="right"
      >
        {rightLable}
      </button>
    </div>
  );
}

SlideButton.defaultProps = {
  selectedDirection: "right"
};

SlideButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedDirection: PropTypes.string,
  leftLabel: PropTypes.string.isRequired,
  rightLable: PropTypes.string.isRequired
};

export default SlideButton;
