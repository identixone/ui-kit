import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderAppMenuLink = styled(NavLink).attrs(() => ({
  activeStyle: { fontWeight: 700 },
}))`
  font-weight: 200;
  color: #222;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 68px;
  }

  &:after {
    display: block;
    content: attr(content);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`;
