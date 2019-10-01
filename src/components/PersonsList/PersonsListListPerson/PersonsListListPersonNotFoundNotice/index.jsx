import React from "react";
import styled from "styled-components";

import { ListLayoutNotice } from "../../../ListLayout/ListLayoutNotice";

import { Ban } from "../../../../assets/icons";

export const PersonsListListPersonNotFoundNotice = styled(
  ListLayoutNotice
).attrs(() => ({ icon: <Ban size="48" />, children: "Person not found" }))``;
