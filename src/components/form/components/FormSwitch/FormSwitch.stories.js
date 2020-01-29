import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

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
        size={select("Size", ["m", "l"], "m")}
        theme={select("Theme", ["blue", "dark-gray"], "blue")}
      />
    );
  }

  return <ComponentWrapper />;
});
