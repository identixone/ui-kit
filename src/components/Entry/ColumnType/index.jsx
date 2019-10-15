import React from "react";
import PropTypes from "prop-types";

import StyledColumnDetection from "./StyledColumnDetection";
import StyledTitle from "./StyledTitle";
import StyledType from "./StyledType";

export function ColumnEntryType(props) {
  return (
    <StyledColumnDetection id={props.id}>
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
      <StyledType hasTitle={!!props.title}>{props.type}</StyledType>
    </StyledColumnDetection>
  );
}

ColumnEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.number,
};
