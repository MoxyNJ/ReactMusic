import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { CoverWrapper } from "./style";

export default memo(function LJRadioRankingCover(props) {
  const { radio } = props;

  return (
    <CoverWrapper>
      <a href="#/discover/djradio">
        <img src={getSizeImage(radio.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <a href="#/discover/djradio" className="title">
          {radio.name}
        </a>
        <div className="nickname sprite_icon2">
          <i className="left sprite_icon2 "></i>
          <a href="#/discover/djradio">{radio.dj.nickname}</a>
        </div>
        <div className="count">
          <span>共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  );
});
