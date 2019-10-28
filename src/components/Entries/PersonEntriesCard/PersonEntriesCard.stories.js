import React from "react";

import { storiesOf } from "@storybook/react";
import { object } from "@storybook/addon-knobs";

import { PersonEntriesCard } from "./index.jsx";

import { personMock } from "../../../../test/__mocks__";

storiesOf("Entries|PersonEntriesCard", module).add("default", () => {
  const person = object("Person", personMock);

  return <PersonEntriesCard person={person} />;
});
