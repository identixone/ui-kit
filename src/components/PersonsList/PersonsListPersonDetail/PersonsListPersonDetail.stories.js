import React from "react";
import { storiesOf } from "@storybook/react";
import { object, boolean } from "@storybook/addon-knobs";

import { PersonsListPersonDetail } from "./index.jsx";

storiesOf("PersonsListPersonDetail", module).add("default", () => {
  const person = object("Person", {
    age: 17,
    entriesIds: [2145883],
    exact: 0,
    ha: 0,
    idxid: "732e7919-508d-4cc2-b5a5-3e1b863c7d33",
    idxid_created: "2019-08-02T15:09:37.721778Z",
    idxid_source: { id: 133971, name: "upload" },
    initial_facesize: 4095,
    initial_liveness: "",
    initial_photo:
      "https://pbs.twimg.com/profile_images/438441330302140416/o8Yv7bwr_400x400.jpeg",
    junk: 0,
    liveness: { failed: 0, passed: 0, undetermined: 0 },
    reinit: 0,
    sex: 1,
    total: 1,
  });

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
