import React from "react";
import PropTypes from "prop-types";

import { StyledPageCard } from "./StyledPageCard";
import { PageCardButtons } from "./PageCardButtons";

function PageCard({ children, className, buttons, "data-testid": testId }) {
  return (
    <StyledPageCard className={className} data-testid={testId}>
      {buttons && <PageCardButtons>{buttons}</PageCardButtons>}
      {children}
    </StyledPageCard>
  );
}

PageCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  buttons: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { PageCard, StyledPageCard };
