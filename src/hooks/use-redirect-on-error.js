import { useEffect } from "react";

function useRedirectOnError(error, redirect) {
  useEffect(() => {
    if (error && redirect) {
      redirect();
    }
  }, [error]);
}

export { useRedirectOnError };
