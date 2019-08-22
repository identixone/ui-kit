import React from "react";
import PropTypes from "prop-types";
import StyledLivenessContainer from "./StyledLivenessContainer";

const LIVENESS_LIVE = "live";
const LIVENESS_FAKE = "fake";
const LIVENESS_EMPTY = "";

const LIVENESS_MAP = {
  failed: LIVENESS_FAKE,
  passed: LIVENESS_LIVE,
  undetermined: LIVENESS_EMPTY,
};

function Liveness(props) {
  const { liveness, className } = props;

  return (
    <StyledLivenessContainer className={className}>
      {liveness ? LIVENESS_MAP[liveness] : LIVENESS_EMPTY}
    </StyledLivenessContainer>
  );
}
Liveness.propTypes = {
  className: PropTypes.string,
  liveness: PropTypes.oneOfType([PropTypes.string]),
};

export default Liveness;
