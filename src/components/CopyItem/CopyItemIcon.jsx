import styled from "styled-components";

import { Clone } from "@identixone/ui-kit/src/assets/icons";
import { colors } from "@identixone/ui-kit/src/themes/colors";

const CopyItemIcon = styled(Clone)`
  color: ${colors.grayMedium};
  margin-left: 4px;
  align-self: flex-start;
`;

export { CopyItemIcon };
