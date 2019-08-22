import React from "react";
import StyledColumnDetection from "./StyledColumnDetection";
import StyledColumnIdDetection from "./StyledColumnIdDetection";
import StyledTitle from "./StyledTitle.jsx";
import StyledType from "./StyledType.jsx";
import PropTypes from "prop-types";

export function ColumnEntryType(props) {
  return (
    <StyledColumnDetection>
      <StyledTitle>Type</StyledTitle>
      <StyledType>{props.type}</StyledType>
    </StyledColumnDetection>
  );
}

ColumnEntryType.propTypes = {
  type: PropTypes.string.isRequired,
};

export function ColumnEntryIdType(props) {
  return (
    <StyledColumnIdDetection>
      <StyledTitle>Type</StyledTitle>
      <StyledType data-testid="entry-type">{props.type}</StyledType>
    </StyledColumnIdDetection>
  );
}

ColumnEntryIdType.propTypes = {
  type: PropTypes.string.isRequired,
};
