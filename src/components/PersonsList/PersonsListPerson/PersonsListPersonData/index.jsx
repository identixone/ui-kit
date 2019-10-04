import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonData from "./StyledPersonsListPersonData";
import PersonsListPersonDataItem from "./PersonsListPersonDataItem";

import { IdFormat } from "../../../IdFormat";
import { Value } from "../../../Value";

function PersonsListPersonData({ idxid, source }) {
  return (
    <StyledPersonsListPersonData>
      <PersonsListPersonDataItem>
        ID <IdFormat>{idxid}</IdFormat>
      </PersonsListPersonDataItem>
      <PersonsListPersonDataItem>
        Place of first entry:
        <br />{" "}
        <b>
          <Value>{source}</Value>
        </b>
      </PersonsListPersonDataItem>
    </StyledPersonsListPersonData>
  );
}

PersonsListPersonData.propTypes = {
  idxid: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default PersonsListPersonData;
