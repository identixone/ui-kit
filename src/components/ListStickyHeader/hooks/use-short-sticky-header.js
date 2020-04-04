import { useEffect } from "react";
import { useScrollDirection } from "../../../hooks";

function useShortStickyHeader({ headerHeight, headerStickyOffset }) {
  const { directionY, y } = useScrollDirection();
  const isHeaderFull = directionY === "top" && y > 600;
  const isHeaderShort =
    directionY === "bottom" && y > headerHeight + headerStickyOffset;
  const isSticky = y > headerHeight;

  useEffect(() => {
    const appHeader = document.getElementById("sticky-header");
    if (!appHeader) {
      return;
    }

    const newTranlateY = isHeaderFull ? 0 : "-100%";
    appHeader.style.transform = `translateY(${newTranlateY})`;

    return () => {
      appHeader.style.transform = null;
    };
  }, [directionY]);

  return { isHeaderFull, isHeaderShort, isSticky };
}

export { useShortStickyHeader };
