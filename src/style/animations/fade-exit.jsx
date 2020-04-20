import { css } from "styled-components";

export const fadeExit = (timing) => css`
  &-exit {
    opacity: 1;
  }

  &-exit-active {
    opacity: 0;
    transition: opacity ${timing}ms ease-in;
  }
`;

export default fadeExit;
