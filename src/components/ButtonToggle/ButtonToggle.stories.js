import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Plus } from "../../assets/icons";

import { ButtonToggle } from "./index.jsx";

storiesOf("ButtonToggle", module).add("default", () => {
  const buttonText = text("Button text", "Arunoda");
  const buttonMode = select("Button mode", ["red", "blue"], "red");

  return (
    <ButtonToggle
      icon={<Plus />}
      onChange={action("On change")}
      mode={buttonMode}
    >
      {buttonText}
    </ButtonToggle>
  );
});
