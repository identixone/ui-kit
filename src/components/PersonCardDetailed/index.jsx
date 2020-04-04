import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { StyledPersonCardDetailed } from "./StyledPersonCardDetailed";
import { PersonCardDetailedSpinner } from "./PersonCardDetailedSpinner";
import {
  PersonCardDetailedData,
  PersonCardDetailedDataItem,
} from "./PersonCardDetailedData";
import { NoticeHero } from "../NoticeHero";

import { Ban, PlaylistAddCheck } from "../icons";

function PersonCardDetailed({
  person,
  fetchPerson,
  personIdxid,
  isLoading,
  isPersonNotExists,
  children,
  className,
  "data-testid": testId,
}) {
  useEffect(() => {
    if (personIdxid) {
      fetchPerson({ idxid: personIdxid });
    }
  }, [personIdxid]);

  return (
    <StyledPersonCardDetailed data-testid={testId} className={className}>
      {isLoading ? (
        <PersonCardDetailedSpinner />
      ) : person && !isPersonNotExists ? (
        children
      ) : isPersonNotExists ? (
        <NoticeHero icon={<Ban size="48" />} title="Person not found" />
      ) : (
        <NoticeHero
          icon={<PlaylistAddCheck size="48" />}
          title="Select person to view details"
        />
      )}
    </StyledPersonCardDetailed>
  );
}

PersonCardDetailed.Data = PersonCardDetailedData;
PersonCardDetailed.DataItem = PersonCardDetailedDataItem;

PersonCardDetailed.propTypes = {
  person: PropTypes.object,
  fetchPerson: PropTypes.func.isRequired,
  personIdxid: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isPersonNotExists: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  className: PropTypes.string.isRequired,
  "data-testid": PropTypes.string,
};

PersonCardDetailed.defaultProps = {
  "data-testid": "person-card-detailed",
};

export * from "./PersonCardDetailedData";
export * from "./PersonCardDetailedActions";
export {
  PersonCardDetailed,
  StyledPersonCardDetailed,
  PersonCardDetailedData,
  PersonCardDetailedDataItem,
};
