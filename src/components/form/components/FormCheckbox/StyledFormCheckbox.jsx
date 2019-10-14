import styled from "styled-components";

import CheckboxThemes from "./CheckboxThemes";

const StyledFormCheckbox = styled.label`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;

  box-sizing: border-box;
  display: block;

  width: 24px;
  height: 24px;
  border: 1px solid;
  border-radius: 2px;
  transition: background-color 120ms ease-in-out, border-color 120ms ease-in-out;

  ${({ checkboxTheme }) => CheckboxThemes[checkboxTheme]};
`;

export default StyledFormCheckbox;
