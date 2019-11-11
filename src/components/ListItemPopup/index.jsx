import React from "react";
import PropTypes from "prop-types";

import { usePositionPopup } from "../../hooks/use-position-popup.js";

import StyledListItemPopup from "./StyledListItemPopup";
import ListItemPopupInner from "./ListItemPopupInner";

function ListItemPopup({
  "data-testid": testId,
  className,
  children,
  trigger,
}) {
  const {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    coords,
    popupInner,
    ref,
  } = usePositionPopup({
    position: "top",
  });

  return (
    <React.Fragment>
      {typeof trigger === "function"
        ? trigger({ ref, openPortal, togglePortal, closePortal })
        : React.cloneElement(trigger, {
            ref,
            openPortal,
            togglePortal,
            closePortal,
          })}
      <Portal>
        <StyledListItemPopup
          data-testid={testId}
          className={className}
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
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

ListItemPopup.defaultProps = {
  "data-testid": "list-item-popup",
};

export { ListItemPopup, StyledListItemPopup };
