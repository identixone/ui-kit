import Notification from "rc-notification";
import React from "react";

import NotificationContent from "./NotificationContent";
import NotificationCloseButton from "./NotificationCloseButton";

import { Times } from "../icons";

import "./style.css";

let notification = null;

Notification.newInstance(
  {
    style: {
      top: 45,
      right: 10,
      bottom: "auto",
      position: "fixed",
    },
    maxCount: 6,
    prefixCls: "ui-notification",
    closeIcon: (
      <NotificationCloseButton>
        <Times size={14} />
      </NotificationCloseButton>
    ),
  },
  (n) => (notification = n)
);

export function open({ message, description, type, duration }) {
  notification.notice({
    content: (
      <NotificationContent
        type={type}
        message={message}
        description={description}
      />
    ),
    style: { right: 0 },
    // duraction должен передаваться в милисекундах
    duration: duration !== undefined ? duration / 1000 : 4,
    closable: true,

    onClose() {},
  });
}
