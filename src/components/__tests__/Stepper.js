import React from "react";
import { fireEvent } from "@testing-library/react";

import { render } from "../../../test/utils";
import { Button } from "../Button/index.jsx";
import { Stepper } from "../Stepper.js";

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
    getWebcamPhoto: "get-webcam-photo",
    uploadPhoto: "upload-photo",
    selectIdType: "select-id-type",
    compare: "compare",
    compareResult: "compare-result",
    verifyResult: "verify-result",
  };

  function getDefaultStepper() {
    return render(
      <Stepper
        initialActiveStepIndex={steps.uploadPhoto}
        onReset={handleStepperResetMock}
        onStepChanges={onStepChangesMock}
      >
        {stepperProps => (
          <React.Fragment>
            <div data-testid="stepper-index">
              {stepperProps.activeStepIndex}
            </div>
            <Button
              data-testid="actions-button"
              size="large"
              onClick={() => {
                stepperProps.goToStep(steps.compare);
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
    expect(getByTestId("stepper-index")).toHaveTextContent(steps.uploadPhoto);
  });

  test("Stepper content have changed state when click to change", () => {
    const { getByTestId } = renderStepper();
    fireEvent.click(getByTestId("actions-button"));
    expect(getByTestId("stepper-index")).toHaveTextContent(steps.compare);
  });
});
