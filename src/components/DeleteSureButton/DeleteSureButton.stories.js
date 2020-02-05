import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { DeleteSureButton } from "./index";
import { colors } from "../../themes/colors";

storiesOf("Basic UI| DeleteSureButton", module).add("default", () => {
  return (
    <DeleteSureButton
      sureText={text("Sure text", "Sure?")}
      deleteText={text("Delete text", "Delete")}
      deleteColor={select(
        "Color",
        {
          Red: colors.brownSimple,
          Green: colors.greenish,
          Pink: colors.middlePink,
        },
        colors.brownSimple
      )}
    />
  );
});
