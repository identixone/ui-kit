import React from "react";
import styled from "styled-components";

import { NoticeHero } from "../../../NoticeHero";

import { Ban } from "../../../../assets/icons";

export const PersonsGroupListPersonNotFoundNotice = styled(
  NoticeHero
).attrs(() => ({ icon: <Ban size="48" />, title: "Person not found" }))``;
