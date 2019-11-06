import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { usePopup } from "../../hooks/use-popup";
import TooltipContainer from "./TooltipContainer";
import TooltipInner from "./TooltipInner";
import TooltipTitle from "./TooltipTitle";

export function Tooltip(props) {
  const { initialOpen = false, title, children } = props;
  const tooltipTrigger = useRef();

  useEffect(() => {
    const { current: tooltipTriggerEl } = tooltipTrigger;

    if (tooltipTriggerEl) {
      tooltipTriggerEl.addEventListener("mouseenter", handleTriggerHover);
      tooltipTriggerEl.addEventListener("mouseleave", handleTriggerLeave);

      return () => {
        tooltipTriggerEl.removeEventListener("mouseenter", handleTriggerHover);
        tooltipTriggerEl.removeEventListener("mouseleave", handleTriggerLeave);
      };
    }
  }, []);

  const {
    Portal,
    openPortal,
    closePortal,
    isOpen,
    coords,
    popupInner,
  } = usePopup({
    pupupTrigger: tooltipTrigger,
    position: "right",
    isOpen: initialOpen,
  });

  function handleTriggerHover(e) {
    openPortal(e);
  }

  function handleTriggerLeave(e) {
    closePortal(e);
  }

  return (
    <React.Fragment>
      {typeof children === "function" ? (
        children({
          isOpen,
          tooltipTrigger,
        })
      ) : (
        <span ref={tooltipTrigger}>{children}</span>
      )}
      <Portal>
        <TooltipContainer isOpen={isOpen} left={coords.left} top={coords.top}>
          <TooltipInner ref={popupInner}>
            <TooltipTitle>{title}</TooltipTitle>
          </TooltipInner>
        </TooltipContainer>
      </Portal>
    </React.Fragment>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  initialOpen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
