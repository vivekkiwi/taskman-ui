import React from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.scss";

function ToggleSwitch({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  disabled,
  dataId
}) {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        data-id={dataId}
      />
      {id ? (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
}

ToggleSwitch.defaultProps = {
  optionLabels: ["", ""],
  name: "",
  disabled: false,
  dataId: ""
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  disabled: PropTypes.bool,
  dataId: PropTypes.string
};

export default ToggleSwitch;
