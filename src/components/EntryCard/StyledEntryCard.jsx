import styled from "styled-components";

import { StyledDeleteSureButton } from "../DeleteSureButton";

const StyledEntryCard = styled.div`
  position: relative;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 0px 30px 0px rgba(162, 182, 189, 0.25);

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
