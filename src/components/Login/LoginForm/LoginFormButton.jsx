import styled from "styled-components";

import { Button } from "../../Button";

import { colors } from "../../../style";

const LoginFormButton = styled(Button)`
  width: 128px;
  height: 42px;
  color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 2px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${colors.whiteSimple};
`;

export default LoginFormButton;
