import React from "react";
import { storiesOf } from "@storybook/react";

import { ListItemPopup } from "./index.jsx";

import { Qrcode as QRCodeIcon } from "../../assets/icons";

storiesOf("ListItemPopup", module).add("default", () => {
  return (
    <ListItemPopup
      trigger={({ ref, openPortal }) => (
        <QRCodeIcon
          data-testid="qr-code-icon"
          ref={ref}
          cursor="pointer"
          width="19"
          height="19"
          onClick={openPortal}
        />
      )}
    >
      {({ closePortal }) => (
        <React.Fragment>
          <QRCodeIcon
            data-testid="qr-code-icon-inside"
            width="19"
            height="19"
            onClick={closePortal}
          />
          <span>Popup content example</span>
        </React.Fragment>
      )}
    </ListItemPopup>
  );
});
