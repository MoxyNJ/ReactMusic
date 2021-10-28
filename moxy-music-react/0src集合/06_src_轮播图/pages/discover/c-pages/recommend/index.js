import React, { memo } from "react";

import LJTopBanner from "./c-cpns/top-banner";

import { RecommendWrapper } from "./style";

function LJRecommend(props) {
  return (
    <RecommendWrapper>
      <LJTopBanner />
    </RecommendWrapper>
  );
}

export default memo(LJRecommend);
