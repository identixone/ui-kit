import styled from "styled-components";

import { colors } from "../../../themes/colors";

export const StyledPersonsListPerson = styled.li`
  width: 278px;
  height: 94px;
  border-radius: 4px;
  background-color: ${colors.iceBlue};
  display: flex;
  position: relative;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
