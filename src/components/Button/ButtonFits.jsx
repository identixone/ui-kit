import { css } from "styled-components";

const rectFit = css``;

const squareFit = css`
  border-radius: 5px;
`;

const circleFit = css`
  border-radius: 50%;
`;

export default {
  rect: rectFit,
  circle: circleFit,
  square: squareFit,
};
