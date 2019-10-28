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
} from "../components";
import { IdCopy } from "../../IdCopy";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize, formatSex } from "../../../utils/helpers";
import { config } from "../config";

function EntryCard({
  entry,
  onClick,
  actions,
  confsWithInitialBlurred,
  className,
}) {
  const confsWithDetected = ["exact", "junk", "nm", "det", "ha"];
  const confsWithInitial = ["new", "exact", "junk", "ha", "reinit"];

  const isDetectedShow = confsWithDetected.includes(entry.conf);
  const isInitialShow = confsWithInitial.includes(entry.conf);
  const isInitialBlurred = confsWithInitialBlurred.includes(entry.conf);

  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);

  const facesizeToRender = formatFaceSize(entry.facesize);

  function handleEntryCardClick() {
    if (onClick) {
      onClick(entry.id);
    }
  }

  return (
    <StyledEntryCard
      data-idxid={entry.idxid}
      data-testid="entry-item"
      onClick={handleEntryCardClick}
      deleted={entry.deleted}
      className={className}
      actions={actions}
    >
      <EntryCardPhotos>
        <EntryCardPhoto
          title="Initial"
          facesize={!isDetectedShow && facesizeToRender}
          src={entry.initial_photo}
          hidden={!isInitialShow}
          blurred={isInitialBlurred}
        />

        <EntryCardPhoto
          title="Detected"
          facesize={facesizeToRender}
          src={entry.photo}
          hidden={!isDetectedShow}
        />
      </EntryCardPhotos>

      <EntryCardEntryType title="Type" type={entry.conf} />

      <EntryCardInfo>
        <EntryCardLiveness liveness={entry.liveness} />

        <EntryCardInfoColumn>
          <EntryCardInfoItem label="ID">
            <IdCopy id={entry.idxid} />
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Confidence">{confidence}</EntryCardInfoItem>
          <EntryCardInfoItem label="Detected">
            {timeFormat(entry.created)}
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Card created">
            {timeFormat(entry.idxid_created)}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Age">{entry.age}</EntryCardInfoItem>
          <EntryCardInfoItem label="Sex">
            {formatSex(entry.sex)}
          </EntryCardInfoItem>
          <EntryCardInfoItem label="Mood">{entry.mood}</EntryCardInfoItem>
          <EntryCardInfoItem label="Source">
            {get(entry.source, "name")}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledEntryCard>
  );
}

EntryCard.propTypes = {
  entry: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  confsWithInitialBlurred: PropTypes.array.isRequired,
  className: PropTypes.string,
};

EntryCard.defaultProps = {
  entry: {},
  confsWithInitialBlurred: [],
};

export { EntryCard, StyledEntryCard };
