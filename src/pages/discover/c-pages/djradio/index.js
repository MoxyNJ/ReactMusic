import React, { memo } from "react";

import LJRadioCategory from "./c-cpns/radio-category";
import LJRadioRecommend from "./c-cpns/radio-recommend";
import LJRadioRanking from "./c-cpns/radio-ranking";
import { DjRadioWrapper } from "./style";

export default memo(function LJDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <LJRadioCategory />
      <LJRadioRecommend />
      <LJRadioRanking />
    </DjRadioWrapper>
  );
});
