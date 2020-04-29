import styled from "styled-components";

import { StyledInfoCardField } from "./InfoCardField";

const InfoCardData = styled.div`
  ${StyledInfoCardField}:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export { InfoCardData };
