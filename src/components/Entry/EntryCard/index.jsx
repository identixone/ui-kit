import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { timeFormat, formatFaceSize, formatSex } from "../../../utils/helpers";
import { config } from "../config";

import StyledRow from "../StyledRow";
import StyledColumn from "../columns/StyledColumn";
import StyledEntriesColumn from "../columns/StyledEntriesColumn";

import Liveness from "../Liveness";
import { ColumnEntryType } from "../ColumnType";

import { Value } from "../../Value";
import { EntryCardPhoto } from "../EntryCardPhotos/EntryCardPhoto";
import { IdCopy } from "../../IdCopy";
import { IdFormat } from "../../IdFormat";

import { EntryCardContainer } from "../EntryCardContainer";
import { EntryCardPhotos } from "../EntryCardPhotos/index";

import { EntryCardEntryType } from "./EntryCardEntryType";

import { get } from "lodash-es";

export function EntryCard({ entry, copyId, onClick }) {
  const confsWithDetected = ["exact", "junk", "nm", "det", "ha"];
  const confsWithInitial = ["new", "exact", "junk", "ha", "reinit"];

  const isDetectedShow = confsWithDetected.includes(entry.conf);
  const isInitialShow = confsWithInitial.includes(entry.conf);

  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);

  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <EntryCardContainer entry={entry} onClick={onClick}>
      <Liveness liveness={entry.liveness} />

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

      <EntryCardEntryType type={entry.conf} />

      <StyledEntriesColumn width={280}>
        <StyledRow>
          ID
          {copyId ? <IdCopy id={entry.idxid} /> : <IdFormat id={entry.idxid} />}
        </StyledRow>
        <StyledRow>
          Confidence
          <span>
            <Value>{confidence}</Value>
          </span>
        </StyledRow>
        <StyledRow>
          Detected
          <span>
            <Value>{timeFormat(entry.created)}</Value>
          </span>
        </StyledRow>
        <StyledRow>
          Card created
          <span>
            <Value>{timeFormat(entry.idxid_created)}</Value>
          </span>
        </StyledRow>
      </StyledEntriesColumn>

      <StyledColumn>
        <StyledRow>
          Age
          <span>
            <Value>{entry.age}</Value>
          </span>
        </StyledRow>
        <StyledRow>
          Sex
          <span>
            <Value>{formatSex(entry.sex)}</Value>
          </span>
        </StyledRow>
        <StyledRow>
          Mood
          <span>
            <Value>{entry.mood}</Value>
          </span>
        </StyledRow>
        <StyledRow>
          Source
          <span>
            <Value>{entry.source.name}</Value>
          </span>
        </StyledRow>
      </StyledColumn>
    </EntryCardContainer>
  );
}

EntryCard.propTypes = {
  entry: PropTypes.object,
  onClick: PropTypes.func,
  blurredEntries: PropTypes.bool,
  copyId: PropTypes.bool,
};

EntryCard.defaultProps = {
  active: false,
  live: false,
  entry: {},
  pointer: true,
  copyId: true,
  additionalButtons: false,
};
