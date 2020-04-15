import styled from "styled-components";

const CardSmallDataItem = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  b {
    font-weight: 600;
  }
`;

export { CardSmallDataItem };
