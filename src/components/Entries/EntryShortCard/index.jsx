import React from "react";
import PropTypes from "prop-types";

import { StyledEntryShortCard } from "./StyledEntryShortCard";
import {
  EntryCardPhotos,
  EntryCardPhoto,
  EntryCardEntryType,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
  EntryCardButtonDelete,
} from "../components";
import EntryAdditionalButtons from "../../EntryAdditionalButtons";

import { timeFormat } from "../../../utils/helpers";

function EntryShortCard({ entry, onClick, onDelete }) {
  const isDetectedShow = Boolean(entry.detected_photo);
  const isInitialShow = Boolean(entry.initial_photo);
  const isDeleteble = !entry.deleted;

  const mode = entry.accepted ? "accepted" : "denied";
  const direction =
    {
      0: "Enter",
      1: "Exit",
    }[entry.direction] || "all";

  function handleEntryCardClick() {
    if (onClick) {
      onClick(entry.id);
    }
  }

  function handleEntryCardDeleteClick() {
    if (onDelete && isDeleteble) {
      onDelete(entry.id);
    }
  }

  return (
    <StyledEntryShortCard
      data-idxid={entry.idxid}
      data-testid="entry-item"
      onClick={handleEntryCardClick}
      deleted={entry.deleted}
      actions={
        isDeleteble && (
          <EntryAdditionalButtons>
            <EntryCardButtonDelete onDelete={handleEntryCardDeleteClick}>
              Delete
            </EntryCardButtonDelete>
          </EntryAdditionalButtons>
        )
      }
    >
      <EntryCardPhotos>
        <EntryCardPhoto
          title="Initial"
          src={entry.initial_photo}
          hidden={!isInitialShow}
        />

        <EntryCardPhoto
          title="Detected"
          src={entry.detected_photo}
          hidden={!isDetectedShow}
        />
      </EntryCardPhotos>

      <EntryCardEntryType type={mode} />

      <EntryCardInfo>
        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Full name">
            {entry.person}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Direction">{direction}</EntryCardInfoItem>
          <EntryCardInfoItem label="Device">{entry.device}</EntryCardInfoItem>
          <EntryCardInfoItem label="Source">{entry.source}</EntryCardInfoItem>
          <EntryCardInfoItem label="Detected">
            {timeFormat(entry.created)}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledEntryShortCard>
  );
}

EntryShortCard.propTypes = {
  entry: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  deleted: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
};

EntryShortCard.defaultProps = {
  entry: {},
};

export { EntryShortCard };
