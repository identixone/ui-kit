import styled from "styled-components";

const StyledFormInput = styled.input`
  border: 1px solid #9aa7b3;
  border-radius: 3px;
  padding: 2px 10px;

  &:focus {
    outline: none;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default StyledFormInput;
