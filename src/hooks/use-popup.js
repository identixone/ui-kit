import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";
import usePortal from "react-useportal";

let savedTargetEl = null;
function usePopup(params) {
  const { position } = params;

  const {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    ref,
    portalRef,
  } = usePortal({
    isOpen: params.isOpen,
    onOpen: ({ targetEl }) => {
      updatePopupCoords(targetEl);
    },
    bindTo: document && document.getElementById("app-container"),
  });

  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  });
  let popupInner = useRef(null);

  function updatePopupCoords(trargetEl) {
    if (trargetEl.current) {
      savedTargetEl = trargetEl.current;
    }
    const { current: pupupTriggerEl } = trargetEl;
    const target = pupupTriggerEl || savedTargetEl;
    const { left, top, width } = target.getBoundingClientRect();
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

  useEffect(() => {
    window.addEventListener("resize", updatePopupCoords);

    return () => {
      window.removeEventListener("resize", updatePopupCoords);
    };
  }, []);

  return {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    coords,
    popupInner,
    ref,
    portalRef,
  };
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
