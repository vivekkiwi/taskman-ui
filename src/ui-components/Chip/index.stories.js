import React from "react";
// eslint-disable-next-line import/no-unresolved
import { action } from "@storybook/addon-actions";
import Chip from "./index";

export default { title: "Chip" };

export const withLabelOnly = () => <Chip label="Javascript" />;
export const withDelete = () => (
  <Chip label="Javascript" onIconClick={action("Chip Delete Clicked")} />
);
export const withSeparator = () => (
  <Chip
    label="Javascript"
    onIconClick={action("Chip Delete Clicked")}
    showSeparator
  />
);

export const withClickHandler = () => (
  <Chip
    label="Javascript"
    onClick={action("Chip Clicked")}
    onIconClick={action("Chip Delete Clicked")}
  />
);

export const withCustomDeleteIcon = () => (
  <Chip
    Icon={<div>XX</div>}
    label="Javascript"
    onIconClick={action("Chip Delete Clicked")}
  />
);

export const secondary = () => (
  <Chip
    appearance="secondary"
    label="Javascript"
    onIconClick={action("Chip Delete Clicked")}
  />
);
