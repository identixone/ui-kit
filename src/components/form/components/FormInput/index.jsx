import React from "react";
import PropTypes from "prop-types";

import StyledFormInput from "./StyledFormInput";

function FormInput({
  onChange,
  onBlur,
  name,
  value,
  placeholder,
  type,
  innerRef,
  disabled,
  className,
  ...restProps
}) {
  return (
    <StyledFormInput
      id={name}
      name={name}
      type={type}
      placeholder={placeholder ? placeholder : undefined}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={innerRef}
      disabled={disabled}
      className={className}
      data-testid={restProps["data-testid"]}
    />
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  innerRef: PropTypes.object,
  disabled: PropTypes.bool,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: "text",
};

export { FormInput, StyledFormInput };
