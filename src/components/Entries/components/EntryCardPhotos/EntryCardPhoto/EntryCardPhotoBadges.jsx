import styled from "styled-components";

import { EntryCardPhotoBadge } from "./EntryCardPhotoBadge";

const EntryCardPhotoBadges = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  ${EntryCardPhotoBadge}:not(:last-child) {
    margin-right: 4px;
  }
`;

export { EntryCardPhotoBadges };
