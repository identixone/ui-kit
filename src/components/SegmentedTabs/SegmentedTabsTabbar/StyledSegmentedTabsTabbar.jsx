import styled from "styled-components";

import { StyledButton } from "../../Button";

const StyledSegmentedTabsTabbar = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  ${StyledButton} {
    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
`;

export { StyledSegmentedTabsTabbar };
