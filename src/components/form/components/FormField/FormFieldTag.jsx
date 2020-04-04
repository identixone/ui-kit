import styled from "styled-components";

import { colors } from "../../../../style";

const FormFieldTag = styled.span`
  display: inline-block;
  align-self: center;
  margin-left: 6px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
  color: ${colors.whiteSimple};
  background-color: ${colors.grayMedium};
  border-radius: 3px;
`;

export default FormFieldTag;
