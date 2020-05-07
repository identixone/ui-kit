import React from "react";

import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryCardActionsButton, EntryCardButtonDelete } from "../components";
import { PersonEntriesCard } from "./index.jsx";

import { personMock } from "../../../../test/__mocks__";

storiesOf("Entries|PersonEntriesCard", module).add("default", () => {
  const person = { ...personMock, reinit: number("Reinit count", 0) };

  return (
    <PersonEntriesCard
      person={person}
      actions={
        <React.Fragment>
          <EntryCardActionsButton to="/some-url">close</EntryCardActionsButton>
          <EntryCardActionsButton to="/some-url" theme="light">
            lists
          </EntryCardActionsButton>
          <EntryCardButtonDelete
            onDelete={() => action("Delete")(person.idxid)}
          >
            delete
          </EntryCardButtonDelete>
        </React.Fragment>
      }
    />
  );
});
