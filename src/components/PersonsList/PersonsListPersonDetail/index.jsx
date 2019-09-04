import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonPreview from "./StyledPersonsListPersonPreview";
import PersonsListPersonPreviewPhoto from "./PersonsListPersonPreviewPhoto";
import PersonsListPersonPreviewSpinner from "./PersonsListPersonPreviewSpinner";

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
      <StyledPersonsListPersonPreview
        isCentered={isLoading || !person.idxid}
        data-testid="persons-list-person-detail"
      >
        {isLoading ? (
          <PersonsListPersonPreviewSpinner />
        ) : person.idxid ? (
          <>
            <PersonsListPersonPreviewPhoto
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
      </StyledPersonsListPersonPreview>
    );
  }
}

export { PersonsListPersonDetail };
