import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { PersonsGroupPerson } from "./index";

import { personMock } from "../../../../test/__mocks__";

storiesOf("Persons Groups|PersonsGroupPerson", module)
  .add("default", () => {
    const person = object("Person", personMock);

    function PersonsGroupPersonWrapper() {
      const [isSelected, setIsSelected] = useState(false);

      return (
        <div style={{ paddingTop: 50 }}>
          <PersonsGroupPerson
            isSelected={isSelected}
            isActive={boolean("is active", false)}
            onChange={({ target: { checked } }) => setIsSelected(checked)}
            onClick={action("onClick")}
            person={person}
          />
        </div>
      );
    }

    return <PersonsGroupPersonWrapper />;
  })
  .add("adding mode", () => {
    const person = object("Person", personMock);

    function PersonsGroupPersonWrapper() {
      const [isSelected, setIsSelected] = useState(false);

      return (
        <PersonsGroupPerson
          isSelected={isSelected}
          isActive={boolean("is active", false)}
          onChange={({ target: { checked } }) => setIsSelected(checked)}
          onClick={action("onClick")}
          person={person}
          mode="add"
        />
      );
    }

    return <PersonsGroupPersonWrapper />;
  });
