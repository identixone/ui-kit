import React, { useState } from "react";

import { FormDropdown } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../test/utils";
import { generateOptions } from "../../../../../test/generate";

const options = generateOptions(5);

function renderFormDropdown() {
  function FormDropdownWrapper() {
    const [value, setValue] = useState(false);

    return (
      <form data-testid="test-form">
        <FormDropdown
          name="test-form-dropdown"
          value={value}
          onChange={setValue}
          options={options}
        />
      </form>
    );
  }

  return render(<FormDropdownWrapper />);
}

describe("FormDropdown tests", () => {
  test("FormDropdown should change checked state by click", () => {
    const { getByTestId } = renderFormDropdown();

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
