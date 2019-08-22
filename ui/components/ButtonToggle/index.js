import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledButtonToggle from "./StyledButtonToggle.jsx";
import StyledButtonToggleContainer from "./StyledButtonToggleContainer.jsx";
import ButtonClose from "./StyledButtonClose.jsx";
import ButtonMiddle from "./StyledButtonMiddle.jsx";
import ButtonToggleWrapper from "../ButtonToggleWrapper/index.jsx";
import { ThemeProvider } from "styled-components";

import { Times } from "../../assets/icons";

class ButtonToggle extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onChange: PropTypes.func,
    mode: PropTypes.string,
    icon: PropTypes.node,
  };

  static defaultProps = {
    onCrossClick: () => {},
  };

  render() {
    const { children, icon, mode, onChange } = this.props;
    return (
      <ButtonToggleWrapper
        onChange={onChange}
        render={({ handleToggleClick, handleCrossClick, isOpen }) => {
          return (
            <ThemeProvider theme={{ mode }}>
              <StyledButtonToggleContainer>
                <StyledButtonToggle
                  onClick={handleToggleClick}
                  isActive={isOpen}
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
        }}
      />
    );
  }
}

export default ButtonToggle;
