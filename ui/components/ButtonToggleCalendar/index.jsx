import React from "react";
import PropTypes from "prop-types";

import StyledButtonToggle from "./StyledButtonToggle.jsx";
import StyledButtonToggleContainer from "./StyledButtonToggleContainer.jsx";
import { ThemeProvider } from "styled-components";
import ButtonToggleWrapper from "../ButtonToggleWrapper/index.jsx";
import StyledButtonClose from "./StyledButtonClose.jsx";
import { Times } from "../../assets/icons";

function ButtonToggleCalendar({
  icon,
  mode,
  onChange,
  height,
  isOpen,
  isActive,
  handleCrossClick,
}) {
  return (
    <ButtonToggleWrapper
      onChange={onChange}
      isOpen={isOpen}
      render={({ handleToggleClick, isOpen }) => {
        return (
          <ThemeProvider theme={{ mode }}>
            <StyledButtonToggleContainer height={height}>
              <StyledButtonToggle
                data-testid="button-toggle-calendar"
                onClick={handleToggleClick}
                isActive={isOpen || isActive}
              >
                {icon}
              </StyledButtonToggle>
              {isActive && !isOpen && (
                <StyledButtonClose onClick={handleCrossClick} mode={mode}>
                  <Times size="16" />
                </StyledButtonClose>
              )}
            </StyledButtonToggleContainer>
          </ThemeProvider>
        );
      }}
    />
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

export default ButtonToggleCalendar;
