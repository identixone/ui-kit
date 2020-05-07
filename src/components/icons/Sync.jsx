import styled, { css } from "styled-components";

import { SyncAlt } from "@styled-icons/fa-solid/SyncAlt";
import { spin } from "../../style";

const SyncIcon = styled(SyncAlt)`
  animation: ${({ isSpin }) =>
    isSpin &&
    css`
      ${spin} 2s infinite linear;
    `};
`;

export default SyncIcon;
