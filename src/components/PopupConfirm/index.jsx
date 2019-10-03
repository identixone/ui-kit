import React from "react";
import PropTypes from "prop-types";

import usePortal from "react-useportal";

import { PopupConfirmPopup } from "./PopupConfirmPopup";

function PopupConfirm({
  children,
  title,
  okText,
  cancelText,
  onConfirm,
  portalRef,
}) {
  const [openPopup, closePopup, isPopupOpen, Portal, togglePopup] = usePortal({
    onOpen({ portal, targetEl }) {
      const { top, left } = targetEl.getBoundingClientRect();

      /**
       * Так сделано, потому что нужно отрисовать
       * элемент в конкретном месте над триггером
       */
      portal.current.style.cssText = `
          position: absolute;
          top: ${top - 95 / 2}px;
          left: ${left - 239 / 2 + 65}px;
        `;
    },
  });

  return (
    <React.Fragment>
      {children({ openPopup, closePopup, togglePopup, isPopupOpen })}
      {isPopupOpen && (
        <Portal ref={portalRef}>
          <PopupConfirmPopup
            title={title}
            okText={okText}
            cancelText={cancelText}
            onConfirm={() => {
              closePopup();
              onConfirm();
            }}
            onCancel={closePopup}
          />
        </Portal>
      )}
    </React.Fragment>
  );
}

PopupConfirm.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.string.isRequired,
  portalRef: PropTypes.object,
};

export { PopupConfirm };
