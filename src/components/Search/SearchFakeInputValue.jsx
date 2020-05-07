import styled from "styled-components";

/**
 * Компонент создан для того, чтобы можно было
 * стилизовать value особенным образом
 * например, выделять цветом только его часть
 */

const SearchFakeInputValue = styled.span`
  position: absolute;
  left: 56px;
  pointer-events: none;
`;

export { SearchFakeInputValue };
