import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonDetail from "./StyledPersonsListPersonDetail";
import PersonsListPersonDetailPhoto from "./PersonsListPersonDetailPhoto";
import PersonsListPersonDetailSpinner from "./PersonsListPersonDetailSpinner";

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
      this.setState({ isPhotoLoaded: false }, () => {
        this.props.fetchPerson({ idxid: this.props.personIdxid });
      });
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
          <>
            <PersonsListPersonDetailPhoto
              src={person.initial_photo}
              onLoad={this.handlePhotoLoaded}
            />
            <div>
              <h3>{person.idxid}</h3>
              <p>age: {person.age}</p>
              <p>sex: {person.sex}</p>
            </div>
          </>
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
