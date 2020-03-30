import styled from "styled-components";

const widths = {
  m: 44,
};

const StyledFormSwitch = styled.label`
  display: block;
  position: relative;
  width: ${({ size }) => widths[size] + "px"};
  user-select: none;
`;

export { StyledFormSwitch, widths };
