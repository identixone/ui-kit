import styled from "styled-components";

import { EntryCardPhoto } from "../components";
import { EntryCardPhotoImg } from "../components/EntryCardPhotos/EntryCardPhoto";

const PersonEntriesCardPhoto = styled(EntryCardPhoto)`
  ${EntryCardPhotoImg} {
    width: 150px;
    height: 150px;
    border-radius: 0;
  }
`;

export { PersonEntriesCardPhoto };
