import styled from "styled-components";

import {
  Search,
  SearchIcon,
  SearchFakeInputValue,
  SearchInput,
} from "../index.jsx";

import { colors } from "../../../themes/index.js";

const SearchCompact = styled(Search)`
  padding: 3px 8px;
  height: 30px;

  ${SearchIcon} {
    margin-right: 8px;
    color: ${colors.grayDark};
  }

  ${SearchInput} {
    &::placeholder {
      color: ${colors.grayDark};
      font-weight: 600;
    }
  }

  ${SearchFakeInputValue} {
    left: 40px;
  }
`;

export { SearchCompact };
