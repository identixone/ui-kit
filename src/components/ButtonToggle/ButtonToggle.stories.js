import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Plus } from "../../assets/icons";

import { ButtonToggle } from "./index.jsx";

storiesOf("ButtonToggle", module).add("default", () => {
  const buttonMode = select(
    "Button mode",
    ["new", "reinit", "exact", "ha", "junk", "nm"],
    "new"
  );

  return (
    <ButtonToggle
      icon={<Plus />}
      onChange={action("On change")}
      mode={buttonMode}
    >
      <div>Some content</div>
    </ButtonToggle>
  );
});
