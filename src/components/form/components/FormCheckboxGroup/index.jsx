import React from "react";
import PropTypes from "prop-types";

import { StyledFormCheckboxGroup } from "./StyledFormCheckboxGroup";
import { FormCheckboxGroupItem } from "./FormCheckboxGroupItem";
import { useSelectableList } from "../../../../hooks/index";

function FormCheckboxGroup({ value, onChange, groupName, render, options }) {
  const { ...selectedListOptions } = useSelectableList({
    options,
    value,
    onChange,
  });

  return (
    <StyledFormCheckboxGroup>
      {render({
        ...selectedListOptions,
        checkboxes: () => {
          const { selected, onCheckboxChange } = selectedListOptions;
          return options.map(({ label, value: optionValue }) => {
            const strOption = String(optionValue);

            return (
              <FormCheckboxGroupItem
                key={optionValue}
                label={label}
                name={strOption}
                checked={selected.includes(strOption)}
                onChange={onCheckboxChange}
                groupName={groupName}
              />
            );
          });
        },
      })}
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
