import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import { Tooltip } from "./index.js";

storiesOf("Tooltip", module).add("default", () => {
  const initialOpen = boolean("Initial Open", false);
  const title = text("Title", "Tooltip title");

  return (
    <Tooltip initialOpen={initialOpen} title={title}>
      Some content
    </Tooltip>
  );
});
