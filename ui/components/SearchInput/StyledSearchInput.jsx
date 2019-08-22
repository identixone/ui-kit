import styled from "styled-components";

const StyledSearchInput = styled.input.attrs({
  type: "search",
  spellCheck: "false",
})`
  outline: none;
  border: none;
  padding: 0;
  width: 100%;
`;

export default StyledSearchInput;
