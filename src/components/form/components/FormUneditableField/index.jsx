import React from "react";
import PropTypes from "prop-types";

import StyledFormUneditableField from "./StyledFormUneditableField";

export function FormUneditableField({ name, value, className }) {
  return (
    <StyledFormUneditableField
      id={name}
      name={name}
      data-testid={name}
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
};
