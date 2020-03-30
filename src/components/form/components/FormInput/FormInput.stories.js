import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import { FormInput } from "./index";

storiesOf("Form Components| FormInput", module).add("default", () => {
  const isDisabled = boolean("Disabled", false);
  const placeholder = text("Placeholder", "enter smth");

  function ComponentWrapper() {
    const [value, setValue] = useState("");

    return (
      <FormInput
        name="test-form-input"
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => setValue(value)}
        disabled={isDisabled}
      />
    );
  }

  return <ComponentWrapper />;
});
