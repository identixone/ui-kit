import styled from "styled-components";

const StyledDynamicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 25px;
  box-sizing: border-box;
  position: relative;
  height: 100%;

  background-color: ${props => {
    if (props.isSelected) {
      return "#3b4b5a";
    }

    return "#fff";
  }};

  color: ${props => {
    if (props.isSelected) {
      return "#fff";
    }

    return "#263238";
  }};

  &:hover {
    background-color: #6b7d86;
    color: #fff;

    * {
      color: #fff;
    }
  }
`;

export default StyledDynamicListItem;
