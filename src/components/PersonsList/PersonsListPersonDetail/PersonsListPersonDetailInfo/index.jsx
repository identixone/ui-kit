import React from "react";
import PropTypes from "prop-types";

import {
  PersonsListPersonDetailInfoItem,
  PersonsListPersonDetailInfoItemLabel as PersonLabel,
  PersonsListPersonDetailInfoItemValue as PersonValue,
  PersonsListPersonDetailInfoItemPhoto as PersonPhoto,
} from "./PersonsListPersonDetailInfoItem";
import { IdFormat } from "../../../IdFormat";

import { formatSex, formatDate, formatFaceSize } from "../../../../utils";

export function PersonsListPersonDetailInfo({ person }) {
  return (
    <div>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Photo</PersonLabel>
        <PersonValue>
          <PersonPhoto
            src={person.initial_photo}
            facesize={formatFaceSize(person.initial_facesize)}
          />
        </PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>ID</PersonLabel>
        <PersonValue>
          <IdFormat>{person.idxid}</IdFormat>
        </PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Age</PersonLabel>
        <PersonValue>{person.age}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Sex</PersonLabel>
        <PersonValue>{formatSex(person.sex)}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Card create</PersonLabel>
        <PersonValue>{formatDate(person.idxid_created)}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Place of first entry</PersonLabel>
        <PersonValue>{person.idxid_source.name}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Total existing entries</PersonLabel>
        <PersonValue isZeroEmpty={true}>{person.total}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Exact entries</PersonLabel>
        <PersonValue isZeroEmpty={true}>{person.exact}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>HA entries</PersonLabel>
        <PersonValue isZeroEmpty={true}>{person.ha}</PersonValue>
      </PersonsListPersonDetailInfoItem>
      <PersonsListPersonDetailInfoItem>
        <PersonLabel>Junk entries</PersonLabel>
        <PersonValue isZeroEmpty={true}>{person.junk}</PersonValue>
      </PersonsListPersonDetailInfoItem>
    </div>
  );
}

PersonsListPersonDetailInfo.propTypes = {
  person: PropTypes.object.isRequired,
};
