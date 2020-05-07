import styled, { css } from "styled-components";

import { colors } from "../../../style";

function getStyles({ isActive }) {
  return (
    isActive &&
    css`
      background-color: ${colors.orangeDark};
    `
  );
}

const PersonsGroupPersonId = styled.span`
  padding-left: 2px;
  padding-right: 2px;
  font-size: 12px;
  line-height: 11px;
  color: ${colors.darkBlack};
  margin-bottom: 12px;
  ${getStyles}
`;

export { PersonsGroupPersonId };
