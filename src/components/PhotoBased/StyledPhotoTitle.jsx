import styled from "styled-components";

const StyledPhotoTitle = styled.div`
  font-size: 13px;
  position: absolute;
  text-transform: uppercase;
  top: 33px;
  text-align: left;
  height: 18px;
  left: ${props => (props.type === "detected" ? "-40px" : "-29px")};
`;

export default StyledPhotoTitle;
