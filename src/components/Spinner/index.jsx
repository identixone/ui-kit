import React from "react";
import PropTypes from "prop-types";

import { StyledSpinner } from "./StyledSpinner";
import { SpinnerIcon } from "./SpinnerIcon";

function Spinner({ width, className }) {
  return (
    <StyledSpinner width={width} className={className}>
      <SpinnerIcon isSpin={true} width="40" />
    </StyledSpinner>
  );
}

Spinner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export { Spinner, StyledSpinner };
