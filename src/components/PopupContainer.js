import styled, { css } from "styled-components";

function getStyles({ isOpen }) {
  return !isOpen
    ? css`
        opacity: 0;
        overflow: visible;
        height: 0;
        visibility: hidden;
      `
    : css`
        overflow: hidden;
      `;
}

export const PopupContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};

  ${getStyles}
`;
