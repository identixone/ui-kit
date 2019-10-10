import React from "react";
import PropTypes from "prop-types";

import { PersonsListListPersonTypeSelectDropdown } from "./PersonsListListPersonTypeSelectDropdown";
import { StyledPersonsListListPersonTypeSelect } from "./StyledPersonsListListPersonTypeSelect";
import { PersonsListListPersonTypeSelectLabel } from "./PersonsListListPersonTypeSelectLabel";
import { PersonsListListPersonTypeSelectDropdownWrapper } from "./PersonsListListPersonTypeSelectDropdownWrapper";

import { personsListsSearchTypes } from "../../constants";

export function PersonsListListPersonTypeSelect({ onChange, type }) {
  return (
    <StyledPersonsListListPersonTypeSelect>
      <PersonsListListPersonTypeSelectLabel htmlFor="search-type">
        Show lists with
      </PersonsListListPersonTypeSelectLabel>
      <PersonsListListPersonTypeSelectDropdownWrapper>
        <PersonsListListPersonTypeSelectDropdown
          id="search-type"
          data-testid="idxid-search-type"
          value={type}
          onChange={onChange}
          options={personsListsSearchTypes}
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
