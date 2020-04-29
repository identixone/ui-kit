import React from "react";
import PropTypes from "prop-types";

import { StyledInfoCardField } from "./StyledInfoCardField";
import { InfoCardFieldLabel } from "./InfoCardFieldLabel";

function InfoCardField({ label, direction, inline, render, className }) {
  return (
    <StyledInfoCardField
      direction={direction}
      inline={inline}
      className={className}
    >
      {label && <InfoCardFieldLabel>{label}:</InfoCardFieldLabel>}
      {render && render()}
    </StyledInfoCardField>
  );
}

InfoCardField.propTypes = {
  label: PropTypes.string,
  render: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
  inline: PropTypes.bool,
  className: PropTypes.string,
};

InfoCardField.defaultProps = {
  direction: "row",
};

export { InfoCardField, StyledInfoCardField };
