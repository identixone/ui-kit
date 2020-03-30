import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import { useState } from "react";

import { FormRangeSlider } from "./index";

storiesOf("Form Components| FormRangeSlider", module).add("default", () => {
  function ComponentWrapper() {
    const [value, setValue] = useState([0, 99]);

    return (
      <div style={{ marginTop: 20 }}>
        <FormRangeSlider
          from={value[0]}
          to={value[1]}
          onChange={setValue}
          minFrom={number("min from", 0)}
          minTo={number("min from", 99)}
          width={number("width", 200)}
        />
      </div>
    );
  }

  return <ComponentWrapper />;
});
