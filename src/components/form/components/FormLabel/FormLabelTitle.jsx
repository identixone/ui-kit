import styled from "styled-components";

import { colors } from "../../../../style";

const FormLabelTitle = styled.span`
  display: flex;
  font-weight: ${({ bold }) => (bold ? 600 : 200)};
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.darkBlack};
`;

export { FormLabelTitle };
