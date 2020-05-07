import React from "react";
import PropTypes from "prop-types";

import { useState, useContext } from "react";
import { DatePickerContext } from "../../index";
import { useUpdateEffect } from "react-use";

import { DatePickerRelativePickerSelect } from "./DatePickerRelativePickerSelect";

import dayjs from "dayjs";

const rangeMinute = [5, 10, 15, 20, 30];
const rangeHour = [1, 2, 4, 6, 8];
const rangeDay = [1, 2, 3];
const rangeWeek = [1, 2, 3, 4];
const rangeMonth = [1, 2, 3, 4];
const rangeYear = [1, 2];

function getSelectedFromValue(type, range, value, currentDate) {
  const diff = dayjs(currentDate).diff(value[0], type);

  if (range.includes(diff)) {
    return { type: type, value: diff };
  }
}

function getInitialSelected(value, currentDate) {
  if (
    dayjs(value[1]).day() !== dayjs(currentDate).day() ||
    (!value[0] && !value[1])
  )
    return {};

  const selectedMinute = getSelectedFromValue(
    "minute",
    rangeMinute,
    value,
    currentDate
  );
  if (selectedMinute) {
    return selectedMinute;
  }

  const selectedHour = getSelectedFromValue(
    "hour",
    rangeHour,
    value,
    currentDate
  );
  if (selectedHour) {
    return selectedHour;
  }

  const selectedDay = getSelectedFromValue("day", rangeDay, value, currentDate);
  if (selectedDay) {
    return selectedDay;
  }

  const selectedWeek = getSelectedFromValue(
    "week",
    rangeWeek,
    value,
    currentDate
  );
  if (selectedWeek) {
    return selectedWeek;
  }

  const selectedMonth = getSelectedFromValue(
    "month",
    rangeMonth,
    value,
    currentDate
  );
  if (selectedMonth) {
    return selectedMonth;
  }

  const selectedYear = getSelectedFromValue(
    "year",
    rangeYear,
    value,
    currentDate
  );
  if (selectedYear) {
    return selectedYear;
  }

  return {};
}

function DatePickerRelativePicker({ value, onChange }) {
  const { initialDateTo: currentDate, testId } = useContext(DatePickerContext);
  const [selected, setSelected] = useState(
    getInitialSelected(value, currentDate)
  );

  useUpdateEffect(() => {
    const currentDateObj = currentDate ? dayjs(currentDate) : dayjs();

    onChange([
      currentDateObj.subtract(selected.value, selected.type).toDate(),
      currentDateObj.toDate(),
    ]);
  }, [selected]);

  function handleSelectChange(type) {
    return function (value) {
      setSelected({
        type,
        value,
      });
    };
  }

  return (
    <>
      <DatePickerRelativePickerSelect
        label="Minutes"
        value={selected.type === "minute" ? selected.value : null}
        range={rangeMinute}
        onChange={handleSelectChange("minute")}
        data-testid={`${testId}-relative-minute`}
      />
      <DatePickerRelativePickerSelect
        label="Hours"
        value={selected.type === "hour" ? selected.value : null}
        range={rangeHour}
        onChange={handleSelectChange("hour")}
        data-testid={`${testId}-relative-hour`}
      />
      <DatePickerRelativePickerSelect
        label="Days"
        value={selected.type === "day" ? selected.value : null}
        range={rangeDay}
        onChange={handleSelectChange("day")}
        data-testid={`${testId}-relative-day`}
      />
      <DatePickerRelativePickerSelect
        label="Weeks"
        value={selected.type === "week" ? selected.value : null}
        range={rangeWeek}
        onChange={handleSelectChange("week")}
        data-testid={`${testId}-relative-week`}
      />
      <DatePickerRelativePickerSelect
        label="Months"
        value={selected.type === "month" ? selected.value : null}
        range={rangeMonth}
        onChange={handleSelectChange("month")}
        data-testid={`${testId}-relative-month`}
      />
      <DatePickerRelativePickerSelect
        label="Years"
        value={selected.type === "year" ? selected.value : null}
        range={rangeYear}
        onChange={handleSelectChange("year")}
        data-testid={`${testId}-relative-year`}
      />
    </>
  );
}

DatePickerRelativePicker.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { DatePickerRelativePicker };
