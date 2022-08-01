import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getRankingListAction } from "../../store/actionCreators";

import LJThemeHeaderRCM from "@/components/theme-header-rcm";
import LJTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function LJRankingList() {
  // component state：

  // redux hooks：          get state dispatch
  const { upRankingList, newRankingList, orgRankingList } = useSelector(
    (state) => ({
      upRankingList: state.getIn(["recommend", "upRankingList"]),
      newRankingList: state.getIn(["recommend", "newRankingList"]),
      orgRankingList: state.getIn(["recommend", "orgRankingList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks：          react hooks
  useEffect(() => {
    dispatch(getRankingListAction(19723756));
    dispatch(getRankingListAction(3779629));
    dispatch(getRankingListAction(2884035));
  }, [dispatch]);

  // other function：       组件内部的其他逻辑

  return (
    <RankingWrapper>
      <LJThemeHeaderRCM title="榜单" />
      <div className="tops">
        <LJTopRanking info={upRankingList} />
        <LJTopRanking info={newRankingList} />
        <LJTopRanking info={orgRankingList} />
      </div>
      <div></div>
    </RankingWrapper>
  );
});
