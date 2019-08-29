import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./StyledButton";

function Button({
  onClick,
  onMouseLeave,
  children,
  isDisabled,
  type,
  size,
  buttonTheme,
  fit,
  className,
  isRounded,
  ...restProps
}) {
  return (
    <StyledButton
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      disabled={isDisabled}
      type={type}
      size={size}
      buttonTheme={buttonTheme}
      fit={fit}
      isRounded={isRounded}
      className={className}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  // Кнопка может выполнять функцию submit, и этот обработчик не нужен
  onClick: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isDisabled: PropTypes.bool,
  isRounded: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fit: PropTypes.oneOf(["rect", "square", "circle"]),
  // Названо так, потому что конфликтует с props.theme из styled-theming
  buttonTheme: PropTypes.oneOf([
    "light",
    "light-gray",
    "dark",
    "blue",
    "warning",
    "ghost",
    "ghost-dark",
    "active",
    "warning",
    "reset",
    "lighter",
    "disabled",
  ]),

  // Проперти добавлено для того, чтобы в FF не показывать аутлайн (работает только через !important)
  // Но при желании его можно поставить в false, чтобы установать свой аутлайн
  isHardOutline: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
  isRounded: true,
  type: "button",
  size: "medium",
  buttonTheme: "light",
  fit: "rect",
  isHardOutline: true,
};

export { Button };

export default Button;
