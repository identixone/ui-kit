import styled from "styled-components";

const FormLabel = styled.label`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ direction }) => direction === "row" && "center"};
`;

const StyledFormLabel = FormLabel;

export { FormLabelTitle } from "./FormLabelTitle";
export { FormLabel, StyledFormLabel };
