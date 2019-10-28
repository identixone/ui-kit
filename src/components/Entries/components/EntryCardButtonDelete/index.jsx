import styled from "styled-components";

import { DeleteSureButton } from "../../../DeleteSureButton";

import { EntryCardAdditionalButtonStyles } from "../EntryCardAdditionalButtons/EntryCardAdditionalButton";

export const EntryCardButtonDelete = styled(DeleteSureButton).attrs({
  deleteColor: "#ac3d03",
})`
  ${EntryCardAdditionalButtonStyles}
  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;
`;
