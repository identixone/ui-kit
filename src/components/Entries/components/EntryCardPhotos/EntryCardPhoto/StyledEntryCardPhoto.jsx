import styled, { css } from "styled-components";

const StyledEntryCardPhoto = styled.div`
  display: flex;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}

  ${({ blurred }) =>
    blurred &&
    css`
      opacity: 0.3;
      filter: blur(5px);
    `}
`;

export { StyledEntryCardPhoto };
