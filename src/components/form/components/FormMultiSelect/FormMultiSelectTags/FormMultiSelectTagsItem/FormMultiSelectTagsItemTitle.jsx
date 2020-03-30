import styled from "styled-components";

import { textTrimStyles } from "../../../../../Text/TextTrim";
import { colors } from "../../../../../../themes/colors";

const FormMultiSelectTagsItemTitle = styled.span`
  margin-right: 4px;
  vertical-align: middle;
  display: inline-block;
  width: 100%;
  color: ${colors.darkBlack};
  font-size: 12px;

  ${textTrimStyles}

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { FormMultiSelectTagsItemTitle };
