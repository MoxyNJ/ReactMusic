import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

export default memo(function LJAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = -845 } = props;

  return (
    // 把照片的尺寸信息传递给 styled-component
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <a href="/todo" className="cover image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
