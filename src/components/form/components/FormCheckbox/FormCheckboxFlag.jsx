import styled from "styled-components";

const FormCheckboxFlag = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    display: block;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transition: transform 120ms ease;

    transform: ${({ checked }) =>
      checked ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)"};
  }
`;

export { FormCheckboxFlag };
