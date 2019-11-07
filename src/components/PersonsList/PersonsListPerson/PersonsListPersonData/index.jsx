import React from "react";
import PropTypes from "prop-types";

import StyledPersonsListPersonData from "./StyledPersonsListPersonData";
import PersonsListPersonDataItem from "./PersonsListPersonDataItem";

import { PersonsListPersonDataId } from "./PersonsListPersonDataId";
import { Value } from "../../../Value";
import { IdFormat } from "../../../IdFormat/index";

function PersonsListPersonData({ idxid, source, isActive }) {
  return (
    <StyledPersonsListPersonData>
      <PersonsListPersonDataItem>
        ID{" "}
        <PersonsListPersonDataId isActive={isActive}>
          <IdFormat>{idxid}</IdFormat>
        </PersonsListPersonDataId>
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
  isActive: PropTypes.bool.isRequired,
};

export default PersonsListPersonData;
