import styled from "styled-components";

const StyledButtonControlArrow = styled.button`
  height: 40px;
  line-height: 40px;
  width: 40px;
  position: relative;
  margin-top: 1px;
  border: 2px solid #fff;
  border-radius: 4px;
  display: block;
  opacity: 0;
  overflow: hidden;
  text-indent: 200%;
  visibility: hidden;
  white-space: nowrap;
  outline: none;

  border: none;
  padding: 0;
  cursor: pointer;
  :hover {
    background-color: #d6d7da;
  }
  :before {
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    content: "";
  }
  ${props =>
    props.isVisible &&
    `
    opacity: 1;
    visibility: visible;
  `}
  ${props =>
    props.mode === "prev"
      ? `
    :before {
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 10.5px solid #263238;
      border-left: none;
      margin-left: 12.3px;
      margin-right: auto;
    }
  `
      : `
    :before {
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 10.5px solid #263238;
      border-right: none;
      margin-right: 12.3px;
      margin-left: auto;
    }
  `}
`;

export default StyledButtonControlArrow;
