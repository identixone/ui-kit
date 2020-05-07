import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./StyledButton";

const Button = React.forwardRef((props, ref) => {
  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    onKeyPress,
    onKeyUp,
    onKeyDown,
    onFocus,
    onBlur,
    children,
    isDisabled,
    type,
    size,
    theme,
    fit,
    isFullWidth,
    isHardOutline,
    style,
    className,
    disabled,
    "data-testid": testId,
  } = props;

  return (
    <StyledButton
      ref={ref}
      className={className}
      style={style}
      data-testid={testId}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={isDisabled || disabled}
      type={type}
      size={size}
      theme={theme}
      fit={fit}
      isFullWidth={isFullWidth}
      isHardOutline={isHardOutline}
    >
      {children}
    </StyledButton>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  /* TODO: избавиться от isDisabled */
  isDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["medium", "large"]).isRequired,
  fit: PropTypes.oneOf(["rect", "square", "circle"]).isRequired,
  theme: PropTypes.oneOf(["light", "dark", "reset", "outline", "green", "blue"])
    .isRequired,
  // Проперти добавлено для того, чтобы в FF не показывать аутлайн (работает только через !important)
  // Но при желании его можно поставить в false, чтобы установать свой аутлайн
  isHardOutline: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  theme: "reset",
  fit: "rect",
  isDisabled: false,
  isFullWidth: false,
  isHardOutline: true,
  "data-testid": "button",
};

export { Button, StyledButton };
