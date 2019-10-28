import styled from "styled-components";
import Button from "../../Button/index";

import { EntryCardAdditionalButtonStyles } from "../components/EntryCardAdditionalButtons/EntryCardAdditionalButton";

const EntryPersonCardReinitButton = styled(Button).attrs({
  buttonTheme: "reset",
})`
  ${EntryCardAdditionalButtonStyles}
`;

export { EntryPersonCardReinitButton };
