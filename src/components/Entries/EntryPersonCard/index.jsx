import React from "react";
import PropTypes from "prop-types";

import { StyledEntryPersonCard } from "./StyledEntryPersonCard";
import {
  EntryCardEntryType,
  EntryCardLiveness,
  EntryCardInfo,
  EntryCardInfoColumn,
  EntryCardInfoItem,
} from "../components";
import { EntryPersonCardPhoto } from "./EntryPersonCardPhoto";

import { get } from "lodash-es";
import { timeFormat, formatFaceSize } from "../../../utils/helpers";
import { config } from "../config";

function EntryPersonCard({
  entry,
  actions,
  className,
  "data-testid": testId,
  theme,
}) {
  const confidence = get(config.entryType, `[${entry.conf}].full`, entry.conf);
  const facesizeToRender = formatFaceSize(entry.facesize);

  return (
    <StyledEntryPersonCard
      deleted={entry.deleted}
      actions={actions}
      className={className}
      data-testid={testId}
      theme={theme}
    >
      <EntryPersonCardPhoto facesize={facesizeToRender} src={entry.photo} />

      <EntryCardEntryType title="Type" type={entry.conf} />

      <EntryCardInfo>
        <EntryCardLiveness liveness={entry.liveness} />

        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Confidence">{confidence}</EntryCardInfoItem>
          <EntryCardInfoItem label="Detected">
            {timeFormat(entry.created)}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>

        <EntryCardInfoColumn>
          <EntryCardInfoItem label="Mood">{entry.mood}</EntryCardInfoItem>
          <EntryCardInfoItem label="Place of detection">
            {get(entry.source, "name")}
          </EntryCardInfoItem>
        </EntryCardInfoColumn>
      </EntryCardInfo>
    </StyledEntryPersonCard>
  );
}

EntryPersonCard.propTypes = {
  entry: PropTypes.object.isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
};

EntryPersonCard.defaultProps = {
  entry: {},
  "data-testid": "entry-person-card",
  theme: "light",
};

export { EntryPersonCard, StyledEntryPersonCard };
