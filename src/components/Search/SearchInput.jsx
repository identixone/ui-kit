import styled from "styled-components";

export const SearchInput = styled.input.attrs(() => ({
  type: "search",
  spellCheck: "false",
}))`
  outline: none;
  border: none;
  padding: 0;
  width: 100%;
  background-color: inherit;
  margin-right: 8px;
  font-size: 20px;
  color: rgb(67, 67, 67);

  &::placeholder {
    color: rgba(67, 67, 67, 0.6);
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;
