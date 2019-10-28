import styled, { css } from "styled-components";

import { EntryCardAdditionalButtons } from "../EntryCardAdditionalButtons";

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

  ${EntryCardAdditionalButtons} {
    opacity: 0;
  }

  &:hover {
    ${EntryCardAdditionalButtons} {
      opacity: 1;
    }
  }
`;

export { StyledEntryCardContainer };
