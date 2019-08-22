import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledFlash from "./StyledFlash";

const FlashContext = React.createContext({
  isFlashing: false,
});

export default class Flash extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    flashTime: PropTypes.number,
  };

  static defaultProps = {
    flashTime: 150,
  };

  static Flashing = ({ children }) => (
    <FlashContext.Consumer>
      {({ isFlashing }) => (
        <StyledFlash isFlashing={isFlashing} style={{ position: "static" }}>
          {children}
        </StyledFlash>
      )}
    </FlashContext.Consumer>
  );

  state = {
    isFlashing: false,
  };

  flash = () => {
    const { flashTime } = this.props;

    this.setState({ isFlashing: true });
    setTimeout(() => {
      this.setState({ isFlashing: false });
    }, flashTime);
  };

  render() {
    const { render } = this.props;
    const { isFlashing } = this.state;

    return (
      <FlashContext.Provider value={this.state}>
        {render({ isFlashing, flash: this.flash })}
      </FlashContext.Provider>
    );
  }
}
