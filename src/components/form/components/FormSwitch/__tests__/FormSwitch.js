import React, { useState } from "react";

import { FormSwitch } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";

const componentName = "test-form-switch";
const formName = "test-form";

function renderFormSwitch(props) {
  function FormSwitchWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid={formName}>
        <FormSwitch
          name={componentName}
          checked={checked}
          onChange={({ target: { checked } }) => {
            setChecked(checked);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormSwitchWrapper />);
}

describe("FormSwitch tests", () => {
  test("FormSwitch should change value correctly", () => {
    const { getByTestId } = renderFormSwitch();

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
