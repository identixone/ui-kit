import styled, { css } from "styled-components";

import Button from "../../../../Button";
import { ButtonLink } from "../../../../ButtonLink";
import colors from "../../../../../themes/colors";

export const EntryCardAdditionalButtonStyles = css`
  width: 100%;
  opacity: 0.7;
  color: ${colors.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 37px;
  background-color: ${colors.grayBlueDark2};
  padding: 0px 22px;
  text-transform: lowercase;

  &:first-child {
    border-radius: 0 0 0 5px;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const EntryCardAdditionalButton = styled(Button).attrs(({ to }) => ({
  as: to ? ButtonLink : Button,
}))`
  ${EntryCardAdditionalButtonStyles}

  &:hover {
    background-color: ${colors.blueWhite};
    color: ${colors.black};
  }
`;

export { EntryCardAdditionalButton };
