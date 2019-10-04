import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListActions } from "./StyledListLayoutListActions";
import { ListLayoutListActionsText } from "./ListLayoutListActionsText";
import { ListLayoutListActionsButtons } from "./ListLayoutListActionsButtons";
import { ListLayoutListActionsAdditional } from "./ListLayoutListActionsAdditional";

import { Button } from "../../../Button";

export function ListLayoutListActions({
  isSelectAvailable,
  isDeselectAvailable,
  onSelect,
  onDeselect,
  children,
  additional,
}) {
  return (
    <StyledListLayoutListActions>
      {/* span нужен для того, чтобы отображение не прыгало
        при исчезновении children
      */}
      <ListLayoutListActionsText>{children}</ListLayoutListActionsText>
      <ListLayoutListActionsButtons>
        <Button
          buttonTheme="outline"
          onClick={onSelect}
          isDisabled={!isSelectAvailable}
        >
          Select all
        </Button>
        <Button
          buttonTheme="outline"
          onClick={onDeselect}
          isDisabled={!isDeselectAvailable}
        >
          Deselect all
        </Button>
      </ListLayoutListActionsButtons>
      {additional && (
        <ListLayoutListActionsAdditional>
          {additional}
        </ListLayoutListActionsAdditional>
      )}
    </StyledListLayoutListActions>
  );
}

ListLayoutListActions.propTypes = {
  isSelectAvailable: PropTypes.bool.isRequired,
  isDeselectAvailable: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  additional: PropTypes.element,
};
