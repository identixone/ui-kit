import styled, { css } from "styled-components";

import { EntryAdditionalButton } from "../../../EntryAdditionalButtons/EntryAdditionalButton";
import { EntryCardButtonDelete } from "../EntryCardButtonDelete";
import { StyledEntryCardEntryType } from "../EntryCardEntryType";

import { EntryCardPhotos, StyledEntryCardPhoto } from "../EntryCardPhotos";
import { colors } from "../../../../themes/colors";

function getStyles({ deleted }) {
  return deleted
    ? css`
        opacity: 0.4;
      `
    : null;
}

export const StyledEntryCardContainer = styled.li`
  display: flex;
  align-items: center;
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

  ${EntryAdditionalButton}, ${EntryCardButtonDelete} {
    opacity: 0;
  }

  &:hover {
    ${EntryAdditionalButton}, ${EntryCardButtonDelete} {
      opacity: 1;
    }
  }

  ${EntryCardPhotos} {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  ${StyledEntryCardPhoto} {
    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }

  ${StyledEntryCardEntryType} {
    margin-right: 30px;
  }
`;
