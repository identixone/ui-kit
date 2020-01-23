import React, { useState } from "react";

import { FormDropdown } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

const options = generateOptions(5);

const dropdownName = "test-form-dropdown";
const optionSelector = 'li[role="option"]';

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormDropdown(props) {
  function FormDropdownWrapper() {
    const [value, setValue] = useState(null);

    return (
      <form data-testid="test-form">
        <FormDropdown
          name={dropdownName}
          options={options}
          value={value}
          onChange={(...args) => {
            setValue(...args);
            onChangeMock(...args);
          }}
          {...props}
        />
      </form>
    );
  }

  return render(<FormDropdownWrapper />);
}

describe("FormDropdown tests", () => {
  test("FormDropdown menu should be visible after click on control", () => {
    const { getByTestId } = renderFormDropdown();

    expect(getByTestId(`${dropdownName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    expect(getByTestId(`${dropdownName}-menu`)).toBeVisible();
  });

  test("FormDropdown menu should not be visible after click on control if dropdown is disabled", () => {
    const { getByTestId } = renderFormDropdown({ disabled: true });

    expect(getByTestId(`${dropdownName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    expect(getByTestId(`${dropdownName}-menu`)).not.toBeVisible();
  });

  test("FormDropdown menu should render correct number of options", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    expect(
      getByTestId(`${dropdownName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormDropdown control should render selected item correctly and change onChange prop", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${dropdownName}-control`));
    fireEvent.click(getByTestId(`${dropdownName}-${options[0].value}`));

    expect(getByTestId(`${dropdownName}-control`)).toHaveTextContent(
      options[0].label
    );

    expect(onChangeMock.mock.calls[0][0]).toEqual(options[0]);
  });

  test("FormDropdown should ignore disabled options select", () => {
    const disabledOptionIndex = 2;
    const { getByTestId } = renderFormDropdown({
      options: options.map((o, i) =>
        i === disabledOptionIndex ? { ...o, disabled: true } : o
      ),
    });

    fireEvent.click(getByTestId(`${dropdownName}-control`));
    fireEvent.click(
      getByTestId(`${dropdownName}-${options[disabledOptionIndex].value}`)
    );

    expect(getByTestId(`${dropdownName}-control`)).not.toHaveTextContent(
      options[disabledOptionIndex].label
    );
  });

  test("FormDropdown menu should select option on keyboard arrow press", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    fireEvent.keyDown(getByTestId(`${dropdownName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls[0][0]).toEqual(options[1]);
  });

  test("FormDropdown with search menu should not select option on keyboard arrow press", () => {
    const { getByTestId } = renderFormDropdown({ withSearch: true });

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    fireEvent.keyDown(getByTestId(`${dropdownName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls).toHaveLength(0);
  });

  test("FormDropdown search should search items correclty", () => {
    const { getByTestId } = renderFormDropdown({
      withSearch: true,
    });

    fireEvent.click(getByTestId(`${dropdownName}-control`));

    expect(
      getByTestId(`${dropdownName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);

    expect(getByTestId(`${dropdownName}-search`)).toBeVisible();

    fireEvent.change(getByTestId(`${dropdownName}-search`), {
      target: { value: options[0].label },
    });

    expect(
      getByTestId(`${dropdownName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(1);

    fireEvent.change(getByTestId(`${dropdownName}-search`), {
      target: { value: "" },
    });

    expect(
      getByTestId(`${dropdownName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });
});
