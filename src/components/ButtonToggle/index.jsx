import React from "react";
import PropTypes from "prop-types";

import { useIsOpen } from "../../hooks/use-is-open";

import { ThemeProvider } from "styled-components";
import StyledButtonToggle from "./StyledButtonToggle";
import StyledButtonToggleContainer from "./StyledButtonToggleContainer";
import ButtonClose from "./StyledButtonClose";
import ButtonMiddle from "./StyledButtonMiddle";

import { Times } from "../../assets/icons";

function ButtonToggle({ children, icon, mode, onChange, onCrossClick }) {
  const [isOpen, toggleIsOpen, setClose] = useIsOpen(false);

  function handleToggleClick() {
    toggleIsOpen();
    onChange(isOpen);
  }

  function handleCrossClick() {
    setClose();
    onChange(isOpen);
    onCrossClick();
  }

  return (
    <ThemeProvider theme={{ mode }}>
      <StyledButtonToggleContainer>
        <StyledButtonToggle
          onClick={handleToggleClick}
          isActive={isOpen}
          data-testid="button-toggle"
        >
          {icon}
        </StyledButtonToggle>
        {isOpen && (
          <React.Fragment>
            <ButtonMiddle mode={mode}>{children}</ButtonMiddle>
            <ButtonClose onClick={handleCrossClick} mode={mode}>
              <Times size="16" />
            </ButtonClose>
          </React.Fragment>
        )}
      </StyledButtonToggleContainer>
    </ThemeProvider>
  );
}
ButtonToggle.propTypes = {
  onCrossClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onChange: PropTypes.func,
  mode: PropTypes.oneOf(["red", "blue"]),
  icon: PropTypes.node,
};

ButtonToggle.defaultProps = {
  onCrossClick: () => {},
};

export { ButtonToggle, StyledButtonToggle };

export default ButtonToggle;
