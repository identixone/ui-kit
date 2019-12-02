import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { Spinner } from "./index.jsx";

storiesOf("Spinner", module).add("default", () => {
  const width = text("Spinner width", "40");

  return <Spinner width={width} />;
});
