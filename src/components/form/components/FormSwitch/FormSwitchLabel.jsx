import styled from "styled-components";

import { colors } from "../../../../style";
import { widths } from "./StyledFormSwitch";

const circleSizes = {
  m: 12,
};

const barHeights = {
  m: 20,
};

const calcOffset = ({ checked, size }) => {
  return !checked ? "4px" : widths[size] - circleSizes[size] - 4 + "px";
};

const FormSwitchLabel = styled.div`
  cursor: pointer;
  height: ${({ size }) => barHeights[size] + "px"};
  border-radius: 20px;
  background-color: ${({ checked }) =>
    checked ? colors.slate : colors.grayMedium};

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: ${calcOffset};
    top: 50%;
    transform: translateY(-50%);
    height: ${({ size }) => circleSizes[size] + "px"};
    width: ${({ size }) => circleSizes[size] + "px"};
    border-radius: 50%;
    background-color: ${colors.whiteSimple};
    transition: left 120ms ease-in-out;
  }
`;

export { FormSwitchLabel };
