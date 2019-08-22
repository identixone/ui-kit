import { NavLink } from "react-router-dom";

import styled from "styled-components";

const DynamicListItemLink = styled(NavLink)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  height: 33px;

  &:not(:last-child) {
    border-bottom: 1px solid #dadada;
  }
`;

export default DynamicListItemLink;
