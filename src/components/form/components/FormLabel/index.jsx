import styled, { css } from "styled-components";

import { FormLabelTitle } from "./FormLabelTitle";

function getDirectionStyles({ direction }) {
  return direction === "row"
    ? css`
        align-items: center;
      `
    : css`
        flex-direction: column;

        ${FormLabelTitle} {
          margin-bottom: 6px;
        }
      `;
}

function getTypeStyles({ labelType }) {
  return labelType === "bold"
    ? css`
        ${FormLabelTitle} {
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
        }
      `
    : css`
        ${FormLabelTitle} {
          font-size: 16px;
          line-height: 26px;
        }
      `;
}

const FormLabel = styled.label`
  display: inline-flex;
  ${getDirectionStyles}
  ${getTypeStyles}
`;

const StyledFormLabel = FormLabel;

FormLabel.defaultProps = {
  direction: "row",
};

export { FormLabel, StyledFormLabel, FormLabelTitle };
