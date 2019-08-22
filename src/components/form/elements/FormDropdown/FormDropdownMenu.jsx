import styled from "styled-components";

const FormDropdownMenu = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  max-height: 260px;
  border-radius: 0 0 3px 3px;
  border: 1px solid #f3f3f3;
  border-top: 0 #fff;
  background-color: #fff;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  box-shadow: 0px 10px 50px 0px rgba(180, 182, 183, 0.4);
  overflow-y: auto;
  z-index: 6;
`;

export default FormDropdownMenu;
