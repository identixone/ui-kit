import styled, { css } from "styled-components";

import { EntryCardActions } from "../EntryCardActions";

function getStyles({ deleted }) {
  return deleted
    ? css`
        opacity: 0.4;
      `
    : null;
}

const StyledEntryCardContainer = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  line-height: 18px;

  ${getStyles}

  ${EntryCardActions} {
    opacity: 0;
  }

  &:hover {
    ${EntryCardActions} {
      opacity: 1;
    }
  }
`;

export { StyledEntryCardContainer };
