import styled from "styled-components";

import { colors } from "../../../../style";

const StyledFormInput = styled.input`
  box-sizing: border-box;
  padding: 6px 16px;
  height: 30px;
  background-color: ${colors.whiteGrayLight};
  border-radius: 5px;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.darkBlack};
  border: 1px solid transparent;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.grayMedium};
  }

  &:disabled {
    color: ${colors.grayWhite};
  }
`;

export { StyledFormInput };
