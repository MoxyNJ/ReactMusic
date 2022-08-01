import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { CoverWrapper } from "./style";

export default memo(function LJRadioRecommendCover(props) {
  const {
    info: { picUrl, name, rcmdtext },
  } = props;

  return (
    <CoverWrapper>
      <a href="#/discover/djradio">
        <img src={getSizeImage(picUrl, 150)} alt={name} />
      </a>
      <a href="#/discover/djradio" className="name">
        {name}
      </a>
      <span className="details">{rcmdtext}</span>
    </CoverWrapper>
  );
});
