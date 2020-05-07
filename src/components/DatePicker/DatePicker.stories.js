import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import { DatePicker } from "./index";

storiesOf("Controls|DatePicker", module).add("default", () => {
  function DatePickerWrapper() {
    const [value, setValue] = useState([null, null]);

    return <DatePicker value={value} onChange={setValue} />;
  }

  return <DatePickerWrapper />;
});
