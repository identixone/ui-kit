import React from "react";
import PropTypes from "prop-types";

import { StyledPersonEntriesCard } from "./StyledPersonEntriesCard";
import { PersonEntriesCardPhoto } from "./PersonEntriesCardPhoto";
import {
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
} from "../components";
import { IdCopy } from "../../IdCopy";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize, formatSex } from "../../../utils/helpers";
import { PersonEntriesCardReinit } from "./PersonEntriesCardReinit";

function PersonEntriesCard({ person, className, actions }) {
  const hasReinit = person.reinit > 0;

  return (
    <StyledPersonEntriesCard className={className} actions={actions}>
      <PersonEntriesCardPhoto
        facesize={formatFaceSize(person.initial_facesize)}
        src={person.initial_photo}
      />

      {hasReinit && <PersonEntriesCardReinit>RE</PersonEntriesCardReinit>}

      <EntryCardInfo>
        <EntryCardInfoColumn>
          <EntryCardInfoItem label="ID">
            <IdCopy id={person.idxid} />
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Age">{person.age}</EntryCardInfoItem>
          <EntryCardInfoItem label="Sex">
            {formatSex(person.sex)}
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Card created">
            {timeFormat(person.idxid_created)}
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Place of first entry">
            {get(person.source, "name")}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem isZeroEmpty={true} label="Total existing entries">
            {person.total}
          </EntryCardInfoItem>
          <EntryCardInfoItem isZeroEmpty={true} label="Exact entries">
            {person.exact}
          </EntryCardInfoItem>
          <EntryCardInfoItem isZeroEmpty={true} label="HA entries">
            {person.ha}
          </EntryCardInfoItem>
          <EntryCardInfoItem isZeroEmpty={true} label="Junk entries">
            {person.junk}
          </EntryCardInfoItem>
          <EntryCardInfoItem isZeroEmpty={true} label="Found entries">
            {person.total}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledPersonEntriesCard>
  );
}

PersonEntriesCard.propTypes = {
  person: PropTypes.object.isRequired,
  className: PropTypes.string,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

PersonEntriesCard.defaultProps = {
  person: {},
};

export { StyledPersonEntriesCard, PersonEntriesCard };
