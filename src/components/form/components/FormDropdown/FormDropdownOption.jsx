import styled from "styled-components";

const FormDropdownOption = styled.li`
  color: #263238;
  font-size: 16px;
  line-height: 1.5;
  padding: 4px 15px;
  transition: background-color 120ms ease-in-out;
  background-color: ${({ isHighlighted }) => {
    if (isHighlighted) return "#f5f5f5";

    return "#fff";
  }};

  ${({ isDisabled }) => {
    return (
      isDisabled &&
      `border-color: #546E7A;
      opacity: .5;`
    );
  }}

  &:hover {
    ${({ isDisabled }) => !isDisabled && "background-color: #f5f5f5"}
  }
`;

export default FormDropdownOption;