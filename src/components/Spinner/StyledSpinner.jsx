import styled from "styled-components";

const StyledSpinner = styled.div`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  display: flex;
  min-height: 40px;
  justify-content: center;
  align-content: center;
`;

export { StyledSpinner };
