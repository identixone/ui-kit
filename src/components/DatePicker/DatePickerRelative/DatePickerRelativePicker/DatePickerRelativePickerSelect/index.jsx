import React from "react";
import PropTypes from "prop-types";

import { StyledDatePickerRelativePickerSelect } from "./StyledDatePickerRelativePickerSelect";
import { DatePickerRelativePickerSelectLabel } from "./DatePickerRelativePickerSelectLabel";
import { DatePickerRelativePickerSelectOption } from "./DatePickerRelativePickerSelectOption";

function DatePickerRelativePickerSelect({
  label,
  range,
  value,
  onChange,
  "data-testid": testId,
}) {
  return (
    <StyledDatePickerRelativePickerSelect data-testid={testId}>
      {label && (
        <DatePickerRelativePickerSelectLabel
          htmlFor={`${testId}`}
          data-testid={`${testId}-label`}
        >
          {label}
        </DatePickerRelativePickerSelectLabel>
      )}
      {range.map((option) => (
        <DatePickerRelativePickerSelectOption
          key={option}
          isSelected={option === value}
          onClick={() => onChange(option)}
          data-testid={`${testId}-option-${option}`}
        >
          {option}
        </DatePickerRelativePickerSelectOption>
      ))}
    </StyledDatePickerRelativePickerSelect>
  );
}

DatePickerRelativePickerSelect.defaultProps = {
  range: [],
};

DatePickerRelativePickerSelect.propTypes = {
  label: PropTypes.string,
  range: PropTypes.array.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
};

export { DatePickerRelativePickerSelect };
