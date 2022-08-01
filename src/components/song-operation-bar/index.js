import React, { memo } from "react";

import { OperationBarWrapper } from "./style";

export default memo(function LJSongOperationBar(props) {
  const { collectionT, shareT, downloadT, commentT } = props;

  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="/todo" className="play-icon sprite_button">
          <span className="playPannel sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/todo" className="add-icon sprite_button">
          +
        </a>
      </span>
      <a href="/todo" className="btnItem sprite_button">
        <i className="icon favor-icon sprite_button">{collectionT}</i>
      </a>
      <a href="/todo" className="btnItem sprite_button">
        <i className="icon share-icon sprite_button">{shareT}</i>
      </a>
      <a href="/todo" className="btnItem sprite_button">
        <i className="icon download-icon sprite_button">{downloadT}</i>
      </a>
      <a href="/todo" className="btnItem sprite_button">
        <i className="icon comment-icon sprite_button">{commentT}</i>
      </a>
    </OperationBarWrapper>
  );
});
