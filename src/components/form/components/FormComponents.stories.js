import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";

import { useState } from "react";

import { FormCheckbox } from "../components";

storiesOf("Form Components", module).add("default", () => {
  const checkboxTheme = select("Checkbox theme", ["light", "dark"], "light");
  const checkboxSize = select("Checkbox size", ["small", "large"], "small");
  const isCheckboxDisabled = boolean("Checkbox disabled", false);
  const checkboxChecked = boolean("Checkbox checked", false);

  function FormComponentsWrapper() {
    const [checked, setChecked] = useState(checkboxChecked);

    return (
      <div>
        <h2>Checkbox</h2>
        <FormCheckbox
          name="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          checkboxTheme={checkboxTheme}
          size={checkboxSize}
          disabled={isCheckboxDisabled}
        />
      </div>
    );
  }

  return <FormComponentsWrapper />;
});
