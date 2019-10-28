import styled from "styled-components";

import { ButtonLink } from "../../ButtonLink";

import { EntryCardAdditionalButtonStyles } from "../components";

export const StyledListsButton = styled(ButtonLink)`
  ${EntryCardAdditionalButtonStyles}

  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;
`;
