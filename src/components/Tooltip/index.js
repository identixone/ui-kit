import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { Popup } from "../Popup";
import TooltipContainer from "./TooltipContainer";
import TooltipInner from "./TooltipInner";
import TooltipTitle from "./TooltipTitle";

export function Tooltip(props) {
  const { initialOpen = false, title, children } = props;
  const [isOpen, setIsOpen] = useState(initialOpen);
  const tooltipTrigger = useRef();

  function handleTriggerHover() {
    setIsOpen(true);
  }

  function handleTriggerLeave() {
    setIsOpen(false);
  }

  useEffect(() => {
    const { current: tooltipTriggerEl } = tooltipTrigger;

    if (tooltipTriggerEl) {
      tooltipTriggerEl.addEventListener("mouseover", handleTriggerHover);
      tooltipTriggerEl.addEventListener("mouseleave", handleTriggerLeave);

      return () => {
        tooltipTriggerEl.removeEventListener("mouseover", handleTriggerHover);
        tooltipTriggerEl.removeEventListener("mouseleave", handleTriggerLeave);
      };
    }
  }, []);

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
      <Popup
        position={"right"}
        isOpen={isOpen}
        pupupTrigger={tooltipTrigger}
        triggerContent={children}
        render={({ isOpen, left, top, popupInner }) => (
          <TooltipContainer isOpen={isOpen} left={left} top={top}>
            <TooltipInner ref={popupInner}>
              <TooltipTitle>{title}</TooltipTitle>
            </TooltipInner>
          </TooltipContainer>
        )}
      />
    </React.Fragment>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  initialOpen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
