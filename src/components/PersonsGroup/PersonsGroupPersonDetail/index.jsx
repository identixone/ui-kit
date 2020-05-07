import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupPersonDetail } from "./StyledPersonsGroupPersonDetail";

import {
  PersonCardDetailed,
  PersonCardDetailedActions,
  PersonCardDetailedDataItemLabel as PersonLabel,
  PersonCardDetailedDataItemValue as PersonValue,
  PersonCardDetailedDataItemIdValue as PersonIdValue,
  PersonCardDetailedDataItemPhoto as PersonPhoto,
} from "../../PersonCardDetailed";
import { IdFormat } from "../../IdFormat";

import { formatSex, formatDate, formatFaceSize } from "../../../utils";
import { noimageid } from "../../../assets/images";

function PersonsGroupPersonDetail({
  person,
  fetchPerson,
  personIdxid,
  isLoading,
  isPersonNotExists,
  actions,
}) {
  return (
    <StyledPersonsGroupPersonDetail
      person={person}
      fetchPerson={fetchPerson}
      personIdxid={personIdxid}
      isLoading={isLoading}
      isPersonNotExists={isPersonNotExists}
      data-testid="persons-group-person-detail"
    >
      {person && !isPersonNotExists && (
        <>
          <PersonCardDetailed.Data>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Photo</PersonLabel>
              <PersonValue>
                <PersonPhoto
                  src={person.initial_photo || noimageid}
                  facesize={formatFaceSize(person.initial_facesize)}
                />
              </PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>ID</PersonLabel>
              <PersonIdValue>
                <IdFormat>{person.idxid}</IdFormat>
              </PersonIdValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Age</PersonLabel>
              <PersonValue>{person.age}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Sex</PersonLabel>
              <PersonValue>{formatSex(person.sex)}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Card created</PersonLabel>
              <PersonValue>{formatDate(person.idxid_created)}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Place of first entry</PersonLabel>
              <PersonValue>{person.idxid_source.name}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Total entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.total}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Exact entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.exact}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>HA entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.ha}</PersonValue>
            </PersonCardDetailed.DataItem>
            <PersonCardDetailed.DataItem>
              <PersonLabel>Junk entries</PersonLabel>
              <PersonValue isZeroEmpty={true}>{person.junk}</PersonValue>
            </PersonCardDetailed.DataItem>
          </PersonCardDetailed.Data>
          {actions && (
            <PersonCardDetailedActions>{actions}</PersonCardDetailedActions>
          )}
        </>
      )}
    </StyledPersonsGroupPersonDetail>
  );
}

PersonsGroupPersonDetail.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func.isRequired,
  personIdxid: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isPersonNotExists: PropTypes.bool,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export { PersonsGroupPersonDetail, StyledPersonsGroupPersonDetail };
