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

const SliderInner = styled.ul`
  animation: ${(props) => animation(props)} 0.3s ease-in-out;
  height: 6500px;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
`;

export { SliderInner };
