import React from "react";
import PropTypes from "prop-types";

import { usePopup } from "../../hooks/use-popup";

import StyledListItemPopup from "./StyledListItemPopup";
import ListItemPopupInner from "./ListItemPopupInner";

export function ListItemPopup({ children, trigger }) {
  const {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    coords,
    popupInner,
    ref,
  } = usePopup({
    position: "top",
  });

  return (
    <React.Fragment>
      {typeof trigger === "function"
        ? trigger({ ref, openPortal, togglePortal, closePortal })
        : trigger}
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
                  onTriggerCloseClick: closePortal,
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
  trigger: PropTypes.object,
};
