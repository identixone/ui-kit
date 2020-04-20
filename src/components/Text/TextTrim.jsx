import { css } from "styled-components";

/*
  TODO: добавить возможность
  настраивать отображаемое кол-во строк
*/
function textTrimStyles() {
  return function () {
    return css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `;
  };
}

export { textTrimStyles };
