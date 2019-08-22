import styled from "styled-components";
import theme from "styled-theming";

import Button from "../Button";

import colors from "./../../assets/common/themes/colors";

const boxBackgroundColor = theme("mode", {
  blue: colors.simpleBlue,
  red: colors.darkestPink,
});

const StyledButtonClose = styled(Button).attrs({ buttonTheme: "reset" })`
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  background-color: ${boxBackgroundColor};
`;

export default StyledButtonClose;
