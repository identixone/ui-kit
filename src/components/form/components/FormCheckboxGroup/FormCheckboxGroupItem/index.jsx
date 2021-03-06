import React from "react";
import PropTypes from "prop-types";

import { FormCheckbox } from "../../FormCheckbox";
import { FormLabel, FormLabelTitle } from "../../FormLabel";

import { StyledFormCheckboxGroupItem } from "./StyledFormCheckboxGroupItem";

function FormCheckboxGroupItem({
  label,
  name,
  checked,
  onChange,
  className,
  groupName,
  ...props
}) {
  return (
    <StyledFormCheckboxGroupItem className={className}>
      <FormLabel htmlFor={name ? name : undefined}>
        <FormLabelTitle>{label}</FormLabelTitle>
        <FormCheckbox
          name={name}
          checked={checked}
          onChange={onChange}
          data-testid={props["data-testid"] || `${groupName}-${name}`}
        />
      </FormLabel>
    </StyledFormCheckboxGroupItem>
  );
}

FormCheckboxGroupItem.propTypes = {
  groupName: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { FormCheckboxGroupItem, StyledFormCheckboxGroupItem };
