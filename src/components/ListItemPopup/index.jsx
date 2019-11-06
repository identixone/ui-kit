import React from "react";
import PropTypes from "prop-types";
import { useEffect, useContext } from "react";
import { usePopup } from "../../hooks/use-popup";

import { ListItemsContext } from "../WithCurrentOpenItem/ListItemsContext";

import StyledListItemPopup from "./StyledListItemPopup";
import ListItemPopupInner from "./ListItemPopupInner";

export function ListItemPopup({ pupupTrigger, id, children }) {
  const { currentOpenItem, setCurrentOpenItem } = useContext(ListItemsContext);

  const { Portal, coords, popupInner } = usePopup({
    pupupTrigger: pupupTrigger,
    position: "top",
    isOpen: currentOpenItem === id,
  });

  function handleTriggerOpenClick() {
    setCurrentOpenItem(id);
  }

  function handleTriggerCloseClick() {
    setCurrentOpenItem(null);
  }

  useEffect(() => {
    const { current: pupupTriggerEl } = pupupTrigger;

    if (pupupTriggerEl) {
      pupupTriggerEl.addEventListener("click", handleTriggerOpenClick);
      return () => {
        pupupTriggerEl.removeEventListener("click", handleTriggerOpenClick);
      };
    }
  }, []);

  return (
    <Portal>
      <StyledListItemPopup
        data-testid="list-item-popup-container"
        isOpen={currentOpenItem === id}
        left={coords.left}
        top={coords.top}
      >
        <ListItemPopupInner ref={popupInner}>
          {typeof children === "function"
            ? children({
                isOpen: currentOpenItem === id,
                pupupTrigger: pupupTrigger,
                handleTriggerCloseClick: handleTriggerCloseClick,
              })
            : children}
        </ListItemPopupInner>
      </StyledListItemPopup>
    </Portal>
  );
}

ListItemPopup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.number,
  pupupTrigger: PropTypes.object,
};
