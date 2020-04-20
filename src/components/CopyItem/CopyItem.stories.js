import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { CopyItem } from "./index.jsx";

storiesOf("Controls|CopyItem", module).add("default", () => {
  const textToCopy = text("text to copy", "Copy me!");

  return <CopyItem onCopy={action("On copy")}>{textToCopy}</CopyItem>;
});
