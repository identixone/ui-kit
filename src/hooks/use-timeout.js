import { useRef } from "react";

const DEFAULT_RESET_TIMEOUT_MS = 1000;

export function useTimeout(resetMilliseconds = DEFAULT_RESET_TIMEOUT_MS) {
  const timeout = useRef(null);

  function setUseTimeout(callback) {
    if (!timeout.current) {
      timeout.current = setTimeout(callback, resetMilliseconds);
    }
  }

  function resetUseTimeout() {
    clearTimeout(timeout.current);
  }

  return { setUseTimeout, resetUseTimeout };
}
