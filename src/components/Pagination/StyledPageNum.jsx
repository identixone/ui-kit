import styled from "styled-components";

const PageNum = styled.span`
  cursor: pointer;
  border-radius: 2px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  margin: 5px;
  padding: 6px 7px;
  color: #222;
  text-decoration: none;
  color: ${props => props.active && "#fff"};
  background: ${props => props.active && "#6b7d86"};

  &:hover {
    color: #fff;
    background: #6b7d86;
  }
`;

export default PageNum;
