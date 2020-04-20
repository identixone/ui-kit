import { useState, useEffect } from "react";

function useDeleteSure(onDelete) {
  const [isSure, setIsSure] = useState(false);

  useEffect(() => {
    if (isSure) {
      onDelete();
    }
  }, [isSure]);

  return {
    isSure,
    setIsSure,
  };
}

export { useDeleteSure };
