import React, { useState } from "react";

import { FormSwitch } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";

const componentName = "test-form-switch";

function renderFormSwitch(props) {
  function FormSwitchWrapper() {
    const [checked, setChecked] = useState(false);

    return (
      <form data-testid="test-form">
        <FormSwitch
          name="test-form-switch"
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

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-switch": false,
    });

    fireEvent.click(getByTestId(componentName));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-switch": true,
    });

    fireEvent.click(getByTestId(componentName));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-form-switch": false,
    });
  });
});
