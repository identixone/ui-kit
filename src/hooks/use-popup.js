import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";

import usePortal from "react-useportal";

function usePopup(props) {
  const { pupupTrigger, position } = props;

  const { Portal, openPortal, closePortal, isOpen } = usePortal({
    isOpen: props.isOpen,
    onOpen: updatePopupCoords,
    bindTo: document && document.getElementById("app-container"),
  });

  const [coords, setCoords] = useState({
    top: null,
    left: null,
  });

  let popupInner = useRef();

  function setPopupCoords(pupupTriggerEl) {
    const { left, top, width } = pupupTriggerEl.getBoundingClientRect();
    const innerHeight = popupInner.current.offsetHeight;

    switch (position) {
      case "right":
        setCoords({
          top: top + window.scrollY - innerHeight / 2,
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
    setPopupCoords(pupupTriggerEl);
  }

  useEffect(() => {
    window.addEventListener("resize", updatePopupCoords);

    return () => {
      window.removeEventListener("resize", updatePopupCoords);
    };
  }, []);

  return { Portal, openPortal, closePortal, isOpen, coords, popupInner };
}

usePopup.propTypes = {
  pupupTrigger: PropTypes.object,
  position: PropTypes.oneOf(["right", "top"]).isRequired,
  isOpen: PropTypes.bool,
};

usePopup.defaultProps = {
  isOpen: false,
  position: "right",
};

export { usePopup };
