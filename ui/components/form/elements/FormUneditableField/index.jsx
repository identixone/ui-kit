import React from "react";
import PropTypes from "prop-types";

import StyledFormUneditableField from "./StyledFormUneditableField";

export function FormUneditableField({ name, value }) {
  return (
    <StyledFormUneditableField id={name} name={name} data-testid={name}>
      {value}
    </StyledFormUneditableField>
  );
}

FormUneditableField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
};
