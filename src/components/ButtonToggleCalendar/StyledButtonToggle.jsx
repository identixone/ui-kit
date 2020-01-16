import styled from "styled-components";
import Button from "../Button";
import theme from "styled-theming";
import colors from "../../themes/colors";

const boxBackgroundColor = theme("mode", {
  blue: colors.darkestBlue,
  red: colors.simplePink,
});

const StyledButtonToggle = styled(Button).attrs(() => ({
  buttonTheme: "lighter",
}))`
  color: ${props => props.isActive && colors.whiteSimple};
  border-radius: ${props => (props.isActive ? "3px 0 0 3px" : "3px")};
  background-color: ${props =>
    props.isActive ? boxBackgroundColor : "#efecec"};
  height: 30px;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export default StyledButtonToggle;
