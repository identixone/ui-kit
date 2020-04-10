import styled from "styled-components";

const widths = {
  m: 36,
};

const StyledFormSwitch = styled.label`
  display: block;
  position: relative;
  width: ${({ size }) => widths[size] + "px"};
  user-select: none;
`;

export { StyledFormSwitch, widths };
