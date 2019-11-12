import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

import { PersonsListPersonId } from "./PersonsListPersonId";
import { PopupConfirm } from "../../PopupConfirm";
import { CardSmall, StyledCardSmall } from "../../CardSmall";
import { IdFormat } from "../../IdFormat";
import { Value } from "../../Value";
import { PlaylistAdd, Trash } from "../../../assets/icons";

import { get } from "lodash-es";
import { colors } from "../../../themes/colors";
import { noimageid } from "../../../assets/images";

function PersonsListPerson({
  person,
  personsListId,
  onClick,
  addPersonsToList,
  deletePersonsFromList,
  isSelected,
  isActive,
  mode,
  onChange,
  isPersonsAddingToList,
  isPersonsDeletingFromList,
  keyDeleteBy,
  className,
  "data-testid": testId,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleListItemClick() {
    onClick(person.idxid);
  }

  function handleDeleteButtonClick() {
    deletePersonsFromList({
      listId: personsListId,
      persons: [person[keyDeleteBy]],
      meta: {
        listId: personsListId,
        persons: [person[keyDeleteBy]],
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
    <CardSmall
      className={className}
      theme={isActive ? "dark" : "light"}
      onClick={handleListItemClick}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      img={person.initial_photo || noimageid}
      data-testid={testId}
    >
      {!isAddingMode && (
        <CardSmall.Checkbox
          name={person.idxid}
          value={isSelected}
          onChange={onChange}
          isHidden={!isMouseOver && !isSelected && !isActive}
          data-testid={`persons-list-person-select-${person.idxid}`}
        />
      )}

      <CardSmall.Data idxid={person.idxid}>
        <CardSmall.DataItem>
          ID{" "}
          <PersonsListPersonId isActive={isActive}>
            <IdFormat>{person.idxid}</IdFormat>
          </PersonsListPersonId>
        </CardSmall.DataItem>
        <CardSmall.DataItem>
          Place of first entry:
          <br />{" "}
          <b>
            <Value>{get(person, "idxid_source.name", "-")}</Value>
          </b>
        </CardSmall.DataItem>
      </CardSmall.Data>

      {isAddingMode ? (
        <CardSmall.Button
          data-testid="persons-list-add-person"
          onClick={handleAddButtonClick}
          isHidden={false}
          isDisabled={isPersonsAddingToList}
        >
          <PlaylistAdd size="24" color={colors.greenish} />
        </CardSmall.Button>
      ) : (
        <PopupConfirm onConfirm={handleDeleteButtonClick}>
          {({ togglePopup }) => (
            <CardSmall.Button
              data-testid="persons-list-remove-person"
              onClick={e => {
                e.stopPropagation();
                togglePopup(e);
              }}
              isHidden={!isMouseOver}
              isDisabled={isPersonsDeletingFromList}
              mode={mode}
            >
              <Trash size="16" color={colors.bloodOrange} />
            </CardSmall.Button>
          )}
        </PopupConfirm>
      )}
    </CardSmall>
  );
}

PersonsListPerson.propTypes = {
  person: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  addPersonsToList: PropTypes.func.isRequired,
  deletePersonsFromList: PropTypes.func.isRequired,
  personsListId: PropTypes.number.isRequired,
  mode: PropTypes.string,
  isPersonsDeletingFromList: PropTypes.bool.isRequired,
  isPersonsAddingToList: PropTypes.bool.isRequired,
  keyDeleteBy: PropTypes.string,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

PersonsListPerson.defaultProps = {
  person: {},
  keyDeleteBy: "idxid",
  "data-testid": "persons-list-person",
};

const StyledPersonListPerson = StyledCardSmall;

export { PersonsListPerson, StyledPersonListPerson };
