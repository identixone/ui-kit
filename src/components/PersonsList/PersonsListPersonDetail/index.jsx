import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonDetail from "./StyledPersonsListPersonDetail";
import PersonsListPersonDetailSpinner from "./PersonsListPersonDetailSpinner";

import { EntryCard } from "../../EntryCard";

import { Segment } from "../../Segment";

class PersonsListPersonDetail extends React.Component {
  static propTypes = {
    person: PropTypes.object,
    fetchPerson: PropTypes.func.isRequired,
    personIdxid: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    isPersonNotExists: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    person: {},
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.personIdxid !== this.props.personIdxid &&
      this.props.personIdxid
    ) {
      this.props.fetchPerson({ idxid: this.props.personIdxid });
    }
  }

  render() {
    const { person, isLoading, isPersonNotExists } = this.props;

    return (
      <StyledPersonsListPersonDetail
        isCentered={isLoading || !person.idxid}
        data-testid="persons-list-person-detail"
      >
        {isLoading ? (
          <PersonsListPersonDetailSpinner />
        ) : person.idxid ? (
          <EntryCard person={person} />
        ) : (
          <Segment.Title>
            {isPersonNotExists
              ? "person with this idxid does not exist"
              : "click a person to display"}
          </Segment.Title>
        )}
      </StyledPersonsListPersonDetail>
    );
  }
}

export { PersonsListPersonDetail };
