import React from "react";

import { useState } from "react";

import { render } from "../../../../test/utils";
import { fireEvent } from "@testing-library/react";

import { DatePicker } from "../index.jsx";

import MockDate from "mockdate";

describe("DatePicker tests", () => {
  const onChangeMock = jest.fn();
  const onResetMock = jest.fn();
  const onStateChangeMock = jest.fn();

  beforeAll(() => {
    MockDate.set("2001-09-04");
  });
  afterEach(() => {
    onChangeMock.mockClear();
    onResetMock.mockClear();
    onStateChangeMock.mockClear();
  });
  afterAll(() => {
    onChangeMock.mockReset();
    onResetMock.mockReset();
    onStateChangeMock.mockReset();
    MockDate.reset();
  });

  const testId = "date-picker";
  function getComponentTestId(component) {
    return `${testId}-${component}`;
  }

  function DatePickerConsumer(props) {
    const [value, setValue] = useState([null, null]);

    const defaultProps = {
      valuesOnReset: [null, null],
      onReset: onResetMock,
      onStateChange: onStateChangeMock,
      initialDateFrom: null,
      initialDateTo: null,
      "data-testid": testId,
      value,
      onChange: (value) => {
        setValue(value);
        onChangeMock(value);
      },
    };

    return <DatePicker {...defaultProps} {...props} />;
  }

  function getDefaultDatePicker(props) {
    return render(<DatePickerConsumer {...props} />);
  }

  function renderDatePicker(props) {
    return getDefaultDatePicker(props);
  }

  test("DatePicker should open and close popup correctly", () => {
    const { getByTestId } = renderDatePicker();

    expect(getByTestId(getComponentTestId("popup"))).not.toBeVisible();

    fireEvent.click(getByTestId(getComponentTestId("control")));
    expect(getByTestId(getComponentTestId("popup"))).toBeVisible();

    fireEvent.click(getByTestId(getComponentTestId("control")));
    expect(getByTestId(getComponentTestId("popup"))).not.toBeVisible();
  });

  describe("DatePicker absolute", () => {
    function getDateToCompare(date) {
      /*
       * хак нужен из-за того, что react-datepicker не позволяет выставить utcOffset
       * (игнорирует проп)
       */
      const utcOffset = new Date().getTimezoneOffset();
      return new Date(new Date(date).getTime() + utcOffset * 60000);
    }

    test("DatePicker should call onChange correctly if last date is after first date", () => {
      const firstDate = getDateToCompare("2001-09-13T00:00:00.000Z");
      const lastDate = getDateToCompare("2001-09-18T00:00:00.000Z");
      const firstDateDay = "13";
      const lastDateDay = "18";
      const { getByText, getByTestId } = renderDatePicker();

      fireEvent.click(getByTestId(getComponentTestId("control")));
      fireEvent.click(getByText(firstDateDay));
      fireEvent.click(getByText(lastDateDay));
      fireEvent.click(getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([
        [[firstDate, null]],
        [[firstDate, lastDate]],
      ]);
    });

    test("DatePicker should call onChange correctly if last date is before first date", () => {
      const firstDate = getDateToCompare("2001-09-18T00:00:00.000Z");
      const lastDate = getDateToCompare("2001-09-13T00:00:00.000Z");
      const firstDateDay = "18";
      const lastDateDay = "13";
      const { getByText, getByTestId } = renderDatePicker();

      fireEvent.click(getByTestId(getComponentTestId("control")));
      fireEvent.click(getByText(firstDateDay));
      fireEvent.click(getByText(lastDateDay));
      fireEvent.click(getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([
        [[firstDate, null]],
        [[lastDate, firstDate]],
      ]);
    });

    test("DatePicker should set dateTo to next day after dateFrom after closing, if only dateFrom selected", () => {
      const dateFrom = getDateToCompare("2001-09-13T00:00:00.000Z");
      const dateTo = getDateToCompare("2001-09-14T00:00:00.000Z");
      const dateFromDay = "13";
      const { getByText, getByTestId } = renderDatePicker();

      fireEvent.click(getByTestId(getComponentTestId("control")));
      fireEvent.click(getByText(dateFromDay));
      onChangeMock.mockClear();

      fireEvent.click(getByTestId(getComponentTestId("control")));

      expect(onChangeMock.mock.calls).toEqual([[[dateFrom, dateTo]]]);
    });

    test("DatePicker should reset value to resetValues on reset click", () => {
      const valuesOnReset = [
        getDateToCompare("2001-09-13T00:00:00.000Z"),
        getDateToCompare("2001-09-14T00:00:00.000Z"),
      ];
      const dateFromDay = "15";
      const dateToDay = "18";
      const { getByText, getByTestId } = renderDatePicker({ valuesOnReset });

      fireEvent.click(getByTestId(getComponentTestId("control")));
      fireEvent.click(getByText(dateFromDay));
      fireEvent.click(getByText(dateToDay));
      onChangeMock.mockClear();

      fireEvent.click(getByTestId(getComponentTestId("reset")));

      expect(onChangeMock.mock.calls).toEqual([[valuesOnReset]]);
    });
  });

  describe("DatePicker relative", () => {
    test("DatePicker should call onChange correctly on relative select change", () => {
      const expectedValue = [
        new Date("2001-09-01T00:00:00.000Z"),
        new Date("2001-09-04T00:00:00.000Z"),
      ];
      const { getByTestId } = renderDatePicker();

      fireEvent.click(getByTestId(getComponentTestId("control")));
      fireEvent.click(getByTestId(getComponentTestId("relative")));
      fireEvent.click(getByTestId(getComponentTestId("relative-day-option-3")));

      expect(onChangeMock.mock.calls).toEqual([[expectedValue]]);
    });
  });
});
