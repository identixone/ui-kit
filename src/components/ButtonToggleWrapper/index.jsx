import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function ButtonToggleWrapper({children,
  isOpen,
  render,
  onChange,
  onCrossClick,
  mode,
  icon,
}){
  const [state, setState] = useState({
    isOpen: isOpen,
  });

  function handleToggleClick() {
    setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => {
        onChange(state.isOpen);
      }
    );
  };

  function handleCrossClick() {
    setState(
      ({ isOpen }) => (isOpen ? { isOpen: false } : null),
      () => {
        onChange(state.isOpen);
        onCrossClick();
      }
    );
  };
  
  useEffect(() => {
    setState({ isOpen: isOpen });
  }, [isOpen]);

  return render({
    isOpen: state.isOpen,
    icon: icon,
    children,
    mode,
    handleToggleClick: handleToggleClick,
    handleCrossClick: handleCrossClick,
  });
}

ButtonToggleWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isOpen: PropTypes.bool,
  render: PropTypes.func,
  onChange: PropTypes.func,
  onCrossClick: PropTypes.func,
  mode: PropTypes.string,
  icon: PropTypes.node,
};

ButtonToggleWrapper.defaultProps = {
  isOpen: false,
  onCrossClick: () => {},
};