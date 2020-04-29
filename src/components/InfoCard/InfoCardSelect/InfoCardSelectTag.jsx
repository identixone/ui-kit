import styled from "styled-components";

import { textTrimStyles } from "../../Text/TextTrim";
import { colors } from "../../../style";

const InfoCardSelectTag = styled.li`
  background-color: ${colors.grayLight};
  padding: 4px 6px;
  font-size: 12px;
  line-height: 11px;
  text-align: center;
  color: ${colors.darkBlack};
  box-sizing: border-box;
  border-radius: 2px;
  height: 20px;
  max-width: 180px;
  ${textTrimStyles}

  &:not(:last-child) {
    margin-right: 6px;
  }
`;

export { InfoCardSelectTag };
