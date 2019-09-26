import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutNotice } from "./StyledListLayoutNotice";
import { ListLayoutNoticeIcon } from "./ListLayoutNoticeIcon";
import { ListLayoutNoticeText } from "./ListLayoutNoticeText";

function ListLayoutNotice({ icon, children }) {
  return (
    <StyledListLayoutNotice>
      {icon && <ListLayoutNoticeIcon>{icon}</ListLayoutNoticeIcon>}
      {children && <ListLayoutNoticeText>{children}</ListLayoutNoticeText>}
    </StyledListLayoutNotice>
  );
}

ListLayoutNotice.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export { ListLayoutNotice, StyledListLayoutNotice };
