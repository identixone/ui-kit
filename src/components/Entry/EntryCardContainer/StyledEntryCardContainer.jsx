import styled, { css } from "styled-components";

import { EntryAdditionalButton } from "../../EntryAdditionalButtons/EntryAdditionalButton";

import { EntryCardPhotos, StyledEntryCardPhoto } from "../EntryCardPhotos";
import { colors } from "../../../themes/colors";

/**
 * 
  font-size: 14px;
  border-radius: 4px;
  line-height: 18px;
  height: 100%;
  background-color: ${boxBackgroundColor || colors.whiteGray};
  height: 100%;
 */

function getStyles({ deleted }) {
  return deleted
    ? css`
        opacity: 0.4;
      `
    : null;
}

export const StyledEntryCardContainer = styled.li`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 121px;
  box-sizing: border-box;
  padding: 19px 10px 10px 30px;
  line-height: 18px;
  background-color: ${colors.whiteGray};
  border-radius: 4px;

  ${getStyles}

  &:last-child {
    border-bottom: none;
  }

  ${EntryAdditionalButton} {
    display: none;
  }

  &:hover {
    ${EntryAdditionalButton} {
      display: block;
    }
  }

  ${StyledEntryCardPhoto} {
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`;
