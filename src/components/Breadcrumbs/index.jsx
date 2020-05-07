import styled from "styled-components";

import { StyledBreadcrumbsItem, BreadcrumbsItem } from "./BreadcrumbsItem";

const Breadcrumbs = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  display: flex;

  ${StyledBreadcrumbsItem} {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;

Breadcrumbs.Item = BreadcrumbsItem;

export { Breadcrumbs, BreadcrumbsItem };
