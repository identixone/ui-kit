import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";

let popupContainer = document.createElement("div");
let popupInner = React.createRef();

export function Popup(props) {
  const { initialOpen, position, pupupTrigger, render } = props;

  const [isOpen, setIsOpen] = useState(initialOpen);
  const [coords, setCoords] = useState({
    top: null,
    left: null,
  });

  function setPopupCoords(pupupTriggerEl) {
    const { left, top, width, height } = pupupTriggerEl.getBoundingClientRect();

    const innerHeight = popupInner.current.offsetHeight;
    switch (position) {
      case "right":
        setCoords({
          top: top + window.scrollY - innerHeight / 2 + height / 2,
          left: left + width + 10,
        });

        break;
      case "top":
        setCoords({
          top: top + window.scrollY - 5,
          left: left - 5,
        });

        break;
    }
  }

  function updatePopupCoords() {
    const { current: pupupTriggerEl } = pupupTrigger;
    if (isOpen === true) {
      setPopupCoords(pupupTriggerEl);
    }
  }

  useEffect(() => {
    setIsOpen(props.isOpen);
    if (isOpen === true) {
      updatePopupCoords();
    }
  }, [props.isOpen, isOpen]);

  useEffect(() => {
    const currentRoot = document.getElementById("app-container");
    currentRoot.appendChild(popupContainer);

    return () => {
      if (currentRoot && popupContainer.parentNode == currentRoot) {
        currentRoot.removeChild(popupContainer);
      }
    };
  });

  useEffect(() => {
    window.addEventListener("resize", updatePopupCoords);

    return () => {
      window.removeEventListener("resize", updatePopupCoords);
    };
  }, []);

  return createPortal(
    render({
      isOpen: isOpen,
      left: coords.left,
      top: coords.top,
      popupInner,
      ...props,
    }),
    popupContainer
  );
}

Popup.propTypes = {
  initialOpen: PropTypes.bool,
  pupupTrigger: PropTypes.object,
  position: PropTypes.oneOf(["right", "top"]),
  render: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

Popup.defaultProps = {
  initialOpen: false,
  position: "right",
};
