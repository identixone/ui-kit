import styled from "styled-components";

const FormCheckboxMarker = styled.span`
  width: 22px;
  height: 22px;
  background-color: ${({ disabled }) => (disabled ? "#f3f3f3" : "#fff")};
  border: 1px solid #9aa7b3;
  border-radius: 2px;
  box-sizing: border-box;
  transition: background-color 120ms ease-in-out;
  display: block;

  &:hover {
    background-color: #f2f5f7;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default FormCheckboxMarker;
