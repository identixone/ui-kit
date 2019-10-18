import { useState, useEffect } from "react";

export function useIsOpen(isOpen) {
  const [stateIsOpen, setIsOpen] = useState(isOpen);

  function setToggle() {
    setIsOpen(!isOpen);
  }
  function setClose() {
    setIsOpen(isOpen ? false : null);
  }

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return [stateIsOpen, setToggle, setClose];
}
