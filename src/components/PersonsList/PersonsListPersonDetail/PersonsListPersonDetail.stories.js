import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";

import { PersonsListPersonDetail } from "./index";

import { personMock } from "../../../../test/__mocks__";

storiesOf("Persons Lists| PersonDetail", module).add("default", () => {
  const person = object("Person", personMock);

  const isLoading = boolean("isLoading", false);
  const isPersonNotExists = boolean("isPersonNotExists", false);

  return (
    <PersonsListPersonDetail
      person={!isPersonNotExists && person}
      isLoading={isLoading}
      isPersonNotExists={isPersonNotExists}
    />
  );
});
