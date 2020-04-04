import styled from "styled-components";

import {
  Search,
  SearchIcon,
  SearchFakeInputValue,
  SearchInput,
} from "../index.jsx";

import { colors } from "../../../style";

const SearchCompact = styled(Search).attrs(() => ({ isCompact: true }))`
  padding: 3px 8px;
  padding-right: 30px;
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
