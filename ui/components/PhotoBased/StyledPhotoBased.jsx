import styled from "styled-components";

const StyledPhotoBased = styled.div`
  position: relative;
  float: left;
  margin-left: 15px;
  ${props =>
    props.type === "detected" &&
    `
    margin-left: 25px;
    margin-right: 20px;
  `}
  ${props =>
    props.blur &&
    `
    opacity: 0.3;
    filter: blur(5px);
  `}
`;

export default StyledPhotoBased;
