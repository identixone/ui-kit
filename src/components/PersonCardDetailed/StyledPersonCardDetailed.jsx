import styled from "styled-components";

import { StyledButton } from "../Button";
import { ListLayoutDetailed } from "../ListLayout/ListLayoutDetailed";

import { colors } from "../../style";

const StyledPersonCardDetailed = styled(ListLayoutDetailed)`
  ${StyledButton}:not(:hover) {
    color: ${colors.slate};
    width: 100%;
  }
`;

export { StyledPersonCardDetailed };
