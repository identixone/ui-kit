import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import { usePopup } from "../../hooks/use-popup";

import TooltipContainer from "./TooltipContainer";
import TooltipInner from "./TooltipInner";
import TooltipTitle from "./TooltipTitle";

export function Tooltip(props) {
  const { title, children } = props;
  const tooltipTrigger = useRef(null);
  const {
    Portal,
    openPortal,
    closePortal,
    isOpen,
    coords,
    popupInner,
    bind,
  } = usePopup({
    onMouseEnter: () => openPortal(),
    onMouseLeave: () => closePortal(),
    pupupTrigger: tooltipTrigger,
    position: "right",
    initialIsOpen: props.isOpen,
  });

  return (
    <React.Fragment>
      {typeof children === "function" ? (
        children({
          isOpen,
          tooltipTrigger,
          bind,
        })
      ) : (
        <span {...bind} ref={tooltipTrigger}>
          {children}
        </span>
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
  isOpen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
