import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledPersonsListPerson from "./StyledPersonsListPerson";
import PersonsListPersonActionButton, {
  PersonsListPersonActionButtonIcon,
} from "./PersonsListPersonActionButton";
import PersonsListPersonCheckbox from "./PersonsListPersonCheckbox";
import PersonsListPersonData from "./PersonsListPersonData";
import { PersonsListPersonPhoto } from "./PersonsListPersonPhoto";

import { PopupConfirm } from "../../PopupConfirm/index";

import { PlaylistAdd, Trash } from "../../../assets/icons";

import { get } from "lodash-es";

function PersonsListPerson({
  person,
  personsListId,
  onClick,
  addPersonsToList,
  deletePersonsFromList,
  name,
  isSelected,
  mode,
  onChange,
  isPersonsAddingToList,
  isPersonsDeletingFromList,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleListItemClick() {
    onClick(person.idxid);
  }

  function handleDeleteButtonClick() {
    deletePersonsFromList({
      listId: personsListId,
      persons: [person.idxid],
      meta: {
        listId: personsListId,
        persons: [person.idxid],
      },
    });
  }

  function handleAddButtonClick(e) {
    e.stopPropagation();

    addPersonsToList({
      persons: [person.idxid],
      listId: personsListId,
      meta: {
        listId: personsListId,
        person: person,
      },
    });
  }

  const isAddingMode = mode === "add";

  return (
    <StyledPersonsListPerson
      onClick={handleListItemClick}
      data-testid="persons-list-person"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <PersonsListPersonPhoto src={person.initial_photo} />
      {!isAddingMode && (
        <PersonsListPersonCheckbox
          name={name}
          value={isSelected}
          onChange={onChange}
          isHidden={!isMouseOver && !isSelected}
          data-testid={`persons-list-person-select-${person.idxid}`}
        />
      )}
      <PersonsListPersonData
        idxid={person.idxid}
        source={get(person, "idxid_source.name", "-")}
      />
      {isAddingMode ? (
        <PersonsListPersonActionButton
          data-testid="persons-list-add-person"
          onClick={handleAddButtonClick}
          isHidden={false}
          isDisabled={isPersonsAddingToList}
          mode={mode}
        >
          <PersonsListPersonActionButtonIcon>
            <PlaylistAdd size="24" />
          </PersonsListPersonActionButtonIcon>
        </PersonsListPersonActionButton>
      ) : (
        <PopupConfirm onConfirm={handleDeleteButtonClick}>
          {({ togglePopup }) => (
            <PersonsListPersonActionButton
              data-testid="persons-list-remove-person"
              onClick={togglePopup}
              isHidden={!isMouseOver}
              isDisabled={isPersonsDeletingFromList}
              mode={mode}
            >
              <PersonsListPersonActionButtonIcon>
                <Trash size="16" />
              </PersonsListPersonActionButtonIcon>
            </PersonsListPersonActionButton>
          )}
        </PopupConfirm>
      )}
    </StyledPersonsListPerson>
  );
}

PersonsListPerson.propTypes = {
  person: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addPersonsToList: PropTypes.func.isRequired,
  deletePersonsFromList: PropTypes.func.isRequired,
  personsListId: PropTypes.number.isRequired,
  mode: PropTypes.string,
  isPersonsDeletingFromList: PropTypes.bool.isRequired,
  isPersonsAddingToList: PropTypes.bool.isRequired,
};

PersonsListPerson.defaultProps = {
  person: {},
};

export { PersonsListPerson, StyledPersonsListPerson };
