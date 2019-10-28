import styled from "styled-components";

import { EntryCardPhoto } from "../components";
import { EntryCardPhotoImg } from "../components/EntryCardPhotos/EntryCardPhoto/EntryCardPhotoImg";

const PersonEntriesCardPhoto = styled(EntryCardPhoto)`
  margin-right: 45px;

  ${EntryCardPhotoImg} {
    width: 100px;
    height: 100px;
  }
`;

export { PersonEntriesCardPhoto };
