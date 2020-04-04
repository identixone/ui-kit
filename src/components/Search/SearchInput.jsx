import styled from "styled-components";

import { colors } from "../../style";

const SearchInput = styled.input.attrs(() => ({
  type: "search",
  spellCheck: "false",
}))`
  outline: none;
  border: none;
  padding: 0;
  width: 100%;
  background-color: inherit;

  &::placeholder {
    font-weight: 300;
    color: ${colors.gray};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export { SearchInput };
