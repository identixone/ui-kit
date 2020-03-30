import React from "react";
import PropTypes from "prop-types";

import { SelectableList } from "../../../SelectableList";
import { StyledFormCheckboxGroup } from "./StyledFormCheckboxGroup";
import { FormCheckboxGroupItem } from "./FormCheckboxGroupItem";

function FormCheckboxGroup({ value, onChange, groupName, render, options }) {
  return (
    <StyledFormCheckboxGroup>
      <SelectableList
        options={options}
        value={value}
        onChange={onChange}
        render={selectedListProps => {
          return render({
            ...selectedListProps,
            checkboxes: () => {
              const { selected, handleCheckboxChange } = selectedListProps;

              return options.map(({ label, value: optionValue }) => {
                return (
                  <FormCheckboxGroupItem
                    key={optionValue}
                    label={label}
                    name={String(optionValue)}
                    checked={selected.includes(String(optionValue))}
                    onChange={handleCheckboxChange}
                    groupName={groupName}
                  />
                );
              });
            },
          });
        }}
      />
    </StyledFormCheckboxGroup>
  );
}

FormCheckboxGroup.propTypes = {
  render: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

FormCheckboxGroup.Item = FormCheckboxGroupItem;

export { FormCheckboxGroup };

export * from "./FormCheckboxGroupItem";
