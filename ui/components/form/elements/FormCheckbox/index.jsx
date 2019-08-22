import React from "react";
import PropTypes from "prop-types";

import StyledFormCheckbox from "./StyledFormCheckbox";

import FormCheckboxFlag from "./FormCheckboxFlag";
import FormCheckboxInput from "./FormCheckboxInput";
import FormCheckboxMarker from "./FormCheckboxMarker";

export function FormCheckbox({
  onChange,
  onBlur,
  name,
  value,
  disabled,
  className,
  ...restProps
}) {
  const checked = Boolean(value);

  return (
    <StyledFormCheckbox disabled={disabled} className={className}>
      <FormCheckboxMarker disabled={disabled}>
        <FormCheckboxFlag checked={checked} disabled={disabled} />
        <FormCheckboxInput
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          data-testid={restProps["data-testid"] || name}
        />
      </FormCheckboxMarker>
    </StyledFormCheckbox>
  );
}

FormCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.bool.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormCheckbox.defaultProps = {
  type: "text",
};
