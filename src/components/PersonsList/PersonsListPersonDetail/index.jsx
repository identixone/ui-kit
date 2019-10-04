import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { StyledPersonsListPersonDetail } from "./StyledPersonsListPersonDetail";
import PersonsListPersonDetailSpinner from "./PersonsListPersonDetailSpinner";
import { PersonsListPersonDetailInfo } from "./PersonsListPersonDetailInfo";
import { NoticeHero } from "../../NoticeHero/";

import { Ban, PlaylistAddCheck } from "../../../assets/icons";

function PersonsListPersonDetail({
  person,
  fetchPerson,
  personIdxid,
  isLoading,
  isPersonNotExists,
}) {
  useEffect(() => {
    if (personIdxid) {
      fetchPerson({ idxid: personIdxid });
    }
  }, [personIdxid]);

  return (
    <StyledPersonsListPersonDetail data-testid="persons-list-person-detail">
      {isLoading ? (
        <PersonsListPersonDetailSpinner />
      ) : person && !isPersonNotExists ? (
        <PersonsListPersonDetailInfo person={person} />
      ) : isPersonNotExists ? (
        <NoticeHero icon={<Ban size="48" />} title="Person not found" />
      ) : (
        <NoticeHero
          icon={<PlaylistAddCheck size="48" />}
          title="Select person to view details"
        />
      )}
    </StyledPersonsListPersonDetail>
  );
}

PersonsListPersonDetail.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func.isRequired,
  personIdxid: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isPersonNotExists: PropTypes.bool.isRequired,
};

export { PersonsListPersonDetail, StyledPersonsListPersonDetail };
