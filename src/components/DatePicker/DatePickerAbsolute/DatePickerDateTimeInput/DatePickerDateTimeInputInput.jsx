import styled from "styled-components";

import { colors } from "../../../../style";

const DatePickerDateTimeInputInput = styled.input`
  background-color: ${colors.grayLight};
  height: 30px;
  width: ${({ width }) => (width ? width + "px" : "auto")};
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: ${colors.darkBlack};

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { DatePickerDateTimeInputInput };
