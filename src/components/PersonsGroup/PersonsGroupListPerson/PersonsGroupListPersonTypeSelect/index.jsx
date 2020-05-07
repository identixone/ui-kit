import React from "react";
import PropTypes from "prop-types";

import { PersonsGroupListPersonTypeSelectDropdown } from "./PersonsGroupListPersonTypeSelectDropdown";
import { StyledPersonsGroupListPersonTypeSelect } from "./StyledPersonsGroupListPersonTypeSelect";
import { PersonsGroupListPersonTypeSelectLabel } from "./PersonsGroupListPersonTypeSelectLabel";
import { PersonsGroupListPersonTypeSelectDropdownWrapper } from "./PersonsGroupListPersonTypeSelectDropdownWrapper";

import { personsGroupsSearchTypes } from "../../constants";

export function PersonsGroupListPersonTypeSelect({ onChange, type }) {
  return (
    <StyledPersonsGroupListPersonTypeSelect>
      <PersonsGroupListPersonTypeSelectLabel htmlFor="search-type">
        Show groups with
      </PersonsGroupListPersonTypeSelectLabel>
      <PersonsGroupListPersonTypeSelectDropdownWrapper>
        <PersonsGroupListPersonTypeSelectDropdown
          id="search-type"
          data-testid="idxid-search-type"
          value={type}
          onChange={onChange}
          options={personsGroupsSearchTypes}
        />
        <span>person</span>
      </PersonsGroupListPersonTypeSelectDropdownWrapper>
    </StyledPersonsGroupListPersonTypeSelect>
  );
}

PersonsGroupListPersonTypeSelect.propTypes = {
  type: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
