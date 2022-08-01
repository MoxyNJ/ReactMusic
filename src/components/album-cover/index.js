import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

export default memo(function LJAlbumCover(props) {
  const {
    info,
    size = 130,
    width = 153,
    height = 153,
    bgp = -845,
    play = -140,
    elemSize = "small",
  } = props;

  return (
    // 照片尺寸
    <AlbumWrapper
      size={size}
      width={width}
      height={height}
      bgp={bgp}
      play={play}
      elemSize={elemSize}
    >
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <a href="/todo" className="cover image_cover">
          {info.name}
        </a>
        <a href="/todo" className="play sprite_icon">
          play
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">
          {info.artist.name ? info.artist.name : "未知歌手"}
        </div>
      </div>
    </AlbumWrapper>
  );
});
