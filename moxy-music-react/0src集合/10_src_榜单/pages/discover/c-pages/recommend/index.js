import React, { memo } from "react";

import LJTopBanner from "./c-cpns/top-banner";
import LJHotRecommend from "./c-cpns/hot-recommend";
import LJNewAlbum from "./c-cpns/new-album";
import LJRankingList from "./c-cpns/ranking-list";

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
          <h2>你好，见到你很高兴</h2>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(LJRecommend);
