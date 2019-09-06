import styled from "styled-components";

const widths = {
  s: 28,
  m: 40,
};

export const StyledFormSwitch = styled.div`
  position: relative;
  width: ${({ size }) => widths[size] + "px"};
  user-select: none;
`;
