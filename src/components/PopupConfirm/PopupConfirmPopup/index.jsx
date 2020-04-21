import React from "react";
import PropTypes from "prop-types";

import { StyledPopupConfirmPopup } from "./StyledPopupConfirmPopup";
import { PopupConfirmPopupTitle } from "./PopupConfirmPopupTitle";
import { PopupConfirmPopupButton } from "./PopupConfirmPopupButton";
import { PopupConfirmPopupButtons } from "./PopupConfirmPopupButtons";

function PopupConfirmPopup({ title, okText, cancelText, onConfirm, onCancel }) {
  return (
    <StyledPopupConfirmPopup>
      <PopupConfirmPopupTitle>{title}</PopupConfirmPopupTitle>
      <PopupConfirmPopupButtons>
        <PopupConfirmPopupButton theme="dark" size="large" onClick={onConfirm}>
          {okText}
        </PopupConfirmPopupButton>
        <PopupConfirmPopupButton
          theme="outline"
          size="large"
          onClick={onCancel}
        >
          {cancelText}
        </PopupConfirmPopupButton>
      </PopupConfirmPopupButtons>
    </StyledPopupConfirmPopup>
  );
}

PopupConfirmPopup.propTypes = {
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.string.isRequired,
  onCancel: PropTypes.string.isRequired,
};

PopupConfirmPopup.defaultProps = {
  title: "Are you sure?",
  okText: "Ok",
  cancelText: "Cancel",
};

export { PopupConfirmPopup, StyledPopupConfirmPopup };
