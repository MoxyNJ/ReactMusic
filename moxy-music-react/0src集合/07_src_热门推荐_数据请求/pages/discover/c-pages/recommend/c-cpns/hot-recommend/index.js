import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";

import LJThemeHeaderRCM from "@/components/theme-header-rcm";

import { HotRecommendWrapper } from "./style";
import { getHotRecommendsAction } from "../../store/actionCreators";

export default memo(function LJHotRecommend() {
  // component state
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  // other function

  return (
    <div>
      <HotRecommendWrapper>
        <LJThemeHeaderRCM
          title="热门推荐"
          keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        ></LJThemeHeaderRCM>
        <div className="recommend-list">
          {hotRecommends.map((item, index) => {
            return <div>{item.name}</div>;
          })}
        </div>
      </HotRecommendWrapper>
    </div>
  );
});
