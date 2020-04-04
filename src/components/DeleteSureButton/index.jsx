import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "../../hooks";

import StyledDeleteSureButton from "./StyledDeleteSureButton";
import { colors } from "../../style";

import { DeleteSure } from "../DeleteSure";

import { resources } from "./DeleteSureButton.resources.js";
import { isUndefined } from "lodash-es";

function DeleteSureButton({
  onDelete,
  deleteColor,
  size,
  isDisabled,
  className,
  deleteText,
  sureText,
  color,
}) {
  const { t, i18n } = useTranslation();

  i18n.addResourceBundle("en", "DeleteSureButton", resources.en);
  i18n.addResourceBundle("ru", "DeleteSureButton", resources.ru);

  const textSure = isUndefined(sureText)
    ? t("DeleteSureButton:Sure")
    : sureText;
  const textDelete = isUndefined(deleteText)
    ? t("DeleteSureButton:Delete")
    : deleteText;

  return (
    <DeleteSure onDelete={onDelete}>
      {({ isSure, handleClick, handleMouseLeave }) => (
        <StyledDeleteSureButton
          color={color}
          className={className}
          deleteColor={deleteColor}
          isSure={isSure}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          size={size}
          isDisabled={isDisabled}
          data-testid="delete-button"
        >
          {isSure ? textSure : textDelete}
        </StyledDeleteSureButton>
      )}
    </DeleteSure>
  );
}

DeleteSureButton.defaultProps = {
  deleteColor: colors.brownSimple,
  color: colors.blueWhite,
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  color: colors.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  className: PropTypes.string,
  deleteText: PropTypes.string,
  sureText: PropTypes.string,
};

export { DeleteSureButton, StyledDeleteSureButton };
