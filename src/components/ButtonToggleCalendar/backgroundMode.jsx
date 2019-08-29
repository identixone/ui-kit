import theme from "styled-theming";
import colors from "../../themes/colors";

const boxBackgroundColor = theme("mode", {
  new: colors.navyBlue,

  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
});

export default boxBackgroundColor;
