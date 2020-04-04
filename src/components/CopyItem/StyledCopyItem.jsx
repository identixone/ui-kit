import styled from "styled-components";

import { Flash } from "../Flash";

import { colors } from "../../style";

const StyledCopyItem = styled(Flash)`
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.darkBlack};
  display: flex;
`;

export { StyledCopyItem };
