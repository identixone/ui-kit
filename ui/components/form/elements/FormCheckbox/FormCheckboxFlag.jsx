import styled from "styled-components";

const FormCheckboxFlag = styled.span`
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;

  &:before {
    content: "";
    display: block;
    width: 4px;
    height: 6px;
    border: 2px solid #3b4b5a;
    border-top: 0;
    border-left: 0;
    margin: 5px 0 0 7px;
    transition: transform 150ms ease;

    transform: ${({ checked }) =>
      checked ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)"};
  }
`;

export default FormCheckboxFlag;
