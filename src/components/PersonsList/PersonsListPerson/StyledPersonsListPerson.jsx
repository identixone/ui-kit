import styled from "styled-components";

const StyledPersonsListPersonsListItem = styled.li`
  width: 300px;
  height: 80px;
  border-radius: 4px;
  background-color: #f9f9f9;
  display: flex;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;

  &:not(:nth-child(3n)) {
    margin-right: 20px;
  }
`;

export default StyledPersonsListPersonsListItem;
