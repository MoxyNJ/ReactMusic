import React, { memo } from "react";

import { RankingSongPannelBarWrapper } from "./style";

export default memo(function LJRankingSongPannelBar(props) {
  const { subscribedCount, shareCount, download, commentCount } = props;

  return (
    <RankingSongPannelBarWrapper>
      <span className="play">
        <a href="/todo" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/todo" className="add-icon sprite_button">
          +
        </a>
      </span>
      <a href="/todo" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{subscribedCount}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareCount}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon download-icon sprite_button">{download}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentCount}</i>
      </a>
    </RankingSongPannelBarWrapper>
  );
});
