import React from "react";
import PropTypes from "prop-types";

import { FormCheckbox } from "../../FormCheckbox";
import { FormLabel, FormLabelTitle } from "../../FormLabel";

import StyledFormCheckboxGroupItem from "./StyledFormCheckboxGroupItem";

export function FormCheckboxGroupItem({
  label,
  name,
  value,
  onChange,
  groupName,
  ...props
}) {
  return (
    <StyledFormCheckboxGroupItem>
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
};
