import React from "react";
import PropTypes from "prop-types";

import { StyledFormUneditableField } from "./StyledFormUneditableField";

import { getTestId } from "../../utils";

function FormUneditableField({
  name,
  value,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

  return (
    <StyledFormUneditableField
      id={name}
      name={name}
      data-testid={testId}
      className={className}
    >
      {value}
    </StyledFormUneditableField>
  );
}

FormUneditableField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { FormUneditableField, StyledFormUneditableField };
