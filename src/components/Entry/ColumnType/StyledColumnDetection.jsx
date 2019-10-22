import styled from "styled-components";
import StyledColumn from "../columns/StyledColumn";

const StyledColumnDetection = styled(StyledColumn)`
  position: relative;
  margin-left: ${props => (props.id ? "28" : "10")}px;
  margin-top: ${props => (props.id ? "5" : "0")}px;
  padding-right: 10px;
  height: 85px;
  width: 85px;
`;

export default StyledColumnDetection;
