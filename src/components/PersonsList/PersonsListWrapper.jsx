import styled from "styled-components";

export const PersonsListWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
    visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
    transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
