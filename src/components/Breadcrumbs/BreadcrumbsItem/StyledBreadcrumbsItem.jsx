import styled, { css } from "styled-components";

import { BreadcrumbsItemText } from "./BreadcrumbsItemText";
import { BreadcrumbsItemIcon } from "./BreadcrumbsItemIcon";

function getStyles({ isActive, isDisabled }) {
  return css`
    ${BreadcrumbsItemText} {
      opacity: ${isDisabled ? 0.4 : 1};
      font-weight: ${isActive ? 700 : 300};
      cursor: ${isDisabled ? "not-allowed" : isActive ? "default" : "pointer"};
    }
  `;
}

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
  ${getStyles}

  &:last-child {
    ${BreadcrumbsItemIcon} {
      display: none;
    }
  }

  &:not(:last-child) {
    ${BreadcrumbsItemText} {
      margin-right: 14px;
    }
  }
`;

export { StyledBreadcrumbsItem };
