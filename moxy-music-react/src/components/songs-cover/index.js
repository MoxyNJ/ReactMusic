import React, { memo } from "react";

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from "./style";

export default memo(function LJSongsCover(props) {
  const { info, right, size } = props;

  let by = "by 热门推荐";
  if (info.creator && info.creator.nickname) {
    by = `by ${info.creator.nickname}`;
  }

  return (
    <SongsCoverWrapper right={right}>
      <div className="cover-top">
        <img
          src={getSizeImage(info.picUrl ? info.picUrl : info.coverImgUrl, size)}
          alt={info.name}
        />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source">{by}</div>
    </SongsCoverWrapper>
  );
});
