import React from "react";
import PropTypes from "prop-types";

import { FormCheckbox } from "../../FormCheckbox";
import { FormLabel, FormLabelTitle } from "../../FormLabel";

import { StyledFormCheckboxGroupItem } from "./StyledFormCheckboxGroupItem";

function FormCheckboxGroupItem({
  label,
  name,
  value,
  onChange,
  groupName,
  className,
  ...props
}) {
  return (
    <StyledFormCheckboxGroupItem className={className}>
      <FormLabel htmlFor={name ? name : undefined}>
        <FormLabelTitle>{label}</FormLabelTitle>
        <FormCheckbox
          name={name}
          value={value}
          onChange={onChange}
          data-testid={props["data-testid"] || `${groupName}-${name}`}
        />
      </FormLabel>
    </StyledFormCheckboxGroupItem>
  );
}

FormCheckboxGroupItem.propTypes = {
  groupName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { FormCheckboxGroupItem, StyledFormCheckboxGroupItem };
