import styled, { css } from "styled-components";

export const FormUneditableFieldStyles = css`
  padding-left: 0;
  padding-right: 0;
  line-height: 16px;
  font-weight: 400;
  min-width: 100px;
  text-align: left;
  margin: 0;
`;

export const StyledFormUneditableField = styled.p`
  ${FormUneditableFieldStyles}
`;
