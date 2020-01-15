import styled from "styled-components";
import Button from "../Button";
import theme from "styled-theming";
import colors from "../../themes/colors";

const boxBackgroundColor = theme("mode", {
  blue: colors.middleBlue,
  red: colors.middlePink,
});

const ButtonMiddle = styled(Button).attrs(() => ({
  isRounded: false,
  buttonTheme: "reset",
}))`
  color: #fff;
  background-color: ${boxBackgroundColor};
  min-width: 155px;
`;

export default ButtonMiddle;
