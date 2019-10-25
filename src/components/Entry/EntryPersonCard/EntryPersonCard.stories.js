import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryPersonCard } from "./index.jsx";
import { entryMock } from "../../../../test/__mocks__";

storiesOf("EntryPersonCard", module).add("default", () => {
  const conf = select(
    "Conf",
    ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
    "exact"
  );
  const entry = { ...entryMock, conf };

  return (
    <div>
      <EntryPersonCard
        entry={entry}
        onClick={action("Click")}
        onDelete={action("Delete")}
      />
      <EntryPersonCard
        entry={entry}
        onClick={action("Click")}
        onDelete={action("Delete")}
      />
    </div>
  );
});
