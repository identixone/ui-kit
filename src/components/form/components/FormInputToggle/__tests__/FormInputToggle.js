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
          onChange={ev => {
            setValue(ev.target.value);
            onChangeMock(ev);
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
  test("FormInputToggle should hide button and render input on click", () => {
    const { queryByTestId, getByTestId } = renderFormInputToggle();

    expect(queryByTestId(`${componentName}-input`)).not.toBeInTheDocument();
    expect(queryByTestId(`${componentName}-button`)).toBeInTheDocument();

    fireEvent.click(getByTestId(componentName));

    expect(queryByTestId(`${componentName}-input`)).toBeInTheDocument();
    expect(queryByTestId(`${componentName}-button`)).not.toBeInTheDocument();
  });

  test("FormInputToggle should focus on input after render it", () => {
    const { queryByTestId, getByTestId } = renderFormInputToggle();

    fireEvent.click(getByTestId(componentName));

    expect(queryByTestId(`${componentName}-input`)).toHaveFocus();
  });

  test("FormInputToggle should not hide input and render button on click inside", () => {
    const { queryByTestId, getByTestId } = renderFormInputToggle();

    fireEvent.click(getByTestId(componentName));
    fireEvent.click(getByTestId(componentName));

    expect(queryByTestId(`${componentName}-input`)).toBeInTheDocument();
    expect(queryByTestId(`${componentName}-button`)).not.toBeInTheDocument();
  });

  test("FormInputToggle should change input value correctly", () => {
    const { queryByTestId, getByTestId } = renderFormInputToggle();

    fireEvent.click(getByTestId(componentName));
    fireEvent.change(getByTestId(`${componentName}-input`), {
      target: { value: "jane_doe" },
    });

    expect(queryByTestId(`${componentName}-input`)).toBeInTheDocument();
    expect(queryByTestId(`${componentName}-button`)).not.toBeInTheDocument();

    fireEvent.blur(getByTestId(`${componentName}-input`));

    expect(queryByTestId(`${componentName}-button`)).toHaveTextContent(
      "jane_doe"
    );
    expect(onChangeMock.mock.calls).toHaveLength(1);
  });

  test("FormInputToggle should call onBlur callback correctly", () => {
    const { getByTestId } = renderFormInputToggle();

    fireEvent.click(getByTestId(componentName));
    fireEvent.blur(getByTestId(`${componentName}-input`));

    expect(onBlurMock.mock.calls).toHaveLength(1);
  });

  test("FormInputToggle should hide input and render button on click outside", () => {
    const { queryByTestId, getByTestId } = renderFormInputToggle();

    fireEvent.click(getByTestId(componentName));
    fireEvent.blur(getByTestId(`${componentName}-input`));

    expect(queryByTestId(`${componentName}-input`)).not.toBeInTheDocument();
    expect(queryByTestId(`${componentName}-button`)).toBeInTheDocument();
  });
});
