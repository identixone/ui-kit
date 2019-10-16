import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsListListPersonInfoIdxid } from "./StyledPersonsListListPersonInfoIdxid";
import { IdFormat } from "../../../../IdFormat";

export function PersonsListListPersonInfoIdxid({ idxid }) {
  return (
    <StyledPersonsListListPersonInfoIdxid>
      ID{" "}
      <span>
        <IdFormat>{idxid}</IdFormat>
      </span>
    </StyledPersonsListListPersonInfoIdxid>
  );
}

PersonsListListPersonInfoIdxid.propTypes = {
  idxid: PropTypes.string.isRequired,
};
