import { useState, useEffect, useRef } from "react";
import usePortal from "react-useportal";

function usePopup(params) {
  const {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    ref,
    portalRef,
    onMouseEnter,
    onMouseLeave,
  } = usePortal({
    onMouseEnter: params.onMouseEnter,
    onMouseLeave: params.onMouseLeave,
    isOpen: params.initialIsOpen,
    onOpen: ({ targetEl }) => updatePopupParams(targetEl),
    bindTo: document && document.getElementById("app-container"),
  });

  const [targetParams, setTargetParams] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const savedTarget = useRef(null);
  const popupInner = useRef(null);

  function updatePopupParams(targetEl) {
    const { current: popupTriggerEl } = targetEl;

    if (popupTriggerEl) {
      savedTarget.current = popupTriggerEl;
    }
    const target = savedTarget.current;
    if (target) {
      const { left, top, width, height } = target.getBoundingClientRect();

      setTargetParams({
        top,
        left,
        width,
        height,
      });
    }
  }

  useEffect(() => {
    window.addEventListener("resize", updatePopupParams);

    return () => {
      window.removeEventListener("resize", updatePopupParams);
    };
  }, []);

  return {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
    isOpen,
    targetParams,
    popupInner,
    ref,
    portalRef,
    bind: {
      onMouseEnter,
      onMouseLeave,
    },
  };
}

export { usePopup };
