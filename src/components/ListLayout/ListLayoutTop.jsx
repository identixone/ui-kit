import styled from "styled-components";

import { ListStickyHeader } from "../ListStickyHeader";

import { colors } from "../../style";

const ListLayoutTop = styled(ListStickyHeader)`
  padding-bottom: 24px;
  padding-top: 24px;
  /** хак, чтобы скрыть отступ страницы (RouteSectionHider) */
  margin-top: -24px;
  background-color: ${colors.whiteSimple};
`;

export { ListLayoutTop };
