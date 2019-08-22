import styled from "styled-components";

import colors from "../../../ui/assets/common/themes/colors.js";

import Button from "../Button";

const DeleteSureButton = styled(Button).attrs({ buttonTheme: "reset" })`
  background-color: ${colors.blueWhite};
  width: 105px;

  ${({ isSure, deleteColor }) =>
    isSure && `background-color: ${deleteColor}; color: ${colors.whiteSimple};`}

  &:hover {
    background-color: ${({ deleteColor }) => deleteColor};
    color: ${colors.whiteSimple};
  }
`;

export default DeleteSureButton;
