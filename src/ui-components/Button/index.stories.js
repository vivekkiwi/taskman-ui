import React from "react";
// eslint-disable-next-line import/no-unresolved
import { action } from "@storybook/addon-actions";
import Button from "./index";

export default { title: "Button" };

export const primary = () => (
  <Button
    onClick={action("Primary Button Clicked")}
    appearance="primary"
    ripple
  >
    Primary
  </Button>
);

export const secondary = () => (
  <Button onClick={action("Secondary Button Clicked")} appearance="secondary">
    Secondary
  </Button>
);

export const small = () => (
  <Button onClick={action("Small Button Clicked")}>Small</Button>
);

export const medium = () => (
  <Button onClick={action("Medium Button Clicked")}>Medium</Button>
);

export const large = () => (
  <Button onClick={action("Large Button Clicked")}>Large</Button>
);

export const disabled = () => (
  <Button onClick={action("Disabled Button Clicked")} disabled>
    Disabled
  </Button>
);

export const loading = () => (
  <Button onClick={action("Button Clicked")} loading>
    Click Me
  </Button>
);

export const link = () => (
  <Button onClick={action("Button Clicked")} variant="link" ripple>
    Click Me
  </Button>
);

export const customLoader = () => (
  <Button
    onClick={action("Button Clicked")}
    loading
    Loader={() => <div>Loading...</div>}
  >
    Click Me
  </Button>
);
