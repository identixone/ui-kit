import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { usePopup } from "../../hooks/use-popup";
import StyledListItemPopupQRCodeContainer from "./StyledListItemPopupQRCodeContainer";

import { Qrcode as QRCodeIcon } from "@identixone/ui-kit/src/assets/icons";

import StyledListItemPopup from "./StyledListItemPopup";
import ListItemPopupInner from "./ListItemPopupInner";

export function ListItemPopup({ children }) {
  let pupupTrigger = useRef(null);

  const {
    Portal,
    openPortal,
    closePortal,
    isOpen,
    coords,
    popupInner,
    ref,
  } = usePopup({
    pupupTrigger: pupupTrigger,
    position: "top",
  });

  return (
    <React.Fragment>
      <StyledListItemPopupQRCodeContainer>
        <QRCodeIcon
          data-testid="tokens-qr-code-icon"
          ref={ref}
          cursor="pointer"
          width="19"
          height="19"
          onClick={e => {
            openPortal(e);
          }}
        />
      </StyledListItemPopupQRCodeContainer>
      <Portal>
        <StyledListItemPopup
          data-testid="list-item-popup-container"
          isOpen={isOpen}
          left={coords.left}
          top={coords.top}
        >
          <ListItemPopupInner ref={popupInner}>
            {typeof children === "function"
              ? children({
                  pupupTrigger: pupupTrigger,
                  handleTriggerCloseClick: closePortal,
                })
              : children}
          </ListItemPopupInner>
        </StyledListItemPopup>
      </Portal>
    </React.Fragment>
  );
}

ListItemPopup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
