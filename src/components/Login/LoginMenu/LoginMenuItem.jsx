import styled from "styled-components";

import { colors } from "../../../style";

export const LoginMenuItem = styled.a`
  text-decoration: none;
  color: ${colors.slate};
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${colors.lightYellow};
  }

  &:not(:last-of-type) {
    margin-right: 50px;
  }
`;
