import styled from "styled-components";

import { StyledDeleteSureButton } from "../DeleteSureButton";

const StyledEntryCard = styled.div`
  ${StyledDeleteSureButton} {
    display: block;
    opacity: 0.8;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 32px;
    border-radius: 5px 0 0 5px;
    text-align: center;
    width: 100% !important;
    text-transform: lowercase;

    &:hover {
      background-color: #ac3d03;
      color: #fff;
    }
  }
`;

export default StyledEntryCard;
