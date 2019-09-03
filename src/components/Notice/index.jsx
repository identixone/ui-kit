import React from "react";
import PropTypes from "prop-types";

import StyledNotice from "./StyledNotice";
import StyledNoticeContainer from "./StyledNoticeContainer";

function Notice({ children, className, ...restProps }) {
  return (
    <StyledNoticeContainer className={className}>
      <StyledNotice data-testid={restProps["data-testid"]}>
        {children}
      </StyledNotice>
    </StyledNoticeContainer>
  );
}

Notice.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

export { Notice, StyledNotice };
