import React, { useState } from "react";

import { FormMultiSelect } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

const options = generateOptions(5);

const componentName = "test-form-multi-select";
const optionSelector = 'li[role="option"]';
const tagSelector = 'li[role="tag"]';

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormMultiSelect(props) {
  function FormMultiSelectWrapper() {
    const [value, setValue] = useState([]);

    return (
      <form data-testid="test-form">
        <FormMultiSelect
          name={componentName}
          value={value}
          options={options}
          onChange={(ev) => {
            setValue(ev);
            onChangeMock(ev);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormMultiSelectWrapper />);
}

describe("FormMultiSelect tests", () => {
  test("FormMultiSelect menu should be visible after click on control", () => {
    const { getByTestId } = renderFormMultiSelect();

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${componentName}-input`));

    expect(getByTestId(`${componentName}-menu`)).toBeVisible();
  });

  test("FormMultiSelect menu should render correct number of options", () => {
    const { getByTestId } = renderFormMultiSelect();

    fireEvent.click(getByTestId(`${componentName}-input`));

    expect(
      getByTestId(`${componentName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormMultiSelect menu should be hidden after input blur", () => {
    const { getByTestId } = renderFormMultiSelect();

    fireEvent.click(getByTestId(`${componentName}-input`));
    fireEvent.blur(getByTestId(`${componentName}-input`));

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();
  });

  test("FormDropdown should render selected items correctly and call onChange prop", () => {
    const { getByTestId } = renderFormMultiSelect();
    const optionsToSelect = options.slice(0, 3);

    fireEvent.click(getByTestId(`${componentName}-input`));

    optionsToSelect.forEach((option) => {
      fireEvent.click(getByTestId(`${componentName}-option-${option.value}`));
    });

    optionsToSelect.forEach((option) => {
      expect(getByTestId(`${componentName}-tag-${option.value}`));
    });
    expect(
      getByTestId(`${componentName}-tags`).querySelectorAll(tagSelector)
    ).toHaveLength(3);
    expect(onChangeMock.mock.calls).toEqual([
      [[options[0]]],
      [[options[0], options[1]]],
      [[options[0], options[1], options[2]]],
    ]);
  });

  test("FormDropdown tag cross tag should remove selected items correctly and call onChange prop", () => {
    const { getByTestId } = renderFormMultiSelect();
    const optionsToSelect = options.slice(0, 3);

    fireEvent.click(getByTestId(`${componentName}-input`));

    optionsToSelect.forEach((option) => {
      fireEvent.click(getByTestId(`${componentName}-option-${option.value}`));
    });

    optionsToSelect.forEach((option) => {
      expect(getByTestId(`${componentName}-tag-${option.value}`));
    });

    fireEvent.click(
      getByTestId(`${componentName}-tag-${options[0].value}-cross`)
    );
    expect(
      getByTestId(`${componentName}-tags`).querySelectorAll(tagSelector)
    ).toHaveLength(2);
    expect(onChangeMock.mock.calls).toEqual([
      [[options[0]]],
      [[options[0], options[1]]],
      [[options[0], options[1], options[2]]],
      [[options[1], options[2]]],
    ]);
  });
});
