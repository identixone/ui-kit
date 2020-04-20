import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../../test/utils";

import { Button } from "../../Button";
import { Stepper } from "../index";

describe("Stepper tests", () => {
  const handleStepperResetMock = jest.fn();
  const onStepChangesMock = jest.fn();
  afterEach(() => {
    handleStepperResetMock.mockClear();
    onStepChangesMock.mockClear();
  });

  afterAll(() => {
    handleStepperResetMock.mockReset();
    onStepChangesMock.mockReset();
  });

  const steps = {
    step1: "step-1",
    step2: "step-2",
    step3: "step-3",
  };

  function getDefaultStepper() {
    return render(
      <Stepper
        initialActiveStepIndex={steps.step1}
        onReset={handleStepperResetMock}
        onStepChanges={onStepChangesMock}
      >
        {(stepperProps) => (
          <React.Fragment>
            <div data-testid="stepper-index">
              {stepperProps.activeStepIndex}
            </div>
            <Button
              data-testid="actions-button"
              size="large"
              onClick={() => {
                stepperProps.goToStep(steps.step2);
              }}
            >
              Next
            </Button>
          </React.Fragment>
        )}
      </Stepper>
    );
  }

  function renderStepper(props) {
    return getDefaultStepper(props);
  }

  test("Stepper content catch default step", () => {
    const { getByTestId } = renderStepper();
    expect(getByTestId("stepper-index")).toHaveTextContent(steps.step1);
  });

  test("Stepper content have changed state when click to change", () => {
    const { getByTestId } = renderStepper();
    fireEvent.click(getByTestId("actions-button"));
    expect(getByTestId("stepper-index")).toHaveTextContent(steps.step2);
  });
});
