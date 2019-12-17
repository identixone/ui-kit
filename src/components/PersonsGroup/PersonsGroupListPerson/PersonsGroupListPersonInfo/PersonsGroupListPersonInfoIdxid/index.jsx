import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPersonInfoIdxid } from "./StyledPersonsGroupListPersonInfoIdxid";
import { IdFormat } from "../../../../IdFormat";

export function PersonsGroupListPersonInfoIdxid({ idxid }) {
  return (
    <StyledPersonsGroupListPersonInfoIdxid>
      ID{" "}
      <span>
        <IdFormat>{idxid}</IdFormat>
      </span>
    </StyledPersonsGroupListPersonInfoIdxid>
  );
}

PersonsGroupListPersonInfoIdxid.propTypes = {
  idxid: PropTypes.string.isRequired,
};
