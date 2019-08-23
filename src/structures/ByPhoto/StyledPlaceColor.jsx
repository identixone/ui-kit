import styled from "styled-components";
import StyledPlaceRound from "./StyledPlaceRound.jsx";
import { entryTypeColor } from "../../themes/entryTypeColor";

const StyledPlaceColor = styled(StyledPlaceRound)`
  background-color: ${entryTypeColor};
`;

export default StyledPlaceColor;
