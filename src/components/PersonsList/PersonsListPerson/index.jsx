import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPerson from "./StyledPersonsListPerson";
import PersonsListPersonActionButton, {
  PersonsListPersonActionButtonIcon,
} from "./PersonsListPersonActionButton";
import PersonsListPersonCheckbox from "./PersonsListPersonCheckbox";
import PersonsListPersonData from "./PersonsListPersonData";
import PersonsListPersonPhoto from "./PersonsListPersonPhoto";

import { DeleteSure } from "../../DeleteSure";
import { UserPlus, UserTimes, Exclamation } from "../../../assets/icons";

import { get } from "lodash-es";

class PersonsListPerson extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    person: {},
  };

  state = {
    isMouseOver: false,
  };

  handleTriggerHover = () => {
    this.setState({ isMouseOver: true });
  };

  handleTriggerLeave = () => {
    this.setState({ isMouseOver: false });
  };

  handleListItemClick = () => {
    this.props.onClick(this.props.person.idxid);
  };

  handleDeleteButtonClick = () => {
    this.props.deletePersonsFromList({
      listId: this.props.personsListId,
      persons: [this.props.person.idxid],
      meta: {
        listId: this.props.personsListId,
        persons: [this.props.person.idxid],
      },
    });
  };

  handleAddButtonClick = e => {
    e.stopPropagation();

    this.props.addPersonsToList({
      persons: [this.props.person.idxid],
      listId: this.props.personsListId,
      meta: {
        listId: this.props.personsListId,
        person: this.props.person,
      },
    });
  };

  render() {
    const {
      person,
      isSelected,
      name,
      onChange,
      isPersonsAddingToList,
      isPersonsDeletingFromList,
      mode,
    } = this.props;
    const { isMouseOver } = this.state;

    const isAddingMode = mode === "add";

    return (
      <StyledPersonsListPerson
        onClick={this.handleListItemClick}
        data-testid="persons-list-person"
        onMouseOver={this.handleTriggerHover}
        onMouseLeave={this.handleTriggerLeave}
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
            mode="add"
            onClick={this.handleAddButtonClick}
            isHidden={false}
            isDisabled={isPersonsAddingToList}
          >
            <PersonsListPersonActionButtonIcon>
              <UserPlus size="18" />
            </PersonsListPersonActionButtonIcon>
          </PersonsListPersonActionButton>
        ) : (
          <DeleteSure onDelete={this.handleDeleteButtonClick}>
            {({ isSure, handleClick, handleMouseLeave }) => {
              return (
                <PersonsListPersonActionButton
                  data-testid="persons-list-remove-person"
                  mode="remove"
                  isSure={isSure}
                  onClick={handleClick}
                  onMouseLeave={handleMouseLeave}
                  isHidden={!isMouseOver}
                  isDisabled={isPersonsDeletingFromList}
                >
                  <PersonsListPersonActionButtonIcon>
                    {isSure ? (
                      <Exclamation size="14" />
                    ) : (
                      <UserTimes size="18" />
                    )}
                  </PersonsListPersonActionButtonIcon>
                </PersonsListPersonActionButton>
              );
            }}
          </DeleteSure>
        )}
      </StyledPersonsListPerson>
    );
  }
}

export { PersonsListPerson };
