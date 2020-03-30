import styled from "styled-components";

import { Button } from "../../../../../Button";
import { colors } from "../../../../../../themes/colors";

const FormMultiSelectTagsItemRemoveButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  padding: 0;
  display: flex;
  background: ${colors.whiteSimple};
`;

export { FormMultiSelectTagsItemRemoveButton };
