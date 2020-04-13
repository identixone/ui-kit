import { useEffect } from "react";
import { useScrollDirection } from "../../../hooks";

function useShortStickyHeader({ headerElRef }) {
  const { directionY, y } = useScrollDirection();
  const isHeaderFull = directionY === "top" && y > 600;

  const isSticky = headerElRef.current && y > headerElRef.current.naturalTop;

  useEffect(() => {
    const appHeader = document.getElementById("sticky-header");
    if (!appHeader) {
      return;
    }

    const newTranslateY = isHeaderFull ? 0 : "-100%";
    appHeader.style.transform = `translateY(${newTranslateY})`;

    return () => {
      appHeader.style.transform = null;
    };
  }, [directionY]);

  return { isHeaderFull, isSticky };
}

export { useShortStickyHeader };
