import styled from "styled-components";

import { colors } from "../../style";

const StyledSearch = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  padding-right: 30px;
  height: 48px;
  border-radius: 8px;
  background-color: ${colors.whiteGrayLight};
  font-size: 16px;
  line-height: 26px;
  color: ${colors.darkBlack};
`;

export { StyledSearch };
