import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import PageCard from "./index.jsx";
import colors from "../../themes/colors.js";

storiesOf("Page card", module).add("default", () => {
  const withButtons = boolean("With buttons", true);
  const title = text("Title", "ID: 42");
  const titleColor = select(
    "Title colors",
    {
      Red: colors.brownSimple,
      Blue: colors.navyBlue,
      Yellow: colors.orangeSimple,
    },
    colors.brownSimple
  );
  const isLoading = boolean("Is loading", false);

  return (
    <PageCard
      withButtons={withButtons}
      onUpdate={action("Update")}
      title={title}
      titleColor={titleColor}
      isLoading={isLoading}
      onBackButtonClick={action("Back")}
      fetchError={null}
    />
  );
});
