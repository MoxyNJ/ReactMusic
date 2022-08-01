import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { scrollTo } from "@/utils/ui-helper";

import { PlayerLyricWrapper } from "./style";

export default memo(function LJPlayerLyric() {
  // redux hooks
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  // react hooks
  const lyricRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(lyricRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <PlayerLyricWrapper ref={lyricRef}>
      <div className="lrc-content">
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames("lrc-item", {
                active: index === currentLyricIndex,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </PlayerLyricWrapper>
  );
});
