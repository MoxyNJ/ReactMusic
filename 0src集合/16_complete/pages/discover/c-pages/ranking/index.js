import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getListTitleAction } from "./store/actionCreators";

import LJRankingTitle from "./c-cpns/rank-title";
import LJRankingHeader from "./c-cpns/rank-header";
import LJRankingList from "./c-cpns/rank-list";

import { RankingWrapper, RankingLeft, RankingRight } from "./style";
export default memo(function LJRanking() {
  // redux hooks
  const dispatch = useDispatch();

  // react hooks
  useEffect(() => {
    dispatch(getListTitleAction());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2-1">
      <RankingLeft>
        <LJRankingTitle />
      </RankingLeft>
      <RankingRight>
        <LJRankingHeader />
        <LJRankingList />
      </RankingRight>
    </RankingWrapper>
  );
});
