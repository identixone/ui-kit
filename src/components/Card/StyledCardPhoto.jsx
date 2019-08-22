import styled from "styled-components";

const StyledCardPhoto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-right: 8px solid #efefef;
  height: 150px;
  width: 150px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
  img {
    height: 150px;
  }
`;

export default StyledCardPhoto;
