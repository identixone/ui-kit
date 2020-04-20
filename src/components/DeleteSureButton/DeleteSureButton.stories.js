import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { DeleteSureButton } from "./index.jsx";

storiesOf("Controls|DeleteSureButton", module).add("default", () => {
  return (
    <DeleteSureButton
      onDelete={action("On delete")}
      deleteText={text("delete text", "Delete")}
      sureText={text("sure text", "Sure?")}
      isDisabled={boolean("is disabled", false)}
    />
  );
});
