import styled from "styled-components";

import { colors } from "../../../../themes/colors";

import { NavLink } from "react-router-dom";

export const ListLayoutListItemText = styled.p.attrs(({ to }) => ({
  as: to ? NavLink : "p",
}))`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.black};
  margin: 0;
  text-decoration: none;
  width: 100%;
`;
