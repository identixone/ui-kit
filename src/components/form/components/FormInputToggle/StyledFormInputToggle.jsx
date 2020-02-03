import styled from "styled-components";

import { StyledFormInput } from "../FormInput";

const StyledFormInputToggle = styled.span`
  height: 24px;
  line-height: 24px;
  display: inline-block;
  width: ${props => (props.width ? props.width + "px" : "auto")};
  min-width: ${({ hasValue }) => (hasValue ? "auto" : "100px")};
  cursor: pointer;

  ${StyledFormInput} {
    width: ${props => (props.width ? "100%" : "auto")};
    position: relative;
    left: -11px;
  }
`;

export { StyledFormInputToggle };
