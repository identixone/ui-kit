import styled from "styled-components";

const StyledFormCheckbox = styled.span`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default StyledFormCheckbox;
