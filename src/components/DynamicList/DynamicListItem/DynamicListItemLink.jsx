import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { colors } from "../../../style";

const DynamicListItemLink = styled(NavLink)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  height: 33px;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.grayMedium};
  }
`;

export default DynamicListItemLink;
