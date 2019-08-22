import { css } from "styled-components";

const mediumSize = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  padding: 0px 12px;
`;

const largeSize = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 38px;
  padding: 0 24px;
`;

export default {
  medium: mediumSize,
  large: largeSize,
};
