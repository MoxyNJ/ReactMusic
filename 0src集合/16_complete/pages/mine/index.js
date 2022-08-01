import React, { memo } from "react";

import { MineWrapper } from "./style";

export default memo(function LJMine() {
  return (
    <MineWrapper>
      <div className="main wrap-v2">
        <div className="image">
          <a href="/#/mine" className="login">
            <span></span>
          </a>
        </div>
      </div>
    </MineWrapper>
  );
});
