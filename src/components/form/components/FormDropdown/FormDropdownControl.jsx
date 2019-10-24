import styled from "styled-components";

import Button from "../../../Button";

const FormDropdownControl = styled(Button).attrs({
  buttonTheme: "reset",
})`
  height: 30px;
  background: #f3f3f3;
  color: #555;
  line-height: 30px;
  padding: 0 40px 0 15px;
  width: 100%;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;

  &:after {
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #222;
    content: "";
    display: block;
    margin: auto 0;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  }
`;

export default FormDropdownControl;
