import React, { useState } from "react";

import { FormCheckbox } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";

const formName = "test-form";
const componentName = "test-form-checkbox";

function renderFormCheckbox() {
  function FormCheckboxWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid={formName}>
        <FormCheckbox
          name={componentName}
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

    expect(getByTestId(formName)).toHaveFormValues({
      [componentName]: false,
    });

    fireEvent.click(getByTestId(componentName));

    expect(getByTestId(formName)).toHaveFormValues({
      [componentName]: true,
    });

    fireEvent.click(getByTestId(componentName));

    expect(getByTestId(formName)).toHaveFormValues({
      [componentName]: false,
    });
  });
});
