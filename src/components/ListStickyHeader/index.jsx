import React from "react";
import PropTypes from "prop-types";

import { useRef, useContext } from "react";
import { useShortStickyHeader } from "./hooks";
import { ListLayoutContext } from "../ListLayout";

import { StyledListStickyHeader } from "./StyledListStickyHeader";
import { ListStickyHeaderInner } from "./ListStickyHeaderInner";
import { ListStickyHeaderFixedBackground } from "./ListStickyHeaderFixedBackground";

function ListStickyHeader({ children, listHeaderHeightShort, className }) {
  const headerElRef = useRef(null);
  const headerInnerRef = useRef(null);
  const { isHeaderFull, appHeaderOffset } = useContext(ListLayoutContext);
  const { isSticky } = useShortStickyHeader({
    headerElRef,
  });

  return (
    <>
      <StyledListStickyHeader
        style={{
          transform: `translateY(${appHeaderOffset}px)`,
          zIndex: isSticky ? 10 : 1,
        }}
        className={className}
        ref={headerElRef}
      >
        <ListStickyHeaderInner ref={headerInnerRef}>
          {typeof children === "function"
            ? children({ isHeaderFull, isSticky })
            : children}
        </ListStickyHeaderInner>
      </StyledListStickyHeader>
      {/* Элемент для того, чтобы перекрывать элементы по бокам (вне основного контейнера) */}
      {isSticky && headerElRef.current && (
        <ListStickyHeaderFixedBackground
          style={{
            height:
              !isHeaderFull && listHeaderHeightShort
                ? listHeaderHeightShort
                : headerElRef.current.node.offsetHeight,
            transform: `translateY(${appHeaderOffset}px)`,
          }}
        />
      )}
    </>
  );
}

ListStickyHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  listHeaderHeightShort: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export { ListStickyHeader };
