import styled from "styled-components";

const CardSmallDataItem = styled.p`
  font-size: 13px;
  margin-top: 0;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis; /* Добавляем многоточие */
  line-height: 1.38;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  b {
    font-size: 14px;
    font-weight: 600;
  }
`;

export { CardSmallDataItem };
