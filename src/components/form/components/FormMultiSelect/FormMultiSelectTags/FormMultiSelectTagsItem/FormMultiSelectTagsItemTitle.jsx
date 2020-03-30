import styled from "styled-components";

import { textTrimStyles } from "../../../../../Text/TextTrim";
import { colors } from "../../../../../../themes/colors";

const FormMultiSelectTagsItemTitle = styled.span`
  font-size: 12px;
  color: ${colors.darkBlack};
  ${textTrimStyles}

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { FormMultiSelectTagsItemTitle };
