import styled from "styled-components";

import { StyledFormMultiSelectTagsItem } from "./FormMultiSelectTagsItem/StyledFormMultiSelectTagsItem";

const FormMultiSelectTags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  cursor: text;
  margin-bottom: -6px;
  margin-right: -6px;

  ${StyledFormMultiSelectTagsItem} {
    margin-bottom: 6px;
    margin-right: 6px;
  }
`;

export { FormMultiSelectTags };
