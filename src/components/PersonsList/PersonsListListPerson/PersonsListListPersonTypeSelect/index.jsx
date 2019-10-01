import React from "react";
import PropTypes from "prop-types";

import { PersonsListListPersonTypeSelectDropdown } from "./PersonsListListPersonTypeSelectDropdown";
import { StyledPersonsListListPersonTypeSelect } from "./StyledPersonsListListPersonTypeSelect";
import { PersonsListListPersonTypeSelectLabel } from "./PersonsListListPersonTypeSelectLabel";
import { PersonsListListPersonTypeSelectDropdownWrapper } from "./PersonsListListPersonTypeSelectDropdownWrapper";

export const searchTypes = [
  {
    value: "included",
    label: "Included",
  },
  {
    value: "excluded",
    label: "Excluded",
  },
  {
    value: "included_excluded",
    label: "Included + excluded",
  },
];

export function PersonsListListPersonTypeSelect({ onChange, type }) {
  return (
    <StyledPersonsListListPersonTypeSelect>
      <PersonsListListPersonTypeSelectLabel htmlFor="search-type">
        Show lists with
      </PersonsListListPersonTypeSelectLabel>
      <PersonsListListPersonTypeSelectDropdownWrapper>
        <PersonsListListPersonTypeSelectDropdown
          id="search-type"
          value={type}
          onChange={onChange}
          options={searchTypes}
        />
        <span>person</span>
      </PersonsListListPersonTypeSelectDropdownWrapper>
    </StyledPersonsListListPersonTypeSelect>
  );
}

PersonsListListPersonTypeSelect.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
