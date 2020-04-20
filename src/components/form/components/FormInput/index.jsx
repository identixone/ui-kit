import React from "react";
import PropTypes from "prop-types";

import { StyledFormInput } from "./StyledFormInput";
import { FormInputUneditable } from "./FormInputUneditable";

import { getTestId } from "../../utils";

const FormInput = React.forwardRef((props, ref) => {
  return (
    <StyledFormInput
      {...props}
      data-testid={getTestId(props.name, props["data-testid"])}
      ref={ref}
    />
  );
});

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  disabled: PropTypes.bool,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: "text",
};

FormInput.Password = function (props) {
  return <FormInput {...props} type="password" />;
};

FormInput.Number = function (props) {
  return <FormInput {...props} type="number" />;
};

FormInput.Uneditable = function (props) {
  // eslint-disable-next-line react/prop-types
  return <FormInputUneditable {...props}>{props.value}</FormInputUneditable>;
};

const StyledFormInputUneditable = FormInputUneditable;

export {
  FormInput,
  StyledFormInput,
  FormInputUneditable,
  StyledFormInputUneditable,
};
