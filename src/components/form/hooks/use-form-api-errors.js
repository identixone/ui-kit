import { useEffect } from "react";

export function useFormApiErrors(apiErrors, setErrors) {
  useEffect(() => {
    setErrors(apiErrors);
  }, [apiErrors]);
}
