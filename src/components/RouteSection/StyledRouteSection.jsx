import styled from "styled-components";

const StyledRouteSection = styled.div`
  position: relative;
  min-height: 430px;
  height: ${({ height }) => height || "100%"};
  flex: 100%;
  display: flex;
  flex-direction: column;

  &.fade-appear {
    opacity: 0;
  }
  &.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in 150ms;
  }

  &.fade-exit {
    opacity: 1;
    position: absolute;
    width: calc(100% - 60px);
    height: 100%;
    top: 114px;
    left: 0;
    padding-left: 30px;
    padding-right: 30px;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms ease-in;
  }
`;

export default StyledRouteSection;
