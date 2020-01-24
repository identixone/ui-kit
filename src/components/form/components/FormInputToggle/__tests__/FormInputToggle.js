import React, { useState } from "react";

import { FormInputToggle } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";

const onChangeMock = jest.fn();
const onBlurMock = jest.fn();

const componentName = "test-form-input";

afterEach(() => {
  onChangeMock.mockClear();
  onBlurMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
  onBlurMock.mockReset();
});

function renderFormInputToggle(props) {
  function FormInputToggleWrapper() {
    const [value, setValue] = useState(null);

    return (
      <form data-testid="test-form">
        <FormInputToggle
          name={componentName}
          value={value}
          onChange={(...args) => {
            setValue(...args);
            onChangeMock(...args);
          }}
          onBlur={onBlurMock}
          {...props}
        />
      </form>
    );
  }

  return render(<FormInputToggleWrapper />);
}

describe("FormInputToggle tests", () => {
  test("FormInputToggle menu should be visible after click on control", () => {
    const { getByTestId } = renderFormInputToggle();

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${componentName}-control`));

    expect(getByTestId(`${componentName}-menu`)).toBeVisible();
  });
});
