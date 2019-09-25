import React from "react";
import { storiesOf } from "@storybook/react";

import { FormCheckbox } from "../components";

storiesOf("Form Components", module).add("default", () => {
  class FormComponentsWrapper extends React.Component {
    state = {
      checkbox: false,
    };

    handleCheckboxChange = ({ target: { checked } }) => {
      this.setState({ checkbox: checked });
    };

    render() {
      return (
        <div>
          <FormCheckbox
            name="checkbox"
            value={this.state.checkbox}
            onChange={this.handleCheckboxChange}
          />
        </div>
      );
    }
  }

  return <FormComponentsWrapper />;
});
