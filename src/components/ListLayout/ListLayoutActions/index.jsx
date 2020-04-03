import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import { StyledListLayoutActions } from "./StyledListLayoutActions";
import { ListLayoutActionsText } from "./ListLayoutActionsText";
import { ListLayoutActionsButtons } from "./ListLayoutActionsButtons";
import { ListLayoutActionsAdditional } from "./ListLayoutActionsAdditional";
import { Button } from "../../Button";

import { resources } from "./ListLayoutActions.resources.js";

export function ListLayoutActions({
  isSelectAvailable,
  isDeselectAvailable,
  onSelect,
  onDeselect,
  children,
  additional,
}) {
  const { t, i18n } = useTranslation();

  i18n.addResourceBundle("en", "ListLayoutActions", resources.en);
  i18n.addResourceBundle("ru", "ListLayoutActions", resources.ru);

  return (
    <StyledListLayoutActions>
      {/* ListLayoutActionsText нужен для того, чтобы отображение не прыгало
        при исчезновении children
      */}
      <ListLayoutActionsText>{children}</ListLayoutActionsText>
      <ListLayoutActionsButtons>
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
      </ListLayoutActionsButtons>
      {additional && (
        <ListLayoutActionsAdditional>{additional}</ListLayoutActionsAdditional>
      )}
    </StyledListLayoutActions>
  );
}

ListLayoutActions.propTypes = {
  isSelectAvailable: PropTypes.bool.isRequired,
  isDeselectAvailable: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  additional: PropTypes.element,
};
