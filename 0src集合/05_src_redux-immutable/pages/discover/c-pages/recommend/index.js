import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function LJRecommend(props) {
  // 拿到state
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  // 拿到dispatch
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    console.log(dispatch);
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>LJRecommend</h2>
      <h2>{topBanners.length}</h2>
    </div>
  );
}

export default memo(LJRecommend);
