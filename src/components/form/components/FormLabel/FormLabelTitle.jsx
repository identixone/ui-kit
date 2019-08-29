import styled from "styled-components";

const FormLabelTitle = styled.span`
  font-weight: ${({ bold }) => (bold ? 600 : 200)};
  cursor: pointer;
`;

export default FormLabelTitle;
