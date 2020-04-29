import styled from "styled-components";

import { InfoCardAsideItem } from "./InfoCardAsideItem";

const InfoCardAside = styled.div`
  ${InfoCardAsideItem}:not(:last-child) {
    margin-bottom: 4px;
  }
`;

InfoCardAside.Item = InfoCardAsideItem;

export { InfoCardAside, InfoCardAsideItem };
