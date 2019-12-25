import styled, { css } from "styled-components";

const StyledEntryCardPhoto = styled.div`
  display: flex;
  align-items: center;
  min-width: 103px;

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;

export { StyledEntryCardPhoto };
