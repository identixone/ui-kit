import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutActions } from "./StyledListLayoutActions";
import { ListLayoutActionsText } from "./ListLayoutActionsText";
import { ListLayoutActionsAdditional } from "./ListLayoutActionsAdditional";

import { FormCheckbox } from "../../form/components/FormCheckbox/index";

export function ListLayoutActions({
  children,
  additional,
  isSelectionDisabled,
  selectAll,
  deselectAll,
  isAllSelected,
}) {
  return (
    <StyledListLayoutActions>
      <FormCheckbox
        disabled={isSelectionDisabled}
        checked={isAllSelected}
        onChange={() => {
          !isAllSelected ? selectAll() : deselectAll();
        }}
        data-testid="list-layout-toggle-select-all"
      />
      {/* ListLayoutActionsText нужен для того, чтобы отображение не прыгало
        при исчезновении children
      */}
      <ListLayoutActionsText>{children}</ListLayoutActionsText>
      {additional && (
        <ListLayoutActionsAdditional>{additional}</ListLayoutActionsAdditional>
      )}
    </StyledListLayoutActions>
  );
}

ListLayoutActions.propTypes = {
  isSelectionDisabled: PropTypes.bool.isRequried,
  selectAll: PropTypes.func.isRequried,
  deselectAll: PropTypes.func.isRequried,
  isAllSelected: PropTypes.bool.isRequried,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  additional: PropTypes.element,
};
