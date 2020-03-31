import styled from "styled-components";

const EntryCardActions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export { EntryCardActions };
export * from "./EntryCardActionsButton";
export * from "./EntryCardActionsDelete";
