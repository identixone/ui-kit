import styled from "styled-components";
import theme from "styled-theming";

import { UIBadge } from "../../../UIBadge";

import colors from "../../../../themes/colors";

const color = theme("mode", {
  new: colors.navyBlue,
  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
  accepted: colors.green,
  declined: colors.red,
});

const EntryCardEntryTypeBadge = styled(UIBadge).attrs({ color })`
  font-size: 17px;
  font-weight: 300;
  line-height: 26px;
  text-transform: lowercase;
  border-radius: 3px;
  width: 85px;
  height: 26px;
  display: block;
  box-sizing: border-box;
`;

export { EntryCardEntryTypeBadge };
