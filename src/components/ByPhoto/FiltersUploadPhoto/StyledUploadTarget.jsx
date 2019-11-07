import styled, { css } from "styled-components";

import { colors } from "../../../themes/index";

function getStyles({ isLockDrop, isLockUpload }) {
  if (isLockDrop) {
    return css`
      cursor: no-drop;
    `;
  }

  if (isLockUpload) {
    return css`
      cursor: default;
    `;
  }

  return css`
    cursor: pointer;
  `;
}

const StyledUploadTarget = styled.div`
  background: ${colors.whiteSimple};
  border: 3px dashed #ddd;
  border-radius: 0;
  color: #444;
  margin: 0;
  padding: 25px;
  text-align: center;
  transition: all 0.2s ease;

  ${getStyles}

  &:hover {
    border-color: ${colors.graySimple};
  }
`;

export default StyledUploadTarget;
