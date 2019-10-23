import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardContainer } from "./StyledEntryCardContainer";
import EntryAdditionalButtons from "../../EntryAdditionalButtons";
import { EntryAdditionalButton } from "../../EntryAdditionalButtons/EntryAdditionalButton";

function EntryCardContainer({
  entry,
  onClick,
  deletePersonEntries,
  additionalButtons,
  children,
}) {
  function handleDelete(ev) {
    ev.stopPropagation();
    deletePersonEntries(entry.id);
  }

  const { idxid, deleted } = entry;

  return (
    <StyledEntryCardContainer
      data-testid="entry-item"
      data-idxid={idxid}
      deleted={deleted}
      onClick={onClick}
    >
      {children}
      {additionalButtons && (
        <EntryAdditionalButtons>
          {!deleted && (
            <EntryAdditionalButton onClick={handleDelete}>
              delete
            </EntryAdditionalButton>
          )}
        </EntryAdditionalButtons>
      )}
    </StyledEntryCardContainer>
  );
}

EntryCardContainer.propTypes = {
  entry: PropTypes.object.isRequired,
  children: PropTypes.func,
  onClick: PropTypes.func,
  deletePersonEntries: PropTypes.func,
  additionalButtons: PropTypes.bool,
};

EntryCardContainer.defaultProps = {
  entry: {},
};

export { EntryCardContainer, StyledEntryCardContainer };
