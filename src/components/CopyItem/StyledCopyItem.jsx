import styled from "styled-components";

import { Flash } from "@identixone/ui-kit/src/components/Flash";

import { colors } from "@identixone/ui-kit/src/themes/colors";

const StyledCopyItem = styled(Flash)`
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.darkBlack};
  display: flex;
`;

export { StyledCopyItem };
