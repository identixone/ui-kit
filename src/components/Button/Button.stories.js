import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Button } from "./index.jsx";

storiesOf("Controls|Button", module).add("default", () => {
  const buttonText = text("Button text", "Arunoda");
  const theme = select(
    "Button theme",
    ["light", "dark", "green", "blue"],
    "light"
  );
  const buttonSize = select("Button size", ["medium", "large"], "medium");
  const buttonFit = select("Button fit", ["rect", "square", "circle"], "rect");

  const isButtonDisabled = boolean("Is disabled", false);

  return (
    <Button
      onClick={action("On click")}
      theme={theme}
      size={buttonSize}
      fit={buttonFit}
      isDisabled={isButtonDisabled}
    >
      {buttonText}
    </Button>
  );
});
