import React, { memo } from "react";

import { Slider } from "antd";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function LJAppPlayBar() {
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play"></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="http://p3.music.126.net/zM4Fhf2YNW6ocRoyYfYQ2g==/109951166333766652.jpg?param=34y34"
                alt="音乐"
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <a href="/todo" className="song-name">
                红豆
              </a>
              <a href="/todo" className="singer-name">
                要不要买菜
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} tipFormatter={null} />
              <div className="time">
                <span className="now-time"></span>
                <span className="divider"></span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="playerbar_pip btn pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});
