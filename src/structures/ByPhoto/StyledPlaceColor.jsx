import styled from "styled-components";
import StyledPlaceRound from "./StyledPlaceRound.jsx";
import { entryTypeColor } from "../../assets/common/themes/entryTypeColor.js";

const StyledPlaceColor = styled(StyledPlaceRound)`
  background-color: ${entryTypeColor};
`;

export default StyledPlaceColor;
