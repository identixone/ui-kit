import { css } from "styled-components";

import { colors } from "../../themes/colors";

const blueTheme = css`
  background-color: ${colors.bluish};
  color: ${colors.whiteSimple};
`;

const grayTheme = css`
  background-color: ${colors.grayWhite};
  color: ${colors.whiteSimple};
`;

export default {
  blue: blueTheme,
  gray: grayTheme,
};
