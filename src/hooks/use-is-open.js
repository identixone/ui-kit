import { useState, useEffect } from "react";

export function useIsOpen(isOpen) {
  const [stateIsOpen, setIsOpen] = useState(isOpen);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function setClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return [stateIsOpen, toggleIsOpen, setClose];
}
