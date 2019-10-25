import styled from "styled-components";

import { EntryAdditionalButton } from "../../../EntryAdditionalButtons/EntryAdditionalButton";
import { EntryCardButtonDelete } from "../EntryCardButtonDelete";

const EntryCardContainer = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  line-height: 18px;

  ${EntryAdditionalButton}, ${EntryCardButtonDelete} {
    opacity: 0;
  }

  &:hover {
    ${EntryAdditionalButton}, ${EntryCardButtonDelete} {
      opacity: 1;
    }
  }
`;

export { EntryCardContainer };
