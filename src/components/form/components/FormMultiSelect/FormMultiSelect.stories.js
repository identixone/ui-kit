import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import { generateOptions } from "../../../../../test/generate";

import { useState } from "react";

import { FormMultiSelect } from "./index";

const options = generateOptions(20);

storiesOf("Form Components| FormMultiSelect", module)
  .add("default", () => {
    function ComponentWrapper() {
      const [multiSelectValue, setMultiSelectValue] = useState(
        options.slice(0, 2)
      );

      return (
        <FormMultiSelect
          placeholder={text("Placeholder", "start typing...")}
          options={options}
          value={multiSelectValue}
          onChange={setMultiSelectValue}
          isLoading={boolean("isLoading", false)}
        />
      );
    }

    return <ComponentWrapper />;
  })
  .add("no options", () => {
    function ComponentWrapper() {
      const [multiSelectValue, setMultiSelectValue] = useState([]);

      return (
        <FormMultiSelect
          placeholder={text("Placeholder", "start typing...")}
          options={[]}
          value={multiSelectValue}
          onChange={setMultiSelectValue}
          isLoading={boolean("isLoading", false)}
        />
      );
    }

    return <ComponentWrapper />;
  });
