import React from "react";
import PropTypes from "prop-types";

import StyledColumnDetection from "./StyledColumnDetection";
import StyledColumnIdDetection from "./StyledColumnIdDetection";
import StyledTitle from "./StyledTitle";
import StyledType from "./StyledType";

export function ColumnEntryType(props) {
  return (
    <StyledColumnDetection>
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
      <StyledType>{props.type}</StyledType>
    </StyledColumnDetection>
  );
}

ColumnEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export function ColumnEntryIdType(props) {
  return (
    <StyledColumnIdDetection>
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
      <StyledType data-testid="entry-type">{props.type}</StyledType>
    </StyledColumnIdDetection>
  );
}

ColumnEntryIdType.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};
