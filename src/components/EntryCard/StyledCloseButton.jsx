import styled from "styled-components";

import { ButtonLink } from "../ButtonLink";

import { EntryAdditionalButton } from "../EntryAdditionalButtons/EntryAdditionalButton";

export const StyledCloseButton = styled(EntryAdditionalButton).attrs(() => ({
  as: ButtonLink,
}))`
  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;

  &:hover {
    color: #374146;
  }
`;
