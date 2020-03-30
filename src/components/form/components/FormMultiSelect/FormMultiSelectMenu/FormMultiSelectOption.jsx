import styled from "styled-components";

const FormMultiSelectOption = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding: 4px 23px;
  cursor: pointer;
  background-color: ${({ isHighlighted }) => {
    if (isHighlighted) return "#3b4b5a";

    return "#fff";
  }};
  color: ${({ isHighlighted }) => {
    if (isHighlighted) return "#fff";

    return "#263238";
  }};
`;

export { FormMultiSelectOption };
