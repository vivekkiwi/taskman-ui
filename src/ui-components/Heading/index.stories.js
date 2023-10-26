import React from "react";
import Heading from "./index";

export default { title: "Heading" };

export const withText = () => <Heading>This is the heading default</Heading>;
export const defaultSize = () => <Heading>This is heading 1</Heading>;
export const size1 = () => <Heading size="1">This is heading</Heading>;
export const size2 = () => <Heading size="2">This is heading</Heading>;
export const size3 = () => <Heading size="3">This is heading</Heading>;
export const size4 = () => <Heading size="4">This is heading</Heading>;
export const size5 = () => <Heading size="5">This is heading</Heading>;
export const size6 = () => <Heading size="6">This is heading</Heading>;

export const withClassName = () => (
  <Heading className="heading-cls">This is the heading</Heading>
);

export const withCustomStyles = () => (
  <Heading size="1" style={{ color: "#FF5733" }}>
    This is the heading default
  </Heading>
);
