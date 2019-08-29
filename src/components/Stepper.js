import React from "react";
import PropTypes from "prop-types";

const StepperContext = React.createContext({
  activeStepIndex: null,
});

const withStepperContext = WrappedComponent => {
  const WithStepperContext = props => {
    return (
      <StepperContext.Consumer>
        {context => <WrappedComponent {...context} {...props} />}
      </StepperContext.Consumer>
    );
  };

  return WithStepperContext;
};

export class Stepper extends React.Component {
  static propTypes = {
    onStepChanges: PropTypes.func,
    onReset: PropTypes.func,
    initialActiveStepIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.func,
  };

  static defaultProps = {
    onStepChanges: () => {},
    onReset: () => {},
    initialActiveStepIndex: 1,
    stepUpdater: () => {},
  };

  static Step = withStepperContext(({ id, children, activeStepIndex }) => {
    return id === activeStepIndex ? children : null;
  });

  state = {
    activeStepIndex: this.props.initialActiveStepIndex,
  };

  goToStep = activeStepIndex => {
    this.setState({ activeStepIndex }, () => {
      this.props.onStepChanges(activeStepIndex);
    });
  };

  reset = () => {
    this.setState(
      { activeStepIndex: this.props.initialActiveStepIndex },
      this.props.onReset
    );
  };

  render() {
    const { activeStepIndex } = this.state;
    const { children } = this.props;

    return (
      <StepperContext.Provider value={this.state}>
        {children({
          activeStepIndex,
          goToStep: this.goToStep,
          reset: this.reset,
        })}
      </StepperContext.Provider>
    );
  }
}
