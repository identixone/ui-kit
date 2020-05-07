import styled from "styled-components";

import { colors } from "../../../../style";

export const StyledListLayoutListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 17px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grayMedium};
  }
`;
