import React from "react";
import PropTypes from "prop-types";

import { StyledFormCheckbox } from "./StyledFormCheckbox";
import { FormCheckboxFlag } from "./FormCheckboxFlag";
import { FormCheckboxInput } from "./FormCheckboxInput";

import { getTestId } from "../../utils";

function FormCheckbox({
  checked,
  onChange,
  onBlur,
  name,
  disabled,
  checkboxTheme,
  size,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

  return (
    <StyledFormCheckbox
      disabled={disabled}
      htmlFor={name}
      checkboxTheme={checkboxTheme}
      size={size}
      className={className}
      data-testid={testId}
    >
      <FormCheckboxFlag checked={checked} />
      <FormCheckboxInput
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        data-testid={`${testId}-checkbox`}
      />
    </StyledFormCheckbox>
  );
}

FormCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  checkboxTheme: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormCheckbox.defaultProps = {
  checkboxTheme: "light",
  size: "small",
};

export { FormCheckbox, StyledFormCheckbox };
