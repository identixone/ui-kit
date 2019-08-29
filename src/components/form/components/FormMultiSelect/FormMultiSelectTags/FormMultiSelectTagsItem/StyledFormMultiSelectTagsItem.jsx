import styled from "styled-components";

const FormMultiSelectTagsItem = styled.li`
  padding-left: 5px;
  padding-right: 5px;
  color: #444;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  max-width: 150px;
  margin-bottom: 8px;
  position: relative;
  padding-right: 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default FormMultiSelectTagsItem;
