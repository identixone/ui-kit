import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutListActions } from "./StyledListLayoutListActions";
import { ListLayoutListActionsText } from "./ListLayoutListActionsText";
import { ListLayoutListActionsButtons } from "./ListLayoutListActionsButtons";
import { ListLayoutListActionsAdditional } from "./ListLayoutListActionsAdditional";

import { useTranslation } from "react-i18next";

import { Button } from "../../../Button";

export function ListLayoutListActions({
  isSelectAvailable,
  isDeselectAvailable,
  onSelect,
  onDeselect,
  children,
  additional,
}) {
  const { t } = useTranslation();

  return (
    <StyledListLayoutListActions>
      {/* span нужен для того, чтобы отображение не прыгало
        при исчезновении children
      */}
      <ListLayoutListActionsText>{children}</ListLayoutListActionsText>
      <ListLayoutListActionsButtons>
        <Button
          data-testid="select-all"
          buttonTheme="outline"
          onClick={onSelect}
          isDisabled={!isSelectAvailable}
        >
          {t("Select all")}
        </Button>
        <Button
          data-testid="deselect-all"
          buttonTheme="outline"
          onClick={onDeselect}
          isDisabled={!isDeselectAvailable}
        >
          {t("Deselect all")}
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
