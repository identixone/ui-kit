import { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

import { throttle } from "lodash-es";

function useScrollDirection() {
  const { y } = useWindowScroll();
  const prevY = useRef(y);
  const [directionY, setDirectionY] = useState(null);
  function handleScroll(prevY, y) {
    if (prevY !== undefined) {
      setDirectionY(prevY < y ? "bottom" : "top");
    }
  }
  const throttledScroll = useRef(throttle(handleScroll, 300));

  useEffect(() => {
    throttledScroll.current(prevY.current, y);
    if (Math.abs(prevY.current - y) > 50) {
      prevY.current = y;
    }
  }, [y]);

  return {
    y,
    directionY,
  };
}

export { useScrollDirection };
