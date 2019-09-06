import styled from "styled-components";

import { fadeEnter, fadeExit } from "../../assets/animations";

export const StyledPersonsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  height: ${({ isEmpty }) => (isEmpty ? "200px" : "380px")};
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .persons-list-item {
    ${fadeEnter(300)}
    ${fadeExit(300)}
  }
`;
