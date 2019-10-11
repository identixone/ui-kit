import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { PersonsListPerson } from "./index";

storiesOf("PersonsListPerson", module)
  .add("default", () => {
    const person = object("Person", {
      idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33",
      idxid_source: {
        id: 133971,
        name: "Default_is_a_long value goes heree",
      },
      initial_photo:
        "https://pbs.twimg.com/profile_images/438441330302140416/o8Yv7bwr_400x400.jpeg",
    });

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
    const person = object("Person", {
      idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33",
      idxid_source: { id: 133971, name: "upload" },
      initial_photo:
        "https://pbs.twimg.com/profile_images/438441330302140416/o8Yv7bwr_400x400.jpeg",
    });

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
