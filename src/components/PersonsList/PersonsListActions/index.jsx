import React from "react";
import PropTypes from "prop-types";

import { TextBold } from "../../Text";
import { Button } from "../../Button";

import { StyledPersonsListActions } from "./StyledPersonsListActions";
import { PersonsListActionsSelectButton } from "./PersonsListActionsSelectButton";

export function PersonsListActions({
  isAllSelected,
  selected,
  selectAll,
  deselectAll,
  onDeleteSelected,
}) {
  const selectedCount = selected.length;

  return (
    <StyledPersonsListActions>
      <div>
        {selectedCount !== 0 ? (
          <React.Fragment>
            <TextBold>{selectedCount} persons</TextBold> selected
          </React.Fragment>
        ) : null}
      </div>
      <div>
        {isAllSelected ? (
          <PersonsListActionsSelectButton onClick={deselectAll}>
            Deselect all
          </PersonsListActionsSelectButton>
        ) : (
          <PersonsListActionsSelectButton onClick={selectAll}>
            Select All
          </PersonsListActionsSelectButton>
        )}
        <Button onClick={onDeleteSelected} isDisabled={selectedCount === 0}>
          Remove selected
        </Button>
      </div>
    </StyledPersonsListActions>
  );
}

PersonsListActions.propTypes = {
  isAllSelected: PropTypes.bool.isRequired,
  selected: PropTypes.array.isRequired,
  selectAll: PropTypes.func.isRequired,
  deselectAll: PropTypes.func.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
};
