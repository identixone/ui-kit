import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./index.jsx";

storiesOf("Button", module).add("default", () => {
  const buttonText = text("Button text", "Arunoda");
  const buttonTheme = select(
    "Button theme",
    [
      "light",
      "light-gray",
      "dark",
      "blue",
      "warning",
      "ghost",
      "ghost-dark",
      "active",
      "warning",
      "reset",
      "lighter",
      "disabled",
    ],
    "light"
  );
  const buttonSize = select("Button size", ["medium", "large"], "medium");
  const buttonFit = select("Button fit", ["rect", "square", "circle"], "rect");

  const isButtonDisabled = boolean("Is disabled", false);
  const isButtonRounded = boolean("Is rounded", true);

  return (
    <Button
      onClick={action("On click")}
      buttonTheme={buttonTheme}
      size={buttonSize}
      fit={buttonFit}
      isDisabled={isButtonDisabled}
      isRounded={isButtonRounded}
    >
      {buttonText}
    </Button>
  );
});
