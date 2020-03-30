import styled from "styled-components";

import { StyledFormMultiSelectTagsItem } from "./FormMultiSelectTagsItem/StyledFormMultiSelectTagsItem";

import { colors } from "../../../../../themes/colors";

const FormMultiSelectTags = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: 8px;
  padding-bottom: 0;
  margin: 0;
  border-radius: 6px;
  cursor: text;
  background: ${colors.grayLight};
  display: flex;
  flex-wrap: wrap;

  ${StyledFormMultiSelectTagsItem} {
    margin-bottom: 8px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export { FormMultiSelectTags };
