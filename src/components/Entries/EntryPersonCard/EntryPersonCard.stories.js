import React from "react";

import { storiesOf } from "@storybook/react";
import { select, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryPersonCard } from "./index.jsx";
import { EntryCardActionsButton, EntryCardButtonDelete } from "../components";

import { entryMock, personMock } from "../../../../test/__mocks__";

storiesOf("Entries|EntryPersonCard", module).add("default", () => {
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
  const deleted = boolean("Deleted", false);
  const entry = { ...entryMock, conf, liveness, deleted };
  const person = { ...personMock, reinit: number("Reinit count", 0) };
  const confsWithDelete = ["exact", "junk", "ha"];
  /**
   * Если персона не была реиничена ранее (reinit === 0),
   * то не имеет смысла давать возможность реинита на new
   */
  const confsWithReinit = ["exact", "junk", "ha"].concat(
    person.reinit > 0 ? ["new"] : []
  );

  const isDeleteble = confsWithDelete.includes(entry.conf) && !entry.deleted;
  const isReinitable = confsWithReinit.includes(entry.conf);

  return (
    <EntryPersonCard
      entry={entry}
      onClick={action("Click")}
      actions={
        !entry.deleted && (
          <React.Fragment>
            {isReinitable && (
              <EntryCardActionsButton
                onClick={() => action("Reinit")(entry.id)}
              >
                reinit
              </EntryCardActionsButton>
            )}
            {isDeleteble && (
              <EntryCardButtonDelete
                onDelete={() => action("Delete")(entry.id)}
              >
                delete
              </EntryCardButtonDelete>
            )}
          </React.Fragment>
        )
      }
    />
  );
});
