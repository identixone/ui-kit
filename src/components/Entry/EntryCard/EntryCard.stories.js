import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import { EntryCard } from "./index.jsx";
import { entryMock } from "../../../../test/__mocks__";

storiesOf("Entry Card new", module).add("default", () => {
  const conf = select(
    "Conf",
    ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
    "reinit"
  );
  const entry = { ...entryMock, conf };

  return <EntryCard entry={entry} />;
});
