import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

import { StyledConfirmButton } from "./StyledConfirmButton";

function ConfirmButton({
  onConfirm,
  size,
  isDisabled,
  confirmColor,
  children,
  className,
  "data-testid": testId,
}) {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <StyledConfirmButton
      className={className}
      isConfirm={isConfirm}
      onClick={ev => {
        ev.stopPropagation();
        setIsConfirm(!isConfirm);
        if (isConfirm) {
          onConfirm();
        }
      }}
      onMouseLeave={() => {
        if (isConfirm) {
          setIsConfirm(false);
        }
      }}
      size={size}
      isDisabled={isDisabled}
      data-testid={testId}
      confirmColor={confirmColor}
    >
      {typeof children === "function"
        ? children({ isConfirm, setIsConfirm })
        : children}
    </StyledConfirmButton>
  );
}

ConfirmButton.defaultProps = {
  "data-testid": "confirm-button",
};

ConfirmButton.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  confirmColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { ConfirmButton, StyledConfirmButton };
