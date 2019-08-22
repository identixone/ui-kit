import styled from "styled-components";

const StyledPhotoContainter = styled.div`
  overflow: hidden;
  border-radius: 6px;
  height: 85px;
  width: 85px;
  background: ${props =>
    !props.noBackground && props.loadBackground && "#f2f2f2"};

  img {
    height: 100%;
    width: 100%;
  }
`;

export default StyledPhotoContainter;
