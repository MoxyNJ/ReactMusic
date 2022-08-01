import React, { memo } from "react";

import { FriendWrapper } from "./style";
export default memo(function LJFriend() {
  return (
    <FriendWrapper>
      <div className="main wrap-v2">
        <div className="image">
          <div className="text">
            <span>你可以关注明星和好友品味他们的私房歌单</span>
            <span>通过他们的动态发现更多精彩音乐</span>
          </div>
          <a href="/#/friend" className="login">
            <span></span>
          </a>
        </div>
      </div>
    </FriendWrapper>
  );
});
