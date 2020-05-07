import { useEffect } from "react";

export function useFormApiErrors(apiErrors, setErrors) {
  useEffect(() => {
    if (setErrors) {
      setErrors(apiErrors);
    }
  }, [apiErrors]);
}
