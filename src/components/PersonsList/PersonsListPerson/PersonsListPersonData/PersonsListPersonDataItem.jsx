import styled from "styled-components";
import { colors } from "../../../../themes/index";

const PersonsListPersonDataItem = styled.p`
  font-size: 13px;
  color: ${colors.brownGray};
  margin-top: 0;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  b {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
`;

export default PersonsListPersonDataItem;
