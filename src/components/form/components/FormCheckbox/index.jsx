import React from "react";
import PropTypes from "prop-types";

import StyledFormCheckbox from "./StyledFormCheckbox";

import FormCheckboxFlag from "./FormCheckboxFlag";
import FormCheckboxInput from "./FormCheckboxInput";

function FormCheckbox({
  onChange,
  onBlur,
  name,
  checked,
  disabled,
  className,
  checkboxTheme,
  size,
  ...restProps
}) {
  return (
    <StyledFormCheckbox
      disabled={disabled}
      checked={checked}
      className={className}
      htmlFor={name}
      checkboxTheme={checkboxTheme}
      size={size}
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
        data-testid={restProps["data-testid"] || name}
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
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  checkboxTheme: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["small", "large"]),
};

FormCheckbox.defaultProps = {
  checkboxTheme: "light",
  size: "small",
};

export { FormCheckbox, StyledFormCheckbox };
