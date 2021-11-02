import React, { memo } from "react";

import LJRankingTitle from "./c-cpns/rank-title";
import LJRankingHeader from "./c-cpns/rank-header";
import LJRankingList from "./c-cpns/rank-list";

import { RankingWrapper, RankingLeft, RankingRight } from "./style";
export default memo(function LJRanking() {
  return (
    <RankingWrapper className="wrap-v2-1">
      <RankingLeft>
        <LJRankingTitle />
        <LJRankingTitle />
        <LJRankingTitle />
      </RankingLeft>
      <RankingRight>
        <LJRankingHeader />
        <LJRankingList />
      </RankingRight>
    </RankingWrapper>
  );
});
