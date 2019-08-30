import styled from "styled-components";

import { LoginMenuItem } from "./LoginMenuItem";

export const LoginMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* TODO: выпилить эти стили после переписыания обертки для логина */
  position: absolute;
  top: 40px;
  right: 30px;
`;

LoginMenu.Item = LoginMenuItem;
