import React, { useState } from "react";

import { FormCheckboxGroup } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

const options = generateOptions(3);

function renderFormCheckboxGroup() {
  function FormCheckboxGroupWrapper() {
    const [checked, setChecked] = useState([]);

    return (
      <form data-testid="test-form">
        <FormCheckboxGroup
          groupName="test-group"
          options={options}
          value={checked}
          onChange={setChecked}
          render={({ checkboxes, ...selectableProps }) => (
            <div>
              <FormCheckboxGroup.Item
                name="test-group-select-all"
                data-testid="test-group-select-all"
                checked={selectableProps.isAllSelected}
                onChange={({ target }) => {
                  if (target.checked) {
                    selectableProps.selectAll();
                  } else {
                    selectableProps.deselectAll();
                  }
                }}
              />
              <FormCheckboxGroup.Item
                name="test-group-deselect-all"
                data-testid="test-group-deselect-all"
                checked={selectableProps.isAllDeselected}
                onChange={({ target }) => {
                  if (!target.checked) {
                    selectableProps.selectAll();
                  } else {
                    selectableProps.deselectAll();
                  }
                }}
              />
              {checkboxes()}
            </div>
          )}
        />
      </form>
    );
  }

  return render(<FormCheckboxGroupWrapper />);
}

describe("FormCheckboxGroup tests", () => {
  test("FormCheckboxGroup should change checked state by click", () => {
    const { getByTestId } = renderFormCheckboxGroup();

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": false,
      "test-group-deselect-all": true,
      "1": false,
      "2": false,
      "3": false,
    });

    fireEvent.click(getByTestId("test-group-1"));
    fireEvent.click(getByTestId("test-group-2"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": false,
      "test-group-deselect-all": false,
      "1": true,
      "2": true,
      "3": false,
    });

    fireEvent.click(getByTestId("test-group-1"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": false,
      "test-group-deselect-all": false,
      "1": false,
      "2": true,
      "3": false,
    });

    // Select all
    fireEvent.click(getByTestId("test-group-select-all"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": true,
      "test-group-deselect-all": false,
      "1": true,
      "2": true,
      "3": true,
    });

    fireEvent.click(getByTestId("test-group-select-all"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": false,
      "test-group-deselect-all": true,
      "1": false,
      "2": false,
      "3": false,
    });

    // Deselect all
    fireEvent.click(getByTestId("test-group-1"));
    fireEvent.click(getByTestId("test-group-deselect-all"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": false,
      "test-group-deselect-all": true,
      "1": false,
      "2": false,
      "3": false,
    });

    fireEvent.click(getByTestId("test-group-select-all"));

    expect(getByTestId("test-form")).toHaveFormValues({
      "test-group-select-all": true,
      "test-group-deselect-all": false,
      "1": true,
      "2": true,
      "3": true,
    });
  });
});
