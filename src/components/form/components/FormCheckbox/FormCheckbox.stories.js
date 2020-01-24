import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";

import { useState } from "react";

import { FormCheckbox } from "./index";

storiesOf("Form Components| FormCheckbox", module).add("default", () => {
  const checkboxTheme = select("Theme", ["light", "dark"], "light");
  const checkboxSize = select("Size", ["small", "large"], "small");
  const isCheckboxDisabled = boolean("Disabled", false);
  const checkboxChecked = boolean("Checked", false);

  function ComponentWrapper() {
    const [checked, setChecked] = useState(checkboxChecked);

    return (
      <FormCheckbox
        name="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        checkboxTheme={checkboxTheme}
        size={checkboxSize}
        disabled={isCheckboxDisabled}
      />
    );
  }

  return <ComponentWrapper />;
});
