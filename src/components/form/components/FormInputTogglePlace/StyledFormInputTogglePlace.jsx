import styled from "styled-components";

import { StyledFormInput } from "../FormInput";

export const StyledFormInputTogglePlace = styled.span`
  height: 24px;
  line-height: 24px;
  display: inline-block;
  width: ${props => (props.width ? props.width : "auto")};
  min-width: ${({ hasValue }) => (hasValue ? "auto" : "100px")};
  position: relative;
  cursor: pointer;

  ${StyledFormInput} {
    width: ${props => (props.width ? "100%" : "auto")};
    box-sizing: border-box;
    position: relative;
    left: -11px;
  }
`;
