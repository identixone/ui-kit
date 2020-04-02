import styled from "styled-components";

import { Button } from "../Button";

import { colors } from "../../themes/colors";

const SearchClearButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  position: absolute;
  right: 16px;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
  color: ${colors.darkBlack};
`;

export { SearchClearButton };
