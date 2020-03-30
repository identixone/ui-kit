import React from "react";
import PropTypes from "prop-types";

import { StyledEntriesDateTimeFilterRelativePickerSelect } from "./StyledEntriesDateTimeFilterRelativePickerSelect";
import { EntriesDateTimeFilterRelativePickerSelectLabel } from "./EntriesDateTimeFilterRelativePickerSelectLabel";
import { EntriesDateTimeFilterRelativePickerSelectOption } from "./EntriesDateTimeFilterRelativePickerSelectOption";

function EntriesDateTimeFilterRelativePickerSelect({
  label,
  range,
  value,
  onChange,
  "data-testid": testId,
}) {
  return (
    <StyledEntriesDateTimeFilterRelativePickerSelect data-testid={testId}>
      {label && (
        <EntriesDateTimeFilterRelativePickerSelectLabel
          htmlFor={`${testId}`}
          data-testid={`${testId}-label`}
        >
          {label}
        </EntriesDateTimeFilterRelativePickerSelectLabel>
      )}
      {range.map(option => (
        <EntriesDateTimeFilterRelativePickerSelectOption
          key={option}
          isSelected={option === value}
          onClick={() => onChange(option)}
          data-testid={`${testId}-option-${option}`}
        >
          {option}
        </EntriesDateTimeFilterRelativePickerSelectOption>
      ))}
    </StyledEntriesDateTimeFilterRelativePickerSelect>
  );
}

EntriesDateTimeFilterRelativePickerSelect.defaultProps = {
  range: [],
};

EntriesDateTimeFilterRelativePickerSelect.propTypes = {
  label: PropTypes.string,
  range: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
};

export { EntriesDateTimeFilterRelativePickerSelect };
