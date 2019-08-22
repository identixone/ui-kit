import styled, { css } from "styled-components";

import ButtonLink from "../ButtonLink";

import { StyledCardAsideButtonStyles } from "./StyledCardAsideButton";

const typesStyles = {
  ghost: css`
    &:hover {
      color: #374146;
    }
  `,
};

const StyledCardAsideButtonLink = styled(ButtonLink).attrs()`
  ${StyledCardAsideButtonStyles}

  ${({ type }) => typesStyles[type]}
`;

export default StyledCardAsideButtonLink;
