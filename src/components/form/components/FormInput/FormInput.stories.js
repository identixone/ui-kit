import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { FormInput } from "./index";

storiesOf("Form Components| FormInput", module).add("default", () => {
  const isDisabled = boolean("Disabled", false);

  function ComponentWrapper() {
    const [value, setValue] = useState("");

    return (
      <FormInput
        name="test-form-input"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        disabled={isDisabled}
      />
    );
  }

  return <ComponentWrapper />;
});
