import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUser } from "./StyledHeaderTopMenuUser";
import { HeaderTopMenuUserUsername } from "./HeaderTopMenuUserUsername";
import { HeaderTopMenuUserUsernameLogout } from "./HeaderTopMenuUserUsernameLogout";
import { ArrowAltCircleRight } from "../../../icons";

function HeaderTopMenuUser({ username, onLogout }) {
  return (
    <StyledHeaderTopMenuUser>
      <HeaderTopMenuUserUsername username={username} />
      <HeaderTopMenuUserUsernameLogout onClick={onLogout}>
        <ArrowAltCircleRight size="15" />
      </HeaderTopMenuUserUsernameLogout>
    </StyledHeaderTopMenuUser>
  );
}

HeaderTopMenuUser.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export { HeaderTopMenuUser };
