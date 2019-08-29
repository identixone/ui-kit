import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";

import { Popup } from "../Popup";
import { ListItemsContext } from "../WithCurrentOpenItem/ListItemsContext";

import StyledListItemPopup from "./StyledListItemPopup";
import ListItemPopupInner from "./ListItemPopupInner";

export function ListItemPopup({ initialOpen, pupupTrigger, id, children }) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const { currentOpenItem, setCurrentOpenItem } = useContext(ListItemsContext);

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

  useEffect(() => {
    setIsOpen(currentOpenItem === id);
  }, [id, currentOpenItem]);

  return (
    <Popup
      position="top"
      isOpen={isOpen}
      pupupTrigger={pupupTrigger}
      triggerContent={children}
      render={({ isOpen, left, top, popupInner }) => (
        <StyledListItemPopup
          data-testid="list-item-popup-container"
          isOpen={isOpen}
          left={left}
          top={top}
        >
          <ListItemPopupInner ref={popupInner}>
            {typeof children === "function"
              ? children({
                  isOpen,
                  pupupTrigger: pupupTrigger,
                  handleTriggerCloseClick: handleTriggerCloseClick,
                })
              : children}
          </ListItemPopupInner>
        </StyledListItemPopup>
      )}
    />
  );
}

ListItemPopup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  initialOpen: PropTypes.bool,
  id: PropTypes.number,
  pupupTrigger: PropTypes.object,
};

ListItemPopup.defaultProps = {
  initialOpen: false,
};
