import React, { memo } from "react";
import LJPlayerInfo from "./c-cpns/player-info";
import LJPlayerComment from "./c-cpns/player-comment";
import LJPlayerCoverList from "./c-cpns/player-cover-list";
import LJPlayerSameSongs from "./c-cpns/player-same-songs";
import LJDownload from "./c-cpns/player-download";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function LJPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <LJPlayerInfo />
          <LJPlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <LJPlayerCoverList />
          <LJPlayerSameSongs />
          <LJDownload />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
