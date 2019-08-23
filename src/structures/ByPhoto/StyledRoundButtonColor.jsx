import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { entryTypeColor } from "../../themes/entryTypeColor";
import colors from "../../themes/colors";

const StyledRoundButtonColor = styled(NavLink)`
  padding: 1px 12px;
  margin-right: 5px;
  border-radius: 15px;
  cursor: pointer;
  color: ${colors.whiteSimple};
  background-color: ${entryTypeColor};
  cursor: pointer;
`;

export default StyledRoundButtonColor;
