import styled from "styled-components";
import colors from "../themes/colors.js";

const StyledPlace = styled.span`
  color: ${props => props.isLockDrop && colors.graySimple};
`;

export default StyledPlace;
