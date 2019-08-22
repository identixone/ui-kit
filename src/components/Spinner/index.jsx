import React from "react";
import PropTypes from "prop-types";

import StyledSpinnerContainer from "./StyledSpinnerContainer";
import SpinnerIcon from "./SpinnerIcon";

function Spinner({ width, className }) {
  return (
    <StyledSpinnerContainer width={width} className={className}>
      <SpinnerIcon isSpin={true} width="40" />
    </StyledSpinnerContainer>
  );
}

Spinner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export { Spinner };
