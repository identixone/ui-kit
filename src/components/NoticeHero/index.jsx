import React from "react";
import PropTypes from "prop-types";

import { Notice } from "../Notice";
import { NoticeHeroIcon } from "./NoticeHeroIcon";
import { NoticeHeroTitle } from "./NoticeHeroTitle";

function NoticeHero({ icon, title }) {
  return (
    <Notice>
      {icon && <NoticeHeroIcon>{icon}</NoticeHeroIcon>}
      {title && <NoticeHeroTitle>{title}</NoticeHeroTitle>}
    </Notice>
  );
}

NoticeHero.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export { NoticeHero };
