import styled from "styled-components";

import { Button } from "../Button";

const CardSmallButton = styled(Button)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ isHidden }) => {
    return isHidden ? "0" : "1";
  }};
`;

export { CardSmallButton };
