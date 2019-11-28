import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "../../hooks";

import StyledDeleteSureButton from "./StyledDeleteSureButton";
import { colors } from "../../themes/colors";

import { DeleteSure } from "../DeleteSure";

import { resources } from "./DeleteSureButton.resources.js";

function DeleteSureButton({
  onDelete,
  deleteColor,
  size,
  isDisabled,
  className,
  deleteText,
  sureText,
}) {
  const { t, i18n } = useTranslation();

  i18n.addResourceBundle("en", "DeleteSureButton", resources.en);
  i18n.addResourceBundle("ru", "DeleteSureButton", resources.ru);

  const textSure = sureText || t("DeleteSureButton:Sure");
  const textDelete = deleteText || t("DeleteSureButton:Delete");

  return (
    <DeleteSure onDelete={onDelete}>
      {({ isSure, handleClick, handleMouseLeave }) => (
        <StyledDeleteSureButton
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
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  className: PropTypes.string,
  deleteText: PropTypes.string,
  sureText: PropTypes.string,
};

export { DeleteSureButton, StyledDeleteSureButton };
