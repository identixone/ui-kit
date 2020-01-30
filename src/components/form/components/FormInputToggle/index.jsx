import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useRef, useState } from "react";

import { FormInput } from "../FormInput";
import { StyledFormInputToggle } from "./StyledFormInputToggle";
import { FormInputToggleButton } from "./FormInputToggleButton";

import { getTestId } from "../../utils";

function FormInputToggle({
  initialOpen,
  name,
  width,
  value,
  onChange,
  onBlur,
  disabled,
  type,
  placeholder,
  buttonText,
  valuePlaceholder,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

  const [isOpen, setIsOpen] = useState(initialOpen);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const buttonContent = buttonText || value || valuePlaceholder;
  const hasValue = value !== undefined && value !== null && value !== "";

  return (
    <StyledFormInputToggle
      width={width}
      hasValue={hasValue}
      className={className}
      data-toggle={name}
      data-testid={testId}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {isOpen ? (
        <FormInput
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={ev => {
            setIsOpen(false);
            if (onBlur) {
              onBlur(ev);
            }
          }}
          value={hasValue ? value : ""}
          ref={inputRef}
          disabled={disabled}
          data-testid={testId + "-input"}
        />
      ) : (
        <FormInputToggleButton
          hasContent={Boolean(buttonContent)}
          isDisabled={disabled}
          data-testid={testId + "-button"}
        >
          {buttonContent}
        </FormInputToggleButton>
      )}
    </StyledFormInputToggle>
  );
}

FormInputToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  initialOpen: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  valuePlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
  "data-testid": PropTypes.string,
};

FormInputToggle.defaultProps = {
  type: "text",
  initialOpen: false,
  "data-testid": "form-input-toggle",
};

export { FormInputToggle, StyledFormInputToggle };
