import React from "react";
import { storiesOf } from "@storybook/react";

import { useState } from "react";

import { FormSwitch } from "./index";

storiesOf("Form Components| FormSwitch", module).add("default", () => {
  function ComponentWrapper() {
    const [value, setValue] = useState(false);

    return (
      <FormSwitch
        name="form-switch"
        checked={value}
        onChange={({ target: { checked } }) => setValue(checked)}
      />
    );
  }

  return <ComponentWrapper />;
});
