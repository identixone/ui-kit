import styled from "styled-components";

import { EntryCardPhoto } from "../components";
import {
  EntryCardPhotoImg,
  EntryCardPhotoFaceSize,
} from "../components/EntryCardPhotos/EntryCardPhoto";

const PersonEntriesCardPhoto = styled(EntryCardPhoto)`
  border-right: 8px solid rgb(239, 239, 239);

  ${EntryCardPhotoImg} {
    width: 150px;
    height: 150px;
    border-radius: 0;
  }

  ${EntryCardPhotoFaceSize} {
    top: -1px;
  }
`;

export { PersonEntriesCardPhoto };
