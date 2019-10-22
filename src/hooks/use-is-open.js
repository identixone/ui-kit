import { useState, useEffect } from "react";
import { useUpdateEffect } from "react-use";

export function useIsOpen({ isOpen, onChange }) {
  const [stateIsOpen, setIsOpen] = useState(isOpen);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  useUpdateEffect(() => {
    onChange(stateIsOpen);
  }, [stateIsOpen]);

  return { isOpen: stateIsOpen, toggleIsOpen, setIsOpen };
}
