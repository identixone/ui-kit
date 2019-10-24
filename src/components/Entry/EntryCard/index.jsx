import React from "react";
import PropTypes from "prop-types";

import {
  EntryCardContainer,
  EntryCardPhotos,
  EntryCardPhoto,
  EntryCardEntryType,
  EntryCardLiveness,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
  EntryCardInfoItemLabel,
  EntryCardInfoItemValue,
  EntryCardButtonDelete,
} from "../components";
import EntryAdditionalButtons from "../../EntryAdditionalButtons";
import { IdCopy } from "../../IdCopy";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize, formatSex } from "../../../utils/helpers";
import { config } from "../config";

export function EntryCard({ entry, onClick, onDelete }) {
  const confsWithDetected = ["exact", "junk", "nm", "det", "ha"];
  const confsWithInitial = ["new", "exact", "junk", "ha", "reinit"];
  const confsWithDelete = ["new", "exact", "junk", "ha"];

  const isDetectedShow = confsWithDetected.includes(entry.conf);
  const isInitialShow = confsWithInitial.includes(entry.conf);
  const isDeleteble = confsWithDelete.includes(entry.conf);

  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);

  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <EntryCardContainer entry={entry} onClick={() => onClick(entry.id)}>
      <EntryCardLiveness liveness={entry.liveness} />

      <EntryCardPhotos>
        <EntryCardPhoto
          title="Initial"
          facesize={!isDetectedShow && facesizeToRender}
          src={entry.initial_photo}
          isHidden={!isInitialShow}
        />

        <EntryCardPhoto
          title="Detected"
          facesize={facesizeToRender}
          src={entry.photo}
          isHidden={!isDetectedShow}
        />
      </EntryCardPhotos>

      <EntryCardEntryType title="Type" type={entry.conf} />

      <EntryCardInfo>
        <EntryCardInfoColumn>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>ID</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>
              <IdCopy id={entry.idxid} />
            </EntryCardInfoItemValue>
          </EntryCardInfoItem>
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
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Card created</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>
              {timeFormat(entry.idxid_created)}
            </EntryCardInfoItemValue>
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Age</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>{entry.age}</EntryCardInfoItemValue>
          </EntryCardInfoItem>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Sex</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>
              {formatSex(entry.sex)}
            </EntryCardInfoItemValue>
          </EntryCardInfoItem>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Mood</EntryCardInfoItemLabel>
            <EntryCardInfoItemValue>{entry.mood}</EntryCardInfoItemValue>
          </EntryCardInfoItem>
          <EntryCardInfoItem>
            <EntryCardInfoItemLabel>Source</EntryCardInfoItemLabel>
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
    </EntryCardContainer>
  );
}

EntryCard.propTypes = {
  entry: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

EntryCard.defaultProps = {
  entry: {},
};
