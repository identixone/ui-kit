import { useEffect, useContext } from "react";
import { useScrollDirection } from "../../../hooks";
import { ListLayoutContext } from "../../ListLayout";

function useShortStickyHeader({ headerElRef }) {
  const { directionY, y } = useScrollDirection();
  const { isHeaderFull, setIsHeaderFull } = useContext(ListLayoutContext);
  useEffect(() => {
    setIsHeaderFull(directionY === "top" && y > 600);
  }, [directionY, y]);

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
  }, [isHeaderFull]);

  return { isSticky };
}

export { useShortStickyHeader };
