import styled from "styled-components";
import theme from "styled-theming";

import { UIBadge } from "../../../UIBadge";

import { colors } from "../../../../style";

const color = theme("mode", {
  new: colors.navyBlue,
  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
  det: colors.slate,
  accepted: colors.green,
  denied: colors.red,
});

const StyledEntryCardEntryType = styled(UIBadge).attrs(() => ({ color }))`
  padding: 0px 6px;
  border-radius: 1px;
  font-weight: 600;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  text-transform: lowercase;
  /**
    Хак для того, чтобы не обрезать бейдж снизу
    внутри контейнеров с oferflow: hidden
   */
  position: absolute;
  top: 3px;
`;

export { StyledEntryCardEntryType };
