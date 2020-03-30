import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import { useState, useEffect } from "react";
import { usePrevious, useUpdateEffect } from "react-use";

import { StyledEntriesDateTimeFilterDateTimeInput } from "./StyledEntriesDateTimeFilterDateTimeInput";
import { EntriesDateTimeFilterDateTimeInputLabel } from "./EntriesDateTimeFilterDateTimeInputLabel";
import { EntriesDateTimeFilterDateTimeInputInput } from "./EntriesDateTimeFilterDateTimeInputInput";

import { isEqual } from "lodash-es";
import { isValidDate } from "../../../../../utils/helpers";

function getDateFromDateTime(value) {
  return value ? dayjs(value).format("YYYY/MM/DD") : "";
}

function getTimeFromDateTime(value) {
  return value ? dayjs(value).format("HH:mm:ss") : "";
}

function EntriesDateTimeFilterDateTimeInput({
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
    <StyledEntriesDateTimeFilterDateTimeInput>
      {label && (
        <EntriesDateTimeFilterDateTimeInputLabel htmlFor={`${testId}-date`}>
          {label}
        </EntriesDateTimeFilterDateTimeInputLabel>
      )}
      <EntriesDateTimeFilterDateTimeInputInput
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
      <EntriesDateTimeFilterDateTimeInputInput
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
    </StyledEntriesDateTimeFilterDateTimeInput>
  );
}

EntriesDateTimeFilterDateTimeInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequied,
  onFocus: PropTypes.func.isRequied,
  "data-testid": PropTypes.string,
};

export { EntriesDateTimeFilterDateTimeInput };
