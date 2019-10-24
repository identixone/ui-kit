import React from "react";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../test/utils";

import { FormCheckbox } from "../FormCheckbox";

describe("FormCheckbox tests", () => {
  function renderFormCheckbox() {
    class FormCheckboxWrapper extends React.Component {
      state = {
        value: false,
      };

      handleChange = ({ target: { checked } }) => {
        this.setState({ value: checked });
      };

      render() {
        return (
          <form data-testid="test-form">
            <FormCheckbox
              name="test-form-checkbox"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        );
      }
    }

    return render(<FormCheckboxWrapper />);
  }

  test("FormCheckbox should change checked state by click", () => {
    const { getByTestId } = renderFormCheckbox();

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-checkbox": false,
    });

    fireEvent.click(getByTestId("test-form-checkbox"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-checkbox": true,
    });

    fireEvent.click(getByTestId("test-form-checkbox"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-checkbox": false,
    });
  });
});
