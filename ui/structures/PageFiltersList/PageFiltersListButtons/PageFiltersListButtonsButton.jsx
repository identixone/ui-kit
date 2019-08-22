import styled from "styled-components";

import Button from "../../../components/Button";

const PageFiltersListButtonsButton = styled(Button).attrs({
  buttonTheme: "ghost",
})`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #000;
  padding: 0;

  &:not(:last-child) {
    margin-right: 26px;
  }
`;

export default PageFiltersListButtonsButton;
