import React, { memo } from "react";

import { HeaderRankingWrapper } from "./style";
export default memo(function LJThemeHeaderRanking(props) {
  const { titleName, titleNumber, titlePlayer } = props;

  return (
    <HeaderRankingWrapper>
      <div className="left">
        <span className="title">{titleName}</span>
        <span className="songNumber">{titleNumber}首歌</span>
      </div>
      <div className="right">
        <span className="default">播放：</span>
        <span className="playNumber">{titlePlayer}</span>
        <span className="default">次</span>
      </div>
    </HeaderRankingWrapper>
  );
});
