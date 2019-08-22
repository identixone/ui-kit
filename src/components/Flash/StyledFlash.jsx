import styled from "styled-components";

const StyledFlash = styled.span`
  display: block;
  transition: opacity 120ms ease-in-out;
  opacity: ${({ isFlashing }) => (isFlashing ? 0.1 : 1)};
  cursor: pointer;
`;

export default StyledFlash;
