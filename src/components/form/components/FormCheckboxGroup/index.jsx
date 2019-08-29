import React from "react";
import PropTypes from "prop-types";

import { FormCheckboxGroupItem } from "./FormCheckboxGroupItem";

import { SelectableList } from "../../../SelectableList";

export function FormCheckboxGroup({
  groupName,
  render,
  options,
  value,
  onChange,
}) {
  return (
    <SelectableList
      options={options}
      value={value}
      onChange={onChange}
      render={selectedListProps => {
        return render({
          ...selectedListProps,
          checkboxes: () => {
            const { selected } = selectedListProps;

            return options.map(({ label, value }) => {
              return (
                <FormCheckboxGroupItem
                  key={value}
                  label={label}
                  name={value}
                  value={selected.includes(value)}
                  onChange={selectedListProps.handleCheckboxChange}
                  groupName={groupName}
                />
              );
            });
          },
        });
      }}
    />
  );
}

FormCheckboxGroup.propTypes = {
  render: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};
