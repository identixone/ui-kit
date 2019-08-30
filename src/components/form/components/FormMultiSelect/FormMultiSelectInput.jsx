import styled from "styled-components";

const FormMultiSelectInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  display: inline-block;
  width: 100px;
  font-weight: 600;
  line-height: 30px;
  color: #444;
  ::placeholder {
    color: #444;
  }
  padding-left: 3px;
`;

export default FormMultiSelectInput;