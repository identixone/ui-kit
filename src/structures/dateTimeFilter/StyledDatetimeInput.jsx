import styled from "styled-components";
import colors from "../../../ui/assets/common/themes/colors.js";

const LoginFormInput = styled.input`
  font-size: 16px;
  font-weight: 600;
  border: 0px solid ${colors.grayRedDark};
  background-color: ${colors.grayLight};
  border-radius: 5px;
  color: ${colors.black};
  text-align: center;
  outline: none;
  width: 50px;
  height: 23px;
  font-size: 14px;
  font-weight: bold;

  &::placeholder {
    position: relative;
    top: -1px;
    color: ${colors.grayMiddle};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default LoginFormInput;
