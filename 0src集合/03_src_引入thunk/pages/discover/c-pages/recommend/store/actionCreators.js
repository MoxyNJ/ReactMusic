import * as actionTypes from "./constants";

import { getTopBanners } from "@/services/recommend";

// 更新组件的 Banner 信息
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// 从网络异步获取 Banner 信息
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
