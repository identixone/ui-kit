import styled, { css } from "styled-components";

import { Segment } from "../../Segment";
import { fadeEnter, fadeExit } from "../../../assets/animations";

const centeredStyles = css`
  align-items: center;
  justify-content: center;
`;

const StyledPersonsListPersonDetail = styled(Segment)`
  margin-bottom: 30px;
  flex: 150px 0 0;
  min-height: 150px;
  display: flex;
  padding: 10px 15px;
  align-items: center;

  ${({ isCentered }) => isCentered && centeredStyles}

  .person-preview {
    ${fadeEnter(300)}
    ${fadeExit(300)}
  }
`;

export default StyledPersonsListPersonDetail;
