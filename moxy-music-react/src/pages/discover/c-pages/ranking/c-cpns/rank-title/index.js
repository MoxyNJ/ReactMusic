import React, { memo } from "react";

import { RankTitleWrapper } from "./style";

export default memo(function LJRanking() {
  return (
    <RankTitleWrapper>
      <h2>云音乐特色榜</h2>
      <a href="/todo" className="item active">
        <img
          src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40"
          alt=""
        />
        <div className="info">
          <div className="title">飙升榜</div>
          <div className="time">刚刚更新</div>
        </div>
      </a>
    </RankTitleWrapper>
  );
});
