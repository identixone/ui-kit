import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUserUsername } from "./StyledHeaderTopMenuUserUsername";
import { HeaderTopMenuUserUsernameIcon } from "./HeaderTopMenuUserUsernameIcon";
import { User } from "../../../../icons";

function HeaderTopMenuUserUsername({ username }) {
  return (
    <StyledHeaderTopMenuUserUsername>
      <HeaderTopMenuUserUsernameIcon>
        <User size="13" />
      </HeaderTopMenuUserUsernameIcon>
      {username}
    </StyledHeaderTopMenuUserUsername>
  );
}

HeaderTopMenuUserUsername.propTypes = {
  username: PropTypes.string.isRequired,
};

export { HeaderTopMenuUserUsername };
