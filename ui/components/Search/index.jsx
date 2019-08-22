import styled from "styled-components";

import SearchInput from "../SearchInput";
import StyledSearchInput from "../SearchInput/StyledSearchInput";
import SearchInputIcon from "../SearchInput/SearchInputIcon";

const Search = styled(SearchInput).attrs({
  iconSize: 33,
})`
  height: 63px;
  border-radius: 8px;
  background-color: #bdc5c9;

  ${StyledSearchInput} {
    background-color: transparent;
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    padding-left: 0;

    &::placeholder {
      color: #fff;
    }
  }

  ${SearchInputIcon} {
    min-width: 70px;
    max-width: 70px;
    color: #fff;
  }
`;

export default Search;
