import styled from "styled-components";

import { ButtonLink } from "../../ButtonLink";

import { EntryCardAdditionalButton } from "../components";

export const StyledCloseButton = styled(EntryCardAdditionalButton).attrs(
  () => ({
    as: ButtonLink,
  })
)`
  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;

  &:hover {
    color: #374146;
  }
`;
