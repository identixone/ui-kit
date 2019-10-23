import React from "react";
import PropTypes from "prop-types";

import StyledColumnDetection from "./StyledColumnDetection";
import StyledTitle from "./StyledTitle";
import StyledType from "./StyledType";

function EntryCardEntryType(props) {
  return (
    <StyledColumnDetection id={props.id}>
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
      <StyledType hasTitle={!!props.title}>{props.type}</StyledType>
    </StyledColumnDetection>
  );
}

EntryCardEntryType.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.number,
};

export { EntryCardEntryType };
