import { useEffect, useRef } from "react";

export function useResetToDefaultName(
  error,
  initialValue,
  setFieldValue,
  setFieldError
) {
  const clearTimerRef = useRef();
  clearTimerRef.current = null;

  useEffect(() => {
    function clearError() {
      setFieldError("name", null);
    }

    if (error) {
      setFieldValue("name", initialValue);

      clearTimerRef.current = setTimeout(clearError, 1200);
    }

    return () => {
      clearTimeout(clearTimerRef.current);
    };
  }, [error]);
}
