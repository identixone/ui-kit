import styled from "styled-components";

const PageCardTitle = styled.h1`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #fff;
  overflow: hidden;
  background-color: ${({ titleColor }) => titleColor};
  width: 120px;
  line-height: 45px;
  border-radius: 0 5px 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 5px;
  padding-right: 5px;
`;

export default PageCardTitle;
