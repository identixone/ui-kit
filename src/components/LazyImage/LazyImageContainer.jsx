import styled from "styled-components";
import colors from "../../themes/colors";

const LazyImageContainer = styled.div`
  background-color: ${({ isImageLoaded }) =>
    !isImageLoaded ? "#f2f2f2" : colors.whiteSimple};
  overflow: hidden;

  img {
    display: ${({ isImageLoaded }) => (isImageLoaded ? "block" : "none")};
    width: 100%;
    height: 100%;
  }
`;

export default LazyImageContainer;
