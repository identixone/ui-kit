import { useState, useEffect, useRef } from "react";
import usePortal from "react-useportal";

function usePopup(params) {
  const { initialIsOpen } = params;

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
    isOpen: initialIsOpen,
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
  let popupInner = useRef(null);

  function updatePopupParams(trargetEl) {
    const { current: pupupTriggerEl } = trargetEl;

    if (pupupTriggerEl) {
      savedTarget.current = pupupTriggerEl;
    }
    const target = pupupTriggerEl || savedTarget.current;
    if (target) {
      const { left, top, width, height } = target.getBoundingClientRect();

      setTargetParams({
        top: top,
        left: left,
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
