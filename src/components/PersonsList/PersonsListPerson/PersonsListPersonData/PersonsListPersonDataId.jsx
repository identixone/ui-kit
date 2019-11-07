import styled, { css } from "styled-components";

import { colors } from "../../../../themes/index";

function getStyles({ isActive }) {
  return (
    isActive &&
    css`
      background-color: ${colors.orangeDark};
      color: ${colors.black};
    `
  );
}

const PersonsListPersonDataId = styled.span`
  padding-left: 2px;
  padding-right: 2px;

  ${getStyles}
`;

export { PersonsListPersonDataId };
