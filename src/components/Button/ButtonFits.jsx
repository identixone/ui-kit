import { css } from "styled-components";

const rectFit = css`
  border-radius: 4px;

  &:after {
    border-radius: 4px;
  }
`;

const squareFit = css`
  border-radius: 5px;

  &:after {
    border-radius: 5px;
  }
`;

const circleFit = css`
  border-radius: 50%;

  &:after {
    border-radius: 50%;
  }
`;

export default {
  rect: rectFit,
  circle: circleFit,
  square: squareFit,
};
