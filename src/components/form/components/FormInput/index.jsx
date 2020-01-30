import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getTestId } from "../../utils";

const StyledFormInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #9aa7b3;
  border-radius: 3px;
  padding: 2px 10px;

  &:focus {
    outline: none;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

function FormInput(props) {
  const testId = getTestId(props.name, props["data-testid"]);

  return <StyledFormInput {...props} data-testid={testId} />;
}

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  disabled: PropTypes.bool,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: "text",
  "data-testid": "form-input",
};

export { FormInput, StyledFormInput };
