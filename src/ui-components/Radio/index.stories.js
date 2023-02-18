import React from "react";
// import PropTypes from "prop-types";
import Radio from "./index";

export default { title: "Radio" };

export const checked = () => (
  <Radio name="Javascript" label="Javascript" value="Javascript" checked />
);

export const unchecked = () => (
  <Radio
    name="Javascript"
    label="Javascript"
    value="Javascript"
    checked={false}
  />
);

export const disabled = () => (
  <Radio
    name="Javascript"
    label="Javascript"
    value="Javascript"
    disabled
    checked
  />
);
