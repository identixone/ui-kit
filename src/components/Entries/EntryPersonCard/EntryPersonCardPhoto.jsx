import styled from "styled-components";

import { EntryCardPhoto } from "../components";
import { EntryCardPhotoImg } from "../components/EntryCardPhotos/EntryCardPhoto/EntryCardPhotoImg";

const EntryPersonCardPhoto = styled(EntryCardPhoto)`
  margin-right: 60px;

  ${EntryCardPhotoImg} {
    width: 100px;
    height: 100px;
  }
`;

export { EntryPersonCardPhoto };
