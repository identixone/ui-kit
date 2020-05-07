import styled, { css } from "styled-components";

import { InfoCardFieldLabel } from "./InfoCardFieldLabel";

function getStyles({ direction }) {
  return direction === "row"
    ? css`
        align-items: center;
      `
    : css`
        flex-direction: column;

        ${InfoCardFieldLabel} {
          margin-bottom: 6px;
        }
      `;
}

const StyledInfoCardField = styled.label`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};

  ${getStyles}
`;

export { StyledInfoCardField };
