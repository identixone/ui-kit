import { css } from "styled-components";

import { FormCheckboxFlag } from "./FormCheckboxFlag";

const smallSize = css`
  width: 22px;
  height: 22px;

  ${FormCheckboxFlag}:before {
    width: 6px;
    height: 11px;
    margin: 1px 0 0 6px;
  }
`;

const largeSize = css`
  width: 24px;
  height: 24px;

  ${FormCheckboxFlag}:before {
    width: 6px;
    height: 15px;
    margin: 0px 0 0 7px;
  }
`;

export default {
  small: smallSize,
  large: largeSize,
};
