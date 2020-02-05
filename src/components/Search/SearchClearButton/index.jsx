import React from "react";
import PropTypes from "prop-types";

import { StyledSearchClearButton } from "./StyledSearchClearButton";
import { SearchClearButtonIcon } from "./SearchClearButtonIcon";

function SearchClearButton({ size, ...restProps }) {
  return (
    <StyledSearchClearButton {...restProps} data-testid="search-clear-btn">
      <SearchClearButtonIcon size={size} />
    </StyledSearchClearButton>
  );
}

SearchClearButton.propTypes = {
  size: PropTypes.number,
};

SearchClearButton.defaultProps = {
  size: 23,
};

export { SearchClearButton, StyledSearchClearButton };
