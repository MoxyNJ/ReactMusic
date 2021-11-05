import React, { useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getRadioRecommend } from "../../store/actionCreators";

import LJThemeHeader from "@/components/theme-header";
import LJRadioRecomendCover from "@/components/radio-recommend-cover";
import { RecommendWrapper } from "./style";

export default memo(function LJRadioRecommend() {
  // redux
  const { currentId = 0, recommends = [] } = useSelector(
    (state) => ({
      currentId: state.getIn(["djRadio", "currentId"]),
      recommends: state.getIn(["djRadio", "recommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // hooks
  useEffect(() => {
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId]);
  return (
    <RecommendWrapper>
      <LJThemeHeader title="优秀新电台" />
      <div className="radio-list">
        {recommends.slice(0, 5).map((item) => {
          return <LJRadioRecomendCover info={item} key={item.id} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
