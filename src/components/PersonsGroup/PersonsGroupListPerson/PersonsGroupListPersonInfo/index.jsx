import React from "react";
import PropTypes from "prop-types";

import { StyledPersonsGroupListPersonInfo } from "./StyledPersonsGroupListPersonInfo";
import { PersonsGroupListPersonInfoPhoto } from "./PersonsGroupListPersonInfoPhoto";
import { PersonsGroupListPersonInfoIdxid } from "./PersonsGroupListPersonInfoIdxid/index";

export function PersonsGroupListPersonInfo({ photo, idxid }) {
  return (
    <StyledPersonsGroupListPersonInfo>
      <PersonsGroupListPersonInfoPhoto src={photo} />
      <PersonsGroupListPersonInfoIdxid idxid={idxid} />
    </StyledPersonsGroupListPersonInfo>
  );
}

PersonsGroupListPersonInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  idxid: PropTypes.string.isRequired,
};
