import styled from "styled-components";

import StyledPlaceRound from "./StyledPlaceRound";

import { entryTypeColor } from "./entry-type-color";

const StyledPlaceColor = styled(StyledPlaceRound)`
  background-color: ${entryTypeColor};
`;

export default StyledPlaceColor;
