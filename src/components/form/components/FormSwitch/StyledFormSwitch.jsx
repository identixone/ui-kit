import styled from "styled-components";

const widths = {
  s: 28,
  m: 40,
};

const StyledFormSwitch = styled.label`
  display: block;
  position: relative;
  width: ${({ size }) => widths[size] + "px"};
  user-select: none;
`;

export { StyledFormSwitch };
