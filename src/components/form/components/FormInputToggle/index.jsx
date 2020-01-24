import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useRef, useState } from "react";

import { FormInput } from "../FormInput";
import { StyledFormInputToggle } from "./StyledFormInputToggle";
import { FormInputToggleButton } from "./FormInputToggleButton";

function FormInputToggle({
  initialOpen,
  name,
  width,
  value,
  onChange,
  onBlur,
  disabled,
  className,
  type,
  placeholder,
  buttonText,
  valuePlaceholder,
  "data-testid": testId,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const inputRef = useRef(null);

  function handleWindowClick(ev) {
    if (!ev.target.closest(`[data-toggle="${name}"]`)) {
      setIsOpen(false);
    } else {
      /**
       * Сделано для того, чтобы, когда в тексте кнопки ссылка
       * браузер не пытался по ней перейти
       */
      ev.preventDefault();

      setIsOpen(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.select();
    }
  }, [isOpen]);

  const buttonContent = buttonText || value || valuePlaceholder;
  const hasValue = value !== undefined && value !== null && value !== "";

  return (
    <StyledFormInputToggle
      width={width}
      data-toggle={name}
      hasValue={hasValue}
      disabled={disabled}
      className={className}
      data-testid={testId}
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
          data-testid={name}
        />
      ) : (
        <FormInputToggleButton
          hasContent={Boolean(buttonContent)}
          isDisabled={disabled}
          data-testid={name}
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
  width: PropTypes.string,
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
