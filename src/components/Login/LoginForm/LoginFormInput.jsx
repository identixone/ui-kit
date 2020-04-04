import styled from "styled-components";

import { colors } from "../../../style";

const LoginFormInput = styled.input`
  font-size: 16px;
  font-weight: 600;
  border: 0px solid ${colors.grayRedDark};
  background-color: ${colors.grayRedLight};
  border-radius: 2px;
  color: ${colors.black};
  padding: 9px 45px 9px 40px;
  width: 160px;
  height: 22px;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
  outline: none;

  &::placeholder {
    position: relative;
    top: -1px;
    color: ${colors.grayRedMiddle};
    font-size: 12px;
    font-weight: 600;
    padding: 4px 0 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default LoginFormInput;
