import styled from "styled-components";

const FormLabel = styled.label`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ direction }) => direction === "row" && "center"};
  height: ${({ height }) => (height ? `${height}px` : "25px")};
`;

const StyledFormLabel = FormLabel;

export { FormLabelTitle } from "./FormLabelTitle";
export { FormLabel, StyledFormLabel };
