import styled from "styled-components";

import { InfoCircle } from "../../../../assets/icons";

import { colors } from "../../../../themes/colors";

const FormFieldIcon = styled(InfoCircle)`
  align-self: flex-start;
  color: ${colors.grayMedium};
  margin-left: 2px;
`;

export { FormFieldIcon };
