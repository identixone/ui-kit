import React from "react";
import PropTypes from "prop-types";

import StyledNotificationContent from "./StyledNotificationContent";

import { Bolt } from "../icons";

NotificationContent.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default function NotificationContent({ message, description, type }) {
  function getIcon(type) {
    return {
      info: <Bolt />,
      warn: <Bolt />,
      error: <Bolt />,
    }[type];
  }
  return (
    <StyledNotificationContent>
      <h3>
        {type && <i>{getIcon(type)}</i>}
        {message}
      </h3>
      {description && <p>{description}</p>}
    </StyledNotificationContent>
  );
}
