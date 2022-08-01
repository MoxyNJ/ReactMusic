import React, { memo } from "react";

import LJPlayerHeader from "./c-cnps/player-header";
import LJPlayerList from "./c-cnps/player-list";
import LJPlayerLyric from "./c-cnps/player-lyric";

import { PanelWrapper } from "./style";

export default memo(function LJPlayerPanel() {
  return (
    <PanelWrapper>
      <LJPlayerHeader />
      <div className="main">
        <img className="image" src="" alt="" />
        <LJPlayerList />
        <LJPlayerLyric />
      </div>
    </PanelWrapper>
  );
});
