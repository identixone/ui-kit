import styled from "styled-components";

const StyledSlider = styled.div`
  overflow: hidden;
  width: 100%;
  height: ${(props) => (props.height !== undefined ? props.height : "auto")}px;
`;

export { StyledSlider };
