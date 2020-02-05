import React from "react";
import PropTypes from "prop-types";

import { StyledFormFieldGroup } from "./StyledFormFieldGroup";
import { FormFieldGroupTitle } from "./FormFieldGroupTitle";

function FormFieldGroup({ title, children, className }) {
  return (
    <StyledFormFieldGroup className={className}>
      {title && <FormFieldGroupTitle>{title}</FormFieldGroupTitle>}
      <div>{children}</div>
    </StyledFormFieldGroup>
  );
}

FormFieldGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
};

export { FormFieldGroup, StyledFormFieldGroup };
