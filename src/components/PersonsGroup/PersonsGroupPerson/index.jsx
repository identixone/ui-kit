import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

import { PersonsGroupPersonId } from "./PersonsGroupPersonId";
import { PopupConfirm } from "../../PopupConfirm";
import { CardSmall, StyledCardSmall } from "../../CardSmall";
import { IdFormat } from "../../IdFormat";
import { Value } from "../../Value";
import { PlaylistAdd, Trash } from "../../icons";

import { get } from "lodash-es";
import { colors } from "../../../style";
import { noimageid } from "../../../assets/images";

function PersonsGroupPerson({
  person,
  onClick,
  onPersonDelete,
  onPersonAdd,
  isSelected,
  isActive,
  mode,
  onChange,
  isPersonsAddingToGroup,
  isPersonsDeletingFromGroup,
  className,
  "data-testid": testId,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleListItemClick() {
    onClick(person);
  }

  function handleDeleteButtonClick() {
    onPersonDelete(person);
  }

  function handleAddButtonClick(e) {
    e.stopPropagation();
    onPersonAdd(person);
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
          checked={isSelected}
          onChange={onChange}
          isHidden={!isMouseOver && !isSelected && !isActive}
          data-testid={`persons-group-person-select-${person.idxid}`}
        />
      )}

      <CardSmall.Data idxid={person.idxid}>
        <CardSmall.Title>
          ID{" "}
          <PersonsGroupPersonId isActive={isActive}>
            <IdFormat>{person.idxid}</IdFormat>
          </PersonsGroupPersonId>
        </CardSmall.Title>
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
          data-testid="persons-group-add-person"
          onClick={handleAddButtonClick}
          isHidden={false}
          isDisabled={isPersonsAddingToGroup}
        >
          <PlaylistAdd size="24" color={colors.greenish} />
        </CardSmall.Button>
      ) : (
        <PopupConfirm onConfirm={handleDeleteButtonClick}>
          {({ togglePopup }) => (
            <CardSmall.Button
              data-testid="persons-group-remove-person"
              onClick={(e) => {
                e.stopPropagation();
                togglePopup(e);
              }}
              isHidden={!isMouseOver}
              isDisabled={isPersonsDeletingFromGroup}
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

PersonsGroupPerson.propTypes = {
  person: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onPersonDelete: PropTypes.func.isRequired,
  onPersonAdd: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string,
  isPersonsAddingToGroup: PropTypes.bool,
  isPersonsDeletingFromGroup: PropTypes.bool,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

PersonsGroupPerson.defaultProps = {
  person: {},
  "data-testid": "persons-group-person",
};

const StyledPersonListPerson = StyledCardSmall;

export { PersonsGroupPerson, StyledPersonListPerson };
