import React from "react";
import PropTypes from "prop-types";

import { StyledEntryCardLiveness } from "./StyledEntryCardLiveness";

const LIVENESS_LIVE = "live";
const LIVENESS_FAKE = "fake";
const LIVENESS_EMPTY = "";

const LIVENESS_MAP = {
  failed: LIVENESS_FAKE,
  passed: LIVENESS_LIVE,
  undetermined: LIVENESS_EMPTY,
};

function EntryCardLiveness({ liveness, className }) {
  return (
    <StyledEntryCardLiveness className={className}>
      {liveness ? LIVENESS_MAP[liveness] : LIVENESS_EMPTY}
    </StyledEntryCardLiveness>
  );
}

EntryCardLiveness.propTypes = {
  className: PropTypes.string,
  liveness: PropTypes.oneOfType([PropTypes.string]),
};

export { EntryCardLiveness, StyledEntryCardLiveness };
