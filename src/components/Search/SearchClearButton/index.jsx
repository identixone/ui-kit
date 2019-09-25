import React from "react";

import { StyledSearchClearButton } from "./StyledSearchClearButton";
import { SearchClearButtonIcon } from "./SearchClearButtonIcon";

function SearchClearButton(props) {
  return (
    <StyledSearchClearButton {...props} data-testid="search-clear-btn">
      <SearchClearButtonIcon size="23" />
    </StyledSearchClearButton>
  );
}

export { SearchClearButton, StyledSearchClearButton };
