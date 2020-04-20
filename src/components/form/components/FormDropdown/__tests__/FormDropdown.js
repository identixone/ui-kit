import React, { useState } from "react";

import { FormDropdown } from "../index";

import { fireEvent } from "@testing-library/react";
import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";

const options = generateOptions(5);

const componentName = "test-form-dropdown";
const optionSelector = 'li[role="option"]';
const defaultOption = {
  label: "default",
  value: "some_default_value",
  default: true,
};
const singleOption = {
  label: "single",
  value: "some_single_value",
  single: true,
};

const onChangeMock = jest.fn();

afterEach(() => {
  onChangeMock.mockClear();
});

afterAll(() => {
  onChangeMock.mockReset();
});

function renderFormDropdown(props = {}) {
  function FormDropdownWrapper() {
    // eslint-disable-next-line react/prop-types
    const [value, setValue] = useState(props.multiple ? [] : null);

    return (
      <form data-testid="test-form">
        <FormDropdown
          name={componentName}
          options={options}
          value={value}
          onChange={(ev) => {
            setValue(ev);
            onChangeMock(ev);
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

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${componentName}-control`));

    expect(getByTestId(`${componentName}-menu`)).toBeVisible();
  });

  test("FormDropdown menu should not be visible after click on control if dropdown is disabled", () => {
    const { getByTestId } = renderFormDropdown({ disabled: true });

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();

    fireEvent.click(getByTestId(`${componentName}-control`));

    expect(getByTestId(`${componentName}-menu`)).not.toBeVisible();
  });

  test("FormDropdown menu should render correct number of options", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${componentName}-control`));

    expect(
      getByTestId(`${componentName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormDropdown control should render selected item correctly and call onChange prop", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${componentName}-control`));
    fireEvent.click(getByTestId(`${componentName}-option-${options[0].value}`));

    expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
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

    fireEvent.click(getByTestId(`${componentName}-control`));
    fireEvent.click(
      getByTestId(
        `${componentName}-option-${options[disabledOptionIndex].value}`
      )
    );

    expect(getByTestId(`${componentName}-control`)).not.toHaveTextContent(
      options[disabledOptionIndex].label
    );
  });

  test("FormDropdown menu should select option on keyboard arrow press", () => {
    const { getByTestId } = renderFormDropdown();

    fireEvent.click(getByTestId(`${componentName}-control`));

    fireEvent.keyDown(getByTestId(`${componentName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls[0][0]).toEqual(options[1]);
  });

  test("FormDropdown with search menu should not select option on keyboard arrow press", () => {
    const { getByTestId } = renderFormDropdown({ withSearch: true });

    fireEvent.click(getByTestId(`${componentName}-control`));

    fireEvent.keyDown(getByTestId(`${componentName}-control`), {
      key: "ArrowDown",
      code: 40,
    });

    expect(onChangeMock.mock.calls).toHaveLength(0);
  });

  test("FormDropdown search should search items correclty", () => {
    const { getByTestId } = renderFormDropdown({
      withSearch: true,
    });

    fireEvent.click(getByTestId(`${componentName}-control`));

    expect(
      getByTestId(`${componentName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);

    expect(getByTestId(`${componentName}-search`)).toBeVisible();

    fireEvent.change(getByTestId(`${componentName}-search`), {
      target: { value: options[0].label },
    });

    expect(
      getByTestId(`${componentName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(1);

    fireEvent.change(getByTestId(`${componentName}-search`), {
      target: { value: "" },
    });

    expect(
      getByTestId(`${componentName}-menu`).querySelectorAll(optionSelector)
    ).toHaveLength(options.length);
  });

  test("FormDropdown should set default option on initial render, if value is not setted", () => {
    const options = [defaultOption].concat(generateOptions(5));

    const { getByTestId } = renderFormDropdown({
      options,
    });

    expect(onChangeMock.mock.calls[0][0]).toEqual(defaultOption);
    expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
      defaultOption.label
    );
  });

  test("FormDropdown should not set default option on initial render, if value is not setted", () => {
    const options = [defaultOption].concat(generateOptions(5));

    const { getByTestId } = renderFormDropdown({
      options,
      value: options[1],
    });

    expect(onChangeMock.mock.calls).toHaveLength(0);
    expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
      options[1].label
    );
  });

  describe("FormDropdown multiple", () => {
    test("FormDropdown multiple should correctly handle multiple values", () => {
      const { getByTestId } = renderFormDropdown({
        multiple: true,
      });

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[0].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[4].value}`)
      );

      expect(onChangeMock.mock.calls[0][0]).toEqual([options[0]]);
      expect(onChangeMock.mock.calls[1][0]).toEqual([options[0], options[3]]);
      expect(onChangeMock.mock.calls[2][0]).toEqual([
        options[0],
        options[3],
        options[4],
      ]);
    });

    test("FormDropdown multiple should remove all selected options after single option was selected", () => {
      const options = [singleOption].concat(generateOptions(5));

      const { getByTestId } = renderFormDropdown({
        multiple: true,
        options,
      });

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      fireEvent.click(
        getByTestId(`${componentName}-option-${singleOption.value}`)
      );
      expect(onChangeMock.mock.calls[0][0]).toEqual([singleOption]);
    });

    test("FormDropdown multiple should render reset button and hide it if non items selected", () => {
      const { getByTestId, queryByTestId } = renderFormDropdown({
        multiple: true,
      });

      expect(queryByTestId(`${componentName}-reset`)).not.toBeInTheDocument();

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );

      expect(queryByTestId(`${componentName}-reset`)).toBeInTheDocument();

      fireEvent.click(queryByTestId(`${componentName}-reset`));

      expect(queryByTestId(`${componentName}-reset`)).not.toBeInTheDocument();
    });

    test("FormDropdown multiple should reset selected to empty if non default option after reset button click", () => {
      const placeholder = "select smth";
      const { getByTestId } = renderFormDropdown({
        multiple: true,
        placeholder,
      });

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      fireEvent.click(getByTestId(`${componentName}-reset`));

      expect(onChangeMock.mock.calls[0][0]).toEqual([]);
      expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
        placeholder
      );
    });

    test("FormDropdown multiple should reset selected to default after reset button click", () => {
      const options = [defaultOption].concat(generateOptions(5));

      const { getByTestId } = renderFormDropdown({
        multiple: true,
        options,
      });

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[4].value}`)
      );
      onChangeMock.mockClear();
      fireEvent.click(getByTestId(`${componentName}-reset`));

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown multiple should reset selected to default after user unselects all items", () => {
      const options = [defaultOption].concat(generateOptions(5));

      const { getByTestId } = renderFormDropdown({
        multiple: true,
        options,
      });

      fireEvent.click(getByTestId(`${componentName}-control`));
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[1].value}`)
      );
      onChangeMock.mockClear();
      fireEvent.click(
        getByTestId(`${componentName}-option-${options[3].value}`)
      );

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown multiple should set default option on initial render, if value is not setted", () => {
      const options = [defaultOption].concat(generateOptions(5));

      const { getByTestId } = renderFormDropdown({
        options,
        multiple: true,
      });

      expect(onChangeMock.mock.calls[0][0]).toEqual([defaultOption]);
      expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
        defaultOption.label
      );
    });

    test("FormDropdown should not set default option on initial render, if value is not setted", () => {
      const options = [defaultOption].concat(generateOptions(5));

      const { getByTestId } = renderFormDropdown({
        options,
        multiple: true,
        value: [options[1]],
      });

      expect(onChangeMock.mock.calls).toHaveLength(0);
      expect(getByTestId(`${componentName}-control`)).toHaveTextContent(
        options[1].label
      );
    });
  });
});
