import styled from "styled-components";

import { colors } from "@identixone/ui-kit/src/themes/colors";
import { PopupContainer } from "@identixone/ui-kit/src/components/PopupContainer";

const EntriesDateTimeFilterPopup = styled(PopupContainer)`
  background-color: ${colors.whiteSimple};
  width: 356px;
  min-height: 490px;
  border-radius: 4px;
  box-shadow: 0 0 80px 0 #a2b6bd33;
  padding: 16px 24px 20px;
  box-sizing: border-box;
  z-index: 11;
`;

export { EntriesDateTimeFilterPopup };
