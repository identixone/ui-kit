import styled from "styled-components";

import { DeleteSureButton } from "../../../../DeleteSureButton";
import { EntryCardActionsButton } from "../EntryCardActionsButton";

export const EntryCardButtonDelete = styled(EntryCardActionsButton).attrs(
  () => ({
    deleteColor: "#ac3d03",
    as: DeleteSureButton,
  })
)``;
