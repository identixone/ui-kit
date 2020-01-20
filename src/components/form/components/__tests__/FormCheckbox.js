import React, { useState } from "react";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../test/utils";

import { FormCheckbox } from "../FormCheckbox";

function renderFormCheckbox() {
  function FormCheckboxWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid="test-form">
        <FormCheckbox
          name="test-form-checkbox"
          checked={checked}
          onChange={({ target: { checked } }) => setChecked(checked)}
        />
      </form>
    );
  }

  return render(<FormCheckboxWrapper />);
}

describe("FormCheckbox tests", () => {
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
