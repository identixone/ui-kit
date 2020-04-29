import React from "react";
import PropTypes from "prop-types";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../hooks";
import usePortal from "react-useportal";

import { StyledDeleteSureButton } from "./StyledDeleteSureButton";
import { DeleteSurePseudoButton } from "./DeleteSurePseudoButton";

import { resources } from "./DeleteSureButton.resources.js";
import { isUndefined } from "lodash-es";
import { colors } from "../../style";

function DeleteSureButton({
  onDelete,
  deleteColor,
  size,
  isDisabled,
  deleteText,
  sureText,
  color,
  className,
  "data-testid": testId,
}) {
  const [isSure, setIsSure] = useState(false);
  const { Portal } = usePortal();

  const { t, i18n } = useTranslation("DeleteSureButton");
  i18n.addResourceBundle("en", "DeleteSureButton", resources.en);
  i18n.addResourceBundle("ru", "DeleteSureButton", resources.ru);
  const textSure = isUndefined(sureText) ? t("Sure") : sureText;
  const textDelete = isUndefined(deleteText) ? t("Delete") : deleteText;

  const pseudoButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(null);
  useEffect(() => {
    if (pseudoButtonRef.current) {
      setButtonWidth(pseudoButtonRef.current.getBoundingClientRect().width);
    }
  }, [deleteText]);

  return (
    <>
      <StyledDeleteSureButton
        color={color}
        className={className}
        deleteColor={deleteColor}
        isSure={isSure}
        onClick={(ev) => {
          ev.stopPropagation();
          if (isSure) {
            onDelete();
          }

          setIsSure((isSure) => !isSure);
        }}
        onMouseLeave={() => {
          setIsSure(false);
        }}
        size={size}
        isDisabled={isDisabled}
        data-testid={testId}
        width={buttonWidth}
      >
        {isSure ? textSure : textDelete}
      </StyledDeleteSureButton>
      <Portal>
        <DeleteSurePseudoButton
          className={className}
          ref={pseudoButtonRef}
          size={size}
        >
          {textDelete}
        </DeleteSurePseudoButton>
      </Portal>
    </>
  );
}

DeleteSureButton.defaultProps = {
  deleteColor: colors.brownSimple,
  color: colors.blueWhite,
  "data-testid": "delete-button",
};

DeleteSureButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  deleteColor: PropTypes.string,
  deleteText: PropTypes.string,
  sureText: PropTypes.string,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { DeleteSureButton, StyledDeleteSureButton };
