import styled, { keyframes } from "styled-components";

function animation(props) {
  return keyframes`
  from {
    transform: translateY(${props.translateFrom}px);
  }

  to {
    transform: translateY(${props.translateTo}px);
  }
`;
}

const Slidee = styled.ul`
  animation: ${props => animation(props)} 0.3s ease-in-out;
  height: 6500px;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  li {
    float: left;
    margin: 4px 0 4px 0;
    padding: 0;
    width: 938px;
  }
  li:first-child {
    margin-top: 0;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

export default Slidee;
