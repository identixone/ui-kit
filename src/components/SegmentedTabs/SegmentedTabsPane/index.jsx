import styled from "styled-components";

import { StyledSpinner } from "../../Spinner";

import { colors } from "../../../style";

const SegmentedTabsPane = styled.div`
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  background-color: ${colors.whiteSimple};
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
  box-sizing: border-box;

  ${StyledSpinner} {
    flex: 100%;
  }
`;

export { SegmentedTabsPane };
