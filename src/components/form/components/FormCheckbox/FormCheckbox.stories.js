import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { useState } from "react";

import { FormCheckbox } from "./index";

storiesOf("Form Components| FormCheckbox", module).add("default", () => {
  const isCheckboxDisabled = boolean("Disabled", false);
  const checkboxChecked = boolean("Checked", false);

  function ComponentWrapper() {
    const [checked, setChecked] = useState(checkboxChecked);

    return (
      <FormCheckbox
        name="checkbox"
        checked={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
        disabled={isCheckboxDisabled}
      />
    );
  }

  return <ComponentWrapper />;
});
