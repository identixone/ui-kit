import styled from "styled-components";

import { colors } from "../../themes/colors";

export const StyledSearch = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  height: 60px;
  border-radius: 8px;
  background-color: ${colors.veryLightBlue};

  &:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 0;
    box-shadow: 0 0 30px 0 rgba(162, 182, 189, 0.25);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:after {
    opacity: 1;
  }
`;
