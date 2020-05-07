import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { useState } from "react";

import { FormCheckboxGroup } from "./index";
import { FormLabelTitle } from "../FormLabel";

import { generateOptions } from "../../../../../test/generate";

const options = generateOptions(5);

const StyledForm = styled.form`
  ${FormLabelTitle} {
    width: 200px;
  }
`;

storiesOf("Form Components| FormCheckboxGroup", module).add("default", () => {
  function ComponentWrapper() {
    const [checked, setChecked] = useState([]);

    return (
      <StyledForm data-testid="test-form">
        <FormCheckboxGroup
          groupName="test-group"
          options={options}
          value={checked}
          onChange={setChecked}
          render={({ checkboxes, ...selectableProps }) => (
            <div>
              <FormCheckboxGroup.Item
                name="test-group-select-all"
                label="Select all"
                data-testid="test-group-select-all"
                checked={selectableProps.isAllSelected}
                onChange={({ target }) => {
                  if (target.checked) {
                    selectableProps.selectAll();
                  } else {
                    selectableProps.deselectAll();
                  }
                }}
              />
              <FormCheckboxGroup.Item
                name="test-group-deselect-all"
                label="Deselect all"
                data-testid="test-group-deselect-all"
                checked={selectableProps.isAllDeselected}
                onChange={({ target }) => {
                  if (!target.checked) {
                    selectableProps.selectAll();
                  } else {
                    selectableProps.deselectAll();
                  }
                }}
              />
              {checkboxes()}
            </div>
          )}
        />
      </StyledForm>
    );
  }

  return <ComponentWrapper />;
});
