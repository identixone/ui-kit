import styled from "styled-components";

import Button from "../../../Button";

const FormRangeSliderResetButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  color: #6b787f;
  font-size: 22px;
  transition: opacity 120ms ease-in-out;

  opacity: ${({ isHidden }) => (!isHidden ? 1 : 0)};
`;

export default FormRangeSliderResetButton;
