import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { CardSmall } from "./index";

import { personMock } from "../../../test/__mocks__";
import { PlaylistAdd } from "../../assets/icons";
import { colors } from "../../themes/index";

storiesOf("Basic UI|CardSmall", module).add("default", () => {
  function CardSmallWrapper() {
    const [isSelected, setIsSelected] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const theme = select("theme", ["light", "dark"], "light");

    return (
      <CardSmall
        theme={theme}
        onClick={action("onClick")}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        img={personMock.initial_photo}
      >
        <CardSmall.Data>
          <CardSmall.DataItem>
            Some key: <b>some value</b>
          </CardSmall.DataItem>
          <CardSmall.DataItem>
            Some key: <b>some value</b>
          </CardSmall.DataItem>
        </CardSmall.Data>

        {(isSelected || theme === "dark" || isMouseOver) && (
          <CardSmall.Checkbox
            name={personMock.idxid}
            value={isSelected}
            onChange={() => setIsSelected(!isSelected)}
          />
        )}

        {isMouseOver && (
          <CardSmall.Button>
            <PlaylistAdd size="24" color={colors.bloodOrange} />
          </CardSmall.Button>
        )}
      </CardSmall>
    );
  }

  return <CardSmallWrapper />;
});
