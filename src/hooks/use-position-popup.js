import { useState, useEffect } from "react";
import { usePopup } from "./use-popup.js";

function usePositionPopup(params) {
  const { position } = params;

  const { targetParams, popupInner, ...usePopupParams } = usePopup(params);

  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  });

  function updatePopupCoords() {
    const { left, top, width, height } = targetParams;
    const innerHeight = popupInner.current
      ? popupInner.current.offsetHeight
      : 0;

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

  useEffect(() => {
    updatePopupCoords();
  }, [targetParams]);

  return {
    popupInner,
    ...usePopupParams,
    coords,
  };
}

export { usePositionPopup };
