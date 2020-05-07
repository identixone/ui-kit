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

function PersonEntriesCard({
  person,
  actions,
  className,
  "data-testid": testId,
}) {
  return (
    <StyledPersonEntriesCard
      className={className}
      actions={actions}
      data-testid={testId}
    >
      <PersonEntriesCardPhoto
        facesize={formatFaceSize(person.initial_facesize)}
        src={person.initial_photo}
        hasReinit={person.reinit > 0}
      />

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
            {get(person.idxid_source, "name")}
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
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledPersonEntriesCard>
  );
}

PersonEntriesCard.propTypes = {
  person: PropTypes.object.isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

PersonEntriesCard.defaultProps = {
  person: {},
  "data-testid": "person-entries-card",
};

export { StyledPersonEntriesCard, PersonEntriesCard };
