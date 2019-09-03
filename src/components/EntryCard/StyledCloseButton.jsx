import styled from "styled-components";

import { ButtonLink } from "../ButtonLink";

const StyledCloseButton = styled(ButtonLink)`
  display: block;
  opacity: 0.8;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  background-color: #e4e9eb;
  border-radius: 5px 0 0 5px;
  text-align: center;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.1s linear;

  :first-child {
    border-bottom: none;
    border-radius: 0 0 0 5px;
  }
  :hover {
    color: #374146;
  }
`;

export default StyledCloseButton;
