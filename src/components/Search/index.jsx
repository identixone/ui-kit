import styled from "styled-components";

import { SearchInput } from "../SearchInput";
import StyledSearchInput from "../SearchInput/StyledSearchInput";
import SearchInputIcon from "../SearchInput/SearchInputIcon";
import { SearchInputClearButtonIcon } from "../SearchInput/SearchInputClearButton/SearchInputClearButtonIcon";

import { colors } from "../../themes";

export const Search = styled(SearchInput).attrs({
  iconSize: 23,
})`
  height: 60px;
  border-radius: 8px;
  background-color: ${colors.veryLightBlue};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 0;
    box-shadow: 0 0 30px 0 rgba(162, 182, 189, 0.25);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }

  ${StyledSearchInput} {
    font-size: 20px;
    color: rgb(67, 67, 67);

    &::placeholder {
      color: rgba(67, 67, 67, 0.6);
    }
  }

  ${SearchInputIcon} {
    color: #3b4b5a;
  }

  ${SearchInputClearButtonIcon} {
    color: #3b4b5a;
  }
`;
