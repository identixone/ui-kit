import styled from "styled-components";

import { colors } from "../../../../../../themes/colors";

const StyledFormMultiSelectTagsItem = styled.li`
  padding: 4px 6px;
  background-color: ${colors.whiteSimple};
  cursor: pointer;
  border-radius: 2px;
  max-width: 180px;
  position: relative;
  display: flex;
  align-items: center;
`;

export { StyledFormMultiSelectTagsItem };
