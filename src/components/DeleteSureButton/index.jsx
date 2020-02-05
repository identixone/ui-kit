import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "../../hooks";

import { colors } from "../../themes/colors";

import { resources } from "./DeleteSureButton.resources.js";
import { isUndefined } from "lodash-es";

import { ConfirmButton, StyledConfirmButton } from "../ConfirmButton";

function DeleteSureButton({
  onDelete,
  deleteColor,
  size,
  isDisabled,
  className,
  deleteText,
  sureText,
  "data-testid": testId,
}) {
  const { t, i18n } = useTranslation();

  i18n.addResourceBundle("en", "DeleteSureButton", resources.en);
  i18n.addResourceBundle("ru", "DeleteSureButton", resources.ru);

  const confirmText = isUndefined(sureText)
    ? t("DeleteSureButton:Sure")
    : sureText;
  const nonConfirmText = isUndefined(deleteText)
    ? t("DeleteSureButton:Delete")
    : deleteText;

  return (
    <ConfirmButton
      onConfirm={onDelete}
      confirmColor={deleteColor}
      size={size}
      isDisabled={isDisabled}
      className={className}
      data-testid={testId}
    >
      {({ isConfirm }) => (isConfirm ? confirmText : nonConfirmText)}
    </ConfirmButton>
  );
}

DeleteSureButton.defaultProps = {
  deleteColor: colors.brownSimple,
  "data-testid": "delete-button",
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  className: PropTypes.string,
  deleteText: PropTypes.string,
  sureText: PropTypes.string,
  "data-testid": PropTypes.string,
};

const StyledDeleteSureButton = StyledConfirmButton;

export { DeleteSureButton, StyledDeleteSureButton };
