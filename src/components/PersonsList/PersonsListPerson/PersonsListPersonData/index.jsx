import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonData from "./StyledPersonsListPersonData";
import PersonsListPersonDataItem from "./PersonsListPersonDataItem";

import { IdFormat } from "../../../IdFormat";

function PersonsListPersonData({ idxid, source }) {
  return (
    <StyledPersonsListPersonData>
      <PersonsListPersonDataItem>
        <b>ID</b> <IdFormat id={idxid} />
      </PersonsListPersonDataItem>
      <PersonsListPersonDataItem>
        <b>Place of first entry</b>
        <br /> {source}
      </PersonsListPersonDataItem>
    </StyledPersonsListPersonData>
  );
}

PersonsListPersonData.propTypes = {
  idxid: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default PersonsListPersonData;
