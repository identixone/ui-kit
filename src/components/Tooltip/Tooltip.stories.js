import React from "react";
import { storiesOf } from "@storybook/react";

import { Tooltip } from "./index.jsx";

storiesOf("Tooltip", module).add("default", () => {
  return (
    <Tooltip title="Test tooltip text">
      <span>Text with Tooltip</span>
    </Tooltip>
  );
});
