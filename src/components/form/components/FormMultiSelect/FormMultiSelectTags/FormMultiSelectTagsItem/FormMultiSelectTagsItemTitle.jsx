import styled from "styled-components";

import { textTrimStyles } from "../../../../../Text/TextTrim";
import { colors } from "../../../../../../style";

const FormMultiSelectTagsItemTitle = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: ${colors.darkBlack};
  ${textTrimStyles}

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export { FormMultiSelectTagsItemTitle };
