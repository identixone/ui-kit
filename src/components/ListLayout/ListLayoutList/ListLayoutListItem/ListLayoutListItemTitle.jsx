import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { colors } from "../../../../style";

const ListLayoutListItemTitle = styled.p.attrs(({ to }) => ({
  as: to ? NavLink : "p",
}))`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  color: ${colors.darkBlack};
  text-decoration: none;
  display: block;
  width: 100%;
`;

export { ListLayoutListItemTitle };
