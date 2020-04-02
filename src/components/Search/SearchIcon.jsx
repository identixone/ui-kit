import styled from "styled-components";

import { Search } from "../../assets/icons";

import { colors } from "../../themes/colors";

const SearchIcon = styled(Search)`
  margin-right: 16px;
  min-width: 24px;
  color: ${colors.darkBlack};
`;

export { SearchIcon };
