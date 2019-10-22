import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";

import { EntryCard } from "./index.jsx";

import { personMock } from "../../../test/__mocks__";

storiesOf("EntryCard", module).add("default", () => {
  const actions = boolean("Actions", true);
  const person = object("Person", personMock);

  return <EntryCard actions={actions} person={person} />;
});
