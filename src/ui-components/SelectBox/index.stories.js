import React from "react";
import SelectBox from "./index";

export default { title: "SelectBox" };

const OPTIONS = [
  {
    label: "Label 1",
    value: "Label 1"
  },
  {
    label: "Label 2",
    value: "Label 2"
  },
  {
    label: "Label 3",
    value: "Label 3"
  },
  {
    label: "Label 4",
    value: "Label 4"
  },
  {
    label: "Label 5",
    value: "Label 5"
  },
  {
    label: "Label 6",
    value: "Label 6"
  },
  {
    label: "Label 7",
    value: "Label 7"
  },
  {
    label: "Label 8",
    value: "Label 8"
  },
  {
    label: "Label 9",
    value: "Label 9"
  }
];

class SelectBoxWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectBoxValue: null
    };
  }

  onSelectBoxChange = (item) => {
    console.info("Select Box Item", item);
    this.setState({ selectBoxValue: item });
  };

  render() {
    const { selectBoxValue } = this.state;
    return (
      <SelectBox
        value={selectBoxValue}
        onChange={this.onSelectBoxChange}
        {...this.props}
      />
    );
  }
}

export function WithOptions() {
  return (
    <SelectBoxWrapper
      inputProps={{
        placeholder: "Enter the text"
      }}
      noOptionsMessage="No Options Found"
      options={OPTIONS}
    />
  );
}
