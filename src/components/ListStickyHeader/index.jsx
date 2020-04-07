import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import { useShortStickyHeader } from "./hooks";

import { StyledListStickyHeader } from "./StyledListStickyHeader";
import { ListStickyHeaderInner } from "./ListStickyHeaderInner";
import { ListStickyHeaderFixedBackground } from "./ListStickyHeaderFixedBackground";

function ListStickyHeader({
  children,
  headerHeight,
  headerStickyOffset,
  listHeaderHeightShort,
  className,
}) {
  const headerElRef = useRef(null);
  const { isHeaderFull, isSticky, isHeaderShort } = useShortStickyHeader({
    headerHeight,
    headerStickyOffset,
  });

  return (
    <>
      <StyledListStickyHeader
        style={{
          // При показе полного хедера нужно сдвинуть фильтры
          transform: `translateY(${isHeaderFull ? headerHeight : 0}px)`,
        }}
        className={className}
      >
        <ListStickyHeaderInner ref={headerElRef}>
          {typeof children === "function"
            ? children({ isHeaderShort, isHeaderFull, isSticky })
            : children}
        </ListStickyHeaderInner>
      </StyledListStickyHeader>
      {/* Элемент для того, чтобы перекрывать подложу новых энтрисов */}
      {isSticky && headerElRef.current && (
        <ListStickyHeaderFixedBackground
          style={{
            height:
              isHeaderShort && listHeaderHeightShort
                ? listHeaderHeightShort
                : headerElRef.current.offsetHeight,
            transform: `translateY(${isHeaderFull ? headerHeight : 0}px)`,
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
  headerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  headerStickyOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  listHeaderHeightShort: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export { ListStickyHeader };
