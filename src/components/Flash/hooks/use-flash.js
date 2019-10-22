import { useState, useEffect } from "react";

function useFlash({ flashTime = 240 } = {}) {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    let clearFlashTimerId;

    if (isFlashing) {
      clearFlashTimerId = setTimeout(() => {
        setIsFlashing(false);
      }, flashTime);
    }

    return () => {
      if (clearFlashTimerId) {
        clearTimeout(clearFlashTimerId);
      }
    };
  }, [isFlashing]);

  function flash() {
    setIsFlashing(true);
  }

  return {
    flash,
    isFlashing,
  };
}

export { useFlash };
