import React, { memo } from "react";

import LJTopBanner from "./c-cpns/top-banner";
import LJHotRecommend from "./c-cpns/hot-recommend";
import LJNewAlbum from "./c-cpns/new-album";
import LJRankingList from "./c-cpns/ranking-list";
import LJUserLogin from "./c-cpns/user-login";
import LJSettleSinger from "./c-cpns/settle-singer";
import LJHotRadio from "./c-cpns/hot-radio";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function LJRecommend(props) {
  return (
    <RecommendWrapper>
      <LJTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <LJHotRecommend />
          <LJNewAlbum />
          <LJRankingList />
        </RecommendLeft>

        <RecommendRight>
          <LJUserLogin />
          <LJSettleSinger />
          <LJHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(LJRecommend);
