import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import { useDeleteSure } from "./hooks";
import { useTranslation } from "../../hooks";

import StyledDeleteSureButton from "./StyledDeleteSureButton";
import { colors } from "../../style";

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
  const { isSure, setIsSure } = useDeleteSure(onDelete);
  const buttonRef = useRef(null);
  const buttonWidth = useRef(null);

  if (buttonWidth.current === null && buttonRef.current) {
    buttonWidth.current = buttonRef.current.getBoundingClientRect().width;
  }

  i18n.addResourceBundle("en", "DeleteSureButton", resources.en);
  i18n.addResourceBundle("ru", "DeleteSureButton", resources.ru);

  const textSure = isUndefined(sureText)
    ? t("DeleteSureButton:Sure")
    : sureText;
  const textDelete = isUndefined(deleteText)
    ? t("DeleteSureButton:Delete")
    : deleteText;

  return (
    <StyledDeleteSureButton
      ref={buttonRef}
      color={color}
      className={className}
      deleteColor={deleteColor}
      isSure={isSure}
      onClick={() => {
        setIsSure(true);
      }}
      onMouseLeave={() => {
        setIsSure(false);
      }}
      size={size}
      isDisabled={isDisabled}
      data-testid="delete-button"
      style={
        buttonWidth.current !== null ? { width: buttonWidth.current } : null
      }
    >
      {isSure ? textSure : textDelete}
    </StyledDeleteSureButton>
  );
}

DeleteSureButton.defaultProps = {
  deleteColor: colors.brownSimple,
  color: colors.blueWhite,
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  className: PropTypes.string,
  deleteText: PropTypes.string,
  sureText: PropTypes.string,
};

export { DeleteSureButton, StyledDeleteSureButton };
