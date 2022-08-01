import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { getSizeImage, formatMonthDay } from "@/utils/format-utils";

import LJRankingSongPannelBar from "@/components/ranking-song-pannel-bar";

import { LJRankingTitleWrapper } from "./style";
export default memo(function LJRankingTitle() {
  // redux hooks
  const {
    playList = [],
    listTitle,
    currentIndex,
  } = useSelector(
    (state) => ({
      playList: state.getIn(["ranking", "playList"]),
      listTitle: state.getIn(["ranking", "listTitle"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual
  );

  // react hooks

  // other function

  return (
    <LJRankingTitleWrapper>
      <div className="image">
        <img
          src={getSizeImage(playList.coverImgUrl, 150)}
          alt={playList.name}
        />
        <div className="mask sprite_cover"></div>
      </div>
      <div className="info">
        <div className="name">{playList.name}</div>
        <div className="time">
          <i className="icon sprite_icon2"></i>
          <span className="flash">
            最近更新：{formatMonthDay(playList.trackUpdateTime)}
          </span>
          <span className="regular">
            （
            {listTitle[currentIndex] && listTitle[currentIndex].updateFrequency}
            ）
          </span>
        </div>
        <LJRankingSongPannelBar
          subscribedCount={`(${playList.subscribedCount})`}
          shareCount={`(${playList.shareCount})`}
          download="下载"
          commentCount={`(${playList.commentCount})`}
        />
      </div>
    </LJRankingTitleWrapper>
  );
});
