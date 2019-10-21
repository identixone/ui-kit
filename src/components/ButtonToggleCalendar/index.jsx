import React from "react";
import PropTypes from "prop-types";

import { useIsOpen } from "../../hooks/use-is-open";

import { ThemeProvider } from "styled-components";
import StyledButtonToggle from "./StyledButtonToggle";
import StyledButtonToggleContainer from "./StyledButtonToggleContainer";
import StyledButtonClose from "./StyledButtonClose";

import { Times } from "../../assets/icons";

export function ButtonToggleCalendar({
  icon,
  mode,
  onChange,
  height,
  isOpen,
  isActive,
  handleCrossClick,
}) {
  const [stateIsOpen, toggleIsOpen, setClose] = useIsOpen(isOpen);

  function handleToggleClick() {
    toggleIsOpen();
    onChange(isOpen);
  }

  function onCrossClick() {
    setClose();
    onChange(isOpen);
    handleCrossClick();
  }

  return (
    <ThemeProvider theme={{ mode }}>
      <StyledButtonToggleContainer height={height}>
        <StyledButtonToggle
          data-testid="button-toggle-calendar"
          onClick={handleToggleClick}
          isActive={stateIsOpen || isActive}
        >
          {icon}
        </StyledButtonToggle>
        {isActive && !isOpen && (
          <StyledButtonClose onClick={onCrossClick} mode={mode}>
            <Times size="16" />
          </StyledButtonClose>
        )}
      </StyledButtonToggleContainer>
    </ThemeProvider>
  );
}

ButtonToggleCalendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleCrossClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  mode: PropTypes.string,
  icon: PropTypes.node,
  height: PropTypes.string,
};

ButtonToggleCalendar.defaultProps = {
  isActive: false,
};
