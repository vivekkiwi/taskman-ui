import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import WithToggle from "../WithToggle";
import Accordian from "./index";

export default { title: "Accordian" };

const dummyContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`;

const ToggleAccordian = WithToggle(Accordian);
function CustomHeader({ titleClassName, title, open }) {
  return (
    <>
      <div className={cx([titleClassName])}>{title}</div>
      <div>{open ? "Close" : "Open"}</div>
    </>
  );
}

CustomHeader.propTypes = {
  titleClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

CustomHeader.defaultProps = {
  titleClassName: ""
};

export const withDefaultHeader = () => (
  <Accordian
    open
    title="This is header title"
    onOpen={() => {}}
    onClose={() => {}}
  >
    This is accordian content
  </Accordian>
);

export const closed = () => (
  <Accordian
    open={false}
    title="This is header title"
    onOpen={() => {}}
    onClose={() => {}}
  >
    This is accordian content
  </Accordian>
);

export const open = () => (
  <Accordian
    open
    title="This is header title"
    onOpen={() => {}}
    onClose={() => {}}
  >
    This is accordian content
  </Accordian>
);

export const withCustomHeader = () => (
  <Accordian
    open
    title="This is header title"
    RenderHeader={CustomHeader}
    onOpen={() => {}}
    onClose={() => {}}
  >
    This is accordian content
  </Accordian>
);

export function Toggle() {
  return (
    <ToggleAccordian title="This is header title">
      <h1>What is Lorem Ipsum?</h1>
      {dummyContent}
    </ToggleAccordian>
  );
}

export const keepAlive = () => (
  <ToggleAccordian title="This is header title" keepAlive>
    <h1>What is Lorem Ipsum?</h1>
    {dummyContent}
  </ToggleAccordian>
);
