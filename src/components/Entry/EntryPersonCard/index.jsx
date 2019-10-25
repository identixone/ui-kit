import React from "react";
import PropTypes from "prop-types";

import { StyledEntryPersonCard } from "./StyledEntryPersonCard";
import {
  EntryCardEntryType,
  EntryCardLiveness,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
  EntryCardInfoItemLabel,
  EntryCardInfoItemValue,
  EntryCardButtonDelete,
} from "../components";
import { EntryPersonCardPhoto } from "./EntryPersonCardPhoto";
import EntryAdditionalButtons from "../../EntryAdditionalButtons";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize } from "../../../utils/helpers";
import { config } from "../config";

function EntryPersonCard({ entry, onDelete }) {
  const confsWithDelete = ["exact", "junk", "ha"];

  const isDeleteble = confsWithDelete.includes(entry.conf);

  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);

  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <StyledEntryPersonCard>
      <EntryCardLiveness liveness={entry.liveness} />

      <EntryPersonCardPhoto
        facesize={facesizeToRender}
        src={entry.initial_photo}
      />

      <EntryCardEntryType title="Type" type={entry.conf} />

      <EntryCardInfo>
        <EntryCardInfoColumn>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Confidence</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>{confidence}</EntryCardInfoItemValue>
          </EntryCardInfoItem>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Detected</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>
              {timeFormat(entry.created)}
            </EntryCardInfoItemValue>
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Mood</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>{entry.mood}</EntryCardInfoItemValue>
          </EntryCardInfoItem>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Place of detection</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>
              {get(entry.source, "name")}
            </EntryCardInfoItemValue>
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>

      <EntryAdditionalButtons>
        {isDeleteble && (
          <EntryCardButtonDelete onDelete={() => onDelete(entry.id)}>
            Delete
          </EntryCardButtonDelete>
        )}
      </EntryAdditionalButtons>
    </StyledEntryPersonCard>
  );
}

EntryPersonCard.propTypes = {
  entry: PropTypes.object,
  onDelete: PropTypes.func,
};

EntryPersonCard.defaultProps = {
  entry: {},
};

export { EntryPersonCard };
