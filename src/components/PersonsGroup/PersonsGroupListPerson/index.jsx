import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPerson } from "./StyledPersonsGroupListPerson";
import { PersonsGroupListPersonInfo } from "./PersonsGroupListPersonInfo";
import { PersonsGroupListPersonNotFoundNotice } from "./PersonsGroupListPersonNotFoundNotice";
import { PersonsGroupListPersonTypeSelect } from "./PersonsGroupListPersonTypeSelect";
import { PersonsGroupListPersonButton } from "./PersonsGroupListPersonButton";
import { PersonsGroupListPersonSpinner } from "./PersonsGroupListPersonSpinner";

/**
 *
 * Компонент для вывода результата поиска персоны
 * на листе персон листов
 */

export function PersonsGroupListPerson({
  person,
  personIdxid,
  fetchPerson,
  isPersonFetching,
  error,
  searchType,
  onSearchTypeChange,
  onRemove,
  onAdd,
  isAddAvailable,
  isRemoveAvailable,
}) {
  useEffect(() => {
    if (personIdxid) {
      fetchPerson(personIdxid);
    }
  }, [personIdxid]);

  return (
    <StyledPersonsGroupListPerson offsetTop={200}>
      {(isPersonFetching || !person) && !error ? (
        <PersonsGroupListPersonSpinner />
      ) : error ? (
        <PersonsGroupListPersonNotFoundNotice />
      ) : (
        <React.Fragment>
          <PersonsGroupListPersonInfo
            photo={person.initial_photo}
            idxid={person.idxid}
          />
          <PersonsGroupListPersonTypeSelect
            type={searchType}
            onChange={onSearchTypeChange}
          />
          {searchType.value.includes("excludes") && (
            <PersonsGroupListPersonButton
              isFullWidth={true}
              onClick={onAdd}
              theme="dark"
              isDisabled={!isAddAvailable}
              data-testid="add-selected"
            >
              Add to selected
            </PersonsGroupListPersonButton>
          )}
          {searchType.value.includes("includes") && (
            <PersonsGroupListPersonButton
              isFullWidth={true}
              onClick={onRemove}
              isDisabled={!isRemoveAvailable}
              data-testid="delete-selected"
            >
              Remove from selected
            </PersonsGroupListPersonButton>
          )}
        </React.Fragment>
      )}
    </StyledPersonsGroupListPerson>
  );
}

PersonsGroupListPerson.propTypes = {
  person: PropTypes.object.isRequired,
  personIdxid: PropTypes.string.isRequired,
  fetchPerson: PropTypes.func.isRequired,
  isPersonFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  searchType: PropTypes.object,
  onSearchTypeChange: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAddAvailable: PropTypes.bool.isRequired,
  isRemoveAvailable: PropTypes.bool.isRequired,
};
