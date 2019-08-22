import styled from "styled-components";

const StyledPagination = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.isVisible ? "1" : "0")}
  visibility: ${props => (props.isVisible ? "visible" : "none")};
`;

export default StyledPagination;
