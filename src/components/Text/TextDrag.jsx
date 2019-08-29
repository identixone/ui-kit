import styled from "styled-components";

import colors from "../../themes/colors";

export const TextDrag = styled.span`
  color: ${props => props.isLockDrop && colors.graySimple};
`;
