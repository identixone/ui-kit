import styled from "styled-components";

import Button from "../../../.../Button";
import colors from "../../../../../../themes/colors";

const FormMultiSelectTagsItemCross = styled(Button).attrs({
  buttonTheme: "reset",
})`
  margin-left: 4px;
  padding: 0;
  padding-top: 1px;
  padding-left: 5px;
  position: absolute;
  right: 6px;
  background: ${colors.whiteSimple};

  &:before {
    font-size: 18px;
    color: #444;
    content: "×";
    font-style: normal;
    cursor: pointer;
  }
`;

export default FormMultiSelectTagsItemCross;
