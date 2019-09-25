import React from "react";
import styled from "styled-components";

import { Button } from "../../Button";
import { SearchInputClearButtonIcon } from "./SearchInputClearButtonIcon";

export const StyledSearchInputClearButton = styled(Button).attrs({
  buttonTheme: "reset",
})`
  height: 23px;
  width: 23px;
  padding: 0px;
`;

export function SearchInputClearButton(props) {
  return (
    <StyledSearchInputClearButton {...props} data-testid="search-clear-btn">
      <SearchInputClearButtonIcon size="23" />
    </StyledSearchInputClearButton>
  );
}
