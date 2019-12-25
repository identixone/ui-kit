import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { Tooltip } from "./index.jsx";

storiesOf("Tooltip", module).add("default", () => {
  const tooltipTitle = text("Tooltip title", "Test tooltip text");
  const tooltipText = text("Tooltip text", "Text with Tooltip");

  return <Tooltip title={tooltipTitle}>{tooltipText}</Tooltip>;
});
