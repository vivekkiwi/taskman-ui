import React from "react";
// import PropTypes from "prop-types";
import Switch from "./index";

export default { title: "Switch" };

export const checked = () => {
  return (
    <Switch name="Javascript" label="Javascript" value="Javascript" checked />
  );
};

export const unchecked = () => (
  <Switch
    name="Javascript"
    label="Javascript"
    value="Javascript"
    checked={false}
  />
);

export const disabled = () => (
  <Switch
    name="Javascript"
    label="Javascript"
    value="Javascript"
    disabled
    checked
  />
);
