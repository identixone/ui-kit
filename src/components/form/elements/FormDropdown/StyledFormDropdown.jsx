import styled from "styled-components";

const StyledFormDropdown = styled.div`
  position: relative;
  width: ${({ width }) => width + "px"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export default StyledFormDropdown;
