import React from "react";
import PropTypes from "prop-types";

import { StyledFormCheckbox } from "./StyledFormCheckbox";
import { FormCheckboxCheckedIcon } from "./FormCheckboxCheckedIcon";
import { FormCheckboxInput } from "./FormCheckboxInput";

import { getTestId } from "../../utils";

function FormCheckbox(props) {
  const {
    checked,
    onChange,
    onBlur,
    onClick,
    name,
    disabled,
    className,
  } = props;
  const testId = getTestId(props.name, props["data-testid"]);

  return (
    <StyledFormCheckbox
      disabled={disabled}
      htmlFor={name}
      className={className}
      data-testid={testId}
      onClick={onClick}
    >
      {checked && <FormCheckboxCheckedIcon />}
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
  onClick: PropTypes.func,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { FormCheckbox, StyledFormCheckbox };
