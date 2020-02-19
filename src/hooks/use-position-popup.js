import { useState } from "react";
import { usePopup } from "./use-popup.js";

function usePositionPopup(params) {
  const { position } = params;

  const { popupInner, ...usePopupParams } = usePopup({
    ...params,
    onOpen: updatePopupCoords,
  });

  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  });

  function updatePopupCoords(target) {
    const { left, top, width, height } = target.current.getBoundingClientRect();
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
      case "bottom":
        setCoords({
          top: top + height + window.scrollY,
          left: left,
        });
        break;
    }
  }

  return {
    popupInner,
    ...usePopupParams,
    coords,
  };
}

export { usePositionPopup };
