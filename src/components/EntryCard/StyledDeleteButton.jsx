import styled from "styled-components";

import { DeleteSureButton } from "../DeleteSureButton";

import { EntryAdditionalButtonStyles } from "../EntryAdditionalButtons/EntryAdditionalButton";

export const StyledDeleteButton = styled(DeleteSureButton).attrs({
  deleteColor: "#ac3d03",
})`
  ${EntryAdditionalButtonStyles}
  background-color: #e4e9eb;
  opacity: 0.8;
  line-height: 32px;
`;
