import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsListListPerson } from "./StyledPersonsListListPerson";
import { PersonsListListPersonInfo } from "./PersonsListListPersonInfo";
import { PersonsListListPersonNotFoundNotice } from "./PersonsListListPersonNotFoundNotice";
import { PersonsListListPersonTypeSelect } from "./PersonsListListPersonTypeSelect";
import { PersonsListListPersonButton } from "./PersonsListListPersonButton";

/**
 *
 * Компонент для вывода результата поиска персоны
 * на листе персон листов
 */

export function PersonsListListPerson({
  person,
  error,
  searchType,
  onSearchTypeChange,
  onRemove,
  onAdd,
}) {
  return (
    <StyledPersonsListListPerson>
      {error ? (
        <PersonsListListPersonNotFoundNotice />
      ) : (
        <React.Fragment>
          <PersonsListListPersonInfo
            photo={person.photo}
            idxid={person.idxid}
          />
          <PersonsListListPersonTypeSelect
            type={searchType}
            onChange={onSearchTypeChange}
          />
          {searchType.value.includes("excluded") && (
            <PersonsListListPersonButton
              isFullWidth={true}
              size="large"
              onClick={onAdd}
              buttonTheme="dark"
            >
              Add to selected
            </PersonsListListPersonButton>
          )}
          {searchType.value.includes("included") && (
            <PersonsListListPersonButton
              isFullWidth={true}
              size="large"
              onClick={onRemove}
            >
              Remove from selected
            </PersonsListListPersonButton>
          )}
        </React.Fragment>
      )}
    </StyledPersonsListListPerson>
  );
}

PersonsListListPerson.propTypes = {
  person: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  searchType: PropTypes.string,
  onSearchTypeChange: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
