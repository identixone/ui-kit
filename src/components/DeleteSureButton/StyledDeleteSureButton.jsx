import styled from "styled-components";

import Button from "../Button";

import colors from "../../themes/colors";

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
