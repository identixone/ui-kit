import styled from "styled-components";

import { Button } from "../../Button";

export const StyledSearchClearButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  height: 23px;
  width: 23px;
  padding: 0px;
`;
