import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { PageCard } from "./index.jsx";

const StyledPageCard = styled(PageCard)`
  height: 400px;
`;

storiesOf("Page card", module).add("default", () => {
  const withButtons = boolean("With buttons", true);
  const isLoading = boolean("Is loading", false);

  return (
    <StyledPageCard
      withButtons={withButtons}
      onUpdate={action("Update")}
      isLoading={isLoading}
      onBackButtonClick={action("Back")}
      fetchError={null}
    />
  );
});
