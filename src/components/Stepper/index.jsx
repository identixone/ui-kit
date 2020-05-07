import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { noop } from "lodash-es";

const StepperContext = React.createContext({
  activeStepIndex: null,
  goToStep: noop,
  reset: noop,
});

const withStepperContext = (WrappedComponent) => {
  const WithStepperContext = (props) => {
    return (
      <StepperContext.Consumer>
        {(context) => <WrappedComponent {...context} {...props} />}
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

  const sharedState = { activeStepIndex, goToStep, reset };

  return (
    <StepperContext.Provider value={sharedState}>
      {children(sharedState)}
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
  onStepChanges: noop,
  onReset: noop,
  initialActiveStepIndex: 1,
};

Stepper.Step = withStepperContext(({ id, children, activeStepIndex }) => {
  return id === activeStepIndex ? children : null;
});

export { Stepper, StepperContext, withStepperContext };
