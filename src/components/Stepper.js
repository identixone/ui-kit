import React, { useState, useEffect } from "react";
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
  const [activeStepIndex, setActiveStepIndex] = useState(
    initialActiveStepIndex
  );

  function goToStep(activeStepIndex) {
    setActiveStepIndex(activeStepIndex);
    onStepChanges(activeStepIndex);
  }

  function reset() {
    setActiveStepIndex(initialActiveStepIndex);
    onReset();
  }

  useEffect(() => {
    onStepChanges(activeStepIndex);
  }, [activeStepIndex]);

  return (
    <StepperContext.Provider value={activeStepIndex}>
      {children({
        activeStepIndex,
        goToStep,
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

Stepper.defaultProps = {
  onStepChanges: () => {},
  onReset: () => {},
  initialActiveStepIndex: 1,
};

Stepper.Step = withStepperContext(({ id, children, activeStepIndex }) => {
  return id === activeStepIndex ? children : null;
});

export { Stepper };
