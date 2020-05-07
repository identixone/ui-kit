import styled from "styled-components";

import { Button } from "../../../../Button";
import { ButtonLink } from "../../../../ButtonLink";

import { colors } from "../../../../../style";

const EntryCardActionsButton = styled(Button).attrs(({ to, as }) => ({
  as: as || to ? ButtonLink : Button,
}))`
  width: 115px;
  font-size: 16px;
  color: ${colors.slate};
  font-weight: 600;
  line-height: 32px;
  padding: 0px 22px;
  text-transform: lowercase;
  text-align: center;

  &:first-child {
    border-radius: 2px;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export { EntryCardActionsButton };
