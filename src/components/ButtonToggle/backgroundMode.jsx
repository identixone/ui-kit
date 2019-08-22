import theme from "styled-theming";
import colors from "./../../assets/common/themes/colors";

const boxBackgroundColor = theme("mode", {
  new: colors.navyBlue,

  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
});

export default boxBackgroundColor;
