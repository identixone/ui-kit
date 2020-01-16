import styled from "styled-components";

import Button from "../Button";

const NotificationCloseButton = styled(Button).attrs(() => ({
  buttonTheme: "reset",
}))`
  position: absolute;
  top: 0px;
  right: 15px;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
`;

export default NotificationCloseButton;
