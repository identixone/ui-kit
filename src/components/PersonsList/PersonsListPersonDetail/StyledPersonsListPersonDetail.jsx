import styled, { css } from "styled-components";

import { Segment } from "../../Segment";

import { fadeEnter, fadeExit } from "../../../assets/animations";
import StyledColumnFirst from "../../EntryCard/StyledColumnFirst";
import StyledColumn from "../../EntryCard/StyledColumn";
import StyledEntryCardPhoto from "../../EntryCard/StyledEntryCardPhoto";

const centeredStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
`;

const StyledPersonsListPersonDetail = styled(Segment)`
  flex: 150px 0 0;
  margin-bottom: 30px;
  min-height: 150px;

  ${({ isCentered }) => isCentered && centeredStyles}

  ${StyledColumnFirst} {
    margin-left: 190px;
  }

  ${StyledColumn} {
    margin-right: 40px;
  }

  ${StyledEntryCardPhoto} {
    border-width: 28px;
  }

  .person-preview {
    ${fadeEnter(300)}
    ${fadeExit(300)}
  }
`;

export default StyledPersonsListPersonDetail;
