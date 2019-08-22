import styled from "styled-components";
import colors from "../assets/common/themes/colors.js";

const StyledPlace = styled.span`
  color: ${props => props.isLockDrop && colors.graySimple};
`;

export default StyledPlace;
