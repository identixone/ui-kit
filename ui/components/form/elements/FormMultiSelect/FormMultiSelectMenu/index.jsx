import styled from "styled-components";

const FormMultiSelectMenu = styled.ul`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  list-style-type: none;
  position: absolute;
  bottom: 85%;
  padding-left: 0;
  box-shadow: 0px 0px 80px 0px rgba(162, 182, 189, 0.4);
  max-height: 288px;
  overflow-y: auto;
  z-index: 1;
  border-radius: 5px;
  padding: 10px 0px;
  background: white;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
    visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
    transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export default FormMultiSelectMenu;
