import styled from "styled-components";

/**
 * Компонент создан для того, чтобы можно было
 * стилизовать value особенным образом
 * например, выделять цветом только его часть
 */

export const SearchFakeInputValue = styled.span`
  position: absolute;
  left: 54px;
  font-size: 20px;
  color: rgb(67, 67, 67);
  pointer-events: none;
`;
