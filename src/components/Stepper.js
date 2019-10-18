import React, { useState } from "react";
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

function Stepper({ onStepChanges, onReset, initialActiveStepIndex, children }) {
  const [state, setState] = useState({
    activeStepIndex: initialActiveStepIndex,
  });

  function goToStep(activeStepIndex) {
    setState({ activeStepIndex });
    onStepChanges(activeStepIndex);
  }

  function reset() {
    setState({ activeStepIndex: initialActiveStepIndex }, onReset);
  }

  const { activeStepIndex } = state;

  return (
    <StepperContext.Provider value={state}>
      {children({
        activeStepIndex,
        goToStep: goToStep,
        reset: reset,
      })}
    </StepperContext.Provider>
  );
}

Stepper.propTypes = {
  onStepChanges: PropTypes.func,
  onReset: PropTypes.func,
  initialActiveStepIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  children: PropTypes.func,
};

Stepper.Step = withStepperContext(({ id, children, activeStepIndex }) => {
  return id === activeStepIndex ? children : null;
});
