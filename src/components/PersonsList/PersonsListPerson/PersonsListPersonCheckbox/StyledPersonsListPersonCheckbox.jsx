import styled from "styled-components";

const StyledPersonsListPersonCheckbox = styled.label`
  position: absolute;
  left: 5px;
  top: 5px;
  transition: opacity 120ms ease-in-out;

  opacity: ${({ isHidden }) => {
    return isHidden ? 0 : 1;
  }};
`;

export default StyledPersonsListPersonCheckbox;
