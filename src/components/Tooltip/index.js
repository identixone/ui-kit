import React from "react";
import PropTypes from "prop-types";

import { useState, useRef, useEffect } from "react";

import { Popup } from "../Popup";
import TooltipContainer from "./TooltipContainer";
import TooltipInner from "./TooltipInner";
import TooltipTitle from "./TooltipTitle";

function Tooltip(props) {
  const { initialOpen = false, title, children } = props;
  const [isOpen, setIsOpen] = useState(initialOpen);
  const tooltipTrigger = useRef();

  useEffect(() => {
    const { current: tooltipTriggerEl } = tooltipTrigger;

    if (tooltipTriggerEl) {
      tooltipTriggerEl.addEventListener("mouseover", handleTriggerHover);
      tooltipTriggerEl.addEventListener("mouseout", handleTriggerLeave);

      return () => {
        tooltipTriggerEl.removeEventListener("mouseover", handleTriggerHover);
        tooltipTriggerEl.removeEventListener("mouseleave", handleTriggerLeave);
      };
    }
  }, []);

  function handleTriggerHover() {
    setIsOpen(true);
  }

  function handleTriggerLeave() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      {typeof children === "function" ? (
        children({
          isOpen,
          tooltipTrigger,
        })
      ) : (
        <span ref={tooltipTrigger} data-testid="tooltip-trigger">
          {children}
        </span>
      )}
      <Popup
        position={"right"}
        isOpen={isOpen}
        pupupTrigger={tooltipTrigger}
        triggerContent={children}
        render={({ isOpen, left, top, popupInner }) => (
          <TooltipContainer
            data-testid="tooltip-container"
            isOpen={isOpen}
            left={left}
            top={top}
          >
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

export { Tooltip };
