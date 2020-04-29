import styled from "styled-components";

import { InfoCardTitle } from "./InfoCardTitle";
import { InfoCardData } from "./InfoCardData";
import { InfoCardAside } from "./InfoCardAside";
import { InfoCardField } from "./InfoCardField";

const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

InfoCard.Title = InfoCardTitle;
InfoCard.Data = InfoCardData;
InfoCard.Aside = InfoCardAside;
InfoCard.Field = InfoCardField;

export { InfoCard, InfoCardData, InfoCardAside, InfoCardTitle, InfoCardField };
