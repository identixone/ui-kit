import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCard } from "./StyledEntryCard";
import {
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

function EntryCard({ entry, onClick, onDelete, deleted }) {
  const confsWithDetected = ["exact", "junk", "nm", "det", "ha"];
  const confsWithInitial = ["new", "exact", "junk", "ha", "reinit"];
  const confsWithDelete = ["new", "exact", "junk", "ha"];

  const isDetectedShow = confsWithDetected.includes(entry.conf);
  const isInitialShow = confsWithInitial.includes(entry.conf);
  const isDeleteble = confsWithDelete.includes(entry.conf) && !deleted;

  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);

  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <StyledEntryCard
      data-idxid={entry.idxid}
      data-testid="entry-item"
      onClick={() => onClick(entry.id)}
      deleted={deleted}
    >
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
    </StyledEntryCard>
  );
}

EntryCard.propTypes = {
  entry: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  deleted: PropTypes.bool,
};

EntryCard.defaultProps = {
  entry: {},
};

export { EntryCard };
