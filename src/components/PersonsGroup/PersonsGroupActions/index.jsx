import React from "react";
import PropTypes from "prop-types";

import { TextBold } from "../../Text";
import { Button } from "../../Button";

import { StyledPersonsGroupActions } from "./StyledPersonsGroupActions";
import { PersonsGroupActionsSelectButton } from "./PersonsGroupActionsSelectButton";

export function PersonsGroupActions({
  isAllSelected,
  selected,
  selectAll,
  deselectAll,
  onDeleteSelected,
}) {
  const selectedCount = selected.length;

  return (
    <StyledPersonsGroupActions>
      <div>
        {selectedCount !== 0 ? (
          <React.Fragment>
            <TextBold>{selectedCount} persons</TextBold> selected
          </React.Fragment>
        ) : null}
      </div>
      <div>
        {isAllSelected ? (
          <PersonsGroupActionsSelectButton onClick={deselectAll}>
            Deselect all
          </PersonsGroupActionsSelectButton>
        ) : (
          <PersonsGroupActionsSelectButton onClick={selectAll}>
            Select All
          </PersonsGroupActionsSelectButton>
        )}
        <Button onClick={onDeleteSelected} isDisabled={selectedCount === 0}>
          Remove selected
        </Button>
      </div>
    </StyledPersonsGroupActions>
  );
}

PersonsGroupActions.propTypes = {
  isAllSelected: PropTypes.bool.isRequired,
  selected: PropTypes.array.isRequired,
  selectAll: PropTypes.func.isRequired,
  deselectAll: PropTypes.func.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
};
