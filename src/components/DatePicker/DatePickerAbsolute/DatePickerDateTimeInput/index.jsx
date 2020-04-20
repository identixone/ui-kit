import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import { useState, useEffect } from "react";
import { usePrevious, useUpdateEffect } from "react-use";

import { StyledDatePickerDateTimeInput } from "./StyledDatePickerDateTimeInput";
import { DatePickerDateTimeInputLabel } from "./DatePickerDateTimeInputLabel";
import { DatePickerDateTimeInputInput } from "./DatePickerDateTimeInputInput";

import { isEqual } from "lodash-es";
import { isValidDate } from "../../../../utils/helpers";

function getDateFromDateTime(value) {
  return value ? dayjs(value).format("YYYY/MM/DD") : "";
}

function getTimeFromDateTime(value) {
  return value ? dayjs(value).format("HH:mm:ss") : "";
}

function DatePickerDateTimeInput({
  value,
  onChange,
  onFocus,
  label,
  "data-testid": testId,
}) {
  const [dateValue, setDateValue] = useState(getDateFromDateTime(value));
  const prevDateValue = usePrevious(dateValue);
  const [timeValue, setTimeValue] = useState(getTimeFromDateTime(value));
  const prevTimeValue = usePrevious(timeValue);
  const prevValue = usePrevious(value);

  useUpdateEffect(() => {
    const dateTimeFormat = "YYYY/MM/DD, HH:mm:ss";

    if (dateValue !== prevDateValue || timeValue !== prevTimeValue) {
      if (
        isValidDate(`${dateValue}, ${timeValue}`, dateTimeFormat) &&
        dayjs(`${dateValue}, ${timeValue}`).format(dateTimeFormat) !==
          dayjs(value).format(dateTimeFormat)
      ) {
        onChange(new Date(`${dateValue}, ${timeValue}`));
      }

      if (!dateValue) {
        onChange(null);
      }
    }
  }, [dateValue, timeValue]);

  useEffect(() => {
    if (isValidDate(dateValue, "YYYY/MM/DD") && !timeValue) {
      setTimeValue("00:00:00");
    }
  }, [dateValue]);

  useEffect(() => {
    if (!isEqual(value, prevValue)) {
      setDateValue(getDateFromDateTime(value));
      setTimeValue(getTimeFromDateTime(value));
    }
  }, [value]);

  return (
    <StyledDatePickerDateTimeInput>
      {label && (
        <DatePickerDateTimeInputLabel htmlFor={`${testId}-date`}>
          {label}
        </DatePickerDateTimeInputLabel>
      )}
      <DatePickerDateTimeInputInput
        value={dateValue}
        onChange={({ target: { value } }) => {
          setDateValue(value);
        }}
        onFocus={onFocus}
        onBlur={({ target: { value: inputValue } }) => {
          if (!isValidDate(inputValue, "YYYY/MM/DD")) {
            setDateValue(getDateFromDateTime(value));
          }
        }}
        placeholder="YYYY/MM/DD"
        id={`${testId}-date`}
        data-testid={`${testId}-date`}
        width={107}
      />
      <DatePickerDateTimeInputInput
        value={timeValue}
        onChange={({ target: { value } }) => {
          setTimeValue(value);
        }}
        onFocus={onFocus}
        onBlur={({ target: { value: inputValue } }) => {
          if (!inputValue && dateValue) {
            setTimeValue("00:00:00");
            return;
          }

          if (!isValidDate(inputValue, "HH:mm:ss")) {
            setTimeValue(getTimeFromDateTime(value));
          }
        }}
        placeholder="hh:mm:ss"
        data-testid={`${testId}-time`}
        width={88}
      />
    </StyledDatePickerDateTimeInput>
  );
}

DatePickerDateTimeInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
};

export { DatePickerDateTimeInput };
