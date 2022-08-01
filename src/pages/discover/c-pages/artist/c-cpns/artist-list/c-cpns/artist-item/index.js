import React, { memo } from "react";
import classnames from "classnames";

import { getSizeImage } from "@/utils/format-utils";

import { ArtistItemWrapper } from "./style";
export default memo(function LJArtistItem(props) {
  const { info, index } = props;

  return (
    <ArtistItemWrapper>
      {/* 前10个有照片，后面只有名字 */}
      {index < 10 && (
        <div className="image" href="#/discover/artist">
          <img src={getSizeImage(info.img1v1Url, 130)} alt={info.name} />
          <div className="cover sprite_cover"></div>
        </div>
      )}
      <div
        className={classnames("info", {
          nonePic: index > 9,
        })}
      >
        <span className="name text-nowrap">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ArtistItemWrapper>
  );
});
