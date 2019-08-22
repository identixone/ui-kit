import styled from "styled-components";

const Column = styled.div`
  position: relative;
  float: left;
  width: ${props => props.width || 258}px;
`;

export default Column;
