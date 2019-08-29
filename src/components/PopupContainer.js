import styled from "styled-components";

export const PopupContainer = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 2;
`;
