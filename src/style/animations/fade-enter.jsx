import { css } from "styled-components";

export const fadeEnter = (timing) => css`
  &-appear {
    opacity: 0;
  }

  &-appear-active {
    opacity: 1;
    transition: opacity ${timing}ms ease-in;
  }
`;

export default fadeEnter;
