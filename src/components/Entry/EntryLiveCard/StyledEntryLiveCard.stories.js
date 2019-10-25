import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryLiveCard } from "./index.jsx";
import { entryMock } from "../../../../test/__mocks__";

storiesOf("EntryLiveCard", module).add("default", () => {
  const conf = select(
    "Conf",
    ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
    "exact"
  );
  const entry = { ...entryMock, conf };

  return <EntryLiveCard entry={entry} onClick={action("Click")} />;
});
