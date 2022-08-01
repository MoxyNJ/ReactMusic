import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";

import LJSongOperationBar from "@/components/song-operation-bar";
import { InfoWrapper, InfoLeftWrapper, InfoRightWrapper } from "./style";

export default memo(function LJPlayerInfo() {
  // reack hooks -> props
  const [isShow, setIsShow] = useState(false);

  // redux hooks
  const { currentSong, lyricList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      lyricList: state.getIn(["player", "lyricList"]),
    }),
    shallowEqual
  );

  // handle function
  const totalLyricCount = isShow ? lyricList.length : 13;

  return (
    <InfoWrapper>
      <InfoLeftWrapper>
        <div className="image">
          <img
            src={getSizeImage(currentSong.al && currentSong.al.picUrl, 130)}
            alt={currentSong.name}
          />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外链播放器</a>
        </div>
      </InfoLeftWrapper>
      <InfoRightWrapper isShow={isShow}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="item">
          <span className="label">歌手：</span>
          <a href="/todo" className="name">
            {currentSong.ar && currentSong.ar[0].name}
          </a>
        </div>
        <div className="item">
          <span className="label">所属专辑：</span>
          <a href="/todo" className="name">
            {currentSong.al && currentSong.al.name}
          </a>
        </div>

        <LJSongOperationBar
          collectionT="收藏"
          shareT="分享"
          downloadT="下载"
          commentT={`(${currentSong.dt})`}
        />

        <div className="lyric">
          <div className="lyric-info">
            {lyricList.slice(0, totalLyricCount).map((item, index) => {
              return (
                <p key={item.time} className="text">
                  {item.content}
                </p>
              );
            })}
          </div>
          <button className="lyric-control" onClick={(e) => setIsShow(!isShow)}>
            {isShow ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRightWrapper>
    </InfoWrapper>
  );
});
