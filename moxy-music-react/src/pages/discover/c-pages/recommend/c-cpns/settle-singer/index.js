import React, { memo } from "react";

import { SetterSongerWrapper } from "./style";

export default memo(function LJSettleSinger() {
  return (
    <div>
      <SetterSongerWrapper>
        <div className="singer-list"></div>
        <div className="apply-for">
          <a href="/todo" className="sprite_button">
            <i className="sprite_button">申请成为网易音乐人</i>
          </a>
        </div>
      </SetterSongerWrapper>
    </div>
  );
});
