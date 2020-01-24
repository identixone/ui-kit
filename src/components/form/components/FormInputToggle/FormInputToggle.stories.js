import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { useState } from "react";

import { FormInputToggle } from "./index";

storiesOf("Form Components| FormInputToggle", module).add("default", () => {
  function ComponentWrapper() {
    const [value, setValue] = useState("");

    return (
      <FormInputToggle
        name="form-input-toggle"
        value={value}
        onChange={ev => {
          const {
            target: { value },
          } = ev;
          setValue(value);
          action("On change")(ev);
        }}
        onBlur={action("On blur")}
        placeholder={text("placeholder", "enter smth")}
        valuePlaceholder={text("value placeholder", "touch me")}
        disabled={boolean("disabled", false)}
        width={number("width", 200)}
      />
    );
  }

  return <ComponentWrapper />;
});
