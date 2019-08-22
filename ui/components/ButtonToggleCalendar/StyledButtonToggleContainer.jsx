import styled from "styled-components";

const StyledButtonToggleContainer = styled.span`
  position: relative;
  display: flex;
  height: ${props => props.height || "auto"};
`;

export default StyledButtonToggleContainer;
