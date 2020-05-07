import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect, useContext } from "react";

import DatePicker from "react-datepicker";
import { DatePickerDateTimeInputs } from "../DatePickerDateTimeInputs";
import { DatePickerDateTimeInput } from "../DatePickerDateTimeInput";
import { DatePickerContext } from "../../index";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isToday from "dayjs/plugin/isToday";
import { registerLocale } from "react-datepicker";
import enGb from "date-fns/locale/en-GB";
import "./styles.css";

registerLocale("en-GB", enGb);
dayjs.extend(isSameOrAfter);
dayjs.extend(isToday);

function DatePickerDateTimePicker({ value, onChange }) {
  const [selectionComplete, toggleSelectionComplete] = useState(
    value[0] && value[1]
  );
  const { setError, initialDateFrom, initialDateTo, testId } = useContext(
    DatePickerContext
  );

  useEffect(() => {
    const currentDate = new Date().toISOString();

    if (selectionComplete) {
      if (dayjs(value[0]).isAfter(value[1])) {
        onChange([value[1], value[0]]);
        return;
      }
    }

    if (
      value[0] &&
      initialDateFrom &&
      dayjs(value[0]).isBefore(initialDateFrom)
    ) {
      onChange([dayjs(initialDateFrom).toDate(), value[1]]);

      setError(
        `Dates before ${dayjs(initialDateFrom).year()} are not supported.`
      );

      return;
    }

    if (value[1] && initialDateTo && dayjs(value[1]).isAfter(initialDateTo)) {
      onChange([value[0], dayjs(currentDate).toDate()]);

      setError(
        `Dates after ${
          dayjs(initialDateTo).isToday() ? "today" : initialDateTo
        } are not supported.`
      );

      return;
    }
  }, [value, onChange, selectionComplete]);

  useEffect(() => {
    if (value[0] && value[1] && !selectionComplete) {
      toggleSelectionComplete(true);
    }
    if (!value[0] || (!value[1] && selectionComplete)) {
      toggleSelectionComplete(false);
    }
  }, [value, selectionComplete]);

  const handleDateChange = (date) => {
    setError(null);

    if (!selectionComplete && !value[0]) {
      date.setHours(0, 0, 0, 0);

      onChange([date, value[1]]);
      return;
    }

    if (!selectionComplete && value[0] && !value[1]) {
      if (dayjs(value[0]).isAfter(date)) {
        onChange([date, value[0]]);
        return;
      }

      onChange([value[0], date]);
      return;
    }

    if (selectionComplete && value[0] && value[1]) {
      date.setHours(0, 0, 0, 0);

      onChange([date, undefined]);
      toggleSelectionComplete(false);
      return;
    }
  };

  const handleSelect = (date) => {
    if (
      !selectionComplete &&
      value[0] &&
      !value[1] &&
      sameDay(date, value[0])
    ) {
      if (
        initialDateTo &&
        dayjs(initialDateTo).isToday() &&
        dayjs(date).isToday()
      ) {
        handleDateChange(new Date());
      } else {
        date.setHours(23, 59, 59, 999);
        handleDateChange(date);
      }
    }
  };

  const sameDay = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  return (
    <>
      <DatePicker
        selected={value[0] || value[1]}
        onChange={handleDateChange}
        onSelect={handleSelect}
        startDate={value[0] || value[1]}
        endDate={value[1] || value[0]}
        selectsStart={!selectionComplete}
        selectsEnd={!selectionComplete}
        locale="en-GB"
        inline={true}
        openToDate={value[1]}
        minDate={initialDateFrom ? new Date(initialDateFrom) : undefined}
        maxDate={initialDateTo ? new Date(initialDateTo) : undefined}
      />
      <DatePickerDateTimeInputs>
        <DatePickerDateTimeInput
          label="From"
          value={value[0]}
          onChange={(date) => {
            onChange([date, value[1]]);
          }}
          onFocus={() => {
            setError(null);
          }}
          data-testid={`${testId}-from`}
        />
        <DatePickerDateTimeInput
          label="To"
          value={value[1]}
          onChange={(date) => {
            onChange([value[0], date]);
          }}
          onFocus={() => {
            setError(null);
          }}
          data-testid={`${testId}-to`}
        />
      </DatePickerDateTimeInputs>
    </>
  );
}

DatePickerDateTimePicker.defaultProps = {
  value: [],
};

DatePickerDateTimePicker.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { DatePickerDateTimePicker };
