import styled from "styled-components";

const StyledFormDropdown = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export { StyledFormDropdown };
