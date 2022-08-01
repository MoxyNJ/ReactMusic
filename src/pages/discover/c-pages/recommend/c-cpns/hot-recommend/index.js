import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import { getHotRecommendsAction } from "../../store/actionCreators";

import LJThemeHeaderRCM from "@/components/theme-header-rcm";
import LJSongsCover from "@/components/songs-cover";

import { HotRecommendWrapper } from "./style";
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
            return <LJSongsCover key={item.id} info={item} size={"140"} />;
          })}
        </div>
      </HotRecommendWrapper>
    </div>
  );
});
