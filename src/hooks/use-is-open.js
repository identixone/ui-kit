import { useState, useEffect } from "react";

export function useIsOpen({ isOpen, onChange }) {
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

  useEffect(() => {
    onChange(stateIsOpen);
  }, [stateIsOpen]);

  return [stateIsOpen, toggleIsOpen, setClose];
}
