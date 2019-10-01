import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsListListPersonInfo } from "./StyledPersonsListListPersonInfo";
import { PersonsListListPersonInfoPhoto } from "./PersonsListListPersonInfoPhoto";
import { PersonsListListPersonInfoIdxid } from "./PersonsListListPersonInfoIdxid/index";

export function PersonsListListPersonInfo({ photo, idxid }) {
  return (
    <StyledPersonsListListPersonInfo>
      <PersonsListListPersonInfoPhoto src={photo} />
      <PersonsListListPersonInfoIdxid idxid={idxid} />
    </StyledPersonsListListPersonInfo>
  );
}

PersonsListListPersonInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  idxid: PropTypes.string.isRequired,
};
