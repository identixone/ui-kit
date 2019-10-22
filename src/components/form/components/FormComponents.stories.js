import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";

import { FormCheckbox } from "../components";

storiesOf("Form Components", module).add("default", () => {
  const checkboxTheme = select("Checkbox theme", ["light", "dark"], "light");
  const checkboxSize = select("Checkbox size", ["small", "large"], "small");
  const isCheckboxDisabled = boolean("Is checkbox disabled", false);
  const checkboxValue = boolean("Checkbox value", false);

  class FormComponentsWrapper extends React.Component {
    state = {
      checkbox: checkboxValue,
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
            checkboxTheme={checkboxTheme}
            size={checkboxSize}
            disabled={isCheckboxDisabled}
          />
        </div>
      );
    }
  }

  return <FormComponentsWrapper />;
});
