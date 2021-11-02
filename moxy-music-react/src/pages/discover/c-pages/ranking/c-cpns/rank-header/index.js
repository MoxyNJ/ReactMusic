import React, { memo } from "react";
import LJRankingSongPannelBar from "@/components/ranking-song-pannel-bar";
import { LJRankingTitleWrapper } from "./style";

export default memo(function LJRankingTitle() {
  return (
    <LJRankingTitleWrapper>
      <div className="rankingTitle">
        <div className="image">
          <img
            src="https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150"
            alt=""
          />
        </div>
        <div className="info">
          <div className="name">飙升榜</div>
          <div className="time">
            <i className="icon sprite_icon2"></i>
            <span className="flash">最近更新：10月28日</span>
            <span className="regular">每周四更新</span>
          </div>
          <LJRankingSongPannelBar />
        </div>
      </div>
    </LJRankingTitleWrapper>
  );
});
