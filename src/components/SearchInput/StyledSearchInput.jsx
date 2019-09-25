import styled from "styled-components";

const StyledSearchInput = styled.input.attrs({
  type: "search",
  spellCheck: "false",
  "data-testid": "search-input",
})`
  outline: none;
  border: none;
  padding: 0;
  width: 100%;
  background-color: inherit;
  margin-right: 8px;

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export default StyledSearchInput;
