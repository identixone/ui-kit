import styled from "styled-components";

import { colors } from "../../style";

export const TextDrag = styled.span`
  color: ${(props) => props.isLockDrop && colors.graySimple};
`;
