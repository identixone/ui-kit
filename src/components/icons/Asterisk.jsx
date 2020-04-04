import styled, { css } from "styled-components";

import { Asterisk } from "@styled-icons/fa-solid/Asterisk";
import { spin } from "../../style";

const AsteriskIcon = styled(Asterisk)`
  animation: ${({ isSpin }) =>
    isSpin &&
    css`
      ${spin} 2s infinite linear;
    `};
`;

export default AsteriskIcon;
