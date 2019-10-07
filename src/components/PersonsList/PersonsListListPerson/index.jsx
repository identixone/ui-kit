import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { StyledPersonsListListPerson } from "./StyledPersonsListListPerson";
import { PersonsListListPersonInfo } from "./PersonsListListPersonInfo";
import { PersonsListListPersonNotFoundNotice } from "./PersonsListListPersonNotFoundNotice";
import { PersonsListListPersonTypeSelect } from "./PersonsListListPersonTypeSelect";
import { PersonsListListPersonButton } from "./PersonsListListPersonButton";
import { PersonsListListPersonSpinner } from "./PersonsListListPersonSpinner";

/**
 *
 * Компонент для вывода результата поиска персоны
 * на листе персон листов
 */

export function PersonsListListPerson({
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
      fetchPerson({ idxid: personIdxid });
    }
  }, [personIdxid]);

  return (
    <StyledPersonsListListPerson>
      {!person ? (
        "enter person id"
      ) : error ? (
        <PersonsListListPersonNotFoundNotice />
      ) : isPersonFetching ? (
        <PersonsListListPersonSpinner />
      ) : (
        <React.Fragment>
          <PersonsListListPersonInfo
            photo={person.initial_photo}
            idxid={person.idxid}
          />
          <PersonsListListPersonTypeSelect
            type={searchType}
            onChange={onSearchTypeChange}
          />
          {searchType.value.includes("excludes") && (
            <PersonsListListPersonButton
              isFullWidth={true}
              size="large"
              onClick={onAdd}
              buttonTheme="dark"
              isDisabled={!isAddAvailable}
            >
              Add to selected
            </PersonsListListPersonButton>
          )}
          {searchType.value.includes("includes") && (
            <PersonsListListPersonButton
              isFullWidth={true}
              size="large"
              onClick={onRemove}
              isDisabled={!isRemoveAvailable}
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
  personIdxid: PropTypes.string.isRequired,
  fetchPerson: PropTypes.func.isRequired,
  isPersonFetching: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  searchType: PropTypes.string,
  onSearchTypeChange: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAddAvailable: PropTypes.bool.isRequired,
  isRemoveAvailable: PropTypes.bool.isRequired,
};
