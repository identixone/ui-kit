import styled from "styled-components";

import { ButtonLink } from "../ButtonLink";

import { EntryAdditionalButtonStyles } from "../EntryAdditionalButtons/EntryAdditionalButton";

export const StyledListsButton = styled(ButtonLink)`
  ${EntryAdditionalButtonStyles}

  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;
`;
