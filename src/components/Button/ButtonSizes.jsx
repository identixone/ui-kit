import { css } from "styled-components";

function getSize(height, paddnig) {
  return function ({ fit }) {
    if (fit === "square" || fit === "circle") {
      return css`
        width: ${height}px;
        height: ${height}px;
      `;
    }

    return css`
      line-height: ${height}px;
      padding: 0 ${paddnig}px;
    `;
  };
}

const mediumSize = css`
  font-size: 16px;
  ${getSize(30, 12)}
`;

const largeSize = css`
  font-size: 18px;
  ${getSize(40, 30)}
`;

export default {
  medium: mediumSize,
  large: largeSize,
};
