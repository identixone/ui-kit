import styled from "styled-components";

import Button from "../../../../Button";
import { ButtonLink } from "../../../../ButtonLink";

import colors from "../../../../../themes/colors";

const EntryCardActionsButton = styled(Button).attrs(
  ({ to, as, buttonTheme }) => ({
    as: as || to ? ButtonLink : Button,
    buttonTheme: buttonTheme || "reset",
  })
)`
  width: 115px;
  color: ${colors.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 37px;
  background-color: ${colors.grayBlueDark2};
  padding: 0px 22px;
  text-transform: lowercase;
  text-align: center;
  opacity: 0.7;

  &:first-child {
    border-radius: 2px;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &:hover {
    opacity: 1;
  }
`;

export { EntryCardActionsButton };
