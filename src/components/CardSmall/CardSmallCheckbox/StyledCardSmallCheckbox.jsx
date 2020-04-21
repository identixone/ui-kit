import styled from "styled-components";

const StyledCardSmallCheckbox = styled.label`
  position: absolute;
  left: 6px;
  top: 6px;
  transition: opacity 120ms ease-in-out;
  z-index: 1;

  opacity: ${({ isHidden }) => {
    return isHidden ? "0" : "1";
  }};
`;

export { StyledCardSmallCheckbox };
