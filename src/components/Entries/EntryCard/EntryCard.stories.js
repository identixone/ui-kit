import React from "react";

import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryCard } from "./index.jsx";
import { EntryCardButtonDelete } from "../components";

import { entryMock } from "../../../../test/__mocks__";

storiesOf("Entries|EntryCard", module).add("light", () => {
  const conf = select(
    "Conf",
    ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
    "exact"
  );
  const liveness = select(
    "Liveness",
    ["failed", "passed", "undetermined"],
    "failed"
  );
  const theme = select("theme", ["light", "dark"], "light");
  const deleted = boolean("Deleted", false);
  const entry = { ...entryMock, conf, liveness, deleted };

  const confsWithDelete = ["new", "exact", "junk", "ha", "nm", "det"];
  const isDeleteble = confsWithDelete.includes(entry.conf) && !entry.deleted;

  return (
    <EntryCard
      entry={entry}
      onClick={action("Click")}
      theme={theme}
      actions={
        isDeleteble && (
          <React.Fragment>
            <EntryCardButtonDelete onDelete={() => action("Delete")(entry.id)}>
              delete
            </EntryCardButtonDelete>
          </React.Fragment>
        )
      }
    />
  );
});
