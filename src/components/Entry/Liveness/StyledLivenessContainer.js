import styled from "styled-components";

const StyledLivenessContainer = styled.label`
  position: absolute;
  top: ${props => props.top || "87"}px;
  left: ${props => props.left || "355"}px;
  font-size: 75px;
  font-weight: 700;
  letter-spacing: -4px;
  color: #5d7784;
  opacity: 0.2;
`;

export default StyledLivenessContainer;
