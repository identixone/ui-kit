import React from "react";
import PropTypes from "prop-types";

import StyledFormFieldGroup from "./StyledFormFieldGroup";
import FormFieldGroupTitle from "./FormFieldGroupTitle";

export function FormFieldGroup({ title, children }) {
  return (
    <StyledFormFieldGroup>
      {title && <FormFieldGroupTitle>{title}</FormFieldGroupTitle>}
      <div>{children}</div>
    </StyledFormFieldGroup>
  );
}

FormFieldGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};
