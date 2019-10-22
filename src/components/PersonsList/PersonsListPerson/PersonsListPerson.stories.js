import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { PersonsListPerson } from "./index";

import { personMock } from "../../../../test/__mocks__";

storiesOf("PersonsListPerson", module)
  .add("default", () => {
    const person = object("Person", personMock);

    function PersonsListPersonWrapper() {
      const [isSelected, setIsSelected] = useState(false);

      return (
        <div style={{ paddingTop: 50 }}>
          <PersonsListPerson
            isSelected={isSelected}
            isActive={boolean("is active", false)}
            onChange={({ target: { checked } }) => setIsSelected(checked)}
            person={person}
            deletePersonsFromList={action("deletePersonsFromList")}
          />
        </div>
      );
    }

    return <PersonsListPersonWrapper />;
  })
  .add("adding mode", () => {
    const person = object("Person", personMock);

    function PersonsListPersonWrapper() {
      const [isSelected, setIsSelected] = useState(false);

      return (
        <PersonsListPerson
          isSelected={isSelected}
          isActive={boolean("is active", false)}
          onChange={({ target: { checked } }) => setIsSelected(checked)}
          person={person}
          deletePersonsFromList={action("deletePersonsFromList")}
          mode="add"
        />
      );
    }

    return <PersonsListPersonWrapper />;
  });
