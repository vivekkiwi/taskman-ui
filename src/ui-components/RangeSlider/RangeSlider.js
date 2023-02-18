import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import ReactSlider from "react-slider";

import * as s from "./RangeSlider.module.scss";

const renderThumb = (props) => {
  return <div {...props} className={s.thumb} />;
};

const renderTrack = (props) => {
  return <div {...props} />;
};

function RangeSlider({
  classNames,
  range,
  metaLabel,
  onAfterChange,
  minValue,
  maxValue,
  onChange
}) {
  const handleChange = (values) => {
    const [_minValue, _maxValue] = values;
    if (onChange) {
      const isDefault = range.min === minValue && range.max === maxValue;
      onChange({
        value: { min: _minValue, max: _maxValue },
        isDefault
      });
    }
  };

  return (
    <div className={cx([s.root, classNames.root])}>
      <div className={s.labels}>
        <span className={s.minLabel}>
          {metaLabel.left && <span className={s.prefix}>{metaLabel.left}</span>}
          <span>{minValue}</span>
          <span className={s.suffix}>{metaLabel.right}</span>
        </span>
        <span className={s.maxLabel}>
          {metaLabel.left && <span className={s.prefix}>{metaLabel.left}</span>}
          <span>{maxValue}</span>
          <span className={s.suffix}>{metaLabel.right}</span>
        </span>
      </div>
      <ReactSlider
        min={range.min}
        max={range.max}
        className={cx([s.slider, classNames.slider])}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
        onChange={handleChange}
        onAfterChange={onAfterChange}
        defaultValue={[minValue, maxValue]}
        minDistance={1}
        value={[minValue, maxValue]}
      />
    </div>
  );
}

RangeSlider.propTypes = {
  onChange: PropTypes.func,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  range: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }),
  metaLabel: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string
  }),
  classNames: PropTypes.shape({
    root: PropTypes.string,
    slider: PropTypes.string
  }),
  onAfterChange: PropTypes.func
};

RangeSlider.defaultProps = {
  minValue: 0,
  maxValue: 0,
  classNames: {},
  onChange: undefined,
  metaLabel: undefined,
  range: { min: 0, max: 100 },
  onAfterChange: undefined
};

export default RangeSlider;
