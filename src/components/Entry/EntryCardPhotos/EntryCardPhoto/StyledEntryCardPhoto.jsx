import styled, { css } from "styled-components";

const StyledEntryCardPhoto = styled.div`
  /* position: relative; */

  display: flex;
  align-items: center;

  ${({ isHidden }) =>
    isHidden &&
    css`
      opacity: 0;
    `}

  /* ${props =>
    props.type === "detected" &&
    css`
      margin-left: 25px;
      margin-right: 20px;
    `} */

  /* ${props =>
    props.blur &&
    css`
      opacity: 0.3;
      filter: blur(5px);
    `} */
`;

export { StyledEntryCardPhoto };
